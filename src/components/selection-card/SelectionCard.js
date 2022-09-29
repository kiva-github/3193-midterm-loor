// styles
import './SelectionCard.scss'

// data
import { organizations } from '../../datas/organizations'

export default function SelectionCard({ selection }) {
  const selectedOrganization = organizations.find((organization) => organization.id === selection.assignment)
  console.log(selectedOrganization)
  return (
    <div className='selection-card-container'>
      <img src={selectedOrganization.image.src} alt={selectedOrganization.image.alt} />
      <h4>{selection.code}</h4>
    </div>
  )
}
