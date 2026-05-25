import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  BookOpenCheck,
  BrainCircuit,
  CheckCircle2,
  FileText,
  GraduationCap,
  Layers3,
  LineChart,
  LockKeyhole,
  MessageSquareText,
  PieChart,
  Sparkles,
  UsersRound
} from "lucide-react";

const capabilities = [
  {
    icon: BrainCircuit,
    title: "Mentorim akademik në kohë reale",
    text: "Pyet për SPSS, metodologji, testim hipotezash, interpretim output-i dhe raportim akademik."
  },
  {
    icon: BarChart3,
    title: "Zgjedhje e analizës së duhur",
    text: "Ndihmon në lidhjen mes variablave, nivelit të matjes, pyetjes kërkimore dhe testit statistikor."
  },
  {
    icon: FileText,
    title: "Raportim sipas APA 7",
    text: "Strukturon rezultatet me formulim profesional, duke shmangur premtimet absolute."
  },
  {
    icon: LineChart,
    title: "Interpretim i output-it",
    text: "Lexon logjikën e tabelave, koeficientëve, p-value, madhësisë së efektit dhe supozimeve."
  }
];

const featureCards = [
  "Analizë e skedarëve Excel, Word, PDF, PowerPoint dhe SPSS",
  "Syntax për SPSS me shpjegim të logjikës",
  "Udhëzime hap pas hapi për fillestarë dhe përdorues të avancuar",
  "Cronbach's Alpha, ANOVA, korelacion, regresion dhe analiza faktoriale",
  "Ndërtim pyetësorësh, variablash, pyetjesh kërkimore dhe hipotezash",
  "Sugjerime për grafikë, tabela dhe raportim akademik"
];

const audiences = [
  "Studentë bachelor dhe master",
  "Kandidatë doktorature",
  "Studiues dhe hulumtues",
  "Profesorë dhe ligjërues",
  "Konsulentë akademikë",
  "Profesionistë të biznesit",
  "Institucione arsimore",
  "Organizata që punojnë me të dhëna"
];

const references = [
  "Andy Field",
  "Julie Pallant",
  "Tabachnick & Fidell",
  "George & Mallery",
  "Ho",
  "Brace, Kemp & Snelgar",
  "Keith",
  "Creswell",
  "Saunders, Lewis & Thornhill",
  "Babbie",
  "Kerlinger & Lee",
  "Cohen, Manion & Morrison",
  "Yin"
];

const examples = [
  {
    q: "Kam të dhëna në Excel. Cilin test duhet ta përdor?",
    a: "Mentori identifikon variablat, nivelin e matjes, grupet dhe analizën e përshtatshme."
  },
  {
    q: "Si ta interpretoj Cronbach's Alpha?",
    a: "Shpjegon konsistencën e brendshme, pragjet orientuese dhe raportimin akademik."
  },
  {
    q: "Kam bërë regresion linear. Si ta raportoj sipas APA 7?",
    a: "Strukturon R², F, koeficientët, p-value dhe interpretimin në gjuhë akademike."
  },
  {
    q: "Si t'i ndërtoj hipotezat për temën time?",
    a: "Ndihmon në kalimin nga problemi kërkimor te pyetja, variablat dhe hipotezat."
  }
];

