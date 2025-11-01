import { Footer, Hero, Projects } from "@/components";

export default function Home() {
  return (
    <div>
      <main className="flex flex-col max-w-[800px] mx-auto pt-4 px-4 md:pt-6 md:px-6 font-['Clash_Display']">
        <section>
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
