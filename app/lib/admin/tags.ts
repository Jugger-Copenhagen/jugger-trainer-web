import { Tag } from '@/lib/types';

function levenshtein(a: string, b: string): number {
  const la = a.length;
  const lb = b.length;
  const dp: number[][] = Array.from({ length: la + 1 }, () => Array(lb + 1).fill(0));
  for (let i = 0; i <= la; i++) dp[i][0] = i;
  for (let j = 0; j <= lb; j++) dp[0][j] = j;
  for (let i = 1; i <= la; i++) {
    for (let j = 1; j <= lb; j++) {
      dp[i][j] = a[i - 1] === b[j - 1]
        ? dp[i - 1][j - 1]
        : 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
    }
  }
  return dp[la][lb];
}

export const GROUP_ORDER = ['Close matches', 'Other tags'] as const;

export type TagMergeOption = Tag & { _group: string };

function getMergeGroup(distance: number): string {
  if (distance <= 2) return GROUP_ORDER[0];
  return GROUP_ORDER[1];
}

export function getMergeOptions(sourceTag: Tag, tags: Tag[]): TagMergeOption[] {
  const sourceName = sourceTag.tag.toLowerCase();
  return tags
    .filter((t) => t.tagID !== sourceTag.tagID)
    .map((t) => ({
      ...t,
      _group: getMergeGroup(levenshtein(sourceName, t.tag.toLowerCase())),
    }))
    .sort((a, b) => {
      const ga = GROUP_ORDER.indexOf(a._group as (typeof GROUP_ORDER)[number]);
      const gb = GROUP_ORDER.indexOf(b._group as (typeof GROUP_ORDER)[number]);
      if (ga !== gb) return ga - gb;
      return a.tag.localeCompare(b.tag);
    });
}
