import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { db, addToOrganizationCollection, updateCodes } from '../../utils/firebase/config'

import { collection, getDocs, updateDoc, doc } from 'firebase/firestore'


// styles
import '../pages.scss'

// contexts
import { UserContext } from '../../contexts/UserContext'

// components
import PrimaryButton from '../../components/primary-button/PrimaryButton'
import SelectionCard from '../../components/selection-card/SelectionCard'

// datas
import { organizations } from '../../datas/organizations'

export default function Confirmation() {
    const { enteredCodes, clearEnteredCodes } = useContext(UserContext)
    const navigate = useNavigate()

    // update results
    const updateResults = async (organization) => {
        const querySnapshot = await getDocs(collection(db, "results", organization, 'voted-codes'));
        let count = 0;
        querySnapshot.forEach((doc) => {
            count += 1
        });
        const docRef = doc(db, 'results', organization)
        await updateDoc(docRef, { count })
    }

    const handleConfirmation = () => {
        enteredCodes.forEach((enteredCode) => {
            updateCodes(enteredCode.code, enteredCode.assignment)
        })
        addToOrganizationCollection(enteredCodes)
        organizations.map((org) => {
            updateResults(org.id)
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
                    <PrimaryButton title={'CONFIRM'} btnStyle={'dark'}/>
                </div>
                <Link to="/selections">
                    <PrimaryButton title={'BACK'} btnStyle={'light'}/>
                </Link>
            </div>
        </div> 
    )
}
