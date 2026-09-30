export function isPangram(sentence: string) {
  return new Set(sentence.toLowerCase().match(/[a-z]/g)).size === 26;
}
