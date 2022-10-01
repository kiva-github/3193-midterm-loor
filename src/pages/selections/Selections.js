import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'

// styles
import '../pages.scss'
import './Selections.scss'

// contexts
import { UserContext } from '../../contexts/UserContext'

// components
import SelectionCard from '../../components/selection-card/SelectionCard'
import PrimaryButton from "../../components/primary-button/PrimaryButton"

export default function Selections() {
    const { enteredCodes, updateCurrentCode, removeFromEnteredCodes } = useContext(UserContext)
    const navigate = useNavigate()

    const handleClick = (e) => {
        const clickedSelectionCode = e.currentTarget.id
        const clickedVote = enteredCodes.find((codeData) => codeData.code === clickedSelectionCode)
        updateCurrentCode(clickedVote)
        removeFromEnteredCodes(clickedVote.code)
        navigate('/vote')
    }

    return (
        <div className='page-container'>

            <div className='selections-container'>
                {enteredCodes.map((enteredCode) => (
                    <div id={enteredCode.code} className='selection-card-container' key={enteredCode.code} onClick={handleClick}>
                        <SelectionCard selection={enteredCode}/>
                    </div>
                ))}
            </div>

            <div className='button-container'>
                <Link to="/enter-code">
                    <PrimaryButton title={'ENTER ANOTHER CODE '} btnSyle={'light'} />
                </Link>

                <Link to="/confirmation">
                    <PrimaryButton title={'NEXT'} btnStyle={'light'}/>
                </Link>
            </div>
        </div> 
    )
}
