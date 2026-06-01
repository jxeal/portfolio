import {
  WebRTC,
  SignatureFactory,
  Gamewave,
  ACPProd,
  MLDailyProd,
} from "@/data/Projects";

type Card = {
  title: string;
  description: string;
  techStacks: string;
  src: string;
  images?: string[];
  liveLink?: string;
  gitLink?: string;
  type: string;
  content: React.ReactNode;
};

export const ProjectDetails: Card[] = [
  {
    title: "ML Daily",
    description: "Machine Learning Learning platform",
    techStacks: "Next.js TypeScript Supabase",
    src: "/ml-daily/ml1.webp",
    images: [
      "/ml-daily/ml1.webp",
      "/ml-daily/ml2.webp",
      "/ml-daily/ml3.webp",
      "/ml-daily/ml4.webp",
      "/ml-daily/ml5.webp",
      "/ml-daily/ml6.webp",
    ],
    type: "Project",
    liveLink: "https://ml-daily.vercel.app/",
    gitLink: "https://github.com/jxeal/ML-Daily",
    content: <MLDailyProd />,
  },
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
    type: "Freelance",
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
    type: "Freelance",
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
    type: "Freelance",
    content: <SignatureFactory />,
  },
  {
    title: "Video Calling App",
    description: "WebRTC Application",
    techStacks: "WebRTC NodeJs Express Socket.io",
    src: "/images/webrtc.jpg",
    liveLink: "https://webrtc-next.onrender.com",
    gitLink: "https://github.com/jxeal/webrtc-next",
    type: "Project",
    content: <WebRTC />,
  },
];
