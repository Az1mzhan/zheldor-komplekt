import { useEffect, useState } from "react"
import { selectSectionURL } from "./selectSectionURL"
import { Section } from "../../types/Section"
import type { SectionObject } from "../../types/SectionObject"

export const useSections = () => {
  const [sectionTitles, setSectionTitles] = useState<Section[]>(
    Object.values(Section),
  )
  const [sections, setSections] = useState<SectionObject[]>([])

  useEffect(() => {
    setSections([])

    sectionTitles.forEach(sectionTitle => {
      setSections(sections => [
        ...sections,
        {
          title: sectionTitle,
          url: selectSectionURL(sectionTitle),
        },
      ])
    })
  }, [])

  return sections
}
