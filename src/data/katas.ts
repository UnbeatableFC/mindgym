import { Kata } from '@/types/kata';

/**
 * Central library of Kata (challenge) definitions.
 * Each kata includes metadata, a scenario, activities, goals,
 * and prompts for the Game Master AI.
 */
export const katas: Kata[] = [
  {
    id: 'kata-tech-001',
    title: 'Build a Simple To‑Do List API',
    category: 'Tech',
    difficulty: 'Easy',
    scenario:
      'You need to create a minimal backend API that stores to‑do items in memory. The API should support creating, reading, updating, and deleting items.',
    activities: [
      {
        description:
          'Implement an Express‑style handler (or a plain Node function) that supports CRUD operations for to‑do items.',
        hint: 'Use an array to store items and generate IDs with Date.now().',
      },
    ],
    goals: [
      {
        description:
          'Expose functions `createTodo`, `listTodos`, `updateTodo`, and `deleteTodo` that operate on the in‑memory store.',
        criteria: 'All functions should return the updated list of items.',
      },
    ],
    gameMaster: {
      system:
        'You are a Game Master that evaluates the submitted code for the “Build a Simple To‑Do List API” kata. Provide concise feedback, a score out of 10, and a wildcard question that encourages the user to think about persistence.',
      exampleUser:
        'Here is my implementation of the CRUD functions in TypeScript.',
      exampleAssistant:
        'Great job! Your functions correctly handle all CRUD operations. Score: 9/10. Wildcard: How would you modify this API to store data in a remote database instead of memory?',
    },
  },
  {
    id: 'kata-business-001',
    title: 'Design a One‑Page Pitch Deck',
    category: 'Business',
    difficulty: 'Medium',
    scenario:
      'You are preparing a pitch for a new AI‑powered language‑learning app. The deck should convey the problem, solution, market size, business model, and a call‑to‑action.',
    activities: [
      {
        description:
          'Create a markdown file that contains five sections: Problem, Solution, Market, Business Model, Call‑to‑Action.',
        hint: 'Use clear headings and bullet points for each section.',
      },
    ],
    goals: [
      {
        description:
          'Produce a well‑structured markdown document that could be turned into a slide deck.',
        criteria: 'Each section must contain at least three concise bullet points.',
      },
    ],
    gameMaster: {
      system:
        'You are a Game Master reviewing a pitch‑deck markdown. Give feedback on clarity, completeness, and persuasiveness, then ask a wildcard about user acquisition strategy.',
      exampleUser: 'Here is my pitch‑deck markdown.',
      exampleAssistant:
        'The deck clearly outlines the problem and solution, but the market section could use more data. Score: 7/10. Wildcard: What would be your first growth‑hacking experiment to acquire early users?',
    },
  },
  {
    id: 'kata-art-001',
    title: 'Create a Minimalist Icon Set',
    category: 'Art',
    difficulty: 'Easy',
    scenario:
      'Design a set of three 24×24 pixel icons (home, profile, settings) that share a consistent visual style and can be used in a mobile app.',
    activities: [
      {
        description:
          'Draw the icons using a vector tool (e.g., Figma, Sketch) or a pixel editor and export them as PNG files.',
        hint: 'Stick to a single stroke weight and a limited color palette.',
      },
    ],
    goals: [
      {
        description:
          'Provide three PNG files named `home.png`, `profile.png`, and `settings.png` placed in `assets/images/`.',
        criteria: 'All icons must be 24×24 pixels and visually cohesive.',
      },
    ],
    gameMaster: {
      system:
        'You are a Game Master evaluating a minimalist icon set. Comment on visual consistency, recognizability, and suggest a wildcard about animation.',
      exampleUser: 'Here are the three exported PNG files.',
      exampleAssistant:
        'The icons share a clean line style and work well at small sizes. Score: 8/10. Wildcard: How could you animate these icons to give subtle feedback on press?',
    },
  },
  {
    id: 'kata-general-001',
    title: 'Lateral Thinking: The Bridge Riddle',
    category: 'General',
    difficulty: 'Medium',
    scenario:
      'You encounter a riddle: “A man walks across a bridge at night. He sees a light, but it isn’t a lantern. He continues walking and reaches the other side safely. How did he see the light?”',
    activities: [
      {
        description:
          'Write a short paragraph explaining the lateral‑thinking solution to the riddle.',
        hint: 'Think about natural sources of light that don’t require a lantern.',
      },
    ],
    goals: [
      {
        description:
          'Provide the correct answer and a brief explanation of the reasoning.',
        criteria: 'The answer should be “the moon” or “stars” with a clear justification.',
      },
    ],
    gameMaster: {
      system:
        'You are a Game Master reviewing a lateral‑thinking answer. Give feedback on creativity and correctness, then ask a wildcard that pushes the user to create their own riddle.',
      exampleUser: 'The man saw the moon’s reflection on the water.',
      exampleAssistant:
        'Correct! The moon (or stars) provides natural light. Score: 9/10. Wildcard: Can you craft a new riddle that uses a similar “obvious but hidden” clue?',
    },
  },
] as const;