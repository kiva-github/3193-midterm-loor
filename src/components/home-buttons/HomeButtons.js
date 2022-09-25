import { Link } from 'react-router-dom'

// styles
import './HomeButtons.scss'

// components
import Button from '../button/Button'

export default function HomeButtons() {
  return (
    <div className='button-container'>
      <div>
        <Link to="/enter-code">
          <Button title={'ENTER A CODE'} btnSyle={'dark'} />
        </Link>
      </div>
      <div>
        <Link to="/how-it-works">
          <Button title={'HOW IT WORKS'} btnStyle={'light'}/>
        </Link>
      </div>
  </div>
  )
}
