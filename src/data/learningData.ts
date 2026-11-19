import { LearningPath } from '../types';

export const learningPathsData: LearningPath[] = [
  {
    id: 'sap-clean-core-s4hana',
    title: 'SAP S/4HANA & Clean-Core Cloud Architecture',
    level: 'Enterprise Advanced',
    category: 'Enterprise ERP & Cloud',
    description: 'Master modern SAP S/4HANA Cloud (RISE & GROW with SAP), clean-core development standards on SAP BTP, and automated CeleRITE migration frameworks.',
    technologies: ['SAP S/4HANA', 'SAP BTP', 'ABAP Cloud', 'SAP Analytics Cloud', 'RESTful Application Programming (RAP)', 'SAP Event Mesh'],
    durationWeeks: '10-12 Weeks',
    learningStages: [
      {
        stage: 'Discover',
        details: 'Audit legacy SAP ECC custom code, technical debt, and formulate clean-core migration readiness.'
      },
      {
        stage: 'Learn',
        details: 'Deep dive into SAP BTP side-by-side extensibility, RAP model, and event-driven architectures.'
      },
      {
        stage: 'Practice',
        details: 'Execute automated code remediation with CeleRITE framework and configure SAP BTP Integration Suite.'
      },
      {
        stage: 'Grow',
        details: 'Deploy production-grade clean-core extensions and validate automated regression testing benchmarks.'
      }
    ],
    skillsAcquired: [
      'Clean-Core S/4HANA Architecture',
      'SAP BTP Side-by-Side Extensibility',
      'ABAP Cloud & RAP Programming Model',
      'SAP Integration Suite & Event Mesh'
    ]
  },
  {
    id: 'ai-ml-engineering',
    title: 'Generative AI & Agentic Systems Engineering',
    level: 'Enterprise Advanced',
    category: 'Artificial Intelligence',
    description: 'Master the architecture of production generative AI systems, autonomous agent workflows, RAG pipelines, and enterprise safety guardrails.',
    technologies: ['Python', 'LangChain', 'LlamaIndex', 'Vector DBs', 'OpenAI API', 'Ollama', 'FastAPI'],
    durationWeeks: '8-10 Weeks',
    learningStages: [
      {
        stage: 'Discover',
        details: 'Evaluate current Python/ML fluency and understand business use cases for LLM adoption.'
      },
      {
        stage: 'Learn',
        details: 'Explore embeddings, vector search, orchestration patterns, and multi-agent coordination frameworks.'
      },
      {
        stage: 'Practice',
        details: 'Implement hands-on RAG systems, function-calling workflows, and interactive test harnesses.'
      },
      {
        stage: 'Grow',
        details: 'Deploy an enterprise-grade autonomous customer support or document analysis agent into staging.'
      }
    ],
    skillsAcquired: [
      'Multi-Agent Choreography',
      'RAG & Hybrid Search Architecture',
      'Context Engineering & Prompt Guardrails',
      'Evaluation & Telemetry for LLMs'
    ]
  },
  {
    id: 'cloud-devops',
    title: 'Cloud-Native Architecture & DevSecOps Modernization',
    level: 'Intermediate',
    category: 'Cloud & Infrastructure',
    description: 'Transform legacy infrastructure thinking into resilient, containerized, automated cloud deployment pipelines on AWS and Azure.',
    technologies: ['Kubernetes', 'Docker', 'Terraform', 'GitHub Actions', 'AWS / Azure', 'Prometheus'],
    durationWeeks: '10-12 Weeks',
    learningStages: [
      {
        stage: 'Discover',
        details: 'Baseline cloud knowledge, network fundamentals, and identify infrastructure bottlenecks.'
      },
      {
        stage: 'Learn',
        details: 'Deep dive into microservices patterns, container orchestration, and Infrastructure as Code.'
      },
      {
        stage: 'Practice',
        details: 'Build declarative GitOps pipelines, configure ingress controllers, and enforce automated vulnerability scanning.'
      },
      {
        stage: 'Grow',
        details: 'Architect a self-healing, multi-zone Kubernetes cluster with automated zero-downtime rollouts.'
      }
    ],
    skillsAcquired: [
      'Production Kubernetes Administration',
      'Declarative Infrastructure as Code (Terraform)',
      'Automated DevSecOps Security Gates',
      'Observability with OpenTelemetry'
    ]
  },
  {
    id: 'fullstack-modern',
    title: 'Modern Full-Stack & Distributed Web Architecture',
    level: 'Intermediate',
    category: 'Software Engineering',
    description: 'Build lightning-fast, accessible, enterprise-grade web applications utilizing modern TypeScript, React, modular backend patterns, and resilient APIs.',
    technologies: ['TypeScript', 'React', 'Node.js / Go', 'PostgreSQL', 'Tailwind CSS', 'GraphQL', 'REST'],
    durationWeeks: '12 Weeks',
    learningStages: [
      {
        stage: 'Discover',
        details: 'Audit frontend and backend habits, state management patterns, and system design acumen.'
      },
      {
        stage: 'Learn',
        details: 'Study modern React architecture, server-side rendering, type-safe API contracts, and database indexing.'
      },
      {
        stage: 'Practice',
        details: 'Build responsive design system components, write automated unit & integration tests, and profile web vitals.'
      },
      {
        stage: 'Grow',
        details: 'Deliver an end-to-end multi-tenant dashboard with role-based access control and high test coverage.'
      }
    ],
    skillsAcquired: [
      'Clean Code & Domain-Driven Design',
      'Full-Stack Type Safety with TypeScript',
      'Design System Engineering & Web Vitals',
      'Database Optimization & Connection Pooling'
    ]
  },
  {
    id: 'data-analytics-bi',
    title: 'Enterprise Data Engineering & Intelligent Analytics',
    level: 'Foundational',
    category: 'Data & Analytics',
    description: 'From raw messy spreadsheets to automated data pipelines, modern data warehousing, and compelling executive storytelling dashboards.',
    technologies: ['SQL', 'Python', 'dbt', 'Snowflake', 'Power BI / Tableau', 'Airflow'],
    durationWeeks: '8 Weeks',
    learningStages: [
      {
        stage: 'Discover',
        details: 'Analyze current data literacy and business reporting friction across business units.'
      },
      {
        stage: 'Learn',
        details: 'Master advanced analytical SQL, dimensional modeling, transformation with dbt, and visualization principles.'
      },
      {
        stage: 'Practice',
        details: 'Transform messy raw schemas into unified clean data marts with automated validation tests.'
      },
      {
        stage: 'Grow',
        details: 'Present a real-time revenue and cohort retention dashboard to simulated executive stakeholders.'
      }
    ],
    skillsAcquired: [
      'Modern Data Warehousing (Snowflake/BigQuery)',
      'Data Modeling with dbt',
      'Automated Data Quality Pipelines',
      'Executive Visual Storytelling'
    ]
  },
  {
    id: 'cybersecurity-defense',
    title: 'Enterprise Cyber Defense & Zero-Trust Security',
    level: 'Enterprise Advanced',
    category: 'Security & Compliance',
    description: 'Instill security rigor into every phase of software development. Protect enterprise perimeters, identities, and cloud workloads.',
    technologies: ['OWASP Top 10', 'Zero Trust Architecture', 'OAuth 2.0 / OIDC', 'SIEM', 'CloudTrail', 'SonarQube'],
    durationWeeks: '8-10 Weeks',
    learningStages: [
      {
        stage: 'Discover',
        details: 'Perform a mock red-team assessment against sample enterprise applications.'
      },
      {
        stage: 'Learn',
        details: 'Study modern threat modeling, identity federation, cryptographic security, and cloud compliance standards.'
      },
      {
        stage: 'Practice',
        details: 'Audit vulnerable codebases, patch critical vulnerabilities, and configure automated SAST/DAST gates.'
      },
      {
        stage: 'Grow',
        details: 'Implement a zero-trust network access (ZTNA) policy blueprint with comprehensive audit logging.'
      }
    ],
    skillsAcquired: [
      'Threat Modeling & Secure Coding',
      'Zero-Trust Identity Governance',
      'Cloud Security Posture Management (CSPM)',
      'Incident Response & Audit Readiness'
    ]
  },
  {
    id: 'tech-leadership',
    title: 'Engineering Leadership & Strategic Technology Fluency',
    level: 'Foundational',
    category: 'Leadership & Strategy',
    description: 'Equip managers, team leads, and non-technical executives with the strategic clarity needed to steer digital initiatives and lead high-performing teams.',
    technologies: ['System Design', 'Agile / DORA Metrics', 'Tech Debt Governance', 'Strategic Roadmapping'],
    durationWeeks: '6 Weeks',
    learningStages: [
      {
        stage: 'Discover',
        details: 'Identify team communication friction points and architectural bottlenecks.'
      },
      {
        stage: 'Learn',
        details: 'Explore DORA metrics, architectural trade-offs, developer retention strategies, and tech debt estimation.'
      },
      {
        stage: 'Practice',
        details: 'Run structured architecture review meetings and simulate high-stakes capacity planning sprints.'
      },
      {
        stage: 'Grow',
        details: 'Draft a 12-month technology strategy aligned with corporate revenue and growth objectives.'
      }
    ],
    skillsAcquired: [
      'Architectural Decision Making',
      'DORA Metrics & Engineering Flow',
      'Technical Hiring & Coaching Frameworks',
      'Communicating Tech ROI to Executive Boards'
    ]
  }
];
