import { Appbar, Hero, Projects, Footer } from "../components";

export default function Home() {
  return (
    <div>
      <main className="flex flex-col max-w-[1400] mx-auto p-10">
        <Appbar />
        <section id="hero">
          <Hero />
        </section>
        <section id="projects">
          <Projects />
        </section>
        {/*<ContactMe /> */}
        <Footer />
      </main>
    </div>
  );
}
