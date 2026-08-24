import { TranslationSchema } from "./translations";

export interface CoupleData {
  id: string;
  groom: string;
  groomLabelKey: keyof TranslationSchema;
  bride: string;
  brideLabelKey: keyof TranslationSchema;
  image: string;
  descKey: keyof TranslationSchema;
}

export interface HeroCoupleData {
  id: "bais" | "nishad";
  tabLabel: string;
  unionLabelKey: keyof TranslationSchema;
  groom: string;
  bride: string;
  avatar: string;
  bgVariant: "floral" | "star";
}

export const HERO_COUPLES: HeroCoupleData[] = [
  {
    id: "bais",
    tabLabel: "Bais & Busthana",
    unionLabelKey: "union1Label",
    groom: "Zyd Bais",
    bride: "Zydth Busthana",
    avatar: "/images/couple_reference.jpg",
    bgVariant: "floral",
  },
  {
    id: "nishad",
    tabLabel: "Nishad & Jumaila",
    unionLabelKey: "union2Label",
    groom: "Zyd Nishad",
    bride: "Zydth Jumaila Nasri",
    avatar: "/images/couple_nishad.jpg",
    bgVariant: "star",
  },
];

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
