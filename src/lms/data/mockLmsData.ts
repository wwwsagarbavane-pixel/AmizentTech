import { 
  LmsUser, 
  LmsCourse, 
  LmsEnrollment, 
  LmsCertificate, 
  LmsLiveClass, 
  LmsAssessment, 
  LmsAssignment, 
  LmsOrganization, 
  LmsDepartment,
  LmsNotification,
  LmsLearningPath,
  LmsCalendarEvent,
  LmsAchievement,
  LmsDiscussion,
  LmsUserProfileData,
  LmsUserSettingsData
} from '../types/lmsTypes';

export const INITIAL_USERS: LmsUser[] = [
  {
    id: 'user_learner_ind',
    name: 'Jason Jones',
    email: 'jason.jones@amizent.com',
    role: 'individual_learner',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=250',
    skillIq: 284,
    totalHoursLearned: 48.5,
    completedLabs: 34,
    certificatesCount: 4,
    enrolledCourseIds: ['course_ai_agents', 'course_cloud_security', 'course_sap_s4hana'],
    completedCourseIds: ['course_clixie_interactive'],
    walletBalanceUSD: 24093.00,
    joinedDate: 'Jan 2026'
  },
  {
    id: 'user_learner_corp',
    name: 'Sophia Chen',
    email: 'sophia.chen@apexglobal.com',
    role: 'corporate_learner',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=250',
    organizationId: 'org_apex_global',
    organizationName: 'Apex Global Enterprises',
    departmentId: 'dept_cloud_infra',
    departmentName: 'Cloud & Infrastructure Services',
    skillIq: 268,
    totalHoursLearned: 62.0,
    completedLabs: 42,
    certificatesCount: 5,
    enrolledCourseIds: ['course_sap_s4hana', 'course_cloud_security'],
    completedCourseIds: ['course_ai_agents'],
    walletBalanceUSD: 12500.00,
    joinedDate: 'Feb 2026'
  },
  {
    id: 'user_instructor',
    name: 'Dr. Elena Rostova',
    email: 'elena.rostova@amizent.com',
    role: 'instructor',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=250',
    skillIq: 298,
    totalHoursLearned: 180.0,
    completedLabs: 120,
    certificatesCount: 12,
    enrolledCourseIds: [],
    completedCourseIds: [],
    createdCourseIds: ['course_ai_agents', 'course_live_genai'],
    joinedDate: 'Aug 2025'
  },
  {
    id: 'user_org_admin',
    name: 'Marcus Thorne',
    email: 'm.thorne@apexglobal.com',
    role: 'org_admin',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=250',
    organizationId: 'org_apex_global',
    organizationName: 'Apex Global Enterprises',
    skillIq: 275,
    totalHoursLearned: 35.0,
    completedLabs: 18,
    certificatesCount: 3,
    enrolledCourseIds: ['course_sap_s4hana'],
    completedCourseIds: [],
    joinedDate: 'Sep 2025'
  },
  {
    id: 'user_org_manager',
    name: 'Sarah Jenkins',
    email: 'sarah.j@apexglobal.com',
    role: 'org_manager',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=250',
    organizationId: 'org_apex_global',
    organizationName: 'Apex Global Enterprises',
    departmentId: 'dept_cloud_infra',
    departmentName: 'Cloud & Infrastructure Services',
    skillIq: 280,
    totalHoursLearned: 44.0,
    completedLabs: 26,
    certificatesCount: 4,
    enrolledCourseIds: ['course_cloud_security'],
    completedCourseIds: [],
    joinedDate: 'Oct 2025'
  },
  {
    id: 'user_super_admin',
    name: 'Dr. Alistair Vance',
    email: 'admin@amizent.com',
    role: 'super_admin',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=250',
    skillIq: 300,
    totalHoursLearned: 320.0,
    completedLabs: 210,
    certificatesCount: 18,
    enrolledCourseIds: [],
    completedCourseIds: [],
    joinedDate: 'Jun 2025'
  }
];

