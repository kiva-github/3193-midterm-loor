import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { setCodes } from '../../utils/firebase/config'

// firebase imports
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from '../../utils/firebase/config';

// styles
import '../pages.scss'

// contexts
import { UserContext } from '../../contexts/UserContext'

// components
import Button from '../../components/button/Button'
import SelectionCard from '../../components/selection-card/SelectionCard'

// set rankings
const setRankings = async (assignee) => {
    const docRef = doc(db, "rankings", assignee);
    const docSnap = await getDoc(docRef);
    let currentCount = docSnap.data().count
    currentCount = currentCount + 1
    await setDoc(docRef, { count: currentCount })
    console.log(`current count: ${currentCount}`)
}

export default function Confirmation() {
    const { sessionCodeArray, clearSessionCodeArray } = useContext(UserContext)
    const navigate = useNavigate()

    const handleConfirmation = () => {
        sessionCodeArray.forEach((vote) => {
            setCodes(vote.enteredCode, vote.assignment)
            setRankings(vote.assignment) // fix
        })
        clearSessionCodeArray()
        navigate('/complete')
    }

    return (
        <div className='page-container'>
            {sessionCodeArray.map((selection) => (
                <SelectionCard key={selection.enteredCode} logo={selection.assignment}/>
            ))}
        
            <div className='button-container'>
                <div onClick={handleConfirmation}>
                    <Button title={'CONFIRM'} btnStyle={'dark'}/>
                </div>
                <Link to="/selections">
                    <Button title={'BACK'} btnStyle={'light'}/>
                </Link>
            </div>
        </div> 
    )
}
