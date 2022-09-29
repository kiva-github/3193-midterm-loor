import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'


// styles
import './VotingCardDisplay.scss'

// contexts
import { UserContext } from '../../contexts/UserContext'

// components
import VotingCard from '../voting-card/VotingCard'
import { organizations } from '../../datas/organizations'

export default function VotingCardDisplay() {
    const { enteredCodes, currentCode, updateCurrentCode } = useContext(UserContext)
    const navigate = useNavigate()

    const handleVote = (id) => {
        currentCode.assignment = id
        enteredCodes.push(currentCode)
        updateCurrentCode(null)
        navigate('/selections')
    }
    return (
        <div className='voting-card-display-container'>
            {organizations.map((organization) => (
                <div key={organization.id} id={organization.id} onClick={() => handleVote(organization.id)}>
                    <VotingCard organization={organization} />
                </div>
            ))}
        </div>
    )
}
