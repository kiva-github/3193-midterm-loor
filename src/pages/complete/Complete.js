import { Link } from 'react-router-dom'

// styles
import '../pages.scss'

// components
import Button from '../../components/button/Button'

export default function Complete() {
  return (
    <div className='page-container'>

      <h1>Thank you for voting, results will be posted soon...</h1>

      <div className='button-container'>
          <Link to="/">
              <Button title={'HOME'} btnStyle={'light'}/>
          </Link>
      </div>
    </div>
  )
}
