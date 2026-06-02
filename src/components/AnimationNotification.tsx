"use client";
import { useEffect } from "react";
import { toast } from "react-toastify";

export default function AnimationNotification() {
  useEffect(() => {
    const timer = setTimeout(() => {
      const hasShown = localStorage.getItem("prismAnimNotificationShown");
      if (!hasShown) {
        toast("Animation too much for you? You can pause it up top. I'll silently judge your weak focus, but whatever man. 🤷‍♂️", {
          position: "top-right",
          autoClose: 15000,
          theme: "light",
          style: { marginTop: '80px' },
          onClose: () => window.dispatchEvent(new CustomEvent("removeHighlightPrismToggle"))
        });
        localStorage.setItem("prismAnimNotificationShown", "true");
        
        // Dispatch the highlight event for Appbar
        window.dispatchEvent(new CustomEvent("highlightPrismToggle"));
      }
    }, 7000);

    return () => clearTimeout(timer);
  }, []);

  return null;
}
