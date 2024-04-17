import styles from './Header.module.scss';


export const Header = () => {
	return (
		<header className={styles.header} id="header" >
			<div className="header__container container">
				<div className={styles.header__body}>
					<div className="header__logo">
						<img src="img/logo.png" alt="logo"></img>
					</div>
					<nav className={styles.menu}>
						<ul className={styles.menu__list}>
							<li className={styles.menu__item}>
								<a href="#" className={styles.menu__link}>Как это работает</a>
							</li>
							<li className={styles.menu__item}>
								<a href="#" className={styles.menu__link}>3-й блок</a>
							</li>
							<li className={styles.menu__item}>
								<a href="#" className={styles.menu__link}>Вопросы и ответы</a>
							</li>
							<li className={styles.menu__item}>
								<a href="#" className={styles.menu__link}>Форма</a>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</header>
	)
}