export const INITIAL_COURSES: LmsCourse[] = [
  {
    id: 'course_ai_agents',
    title: 'Autonomous Enterprise AI & Multi-Agent Systems',
    category: 'Generative AI & Architecture',
    format: 'blended',
    level: 'Enterprise',
    instructorName: 'Dr. Elena Rostova',
    instructorTitle: 'Principal AI Systems Architect, AmIzent',
    instructorAvatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=250',
    durationHours: 16.5,
    totalLessons: 18,
    rating: 4.95,
    reviewsCount: 428,
    enrolledCount: 1840,
    priceUSD: 499,
    isFree: false,
    thumbnail: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=600',
    badge: 'Skill IQ Certified',
    shortDescription: 'Master orchestration frameworks, LangGraph, tool sandboxes, and safety guardrails for enterprise autonomous AI agents.',
    description: 'This blended program provides hands-on implementation skills for production-grade AI agents. Learn to build fault-tolerant reasoning loops, MCP server integrations, vector memory architectures, and observability telemetry tailored for Fortune 500 environments.',
    learningOutcomes: [
      'Design reliable multi-agent swarms with stateful checkpoints',
      'Integrate Model Context Protocol (MCP) securely with enterprise ERP',
      'Implement defensive guardrails against prompt injections & hallucinations',
      'Evaluate agent cost, latency, and reasoning traces in cloud sandboxes'
    ],
    tags: ['GenAI', 'Multi-Agent', 'Python', 'MCP', 'Enterprise'],
    skillIqGain: 85,
    featured: true,
    modules: [
      {
        id: 'mod_1',
        title: 'Module 1: Foundations of Autonomous Agent Architectures',
        duration: '4h 15m',
        lessons: [
          {
            id: 'les_1_1',
            title: '1.1 Paradigm Shift: From Monolithic LLMs to Autonomous Swarms',
            durationMinutes: 24,
            type: 'video',
            videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
            summary: 'Explore why single prompt completions fail in production and how agentic planning loops (ReAct, Plan-and-Solve) guarantee operational safety.',
            transcript: 'Welcome to Module 1. In enterprise environments, relying on single-shot completions is unsafe for mission-critical workflows. Today we examine the anatomy of a feedback-driven agentic loop...',
            resources: [
              { name: 'Agent Architecture Whitepaper (PDF)', type: 'pdf', url: '#' },
              { name: 'Starter Swarm Boilerplate (Repo)', type: 'repo', url: '#' }
            ]
          },
          {
            id: 'les_1_2',
            title: '1.2 Model Context Protocol (MCP) in Action',
            durationMinutes: 32,
            type: 'lab',
            videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
            summary: 'Connect your agent to external databases and SaaS tools using standard MCP client-server contracts.',
            resources: [
              { name: 'Interactive Cloud Sandbox', type: 'sandbox', url: '#' }
            ]
          },
          {
            id: 'les_1_3',
            title: '1.3 Checkpoint Assessment: Multi-Agent Theory',
            durationMinutes: 15,
            type: 'quiz',
            summary: 'Test your understanding of token routing, state serialization, and recovery rollback patterns.',
            quiz: [
              {
                id: 'q_1',
                question: 'What is the primary role of an MCP Server in enterprise agent infrastructure?',
                options: [
                  'To fine-tune weights on local GPUs',
                  'To expose structured tools and resources via standard JSON-RPC contracts',
                  'To compress video streams for faster inference',
                  'To replace Kubernetes in container scheduling'
                ],
                correctIndex: 1,
                explanation: 'Model Context Protocol (MCP) creates a standard contract for exposing tools, database queries, and live system context to language models.'
              },
              {
                id: 'q_2',
                question: 'Which mechanism prevents agentic loops from running indefinitely on recursive errors?',
                options: [
                  'Increasing model temperature to 1.5',
                  'Stateful step iteration budgets with circuit-breaker checkpoints',
                  'Disabling system prompt evaluation',
                  'Switching shell interpreters'
                ],
                correctIndex: 1,
                explanation: 'Circuit breakers and step iteration limits prevent unbounded token spend and unrecoverable infinite retry loops.'
              }
            ]
          }
        ]
      },
      {
        id: 'mod_2',
        title: 'Module 2: Production Guardrails & Clean-Core Telemetry',
        duration: '5h 30m',
        lessons: [
          {
            id: 'les_2_1',
            title: '2.1 Defensive Prompt Filtering & Output Validation',
            durationMinutes: 38,
            type: 'video',
            videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
            summary: 'Enforce deterministic Pydantic schemas and adversarial injection filters on all agent outputs before persisting to ERP.',
            transcript: 'Output reliability is non-negotiable. In this lecture, we enforce structured runtime contracts on raw LLM responses...'
          },
          {
            id: 'les_2_2',
            title: '2.2 Capstone Hands-On: Deploying Resilient Agent API',
            durationMinutes: 45,
            type: 'lab',
            summary: 'Deploy an agent cluster with Prometheus telemetry and automatic rollback in our virtual cloud sandbox.'
          }
        ]
      }
    ]
  },
  {
    id: 'course_sap_s4hana',
    title: 'SAP S/4HANA Clean-Core Modernization & BTP',
    category: 'Enterprise ERP & Cloud',
    format: 'self_paced',
    level: 'Enterprise',
    instructorName: 'Rajesh K. Mehta',
    instructorTitle: 'SAP Fellow & Chief Enterprise Architect',
    instructorAvatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=250',
    durationHours: 24.0,
    totalLessons: 22,
    rating: 4.92,
    reviewsCount: 310,
    enrolledCount: 1420,
    priceUSD: 699,
    isFree: false,
    thumbnail: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600',
    badge: 'Clean-Core Certified',
    shortDescription: 'Execute zero-modification ERP migrations with SAP Business Technology Platform (BTP) and event-driven microservices.',
    description: 'Learn modern Applexus-grade SAP transformation methodologies. Master side-by-side extensibility, SAP Build Apps, clean ABAP Cloud guidelines, and real-time data replication to Snowflake.',
    learningOutcomes: [
      'Architect side-by-side extensions on SAP BTP without touching core ERP code',
      'Migrate monolithic custom Z-transactions to ABAP Cloud & RESTful Application Programming (RAP)',
      'Establish clean-core governance metrics and technical debt dashboards'
    ],
    tags: ['SAP', 'S/4HANA', 'Clean-Core', 'BTP', 'ERP'],
    skillIqGain: 95,
    featured: true,
    modules: [
      {
        id: 'mod_sap_1',
        title: 'Module 1: Clean-Core Architecture Principles',
        duration: '6h 00m',
        lessons: [
          {
            id: 'les_sap_1_1',
            title: '1.1 The Imperative of Clean-Core ERP',
            durationMinutes: 30,
            type: 'video',
            videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
            summary: 'Understanding technical debt in legacy ECC systems and adopting the RISE with SAP Clean-Core mandate.'
          },
          {
            id: 'les_sap_1_2',
            title: '1.2 Side-by-Side Extensibility on BTP',
            durationMinutes: 40,
            type: 'reading',
            summary: 'Architecting decoupled microservices and event brokers to keep the core ERP upgradeable.'
          }
        ]
      }
    ]
  },
  {
    id: 'course_cloud_security',
    title: 'Multi-Cloud Zero-Trust Architecture & Threat Modeling',
    category: 'Cybersecurity & Cloud',
    format: 'blended',
    level: 'Advanced',
    instructorName: 'Sarah Jenkins',
    instructorTitle: 'Cloud Security Director & CISSP',
    instructorAvatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=250',
    durationHours: 18.0,
    totalLessons: 16,
    rating: 4.88,
    reviewsCount: 295,
    enrolledCount: 1180,
    priceUSD: 399,
    isFree: false,
    thumbnail: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=600',
    badge: 'Zero-Trust Pass',
    shortDescription: 'Defend hybrid cloud perimeters across AWS, Azure, and Google Cloud with verifiable zero-trust IAM policies.',
    description: 'Learn enterprise threat modeling, infrastructure-as-code security scans (Checkov, Trivy), least-privilege identity federation, and automated incident triage pipelines.',
    learningOutcomes: [
      'Build automated IAM privilege boundary enforcements',
      'Deploy Zero-Trust network access (ZTNA) and mTLS service mesh policies',
      'Automate SIEM threat ingestion with serverless cloud functions'
    ],
    tags: ['Security', 'Zero-Trust', 'AWS', 'Azure', 'Kubernetes'],
    skillIqGain: 80,
    modules: [
      {
        id: 'mod_sec_1',
        title: 'Module 1: Identity & Access Perimeters',
        duration: '4h 30m',
        lessons: [
          {
            id: 'les_sec_1_1',
            title: '1.1 Zero-Trust Architecture Foundations',
            durationMinutes: 28,
            type: 'video',
            videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
            summary: 'Never trust, always verify: implementing continuous context-aware authentication.'
          }
        ]
      }
    ]
  },
  {
    id: 'course_clixie_interactive',
    title: 'Clixie-Grade Interactive AI Learning Engineering',
    category: 'Learning Tech & Frontend',
    format: 'self_paced',
    level: 'Intermediate',
    instructorName: 'Jason Jones',
    instructorTitle: 'Lead Educational Technologist',
    instructorAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=250',
    durationHours: 12.0,
    totalLessons: 14,
    rating: 4.90,
    reviewsCount: 180,
    enrolledCount: 940,
    priceUSD: 0,
    isFree: true,
    thumbnail: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=600',
    badge: 'Foundational Free',
    shortDescription: 'Engineer interactive video checkpoints, in-stream quizzes, and verifiable telemetry badges using modern Web APIs.',
    description: 'Master the pedagogy and engineering behind Clixie interactive video modules. Learn to synchronize rich overlays with video timestamps, track learning velocity, and emit SCORM/xAPI telemetry.',
    learningOutcomes: [
      'Synchronize interactive HTML widgets over HTML5 video timelines',
      'Build real-time student response analytics engines',
      'Package courses with verifiable completion cryptography'
    ],
    tags: ['Video', 'Clixie', 'Frontend', 'TypeScript', 'EdTech'],
    skillIqGain: 70,
    modules: [
      {
        id: 'mod_clx_1',
        title: 'Module 1: Video Checkpoint Architecture',
        duration: '3h 45m',
        lessons: [
          {
            id: 'les_clx_1_1',
            title: '1.1 Designing Blended Video Interactions',
            durationMinutes: 22,
            type: 'video',
            videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
            summary: 'How in-stream interactive checkpoints increase knowledge retention by 3.4x over passive video.'
          }
        ]
      }
    ]
  },
  {
    id: 'course_live_genai',
    title: 'Live Masterclass: Generative AI Agents in Production',
    category: 'Generative AI & Architecture',
    format: 'live',
    level: 'Enterprise',
    instructorName: 'Dr. Elena Rostova',
    instructorTitle: 'Principal AI Systems Architect, AmIzent',
    instructorAvatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=250',
    durationHours: 6.0,
    totalLessons: 4,
    rating: 4.98,
    reviewsCount: 154,
    enrolledCount: 620,
    priceUSD: 299,
    isFree: false,
    thumbnail: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=600',
    badge: 'Live Interactive',
    shortDescription: 'Weekly live interactive sessions with Dr. Rostova covering cutting-edge reasoning models, MCP tools, and live debugging.',
    description: 'Experience synchronous collaborative labs, live Q&A, architectural code reviews, and breakout room problem-solving on enterprise AI challenges.',
    learningOutcomes: [
      'Live code review of multi-agent architectures with industry experts',
      'Troubleshoot latency, token serialization, and distributed state in real time',
      'Network with Fortune 500 engineering leaders'
    ],
    tags: ['Live', 'GenAI', 'Masterclass', 'Dr. Rostova'],
    skillIqGain: 90,
    modules: [
      {
        id: 'mod_live_1',
        title: 'Session 1: Live Swarm Debugging & Tracing',
        duration: '1h 30m',
        lessons: [
          {
            id: 'les_live_1_1',
            title: 'Live Class: Tracing Hallucinations with OpenTelemetry',
            durationMinutes: 90,
            type: 'video',
            videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
            summary: 'Hands-on debugging session with live participant questions and shared sandbox.'
          }
        ]
      }
    ]
  }
];

