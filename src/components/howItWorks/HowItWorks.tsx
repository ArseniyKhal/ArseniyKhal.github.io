import styles from './HowItWorks.module.scss';

export const HowItWorks = () => {
	return (
		<section className="howItWorks" id="howItWorks">
			<div className={styles.container}>
				<h2 className={styles.howItWorks__title}>Как это работает</h2>
				<ul className={styles.howItWorks__body}>
					<li className={styles.howItWorks__item}>
						<img className={styles.howItWorks__img} src="img/howItWorks/1.svg" alt="waiting" />
						<div className={styles.howItWorks__content}>
							<h6 className={styles.howItWorks__subtitle}>Прочитай задание внимательно</h6>
							<p className={styles.howItWorks__text}>Думаю у тебя не займет это больше двух-трех минут</p>
						</div>
					</li>
					<li className={styles.howItWorks__item}>
						<img className={styles.howItWorks__img} src="img/howItWorks/2.svg" alt="delivery truck" />
						<div className={styles.howItWorks__content}>
							<h6 className={styles.howItWorks__subtitle}>Изучи весь макет заранее</h6>
							<p className={styles.howItWorks__text}>Подумай как это будет работать на разных разрешениях и при скролле</p>
						</div>
					</li>
					<li className={styles.howItWorks__item}>
						<img className={styles.howItWorks__img} src="img/howItWorks/3.svg" alt="secure" />
						<div className={styles.howItWorks__content}>
							<h6 className={styles.howItWorks__subtitle}>Сделай хорошо</h6>
							<p className={styles.howItWorks__text}>Чтобы мы могли тебе доверить подобные задачи в будущем</p>
						</div>
					</li>
					<li className={styles.howItWorks__item}>
						<img className={styles.howItWorks__img} src="img/howItWorks/4.svg" alt="money bags" />
						<div className={styles.howItWorks__content}>
							<h6 className={styles.howItWorks__subtitle}>Получи предложение</h6>
							<p className={styles.howItWorks__text}>Ну тут все просто, не я придумал правила, но думаю так и будет&#41;&#41;&#41;</p>
						</div>
					</li>
				</ul>
			</div>
		</section>

	)
}


