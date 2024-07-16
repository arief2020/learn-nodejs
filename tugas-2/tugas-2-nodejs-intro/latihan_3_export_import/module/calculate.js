class Calculate {
  /**
   * Creates a Calculate instance.
   *
   * @param {number} number1 - The first number.
   * @param {number} number2 - The second number.
   */
  constructor (number1, number2) {
    this.number1 = number1
    this.number2 = number2
  }

  /**
   * Calculates the sum of number1 and number2.
   *
   * @return {number} The sum of number1 and number2.
   */
  sum () {
    return this.number1 + this.number2
  }
}

module.exports = Calculate
