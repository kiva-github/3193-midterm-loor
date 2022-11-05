import { useEffect, useState } from 'react'

// styles
import './VotingCard.scss'

// data
import { organizations } from '../../datas/organizations'

// components
import SecondaryButton from '../secondary-button/SecondaryButton'
import TertiaryButton from '../tertiary-button/TertiaryButton'

export default function VotingCard() {
  const [orgs] = useState(organizations)
  const [index, setIndex] = useState(0)

  const handleClick = (inc) => {
    let localIndex = index
    const prevIndex = index
    if (localIndex === organizations.length - 1 && inc === 1) {
      localIndex = 0
    } else if (localIndex === 0 & inc === -1) {
      localIndex = organizations.length - 1
    } else {
      localIndex += inc
    }
    setIndex(localIndex)
    const prevElem = document.getElementById(organizations[prevIndex].id)
    prevElem.classList.remove('active')
    const activeElem = document.getElementById(organizations[localIndex].id)
    activeElem.classList.add('active')
  }

  useEffect(() => {
    const activeElem = document.getElementById(organizations[index].id)
    activeElem.classList.add('active')
  }, [index])

  return (
    <div className='voting-card-container'>
        <div className='logo-container'>
          <img src={orgs[index].image.src} alt='logo' />
        </div>
        <div className='header-details-container'>
          <div className='detail-container'>
            <h4>{orgs[index].founded}</h4>
            <h5>FOUNDED</h5>
          </div>
          <div className='detail-container'>
            <h4>{orgs[index].headquarters}</h4>
            <h5>HEADQUARTERS</h5>
          </div>
        </div>
        <div className='description-container'>
          <div>
            <h4>{orgs[index].description.p}</h4>
          </div>
          <div>
            <h4>{orgs[index].description.p}</h4>
          </div>
          <div>
            <h4>{orgs[index].description.p}</h4>
          </div>
          <div>
            <h4>{orgs[index].description.p}</h4>
          </div>
          <div>
            <h4>{orgs[index].description.p}</h4>
          </div>
          <TertiaryButton title={'LEARN MORE'} btnStyle={'dark'} />
        </div>
        <div className='pagination-container'>
          {organizations.map((t) => (
            <div id={t.id} key={t.id} className='dot'></div>
          ))}
        </div>
        <div className='button-container'>
          <div className='dual-button-container'>
            <div onClick={() => handleClick(-1)}>
              <SecondaryButton title={'BACK'} btnStyle={'dark'} />
            </div>
            <div onClick={() => handleClick(1)}>
              <SecondaryButton title={'NEXT'} btnStyle={'dark'} />
            </div>
          </div>
        </div>
    </div>
  )
}