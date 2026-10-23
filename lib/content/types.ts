export type Section = "articles" | "reviews" | "comparisons" | "guides";

export type Accent = "indigo" | "amber" | "teal" | "rose" | "sky";

export interface ProductSpec {
  label: string;
  value: string;
}

/**
 * Template product data. `isTemplate: true` means the name/specs are
 * illustrative placeholders (no real brand/model) to show the layout —
 * replace with a real, tested product before publishing.
 */
export interface ProductCardData {
  name: string;
  tagline: string;
  summary: string;
  pros: string[];
  cons: string[];
  price: string;
  priceCheckedDate: string;
  retailerLabel: string;
  retailerHref: string;
  specs: ProductSpec[];
  isTemplate: boolean;
}

export interface ComparisonRow {
  criterion: string;
  optionA: string;
  optionB: string;
  note?: string;
}

export interface ComparisonTableData {
  optionALabel: string;
  optionBLabel: string;
  rows: ComparisonRow[];
  methodology: string;
}

export interface VerdictData {
  summary: string;
  buyIf: string[];
  skipIf: string[];
  alternatives: string[];
}

export interface BodySection {
  heading: string;
  paragraphs: string[];
  list?: string[];
}

export interface ContentItem {
  slug: string;
  section: Section;
  subtype:
    | "how-to"
    | "explainer"
    | "troubleshooting"
    | "buying-guide"
    | "use-case-guide"
    | "value-guide"
    | "product-selection-guide"
    | "accessories-guide"
    | "review"
    | "comparison";
  title: string;
  dek: string;
  category: string;
  author: string;
  authorRole: string;
  publishedDate: string;
  updatedDate: string;
  readTime: string;
  iconKey:
    | "security"
    | "productivity"
    | "communication"
    | "finance"
    | "cloud"
    | "ai"
    | "marketing";
  /** Overrides which photo variant to use when a category photo is reused across many items (e.g. "security-2"). Falls back to iconKey's base photo if omitted. */
  photoKey?: string;
  accent: Accent;
  intro: string[];
  body: BodySection[];
  product?: ProductCardData;
  products?: ProductCardData[];
  comparison?: ComparisonTableData;
  verdict?: VerdictData;
  featured?: boolean;
  trending?: boolean;
}
