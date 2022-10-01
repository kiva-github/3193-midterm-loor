// X

import { useState } from 'react'

// styles
import '../pages.scss'

// components
import ModelContainer from '../../components/model-container/ModelContainer'
import VotingResults from '../../components/voting-results/VotingResults'
import TertiaryButton from '../../components/tertiary-button/TertiaryButton'

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
    <div className='page-container'>
      <div onClick={handleClick}>
        <TertiaryButton title={btnTitle} btnStyle='light'/>
      </div>  
      {homeView ? <ModelContainer /> : <VotingResults />}
    </div>
  )
}