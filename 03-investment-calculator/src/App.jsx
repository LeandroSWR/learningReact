import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import Result from "./components/Result.jsx";
import {useState} from "react";
import {calculateInvestmentResults} from "./util/investment.js";

function App() {
  const [annualData, setAnnualData] = useState([]);
  const [investmentData, setInvestmentData] = useState(0);

  function handleInvestmentDataUpdate(investmentData) {
    setAnnualData(() => calculateInvestmentResults(investmentData));
    setInvestmentData(investmentData);
  }

  return (
    <>
      <Header />
      <UserInput onUserInputUpdate={handleInvestmentDataUpdate} />
      <Result annualData={annualData} investmentData={investmentData} />
    </>
  );
}

export default App
