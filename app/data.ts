export const profile = {
  name: "Asish Kumar Dalal",
  role: "Software Engineer || ML Developer",
  bio: "Solo Founder and ML Developer focused on building high-impact products and exploring advanced AI architectures. I specialize in designing scalable systems and implementing state-of-the-art machine learning models from scratch. My work bridges the gap between research and production, focusing on efficiency, scalability, and performance.",
  about: "I am a Software Engineer and ML Developer with a passion for building systems that solve complex problems. My experience ranges from developing solo-engineered products with hundreds of users to implementing complex neural network architectures from scratch. I am constantly exploring new paradigms in AI, from mixture-of-experts to sparse attention mechanisms, and I love documenting my journey through open-source contributions.",
  avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=lalo", // Placeholder avatar
  github: "https://github.com/AsishKumarDalal",
  linkedin: "https://www.linkedin.com/in/asish-kumar-dalal", 
  twitter: "#", 
  email: "dalalasishkumar23@gmail.com",
};

export const projects = [
  {
    domain: "AI/ML",
    items: [
      {
        name: "HSKM-Architecture",
        description: "Hierarchical Sparse Kernel Memory (HSKM) Architecture. Solves the O(N²) Transformer bottleneck with O(N) linear complexity. Implements Multi-Head Kernel Attention (MHKA) with Top-K Sparsity, Rotary Positional Embeddings (RoPE), and a 3-tier memory hierarchy (STM, Vectorized EMA Scans for MTM, and Adaptive LTM). Reduces 8k context VRAM from 24GB to 6GB.",
        github: "https://github.com/AsishKumarDalal/HSKM-Architecture",
        image: "https://raw.githubusercontent.com/AsishKumarDalal/HSKM-Architecture/main/public/arch_overview.png",
        tags: ["PyTorch", "Transformers", "Linear Attention", "O(N)", "Research"]
      },
      {
        name: "GPTOss",
        description: "A production-grade, from-scratch Decoder-Only Transformer (LLM) in PyTorch built for NVIDIA H200. Features Mixture-of-Experts (MoE), Grouped Query Attention (GQA), Rotary Position Embeddings (RoPE), and Native KV Caching.",
        github: "https://github.com/AsishKumarDalal/gptoss",
        image: "https://raw.githubusercontent.com/AsishKumarDalal/gptoss/main/public/Gemini_Generated_Image_opyjsjopyjsjopyj.png",
        tags: ["MoE", "PyTorch", "GQA", "KV Cache", "LLM"]
      },
      {
        name: "GPT-2 From Scratch",
        description: "Implemented the GPT-2 (124M parameters) Large Language Model entirely from scratch.",
        github: "https://github.com/AsishKumarDalal/GPT-2-FROM-SCRATCH",
        image: "",
        tags: ["PyTorch", "Transformers", "LLM"]
      },
      {
        name: "Auto Finetuner",
        description: "Enterprise-grade, zero-headache wrapper for fine-tuning Large Language Models (LLMs) using QLoRA. Handles precision, memory limits, and sequence lengths efficiently.",
        github: "https://github.com/AsishKumarDalal/auto_finetuner",
        image: "",
        tags: ["Python", "QLoRA", "Fine-Tuning", "MLOps"]
      },
      {
        name: "DEIT From Scratch",
        description: "Data-Efficient Image Transformers (DEIT) coded from scratch, achieving state-of-the-art accuracy using less training data via distillation.",
        github: "https://github.com/AsishKumarDalal/DATA_EFFICIENT_IMAGE_TRANSFORMER",
        image: "",
        tags: ["PyTorch", "Computer Vision", "Transformers"]
      }
    ]
  },
  {
    domain: "Systems & Backend",
    items: [
      {
        name: "C++ Load Balancer",
        description: "A high-performance custom load balancer built from scratch in C++.",
        github: "https://github.com/AsishKumarDalal/loadbalancer_c",
        image: "",
        tags: ["C++", "Networking", "Distributed Systems"]
      },
      {
        name: "Notification Service",
        description: "A scalable notification service utilizing a producer-consumer architecture with BullMQ and Redis.",
        github: "https://github.com/AsishKumarDalal/notification-service",
        image: "",
        tags: ["Node.js", "Redis", "BullMQ", "Microservices"]
      },
      {
        name: "Redis from Scratch",
        description: "A high-performance key-value data store implemented in C++ from the ground up.",
        github: "https://github.com/AsishKumarDalal/Redis_from_scratch",
        image: "",
        tags: ["C++", "Data Structures", "Backend"]
      }
    ]
  },
  {
    domain: "Solo Founder",
    items: [
      {
        name: "EnvSecure",
        description: "Encrypted .env sharing platform with zero-knowledge encryption and self-destructing links. Onboarded 200+ users.",
        github: "https://github.com/envsecure/envsecure.github.io",
        liveLink: "https://envsecure.github.io",
        image: "https://raw.githubusercontent.com/envsecure/envsecure.github.io/main/public/lockimage.png",
        tags: ["Security", "Encryption", "React", "Product"]
      },
      {
        name: "ResumeVVC",
        description: "A modern resume building platform designed for developers with real-time preview.",
        github: "https://github.com/ResumevVc/ResumevVc.github.io",
        liveLink: "https://resumevvc.github.io",
        image: "https://raw.githubusercontent.com/ResumevVc/ResumevVc.github.io/main/public/resume-template.png",
        tags: ["Frontend", "React", "UI/UX", "Product"]
      },
      {
        name: "Redis from Scratch",
        description: "A high-performance key-value data store implemented in C++ from the ground up.",
        github: "https://github.com/AsishKumarDalal/Redis_from_scratch",
        image: "",
        tags: ["C++", "Networking", "Data Structures", "Backend"]
      }
    ]
  }
];

export const oss = [
  {
    name: "KeystoneJS",
    description: "Fixed seeding errors in usecase-blog example. Resolved issues with schema fields, Document type transformations, and safety checks during author connection in the seeding script.",
    link: "https://github.com/keystonejs/keystone/pull/9830"
  }
];

export const experience = [
  {
    company: "EnvSecure",
    role: "Solo Founder",
    period: "2026 - Present",
    description: "Built and scaled an encrypted .env sharing platform. Managed the entire product lifecycle from ideation to deployment and user onboarding (200+ users).",
    liveLink: "https://envsecure.github.io"
  },
  {
    company: "ResumeVVC",
    role: "Solo Founder",
    period: "2026 - Present",
    description: "Developed and launched a modern resume builder for developers, optimizing the frontend for a seamless user experience.",
    liveLink: "https://resumevvc.github.io"
  }
];