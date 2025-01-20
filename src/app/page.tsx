import { Hero, Skills, Projects, ContactMe } from "../components";
import ThemeToggle from "../components/ThemeToggle";

export default function Home() {
  return (
    <div>
      <ThemeToggle></ThemeToggle>
      <main className="flex flex-col max-w-[1600] mx-auto p-10">
        <Hero />
        {/* <Projects />
      <Skills />
      <ContactMe /> */}
      </main>
    </div>
  );
}
