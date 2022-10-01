// X

// styles
import './ModelContainer.scss'

// assets
import machine from '../../assets/vending_machine.png'

// components
import HomeButtons from '../home-buttons/HomeButtons'

export default function ModelContainer() {
  return (
    <div className='model-container'>
      <div className='model-placeholder'>
        <img src={machine} alt='machine model' />
      </div>
      <HomeButtons />
    </div>
  )
}
