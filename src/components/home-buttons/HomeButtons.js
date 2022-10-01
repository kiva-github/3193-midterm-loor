// X

import { Link } from 'react-router-dom'

// styles
import './HomeButtons.scss'

// components
import PrimaryButton from '../primary-button/PrimaryButton'

export default function HomeButtons() {
  return (
    <div className='buttons-container'>
      <Link to="/enter-code">
        <PrimaryButton title={'ENTER A CODE'} btnSyle={'dark'} />
      </Link>
      <Link to="/how-it-works">
        <PrimaryButton title={'HOW IT WORKS'} btnStyle={'light'}/>
      </Link>
  </div>
  )
}