export const INITIAL_ENROLLMENTS: LmsEnrollment[] = [
  {
    id: 'enr_1',
    userId: 'user_learner_ind',
    courseId: 'course_ai_agents',
    progressPercent: 72,
    status: 'in_progress',
    enrolledAt: '2026-02-01',
    lastAccessedAt: '2026-02-18',
    completedLessonIds: ['les_1_1', 'les_1_2']
  },
  {
    id: 'enr_2',
    userId: 'user_learner_ind',
    courseId: 'course_cloud_security',
    progressPercent: 45,
    status: 'in_progress',
    enrolledAt: '2026-02-10',
    lastAccessedAt: '2026-02-17',
    completedLessonIds: ['les_sec_1_1']
  },
  {
    id: 'enr_3',
    userId: 'user_learner_ind',
    courseId: 'course_clixie_interactive',
    progressPercent: 100,
    status: 'completed',
    enrolledAt: '2026-01-15',
    lastAccessedAt: '2026-01-29',
    completedLessonIds: ['les_clx_1_1'],
    certificateId: 'cert_amz_2026_8894'
  },
  {
    id: 'enr_4',
    userId: 'user_learner_corp',
    courseId: 'course_sap_s4hana',
    progressPercent: 88,
    status: 'in_progress',
    enrolledAt: '2026-02-02',
    lastAccessedAt: '2026-02-18',
    completedLessonIds: ['les_sap_1_1']
  }
];

export const INITIAL_CERTIFICATES: LmsCertificate[] = [
  {
    id: 'cert_amz_2026_8894',
    certificateNumber: 'AMZ-2026-8894-3441',
    courseId: 'course_clixie_interactive',
    courseTitle: 'Clixie-Grade Interactive AI Learning Engineering',
    category: 'Learning Tech & Frontend',
    recipientName: 'Jason Jones',
    recipientEmail: 'jason.jones@amizent.com',
    issueDate: 'January 29, 2026',
    gradeScore: 98.4,
    verificationCode: 'VERIFIED-AMZ-77A91-002',
    instructorName: 'Dr. Elena Rostova'
  },
  {
    id: 'cert_amz_2025_9912',
    certificateNumber: 'AMZ-2025-9912-1022',
    courseId: 'course_cloud_security',
    courseTitle: 'Enterprise Cloud Security & Zero-Trust Defense',
    category: 'Cybersecurity & Cloud',
    recipientName: 'Jason Jones',
    recipientEmail: 'jason.jones@amizent.com',
    issueDate: 'December 18, 2025',
    gradeScore: 96.0,
    verificationCode: 'VERIFIED-AMZ-99F12-004',
    instructorName: 'Sarah Jenkins'
  }
];

export const INITIAL_LIVE_CLASSES: LmsLiveClass[] = [
  {
    id: 'live_1',
    title: 'Live Lab: Agentic Memory & Vector Indexing at Scale',
    courseId: 'course_ai_agents',
    courseTitle: 'Autonomous Enterprise AI & Multi-Agent Systems',
    instructorName: 'Dr. Elena Rostova',
    instructorAvatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=250',
    scheduledAt: '2026-02-20T16:00:00Z',
    durationMinutes: 90,
    meetingLink: 'https://meet.amizent.com/live-agent-lab',
    status: 'upcoming',
    attendeesCount: 142
  },
  {
    id: 'live_2',
    title: 'Executive Workshop: SAP Clean-Core Migration Roadmaps',
    courseId: 'course_sap_s4hana',
    courseTitle: 'SAP S/4HANA Clean-Core Modernization & BTP',
    instructorName: 'Rajesh K. Mehta',
    instructorAvatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=250',
    scheduledAt: '2026-02-22T14:30:00Z',
    durationMinutes: 60,
    meetingLink: 'https://meet.amizent.com/sap-clean-core',
    status: 'upcoming',
    attendeesCount: 88
  }
];

export const INITIAL_ASSESSMENTS: LmsAssessment[] = [
  {
    id: 'assess_cloud_arch',
    title: 'Skill IQ™: Enterprise Cloud Architecture',
    category: 'Cloud Engineering',
    benchmarkTarget: 'Top 5% of Global Engineers (280+)',
    questionsCount: 20,
    durationMinutes: 25,
    skillIqMax: 300,
    userBestScore: 284,
    status: 'verified',
    questions: [
      {
        id: 'q_c1',
        question: 'Which consistency model provides strictly linearizable reads across distributed AWS regions?',
        options: [
          'DynamoDB Eventual Consistency',
          'Aurora Global Database with Read Local Tokens',
          'DynamoDB Global Tables with Strong Consistency (single-region write)',
          'S3 Standard Transfer Acceleration'
        ],
        correctIndex: 2,
        explanation: 'DynamoDB supports strongly consistent reads within the replica region of active writes.'
      },
      {
        id: 'q_c2',
        question: 'What is the primary benefit of deploying AWS VPC Lattice over traditional transit gateway peering?',
        options: [
          'It eliminates the need for IP address management across accounts',
          'It replaces Docker container images',
          'It decreases disk storage requirements by 90%',
          'It encrypts optical cables in ocean trenches'
        ],
        correctIndex: 0,
        explanation: 'VPC Lattice provides service-to-service connectivity with built-in Layer 7 routing and IAM auth, abstracting away overlapping CIDRs.'
      }
    ]
  },
  {
    id: 'assess_ai_mastery',
    title: 'Skill IQ™: Autonomous AI & Agent Orchestration',
    category: 'Artificial Intelligence',
    benchmarkTarget: 'Enterprise Ready (260+)',
    questionsCount: 15,
    durationMinutes: 20,
    skillIqMax: 300,
    userBestScore: 265,
    status: 'verified',
    questions: [
      {
        id: 'q_ai_1',
        question: 'How do you prevent cyclic hallucination loops when an agent tool returns an error code?',
        options: [
          'Re-prompt with identical context 10 times',
          'Provide structured tool output with error classification and maximum retry budget',
          'Increase maximum tokens to 128,000',
          'Ignore the tool error and assume execution succeeded'
        ],
        correctIndex: 1,
        explanation: 'Structured error classification with deterministic retry budgets allows agents to recover safely.'
      }
    ]
  }
];

