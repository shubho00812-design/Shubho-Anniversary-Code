import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import ScreenContainer from "../ScreenContainer"
import Image from "next/image"

// Set the start date for the calculation (November 1, 2024 is used as a placeholder date in November)
const startDate = new Date("November 01, 2024 00:00:00").getTime()

const calculateTimePassed = () => {
  const now = new Date().getTime()
  const distance = now - startDate

  const days = Math.floor(distance / (1000 * 60 * 60 * 24))
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((distance % (1000 * 60)) / 1000)

  return { days, hours, minutes, seconds }
}

export default function AnniversaryScreen({ onNext }) {
  const [timePassed, setTimePassed] = useState(calculateTimePassed())

  useEffect(() => {
    const interval = setInterval(() => {
      setTimePassed(calculateTimePassed())
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  const { days, hours, minutes, seconds } = timePassed

  return (
    <ScreenContainer>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center text-white p-6 max-w-xl mx-auto"
      >
        
        <h1 className="text-6xl md:text-8xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-pink-500">
          Happy 10th Month Anniversary!
        </h1>
        
        <p className="text-xl md:text-2xl text-pink-200 mt-6 font-light">
          Celebrating every day since November 2024. Our 10 months of waiting are just the beginning of forever.
        </p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-12 bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-2xl"
        >
          <p className="text-xl font-bold mb-4 text-pink-200">Time Passed Together</p>
          <div className="flex justify-center space-x-4 md:space-x-8">
            {/* Days */}
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                {days}
              </div>
              <p className="text-sm md:text-lg text-pink-200 mt-1">DAYS</p>
            </div>
            {/* Hours */}
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                {hours}
              </div>
              <p className="text-sm md:text-lg text-pink-200 mt-1">HOURS</p>
            </div>
            {/* Minutes */}
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                {minutes}
              </div>
              <p className="text-sm md:text-lg text-pink-200 mt-1">MINUTES</p>
            </div>
            {/* Seconds */}
            <div className="text-center hidden sm:block">
              <div className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                {seconds}
              </div>
              <p className="text-sm md:text-lg text-pink-200 mt-1">SECONDS</p>
            </div>
          </div>
          <p className="text-center text-sm text-pink-200/50 mt-4">...and counting!</p>
        </motion.div>

        <motion.button
          onClick={onNext}
          className="px-8 py-3 mt-12 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-purple-500/50 transition duration-300"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View Our Photo Gallery
        </motion.button>

      </motion.div>
    </ScreenContainer>
  )
}