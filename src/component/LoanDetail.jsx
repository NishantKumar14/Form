import React, { useState } from "react";

export default function LoanDetail({ onBack }) {
  const [loanAmount, setLoanAmount] = useState("");
  const [loanAmountError, setLoanAmountError] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [interestRateError, setInterestRateError] = useState("");
  const [loanTenure, setLoanTenure] = useState("");
  const [loanTenureError, setLoanTenureError] = useState("");

  const handleLoanAmountChange = (events) => {
    const inputLoanAmount = events.target.value;
    setLoanAmount(inputLoanAmount);

    if (inputLoanAmount.trim() === "") {
      setLoanAmountError("Loan amount is required*");
    } else {
      setLoanAmountError("");
    }
  };

  const handleInterestRateChange = (events) => {
    const inputInterestRate = events.target.value;
    setInterestRate(inputInterestRate);

    if (inputInterestRate.trim() === "") {
      setInterestRateError("Interest rate is required*");
    } else {
      setInterestRateError("");
    }
  };

  const handleLoanTenureChange = (events) => {
    const inputLoanTenure = events.target.value;
    setLoanTenure(inputLoanTenure);

    if (inputLoanTenure.trim() === "") {
      setLoanTenureError("Loan Tenure is required*");
    } else {
      setLoanTenureError("");
    }
  };

  // const handleNextClick = () => {
  //   onNext();
  // };

  // const isInputValid = !(
  //   loanAmount.trim() &&
  //   interestRate.trim() &&
  //   loanTenure.trim()
  // );

  const handleBackClick = () => {
    onBack();
  };

  return (
    <div>
      <div className="p-10 border border-gray-300 gap-5 rounded-xl">
        <div className="text-center font-medium text-3xl pt-14 pb-10">
          <p>Loan Application</p>
        </div>
        <div>
          <div className="flex flex-row justify-between">
            <div className="flex gap-3">
              <div className="bg-blue-500 text-white bg-auto rounded-full px-2">
                1
              </div>
              <div>
                <p>Personal</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="bg-blue-500 text-white rounded-full px-2">2</div>
              <div>
                <p>Business</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="bg-blue-500 text-white rounded-full px-2">3</div>
              <div>
                <p>Loan Details</p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-start font-normal text-2xl py-10">
          <p>Loan Details</p>
        </div>
        <div>
          <div className="grid grid-cols-1 gap-2 py-5">
            <input
              type="text"
              value={loanAmount}
              onChange={handleLoanAmountChange}
              onBlur={handleLoanAmountChange}
              className={`mt-3 px-3 border-none border-b bg-transparent outline-none underline-offset-4 ${
                loanAmountError ? "border-red-500" : ""
              }`}
              placeholder="Loan Amount*"
            />
            {loanAmountError && (
              <p className="text-red-500">Please enter loan amount</p>
            )}
          </div>

          <div className="grid grid-cols-1 py-5">
            <input
              type="text"
              value={interestRate}
              onChange={handleInterestRateChange}
              onBlur={handleInterestRateChange}
              className={`mt-3 px-3 border-none border-b bg-transparent outline-none underline-offset-4 ${
                interestRateError ? "border-red-500" : ""
              }`}
              placeholder="Interest rate you willing to pay*"
            />
            {interestRateError && (
              <p className="text-red-500">Please enter interest rate</p>
            )}
          </div>
          <div className="grid grid-cols-2 gap-2 py-5">
            <div className="grid grid-rows-2">
              <input
                type="text"
                value={loanTenure}
                onChange={handleLoanTenureChange}
                onBlur={handleLoanTenureChange}
                className={`mt-3 px-3 border-none border-b bg-transparent outline-none underline-offset-4 ${
                  loanTenureError ? "border-red-500" : ""
                }`}
                placeholder="Loan Tenure (in months)*"
              />
              {loanTenureError && (
                <p className="text-red-500">Please enter loan tenure</p>
              )}
            </div>
            <div className="gird grid-rows-2">
              <select
                className="mt-3 px-3 py-2 border-none border-b outline-none bg-transparent underline-offset-4"
                defaultValue=""
              >
                <option className="bg-transparent" value="" disabled>
                  Select
                </option>
                <option className="bg-transparent" value="1">
                  Personal Loan
                </option>
                <option className="bg-transparent" value="2">
                  Real Estate
                </option>
                <option className="bg-transparent" value="3">
                  Home Loan
                </option>
                <option className="bg-transparent" value="3">
                  Others
                </option>
              </select>
            </div>
          </div>
        </div>
        <div className="flex justify-end gap-2">
          <button
            onClick={handleBackClick}
            className="bg-gray-200 hover:bg-blue-500 text-white rounded p-3"
          >
            BACK
          </button>
          <button
            // onClick={handleNextClick}
            // disabled={isInputValid}
            // className={`${
            //   isInputValid ? "bg-gray-200 cursor-not-allowed" : "bg-blue-500"
            // } hover:bg-blue-700 text-white rounded p-3`}
            className="bg-gray-200 hover:bg-blue-500 text-white rounded p-3"
          >
            SUBMIT
          </button>
        </div>
      </div>
    </div>
  );
}