export const INITIAL_ASSIGNMENTS: LmsAssignment[] = [
  {
    id: 'asg_1',
    title: 'Capstone Project: Zero-Trust Terraform Module Architecture',
    courseTitle: 'Multi-Cloud Zero-Trust Architecture & Threat Modeling',
    dueDate: '2026-02-25',
    status: 'submitted',
    score: 95,
    maxScore: 100,
    submissionDate: '2026-02-16',
    instructorFeedback: 'Superb modular decomposition. The IAM policy boundary implementation complies cleanly with CIS Benchmark v2.0.'
  },
  {
    id: 'asg_2',
    title: 'Multi-Agent MCP Server Implementation in TypeScript',
    courseTitle: 'Autonomous Enterprise AI & Multi-Agent Systems',
    dueDate: '2026-03-02',
    status: 'pending',
    maxScore: 100
  }
];

export const INITIAL_ORGANIZATIONS: LmsOrganization[] = [
  {
    id: 'org_apex_global',
    name: 'Apex Global Enterprises',
    domain: 'apexglobal.com',
    tier: 'Global S/4HANA Clean-Core',
    allocatedSeats: 500,
    usedSeats: 342,
    activeLearnersCount: 298,
    departments: ['dept_cloud_infra', 'dept_ai_automation', 'dept_sap_erp'],
    contactEmail: 'workforce@apexglobal.com'
  },
  {
    id: 'org_summit_tech',
    name: 'Summit Health Technologies',
    domain: 'summithealth.io',
    tier: 'Enterprise Growth',
    allocatedSeats: 150,
    usedSeats: 124,
    activeLearnersCount: 110,
    departments: ['dept_health_data', 'dept_compliance'],
    contactEmail: 'talent@summithealth.io'
  }
];

export const INITIAL_DEPARTMENTS: LmsDepartment[] = [
  {
    id: 'dept_cloud_infra',
    name: 'Cloud & Infrastructure Services',
    orgId: 'org_apex_global',
    managerName: 'Sarah Jenkins',
    managerEmail: 'sarah.j@apexglobal.com',
    memberCount: 128,
    averageSkillIq: 272,
    courseCompletionRate: 84.6
  },
  {
    id: 'dept_ai_automation',
    name: 'AI & Autonomous Automation',
    orgId: 'org_apex_global',
    managerName: 'David Zhang',
    managerEmail: 'd.zhang@apexglobal.com',
    memberCount: 94,
    averageSkillIq: 286,
    courseCompletionRate: 91.2
  },
  {
    id: 'dept_sap_erp',
    name: 'Enterprise SAP Architecture',
    orgId: 'org_apex_global',
    managerName: 'Kavita Raman',
    managerEmail: 'k.raman@apexglobal.com',
    memberCount: 120,
    averageSkillIq: 268,
    courseCompletionRate: 79.4
  }
];

export const INITIAL_NOTIFICATIONS: LmsNotification[] = [
  {
    id: 'notif_1',
    title: 'New Live Class Scheduled',
    message: 'Dr. Elena Rostova scheduled "Live Lab: Agentic Memory" for Feb 20 at 4:00 PM UTC.',
    timestamp: '10 minutes ago',
    type: 'live',
    isRead: false
  },
  {
    id: 'notif_2',
    title: 'Assignment Graded',
    message: 'Your Zero-Trust Terraform Module was graded 95/100 by Sarah Jenkins.',
    timestamp: '2 hours ago',
    type: 'grade',
    isRead: false
  },
  {
    id: 'notif_3',
    title: 'Skill Pass Verified',
    message: 'Certificate AMZ-2026-8894 is now verified and added to your public credential badge.',
    timestamp: '1 day ago',
    type: 'course',
    isRead: true
  }
];

