import { useContext } from 'react'

// styles
import '../pages.scss'

// contexts
import { UserContext } from '../../contexts/UserContext'

// components
import VotingCardDisplay from "../../components/voting-card-display/VotingCardDisplay"


export default function Vote() {
  const { currentCode } = useContext(UserContext)

  return (
    <div className='page-container'>
        <h1>Swipe to view and select an organization to vote {currentCode ? '1' : '0'} time{currentCode ? '' : 's'} for</h1>
        <VotingCardDisplay />
    </div>
  )
}
