import { motion } from "framer-motion"
import ScreenContainer from "../ScreenContainer"

export default function IntroScreen({ onNext }) {
  return (
    <ScreenContainer>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-center text-white p-6 max-w-lg mx-auto"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-400">
          10 Months of Long Distance
        </h1>
        <p className="text-xl md:text-2xl text-pink-100/80 mb-8 font-light tracking-wide">
          My Dearest Priyanka, this is a special celebration for us, counting every moment until we are finally together. Press the button to start our journey.
        </p>
        <motion.button
          onClick={onNext}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full shadow-lg hover:shadow-pink-500/50 transition duration-300"
        >
          Open Our Story
        </motion.button>
      </motion.div>
    </ScreenContainer>
  )
}