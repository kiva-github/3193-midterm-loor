// styles
import './VotingResults.scss'

// components
import ResultsCard from "../results-card/ResultsCard"

export default function VotingResults() {

    // fetch standings from server
    const data = ['Water Project', 'UNICEF', 'Red Cross']

    return (
      <div className='results-container'>
          {data && data.map((organization) => (
              <ResultsCard key={organization} title={organization} />
          ))}
      </div>
    )
}
