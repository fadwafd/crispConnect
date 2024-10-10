import React, { useState } from "react";
import "./../stepper/stepper.css";

const Stepper = () => {
  const steps = ["step1", "step2", "step3", "step4"];
  const [currentStep, setCurrentStep] = useState(1); // Start with the first step being active

  const handleNext = () => {
    // Increment current step, but stop at the last step
    setCurrentStep((prevStep) => (prevStep < steps.length ? prevStep + 1 : prevStep));
  };

  return (
    <>
      <div className="flex flex-row justify-between">
        {steps?.map((step, i) => (
          <div
            key={i}
            className={`step-item -mx-4  ${currentStep === i + 1 ? "active" : ""}`}
          >
            <div className="step">{i + 1}</div>
            {/* Removed the step names */}
          </div>
        ))}
      </div>
      <div className="fixed bottom-0 left-0 w-full flex justify-center mb-4">
        <button onClick={handleNext} className="btn bg-blue-500 text-white py-2 px-4 rounded">
          Next
        </button>
      </div>
    </>
  );
};

export default Stepper;



