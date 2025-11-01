"use client";
import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { data } from "@/data/data";
// import ThemeToggle from "../components/ThemeToggle";
import { useRouter, usePathname } from "next/navigation";
import Contact from "./Contact";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import Link from "next/link";

export default function Appbar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const [scrollToProjects, setScrollToProjects] = useState(false);

  const handleTitleClick = () => {
    if (pathname !== "/") {
      router.push("/");
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (pathname === "/" && scrollToProjects) {
      setTimeout(() => {
        document
          .getElementById("projects")
          ?.scrollIntoView({ behavior: "smooth" });
        setScrollToProjects(false);
      }, 500);
    }
  }, [pathname, scrollToProjects]);

  const handleProjectClick = () => {
    if (pathname !== "/") {
      setScrollToProjects(true);
      router.push("/");
    } else {
      document
        .getElementById("projects")
        ?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className="sticky top-0 z-10 appbar-container flex justify-between items-center px-4 pt-3 pb-2 mb-2 bg-white/50 dark:bg-black/50 rounded-b-xl max-w-[100dvw] md:max-w-[780px] mx-auto font-['Clash_Display']"
      style={{
        backdropFilter: "blur(4px)",
        WebkitBackdropFilter: "blur(4px)",
      }}
    >
      <div>
        <h1 className="text-3xl font-semibold md:text-4xl">
          <button onClick={handleTitleClick}>{data.alias}</button>
        </h1>
      </div>

      {/* Hamburger Button (Mobile) */}
      <div className="md:hidden flex items-center ">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetHeader className="px-0 py-0">
            <SheetTitle>
              <SheetTrigger asChild>
                <Menu size={24} />
              </SheetTrigger>
            </SheetTitle>
          </SheetHeader>

          <SheetContent side="right" className="w-[60dvw] border-none">
            <div className="flex flex-col space-y-6 mt-20 m-auto">
              <Button
                variant={"ghost"}
                className="bg-transparent hover:bg-transparent text-lg hover:text-accent"
                onClick={() => {
                  setIsOpen(false);
                  router.push("/blogs");
                }}
              >
                Blogs
              </Button>
              <Button
                variant={"ghost"}
                className="bg-transparent hover:bg-transparent text-lg hover:text-accent"
                onClick={() => {
                  setIsOpen(false);
                  handleProjectClick();
                }}
              >
                Projects
              </Button>
              <div className="bg-transparent hover:bg-transparent text-lg hover:text-accent m-auto">
                <Contact />
              </div>
            </div>
            <div>
              <div className="flex justify-center items-center text-accent text-sm">
                Socials
              </div>
              <div className="flex justify-center items-center gap-5 px-8 pb-8 pt-4 text-lg">
                <div>
                  <Link
                    className="text-sm font-medium hover:text-accent "
                    href={data.contact_info.github.link}
                    target="_blank"
                  >
                    GitHub
                  </Link>
                </div>
                {/* <div>||</div> */}
                <div>
                  <Link
                    className="text-sm font-medium hover:text-accent "
                    href={data.contact_info.x_twitter.link}
                    target="_blank"
                  >
                    Twitter
                  </Link>
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* Navigation Links (Desktop) */}
      <div className="hidden md:flex gap-4 items-center">
        <Button
          className="bg-transparent hover:bg-transparent text-lg hover:text-accent"
          variant={"ghost"}
          onClick={() => router.push("/blogs")}
        >
          Blogs
        </Button>
        <Button
          className="bg-transparent hover:bg-transparent text-lg hover:text-accent"
          variant={"ghost"}
          onClick={() => {
            handleProjectClick();
          }}
        >
          Projects
        </Button>
        <Contact />
        {/* <ThemeToggle /> */}
      </div>
    </header>
  );
}
