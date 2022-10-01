// X

// styles
import './VotingResults.scss'

// components
import ResultsCard from "../results-card/ResultsCard"

// hooks
import { useCollection } from '../../hooks/useCollection'

export default function VotingResults() {
    const { documents, error } = useCollection('results')
    const sortedDocs = [].concat(documents).sort((a, b) => a.count < b.count ? 1 : -1)

    return (
      <div className='voting-results-container'>
        {sortedDocs[0] && sortedDocs.map((organization) => (
              <ResultsCard key={organization.id} organization={organization} />
          ))}
          {error && <p>{error.message}</p>}
      </div>
    )
}
