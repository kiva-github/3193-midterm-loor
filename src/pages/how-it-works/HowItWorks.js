import { Link } from 'react-router-dom'

// styles
import '../pages.scss'

// components
import Button from '../../components/button/Button'

export default function HowItWorks() {
  return (
    <div className='page-container'>
        <h1>[HOW IT WORKS]</h1>
        <div className='button-container'>
            <Link to="/">
                <Button title={'BACK'} btnStyle={'light'}/>
            </Link>
        </div>
    </div>
  )
}
