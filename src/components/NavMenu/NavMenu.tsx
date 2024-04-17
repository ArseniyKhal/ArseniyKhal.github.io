import {NavMenuItemType} from '../../types';
import styles from './NavMenu.module.scss';

export const NavMenu = ({ visibleMenu, menuData }: { visibleMenu: boolean, menuData: NavMenuItemType[] }) => {
	return (
		<nav className={`${styles.menu} ${visibleMenu ? styles.active : ''}`}>
			<ul className={styles.menu__list}>
				{menuData.map((item) => (
					<li className={styles.menu__item} key={item.id}>
						<a href={item.link} className={styles.menu__link}>
							{item.title}
						</a>
					</li>
				))}
			</ul>
		</nav>

	)
}

