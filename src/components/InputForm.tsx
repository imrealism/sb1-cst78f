import React, { useState } from 'react'
import { Users, Calendar, AlertTriangle } from 'lucide-react'
import RecommendedProducts from './RecommendedProducts'

const InputForm: React.FC = () => {
  const [household, setHousehold] = useState('')
  const [duration, setDuration] = useState('')
  const [disasterType, setDisasterType] = useState('')
  const [showRecommendations, setShowRecommendations] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setShowRecommendations(true)
  }

  if (showRecommendations) {
    return (
      <RecommendedProducts
        household={household}
        duration={duration}
        disasterType={disasterType}
        onBack={() => setShowRecommendations(false)}
      />
    )
  }

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-semibold mb-6 text-center">Customize Your Survival Kit</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="household" className="block text-sm font-medium text-gray-700 mb-1">
            Household Composition
          </label>
          <div className="relative">
            <Users className="absolute top-3 left-3 text-gray-400" />
            <input
              type="text"
              id="household"
              className="pl-10 w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="e.g., 2 adults, 1 child"
              value={household}
              onChange={(e) => setHousehold(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="duration" className="block text-sm font-medium text-gray-700 mb-1">
            Survival Duration
          </label>
          <div className="relative">
            <Calendar className="absolute top-3 left-3 text-gray-400" />
            <input
              type="text"
              id="duration"
              className="pl-10 w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="e.g., 7 days"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="mb-6">
          <label htmlFor="disasterType" className="block text-sm font-medium text-gray-700 mb-1">
            Disaster Type
          </label>
          <div className="relative">
            <AlertTriangle className="absolute top-3 left-3 text-gray-400" />
            <select
              id="disasterType"
              className="pl-10 w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              value={disasterType}
              onChange={(e) => setDisasterType(e.target.value)}
              required
            >
              <option value="">Select a disaster type</option>
              <option value="earthquake">Earthquake</option>
              <option value="hurricane">Hurricane</option>
              <option value="flood">Flood</option>
              <option value="wildfire">Wildfire</option>
            </select>
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
        >
          Get Recommendations
        </button>
      </form>
    </div>
  )
}

export default InputForm