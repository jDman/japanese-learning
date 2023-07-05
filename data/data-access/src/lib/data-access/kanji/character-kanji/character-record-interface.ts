import { Grade } from "./grade-type";

export interface CharacterRecord {
  readonly kanji: string;
  readonly grade: Grade;
  readonly stroke_count: number;
  readonly meanings: string[];
  readonly kun_readings: string[];
  readonly on_readings: string[];
  readonly name_readings: string[];
}