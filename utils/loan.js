import { europify, formatAmount } from './formatting'
export default class Loan {
  /**
   *
   * @param {Number} rate Nominal interest rate in percent
   * @param {Number} startupFee Startup fee of loan
   * @param {Number} monthlyFee Monthly fee of loan
   * @param {Number} years Number of years of the mortgage
   * @param {Number} loanAmount Required loan amount
   */
  constructor(
    rate = 12.9,
    startupFee = 950,
    monthlyFee = 30,
    years = 5,
    loanAmount = 100000
  ) {
    this.rate = rate
    this.startupFee = startupFee
    this.monthlyFee = monthlyFee
    this.years = years
    this.loanAmount = loanAmount
  }

  /**
   * Number of monthly terms of the mortgage
   */
  monthlyTerms() {
    return this.years * 12
  }

  /**
   * Monthly payment amount of the mortgage
   */
  monthlyPayment() {
    const termInterest = this.rate / 100 / 12
    return (
      (this.loanAmount * termInterest) /
        (1 - 1 / (1 + termInterest) ** this.monthlyTerms()) +
      Math.round(this.monthlyFee)
    )
  }

  /**
   * Internal rate of return
   */
  irr() {
    const sum = this.monthlyTerms() * this.monthlyPayment() + this.startupFee
    let irr1 = (this.rate / 100) * 2
    for (let i = 0; i < 4; i++) {
      const rinv = 1 / (1 + irr1 / 12)
      const npv =
        this.startupFee +
        (this.monthlyPayment() * (rinv ** (this.monthlyTerms() + 1) - rinv)) /
          (rinv - 1)
      irr1 = (irr1 * Math.log(this.loanAmount / sum)) / Math.log(npv / sum)
    }
    return irr1
  }

  /**
   * Effective interest rate in percent
   */
  effective() {
    return ((this.irr() / 12 + 1) ** 12 - 1) * 100
  }

  /**
   * Total loan including costs
   */
  total() {
    return this.monthlyTerms() * this.monthlyPayment() + this.startupFee
  }

  /**
   * Cost of loan
   */
  cost() {
    return (
      this.monthlyTerms() * this.monthlyPayment() +
      this.startupFee -
      this.loanAmount
    )
  }

  stats() {
    return {
      rate: this.rate,
      rateFormatted: europify(this.rate),
      startupFee: this.startupFee,
      monthlyFee: this.monthlyFee,
      years: this.years,
      loanAmount: this.loanAmount,
      monthlyPayment: this.monthlyPayment(),
      monthlyPaymentFormatted: formatAmount(this.monthlyPayment(), {
        delimiter: '.',
        hasTrailingComma: true,
      }),
      irr: this.irr(),
      effective: this.effective(),
      effectiveFormatted: europify(this.effective().toFixed(2)),
      total: this.total(),
      totalFormatted: formatAmount(this.total()),
      cost: this.cost(),
      costFormatted: formatAmount(this.cost()),
    }
  }
}
