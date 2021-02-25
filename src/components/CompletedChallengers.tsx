import { useContext } from 'react';
import { ChallengesContext } from '../context/ChallengesContext';
import styles from '../styles/components/CompletedChallengers.module.css';

export function CompletedChallengers(){

    const { challengesCompleted } = useContext(ChallengesContext)

    return (
        <div className={styles.completedChallengersContainer}>
            <span>Desafios Complestos</span>
            <span>{challengesCompleted}</span>
        </div>
    )
}