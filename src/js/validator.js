export default class Validator {
  // eslint-disable-next-line consistent-return
  static validateUsername(login) {
    const check1 = new RegExp('^[a-zA-Z]+[a-zA-Z-_[0-9]*]+[a-zA-Z]+$');
    const check2 = new RegExp(!'[0-9]{3}');
    if (check1 && check2) {
      return check1.test(login) && check2.test(login);
    }
  }
}

// Первая регулярка допустимы только латинские буквы, символы тире -,
// подчёркивания _ и цифры(0 - 9), а также НЕ начинаться и заканчиваться цифрами,
// символами подчёркивания или тире;
// Вторая регулярка имя не должно содержать подряд более трёх цифр
