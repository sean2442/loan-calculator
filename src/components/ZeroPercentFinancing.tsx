import React from 'react';
import { DollarSign, Calendar } from 'lucide-react';

interface ZeroPercentFinancingProps {
  loanAmount: number;
  startDate: Date;
}

const ZeroPercentFinancing: React.FC<ZeroPercentFinancingProps> = ({ loanAmount, startDate }) => {
  const monthlyPayment = loanAmount / 12;

  const getPaymentDate = (monthsFromStart: number) => {
    const date = new Date(startDate);
    date.setMonth(date.getMonth() + monthsFromStart);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
  };

  return (
    <div>
      <div className="bg-green-50 p-4 rounded-lg mb-6">
        <h3 className="text-lg font-semibold text-green-800 mb-2 flex items-center">
          <DollarSign className="mr-2" size={20} /> Initial Loan Amount
        </h3>
        <p className="text-3xl font-bold text-green-600">
          ${loanAmount.toLocaleString()}
        </p>
      </div>

      <div className="bg-green-50 p-4 rounded-lg mb-6">
        <h3 className="text-lg font-semibold text-green-800 mb-2 flex items-center">
          <DollarSign className="mr-2" size={20} /> Monthly Payment (0% Interest)
        </h3>
        <p className="text-3xl font-bold text-green-600">
          ${monthlyPayment.toFixed(2)}
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
          <Calendar className="mr-2" size={20} /> 12-Month Payment Schedule
        </h3>
        <div className="grid grid-cols-3 gap-4">
          {Array.from({ length: 12 }, (_, i) => (
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

export default ZeroPercentFinancing;