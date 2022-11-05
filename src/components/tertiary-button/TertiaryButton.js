// X

import { motion } from 'framer-motion'

// styles
import './TertiaryButton.scss'

export default function TertiaryButton({ title, btnStyle='light' }) {
  return (
    <motion.button
      className='tertiary-btn-container'
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.2 },
      }}
      whileTap={{ scale: 0.88 }}
    >
      <div className={`btn ${btnStyle === "light" ? "light" : "dark"}`}>
        <p>{title}</p>
      </div>  
    </motion.button>
  )
}