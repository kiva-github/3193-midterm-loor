// styles
import './VotingResults.scss'

// components
import ResultsCard from "../results-card/ResultsCard"

// hooks
import { useCollection } from '../../hooks/useCollection'

export default function VotingResults() {

    // fetch standings from server
    const { documents } = useCollection('rankings')
    const data = ['Water Project', 'UNICEF', 'Red Cross']

    return (
      <div className='results-container'>
          {documents && documents.map((organization) => (
              <ResultsCard key={organization.id} organization={organization} />
          ))}
      </div>
    )
}
