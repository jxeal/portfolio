import { WebRTC } from "@/components/ProjectComponents";

type Card = {
  title: string;
  description: string;
  techStacks: string;
  src: string;
  liveText: string;
  liveLink: string;
  gitText: string;
  gitLink: string;
  content: React.ReactNode;
};

export const ProjectDetails: Card[] = [
  {
    title: "Video Calling App",
    description: "WebRTC Application",
    techStacks: "WebRTC NodeJs Express Socket.io",
    src: "/images/webrtc.jpg",
    liveLink: "https://webrtc-fvz7.onrender.com/",
    liveText: "Live Link",
    gitLink: "https://github.com/jxeal/webRTC",
    gitText: "Github Link",
    content: <WebRTC />,
  },
  // {
  //   title: "Trial",
  //   description: "Lorem ipsum dolor met",
  //   src: "/images/dp.jpg",
  //   liveLink: "https://webrtc-fvz7.onrender.com/",
  //   liveText: "Live Link",
  //   gitLink: "",
  //   gitText: "Github Link",
  //   content: <Trial />,
  // },
  // {
  //   title: "Video app2",
  //   description: "WebRTC Appl",
  //   src: "/images/webrtc.jpg",
  //   liveLink: "https://webrtc-fvz7.onrender.com/",
  //   liveText: "Live Link",
  //   gitLink: "",
  //   gitText: "Github Link",
  //   content: <WebRTC />,
  // },
  // {
  //   title: "Video app5",
  //   description: "WebRTC Application",
  //   src: "/images/webrtc.jpg",
  //   ctaLink: "https://webrtc-fvz7.onrender.com/",
  //   ctaText: "Live Link",
  //   content: <WebRTC />,
  // },
  // {
  //   title: "Video app4",
  //   description: "WebRTC Application",
  //   src: "/images/webrtc.jpg",
  //   ctaLink: "https://webrtc-fvz7.onrender.com/",
  //   ctaText: "Live Link",
  //   content: <WebRTC />,
  // },
  // {
  //   title: "Video app9",
  //   description: "WebRTC Application",
  //   src: "/images/webrtc.jpg",
  //   ctaLink: "https://webrtc-fvz7.onrender.com/",
  //   ctaText: "Live Link",
  //   content: <WebRTC />,
  // },
  // {
  //   title: "Video app41",
  //   description: "WebRTC Application",
  //   src: "/images/webrtc.jpg",
  //   ctaLink: "https://webrtc-fvz7.onrender.com/",
  //   ctaText: "Live Link",
  //   content: <WebRTC />,
  // },
];
