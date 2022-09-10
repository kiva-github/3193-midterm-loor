// styles
import './VotingCard.scss'

export default function VotingCard({ organization }) {
  return (
    <div className='voting-card-container'>
        <img src={organization.logo} alt='logo' />
        <h2>{organization.title}</h2>
    </div>
  )
}
