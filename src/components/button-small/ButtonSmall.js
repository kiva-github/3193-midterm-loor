import { motion } from 'framer-motion'

// styles
import './ButtonSmall.scss'

export default function ButtonSmall({ title, btnStyle='light' }) {
  return (
    <motion.button
      className='btn-s-container'
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
