import React, { useState, useEffect } from 'react';
import { DollarSign, Percent, Calendar } from 'lucide-react';
import LoanCalculator from './components/LoanCalculator';
import ZeroPercentFinancing from './components/ZeroPercentFinancing';
import InitialLoanForm from './components/InitialLoanForm';

function App() {
  const [loanAmount, setLoanAmount] = useState(5000);
  const [initialAmount, setInitialAmount] = useState(5000);
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-indigo-800 mb-12">
          Find the Best Loan for You
        </h1>
        
        <InitialLoanForm 
          setInitialAmount={setInitialAmount} 
          setLoanAmount={setLoanAmount}
          setStartDate={setStartDate}
        />
        
        <div className="bg-white shadow-xl rounded-lg p-6 mb-8 mt-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
            <DollarSign className="mr-2" /> 3-Year Loan at 3.217% Interest
          </h2>
          <LoanCalculator loanAmount={loanAmount} setLoanAmount={setLoanAmount} startDate={startDate} />
        </div>

        <div className="bg-white shadow-xl rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
            <Percent className="mr-2" /> 0% Financing for 12 Months
          </h2>
          <ZeroPercentFinancing loanAmount={initialAmount} startDate={startDate} />
        </div>
      </div>
    </div>
  );
}

export default App;