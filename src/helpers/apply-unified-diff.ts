import { parsePatch, applyPatch } from 'diff';

export function applyUnifiedDiff(diff: string, fileContent: string): string {
  const parsedDiff = parsePatch(diff);
  let str = fileContent;
  for (const patch of parsedDiff) {
    const result = applyPatch(fileContent, patch);
    if (result === false) {
      throw new Error('Failed to apply patch');
    }
    str = result;
  }
  return str;
}
