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
];
