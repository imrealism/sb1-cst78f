import React from 'react'

interface ProgressIndicatorProps {
  currentStep: number
  totalSteps: number
}

const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({ currentStep, totalSteps }) => {
  return (
    <div className="mb-8">
      <div className="flex justify-between">
        {Array.from({ length: totalSteps }, (_, i) => (
          <div key={i} className="flex flex-col items-center">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                i + 1 <= currentStep ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-600'
              }`}
            >
              {i + 1}
            </div>
            <span className="mt-2 text-sm text-gray-600">
              {i === 0 ? 'Input' : i === 1 ? 'Products' : 'Checkout'}
            </span>
          </div>
        ))}
      </div>
      <div className="mt-2 h-2 flex">
        {Array.from({ length: totalSteps - 1 }, (_, i) => (
          <div
            key={i}
            className={`flex-1 ${
              i + 2 <= currentStep ? 'bg-blue-600' : 'bg-gray-300'
            }`}
          ></div>
        ))}
      </div>
    </div>
  )
}

export default ProgressIndicator