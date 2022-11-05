// X

import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

// styles
import '../pages.scss'
import './HowItWorks.scss'

// components
import PrimaryButton from '../../components/primary-button/PrimaryButton'
import SecondaryButton from '../../components/secondary-button/SecondaryButton'

const copy = [
  {
    text: '$1.00 = 1 random sticker',
    id: 'textOne'
  },
  {
    text: '10% of stickers contain a voucher for 1 free slice of cheese pizza',
    id: 'textTwo'
  },
  {
    text: 'Each sticker contains a code to vote for a charity to receive 10% of proceeds for the stickers sold until the machine is empty.',
    id: 'textThree'
  },
  {
    text: 'Votes must be cast before the machine is refilled to be counted.',
    id: 'textFour'
  }
]

export default function HowItWorks() {
  const [index, setIndex] = useState(0)

  const handleClick = (inc) => {
    let localIndex = index
    const prevIndex = index
    if (localIndex === copy.length - 1 && inc === 1) {
      localIndex = 0
    } else if (localIndex === 0 & inc === -1) {
      localIndex = copy.length - 1
    } else {
      localIndex += inc
    }
    setIndex(localIndex)
    const prevElem = document.getElementById(copy[prevIndex].id)
    prevElem.classList.remove('active')
    const activeElem = document.getElementById(copy[localIndex].id)
    activeElem.classList.add('active')
  }

  useEffect(() => {
    const activeElem = document.getElementById(copy[index].id)
    activeElem.classList.add('active')
  }, [index])

  return (
    <div className='page-container'>
      <div className='how-it-works-container'>
        <div className='text-container'>
          <p>{copy[index].text}</p>
        </div>
        <div className='pagination-container'>
          {copy.map((t) => (
            <div id={t.id} key={t.id} className='dot'></div>
          ))}
        </div>
        <div className='button-container'>
          <div className='dual-button-container'>
            <div onClick={() => handleClick(-1)}>
              <SecondaryButton title={'BACK'} btnStyle={'light'} />
            </div>
            <div onClick={() => handleClick(1)}>
              <SecondaryButton title={'NEXT'} btnStyle={'light'} />
            </div>
          </div>
          <Link to="/">
              <PrimaryButton title={'EXIT'} btnStyle={'light'}/>
          </Link>
        </div>
      </div>
    </div>
  )
}