import { MenuButtons } from './Menu';
import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from 'lucide-react';
import styles from './styles.module.css';

export function Menu() {
  return (
    <>
      <nav className={styles.menu}>
        <MenuButtons>
          <HouseIcon />
        </MenuButtons>
        <MenuButtons>
          <HistoryIcon />
        </MenuButtons>
        <MenuButtons>
          <SettingsIcon />
        </MenuButtons>
        <MenuButtons>
          <SunIcon />
        </MenuButtons>
      </nav>
    </>
  );
}
