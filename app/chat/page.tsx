"use client";

import Link from "next/link";
import {
  ArrowLeft,
  BarChart3,
  BookOpenCheck,
  BrainCircuit,
  CheckCircle2,
  ClipboardList,
  FileText,
  GraduationCap,
  LineChart,
  Loader2,
  MessageSquareText,
  Send,
  ShieldCheck,
  Sparkles,
  Upload
} from "lucide-react";
import {
  FormEvent,
  KeyboardEvent,
  useEffect,
  useMemo,
  useRef,
  useState
} from "react";

type Message = {
  role: "mentor" | "user";
  content: string;
  meta?: string;
};

type Intent =
  | "cronbach"
  | "regression"
  | "anova"
  | "correlation"
  | "test-choice"
  | "apa"
  | "hypothesis"
  | "methodology"
  | "descriptive"
  | "factor"
  | "questionnaire"
  | "normality"
  | "missing"
  | "syntax"
  | "general";

const quickPrompts = [
  "Kam dy grupe dhe dua të krahasoj mesataren. Cilin test përdor?",
  "Si ta raportoj regresionin linear sipas APA 7?",
  "A është Cronbach Alpha .68 i pranueshëm?",
  "Më ndihmo të ndërtoj hipotezat për temën time"
];

const modeCards = [
  {
    icon: ClipboardList,
    title: "E kupton pyetjen siç shkruhet",
    text: "Nuk kërkon formulim perfekt; identifikon qëllimin dhe të orienton."
  },
  {
    icon: LineChart,
    title: "Analizë statistikore",
    text: "Sugjeron teste, supozime, interpretim dhe hapa në SPSS."
  },
  {
    icon: GraduationCap,
    title: "Raportim akademik",
    text: "Kthen rezultatet në formulim të qartë dhe të kujdesshëm sipas APA 7."
  }
];

function normalize(value: string) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/ç/g, "c")
    .replace(/ë/g, "e");
}

function detectIntent(input: string): Intent {
  const text = normalize(input);

  if (/(cronbach|alpha|alfa|besueshmeri|reliability)/.test(text)) return "cronbach";
  if (/(regres|regression|predikt|parashik|r2|r²|koeficient|beta)/.test(text)) return "regression";
  if (/(anova|variance|varianc|post hoc|tukey|games)/.test(text)) return "anova";
  if (/(korelacion|correlation|pearson|spearman|lidhje)/.test(text)) return "correlation";
  if (/(cilin test|cfare test|cili test|test duhet|krahasoj|grupe|mesatare|excel|te dhena)/.test(text)) return "test-choice";
  if (/(apa|raportoj|raportim|shkruaj rezultatin|paragraf)/.test(text)) return "apa";
  if (/(hipotez|pyetje kerkimore|research question|objektiv)/.test(text)) return "hypothesis";
  if (/(metodolog|moster|kampion|dizajn|instrument|validitet|variabla)/.test(text)) return "methodology";
  if (/(deskriptiv|frekuenc|mesatare|devijim standard|minimum|maximum)/.test(text)) return "descriptive";
  if (/(faktorial|factor|kmo|bartlett|rotacion|komponent)/.test(text)) return "factor";
  if (/(pyetesor|shkalle|item|ankete|likert)/.test(text)) return "questionnaire";
  if (/(normalitet|shapiro|kolmogorov|histogram|skew|kurtosis)/.test(text)) return "normality";
  if (/(missing|munguar|vlera te munguara|pa pergjigje)/.test(text)) return "missing";
  if (/(syntax|komande|kod|sintaks)/.test(text)) return "syntax";

  return "general";
}

function extractNumbers(input: string) {
  return input.match(/-?\d+([.,]\d+)?/g)?.slice(0, 8).join(", ") || "";
}

