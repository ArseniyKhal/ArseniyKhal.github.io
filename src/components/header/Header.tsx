import { useState } from 'react';
import { NavMenu } from '../navMenu2/NavMenu';
import {menuData} from '../../mockData';
import styles from './Header.module.scss';

export const Header = () => {
	const [visibleMenu, setVisibleMenu] = useState(false)
	return (
		<header className={`${styles.header} ${visibleMenu ? styles.active : ''}`} id="header" >
			<div className={styles.container}>
				<div className={styles.header__body}>
					<div className={styles.header__logo}>
						<svg viewBox="0 0 37 24">
							<circle cx="25" cy="12" r="12" fill='#ECEFF2' />
							<circle cx="12" cy="12" r="12" fill='#2A6CEA' />
						</svg>
						<span className={`${visibleMenu ? styles.active : ''}`}>
							testLab</span>
					</div>
					<div className={`${styles.burger} `} id="burger"
						onClick={() => setVisibleMenu(!visibleMenu)}	>
						<div className={`${styles.burger__line} ${visibleMenu ? styles.active : ''}`} id="burger-line">
						</div>
					</div>
					<NavMenu visibleMenu={false} setVisibleMenu={setVisibleMenu} menuData={menuData} />
				</div>
				<div className={`${styles.header__overlay} ${visibleMenu ? styles.active : ''}`}>
					<NavMenu visibleMenu={visibleMenu} setVisibleMenu={setVisibleMenu} menuData={menuData} />
				</div>
			</div>
		</header>
	)
}


