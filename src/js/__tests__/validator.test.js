import Validator from '../validator';

test.each([
  ['mar1sa', true],
  ['Zamzam326', false],
  ['-Volvo432-', false],
  ['_Solnshko_', false],
  ['kuba_libra', true],
  ['LIGA5678N', false],
  ['Line668ln', false],
])(('Проверка метода validateUsername(%s) === %s'), (obj, exp) => {
  expect(Validator.validateUsername(obj)).toBe(exp);
});
