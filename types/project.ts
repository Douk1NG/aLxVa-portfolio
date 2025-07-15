/**
 * Project entry type
 */
export type Project = {
  /** Project title */
  title: string;
  /** Project description */
  description: string;
  /** List of technologies used */
  tech: string[];
  /** Link to GitHub repository */
  github: string;
  /** Link to live demo */
  demo: string;
};
