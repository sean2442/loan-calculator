import React from 'react';
import { DollarSign, Calendar } from 'lucide-react';

interface LoanCalculatorProps {
  loanAmount: number;
  setLoanAmount: React.Dispatch<React.SetStateAction<number>>;
  startDate: Date;
}

const LoanCalculator: React.FC<LoanCalculatorProps> = ({ loanAmount, setLoanAmount, startDate }) => {
  const interestRate = 0.03217;
  const loanTermMonths = 36;

  const calculateMonthlyPayment = (amount: number) => {
    const monthlyRate = interestRate / 12;
    return (amount * monthlyRate * Math.pow(1 + monthlyRate, loanTermMonths)) / (Math.pow(1 + monthlyRate, loanTermMonths) - 1);
  };

  const monthlyPayment = calculateMonthlyPayment(loanAmount);

  const getPaymentDate = (monthsFromStart: number) => {
    const date = new Date(startDate);
    date.setMonth(date.getMonth() + monthsFromStart);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
  };

  return (
    <div>
      <div className="mb-6">
        <label htmlFor="loanAmount" className="block text-sm font-medium text-gray-700 mb-2">
          Loan Amount: ${loanAmount.toLocaleString()}
        </label>
        <input
          type="range"
          id="loanAmount"
          min="5000"
          max="20000"
          step="100"
          value={loanAmount}
          onChange={(e) => setLoanAmount(parseInt(e.target.value, 10))}
          className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer"
        />
      </div>
      
      <div className="bg-blue-50 p-4 rounded-lg mb-6">
        <h3 className="text-lg font-semibold text-blue-800 mb-2 flex items-center">
          <DollarSign className="mr-2" size={20} /> Monthly Payment
        </h3>
        <p className="text-3xl font-bold text-blue-600">
          ${monthlyPayment.toFixed(2)}
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
          <Calendar className="mr-2" size={20} /> Payment Schedule
        </h3>
        <div className="grid grid-cols-3 gap-4">
          {Array.from({ length: loanTermMonths }, (_, i) => (
            <div key={i} className="bg-gray-100 p-2 rounded">
              <p className="text-sm font-medium text-gray-600">{getPaymentDate(i)}</p>
              <p className="text-base font-semibold text-gray-800">${monthlyPayment.toFixed(2)}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoanCalculator;