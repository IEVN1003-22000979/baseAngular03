export class colores {
  static calculate(
    band1Digit: number,
    band2Digit: number,
    multiplier: number,
    tolerancePercent: number
  ): { nominal: number; min: number; max: number } {
    const base = band1Digit * 10 + band2Digit;
    const nominal = base * multiplier;
    const tol = (tolerancePercent / 100) * nominal;

    return {
      nominal,
      min: nominal - tol,
      max: nominal + tol,
    };
  }
}