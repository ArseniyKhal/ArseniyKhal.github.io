import { NavMenuItemType } from '../../types';
import styles from './NavMenu.module.scss';

interface NavMenuProps {
	visibleMenu: boolean;
	setVisibleMenu: React.Dispatch<React.SetStateAction<boolean>>;
	menuData: NavMenuItemType[];
}

export const NavMenu = ({ visibleMenu, setVisibleMenu, menuData }: NavMenuProps) => {
	return (
		<nav className={`${styles.menu} ${visibleMenu ? styles.active : ''}`}>
			<ul className={styles.menu__list}>
				{menuData.map((item) => (
					<li className={styles.menu__item} key={item.id}
						onClick={() => setVisibleMenu(false)}>
						<a href={item.link} className={styles.menu__link}>
							{item.title}
						</a>
					</li>
				))}
			</ul>
		</nav>

	)
}

