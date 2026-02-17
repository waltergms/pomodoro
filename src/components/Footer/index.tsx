import styles from './styles.module.css';
import { Link } from 'react-router';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Link to='/about'>Entenda como funciona a técnica pomodoro</Link>
      <Link to='/'>
        Chronos Pomodoro &copy; {new Date().getFullYear()} - Feito com 💚
      </Link>
    </footer>
  );
}
