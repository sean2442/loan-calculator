import React, { useState } from 'react';
import { DollarSign, Calendar } from 'lucide-react';

interface InitialLoanFormProps {
  setInitialAmount: React.Dispatch<React.SetStateAction<number>>;
  setLoanAmount: React.Dispatch<React.SetStateAction<number>>;
  setStartDate: React.Dispatch<React.SetStateAction<Date>>;
}

const InitialLoanForm: React.FC<InitialLoanFormProps> = ({ setInitialAmount, setLoanAmount, setStartDate }) => {
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsedAmount = parseInt(amount, 10);
    if (isNaN(parsedAmount) || parsedAmount < 1000 || parsedAmount > 20000) {
      alert('Please enter a valid loan amount between $1,000 and $20,000.');
      return;
    }
    setInitialAmount(parsedAmount);
    setLoanAmount(parsedAmount);
    setStartDate(new Date(date));
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-xl rounded-lg p-6">
      <div className="mb-4">
        <label htmlFor="loanAmount" className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
          <DollarSign className="mr-2" size={20} /> Desired Loan Amount
        </label>
        <input
          type="number"
          id="loanAmount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          min="1000"
          max="20000"
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          placeholder="Enter amount between $1,000 and $20,000"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="startDate" className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
          <Calendar className="mr-2" size={20} /> Today's Date
        </label>
        <input
          type="date"
          id="startDate"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 transition duration-150 ease-in-out"
      >
        Calculate Loans
      </button>
    </form>
  );
};

export default InitialLoanForm;