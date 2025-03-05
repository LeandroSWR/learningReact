import {useState} from "react";

export default function UserInput({onUserInputUpdate}) {
  const [initialInvestment, setInitialInvestment] = useState(0);
  const [annualInvestment, setAnnualInvestment] = useState(0);
  const [expectedReturn, setExpectedReturn] = useState(0);
  const [duration, setDuration] = useState(0);

  const investmentData = {
    initialInvestment: initialInvestment,
    annualInvestment: annualInvestment,
    expectedReturn: expectedReturn,
    duration: duration
  }

  function updateInvestmentData(newValues) {
    const updatedData = {
      initialInvestment,
      annualInvestment,
      expectedReturn,
      duration,
      ...newValues, // Merge new values into existing state
    };

    onUserInputUpdate(updatedData);
  }

  function handleInitialInvestmentChange(event) {
    const value = Number(event.target.value);
    setInitialInvestment(value);
    updateInvestmentData({initialInvestment: value});
  }
  function handleAnnualInvestmentChange(event) {
    const value = Number(event.target.value);
    setAnnualInvestment(value);
    updateInvestmentData({annualInvestment: value});
  }
  function handleExpectedReturnChange(event) {
    const value = Number(event.target.value);
    setExpectedReturn(value);
    updateInvestmentData({expectedReturn: value});
  }
  function handleDurationChange(event) {
    const value = Number(event.target.value);
    setDuration(value);
    updateInvestmentData({duration: value});
  }

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>INITIAL INVESTMENT</label>
          <input type="number" onChange={handleInitialInvestmentChange}></input>
        </p>
        <p>
          <label>ANNUAL INVESTMENT</label>
          <input type="number" onChange={handleAnnualInvestmentChange}></input>
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>EXPECTED RETURN</label>
          <input type="number" onChange={handleExpectedReturnChange}></input>
        </p>
        <p>
          <label>DURATION</label>
          <input type="number" onChange={handleDurationChange}></input>
        </p>
      </div>
    </section>
  )
}