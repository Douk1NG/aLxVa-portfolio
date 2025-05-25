import { Section } from "./section";

export interface MenuProps {
  sections: Section[];
}

export interface MenuItemProps {
  section: Section;
  onClose: () => void;
  currentSection: string;
} 