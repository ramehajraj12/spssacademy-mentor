"use client";

import Link from "next/link";
import {
  ArrowLeft,
  BarChart3,
  BookOpenCheck,
  BrainCircuit,
  FileText,
  GraduationCap,
  LineChart,
  Send,
  ShieldCheck,
  Upload
} from "lucide-react";
import { FormEvent, useMemo, useRef, useState } from "react";

type Message = {
  role: "mentor" | "user";
  content: string;
};

const quickPrompts = [
  "Kam të dhëna në Excel. Cilin test duhet ta përdor?",
  "Si ta interpretoj Cronbach's Alpha?",
  "Kam bërë regresion linear. Si ta raportoj sipas APA 7?",
  "Si të ndërtoj hipotezat për temën time?"
];

const allowedTopics = [
  "SPSS",
  "analizë statistikore",
  "metodologji hulumtimi",
  "hipoteza",
  "pyetësorë",
  "APA 7",
  "interpretim rezultatesh"
];

function buildMentorAnswer(input: string) {
  const text = input.toLowerCase();

  if (
    !/(spss|statistik|analiz|metodolog|hulumtim|hipotez|pyet[eë]sor|apa|cronbach|alpha|anova|regres|korelacion|excel|t[- ]?test|chi|faktorial|deskriptiv|inferencial)/i.test(
      input
    )
  ) {
    return `Faleminderit për pyetjen. Unë jam i fokusuar vetëm në SPSS, analizë statistikore, metodologji të hulumtimit shkencor dhe raportim sipas APA 7.

Mund ta riformulosh pyetjen duke përfshirë, për shembull: llojin e variablave, numrin e grupeve, qëllimin e analizës, hipotezën ose output-in nga SPSS.`;
  }

  if (text.includes("cronbach") || text.includes("alpha")) {
    return `Për Cronbach's Alpha, kontrollo këto pika:

1. Qëllimi: vlerëson konsistencën e brendshme të një shkalle ose grupi itemesh.
2. Interpretimi orientues: vlera më të larta zakonisht tregojnë besueshmëri më të mirë, por duhet parë edhe konteksti teorik, numri i itemeve dhe cilësia e pyetjeve.
3. Në SPSS: Analyze > Scale > Reliability Analysis.
4. Kontrollo tabelën "Item-Total Statistics" për iteme që mund ta ulin besueshmërinë.
5. Raportim APA 7: "Shkalla tregoi konsistencë të brendshme të pranueshme, Cronbach's alpha = .XX."

Kujdes: mos e përdor alpha si provë të vetme për validitetin e instrumentit.`;
  }

  if (text.includes("regres")) {
    return `Për regresion linear në SPSS, ndiq këtë strukturë:

1. Identifiko variablën e varur dhe variablat e pavarura.
2. Kontrollo supozimet: lineariteti, normaliteti i mbetjeve, homoskedasticiteti, multikolineariteti dhe outliers.
3. Në SPSS: Analyze > Regression > Linear.
4. Interpreto Model Summary, ANOVA dhe Coefficients.
5. Raportim APA 7: përfshi R², F, p, koeficientët B/β, t dhe p për prediktorët kryesorë.

Shembull formulimi: "Modeli i regresionit ishte statistikisht domethënës, F(df1, df2) = X.XX, p = .XXX, dhe shpjegoi X% të variancës në variablën e varur."`;
  }

  if (text.includes("anova")) {
    return `Për ANOVA në SPSS:

1. Përdore kur krahason mesataret e tri ose më shumë grupeve.
2. Kontrollo normalitetin, homogjenitetin e variancave dhe pavarësinë e observimeve.
3. Në SPSS: Analyze > Compare Means > One-Way ANOVA.
4. Nëse rezultati është domethënës, përdor post-hoc tests, si Tukey ose Games-Howell sipas supozimeve.
5. Raportim APA 7: "U gjet një dallim domethënës ndërmjet grupeve, F(df1, df2) = X.XX, p = .XXX, η² = .XX."`;
  }

  if (text.includes("korelacion") || text.includes("correlation")) {
    return `Për korelacion:

1. Përdor Pearson kur variablat janë interval/ratio dhe supozimet janë të pranueshme.
2. Përdor Spearman kur të dhënat janë ordinal, jo normale ose marrëdhënia është monotone.
3. Në SPSS: Analyze > Correlate > Bivariate.
4. Interpreto drejtimin, forcën dhe domethënien statistikore.
5. Raportim APA 7: "U gjet korelacion pozitiv ndërmjet X dhe Y, r = .XX, p = .XXX."`;
  }

  if (text.includes("hipotez")) {
    return `Për ndërtimin e hipotezave:

1. Fillo me problemin kërkimor dhe objektivin e studimit.
2. Përcakto variablat kryesore dhe marrëdhënien e pritshme.
3. Formulo pyetjen kërkimore në mënyrë të matshme.
4. Shkruaj hipotezën alternative dhe, kur duhet, hipotezën zero.
5. Lidhe hipotezën me analizën statistikore që mund ta testojë.

Shembull: "H1: Ekziston një lidhje statistikisht domethënëse ndërmjet motivimit akademik dhe performancës së studentëve."`;
  }

  if (text.includes("excel") || text.includes("test")) {
    return `Për të zgjedhur testin e duhur, më duhen këto informacione:

1. Cila është variabla e varur?
2. Cilat janë variablat e pavarura ose grupet krahasuese?
3. Çfarë niveli matjeje kanë variablat: nominal, ordinal, interval apo ratio?
4. Sa grupe po krahason?
5. A janë të dhënat të pavarura apo të përsëritura?

Udhëzim orientues:
- Dy grupe të pavarura: independent-samples t-test ose Mann-Whitney U.
- Dy matje të lidhura: paired-samples t-test ose Wilcoxon.
- Tri ose më shumë grupe: ANOVA ose Kruskal-Wallis.
- Marrëdhënie ndërmjet variablave: korelacion ose regresion.`;
  }

  if (text.includes("apa")) {
    return `Për raportim sipas APA 7:

1. Raporto testin statistik, shkallët e lirisë, vlerën statistikore, p-value dhe madhësinë e efektit kur është e përshtatshme.
2. Përfshi interpretim të shkurtër, jo vetëm numra.
3. Përdor formatin akademik me simbole statistikore të sakta.
4. Mos e mbështet përfundimin vetëm te p-value; lidhe rezultatin me pyetjen kërkimore.

Nëse më jep output-in nga SPSS, mund ta strukturoj në një paragraf akademik sipas APA 7.`;
  }

  return `Mund ta trajtojmë në mënyrë akademike. Për një përgjigje më të saktë, më dërgo:

1. Qëllimin e analizës.
2. Variablat dhe nivelin e matjes.
3. Numrin e grupeve ose mostrave.
4. Nëse ke output nga SPSS, vlerat kryesore të tabelës.
5. Çfarë dëshiron: zgjedhje testi, syntax, interpretim apo raportim APA 7.

Synimi im është të ofroj përgjigje të strukturuara, të udhëhequra akademikisht dhe të dizajnuara për të mbështetur analizën kritike.`;
}

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "mentor",
      content:
        "Mirë se erdhe në SPSS Academy Mentor. Më shkruaj pyetjen tënde për SPSS, analizë statistikore, metodologji hulumtimi ose raportim APA 7."
    }
  ]);
  const [input, setInput] = useState("");
  const [uploadedFile, setUploadedFile] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const lastTopic = useMemo(() => {
    const userMessages = messages.filter((message) => message.role === "user");
    const latest = userMessages[userMessages.length - 1];
    return latest ? latest.content.slice(0, 80) : "Pyetje akademike";
  }, [messages]);

  function sendMessage(value = input) {
    const clean = value.trim();
    if (!clean) return;

    const nextMessages: Message[] = [
      ...messages,
      { role: "user", content: clean },
      { role: "mentor", content: buildMentorAnswer(clean) }
    ];

    setMessages(nextMessages);
    setInput("");
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    sendMessage();
  }

  return (
    <main className="min-h-screen bg-academy-mist text-academy-ink">
      <header className="border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <Link href="/" className="flex items-center gap-3 font-semibold">
            <span className="grid size-10 place-items-center rounded-lg bg-academy-navy text-white">
              <BarChart3 size={21} />
            </span>
            <span>SPSS Academy Mentor</span>
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50"
          >
            <ArrowLeft size={16} />
            Kthehu
          </Link>
        </div>
      </header>

      <section className="mx-auto grid max-w-7xl gap-6 px-5 py-6 lg:grid-cols-[320px_1fr] lg:px-8">
        <aside className="space-y-5">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
            <div className="mb-4 grid size-12 place-items-center rounded-xl bg-violet-50 text-academy-violet">
              <BrainCircuit size={25} />
            </div>
            <h1 className="text-2xl font-semibold">Chat akademik</h1>
            <p className="mt-3 leading-7 text-slate-600">
              Fokus ekskluziv në SPSS, statistika, metodologji kërkimore dhe
              raportim APA 7.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
            <h2 className="font-semibold">Fushat e mbuluara</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {allowedTopics.map((topic) => (
                <span
                  key={topic}
                  className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700"
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
            <h2 className="font-semibold">Shembuj të shpejtë</h2>
            <div className="mt-4 grid gap-2">
              {quickPrompts.map((prompt) => (
                <button
                  key={prompt}
                  type="button"
                  onClick={() => sendMessage(prompt)}
                  className="rounded-lg border border-slate-200 px-3 py-3 text-left text-sm leading-6 text-slate-700 transition hover:border-academy-violet hover:bg-violet-50"
                >
                  {prompt}
                </button>
              ))}
            </div>
          </div>
        </aside>

        <section className="flex min-h-[calc(100vh-130px)] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft">
          <div className="border-b border-slate-200 bg-white px-5 py-4">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-academy-violet">
                  Mentor virtual akademik
                </p>
                <h2 className="mt-1 text-xl font-semibold">
                  {lastTopic}
                </h2>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <ShieldCheck className="text-academy-violet" size={18} />
                Përgjigje të strukturuara dhe kontroll kritik
              </div>
            </div>
          </div>

          <div className="flex-1 space-y-4 overflow-y-auto bg-slate-50 px-4 py-5 md:px-6">
            {messages.map((message, index) => (
              <div
                key={`${message.role}-${index}`}
                className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-3xl whitespace-pre-line rounded-2xl px-5 py-4 leading-7 shadow-sm ${
                    message.role === "user"
                      ? "bg-academy-violet text-white"
                      : "border border-slate-200 bg-white text-slate-700"
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-slate-200 bg-white p-4">
            {uploadedFile && (
              <div className="mb-3 inline-flex items-center gap-2 rounded-lg bg-violet-50 px-3 py-2 text-sm font-medium text-academy-violet">
                <FileText size={16} />
                {uploadedFile}
              </div>
            )}
            <form onSubmit={onSubmit} className="flex flex-col gap-3 md:flex-row">
              <input
                ref={fileInputRef}
                type="file"
                className="hidden"
                accept=".sav,.zsav,.xlsx,.xls,.csv,.doc,.docx,.pdf,.ppt,.pptx"
                onChange={(event) => {
                  const file = event.target.files?.[0];
                  if (!file) return;
                  setUploadedFile(file.name);
                  setMessages((current) => [
                    ...current,
                    {
                      role: "mentor",
                      content:
                        "Skedari u vendos në ndërfaqe. Në këtë version lokal mund të shkruash çfarë përmban output-i ose tabela kryesore, dhe unë do ta strukturoj interpretimin akademik."
                    }
                  ]);
                }}
              />
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 px-4 py-3 font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                <Upload size={18} />
                Skedar
              </button>
              <input
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Shkruaj pyetjen për SPSS, testin statistikor, output-in ose raportimin APA 7..."
                className="min-h-12 flex-1 rounded-lg border border-slate-200 px-4 py-3 outline-none transition focus:border-academy-violet"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-academy-violet px-5 py-3 font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-[#5749ee]"
              >
                <Send size={18} />
                Dërgo
              </button>
            </form>
            <div className="mt-3 grid gap-2 text-xs leading-5 text-slate-500 md:grid-cols-3">
              <span className="inline-flex items-center gap-2">
                <BookOpenCheck size={15} /> Udhëzim akademik
              </span>
              <span className="inline-flex items-center gap-2">
                <LineChart size={15} /> Interpretim statistik
              </span>
              <span className="inline-flex items-center gap-2">
                <GraduationCap size={15} /> Raportim APA 7
              </span>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
