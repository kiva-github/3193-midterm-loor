import { Link } from 'react-router-dom'

// styles
import '../pages.scss'

// components
import Button from '../../components/button/Button'
import VotingResults from '../../components/voting-results/VotingResults'

export default function Home() {
  return (
    
    <div className='page-container'>

      <VotingResults />

      <div className='button-container'>
        <Link to="enter-code">
            <Button title={'ENTER A CODE'} btnSyle={'dark'} />
        </Link>
        <Link to="how-it-works">
            <Button title={'HOW IT WORKS'} btnStyle={'light'}/>
        </Link>
      </div>

    </div>
  )
}
