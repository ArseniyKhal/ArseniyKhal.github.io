import styles from './Firstscreen.module.scss';


export const Firstscreen = () => {
	return (
		<section className={styles.firstscreen} id="firstscreen">
			<div className={styles.container}>
				<div className={styles.firstscreen__body}>
					<h1 className={styles.firstscreen__title}>Говорят, никогда не поздно сменить профессию</h1>
					<p className={styles.firstscreen__text}>Сделай круто тестовое задание и у тебя получится</p>
					<button className={`${styles.button} ${styles.firstscreen__button}`}>Проще простого!</button>
				</div>
			</div>
		</section>

	)
}


