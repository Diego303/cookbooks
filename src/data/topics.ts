/**
 * Category definitions for the Library section filters.
 * Topic data is now sourced from Content Collections (src/content/docs/*.mdx).
 */

export const categories = [
  { label: 'Todos', value: 'all' },
  { label: 'REST API', value: 'REST API', color: 'cyan' },
  { label: 'UI KIT', value: 'UI KIT', color: 'pink' },
  { label: 'DEVOPS', value: 'DEVOPS', color: 'yellow' },
  { label: 'FRONTEND', value: 'FRONTEND', color: 'green' },
  { label: 'BACKEND', value: 'BACKEND', color: 'purple' },
  { label: 'ML', value: 'ML', color: 'orange' },
  { label: 'AGENTIC AI', value: 'AGENTIC AI', color: 'red' },
  { label: 'ARCHITECT LABS', value: 'ARCHITECT LABS', color: 'cyan' },
] as const;
