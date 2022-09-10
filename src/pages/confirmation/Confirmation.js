import { useContext } from 'react'
import { Link } from 'react-router-dom'

// styles
import '../pages.scss'

// contexts
import { UserContext } from '../../contexts/UserContext'

// components
import Button from '../../components/button/Button'
import SelectionCard from '../../components/selection-card/SelectionCard'

export default function Confirmation() {
    const { sessionCodeArray } = useContext(UserContext)

    const handleConfirmation = () => {
        sessionCodeArray.forEach((vote) => {
            console.log(vote.assignment) // id
            console.log(vote.enteredCode) // code
        })
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
