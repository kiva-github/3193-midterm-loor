// styles
import '../pages.scss'
import './Vote.scss'

// components
import VotingCard from '../../components/voting-card/VotingCard'

export default function Vote() {
  return (
    <div className='page-container'>
      <div className='vote-container'>
        <h1>Swipe to view and select an organization to vote for</h1>
        <VotingCard />
      </div> 
    </div>
  )
}
