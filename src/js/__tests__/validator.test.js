import Validator from '../validator';

test.each([
  ['M_a_r_i_s_a', true],
  ['KubaLibra', true],
  ['mar1sa', true],
  ['Zamzam326', false],
  ['-Volvo432-', false],
  ['_Solnshko_', false],
  ['kuba_libra', true],
  ['LIGA5678N', false],
  ['Line668ln', true],
  ['Li33ne66ln', true],
])(('Проверка метода validateUsername(%s) === %s'), (obj, exp) => {
  expect(Validator.validateUsername(obj)).toBe(exp);
});
