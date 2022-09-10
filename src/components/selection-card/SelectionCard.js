import './SelectionCard.scss'

export default function SelectionCard({ title, logo }) {
  return (
    <div className='selection-card-container'>
      <h2>{title}</h2>
      <img src={logo} alt="logo" />
    </div>
  )
}
