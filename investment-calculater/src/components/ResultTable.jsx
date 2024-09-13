import { formatter } from "../util/investment";
import { calculateInvestmentResults } from "../util/investment";

export default function ResultTable({ input }) {
  const result = calculateInvestmentResults(input);
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest(Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {result.map((item) => {
          const totalInterest =
            item.valueEndOfYear -
            item.annualInvestment * item.year -
            input.initialInvestment;
          const investmentCapital = item.valueEndOfYear - totalInterest;
          return (
            <tr key={item.year}>
              <td>{item.year}</td>
              <td>{formatter.format(item.valueEndOfYear)}</td>
              <td>{formatter.format(item.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(investmentCapital)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
