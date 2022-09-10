import { useContext } from 'react'
import { Link } from 'react-router-dom'

// styles
import '../pages.scss'

// contexts
import { UserContext } from '../../contexts/UserContext'

// components
import SelectionCard from '../../components/selection-card/SelectionCard'
import Button from "../../components/button/Button"

export default function Selections() {
    const { sessionCodeArray } = useContext(UserContext)

    return (
        <div className='page-container'>
            {sessionCodeArray.map((selection) => (
                <SelectionCard key={selection.enteredCode} title={selection.assignment}/>
            ))}
            
            <div className='button-container'>
                <Link to="/enter-code">
                    <Button title={'ENTER ANOTHER CODE '} btnSyle={'light'} />
                </Link>

                <Link to="/confirmation">
                    <Button title={'NEXT'} btnStyle={'light'}/>
                </Link>
            </div>
        </div> 
    )
}
