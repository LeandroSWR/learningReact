import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import Result from "./components/Result.jsx";
import {useState} from "react";
import {calculateInvestmentResults} from "./util/investment.js";

function App() {
  const [investmentData, setInvestmentData] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  });
  const [annualData, setAnnualData] = useState(calculateInvestmentResults(investmentData));

  function handleInvestmentDataUpdate(updatedData) {
    setInvestmentData(updatedData);
    setAnnualData(calculateInvestmentResults(updatedData));
  }

  return (
    <>
      <Header />
      <UserInput onUserInputUpdate={handleInvestmentDataUpdate} userInput={investmentData} />
      <Result annualData={annualData} investmentData={investmentData} />
    </>
  );
}

export default App
