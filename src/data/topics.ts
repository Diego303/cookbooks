/**
 * Topic definitions for the Library section.
 * Each topic maps to a documentation content component in /components/docs/.
 *
 * Categories: REST API, UI KIT, DEVOPS, FRONTEND, BACKEND, ML, AGENTIC AI
 */

export interface TocItem {
  id: string;
  label: string;
}

export interface Topic {
  id: string;
  title: string;
  category: string;
  categoryColor: 'cyan' | 'pink' | 'yellow' | 'green' | 'purple' | 'orange' | 'red';
  icon: string;
  description: string;
  tags: string[];
  breadcrumb: string[];
  toc: TocItem[];
}

export const categories = [
  { label: 'Todos', value: 'all' },
  { label: 'REST API', value: 'REST API', color: 'cyan' },
  { label: 'UI KIT', value: 'UI KIT', color: 'pink' },
  { label: 'DEVOPS', value: 'DEVOPS', color: 'yellow' },
  { label: 'FRONTEND', value: 'FRONTEND', color: 'green' },
  { label: 'BACKEND', value: 'BACKEND', color: 'purple' },
  { label: 'ML', value: 'ML', color: 'orange' },
  { label: 'AGENTIC AI', value: 'AGENTIC AI', color: 'red' },
] as const;