export const INITIAL_LEARNING_PATHS: LmsLearningPath[] = [
  {
    id: 'path_ai_architect',
    title: 'Enterprise AI & Autonomous Agent Architect',
    description: 'Master multi-agent orchestration, function calling, stateful graphs with LangGraph, and enterprise RAG governance.',
    targetRole: 'Lead AI Engineer / Solutions Architect',
    skills: ['LangGraph', 'Autonomous Agents', 'Vector Databases', 'Prompt Engineering', 'Model Routing'],
    courseCount: 4,
    durationHours: 64,
    level: 'Advanced',
    format: 'blended',
    enrolled: true,
    progressPercent: 45,
    stages: [
      {
        stageNumber: 1,
        title: 'Stage 01 – Foundation & LLM Architecture',
        description: 'Core transformer mechanics, context windows, and modern inference pipelines.',
        completionStatus: 'completed',
        courses: [
          { id: 'c_p1_1', title: 'Deep Foundations of Modern LLMs', duration: '12h', completed: true, locked: false },
          { id: 'c_p1_2', title: 'Vector Embeddings & Semantic Indexing', duration: '10h', completed: true, locked: false }
        ]
      },
      {
        stageNumber: 2,
        title: 'Stage 02 – Agentic Tool Calling & Function Execution',
        description: 'Connecting LLMs to enterprise APIs, tool registries, and real-time execution sandboxes.',
        completionStatus: 'in_progress',
        courses: [
          { id: 'course_ai_agents', title: 'Autonomous AI Agents & Multi-Agent LangGraph Systems', duration: '18h', completed: false, locked: false }
        ]
      },
      {
        stageNumber: 3,
        title: 'Stage 03 – Enterprise RAG & Hybrid Search',
        description: 'Production vector search, rerankers, semantic cache, and compliance guardrails.',
        completionStatus: 'available',
        courses: [
          { id: 'c_p3_1', title: 'Hybrid RAG with Milvus & Elasticsearch', duration: '14h', completed: false, locked: false }
        ]
      },
      {
        stageNumber: 4,
        title: 'Stage 04 – Practical Capstone Projects',
        description: 'Deploying autonomous multi-agent systems into regulated Kubernetes clusters.',
        completionStatus: 'locked',
        courses: [
          { id: 'c_p4_1', title: 'Autonomous Production Agent Sandbox Deployment', duration: '10h', completed: false, locked: true }
        ]
      },
      {
        stageNumber: 5,
        title: 'Stage 05 – Final Certification Assessment',
        description: 'Rigorous panel-validated Skill IQ verification and live code evaluation.',
        completionStatus: 'locked',
        courses: [
          { id: 'c_p5_1', title: 'AmIzent Certified AI Architect Comprehensive Defense', duration: '4h', completed: false, locked: true }
        ]
      }
    ]
  },
  {
    id: 'path_cloud_security',
    title: 'Zero Trust DevSecOps & Multi-Cloud Defense',
    description: 'End-to-end security automation across AWS, GCP and Azure with Terraform, OIDC, and runtime eBPF defense.',
    targetRole: 'Senior Cloud Security Architect',
    skills: ['Zero Trust', 'Terraform', 'Kubernetes Security', 'AWS IAM', 'eBPF'],
    courseCount: 3,
    durationHours: 48,
    level: 'Enterprise',
    format: 'self_paced',
    enrolled: false,
    progressPercent: 0,
    stages: [
      {
        stageNumber: 1,
        title: 'Stage 01 – Zero Trust Core Tenets',
        description: 'Identity perimeter, least privilege, and continuous verification.',
        completionStatus: 'available',
        courses: [
          { id: 'course_cloud_security', title: 'Zero-Trust Cloud Architecture & DevSecOps Engineering', duration: '16h', completed: false, locked: false }
        ]
      },
      {
        stageNumber: 2,
        title: 'Stage 02 – Multi-Cloud Container Security',
        description: 'Runtime protection, image signing, and CIS benchmark policy-as-code.',
        completionStatus: 'locked',
        courses: [
          { id: 'c_cs_2', title: 'Container Security & Policy as Code with OPA Gatekeeper', duration: '18h', completed: false, locked: true }
        ]
      },
      {
        stageNumber: 3,
        title: 'Stage 03 – Capstone & Threat Defense Simulator',
        description: 'Live incident simulation and automated mitigation playbooks.',
        completionStatus: 'locked',
        courses: [
          { id: 'c_cs_3', title: 'Multi-Region Breach Simulation Defense Lab', duration: '14h', completed: false, locked: true }
        ]
      }
    ]
  },
  {
    id: 'path_sap_clean_core',
    title: 'SAP S/4HANA Clean-Core Modernization Specialist',
    description: 'Architecting modern cloud-compliant ERP extensions on SAP BTP without modifying the core digital heartbeat.',
    targetRole: 'SAP Enterprise Architect',
    skills: ['SAP S/4HANA', 'Clean-Core', 'SAP BTP', 'Side-by-side Extensibility', 'Event Mesh'],
    courseCount: 3,
    durationHours: 42,
    level: 'Advanced',
    format: 'blended',
    enrolled: true,
    progressPercent: 78,
    stages: [
      {
        stageNumber: 1,
        title: 'Stage 01 – Clean-Core Principles & Assessment',
        description: 'Custom code deprecation and modern API-first integration patterns.',
        completionStatus: 'completed',
        courses: [
          { id: 'course_sap_s4hana', title: 'Applexus S/4HANA Cloud: Clean-Core Implementation & BTP Integration', duration: '14h', completed: true, locked: false }
        ]
      },
      {
        stageNumber: 2,
        title: 'Stage 02 – SAP BTP Side-by-Side Application Development',
        description: 'Deploying cloud-native microservices consuming SAP standard APIs.',
        completionStatus: 'in_progress',
        courses: [
          { id: 'c_sap_2', title: 'CAP Framework & Event-Driven Architecture on SAP BTP', duration: '16h', completed: false, locked: false }
        ]
      },
      {
        stageNumber: 3,
        title: 'Stage 03 – Final Enterprise Project & Certification',
        description: 'Production cutover and zero-modification extensibility audit.',
        completionStatus: 'available',
        courses: [
          { id: 'c_sap_3', title: 'Clean-Core Cloud Certification Assessment', duration: '12h', completed: false, locked: false }
        ]
      }
    ]
  }
];

