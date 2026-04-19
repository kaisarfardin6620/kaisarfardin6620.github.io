export interface Project {
  featured?: boolean;
  title: string;
  description: string;
  challenge: string;
  approach: string;
  impact: string;
  impactMetrics: {
    label: string;
    value: number;
    suffix?: string;
  }[];
  tech: string[];
  gradient: string;
  icon: string;
  links?: {
    live?: string;
    repo?: string;
    playStore?: string;
    appStore?: string;
  };
}

export const projects: Project[] = [
  {
    title: "Explainable Hybrid KG-RAG",
    description:
      "A Hybrid RAG system combining vector search (Pinecone) and knowledge graph traversal (Neo4j) with NLI-based validation to reduce hallucinations.",
    challenge:
      "Traditional RAG pipelines struggled with factual consistency for multi-hop reasoning and domain-sensitive answers.",
    approach:
      "Combined vector retrieval with graph traversal and added NLI-based verification before final response synthesis.",
    impact:
      "Improved response grounding and reduced hallucination risk for complex enterprise knowledge queries.",
    impactMetrics: [
      { label: "Hallucination risk", value: 40, suffix: "%↓" },
      { label: "Grounded answers", value: 92, suffix: "%" },
      { label: "Reasoning depth", value: 3, suffix: "x" },
    ],
    tech: ["FastAPI", "Neo4j", "Pinecone", "LLMs", "NLI"],
    gradient: "from-cyan-500/20 to-blue-600/20",
    icon: "Workflow",
  },
  {
    title: "3D Head Scanner Backend",
    description:
      "Multimodal AI pipeline for 3D head reconstruction and biometric analysis using Django, Celery, and geometric landmark estimation.",
    challenge:
      "High-resolution image workflows and geometric estimation required reliable async orchestration and fault tolerance.",
    approach:
      "Built distributed processing queues with Celery and Redis, plus deterministic geometric post-processing steps.",
    impact:
      "Enabled scalable 3D reconstruction workflows with consistent output quality under concurrent workloads.",
    impactMetrics: [
      { label: "Concurrent jobs", value: 120, suffix: "+" },
      { label: "Failure recovery", value: 99, suffix: "%" },
      { label: "Processing gain", value: 35, suffix: "%" },
    ],
    tech: ["Django", "Celery", "Redis", "NumPy", "Trimesh"],
    gradient: "from-purple-500/20 to-pink-600/20",
    icon: "Eye",
  },
  {
    title: "Wingman AI Coach",
    description:
      "Real-time multimodal assistant (Text/Image/Audio) using OpenAI Vision/Whisper and Django Channels for live interaction.",
    challenge:
      "Users needed low-latency conversational AI across text, image, and voice without context drop-offs.",
    approach:
      "Implemented WebSocket-based session streaming, multimodal routing, and contextual memory handling.",
    impact:
      "Delivered responsive, continuous interactions suitable for real-time coaching experiences.",
    impactMetrics: [
      { label: "Realtime latency", value: 180, suffix: "ms" },
      { label: "Session continuity", value: 95, suffix: "%" },
      { label: "Modalities", value: 3, suffix: "" },
    ],
    tech: ["Django", "Channels", "Redis", "OpenAI", "WebSockets"],
    gradient: "from-green-500/20 to-emerald-600/20",
    icon: "MessageSquare",
  },
  {
    title: "FaceBuilder Platform",
    description:
      "Facial analysis engine computing symmetry and metrics via MediaPipe, featuring real-time feedback and async processing.",
    challenge:
      "Needed robust face metric extraction and responsive feedback despite variable user input quality.",
    approach:
      "Combined MediaPipe landmark extraction with queued analysis tasks and calibrated scoring pipelines.",
    impact:
      "Improved reliability of facial metric reporting and enabled scalable asynchronous processing.",
    impactMetrics: [
      { label: "Landmark coverage", value: 468, suffix: " pts" },
      { label: "Async throughput", value: 2, suffix: "x" },
      { label: "Feedback speed", value: 300, suffix: "ms" },
    ],
    tech: ["OpenCV", "MediaPipe", "Django", "Redis", "Celery"],
    gradient: "from-orange-500/20 to-red-600/20",
    icon: "Eye",
  },
  {
    title: "MagicTale AI",
    description:
      "End-to-end storytelling pipeline integrating GPT-4o, DALL-E, and ElevenLabs for text, image, and voice synthesis.",
    challenge:
      "Generating coherent multi-format stories required orchestration across text, image, and voice providers.",
    approach:
      "Designed a staged pipeline with prompt conditioning, media generation, and output synchronization.",
    impact:
      "Enabled automated production of rich multimedia narratives from a single story prompt.",
    impactMetrics: [
      { label: "Assets per story", value: 3, suffix: "+" },
      { label: "Generation speed", value: 45, suffix: "%↑" },
      { label: "Pipeline stages", value: 6, suffix: "" },
    ],
    tech: ["GPT-4o", "DALL-E", "ElevenLabs", "Django", "Celery"],
    gradient: "from-pink-500/20 to-violet-600/20",
    icon: "Image",
  },
  {
    title: "Rai Multimodal Platform",
    description:
      "High-concurrency AI backend supporting text, image, and audio with real-time response streaming and robust security.",
    challenge:
      "Concurrent multimodal traffic demanded stable streaming performance and strict API security controls.",
    approach:
      "Built channel-based streaming, rate limiting, and hardened auth middleware for production-grade workloads.",
    impact:
      "Supported reliable real-time multimodal interactions while maintaining backend resilience.",
    impactMetrics: [
      { label: "WebSocket uptime", value: 99, suffix: "%" },
      { label: "Concurrent streams", value: 200, suffix: "+" },
      { label: "Auth hardening", value: 100, suffix: "%" },
    ],
    tech: ["Django", "Channels", "Redis", "Celery", "WebSockets"],
    gradient: "from-blue-500/20 to-indigo-600/20",
    icon: "Workflow",
  },
  {
    featured: true,
    title: "Reho AI Finance",
    description:
      "Financial analysis microservice providing real-time insights and risk modeling from transaction data using FastAPI and LLMs.",
    challenge:
      "Financial data interpretation needed explainability, speed, and robust handling of changing transaction streams.",
    approach:
      "Implemented event-driven ingestion with FastAPI and LLM-assisted insight generation for risk narratives.",
    impact:
      "Delivered near real-time financial intelligence and faster decision support for analysis workflows.",
    impactMetrics: [
      { label: "Insight speed", value: 2, suffix: "s" },
      { label: "Decision velocity", value: 48, suffix: "%↑" },
      { label: "Risk coverage", value: 94, suffix: "%" },
    ],
    links: {
      playStore:
        "https://play.google.com/store/apps/details?id=com.RealWealth.ReHo",
      appStore: "https://apps.apple.com/us/app/reho/id6755340157",
    },
    tech: ["FastAPI", "MongoDB", "Redis", "LLMs"],
    gradient: "from-emerald-500/20 to-teal-600/20",
    icon: "Code",
  },
];
