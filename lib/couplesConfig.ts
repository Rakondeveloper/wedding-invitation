export interface CoupleData {
  id: string;
  groom: string;
  groomLabelKey: string;
  bride: string;
  brideLabelKey: string;
  image: string;
  descKey: string;
}

export const COUPLES_DATA: CoupleData[] = [
  {
    id: "couple-1",
    groom: "Zyd Bais",
    groomLabelKey: "groomLabel",
    bride: "Zydth Busthana",
    brideLabelKey: "brideLabel",
    image: "/images/couple_reference.jpg",
    descKey: "couple1Desc",
  },
  {
    id: "couple-2",
    groom: "Zyd Nishad",
    groomLabelKey: "groomLabel",
    bride: "Zydth Jumaila Nasri",
    brideLabelKey: "brideLabel",
    image: "/images/couple_nishad.jpg",
    descKey: "couple2Desc",
  },
];
