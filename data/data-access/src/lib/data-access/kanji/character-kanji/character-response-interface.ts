import { FormerJLPTLevel } from "./former-jlpt-level-type";
import { Grade } from "./grade-type";

export interface CharacterResponse {
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