export const INITIAL_CALENDAR_EVENTS: LmsCalendarEvent[] = [
  {
    id: 'cal_1',
    title: 'Live Lab: Multi-Agent Architecture with LangGraph',
    category: 'live_class',
    date: '2026-02-20',
    startTime: '10:00',
    endTime: '11:30',
    timeZone: 'UTC',
    courseTitle: 'Autonomous AI Agents',
    instructorName: 'Dr. Elena Rostova',
    description: 'Hands-on lab deploying state graphs, human-in-the-loop approvals, and external vector tool integrations.',
    meetingUrl: 'https://meet.amizent.com/live/langgraph-lab-101',
    reminderMinutes: 15,
    isPersonal: false
  },
  {
    id: 'cal_2',
    title: 'Skill IQ Assessment Deadline: Cloud Security',
    category: 'assessment',
    date: '2026-02-22',
    startTime: '14:00',
    endTime: '15:00',
    timeZone: 'UTC',
    courseTitle: 'Zero-Trust Cloud Architecture',
    instructorName: 'Sarah Jenkins',
    description: 'Quarterly adaptive benchmark to assess Terraform zero-trust proficiency.',
    reminderMinutes: 30,
    isPersonal: false
  },
  {
    id: 'cal_3',
    title: 'Assignment Submission: Agent State Machine Diagram',
    category: 'assignment',
    date: '2026-02-24',
    startTime: '23:59',
    endTime: '23:59',
    timeZone: 'UTC',
    courseTitle: 'Autonomous AI Agents',
    description: 'Upload your mermaid or PDF workflow diagram with conditional routing nodes.',
    reminderMinutes: 60,
    isPersonal: false
  },
  {
    id: 'cal_4',
    title: 'Personal Study: Read LangGraph Checkpointing Docs',
    category: 'personal',
    date: '2026-02-19',
    startTime: '18:00',
    endTime: '19:30',
    timeZone: 'UTC',
    description: 'Review Postgres checkpointer implementation and memory retention schemas.',
    reminderMinutes: 10,
    isPersonal: true
  },
  {
    id: 'cal_5',
    title: 'S/4HANA Clean-Core Migration Office Hours',
    category: 'live_class',
    date: '2026-02-25',
    startTime: '16:00',
    endTime: '17:00',
    timeZone: 'UTC',
    courseTitle: 'Applexus S/4HANA Cloud',
    instructorName: 'Marcus Thorne',
    description: 'Open Q&A on side-by-side extensibility and custom code remediation.',
    meetingUrl: 'https://meet.amizent.com/live/clean-core-office-hours',
    reminderMinutes: 15,
    isPersonal: false
  }
];

export const INITIAL_ACHIEVEMENTS: LmsAchievement[] = [
  {
    id: 'ach_1',
    title: '14-Day Learning Streak',
    description: 'Logged into AmIzent LMS and completed at least one lesson daily for 14 continuous days.',
    category: 'streak',
    badgeIcon: 'Flame',
    unlockCondition: 'Learn 14 consecutive days',
    earned: true,
    earnedDate: 'Feb 16, 2026',
    progressPercent: 100
  },
  {
    id: 'ach_2',
    title: 'Skill IQ Champion (280+)',
    description: 'Scored in the top 5% of global enterprise engineers on panel-validated Skill IQ telemetry.',
    category: 'skill',
    badgeIcon: 'Award',
    unlockCondition: 'Attain 280+ Skill IQ',
    earned: true,
    earnedDate: 'Feb 10, 2026',
    progressPercent: 100
  },
  {
    id: 'ach_3',
    title: 'Clean-Core Certified Practitioner',
    description: 'Successfully passed all module evaluations for SAP S/4HANA side-by-side extensibility.',
    category: 'course',
    badgeIcon: 'ShieldCheck',
    unlockCondition: 'Complete Clean-Core track',
    earned: true,
    earnedDate: 'Jan 28, 2026',
    progressPercent: 100
  },
  {
    id: 'ach_4',
    title: '100 Learning Hours Veteran',
    description: 'Invested over 100 verified hands-on hours across interactive video lessons and labs.',
    category: 'hours',
    badgeIcon: 'Clock',
    unlockCondition: 'Accumulate 100 hours of study time',
    earned: false,
    progressPercent: 48
  },
  {
    id: 'ach_5',
    title: 'Assessment Perfectionist',
    description: 'Achieved a 100% first-attempt score on any comprehensive capstone assessment.',
    category: 'excellence',
    badgeIcon: 'Sparkles',
    unlockCondition: 'Score 100% on a final exam',
    earned: false,
    progressPercent: 85
  },
  {
    id: 'ach_6',
    title: 'Peer Mentorship Vanguard',
    description: 'Authored 10 verified answers voted helpful by cohort members in the discussion forum.',
    category: 'skill',
    badgeIcon: 'Users',
    unlockCondition: 'Receive 10 upvoted community answers',
    earned: false,
    progressPercent: 60
  }
];

