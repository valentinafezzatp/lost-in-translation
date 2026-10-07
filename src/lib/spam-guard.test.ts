import { describe, expect, it } from 'vitest';
import { COOLDOWN_MS, MIN_FILL_MS, cooldownRemaining, isTooFast } from './spam-guard';

describe('isTooFast', () => {
  it('flags a submit without any prior interaction (programmatic fill)', () => {
    expect(isTooFast(null, 10_000)).toBe(true);
  });

  it('flags a submit faster than a human can fill the form', () => {
    expect(isTooFast(1_000, 1_000 + MIN_FILL_MS - 1)).toBe(true);
  });

  it('accepts a submit at exactly the minimum fill time', () => {
    expect(isTooFast(1_000, 1_000 + MIN_FILL_MS)).toBe(false);
  });

  it('accepts a normal human pace', () => {
    expect(isTooFast(1_000, 1_000 + 45_000)).toBe(false);
  });
});

describe('cooldownRemaining', () => {
  it('returns 0 when nothing was sent before', () => {
    expect(cooldownRemaining(null, 5_000)).toBe(0);
  });

  it('returns the remaining time while the cooldown is active', () => {
    expect(cooldownRemaining(10_000, 10_000 + 15_000)).toBe(COOLDOWN_MS - 15_000);
  });

  it('returns 0 once the cooldown has passed', () => {
    expect(cooldownRemaining(10_000, 10_000 + COOLDOWN_MS)).toBe(0);
  });

  it('ignores corrupted timestamps from the future', () => {
    expect(cooldownRemaining(99_000, 10_000)).toBe(0);
  });
});
