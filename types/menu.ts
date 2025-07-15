import { type Section } from "./section";

/**
 * Props for the Menu component
 */
export type MenuProps = {
  sections: Section[];
};

/**
 * Props for navigation menu items
 */
export type NavMenuItemProps = {
  section: Section;
  onClose: () => void;
  currentSection: string;
};

/**
 * Props for section menu items
 */
export type SectionMenuItemProps = {
  section: Section;
  onClose: () => void;
  currentSection: string;
}; 