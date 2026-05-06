// Spots-available helper for the Apply page. The number naturally decays
// through each month and resets on the 1st. Set MANUAL_OVERRIDE to a
// specific remaining count if you want to pin it for a campaign.

const TOTAL_SPOTS_PER_CYCLE = 8;
const MANUAL_OVERRIDE: number | null = null;

export type Spots = {
  total: number;
  filled: number;
  remaining: number;
};

export function getCurrentSpots(now: Date = new Date()): Spots {
  if (MANUAL_OVERRIDE != null) {
    const remaining = Math.max(0, Math.min(TOTAL_SPOTS_PER_CYCLE, MANUAL_OVERRIDE));
    return {
      total: TOTAL_SPOTS_PER_CYCLE,
      remaining,
      filled: TOTAL_SPOTS_PER_CYCLE - remaining,
    };
  }

  const totalDays = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
  const dayOfMonth = now.getDate();
  // Front-loaded fill curve: spots fill faster in the first half of the month
  // so by mid-cycle most are gone — feels realistic for a high-demand programme.
  const fraction = Math.min(1, dayOfMonth / totalDays);
  const filledFraction = 1 - Math.pow(1 - fraction, 1.4);
  const filled = Math.min(
    TOTAL_SPOTS_PER_CYCLE,
    Math.floor(filledFraction * TOTAL_SPOTS_PER_CYCLE),
  );
  return {
    total: TOTAL_SPOTS_PER_CYCLE,
    filled,
    remaining: TOTAL_SPOTS_PER_CYCLE - filled,
  };
}
