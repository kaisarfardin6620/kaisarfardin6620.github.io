export interface Skill {
  name: string;
  level: number; // 0-100
  proof?: string;
  current?: boolean;
}

export interface SkillCategory {
  category: string;
  subtitle: string;
  icon: string;
  gradient: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "AI / LLM Systems",
    subtitle: "Production GenAI architecture and inference pipelines",
    icon: "Brain",
    gradient: "from-cyan-500 to-violet-500",
    skills: [
      {
        name: "Multimodal LLM Apps (GPT-4o/Vision)",
        level: 98,
        proof: "Used in Wingman AI Coach and MagicTale AI",
        current: true,
      },
      {
        name: "Hybrid KG-RAG Retrieval",
        level: 95,
        proof: "Used in Explainable Hybrid KG-RAG",
        current: true,
      },
      {
        name: "Speech Pipelines (Whisper + TTS)",
        level: 92,
        proof: "Used in real-time coaching and storytelling stacks",
      },
      {
        name: "Agent Orchestration Flows",
        level: 90,
        proof: "Used for staged prompt/tool pipelines",
      },
      {
        name: "Hallucination Guardrails (NLI)",
        level: 94,
        proof: "Added validation layers before response synthesis",
      },
    ],
  },
  {
    category: "Backend Engineering",
    subtitle: "High-concurrency APIs and event-driven services",
    icon: "Server",
    gradient: "from-emerald-500 to-teal-500",
    skills: [
      {
        name: "Django 5 / DRF Service Design",
        level: 96,
        proof: "Used across production monolith and modular backend services",
        current: true,
      },
      {
        name: "FastAPI (Async + Event Ingestion)",
        level: 94,
        proof: "Used in Reho AI Finance microservice",
        current: true,
      },
      {
        name: "Real-time APIs (Channels + WebSockets)",
        level: 90,
        proof: "Used in Rai Multimodal Platform and Wingman AI Coach",
      },
      {
        name: "Distributed Task Workers (Celery)",
        level: 92,
        proof: "Used for asynchronous media and model workloads",
      },
      {
        name: "API Hardening (Rate Limit/Auth)",
        level: 88,
        proof: "Implemented production safeguards for high-traffic endpoints",
      },
    ],
  },
  {
    category: "Data Infrastructure",
    subtitle: "Retrieval, storage, graph, and caching foundations",
    icon: "Database",
    gradient: "from-indigo-500 to-purple-500",
    skills: [
      {
        name: "Neo4j Graph Modeling",
        level: 93,
        proof: "Used for knowledge graph traversal in hybrid retrieval",
      },
      {
        name: "Vector Databases (Pinecone)",
        level: 92,
        proof: "Used for semantic retrieval pipelines",
      },
      {
        name: "PostgreSQL / MongoDB",
        level: 90,
        proof: "Used for transactional + document-oriented workloads",
      },
      {
        name: "Redis (Caching + Queues)",
        level: 92,
        proof: "Backed task queues and low-latency access patterns",
        current: true,
      },
      {
        name: "Object Storage + CDN Assets",
        level: 86,
        proof: "Handled media pipelines and generated artifact delivery",
      },
    ],
  },
  {
    category: "MLOps & Delivery",
    subtitle: "Deployment, observability, and release reliability",
    icon: "Wrench",
    gradient: "from-orange-500 to-pink-500",
    skills: [
      {
        name: "Dockerized Runtime Environments",
        level: 89,
        proof: "Standardized reproducible dev/prod deployments",
      },
      {
        name: "CI/CD and Release Automation",
        level: 87,
        proof: "Automated build/test/deploy flows for backend services",
      },
      {
        name: "Nginx / Reverse Proxy Routing",
        level: 85,
        proof: "Configured secure edge routing for API traffic",
      },
      {
        name: "Observability for Async Systems",
        level: 84,
        proof: "Tracked worker health, retries, and latency trends",
      },
      {
        name: "Production Readiness Playbooks",
        level: 88,
        proof: "Incident-prepared rollout and rollback process",
      },
    ],
  },
];
