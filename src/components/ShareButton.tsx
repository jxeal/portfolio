"use client";

import { Button } from "@/components/ui/button";
import { Share2 } from "lucide-react";

export default function ShareButton({
  title,
  slug,
}: {
  title: string;
  slug: string;
}) {
  return (
    <Button
      variant="outline"
      onClick={() =>
        navigator.share?.({
          title,
          url: `https://sayakcodes.in/blogs/${slug}`,
        })
      }
      className="
        rounded-xl
        border-white/20
        bg-white/5
        text-white
        hover:bg-white/10
        backdrop-blur-md
      "
    >
      <Share2 className="w-4 h-4 mr-2" />
      Share
    </Button>
  );
}