export const topics: Topic[] = [
  // ─── REST API ───
  {
    id: 'fastapi-rest',
    title: 'FastAPI REST',
    category: 'REST API',
    categoryColor: 'cyan',
    icon: 'zap',
    description:
      'Construcción de APIs REST de alto rendimiento con FastAPI, Pydantic y documentación automática OpenAPI.',
    tags: ['FastAPI', 'Pydantic', 'OpenAPI'],
    breadcrumb: ['Docs', 'REST API', 'FastAPI'],
    toc: [
      { id: 'project-setup', label: 'Project Setup' },
      { id: 'routing-endpoints', label: 'Routing & Endpoints' },
      { id: 'pydantic-schemas', label: 'Pydantic Schemas' },
      { id: 'crud-operations', label: 'CRUD Operations' },
      { id: 'auth-middleware', label: 'Auth & Middleware' },
      { id: 'error-handling', label: 'Error Handling' },
    ],
  },
  {
    id: 'backend-integration',
    title: 'Backend Integration',
    category: 'REST API',
    categoryColor: 'cyan',
    icon: 'server',
    description:
      'Documentación completa de endpoints, esquemas JSON y ejemplos de cURL para integración.',
    tags: ['v1.4.2', 'OpenAPI'],
    breadcrumb: ['Docs', 'REST API', 'Integration Guide'],
    toc: [
      { id: 'authentication', label: 'Authentication' },
      { id: 'rate-limiting', label: 'Rate Limiting' },
      { id: 'core-resources', label: 'Core Resources' },
    ],
  },

  // ─── UI KIT ───
  {
    id: 'design-system',
    title: 'Design System',
    category: 'UI KIT',
    categoryColor: 'pink',
    icon: 'palette',
    description:
      'Galería de componentes visuales, tokens de color y guías de accesibilidad.',
    tags: ['Storybook', 'Figma'],
    breadcrumb: ['Docs', 'UI', 'Design System'],
    toc: [
      { id: 'color-tokens', label: 'Color Tokens' },
      { id: 'typography', label: 'Typography' },
      { id: 'components', label: 'Components' },
      { id: 'accessibility', label: 'Accessibility' },
    ],
  },

  // ─── DEVOPS ───
  {
    id: 'containers-k8s',
    title: 'Containers & K8s',
    category: 'DEVOPS',
    categoryColor: 'yellow',
    icon: 'container',
    description:
      'Docker, Kubernetes, Helm charts y orquestación de servicios en producción.',
    tags: ['Docker', 'K8s', 'Helm'],
    breadcrumb: ['Docs', 'DevOps', 'Containers & K8s'],
    toc: [
      { id: 'docker-fundamentals', label: 'Docker Fundamentals' },
      { id: 'dockerfile-best-practices', label: 'Dockerfile Best Practices' },
      { id: 'k8s-architecture', label: 'K8s Architecture' },
      { id: 'deployments-services', label: 'Deployments & Services' },
      { id: 'helm-charts', label: 'Helm Charts' },
      { id: 'monitoring-logging', label: 'Monitoring & Logging' },
    ],
  },
  {
    id: 'cicd-pipeline',
    title: 'CI/CD Pipeline',
    category: 'DEVOPS',
    categoryColor: 'yellow',
    icon: 'git-branch',
    description:
      'Pipeline completo de CI/CD con GitHub Actions, ArgoCD y Kubernetes para despliegues automáticos.',
    tags: ['CI/CD', 'ArgoCD', 'GitOps'],
    breadcrumb: ['Docs', 'DevOps', 'CI/CD Pipeline'],
    toc: [
      { id: 'pipeline-architecture', label: 'Pipeline Architecture' },
      { id: 'github-actions', label: 'GitHub Actions' },
      { id: 'container-registry', label: 'Container Registry' },
      { id: 'argocd-gitops', label: 'ArgoCD & GitOps' },
      { id: 'environments', label: 'Environments' },
      { id: 'rollback-strategies', label: 'Rollback Strategies' },
    ],
  },
  {
    id: 'terraform-iac',
    title: 'Terraform IaC',
    category: 'DEVOPS',
    categoryColor: 'yellow',
    icon: 'blocks',
    description:
      'Infrastructure as Code con Terraform: providers, módulos, workspaces, estado remoto y CI/CD para infraestructura.',
    tags: ['Terraform', 'IaC', 'HCL'],
    breadcrumb: ['Docs', 'DevOps', 'Terraform IaC'],
    toc: [
      { id: 'terraform-fundamentals', label: 'Fundamentos' },
      { id: 'resources-data', label: 'Resources & Data Sources' },
      { id: 'modules', label: 'Módulos' },
      { id: 'workspaces-envs', label: 'Workspaces & Environments' },
      { id: 'cicd-iac', label: 'CI/CD para IaC' },
    ],
  },
  {
    id: 'apache-airflow',
    title: 'Apache Airflow',
    category: 'DEVOPS',
    categoryColor: 'yellow',
    icon: 'wind',
    description:
      'Orquestación de workflows con Apache Airflow: DAGs, operadores, despliegue en contenedores y patrones de producción.',
    tags: ['Airflow', 'DAGs', 'Orchestration'],
    breadcrumb: ['Docs', 'DevOps', 'Apache Airflow'],
    toc: [
      { id: 'airflow-architecture', label: 'Arquitectura' },
      { id: 'dags-tasks', label: 'DAGs & Tasks' },
      { id: 'operators-hooks', label: 'Operators & Hooks' },
      { id: 'docker-deployment', label: 'Despliegue con Docker' },
      { id: 'production-patterns', label: 'Patrones de Producción' },
    ],
  },

  // ─── FRONTEND ───
  {
    id: 'react-patterns',
    title: 'React Patterns',
    category: 'FRONTEND',
    categoryColor: 'green',
    icon: 'code',
    description:
      'Colección de hooks personalizados, gestión de estado y optimización de renders.',
    tags: ['Next.js', 'Hooks'],
    breadcrumb: ['Docs', 'Frontend', 'React Patterns'],
    toc: [
      { id: 'custom-hooks', label: 'Custom Hooks' },
      { id: 'state-management', label: 'State Management' },
      { id: 'performance', label: 'Performance' },
      { id: 'testing', label: 'Testing' },
    ],
  },
  {
    id: 'astro-guide',
    title: 'Astro Framework',
    category: 'FRONTEND',
    categoryColor: 'green',
    icon: 'rocket',
    description:
      'Desarrollo de sitios web con Astro: islands architecture, componentes, SSG y content collections.',
    tags: ['Astro', 'Islands', 'SSG'],
    breadcrumb: ['Docs', 'Frontend', 'Astro Framework'],
    toc: [
      { id: 'astro-fundamentals', label: 'Fundamentals' },
      { id: 'islands-architecture', label: 'Islands Architecture' },
      { id: 'components-layouts', label: 'Components & Layouts' },
      { id: 'content-collections', label: 'Content Collections' },
      { id: 'integrations', label: 'Integrations' },
    ],
  },

  // ─── BACKEND ───
  {
    id: 'python-backend',
    title: 'Python Backend',
    category: 'BACKEND',
    categoryColor: 'purple',
    icon: 'terminal',
    description:
      'Arquitectura de backend en Python: patrones, bases de datos, testing y despliegue en producción.',
    tags: ['Python', 'SQLAlchemy', 'Alembic'],
    breadcrumb: ['Docs', 'Backend', 'Python Backend'],
    toc: [
      { id: 'project-structure', label: 'Project Structure' },
      { id: 'database-sqlalchemy', label: 'Database & SQLAlchemy' },
      { id: 'migrations-alembic', label: 'Migrations (Alembic)' },
      { id: 'async-patterns', label: 'Async Patterns' },
      { id: 'testing-pytest', label: 'Testing (Pytest)' },
      { id: 'production-deployment', label: 'Production Deployment' },
    ],
  },

  // ─── MACHINE LEARNING ───
  {
    id: 'keras-models',
    title: 'Deep Learning Keras',
    category: 'ML',
    categoryColor: 'orange',
    icon: 'brain',
    description:
      'Desarrollo de modelos de deep learning con Keras: arquitecturas, entrenamiento, evaluación y deploy.',
    tags: ['Keras', 'TensorFlow', 'GPU'],
    breadcrumb: ['Docs', 'ML', 'Deep Learning Keras'],
    toc: [
      { id: 'keras-setup', label: 'Setup & Environment' },
      { id: 'model-architectures', label: 'Model Architectures' },
      { id: 'training-pipeline', label: 'Training Pipeline' },
      { id: 'evaluation-metrics', label: 'Evaluation & Metrics' },
      { id: 'model-export', label: 'Model Export & Serving' },
    ],
  },
  {
    id: 'mlflow-versioning',
    title: 'MLFlow Versioning',
    category: 'ML',
    categoryColor: 'orange',
    icon: 'git-compare',
    description:
      'Sistema de versionado de modelos con MLFlow: tracking, registry, comparación y despliegue.',
    tags: ['MLFlow', 'Registry', 'Tracking'],
    breadcrumb: ['Docs', 'ML', 'MLFlow Versioning'],
    toc: [
      { id: 'mlflow-setup', label: 'Setup & Architecture' },
      { id: 'experiment-tracking', label: 'Experiment Tracking' },
      { id: 'model-registry', label: 'Model Registry' },
      { id: 'model-comparison', label: 'Model Comparison' },
      { id: 'deployment-serving', label: 'Deployment & Serving' },
    ],
  },

  // ─── AGENTIC AI ───
  {
    id: 'agent-containers',
    title: 'Agents in Containers',
    category: 'AGENTIC AI',
    categoryColor: 'red',
    icon: 'boxes',
    description:
      'Arquitectura de agentes IA en contenedores Docker con orquestación y escalado automático.',
    tags: ['Docker', 'Agents', 'Scale'],
    breadcrumb: ['Docs', 'Agentic AI', 'Agents in Containers'],
    toc: [
      { id: 'agent-architecture', label: 'Agent Architecture' },
      { id: 'containerizing-agent', label: 'Containerizing an Agent' },
      { id: 'message-driven', label: 'Message-driven Communication' },
      { id: 'k8s-deployment', label: 'K8s Deployment' },
      { id: 'observability', label: 'Observability' },
    ],
  },
  {
    id: 'langchain-agents',
    title: 'LangChain Agents',
    category: 'AGENTIC AI',
    categoryColor: 'red',
    icon: 'link',
    description:
      'Construcción de agentes con LangChain: tools, chains, memory y custom agents.',
    tags: ['LangChain', 'LLM', 'Tools'],
    breadcrumb: ['Docs', 'Agentic AI', 'LangChain Agents'],
    toc: [
      { id: 'langchain-basics', label: 'LangChain Basics' },
      { id: 'tools-function-calling', label: 'Tools & Function Calling' },
      { id: 'langgraph-workflows', label: 'LangGraph Workflows' },
      { id: 'memory-persistence', label: 'Memory & Persistence' },
      { id: 'rag-integration', label: 'RAG Integration' },
    ],
  },
  {
    id: 'google-a2a',
    title: 'Google A2A Protocol',
    category: 'AGENTIC AI',
    categoryColor: 'red',
    icon: 'network',
    description:
      'Protocolo Agent-to-Agent (A2A) de Google para comunicación entre agentes autónomos.',
    tags: ['A2A', 'Google', 'Protocol'],
    breadcrumb: ['Docs', 'Agentic AI', 'Google A2A'],
    toc: [
      { id: 'protocol-overview', label: 'Protocol Overview' },
      { id: 'agent-card', label: 'Agent Card' },
      { id: 'task-management', label: 'Task Management' },
      { id: 'server-implementation', label: 'Server Implementation' },
      { id: 'streaming', label: 'Streaming' },
    ],
  },
  {
    id: 'mcp-python',
    title: 'MCP Python SDK',
    category: 'AGENTIC AI',
    categoryColor: 'red',
    icon: 'plug',
    description:
      'Model Context Protocol (MCP): creación de servidores y clientes con el SDK oficial de Python.',
    tags: ['MCP', 'SDK', 'Python'],
    breadcrumb: ['Docs', 'Agentic AI', 'MCP Python'],
    toc: [
      { id: 'mcp-overview', label: 'Protocol Overview' },
      { id: 'creating-server', label: 'Creating a Server' },
      { id: 'transport', label: 'Transport' },
      { id: 'client-integration', label: 'Client Integration' },
      { id: 'advanced-patterns', label: 'Advanced Patterns' },
    ],
  },
  {
    id: 'prompt-engineering',
    title: 'Prompt Engineering',
    category: 'AGENTIC AI',
    categoryColor: 'red',
    icon: 'message-square-text',
    description:
      'Ingeniería de prompts avanzada: Chain-of-Thought, Few-Shot, ReAct, system prompts profesionales y evaluación.',
    tags: ['Prompts', 'CoT', 'ReAct'],
    breadcrumb: ['Docs', 'Agentic AI', 'Prompt Engineering'],
    toc: [
      { id: 'prompt-fundamentals', label: 'Fundamentos' },
      { id: 'advanced-techniques', label: 'Técnicas Avanzadas' },
      { id: 'agent-patterns', label: 'Patrones para Agentes' },
      { id: 'system-prompts', label: 'System Prompts' },
      { id: 'evaluation', label: 'Evaluación de Prompts' },
    ],
  },
  {
    id: 'crewai-multiagent',
    title: 'CrewAI Multi-Agent',
    category: 'AGENTIC AI',
    categoryColor: 'red',
    icon: 'users',
    description:
      'Sistemas multi-agente con CrewAI: roles, tareas, herramientas custom, workflows y patrones de producción.',
    tags: ['CrewAI', 'Multi-Agent', 'Crews'],
    breadcrumb: ['Docs', 'Agentic AI', 'CrewAI Multi-Agent'],
    toc: [
      { id: 'crewai-overview', label: 'CrewAI Overview' },
      { id: 'agents-roles', label: 'Agents & Roles' },
      { id: 'tasks-workflows', label: 'Tasks & Workflows' },
      { id: 'custom-tools', label: 'Custom Tools' },
      { id: 'production-patterns', label: 'Production Patterns' },
    ],
  },
];
