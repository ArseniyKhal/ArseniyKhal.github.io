import styles from './Swiper.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Keyboard, Pagination, Navigation } from 'swiper/modules';

export const SwiperComponent = () => {
	return (
		<Swiper
			slidesPerView={3}
			spaceBetween={32}
			keyboard={{
				enabled: true,
			}}
			pagination={{
				clickable: true,
			}}
			navigation={true}
			modules={[Keyboard, Pagination, Navigation]}
			autoHeight = {true}
			className="mySwiper"
		>
			<SwiperSlide>
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
			</SwiperSlide>
			<SwiperSlide>
				<div className={styles.slide}>
					<div className={styles.slide__title}>
						<img className="slide__img" src="img/reviews/user2.png" alt="slide picture" />
						<div>
							<p className={styles.slide__name}>Константинов Михаил Павлович</p>
							<p className={styles.slide__location}>Санкт-Петербург</p>
						</div>
					</div>
					<p className={styles.slide__text}>Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения. В своём стремлении улучшить пользовательский опыт мы</p>
				</div>
			</SwiperSlide>
			<SwiperSlide >
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
			</SwiperSlide>
			<SwiperSlide>
				<div className={styles.slide}>
					<div className={styles.slide__title}>
						<img className="slide__img" src="img/reviews/user2.png" alt="slide picture" />
						<div>
							<p className={styles.slide__name}>Константинов Михаил Павлович</p>
							<p className={styles.slide__location}>Санкт-Петербург</p>
						</div>
					</div>
					<p className={styles.slide__text}>Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения. В своём стремлении улучшить пользовательский опыт мы</p>
				</div>
				</SwiperSlide>
			<SwiperSlide>Slide 5</SwiperSlide>
		</Swiper>

	)
}

