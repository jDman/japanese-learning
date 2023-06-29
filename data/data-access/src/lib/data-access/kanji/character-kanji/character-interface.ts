type Grade = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | null;
type FormerJLPTLevel = '1' | '2' | '3' | '4' | null;

export interface CharacterRecord {
  readonly kanji: string;
  readonly grade: Grade;
  readonly stroke_count: number;
  readonly meanings: string[];
  readonly heisig_en: string | null;
  readonly kun_readings: string[];
  readonly on_readings: string[];
  readonly name_readings: string[];
  readonly jlpt: FormerJLPTLevel;
  readonly unicode: string;
}