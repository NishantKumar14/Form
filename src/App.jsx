import { useState } from "react";
import PersonalDetail from "./component/PersonalDetail";
import BusinessDetail from "./component/BusinessDetail";
import LoanDetail from "./component/LoanDetail";
import "./App.css";

export default function App() {
  const [step, setStep] = useState(1);

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };
  return (
    <div>
      {step === 1 && <PersonalDetail onNext={handleNext} />}
      {step === 2 && <BusinessDetail onNext={handleNext} onBack={handleBack} />}
      {step === 3 && <LoanDetail onBack={handleBack} />}
    </div>
  );
}
