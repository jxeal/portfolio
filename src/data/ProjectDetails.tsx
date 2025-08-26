import { WebRTC, SignatureFactory } from "@/data/Projects";

type Card = {
  title: string;
  description: string;
  techStacks: string;
  src: string;
  liveText?: string;
  liveLink?: string;
  gitText?: string;
  gitLink?: string;
  type: string;
  content: React.ReactNode;
};

export const ProjectDetails: Card[] = [
  {
    title: "Signature Factory",
    description: "E-commerce Website",
    techStacks: "Next.js Prisma Amazon-EC2 Docker",
    src: "/images/sigfac.jpg",
    liveLink: "https://sfgifts.in/",
    liveText: "Live Link",
    type: "Freelance Project",
    content: <SignatureFactory />,
  },
  {
    title: "Video Calling App",
    description: "WebRTC Application",
    techStacks: "WebRTC NodeJs Express Socket.io",
    src: "/images/webrtc.jpg",
    liveLink: "https://webrtc-next.onrender.com",
    liveText: "Live Link",
    gitLink: "https://github.com/jxeal/webrtc-next",
    gitText: "Github Link",
    type: "Personal Project",
    content: <WebRTC />,
  },
];
