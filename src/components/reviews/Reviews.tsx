import styles from './Reviews.module.scss';


export const Reviews = () => {
	return (
		<section className={styles.reviews} id="reviews">
			<div className="reviews__container container">
				<h3 className={styles.reviews__title}>Отзывы</h3>
				<div className="reviews__swiper swiper">
					<div className={styles.slide}>
						<div className={styles.slide__title}>
							<img className="slide__img" src="img/reviews/user1.png" alt="slide picture" />
							<div>
								<p className={styles.slide__name}>Константинов Михаил Павлович</p>
								<p className={styles.slide__location}>Санкт-Петербург</p>
							</div>
						</div>
						<p className={styles.slide__text}>Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения. В своём стремлении улучшить пользовательский опыт мы</p>
					</div>
					<div className={styles.slide}>
						<div className={styles.slide__title}>
							<img className="slide__img" src="img/reviews/user2.png" alt="slide picture" />
							<div>
								<p className={styles.slide__name}>Иван Иванов</p>
								<p className={styles.slide__location}>Санкт-Петербург</p>
							</div>
						</div>
						<p className={styles.slide__text}>Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения. В своём стремлении улучшить пользовательский опыт мы упускаем, что активно развивающиеся страны третьего мира призваны к ответу.</p>
					</div>
					<div className={styles.slide}>
						<div className={styles.slide__title}>
							<img className="slide__img" src="img/reviews/user1.png" alt="slide picture" />
							<div>
								<p className={styles.slide__name}>Артем Корнилов</p>
								<p className={styles.slide__location}>Самара</p>
							</div>
						</div>
						<p className={styles.slide__text}>Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения.</p>
					</div>
				</div>
			</div>
		</section>

	)
}


