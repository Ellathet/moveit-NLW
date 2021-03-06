import { useContext } from 'react';
import { ChallengesContext } from '../context/ChallengesContext';
import styles from '../styles/components/ExperienceBar.module.css'

export function ExperienceBar() {

    const { currentExperience, experienceToNextLevel } = useContext(ChallengesContext)

    const percentToNextLevel = Math.round(currentExperience * 100) / experienceToNextLevel;

    function xpBarTo() {
        if(currentExperience === 0){(
            null
        )}else {
            return( 
            <span className={styles.currentExperience} style={{ left: `${percentToNextLevel}%`}}>
            {currentExperience} xp
            </span>   
            )
        }
    }

    return (
        <header className={styles.experienceBar}>
            <span>0 xp</span>
            <div>
                <div style={{ width: `${percentToNextLevel}%` }} />
                {xpBarTo()}
            </div>
            <span>{experienceToNextLevel} xp</span>
        </header>
    );
}