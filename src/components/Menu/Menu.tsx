import styles from './styles.module.css';

type MenuButtonsProps = {
  children: React.ReactNode;
};

export function MenuButtons({ children }: MenuButtonsProps) {
  return (
    <a href='#' className={styles.menuLink}>
      {children}{' '}
    </a>
  );
}
