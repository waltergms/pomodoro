import {
  HistoryIcon,
  HouseIcon,
  MoonIcon,
  SettingsIcon,
  SunIcon,
} from 'lucide-react';
import styles from './styles.module.css';
import { useState, useEffect } from 'react';

type AvailableThemes = 'dark' | 'light';

export function Menu() {
  const [theme, setTheme] = useState<AvailableThemes>(() => {
    const storagedTheme =
      (localStorage.getItem('theme') as AvailableThemes) || 'dark';
    return storagedTheme;
  });

  const nextThemeIcon = {
    dark: <SunIcon />,
    light: <MoonIcon />,
  };

  function handleThemeChange(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) {
    event.preventDefault();

    setTheme(prevTheme => {
      const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';
      return nextTheme;
    });
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    // return () => {
    //   console.log('Limpa a sujeira');
    // };
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <>
      <nav className={styles.menu}>
        <a
          href='#'
          className={styles.menuLink}
          aria-label='Ir para home'
          title='Ir para home'
        >
          <HouseIcon />
        </a>
        <a
          href='#'
          className={styles.menuLink}
          aria-label='Ver histórico'
          title='Ver histórico'
        >
          <HistoryIcon />
        </a>
        <a
          href='#'
          className={styles.menuLink}
          aria-label='Ir para configurações'
          title='Ir para configurações'
        >
          <SettingsIcon />
        </a>
        <a
          href='#'
          className={styles.menuLink}
          aria-label='Mudar tema'
          title='Mudar tema'
          onClick={handleThemeChange}
        >
          {nextThemeIcon[theme]}
        </a>
      </nav>
    </>
  );
}
