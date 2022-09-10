// styles
import './VotingResults.scss'

// components
import ResultsCard from "../results-card/ResultsCard"

export default function VotingResults() {

    const data = ['Water Project', 'UNICEF', 'Red Cross']

  return (
    <div className='results-container'>
        {data && data.map((organzation) => (
            <ResultsCard title={organzation} />
        ))}
    </div>
  )
}
