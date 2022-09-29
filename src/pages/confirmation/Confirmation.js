import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { db, addToOrganizationCollection, updateCodes } from '../../utils/firebase/config'

import { collection, getDocs, updateDoc, doc } from 'firebase/firestore'


// styles
import '../pages.scss'

// contexts
import { UserContext } from '../../contexts/UserContext'

// components
import Button from '../../components/button/Button'
import SelectionCard from '../../components/selection-card/SelectionCard'

// datas
import { organizations } from '../../datas/organizations'

export default function Confirmation() {
    const { enteredCodes, clearEnteredCodes } = useContext(UserContext)
    const navigate = useNavigate()

    // update rankings
    const updateRankings = async (organization) => {
        const querySnapshot = await getDocs(collection(db, "rankings", organization, 'voted-codes'));
        let count = 0;
        querySnapshot.forEach((doc) => {
            count += 1
        });
        const docRef = doc(db, 'rankings', organization)
        await updateDoc(docRef, { count })
    }

    const handleConfirmation = () => {
        enteredCodes.forEach((enteredCode) => {
            updateCodes(enteredCode.code, enteredCode.assignment)
        })
        addToOrganizationCollection(enteredCodes)
        organizations.map((org) => {
            updateRankings(org.id)
        })
        clearEnteredCodes()
        navigate('/complete')
    }

    return (
        <div className='page-container'>
            {enteredCodes.map((enteredCode) => (
                <SelectionCard key={enteredCode.code} selection={enteredCode}/>
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
