import { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { doc, getDoc } from 'firebase/firestore'
import { db } from '../../utils/firebase/config'

// styles
import '../pages.scss'
import './EnterCode.scss'

// components
import PrimaryButton from '../../components/primary-button/PrimaryButton'

// contexts
import { UserContext } from '../../contexts/UserContext';

export default function EnterCode() {
  const [enteredCode, setEnteredCode] = useState('')
  const [unchanged, setUnchanged] = useState(null)
  const [codeError, setCodeError] = useState(null)
  const navigate = useNavigate()
  const { enteredCodes, updateCurrentCode } = useContext(UserContext)

  // check if code exists
  const codeInDatabase = async (enteredCode) => {
    const docRef = doc(db, "active-codes", enteredCode);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      if (docSnap.data().used) {
        setCodeError('Code has already been used')
        setUnchanged(enteredCode)
      } else {
        // if code exists, set currentCode to entered code
        updateCurrentCode({ code: enteredCode, assignment: '' })
        navigate('/vote')
      }
    } else {
      setCodeError('Code does not exist')
      setUnchanged(enteredCode)
    }
  }

  // check if code has been used this session
  const codeAlreadyEnteredInSession = () => {
    let repeat = false
    enteredCodes.forEach((c) => {
      console.log(c.code, enteredCode)
      if (c.code === enteredCode) {
        repeat = true
      }
    })
    return repeat
  }

  const handleCodeEntry = async () => {
    setUnchanged(null)
    setCodeError(null)

    // if no code entered, display error message
    if (enteredCode.length === 0) {
      setCodeError('Invalid code (nothing entered)')
      setUnchanged(enteredCode)
      return
    }

    if (codeAlreadyEnteredInSession()) {
      setCodeError('You have already entered that code')
      setUnchanged(enteredCode)
    } else {
      codeInDatabase(enteredCode)
    }
  }

  return (
    <div className='page-container'>
      <>
        <h1>Enter code in the field below</h1>
        <div className='input-container'>
          <input
            className='code-input'
            type="text"
            onChange={(e) => setEnteredCode(e.target.value.toUpperCase().replace(/\s+/g, ''))}
            value={enteredCode}
            placeholder='CODE'
          />
          {codeError && ( unchanged === enteredCode ) && <h4>{codeError}</h4>}
        </div>
      </>

      <div className='button-container'>
        <div onClick={handleCodeEntry}>
          <PrimaryButton title={'ENTER'} btnSyle={'light'} />
        </div>
        <Link to={enteredCodes.length === 0 ? '/' : '/selections'}>
            <PrimaryButton title={'BACK'} btnStyle={'light'}/>
        </Link>
      </div>
    </div>
  )
}
