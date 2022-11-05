// X

// styles
import './ResultsCard.scss'

//data
import { organizations } from '../../../datas/organizations'

export default function ResultsCard({ organization }) {
  const organizationInfo = organizations.find((currOrg) => currOrg.id === organization.id)
  return (
    <div className='results-card-container'>
        <img src={organizationInfo.image.src} alt={organizationInfo.image.alt} />
        <div className='card-vote-count'>
          <p>{organization.count}</p>
        </div>
    </div>
  )
}
