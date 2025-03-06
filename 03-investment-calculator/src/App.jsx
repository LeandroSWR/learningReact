import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import Result from "./components/Result.jsx";
import {useState} from "react";

function App() {
  const [investmentData, setInvestmentData] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  });

  function handleInvestmentDataUpdate(updatedData) {
    setInvestmentData(updatedData);
  }

  return (
    <>
      <Header />
      <UserInput onUserInputUpdate={handleInvestmentDataUpdate} userInput={investmentData} />
      <Result investmentData={investmentData} />
    </>
  );
}

export default App
