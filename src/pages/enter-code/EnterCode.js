import { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'

// firebase imports
import { doc, getDoc } from "firebase/firestore";
import { db } from '../../utils/firebase/config';

// styles
import './EnterCode.scss'

// components
import Button from "../../components/button/Button"

// contexts
import { UserContext } from '../../contexts/UserContext';

export default function EnterCode() {
  const [enteredCode, setEnteredCode] = useState('')
  const navigate = useNavigate()
  const { sessionCodeArray, changeCurrentCode } = useContext(UserContext)

  const handleCodeEntry = async () => {  

    if (sessionCodeArray.includes(enteredCode)) {
      alert('CODE ALREADY ENTERED')
    } else {
      const docRef = doc(db, "active-codes", enteredCode);
      const docSnap = await getDoc(docRef);
      // check if code is a doc in active-codes collection
      if (docSnap.exists()) {
        // if in collection, add code to sessionCodeArray
        changeCurrentCode({ enteredCode: enteredCode, assignment: '' })
        navigate('/vote')
        
      } else {
        // if not in document, show Invalid Code message
        alert('INVALID CODE')
      }
    }
  }

  return (
    <div className='enter-code-container'>
      <h3>Enter code in the field below</h3>
      <div className='input-container'>
        <input
          className='code-input'
          type="text"
          onChange={(e) => setEnteredCode(e.target.value.toUpperCase())}
          value={enteredCode}
        />
      </div>
      <div className='button-container'>

        <div onClick={handleCodeEntry}>
          <Button title={'ENTER'} btnSyle={'light'} />
        </div>

        <Link to="/">
            <Button title={'BACK'} btnStyle={'light'}/>
        </Link>
      </div>
    </div>
  )
}