function buildAnswer(input: string) {
  const intent = detectIntent(input);
  const numbers = extractNumbers(input);
  const understoodQuestion = `Pyetja që kuptova: "${input}"`;
  const contextLine = numbers
    ? `Vlerat që përmende: ${numbers}. Do t'i trajtoj si orientuese, sepse interpretimi varet nga konteksti dhe dizajni i studimit.`
    : "Nëse ke vlera nga SPSS, mund t'i shtosh në mesazhin tjetër dhe do t'i integroj në interpretim.";

  const templates: Record<Intent, { meta: string; content: string }> = {
    cronbach: {
      meta: "Besueshmëri e shkallës",
      content: `${understoodQuestion}

E kuptova si pyetje për Cronbach's Alpha dhe besueshmërinë e instrumentit.

1. Çfarë mat: Cronbach's Alpha vlerëson konsistencën e brendshme të itemeve që supozohet të matin të njëjtin konstrukt.
2. Si lexohet: vlerat më të larta zakonisht tregojnë konsistencë më të mirë, por interpretimi varet nga numri i itemeve, fusha dhe qëllimi i shkallës.
3. Çfarë të kontrollosh në SPSS: tabelën Reliability Statistics dhe Item-Total Statistics.
4. Kujdes metodologjik: alpha nuk provon vetë validitetin; tregon vetëm një aspekt të besueshmërisë.
5. Raportim APA 7: “Shkalla tregoi konsistencë të brendshme të pranueshme, Cronbach's alpha = .XX.”

${contextLine}`
    },
    regression: {
      meta: "Regresion",
      content: `${understoodQuestion}

E kuptova si pyetje për regresion.

1. Përcakto variablën e varur dhe prediktorët.
2. Kontrollo supozimet: linearitet, normalitet i mbetjeve, homoskedasticitet, multikolinearitet dhe outliers.
3. Në SPSS: Analyze > Regression > Linear.
4. Interpreto Model Summary për R², ANOVA për domethënien e modelit dhe Coefficients për prediktorët.
5. Raportim APA 7: përfshi R², F, df, p, B ose β, t dhe p.

Shembull: “Modeli i regresionit ishte statistikisht domethënës, F(df1, df2) = X.XX, p = .XXX, duke shpjeguar X% të variancës në variablën e varur.”

${contextLine}`
    },
    anova: {
      meta: "Krahasim grupesh",
      content: `${understoodQuestion}

E kuptova si pyetje për ANOVA ose krahasim mesataresh.

1. ANOVA përdoret kur krahason mesataret e tri ose më shumë grupeve.
2. Kontrollo normalitetin, homogjenitetin e variancave dhe pavarësinë e observimeve.
3. Në SPSS: Analyze > Compare Means > One-Way ANOVA.
4. Nëse p < .05, shiko post-hoc tests për të kuptuar cilat grupe dallojnë.
5. Raportim APA 7: “U gjet dallim domethënës ndërmjet grupeve, F(df1, df2) = X.XX, p = .XXX.”

Nëse ke vetëm dy grupe, zakonisht mjafton t-test ose alternativa jo-parametrike.`
    },
    correlation: {
      meta: "Korelacion",
      content: `${understoodQuestion}

E kuptova si pyetje për lidhjen ndërmjet variablave.

1. Pearson përdoret kur variablat janë interval/ratio dhe supozimet janë të pranueshme.
2. Spearman përdoret kur të dhënat janë ordinal, jo normale ose marrëdhënia është monotone.
3. Në SPSS: Analyze > Correlate > Bivariate.
4. Interpreto drejtimin, forcën dhe domethënien statistikore.
5. Raportim APA 7: “U gjet korelacion pozitiv ndërmjet X dhe Y, r = .XX, p = .XXX.”

${contextLine}`
    },
    "test-choice": {
      meta: "Zgjedhje testi",
      content: `${understoodQuestion}

E kuptova si pyetje për zgjedhjen e testit statistikor.

Mënyra më e sigurt është kjo:

1. Identifiko variablën e varur.
2. Shiko nivelin e matjes: nominal, ordinal, interval apo ratio.
3. Shiko numrin e grupeve: një, dy, tri apo më shumë.
4. Shiko nëse grupet janë të pavarura apo të lidhura.
5. Kontrollo supozimet për normalitet dhe varianca.

Orientim i shpejtë:
- Dy grupe të pavarura: independent-samples t-test ose Mann-Whitney U.
- Dy matje të lidhura: paired-samples t-test ose Wilcoxon.
- Tri ose më shumë grupe: ANOVA ose Kruskal-Wallis.
- Marrëdhënie ndërmjet variablave: korelacion ose regresion.
- Variabla kategorike: Chi-square.

Në mesazhin tjetër më shkruaj variablat dhe grupet, dhe ta zgjedh testin më saktë.`
    },
    apa: {
      meta: "APA 7",
      content: `${understoodQuestion}

E kuptova si kërkesë për raportim akademik sipas APA 7.

Struktura e mirë është:

1. Emërto testin statistikor.
2. Jep vlerën statistikore, df, p-value dhe madhësinë e efektit kur është e përshtatshme.
3. Jep interpretim të shkurtër në lidhje me hipotezën.
4. Mos e tepro me përfundime që nuk mbështeten nga të dhënat.

Model formulimi:
“Rezultatet treguan se [analiza/testi] ishte statistikisht domethënës, [statistika] = X.XX, p = .XXX, duke sugjeruar se [interpretimi akademik].”

Dërgo output-in nga SPSS dhe e kthej në paragraf të plotë APA 7.`
    },
    hypothesis: {
      meta: "Hipoteza",
      content: `${understoodQuestion}

E kuptova si pyetje për ndërtim hipotezash.

1. Fillo nga problemi kërkimor.
2. Përcakto variablat kryesore.
3. Vendos drejtimin e marrëdhënies ose dallimit që pret.
4. Formulo hipotezën alternative dhe hipotezën zero.
5. Lidhe hipotezën me testin statistikor.

Shembull:
H1: Ekziston lidhje statistikisht domethënëse ndërmjet motivimit akademik dhe performancës së studentëve.
H0: Nuk ekziston lidhje statistikisht domethënëse ndërmjet motivimit akademik dhe performancës së studentëve.

Nëse ma jep temën, ta formuloj në mënyrë më konkrete.`
    },
    methodology: {
      meta: "Metodologji",
      content: `${understoodQuestion}

E kuptova si pyetje metodologjike.

Përgjigjja duhet ndërtuar me këto elemente:

1. Qëllimi i studimit.
2. Dizajni kërkimor: kuantitativ, cilësor ose i përzier.
3. Popullata dhe mostra.
4. Instrumenti matës dhe variablat.
5. Procedura e mbledhjes së të dhënave.
6. Analizat statistikore të planifikuara në SPSS.
7. Kufizimet dhe konsideratat etike.

Nëse më shkruan temën dhe objektivin, ta kthej në tekst metodologjik akademik.`
    },
    descriptive: {
      meta: "Statistikë deskriptive",
      content: `${understoodQuestion}

E kuptova si pyetje për statistikë deskriptive.

Në SPSS zakonisht raporton:

1. Frekuenca dhe përqindje për variabla kategorike.
2. Mesatare dhe devijim standard për variabla numerike.
3. Minimum, maximum dhe numrin valid të rasteve.
4. Grafikë: bar chart për kategori, histogram për variabla numerike.

Raportim akademik:
“Mesatarja e variablës X ishte M = X.XX, SD = X.XX, duke treguar [interpretim i shkurtër].”`
    },
    factor: {
      meta: "Analizë faktoriale",
      content: `${understoodQuestion}

E kuptova si pyetje për analizë faktoriale.

Kontrollo:

1. KMO për përshtatshmërinë e mostrës.
2. Bartlett's Test për korrelacionet ndërmjet itemeve.
3. Communalities dhe factor loadings.
4. Numrin e faktorëve dhe metodën e rotacionit.
5. Interpretimin teorik të faktorëve, jo vetëm rezultatet numerike.

Nëse më jep KMO, Bartlett dhe loadings kryesore, ta ndihmoj me interpretim akademik.`
    },
    questionnaire: {
      meta: "Pyetësor",
      content: `${understoodQuestion}

E kuptova si pyetje për pyetësor ose shkallë matëse.

Sugjerim strukture:

1. Përcakto konstruktin që mat.
2. Ndaje në dimensione teorike.
3. Formulo iteme të qarta, njëdimensionale dhe jo të dykuptimta.
4. Përdor shkallë Likert kur mat qëndrime, perceptime ose pajtim.
5. Testo besueshmërinë me Cronbach's Alpha dhe, kur duhet, strukturën me analizë faktoriale.

Mund të më japësh temën dhe unë të propozoj dimensione dhe iteme.`
    },
    normality: {
      meta: "Normalitet",
      content: `${understoodQuestion}

E kuptova si pyetje për normalitetin.

Në SPSS kontrollo:

1. Shapiro-Wilk për mostra më të vogla.
2. Kolmogorov-Smirnov për mostra më të mëdha, me kujdes në interpretim.
3. Histogram, Q-Q plot, skewness dhe kurtosis.
4. Outliers që mund të ndikojnë shpërndarjen.

Kujdes: p-value nuk duhet interpretuar vetëm. Shiko edhe grafikët dhe madhësinë e mostrës.

Nëse normaliteti nuk mbahet, mund të përdorësh alternativa jo-parametrike ose transformime, sipas rastit.`
    },
    missing: {
      meta: "Vlera të munguara",
      content: `${understoodQuestion}

E kuptova si pyetje për vlera të munguara.

Hapat:

1. Shiko sa përqind mungojnë për secilën variabël.
2. Kontrollo nëse mungesa është rastësore apo e lidhur me ndonjë grup.
3. Mos fshi raste automatikisht pa arsyetim.
4. Për mungesa të vogla mund të përdoret listwise/pairwise deletion, varësisht analizës.
5. Për mungesa më serioze, shqyrto imputim ose raportim të qartë të kufizimit.

Në SPSS mund të fillosh me Analyze > Descriptive Statistics > Frequencies ose Missing Value Analysis.`
    },
    syntax: {
      meta: "SPSS Syntax",
      content: `${understoodQuestion}

E kuptova si kërkesë për syntax në SPSS.

Mund të gjeneroj syntax, por më duhen:

1. Emrat e variablave.
2. Lloji i analizës.
3. Grupet ose prediktorët.
4. Çfarë output-i dëshiron.

Shembull për descriptives:

DESCRIPTIVES VARIABLES=variabla1 variabla2
  /STATISTICS=MEAN STDDEV MIN MAX.

Dërgo emrat realë të variablave dhe ta përshtas syntax-in.`
    },
    general: {
      meta: "Përgjigje e strukturuar",
      content: `${understoodQuestion}

E kuptova pyetjen si kërkesë për orientim akademik.

Përgjigjja ime e parë:

1. Nëse po kërkon analizë statistikore, fillo nga variablat, niveli i matjes dhe pyetja kërkimore.
2. Nëse po kërkon metodologji, sqaro dizajnin, mostrën, instrumentin dhe procedurën.
3. Nëse po kërkon raportim, dërgo rezultatin ose tabelën kryesore dhe e kthejmë në tekst akademik.
4. Nëse pyetja lidhet me SPSS, mund të të jap edhe rrugën në menu ose syntax.

Më shkruaj pak më konkretisht çfarë ke përpara: temën, variablat, output-in ose problemin. Do të të përgjigjem drejtpërdrejt dhe me strukturë.`
    }
  };

  return templates[intent];
}

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "mentor",
      meta: "Mirëseardhje",
      content:
        "Mirë se erdhe. Shkruaje pyetjen ashtu si e ke në mendje: për SPSS, metodologji, hipoteza, test statistikor, output ose raportim APA 7. Do ta interpretoj qëllimin dhe do të të përgjigjem me hapa të qartë."
    }
  ]);
  const [input, setInput] = useState("");
  const [uploadedFile, setUploadedFile] = useState("");
  const [isThinking, setIsThinking] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const endRef = useRef<HTMLDivElement>(null);

  const lastTopic = useMemo(() => {
    const userMessages = messages.filter((message) => message.role === "user");
    const latest = userMessages[userMessages.length - 1];
    return latest ? latest.content.slice(0, 72) : "Pyetje akademike";
  }, [messages]);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isThinking]);

  function sendMessage(value: string) {
    const clean = value.trim();
    if (!clean) return;

    const answer = buildAnswer(clean);
    const userMessage: Message = { role: "user", content: clean };
    const mentorMessage: Message = {
      role: "mentor",
      meta: answer.meta,
      content: answer.content
    };

    setMessages((current) => [...current, userMessage]);
    setInput("");
    setIsThinking(true);

    window.setTimeout(() => {
      setMessages((current) => [...current, mentorMessage]);
      setIsThinking(false);
    }, 180);
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    sendMessage(input);
  }

  function onKeyDown(event: KeyboardEvent<HTMLTextAreaElement>) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      sendMessage(input);
    }
  }

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_12%_8%,rgba(101,87,255,0.16),transparent_32%),linear-gradient(180deg,#f7f9fd,#eef3fb)] text-academy-ink">
      <header className="sticky top-0 z-40 border-b border-white/70 bg-white/78 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <Link href="/" className="flex items-center gap-3 font-semibold">
            <span className="grid size-10 place-items-center rounded-xl bg-academy-navy text-white shadow-soft">
              <BarChart3 size={21} />
            </span>
            <span>SPSS Academy Mentor</span>
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:bg-slate-50"
          >
            <ArrowLeft size={16} />
            Kthehu
          </Link>
        </div>
      </header>

      <section className="mx-auto grid max-w-7xl gap-6 px-5 py-6 lg:grid-cols-[340px_1fr] lg:px-8">
        <aside className="space-y-5">
          <div className="rounded-[28px] bg-[linear-gradient(145deg,#07132d,#102f66_58%,#6557ff)] p-6 text-white shadow-glow">
            <div className="mb-5 grid size-12 place-items-center rounded-2xl bg-white/14 text-white">
              <BrainCircuit size={26} />
            </div>
            <h1 className="text-2xl font-semibold">Chat akademik</h1>
            <p className="mt-3 leading-7 text-white/75">
              Shkruaj lirshëm. Mentori e kupton qëllimin, jep përgjigje të
              strukturuar dhe të orienton drejt analizës.
            </p>
            <div className="mt-5 grid grid-cols-3 gap-2 text-center text-xs text-white/78">
              <span className="glass-panel p-2">SPSS</span>
              <span className="glass-panel p-2">APA 7</span>
              <span className="glass-panel p-2">Metodë</span>
            </div>
          </div>

          <div className="grid gap-3">
            {modeCards.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
              >
                <div className="flex items-start gap-3">
                  <div className="grid size-10 shrink-0 place-items-center rounded-xl bg-violet-50 text-academy-violet">
                    <Icon size={20} />
                  </div>
                  <div>
                    <h2 className="font-semibold">{title}</h2>
                    <p className="mt-1 text-sm leading-6 text-slate-600">{text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
            <h2 className="font-semibold">Pyetje të shpejta</h2>
            <div className="mt-4 grid gap-2">
              {quickPrompts.map((prompt) => (
                <button
                  key={prompt}
                  type="button"
                  onClick={() => sendMessage(prompt)}
                  className="rounded-xl border border-slate-200 px-3 py-3 text-left text-sm leading-6 text-slate-700 transition hover:-translate-y-0.5 hover:border-academy-violet hover:bg-violet-50"
                >
                  {prompt}
                </button>
              ))}
            </div>
          </div>
        </aside>

        <section className="flex min-h-[calc(100vh-132px)] flex-col overflow-hidden rounded-[28px] border border-white bg-white/86 shadow-soft backdrop-blur">
          <div className="border-b border-slate-200 bg-white/90 px-5 py-4">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-academy-violet">
                  Mentor virtual akademik
                </p>
                <h2 className="mt-1 text-xl font-semibold">{lastTopic}</h2>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <ShieldCheck className="text-academy-violet" size={18} />
                Përgjigje me strukturë, jo refuzim
              </div>
            </div>
          </div>

          <div className="chat-scroll flex-1 space-y-4 overflow-y-auto bg-[linear-gradient(180deg,#f8fafc,#eef3fb)] px-4 py-5 md:px-6">
            {messages.map((message, index) => (
              <div
                key={`${message.role}-${index}`}
                className={`message-pop flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-3xl rounded-3xl px-5 py-4 leading-7 shadow-sm ${
                    message.role === "user"
                      ? "bg-academy-violet text-white"
                      : "border border-slate-200 bg-white text-slate-700"
                  }`}
                >
                  {message.meta && message.role === "mentor" && (
                    <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-violet-50 px-3 py-1 text-xs font-semibold text-academy-violet">
                      <Sparkles size={13} />
                      {message.meta}
                    </div>
                  )}
                  <div className="whitespace-pre-line">{message.content}</div>
                </div>
              </div>
            ))}

            {isThinking && (
              <div className="message-pop flex justify-start">
                <div className="inline-flex items-center gap-3 rounded-3xl border border-slate-200 bg-white px-5 py-4 text-slate-600 shadow-sm">
                  <Loader2 className="animate-spin text-academy-violet" size={18} />
                  Po e analizoj pyetjen...
                </div>
              </div>
            )}
            <div ref={endRef} />
          </div>

          <div className="border-t border-slate-200 bg-white p-4">
            {uploadedFile && (
              <div className="mb-3 inline-flex items-center gap-2 rounded-xl bg-violet-50 px-3 py-2 text-sm font-medium text-academy-violet">
                <FileText size={16} />
                {uploadedFile}
              </div>
            )}
            <form onSubmit={onSubmit} className="flex flex-col gap-3">
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
                      meta: "Skedar i shtuar",
                      content:
                        "Skedari u vendos në ndërfaqe. Në këtë version lokal nuk lexoj automatikisht përmbajtjen e tij, por mund të shkruash tabelën, output-in ose variablat kryesore dhe unë do t'i interpretoj."
                    }
                  ]);
                }}
              />
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 py-3 font-semibold text-slate-700 transition hover:bg-slate-50"
                >
                  <Upload size={18} />
                  Skedar
                </button>
                <textarea
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  onKeyDown={onKeyDown}
                  rows={1}
                  placeholder="Shkruaj pyetjen ashtu si e mendon: test, output, hipotezë, metodologji, APA 7..."
                  className="max-h-36 min-h-12 flex-1 resize-none rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-academy-violet"
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-academy-violet px-5 py-3 font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-[#5749ee]"
                >
                  <Send size={18} />
                  Dërgo
                </button>
              </div>
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
