import React, { useState } from "react";

export default function PersonalDetail({ onNext }) {
  const [firstName, setFirstName] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastName, setLastName] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [age, setAge] = useState("");
  const [ageError, setAgeError] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [emailAddressError, setEmailAddressError] = useState("");
  const [homeAddress, setHomeAddress] = useState("");
  const [homeAddressError, setHomeAddressError] = useState("");

  const handleFirstNameChange = (events) => {
    const inputFirstName = events.target.value;
    setFirstName(inputFirstName);

    if (inputFirstName.trim() === "") {
      setFirstNameError("First Name is required");
    } else {
      setFirstNameError("");
    }
  };

  const handleLastNameChange = (events) => {
    const inputLastName = events.target.value;
    setLastName(inputLastName);

    if (inputLastName.trim() === "") {
      setLastNameError("Last Name is required");
    } else {
      setLastNameError("");
    }
  };

  const handleAgeChange = (events) => {
    const inputAge = events.target.value;
    setAge(inputAge);

    if (inputAge.trim() === "") {
      setAgeError("Age is required");
    } else {
      setAgeError("");
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

  const handleEmailAddressChange = (events) => {
    const inputEmailAddress = events.target.value;
    setEmailAddress(inputEmailAddress);

    if (inputEmailAddress.trim() === "") {
      setEmailAddressError("Email Address is required");
    } else {
      setEmailAddressError("");
    }
  };

  const handleHomeAddressChange = (events) => {
    const inputHomeAddress = events.target.value;
    setHomeAddress(inputHomeAddress);

    if (inputHomeAddress.trim() === "") {
      setHomeAddressError("Home Address is required");
    } else {
      setHomeAddressError("");
    }
  };

  const handleNextClick = () => {
    onNext();
  };

  const isInputValid = !(
    firstName.trim() &&
    lastName.trim() &&
    age.trim() &&
    phoneNumber.trim() &&
    emailAddress.trim() &&
    homeAddress.trim()
  );

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
          <p>Personal Details</p>
        </div>
        <div>
          <div className="grid grid-cols-2 gap-2 ">
            <div className="grid grid-rows-2">
              <input
                type="text"
                value={firstName}
                onChange={handleFirstNameChange}
                onBlur={handleFirstNameChange}
                className={`mt-3 px-3 border-none border-b bg-transparent outline-none underline-offset-4 ${
                  firstNameError ? "border-red-500" : ""
                }`}
                placeholder="First Name*"
              />
              {firstNameError && (
                <p className="text-red-500">Please enter your first name*</p>
              )}
            </div>

            <div className="grid grid-rows-2">
              <input
                type="text"
                value={lastName}
                onChange={handleLastNameChange}
                onBlur={handleLastNameChange}
                className={`mt-3 px-3 border-none border-b bg-transparent outline-none underline-offset-4 ${
                  lastNameError ? "border-red-500" : ""
                }`}
                placeholder="Last Name*"
              />
              {lastNameError && (
                <p className="text-red-500">Please enter your last name*</p>
              )}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 ">
            <div className="grid grid-rows-2">
              <input
                type="text"
                value={age}
                onChange={handleAgeChange}
                onBlur={handleAgeChange}
                className={`mt-3 px-3 border-none border-b bg-transparent outline-none underline-offset-4 ${
                  ageError ? "border-red-500" : ""
                }`}
                placeholder="Age*"
              />
              {ageError && (
                <p className="text-red-500">Please enter your age*</p>
              )}
            </div>
            <div className="grid grid-rows-2">
              <input
                type="text"
                value={phoneNumber}
                onChange={handlephoneNumberChange}
                onBlur={handlephoneNumberChange}
                className={`mt-1 px-3 border-none border-b bg-transparent outline-none underline-offset-4 ${
                  phoneNumberError ? "border-red-500" : ""
                }`}
                placeholder="Phone Number*"
              />
              {phoneNumberError && (
                <p className="text-red-500">Please enter phone number*</p>
              )}
            </div>
          </div>
          <div className="grid grid-cols-1 py-5">
            <input
              type="email"
              value={emailAddress}
              onChange={handleEmailAddressChange}
              onBlur={handleEmailAddressChange}
              className={`mt-1 px-3 border-none border-b bg-transparent outline-none underline-offset-4 ${
                emailAddressError ? "border-red-500" : ""
              }`}
              placeholder="Email Address*"
            />
            {emailAddressError && (
              <p className="text-red-500">Please enter your email address*</p>
            )}
          </div>
          <div className="grid grid-cols-1 py-5">
            <input
              type="text"
              value={homeAddress}
              onChange={handleHomeAddressChange}
              onBlur={handleHomeAddressChange}
              className={`mt-1 px-3 border-none border-b bg-transparent outline-none underline-offset-4 ${
                homeAddressError ? "border-red-500" : ""
              }`}
              placeholder="Home Address*"
            />
            {homeAddressError && (
              <p className="text-red-500">Please enter your home address</p>
            )}
          </div>
        </div>
        <div className="flex justify-end">
          <button
            onClick={handleNextClick}
            disabled={isInputValid}
            className={`${
              isInputValid ? "bg-gray-200 cursor-not-allowed" : "bg-blue-500"
            } hover:bg-blue-700 text-white rounded p-3`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
