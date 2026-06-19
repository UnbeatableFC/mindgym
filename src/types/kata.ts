/**
 * Types for the Kata (challenge) content system.
 */

export type Category = 'Tech' | 'Business' | 'Art' | 'General';

export type Difficulty = 'Easy' | 'Medium' | 'Hard';

export interface ChallengeActivity {
  /** Short description of the activity the user must perform */
  description: string;
  /** Optional hint to help the user start */
  hint?: string;
}

export interface Goal {
  /** What the user should produce or achieve */
  description: string;
  /** Optional criteria for success */
  criteria?: string;
}

/**
 * Prompt used by the Game Master AI to give feedback,
 * score, or generate wildcard questions.
 */
export interface GameMasterPrompt {
  /** System prompt that sets the AI’s role */
  system: string;
  /** Example user input that the AI should respond to */
  exampleUser?: string;
  /** Example assistant response that demonstrates the desired feedback */
  exampleAssistant?: string;
}

/** Full definition of a Kata (challenge) */
export interface Kata {
  /** Unique identifier */
  id: string;
  /** Human‑readable title */
  title: string;
  /** Category of the kata */
  category: Category;
  /** Difficulty level */
  difficulty: Difficulty;
  /** Brief scenario description shown to the user */
  scenario: string;
  /** Activities the user must complete */
  activities: ChallengeActivity[];
  /** Goal(s) the user should accomplish */
  goals: Goal[];
  /** Prompts for the Game Master AI */
  gameMaster: GameMasterPrompt;
}