import { Appbar, Hero, Projects, Footer } from "../components";

export default function Home() {
  return (
    <div>
      <main
        className="flex flex-col max-w-[1600] mx-auto p-10"
        style={{ maxWidth: "1600px" }}
      >
        <Appbar />
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
