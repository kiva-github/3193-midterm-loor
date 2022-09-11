import { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'

// firebase imports
import { doc, getDoc } from "firebase/firestore";
import { db } from '../../utils/firebase/config';

// styles
import '../pages.scss'
import './EnterCode.scss'

// components
import Button from "../../components/button/Button"

// contexts
import { UserContext } from '../../contexts/UserContext';


export default function EnterCode() {
  const [enteredCode, setEnteredCode] = useState('')
  const navigate = useNavigate()
  const { sessionCodeArray, changeCurrentCode } = useContext(UserContext)

  // check if code has been used this session
  const codeEnteredInSession = () => {
    let repeat = false
    sessionCodeArray.forEach((code) => {
      if (code.enteredCode === enteredCode) {
        repeat = true
      }
    })
    return repeat
  }

  const handleCodeEntry = async () => { 

    if (enteredCode.length === 0) {
      alert('Invalid code format')
      return
    }
    const repeatCode = codeEnteredInSession()

    if (repeatCode) {
      alert('You have already entered that code')
    } else {
      const docRef = doc(db, "active-codes", enteredCode);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        if (docSnap.data().used) {
          alert('That code has been used already')
        } else {
          // if in collection, add code to sessionCodeArray
          changeCurrentCode({ enteredCode: enteredCode, assignment: '' })
          console.log('Code was accepted, proceed to voting')
          navigate('/vote')
        }
      } else {
        // if not in document, show Invalid Code message
        alert('That code is invalid')
      }
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
            onChange={(e) => setEnteredCode(e.target.value.toUpperCase())}
            value={enteredCode}
          />
        </div>
      </>

      <div className='button-container'>
        <div onClick={handleCodeEntry}>
          <Button title={'ENTER'} btnSyle={'light'} />
        </div>
        <Link to={sessionCodeArray.length === 0 ? '/' : '/selections'}>
            <Button title={'BACK'} btnStyle={'light'}/>
        </Link>
      </div>
    </div>
  )
}
