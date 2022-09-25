// styles
import './ResultsCard.scss'

export default function ResultsCard({ organization }) {
  return (
    <div className='results-card-container'>
        <p>{organization.title}</p>
        <div className='card-vote-count'>
          <p>{organization.count}</p>
        </div>
    </div>
  )
}
