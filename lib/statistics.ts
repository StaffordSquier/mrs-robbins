/**
 * Statistical Functions
 * Utilities for analyzing voice variable effectiveness
 */

/**
 * Calculate ranks for an array of numbers
 * Used for Spearman correlation calculation
 */
export function getRanks(arr: number[]): number[] {
  const sorted = [...arr]
    .map((val, idx) => ({ val, idx }))
    .sort((a, b) => a.val - b.val);

  const ranks = new Array(arr.length);
  sorted.forEach((item, rank) => {
    ranks[item.idx] = rank + 1;
  });

  return ranks;
}

/**
 * Calculate Spearman's rank correlation coefficient
 * Measures monotonic relationship between two variables
 * Returns value between -1 and 1
 */
export function calculateSpearman(x: number[], y: number[]): number {
  if (x.length !== y.length) {
    throw new Error('Arrays must have the same length');
  }

  const n = x.length;
  if (n < 2) {
    return 0;
  }

  const rankX = getRanks(x);
  const rankY = getRanks(y);

  let sumD2 = 0;
  for (let i = 0; i < n; i++) {
    const d = rankX[i] - rankY[i];
    sumD2 += d * d;
  }

  return 1 - (6 * sumD2) / (n * (n * n - 1));
}

/**
 * Calculate R-squared (coefficient of determination)
 * Measures how well the regression line fits the data
 * Returns value between 0 and 1
 */
export function calculateRSquared(x: number[], y: number[]): number {
  if (x.length !== y.length) {
    throw new Error('Arrays must have the same length');
  }

  const n = x.length;
  if (n < 2) {
    return 0;
  }

  const meanY = y.reduce((a, b) => a + b, 0) / n;

  let sumXY = 0;
  let sumX = 0;
  let sumY = 0;
  let sumX2 = 0;

  for (let i = 0; i < n; i++) {
    sumXY += x[i] * y[i];
    sumX += x[i];
    sumY += y[i];
    sumX2 += x[i] * x[i];
  }

  const denominator = n * sumX2 - sumX * sumX;
  if (denominator === 0) {
    return 0;
  }

  const slope = (n * sumXY - sumX * sumY) / denominator;
  const intercept = (sumY - slope * sumX) / n;

  let ssRes = 0;
  let ssTot = 0;

  for (let i = 0; i < n; i++) {
    const predicted = slope * x[i] + intercept;
    ssRes += Math.pow(y[i] - predicted, 2);
    ssTot += Math.pow(y[i] - meanY, 2);
  }

  if (ssTot === 0) {
    return 0;
  }

  return 1 - (ssRes / ssTot);
}

/**
 * Calculate basic statistics for an array
 */
export function calculateStats(values: number[]): {
  min: number;
  max: number;
  mean: number;
  delta: number;
} {
  if (values.length === 0) {
    return { min: 0, max: 0, mean: 0, delta: 0 };
  }

  const min = Math.min(...values);
  const max = Math.max(...values);
  const mean = values.reduce((a, b) => a + b, 0) / values.length;
  const delta = max - min;

  return { min, max, mean, delta };
}
