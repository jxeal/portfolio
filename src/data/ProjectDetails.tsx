import { WebRTC, SignatureFactory, Gamewave, ACPProd } from "@/data/Projects";

type Card = {
  title: string;
  description: string;
  techStacks: string;
  src: string;
  images?: string[];
  liveText?: string;
  liveLink?: string;
  gitText?: string;
  gitLink?: string;
  type: string;
  content: React.ReactNode;
};

export const ProjectDetails: Card[] = [
  {
    title: "ACP Production",
    description: "S3 Bucket based File Storage",
    techStacks: "Next.js TypeScript AWS-S3",
    src: "/acpprod/p1.webp",
    images: [
      "/acpprod/p1.webp",
      "/acpprod/p2.webp",
      "/acpprod/p3.webp",
      "/acpprod/p4.webp",
      "/acpprod/p5.webp",
      "/acpprod/p6.webp",
    ],
    type: "Freelance Project",
    content: <ACPProd />,
  },
  {
    title: "GameWave",
    description: "AI game automation company",
    techStacks: "Next.js TypeScript Supabase Stripe",
    src: "/gamewave/gamewave-1.jpg",
    images: [
      "/gamewave/gamewave-1.jpg",
      "/gamewave/gamewave-2.jpg",
      "/gamewave/gamewave-3.jpg",
      "/gamewave/gamewave-4.jpg",
      "/gamewave/gamewave-5.jpg",
      "/gamewave/gamewave-6.jpg",
    ],
    liveLink: "https://gamewave.dev/",
    liveText: "Live Link",
    type: "Freelance Project",
    content: <Gamewave />,
  },
  {
    title: "Signature Factory",
    description: "E-commerce Website",
    techStacks: "Next.js Prisma Amazon-EC2 Docker",
    src: "/sigfac/sigfac-1.jpg",
    images: [
      "/sigfac/sigfac-1.jpg",
      "/sigfac/sigfac-2.jpg",
      "/sigfac/sigfac-3.jpg",
      "/sigfac/sigfac-4.jpg",
      "/sigfac/sigfac-5.jpg",
      "/sigfac/sigfac-6.jpg",
      "/sigfac/sigfac-7.jpg",
      "/sigfac/sigfac-8.jpg",
    ],
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
