import React, { useState } from "react";

export default function BusinessDetail({ onNext, onBack }) {
  const [bussinessName, setBussinessName] = useState("");
  const [bussinessNameError, setBussinessNameError] = useState("");
  const [gstNumber, setGSTNumber] = useState("");
  const [gstNumberError, setGSTNumberError] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");
  const [bussinessEmail, setbussinessEmail] = useState("");
  const [bussinessEmailError, setbussinessEmailError] = useState("");
  const [Address, setAddress] = useState("");
  const [AddressError, setAddressError] = useState("");

  const handleBussinessNameChange = (events) => {
    const inputBussinessName = events.target.value;
    setBussinessName(inputBussinessName);

    if (inputBussinessName.trim() === "") {
      setBussinessNameError("Bussiness Name is required");
    } else {
      setBussinessNameError("");
    }
  };

  const handleGSTNumberChange = (events) => {
    const inputGSTNumber = events.target.value;
    setGSTNumber(inputGSTNumber);

    if (inputGSTNumber.trim() === "") {
      setGSTNumberError("GST is required");
    } else {
      setGSTNumberError("");
    }
  };

  const handlephoneNumberChange = (events) => {
    const inputPhoneNumber = events.target.value;
    setPhoneNumber(inputPhoneNumber);

    if (inputPhoneNumber.trim() === "") {
      setPhoneNumberError("Phone number is required");
    } else {
      setPhoneNumberError("");
    }
  };

  const handlebussinessEmailChange = (events) => {
    const inputbussinessEmail = events.target.value;
    setbussinessEmail(inputbussinessEmail);

    if (inputbussinessEmail.trim() === "") {
      setbussinessEmailError("Email Address is required");
    } else {
      setbussinessEmailError("");
    }
  };

  const handleAddressChange = (events) => {
    const inputaddress = events.target.value;
    setAddress(inputaddress);

    if (inputaddress.trim() === "") {
      setAddressError("Home Address is required");
    } else {
      setAddressError("");
    }
  };

  const handleNextClick = () => {
    onNext();
  };

  const isInputValid = !(
    bussinessName.trim() &&
    gstNumber.trim() &&
    phoneNumber.trim() &&
    bussinessEmail.trim() &&
    Address.trim()
  );

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
                <p>Bussiness</p>
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
          <p>Business Details</p>
        </div>
        <div>
          <div className="grid grid-cols-1 gap-2 py-5">
            <input
              type="text"
              value={bussinessName}
              onChange={handleBussinessNameChange}
              onBlur={handleBussinessNameChange}
              className={`mt-3 px-3 border-none border-b bg-transparent outline-none underline-offset-4 ${
                bussinessNameError ? "border-red-500" : ""
              }`}
              placeholder="Business Name*"
            />
            {bussinessNameError && (
              <p className="text-red-500">Please enter your bussiness name</p>
            )}
          </div>
          <div className="grid grid-cols-1 py-5">
            <input
              type="text"
              value={gstNumber}
              onChange={handleGSTNumberChange}
              onBlur={handleGSTNumberChange}
              className={`mt-3 px-3 border-none border-b bg-transparent outline-none underline-offset-4 ${
                gstNumberError ? "border-red-500" : ""
              }`}
              placeholder="GST Number*"
            />
            {gstNumberError && (
              <p className="text-red-500">Please enter your GST number</p>
            )}
          </div>
          <div className="grid grid-cols-2 gap-2 py-5">
            <div className="grid grid-rows-2">
              <input
                type="text"
                value={phoneNumber}
                onChange={handlephoneNumberChange}
                onBlur={handlephoneNumberChange}
                className={`mt-3 px-3 border-none border-b bg-transparent outline-none underline-offset-4 ${
                  phoneNumberError ? "border-red-500" : ""
                }`}
                placeholder="Phone Number*"
              />
              {phoneNumberError && (
                <p className="text-red-500">Please enter your phone number</p>
              )}
            </div>
            <div className="grid grid-rows-2">
              <input
                type="email"
                value={bussinessEmail}
                onChange={handlebussinessEmailChange}
                onBlur={handlebussinessEmailChange}
                className={`mt-3 px-3 border-none border-b bg-transparent outline-none underline-offset-4 ${
                  bussinessEmailError ? "border-red-500" : ""
                }`}
                placeholder="Business Email*"
              />
              {bussinessEmailError && (
                <p className="text-red-500">
                  Please enter your bussiness email address
                </p>
              )}
            </div>
          </div>
          <div className="grid grid-cols-1 py-5">
            <input
              type="text"
              value={Address}
              onChange={handleAddressChange}
              onBlur={handleAddressChange}
              className={`mt-3 px-3 border-none border-b bg-transparent outline-none underline-offset-4 ${
                AddressError ? "border-red-500" : ""
              }`}
              placeholder="Address*"
            />
            {AddressError && (
              <p className="text-red-500">Please enter your address</p>
            )}
          </div>
        </div>
        <div className="flex justify-end gap-2">
          <button
            onClick={handleBackClick}
            className="bg-gray-200 hover:bg-blue-500 text-white rounded px-3"
          >
            BACK
          </button>
          <button
            onClick={handleNextClick}
            disabled={isInputValid}
            className={`${
              isInputValid ? "bg-gray-200 cursor-not-allowed" : "bg-blue-500"
            } hover:bg-blue-700 text-white rounded p-3`}
          >
            NEXT
          </button>
        </div>
      </div>
    </div>
  );
}