function SectionHeading({
  eyebrow,
  title,
  text
}: {
  eyebrow: string;
  title: string;
  text?: string;
}) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center reveal">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-academy-violet">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold tracking-normal text-academy-ink md:text-5xl">
        {title}
      </h2>
      {text && <p className="mt-5 text-lg leading-8 text-slate-600">{text}</p>}
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f6f8fc] text-academy-ink">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#07132d]/80 backdrop-blur-2xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 text-white lg:px-8">
          <Link href="/" className="flex items-center gap-3 font-semibold">
            <span className="grid size-10 place-items-center rounded-xl bg-white text-academy-navy shadow-soft">
              <BarChart3 size={21} />
            </span>
            <span>SPSS Academy Mentor</span>
          </Link>
          <div className="hidden items-center gap-7 text-sm text-white/76 md:flex">
            <a href="#mentor">Mentori</a>
            <a href="#funksione">Funksionet</a>
            <a href="#metoda">Metoda</a>
            <a href="#akademia">Akademia</a>
          </div>
          <Link
            href="/chat"
            className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2 text-sm font-semibold text-academy-navy shadow-soft transition hover:-translate-y-0.5 hover:bg-slate-100"
          >
            Hyr në chat
            <ArrowRight size={16} />
          </Link>
        </nav>
      </header>

      <section
        id="home"
        className="relative isolate bg-[radial-gradient(circle_at_82%_12%,rgba(101,87,255,0.42),transparent_32%),radial-gradient(circle_at_10%_18%,rgba(39,172,255,0.22),transparent_34%),linear-gradient(135deg,#07132d_0%,#102f66_52%,#ffffff_145%)] px-5 pb-20 pt-32 text-white lg:px-8 lg:pb-28 lg:pt-40"
      >
        <div className="data-grid absolute inset-0 -z-10 opacity-45" />
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="reveal">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/16 bg-white/10 px-4 py-2 text-sm text-white/86 backdrop-blur">
              <Sparkles size={16} />
              Mentor virtual akademik për SPSS, statistika dhe hulumtim shkencor
            </div>
            <h1 className="max-w-4xl text-5xl font-semibold tracking-normal md:text-7xl">
              SPSS Academy Mentor
            </h1>
            <p className="mt-6 max-w-3xl text-2xl font-medium leading-tight text-white/92 md:text-3xl">
              Një hapësirë inteligjente për të kuptuar analizën statistikore,
              metodologjinë kërkimore dhe raportimin akademik.
            </p>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/74">
              Platformë e krijuar për studentë, studiues, profesorë,
              profesionistë dhe institucione që kërkojnë qartësi në SPSS,
              interpretim të rezultateve dhe formulim akademik sipas APA 7.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/chat"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-academy-navy shadow-glow transition hover:-translate-y-1 hover:bg-slate-100"
              >
                Fillo mentorimin
                <MessageSquareText size={19} />
              </Link>
              <a
                href="#mentor"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/25 px-6 py-3 font-semibold text-white transition hover:-translate-y-1 hover:bg-white/10"
              >
                Shiko platformën
                <ArrowRight size={18} />
              </a>
            </div>
          </div>

          <div className="relative reveal-delayed">
            <div className="absolute -inset-5 rounded-[32px] bg-white/10 blur-2xl" />
            <Image
              src="/spss-academy-mentor-hero.png"
              alt="Ndërfaqe moderne akademike me analiza statistikore, tabela dhe grafikë"
              width={1200}
              height={900}
              priority
              className="relative rounded-[28px] border border-white/18 shadow-glow"
            />
            <div className="glass-panel absolute -bottom-7 left-5 right-5 grid grid-cols-3 gap-3 p-4 text-center text-sm text-white">
              <span>SPSS Syntax</span>
              <span>APA 7</span>
              <span>Metodologji</span>
            </div>
          </div>
        </div>
      </section>

      <section id="mentor" className="px-5 py-20 lg:px-8">
        <SectionHeading
          eyebrow="Platforma"
          title="Nga pyetja kërkimore te interpretimi akademik"
          text="SPSS Academy Mentor nuk është thjesht një chatbot. Është një mentor virtual që e udhëheq përdoruesin në procesin e të menduarit statistik, metodologjik dhe akademik."
        />
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-4">
          {capabilities.map(({ icon: Icon, title, text }, index) => (
            <article
              key={title}
              className="reveal rounded-2xl border border-slate-200 bg-white p-6 shadow-soft transition duration-300 hover:-translate-y-2 hover:border-violet-200"
              style={{ animationDelay: `${index * 90}ms` }}
            >
              <div className="mb-5 grid size-12 place-items-center rounded-xl bg-violet-50 text-academy-violet">
                <Icon size={24} />
              </div>
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="funksione" className="bg-white px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="reveal">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-academy-violet">
              Funksionet
            </p>
            <h2 className="text-3xl font-semibold md:text-5xl">
              I ndërtuar për punë reale akademike
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Platforma synon të ofrojë përgjigje të strukturuara, të
              kontrolluara dhe të mbështetura në standarde akademike, duke e
              mbajtur përdoruesin aktiv në procesin kritik të analizës.
            </p>
            <Link
              href="/chat"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-academy-navy px-6 py-3 font-semibold text-white shadow-soft transition hover:-translate-y-1"
            >
              Provo chat-in
              <ArrowRight size={18} />
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {featureCards.map((item, index) => (
              <div
                key={item}
                className="reveal flex gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-5"
                style={{ animationDelay: `${index * 70}ms` }}
              >
                <CheckCircle2 className="mt-1 shrink-0 text-academy-violet" size={21} />
                <span className="font-medium leading-7 text-slate-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="metoda" className="px-5 py-20 lg:px-8">
        <SectionHeading
          eyebrow="Baza akademike"
          title="Në përputhje me standarde të njohura metodologjike"
          text="Mentori është konceptuar sipas parimeve të literaturës ndërkombëtare për SPSS, statistika dhe metodologji kërkimore. Nuk zëvendëson librat, profesorët apo ekspertët; e mbështet procesin e të mësuarit dhe analizës."
        />
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-3xl bg-academy-navy p-8 text-white shadow-soft reveal">
            <LockKeyhole className="mb-6 text-violet-200" size={34} />
            <h3 className="text-2xl font-semibold">Integritet akademik</h3>
            <p className="mt-4 leading-8 text-white/76">
              Çdo përgjigje duhet të shihet si udhëzim akademik dhe jo si
              vendim përfundimtar. Përdoruesi duhet të kontrollojë të dhënat,
              supozimet dhe kontekstin kërkimor.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {references.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-slate-200 bg-white px-4 py-4 text-sm font-semibold text-slate-700 shadow-sm transition hover:-translate-y-1"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 lg:px-8">
        <SectionHeading
          eyebrow="Përdoruesit"
          title="Për studentë, studiues dhe institucione"
        />
        <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {audiences.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-slate-200 bg-white p-5 text-center font-semibold text-slate-700 shadow-sm transition hover:-translate-y-1 hover:shadow-soft"
            >
              <UsersRound className="mx-auto mb-3 text-academy-violet" size={24} />
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 py-20 lg:px-8">
        <SectionHeading
          eyebrow="Shembuj"
          title="Pyetje praktike që platforma i trajton"
        />
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2">
          {examples.map((item, index) => (
            <article
              key={item.q}
              className="rounded-3xl border border-slate-200 bg-white p-7 shadow-soft transition hover:-translate-y-1"
            >
              <span className="text-sm font-semibold text-academy-violet">
                Shembulli {index + 1}
              </span>
              <h3 className="mt-3 text-xl font-semibold">“{item.q}”</h3>
              <p className="mt-4 leading-7 text-slate-600">{item.a}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="px-5 py-20 text-white lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 rounded-[32px] bg-[linear-gradient(135deg,#07132d,#102f66_58%,#6557ff)] p-8 shadow-glow md:p-12 lg:grid-cols-[1fr_0.8fr]">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-violet-200">
              Hyr në platformë
            </p>
            <h2 className="text-3xl font-semibold md:text-5xl">
              Fillo një bisedë akademike me mentorin
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/76">
              Shkruaj pyetjen ashtu si e mendon. Mentori do ta interpretojë
              qëllimin, do të ofrojë strukturë dhe do të kërkojë sqarime vetëm
              kur ato janë vërtet të nevojshme.
            </p>
          </div>
          <div className="grid content-center gap-4">
            <Link
              href="/chat"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-7 py-4 font-semibold text-academy-navy shadow-soft transition hover:-translate-y-1 hover:bg-slate-100"
            >
              Hyr në chat-in akademik
              <MessageSquareText size={20} />
            </Link>
            <div className="grid grid-cols-3 gap-3 text-center text-sm text-white/76">
              <span className="glass-panel p-3">SPSS</span>
              <span className="glass-panel p-3">Statistikë</span>
              <span className="glass-panel p-3">APA 7</span>
            </div>
          </div>
        </div>
      </section>

      <section id="akademia" className="bg-white px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
          <article className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
            <GraduationCap className="mb-5 text-academy-violet" size={34} />
            <h2 className="text-3xl font-semibold">Rreth SPSS Academy</h2>
            <p className="mt-5 leading-8 text-slate-600">
              SPSS Academy është iniciativë edukative dhe profesionale e
              themeluar nga Ramë Hajraj, me fokus në trajnime, konsulencë dhe
              mbështetje akademike për SPSS, statistikë dhe metodologji të
              hulumtimit shkencor.
            </p>
          </article>
          <article className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
            <Layers3 className="mb-5 text-academy-violet" size={34} />
            <h2 className="text-3xl font-semibold">Rreth themeluesit</h2>
            <p className="mt-5 leading-8 text-slate-600">
              Ramë Hajraj është themelues i SPSS Academy dhe profesionist me
              përvojë në menaxhim, statistikë, konsulencë kërkimore dhe
              zhvillim organizativ. Përmes kësaj platforme ai synon të lidhë
              edukimin akademik me teknologjinë moderne.
            </p>
          </article>
        </div>
      </section>

      <footer className="bg-academy-navy px-5 py-10 text-white lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-semibold">SPSS Academy Mentor</p>
            <p className="mt-1 text-sm text-white/62">
              © 2026 SPSS Academy. All rights reserved.
            </p>
          </div>
          <div className="flex flex-wrap gap-5 text-sm text-white/72">
            <Link href="/chat">Chat</Link>
            <a href="#metoda">Standard akademik</a>
            <a href="mailto:contact@spssacademy.com">Contact</a>
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Use</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
