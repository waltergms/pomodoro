import { TimerIcon } from "lucide-react";
import styles from './Logo.module.css';

export function Logo() {
    return (
        <h1 className={styles.logo}><TimerIcon size={48} /></h1>
    )
}