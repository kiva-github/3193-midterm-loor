// styles
import './SelectionCard.scss'

// datas
import { organizationLogos } from '../../datas/organizations'

export default function SelectionCard({ logo }) {
  return (
    <div className='selection-card-container'>
      <img src={organizationLogos.logo} alt="logo" />
    </div>
  )
}
