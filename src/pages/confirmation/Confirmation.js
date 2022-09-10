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

    return (
        <div className='page-container'>
            {sessionCodeArray.map((selection) => (
                <SelectionCard title={selection.assignment}/>
            ))}
        
            <div className='button-container'>
                <Link to="/complete">
                    <Button title={'CONFIRM'} btnStyle={'dark'}/>
                </Link>
                <Link to="/selections">
                    <Button title={'BACK'} btnStyle={'light'}/>
                </Link>
            </div>
        </div> 
    )
}
