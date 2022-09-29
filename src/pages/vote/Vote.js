// styles
import '../pages.scss'

// components
import VotingCardDisplay from "../../components/voting-card-display/VotingCardDisplay"

export default function Vote() {
  return (
    <div className='page-container'>
        <h1>Swipe to view and select an organization to vote for</h1>
        <VotingCardDisplay />
    </div>
  )
}
