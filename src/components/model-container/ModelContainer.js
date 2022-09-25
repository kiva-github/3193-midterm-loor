// styles
import './ModelContainer.scss'

// components
import HomeButtons from '../home-buttons/HomeButtons'

// assets
import machine from '../../assets/vending_machine.png'

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
