import {calculateInvestmentResults, formatter} from "../util/investment.js";

export default function Result ({investmentData}) {
  const results = calculateInvestmentResults(investmentData);

  if (investmentData.duration <= 0 || investmentData.initialInvestment <= 0 ||
    investmentData.expectedReturn <= 0 || investmentData.annualInvestment < 0) {
    return (
      <section className="center">
        <p>Input data is not valid... All values should be positive!</p>
      </section>
    )
  }

  return (
    <section>
      <table id="result">
        <thead>
          <tr key={-1}>
            <th key="Year">Year</th>
            <th key="Investment">Investment Value</th>
            <th key="Interest">Interest (Year)</th>
            <th key="TotalInterest">Total Interest</th>
            <th key="TotalInvestment">Invested Capital</th>
          </tr>
        </thead>
        <tbody>
            {results.map((data, index) => {
              return (
                <tr key={index}>
                  <td key={index + 'year'}>{data.year}</td>
                  <td key={index + 'investmentValue'}>{formatter.format(data.valueEndOfYear)}</td>
                  <td key={index + 'interestYear'}>{formatter.format(data.interest)}{}</td>
                  <td key={index + 'totalInterest'}>{formatter.format(results.slice(0, index + 1).reduce((sum, item) => sum + item.interest, 0))}</td>
                  <td key={index + 'investedCapital'}>{formatter.format(investmentData.initialInvestment + (index + 1) * investmentData.annualInvestment)}</td>
                </tr>
              )
            })}
        </tbody>
      </table>
    </section>
  );
}