import { words } from "./words";

/**
 * Returns a random word from the word list.
 * @returns {string} A random word from the word list.
 */
export function getRandomWord(): string {
  const randomIndex = Math.floor(Math.random() * words.length);
  return words[randomIndex];
}

/**
 * Generates a random farewell message for a given programming language.
 *
 * @param {string} language - The name of the programming language to include in the farewell message.
 * @returns {string} A randomly selected farewell message incorporating the specified language.
 */

export function getFarewellText(language: string): string {
  const options = [
    `Farewell, ${language}`,
    `Adios, ${language}`,
    `R.I.P., ${language}`,
    `We'll miss you, ${language}`,
    `Oh no, not ${language}!`,
    `${language} bites the dust`,
    `Gone but not forgotten, ${language}`,
    `The end of ${language} as we know it`,
    `Off into the sunset, ${language}`,
    `${language}, it's been real`,
    `${language}, your watch has ended`,
    `${language} has left the building`,
  ];

  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}
