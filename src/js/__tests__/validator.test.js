import Validator from '../validator';

test.each([
  ['M_a_r_i_s_a', true],
  ['Zamzam326', false],
  ['-Volvo432-', false],
  ['_Solnshko_', false],
  ['KubaLibra', true],
  ['LIGA5678N', false],
  ['Line668ln', false],
])(('Проверка метода validateUsername(%s) === %s'), (obj, exp) => {
  expect(Validator.validateUsername(obj)).toBe(exp);
});
