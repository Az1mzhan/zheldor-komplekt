import { Section } from "../../types/Section"

export const selectSectionURL = (section: Section): string =>
  section === Section.HOME
    ? "/"
    : `/${Object.keys(Section)[Object.values(Section).indexOf(section)].toLowerCase()}`
