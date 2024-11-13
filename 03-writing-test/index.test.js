// Import fungsi `sum` dan modul `assert` untuk pengujian
import { sum } from './index.js';
import assert from 'node:assert/strict';
import test from 'node:test';

test('sum should correctly add two positive numbers', () => {
  assert.strictEqual(sum(2, 3), 5, '2 + 3 should be equal to 5');
});

test('sum should correctly add a positive number and zero', () => {
  assert.strictEqual(sum(4, 0), 4, '4 + 0 should be equal to 4');
});

test('sum should correctly add two negative numbers', () => {
  assert.strictEqual(sum(-2, -3), -5, '-2 + -3 should be equal to -5');
});

test('sum should return zero when both arguments are zero', () => {
  assert.strictEqual(sum(0, 0), 0, '0 + 0 should be equal to 0');
});

test('sum should correctly handle positive and negative numbers', () => {
  assert.strictEqual(sum(5, -3), 2, '5 + (-3) should be equal to 2');
});
