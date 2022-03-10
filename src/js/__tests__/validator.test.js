import Validator from '../validator';

test.each([
  ['Maria', true],
  ['Zamzam326', false],
  ['-Volvo432-', false],
  ['_Solnshko_', false],
  ['Kuba1986', false],
  ['LIGA5678N', false],
  ['Line668ln', true],
])(('Проверка метода validateUsername(%s) === %s'), (obj, exp) => {
  expect(Validator.validateUsername(obj)).toBe(exp);
});
