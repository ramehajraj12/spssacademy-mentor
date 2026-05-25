import Image from "next/image";
import {
  BarChart3,
  BookOpenCheck,
  BrainCircuit,
  CheckCircle2,
  FileText,
  GraduationCap,
  LineChart,
  LockKeyhole,
  PieChart,
  Sparkles,
  UsersRound
} from "lucide-react";

const fields = [
  "SPSS",
  "Statistikë deskriptive dhe inferenciale",
  "Teste parametrike dhe jo-parametrike",
  "Regresion",
  "Korelacion",
  "ANOVA",
  "Cronbach's Alpha",
  "Analizë faktoriale",
  "Metodologji kërkimore",
  "Pyetësorë dhe hipoteza",
  "Raportim sipas APA 7",
  "Interpretim i tabelave dhe rezultateve"
];

const references = [
  "Andy Field - Discovering Statistics Using IBM SPSS Statistics",
  "Julie Pallant - SPSS Survival Manual",
  "Tabachnick & Fidell - Using Multivariate Statistics",
  "George & Mallery - SPSS for Windows Step by Step",
  "Ho - Handbook of Univariate and Multivariate Data Analysis with IBM SPSS",
  "Brace, Kemp & Snelgar - SPSS for Psychologists",
  "Keith - Multiple Regression and Beyond",
  "Creswell - Research Design",
  "Saunders, Lewis & Thornhill - Research Methods for Business Students",
  "Babbie - The Practice of Social Research",
  "Kerlinger & Lee - Foundations of Behavioral Research",
  "Cohen, Manion & Morrison - Research Methods in Education",
  "Yin - Case Study Research and Applications"
];

const features = [
  {
    icon: FileText,
    title: "Analizë e skedarëve",
    text: "Përdoruesi mund të ngarkojë Excel, Word, PDF, PowerPoint dhe skedarë SPSS për analizë dhe udhëzim akademik."
  },
  {
    icon: BrainCircuit,
    title: "Syntax për SPSS",
    text: "Mentori gjeneron syntax të strukturuar për analiza të ndryshme në SPSS, me shpjegim të logjikës analitike."
  },
  {
    icon: BookOpenCheck,
    title: "Udhëzime hap pas hapi",
    text: "Shpjegime të qarta për fillestarë dhe udhëzime teknike për përdorues me përvojë."
  },
  {
    icon: BarChart3,
    title: "Interpretim profesional",
    text: "Ndihmon në interpretimin e tabelave, rezultateve statistikore dhe output-it të SPSS."
  },
  {
    icon: GraduationCap,
    title: "Raportim sipas APA 7",
    text: "Sugjeron mënyrën si rezultati mund të raportohet në punime akademike sipas standardeve APA 7."
  },
  {
    icon: PieChart,
    title: "Vizualizime grafike",
    text: "Sugjeron grafikët më të përshtatshëm sipas llojit të të dhënave, pyetjes kërkimore dhe analizës."
  },
  {
    icon: Sparkles,
    title: "Përshtatje sipas nivelit",
    text: "Jep përgjigje të thjeshta për fillestarë dhe interpretime më të avancuara për përdorues ekspertë."
  },
  {
    icon: LineChart,
    title: "Shembuj multidisiplinarë",
    text: "Përfshin shembuj nga psikologjia, edukimi, ekonomia, biznesi, mjekësia dhe shkencat sociale."
  }
];

const audiences = [
  "Studentë bachelor dhe master",
  "Kandidatë doktorature",
  "Studiues dhe hulumtues",
  "Profesorë dhe ligjërues",
  "Konsulentë akademikë",
  "Profesionistë të biznesit dhe ekonomisë",
  "Institucione arsimore",
  "Organizata që punojnë me të dhëna"
];

const useCases = [
  {
    question: "Kam të dhëna në Excel. Cilin test duhet ta përdor?",
    answer:
      "Mentori ndihmon në identifikimin e variablave, nivelit të matjes dhe analizës së përshtatshme."
  },
  {
    question: "Si ta interpretoj Cronbach's Alpha?",
    answer:
      "Shpjegon kuptimin, pragjet orientuese dhe mënyrën e raportimit akademik të besueshmërisë."
  },
  {
    question: "Kam bërë regresion linear. Si ta raportoj sipas APA 7?",
    answer:
      "Ndihmon me strukturën e interpretimit, vlerat kryesore statistikore dhe formulimin akademik."
  },
  {
    question: "Si të ndërtoj hipotezat për temën time?",
    answer:
      "Mbështet formulimin e pyetjeve kërkimore, hipotezave dhe lidhjen e tyre me metodën statistikore."
  }
];

