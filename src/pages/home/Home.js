import { useState } from 'react'

// styles
import '../pages.scss'
import './Home.scss'

// components
import ModelContainer from '../../components/model-container/ModelContainer'
import VotingResults from '../../components/voting-results/VotingResults'
import ButtonSmall from '../../components/button-small/ButtonSmall'

export default function Home() {
  const [homeView, setHomeView] = useState(true)
  const [btnTitle, setBtnTitle] = useState('VIEW VOTING')

  const handleClick = () => {
    if (homeView) {
      setHomeView(false)
      setBtnTitle('BACK')
      
    } else {
      setHomeView(true)
      setBtnTitle('VIEW VOTING')
      
    }
  }

  return (
    <div className='page-container home-container'>
      <div onClick={handleClick}>
        <ButtonSmall title={btnTitle} btnStyle='light'/>
      </div>  

      {homeView ? <ModelContainer /> : <VotingResults />}
    </div>
  )
}
