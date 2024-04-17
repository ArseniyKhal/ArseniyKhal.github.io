import styles from './NavMenu.module.scss';

export const NavMenu = ({visibleMenu}:{visibleMenu: boolean}) => {
	return (
		<nav className={`${styles.menu} ${visibleMenu ? styles.active : ''}`}>
			<ul className={styles.menu__list}>
				<li className={styles.menu__item}>
					<a href="#howItWorks" className={styles.menu__link}>Как это работает</a>
				</li>
				<li className={styles.menu__item}>
					<a href="#credits" className={styles.menu__link}>3-й блок</a>
				</li>
				<li className={styles.menu__item}>
					<a href="#" className={styles.menu__link}>Вопросы и ответы</a>
				</li>
				<li className={styles.menu__item}>
					<a href="#" className={styles.menu__link}>Форма</a>
				</li>
			</ul>
		</nav>

	)
}

