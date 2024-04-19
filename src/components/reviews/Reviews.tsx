import { SwiperComponent } from '../swiper/Swiper';
import { swiperCardData } from '../../mockData';
import styles from './Reviews.module.scss';

export const Reviews = () => {
	return (
		<section className={styles.reviews} id="reviews">
			<div className={styles.container}>
				<div className={styles.reviews__body}>
					<h3 className={styles.reviews__title}>Отзывы</h3>
					<SwiperComponent swiperCardData={swiperCardData} />
				</div>
			</div>
		</section>

	)
}


