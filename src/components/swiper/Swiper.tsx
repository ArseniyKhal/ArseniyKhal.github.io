import styles from './Swiper.module.scss';
import { cardDataType } from '../../types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

import 'swiper/scss';
import 'swiper/scss/pagination';
import 'swiper/scss/navigation';

export const SwiperComponent = ({ swiperCardData }: { swiperCardData: cardDataType[] }) => {
	return (
		<div className={styles.swiper__body}>
			<Swiper
				slidesPerView={3}
				keyboard={{
					enabled: true,
				}}
				pagination={{
					clickable: true,
					el: '.swiper-pagination',
					type: 'bullets',
				}}
				navigation={{
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				}}
				breakpoints={{
					0: {
						slidesPerView: 1,
					},
					768: {
						slidesPerView: 2,
					},
					1024: {
						slidesPerView: 3,
					}
				}}
				modules={[Pagination, Navigation]}
				autoHeight={true}
				className={styles.mySwiper}
			>
				{swiperCardData.map(card => (
					<SwiperSlide key={card.id}
						className={styles.swiper__slide}
						style={{ height: '100%' }}
					>
						<div className={styles.slide}>
							<div className={styles.slide__content}>
								<div className={styles.slide__title}>
									<img className="slide__img" src={card.avatar ? card.avatar : 'img/reviews/noAvatar.png'} alt="slide picture" />
									<div>
										<p className={styles.slide__name}>{card.name}</p>
										<p className={styles.slide__location}>{card.location}</p>
									</div>
								</div>
								<p className={styles.slide__text}>{card.text}</p>
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
			<div className={styles.swiper__buttons}>
				<div className="swiper-button-prev"></div>
				<div className="swiper-button-next"></div>
			</div>
			<div className="swiper-pagination"></div>
		</div>
	)
}

