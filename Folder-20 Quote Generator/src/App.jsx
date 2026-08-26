import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {

  const [quote, setQuote] = useState({
    id: 1,
    quote: "",
    author: ""
  })

  const quoteChange = async () => {
    try {
      const response = await axios.get(
        'https://dummyjson.com/quotes/random'
      )

      setQuote(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    quoteChange()
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center px-4">

      <div className="bg-white/90 backdrop-blur-md max-w-2xl w-full rounded-3xl shadow-2xl p-10 text-center">

        <h1 className="text-4xl font-bold text-gray-800 mb-8">
          ✨ Quote Generator
        </h1>

        <p className="text-2xl italic text-gray-700 leading-relaxed">
          "{quote.quote || 'Loading inspirational quote...'}"
        </p>

        <h4 className="mt-6 text-lg font-semibold text-indigo-600">
          — {quote.author}
        </h4>

        <button
          onClick={quoteChange}
          className="mt-10 bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-xl font-semibold transition duration-300 shadow-lg hover:scale-105"
        >
          New Quote
        </button>

      </div>

    </div>
  )
}

export default App