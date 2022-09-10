import { useContext } from 'react'

// styles
import './Selections.scss'

// contexts
import { UserContext } from '../../contexts/UserContext'

// components
import SelectionCard from '../../components/selection-card/SelectionCard'

export default function Selections() {
    const { sessionCodeArray } = useContext(UserContext)

    return (
        <div className='selections-container'>
            {sessionCodeArray.map((selection) => (
                <SelectionCard title={selection.assignment}/>
            ))}
        </div>
    )
}