const trustItems = [
  "Përgjigje të strukturuara",
  "Qasje akademike",
  "Fokus vetëm në SPSS, statistika dhe metodologji",
  "Mbështetje për raportim shkencor",
  "Përdorim etik i AI",
  "Kontroll kritik i rezultateve",
  "Nuk zëvendëson ekspertin, por mbështet procesin kërkimor"
];

function SectionHeading({
  eyebrow,
  title,
  text
}: {
  eyebrow?: string;
  title: string;
  text?: string;
}) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-academy-violet">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-semibold tracking-normal text-academy-ink md:text-4xl">
        {title}
      </h2>
      {text && <p className="mt-5 text-lg leading-8 text-slate-600">{text}</p>}
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-academy-mist font-sans">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-academy-navy/82 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 text-white lg:px-8">
          <a href="#home" className="flex items-center gap-3 font-semibold">
            <span className="grid size-10 place-items-center rounded-lg bg-white text-academy-navy">
              <BarChart3 size={21} />
            </span>
            <span>SPSS Academy Mentor</span>
          </a>
          <div className="hidden items-center gap-7 text-sm text-white/78 md:flex">
            <a href="#mentor">Mentori</a>
            <a href="#funksione">Funksionet</a>
            <a href="#platforma">Platforma</a>
            <a href="/chat">Chat</a>
            <a href="#akademia">SPSS Academy</a>
          </div>
          <a
            href="/chat"
            className="rounded-lg bg-white px-4 py-2 text-sm font-semibold text-academy-navy shadow-soft transition hover:bg-slate-100"
          >
            Hyr në Mentor
          </a>
        </nav>
      </header>

      <section
        id="home"
        className="relative isolate overflow-hidden bg-[radial-gradient(circle_at_75%_12%,rgba(101,87,255,0.48),transparent_34%),linear-gradient(135deg,#08152f_0%,#102f66_48%,#f8fbff_130%)] px-5 pb-24 pt-32 text-white lg:px-8 lg:pb-32 lg:pt-40"
      >
        <div className="absolute inset-0 -z-10 opacity-40 [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:64px_64px]" />
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="animated-rise">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/18 bg-white/10 px-4 py-2 text-sm text-white/85 backdrop-blur">
              <Sparkles size={16} />
              Platformë akademike për SPSS, statistika dhe hulumtim
            </div>
            <h1 className="text-5xl font-semibold tracking-normal md:text-6xl">
              SPSS Academy Mentor
            </h1>
            <p className="mt-5 text-2xl font-medium text-white/92 md:text-3xl">
              Mentori virtual akademik për SPSS, statistika dhe hulumtim shkencor
            </p>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/78">
              Një mentor virtual i ndërtuar për t'i ndihmuar studentët,
              studiuesit dhe profesionistët të kuptojnë SPSS, të analizojnë të
              dhëna, të interpretojnë rezultate dhe të raportojnë gjetjet sipas
              standardeve akademike.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="/chat"
                className="rounded-lg bg-white px-6 py-3 text-center font-semibold text-academy-navy shadow-glow transition hover:-translate-y-0.5 hover:bg-slate-100"
              >
                Fillo chat-in
              </a>
            <a
              href="#mentor"
                className="rounded-lg border border-white/25 px-6 py-3 text-center font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
              >
                Mëso më shumë
              </a>
            </div>
          </div>
          <div className="relative subtle-float">
            <Image
              src="/spss-academy-mentor-hero.png"
              alt="Vizual modern i SPSS Academy Mentor me grafikë statistikore dhe ndërfaqe akademike"
              width={1200}
              height={900}
              priority
              className="rounded-2xl border border-white/16 shadow-glow"
            />
            <div className="absolute -bottom-6 left-6 right-6 rounded-xl border border-white/14 bg-academy-navy/80 p-4 text-sm text-white/82 shadow-soft backdrop-blur">
              <div className="flex items-center justify-between gap-4">
                <span>Analizë statistikore</span>
                <span>APA 7</span>
                <span>SPSS Syntax</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-5xl rounded-2xl border border-slate-200 bg-white p-7 shadow-soft md:p-10">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-academy-violet">
            Njoftim personal
          </p>
          <h2 className="text-3xl font-semibold text-academy-ink">
            Njoftim Personal - Inovacioni i Ri i SPSS Academy
          </h2>
          <div className="mt-7 space-y-5 text-lg leading-8 text-slate-600">
            <p>Të dashur miq, kolegë dhe bashkëpunëtorë,</p>
            <p>
              Sot dua të ndaj me ju një hap të ri dhe shumë të rëndësishëm në
              rrugëtimin tim profesional dhe akademik. Pas shumë vitesh përvojë
              në menaxhim, statistika, konsulencë kërkimore dhe zhvillim
              profesional, dhe pas themelimit të SPSS Academy, kam punuar për të
              krijuar një mjet që do ta bëjë procesin e mësimit dhe hulumtimit
              më të qartë, më të strukturuar dhe më të arritshëm për studentë,
              studiues dhe profesionistë.
            </p>
            <p>
              SPSS Academy Mentor është një mentor virtual akademik i krijuar
              për të ndihmuar përdoruesit në përdorimin e SPSS, analizën
              statistikore, metodologjinë e hulumtimit shkencor dhe raportimin
              profesional sipas standardeve APA 7.
            </p>
            <p>
              Ky projekt nuk është thjesht një chatbot. Është një hap drejt një
              modeli të ri të edukimit digjital, ku dija akademike, teknologjia
              dhe praktika kërkimore bashkohen në një platformë të vetme.
            </p>
          </div>
          <div className="mt-8 border-t border-slate-200 pt-6">
            <p className="font-semibold text-academy-ink">Ramë Hajraj</p>
            <p className="text-slate-600">Themelues i SPSS Academy</p>
          </div>
        </div>
      </section>

      <section id="mentor" className="px-5 py-20 lg:px-8">
        <SectionHeading
          eyebrow="Mentor akademik"
          title="Çfarë është SPSS Academy Mentor?"
          text="SPSS Academy Mentor është një asistent virtual akademik që ndihmon përdoruesit të kuptojnë analizat statistikore, të zgjedhin metodat e duhura, të interpretojnë rezultatet dhe të përgatisin raportime akademike."
        />
        <div className="mx-auto grid max-w-6xl gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {fields.map((field) => (
            <div
              key={field}
              className="rounded-xl border border-slate-200 bg-white px-4 py-4 text-sm font-medium text-academy-ink shadow-sm"
            >
              {field}
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Baza akademike"
            title="Bazuar në standarde të njohura akademike"
            text="SPSS Academy Mentor është ndërtuar në përputhje me parimet, strukturat metodologjike dhe standardet akademike që gjenden në literaturën ndërkombëtare për SPSS, statistika dhe metodologji kërkimore."
          />
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-2xl bg-academy-navy p-8 text-white shadow-soft">
              <LockKeyhole className="mb-5 text-violet-200" size={32} />
              <h3 className="text-2xl font-semibold">Shenim profesional</h3>
              <p className="mt-4 leading-8 text-white/78">
                Qëllimi i mentorit nuk është të zëvendësojë librat akademikë,
                profesorët apo konsulentët profesionalë, por të ndihmojë
                përdoruesit të kuptojnë më lehtë procesin analitik dhe
                metodologjik.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {references.map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="funksione" className="px-5 py-20 lg:px-8">
        <SectionHeading
          eyebrow="Funksionalitete"
          title="Funksionalitetet kryesore"
          text="Ndërtuar për të mbështetur procesin nga pyetja kërkimore deri te raportimi akademik."
        />
        <div className="mx-auto grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, text }) => (
            <article
              key={title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft transition hover:-translate-y-1"
            >
              <div className="mb-5 grid size-12 place-items-center rounded-xl bg-violet-50 text-academy-violet">
                <Icon size={24} />
              </div>
              <h3 className="text-lg font-semibold text-academy-ink">{title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white px-5 py-20 lg:px-8">
        <SectionHeading
          eyebrow="Perdoruesit"
          title="Për kë është kjo platformë?"
          text="Platforma u drejtohet individëve dhe institucioneve që punojnë me të dhëna, hulumtim dhe raportim akademik."
        />
        <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {audiences.map((item) => (
            <div
              key={item}
              className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
            >
              <UsersRound className="shrink-0 text-academy-violet" size={20} />
              <span className="font-medium text-slate-700">{item}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 py-20 lg:px-8">
        <SectionHeading
          eyebrow="Shembuj përdorimi"
          title="Nga paqartësia metodologjike te raportimi i strukturuar"
        />
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2">
          {useCases.map((item, index) => (
            <article
              key={item.question}
              className="rounded-2xl border border-slate-200 bg-white p-7 shadow-soft"
            >
              <span className="text-sm font-semibold text-academy-violet">
                Shembulli {index + 1}
              </span>
              <h3 className="mt-3 text-xl font-semibold text-academy-ink">
                "{item.question}"
              </h3>
              <p className="mt-4 leading-7 text-slate-600">{item.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section
        id="platforma"
        className="bg-[linear-gradient(135deg,#08152f_0%,#102f66_62%,#6557ff_120%)] px-5 py-20 text-white lg:px-8"
      >
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-violet-200">
              Qasje në platformë
            </p>
            <h2 className="text-4xl font-semibold tracking-normal">
              SPSS Academy Mentor është gati për përdorim akademik
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/76">
              SPSS Academy Mentor ofrohet si një mjedis i strukturuar për
              mbështetje akademike në SPSS, analizë statistikore, metodologji
              hulumtimi dhe raportim sipas APA 7. Përdoruesit mund të kërkojnë
              qasje, demonstrim ose informacion profesional për përdorim
              individual, akademik apo institucional.
            </p>
            <div className="mt-8 grid gap-3 text-white/86">
              {["Qasje profesionale", "Mbështetje akademike", "Përdorim individual dhe institucional"].map(
                (item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="text-violet-200" size={20} />
                    <span>{item}</span>
                  </div>
                )
              )}
            </div>
          </div>
          <form className="rounded-2xl border border-white/14 bg-white p-6 text-academy-ink shadow-glow md:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-semibold">
                Emri dhe mbiemri
                <input className="rounded-lg border border-slate-200 px-4 py-3 font-normal outline-none transition focus:border-academy-violet" />
              </label>
              <label className="grid gap-2 text-sm font-semibold">
                Email
                <input
                  type="email"
                  className="rounded-lg border border-slate-200 px-4 py-3 font-normal outline-none transition focus:border-academy-violet"
                />
              </label>
              <label className="grid gap-2 text-sm font-semibold">
                Statusi
                <select className="rounded-lg border border-slate-200 px-4 py-3 font-normal outline-none transition focus:border-academy-violet">
                  <option>Student</option>
                  <option>Studiues</option>
                  <option>Profesor</option>
                  <option>Konsulent</option>
                  <option>Tjeter</option>
                </select>
              </label>
              <label className="grid gap-2 text-sm font-semibold">
                Fusha e studimit
                <input className="rounded-lg border border-slate-200 px-4 py-3 font-normal outline-none transition focus:border-academy-violet" />
              </label>
            </div>
            <a
              href="/chat"
              className="mt-6 block w-full rounded-lg bg-academy-violet px-6 py-3 text-center font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-[#5749ee]"
            >
              Hyr në chat-in akademik
            </a>
          </form>
        </div>
      </section>

      <section className="bg-white px-5 py-20 lg:px-8">
        <SectionHeading
          eyebrow="Besueshmeri"
          title="Profesionalizëm, integritet dhe standard akademik"
          text="SPSS Academy Mentor synon të ofrojë përgjigje të strukturuara, të udhëhequra akademikisht dhe të dizajnuara për të mbështetur analizën kritike."
        />
        <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {trustItems.map((item) => (
            <div
              key={item}
              className="flex items-start gap-3 rounded-xl bg-slate-50 p-4"
            >
              <CheckCircle2 className="mt-0.5 shrink-0 text-academy-violet" size={20} />
              <span className="font-medium leading-7 text-slate-700">{item}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="akademia" className="px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
          <article className="rounded-2xl border border-slate-200 bg-white p-8 shadow-soft">
            <GraduationCap className="mb-5 text-academy-violet" size={34} />
            <h2 className="text-3xl font-semibold text-academy-ink">
              Rreth SPSS Academy
            </h2>
            <p className="mt-5 leading-8 text-slate-600">
              SPSS Academy është një iniciativë edukative dhe profesionale e
              themeluar nga Ramë Hajraj, me qëllim ofrimin e trajnimeve,
              konsulencës dhe mbështetjes akademike në fushën e SPSS,
              statistikës dhe metodologjisë së hulumtimit shkencor. Misioni i
              SPSS Academy është të sjellë qartësi, strukturë dhe cilësi në
              procesin e analizës së të dhënave dhe raportimit akademik.
            </p>
          </article>
          <article className="rounded-2xl border border-slate-200 bg-white p-8 shadow-soft">
            <UsersRound className="mb-5 text-academy-violet" size={34} />
            <h2 className="text-3xl font-semibold text-academy-ink">
              Rreth themeluesit
            </h2>
            <p className="mt-5 leading-8 text-slate-600">
              Ramë Hajraj është themelues i SPSS Academy dhe profesionist me
              përvojë në menaxhim, statistikë, konsulencë kërkimore dhe
              zhvillim organizativ. Përmes SPSS Academy, ai synon të krijojë
              një urë mes edukimit akademik, analizës së të dhënave dhe
              teknologjisë moderne.
            </p>
          </article>
        </div>
      </section>

      <footer className="bg-academy-navy px-5 py-10 text-white lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-semibold">SPSS Academy</p>
            <p className="mt-1 text-sm text-white/62">
              © 2026 SPSS Academy. All rights reserved.
            </p>
          </div>
          <div className="flex flex-wrap gap-5 text-sm text-white/72">
            <a href="#home">SPSS Academy Mentor</a>
            <a href="#platforma">Qasje në platformë</a>
            <a href="mailto:contact@spssacademy.com">Contact</a>
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Use</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