export const INITIAL_DISCUSSIONS: LmsDiscussion[] = [
  {
    id: 'disc_1',
    title: 'How to handle state persistence in multi-agent LangGraph with Redis vs Postgres?',
    authorName: 'Alex Mercer',
    authorAvatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=120',
    courseTitle: 'Autonomous AI Agents',
    category: 'Architecture',
    previewText: 'When scaling agent swarms with multiple human-in-the-loop checkpoints, is Postgres checkpointer sufficient or does Redis cluster provide lower latency?',
    content: 'We are currently deploying an enterprise agent pipeline where multiple subagents query vector stores and pause for manager approval. I am comparing AsyncPostgresSaver vs RedisSaver for durability across Kubernetes pod restarts.',
    repliesCount: 6,
    viewsCount: 284,
    likesCount: 19,
    createdDate: 'Yesterday at 3:45 PM',
    isPinned: true,
    isFollowing: true,
    replies: [
      {
        id: 'rep_1',
        authorName: 'Dr. Elena Rostova',
        authorAvatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=120',
        createdDate: 'Yesterday at 5:12 PM',
        content: 'Great question Alex! In production, AsyncPostgresSaver is ideal for long-lived human approval pauses that span hours or days. Redis is faster for sub-second agent loops. We actually use a hybrid pattern covered in Module 4.',
        likesCount: 12
      },
      {
        id: 'rep_2',
        authorName: 'Jason Jones',
        authorAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=120',
        createdDate: 'Today at 9:30 AM',
        content: 'Thanks Dr. Elena! I implemented the Postgres checkpointer in yesterday lab and verified that memory persists cleanly across node recycling.',
        likesCount: 4
      }
    ]
  },
  {
    id: 'disc_2',
    title: 'Best practices for Clean-Core S/4HANA custom BAPIs migration to OData V4',
    authorName: 'Kavita Raman',
    authorAvatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=120',
    courseTitle: 'Applexus S/4HANA Cloud',
    category: 'Enterprise ERP',
    previewText: 'Looking for advice on wrapping legacy ECC custom tables using RAP (RESTful Application Programming) on BTP.',
    content: 'We are executing an ECC to S/4HANA private cloud migration. Any tips on deprecating direct table reads and exposing clean CDS views with transactional capability?',
    repliesCount: 3,
    viewsCount: 165,
    likesCount: 8,
    createdDate: '2 days ago',
    isPinned: false,
    isFollowing: false,
    replies: [
      {
        id: 'rep_3',
        authorName: 'Marcus Thorne',
        authorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120',
        createdDate: 'Yesterday at 11:00 AM',
        content: 'Always define CDS custom entities on BTP and use the SAP Cloud SDK to consume the standard APIs. Never touch core database schemas directly.',
        likesCount: 7
      }
    ]
  },
  {
    id: 'disc_3',
    title: 'OIDC Federation vs AWS IAM Roles Anywhere for on-premise Kubernetes pods',
    authorName: 'David Zhang',
    authorAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=120',
    courseTitle: 'Zero-Trust Cloud Architecture',
    category: 'Security',
    previewText: 'Which credential broker provides cleaner audit trails and zero secret exposure in CI/CD runners?',
    content: 'Comparing GitHub Actions OIDC with SPIFFE/SPIRE for workload identity federation into AWS and Azure.',
    repliesCount: 4,
    viewsCount: 210,
    likesCount: 14,
    createdDate: '3 days ago',
    isPinned: false,
    isFollowing: true,
    replies: []
  }
];

export const INITIAL_USER_PROFILE: LmsUserProfileData = {
  fullName: 'Jason Jones',
  displayName: 'Jason J.',
  email: 'jason.jones@amizent.com',
  phone: '+1 (555) 349-8201',
  location: 'San Francisco, CA',
  country: 'United States',
  bio: 'Senior Cloud Engineer & AI Solutions Architect passionate about autonomous agent orchestration, zero-trust cloud infrastructure, and modern enterprise upskilling.',
  avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=250',
  jobTitle: 'Lead Cloud & AI Architect',
  company: 'AmIzent Tech Services',
  industry: 'Enterprise Technology & Cloud Services',
  experienceLevel: 'Senior / Lead (8+ Years)',
  professionalBio: 'Specializing in high-throughput distributed systems, LangGraph agent deployment, Terraform multi-cloud zero-trust automation, and SAP S/4HANA clean-core architecture.',
  linkedinUrl: 'https://linkedin.com/in/jasonjones-cloud',
  portfolioUrl: 'https://jasonjones.dev',
  skills: [
    'Autonomous AI Agents', 
    'LangGraph', 
    'Terraform & IaC', 
    'AWS Cloud Architecture', 
    'Kubernetes Security', 
    'SAP BTP', 
    'Zero-Trust Architecture', 
    'Python & TypeScript'
  ],
  interests: [
    'Agentic Workflow Automation',
    'Enterprise LLM Fine-Tuning',
    'Quantum-Safe Cryptography',
    'eBPF Cloud Defense',
    'Clean-Core SAP Modernization'
  ],
  goals: [
    'Attain 300/300 Skill IQ in Autonomous AI Systems by Q2 2026',
    'Complete the Certified Enterprise AI Architect track',
    'Mentor 25 junior engineers in the AmIzent cohort community'
  ],
  orgDetails: {
    orgName: 'AmIzent Tech Services',
    department: 'Cloud & AI Innovation Lab',
    employeeId: 'AMZ-8849',
    designation: 'Principal Solutions Architect',
    manager: 'Dr. Alistair Vance'
  }
};

export const INITIAL_USER_SETTINGS: LmsUserSettingsData = {
  defaultView: 'overview',
  preferredFormat: 'blended',
  preferredLanguage: 'English (US)',
  weeklyGoalHours: 15,
  defaultCalendarView: 'month',
  twoFactorEnabled: true,
  lastPasswordChange: 'Jan 15, 2026',
  notifications: {
    courseUpdates: true,
    liveClassReminders: true,
    assessmentDeadlines: true,
    assignmentDeadlines: true,
    certificates: true,
    digestFrequency: 'immediate'
  },
  privacy: {
    profileVisibility: 'public',
    showActivity: true,
    showAchievements: true
  },
  supportTickets: [
    {
      id: 'TICK-9021',
      subject: 'Lab Sandbox Cloud Environment Timeout Issue',
      category: 'Hands-on Labs',
      description: 'The Terraform VPC sandbox session expired 10 minutes earlier than scheduled during the transit gateway module.',
      status: 'resolved',
      date: 'Feb 12, 2026'
    },
    {
      id: 'TICK-9045',
      subject: 'Credential Verification URL for LinkedIn Integration',
      category: 'Certifications',
      description: 'Requested verification code format confirmation for adding AMZ-2026-8894 badge to LinkedIn profile.',
      status: 'resolved',
      date: 'Feb 15, 2026'
    }
  ]
};

