import { useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { setCodes } from '../../utils/firebase/config'

// firebase imports
import { collection, getDocs } from "firebase/firestore";
import { db } from '../../utils/firebase/config';

// styles
import '../pages.scss'

// contexts
import { UserContext } from '../../contexts/UserContext'

// components
import Button from '../../components/button/Button'
import SelectionCard from '../../components/selection-card/SelectionCard'

// set rankings
const setRankings = async () => {
    const querySnapshot = await getDocs(collection(db, "rankings"));
    let dict = {}
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      dict[doc.id] = doc.data().count
    //   console.log(doc.id, " => ", doc.data().count);
    })
    return dict
}

export default function Confirmation() {
    const { sessionCodeArray, clearSessionCodeArray } = useContext(UserContext)
    const navigate = useNavigate()

    const handleConfirmation = () => {
        let dict = {}
        sessionCodeArray.forEach((vote) => {
            setCodes(vote.enteredCode, vote.assignment)
            
            if (dict[vote.assignment] != null) {
                let currCount = dict[vote.assignment]
                let newCount = currCount +  1
                dict[vote.assignment] = newCount
            } else {
                dict[vote.assignment] = 1
            }
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
