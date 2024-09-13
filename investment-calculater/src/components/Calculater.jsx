export default function Calculater({ onInputChange, userInput }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="initial-investment">Initial Investment</label>
          <input
            required
            type="number"
            id="initial-investment"
            value={userInput.initialInvestment}
            onChange={(event) =>
              onInputChange("initialInvestment", event.target.value)
            }
          />
        </p>
        <p>
          <label htmlFor="annual-investment">Annual Investment</label>
          <input
            required
            type="number"
            id="annual-investment"
            value={userInput.annualInvestment}
            onChange={(event) =>
              onInputChange("annualInvestment", event.target.value)
            }
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">Expected Return </label>
          <input
            required
            type="number"
            id="expected-return"
            value={userInput.expectedReturn}
            onChange={(event) =>
              onInputChange(
                "expectedReturn",
                event.target.value > 0 ? event.target.value : 1
              )
            }
          />
        </p>
        <p>
          <label htmlFor="duration">Duration</label>
          <input
            required
            type="number"
            id="duration"
            value={userInput.duration}
            onChange={(event) => onInputChange("duration", event.target.value)}
          />
        </p>
      </div>
    </section>
  );
}
