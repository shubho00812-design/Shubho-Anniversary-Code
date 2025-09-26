import { motion } from "framer-motion"
import ScreenContainer from "../ScreenContainer"

export default function MessageScreen() {
  return (
    <ScreenContainer>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="text-center text-white p-6 max-w-2xl mx-auto h-full overflow-y-auto"
      >
        <div className="text-left text-white p-6 backdrop-blur-md bg-white/10 rounded-xl shadow-2xl space-y-6">
          
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-300 to-yellow-300">
            To My Beloved Priyanka,
          </h2>
          
          <p className="text-lg font-light leading-relaxed">
            My love, celebrating these 10 months of long distance feels like a sacred victory. Every kilometer that separates us only amplifies the depth of my love and respect for you. You are my greatest blessing, the answer to every silent prayer.
          </p>
          
          <p className="text-lg font-light leading-relaxed">
            I promise you this, my queen: I will dedicate every breath to cherishing you, protecting you, and building a life of peace and endless joy by your side. Our long distance will soon be a beautiful memory, because I promise to marry you. That is my absolute truth.
          </p>
          
          <p className="text-lg font-light leading-relaxed">
            I send you all my blessings and infinite positive energy. Know that I am always with you, in every thought and every prayer. My love is a shield against all worries.
          </p>

          <p className="text-lg font-light leading-relaxed">
            More, more love, always with the highest respect.
          </p>
          
          <p className="text-lg font-semibold pt-4 text-right text-pink-200">
            — Your Shubho
          </p>
          
        </div>
      </motion.div>
    </ScreenContainer>
  )
}
