import React from "react";
import "./../Registration/RegisterForm.css";

const RegisterForm = () => {
    return (
        <div className="scrollable-element">
            <div className="form-title"><b>Get Started</b></div>
            <p className="form-p-1">Create your free Crisp account to continue</p>

            <form className="register-form-clt">
                <div className="register-form">
                <div className="flex space-x-4 mb-4">
                    {/* First Name Field */}
                    <div className="flex-1">
                        <label htmlFor="firstName" className="block mb-1 label">Your first name</label>
                        <input 
                            type="text" 
                            id="firstName" 
                            className="border rounded w-full px-3 py-2" 
                            placeholder="First name" 
                            required 
                        />
                    </div>

                    {/* Last Name Field */}
                    <div className="flex-1">
                        <label htmlFor="lastName" className="block mb-1 label">Your last name</label>
                        <input 
                            type="text" 
                            id="lastName" 
                            className="border rounded w-full px-3 py-2" 
                            placeholder="Last name" 
                            required 
                        />
                    </div>
                </div>

                {/* Email Field */}
                <div className="mb-4">
                    <label htmlFor="email" className="block mb-1 label">Type your email adress</label>
                    <input 
                        type="email" 
                        id="email" 
                        className="border rounded w-full px-3 py-2" 
                        placeholder="firstname@company.com" 
                        required 
                    />
                </div>

                {/* Password Field */}
                <div className="mb-4">
                    <label htmlFor="password" className="block mb-1 label">Enter a password</label>
                    <input 
                        type="password" 
                        id="password" 
                        className="border rounded w-full px-3 py-2" 
                        placeholder="Enter a password" 
                        required 
                    />
                </div>
                </div>
                

                {/* Terms Checkbox */}
                <div className="flex items-center mb-4">
                <input 
                 type="checkbox" 
                 id="terms" 
                 className="mr-2 checkbox-button" 
                 required 
                />
               <label htmlFor="terms" className="text-sm crisp-terms">
                 <p>I have read and I accept Crisp terms of use <span className="read-terms">read terms</span> </p>
               </label>
                </div>

                {/* Continue Button */}
                <button 
                    type="submit" 
                    className="bg-blue-500 text-white rounded py-2 px-4 button-clt"
                >
                    Continue
                </button>
                <p className="have-account">Already have an account? Sign in.</p>
            </form>
        </div>
    );
};

export default RegisterForm;
