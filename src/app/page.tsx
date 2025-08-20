import { Appbar, Hero, Projects, Footer, About, Terminal } from "../components";

export default function Home() {
  return (
    <div>
      <main className="flex flex-col max-w-[800] mx-auto p-4 md:p-6 font-['Clash_Display']">
        <section id="hero">
          <Hero />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <Footer />
      </main>
    </div>
  );
}
