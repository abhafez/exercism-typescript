const LETTER_A_CODE = 97;
const ALPHABET_LENGTH = 26;

export function isPangram(str: string) {
  const lowerCaseAlphabet = Array.from({ length: ALPHABET_LENGTH }, (_, i) => String.fromCharCode(LETTER_A_CODE + i));

  const lowerCaseStr = str.toLowerCase();

  return lowerCaseAlphabet.every(letter => lowerCaseStr.includes(letter));
}
