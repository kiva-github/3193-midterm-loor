import { motion } from 'framer-motion'

// styles
import './PrimaryButton.scss'

export default function PrimaryButton({ title, btnStyle }) {
  return (
    <motion.button
      className='primary-btn-container'
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
