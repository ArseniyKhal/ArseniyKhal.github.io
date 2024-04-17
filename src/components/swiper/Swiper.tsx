import styles from './Swiper.module.scss';
import {cardDataType} from '../../types';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Keyboard, Pagination, Navigation } from 'swiper/modules';


export const SwiperComponent = ({swiperCardData}:{swiperCardData: cardDataType[]}) => {
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
			autoHeight={true}
			className="mySwiper"
		>
			{swiperCardData.map(card => (
				<SwiperSlide key={card.id}>
					<div className={styles.slide}>
						<div className={styles.slide__title}>
							<img className="slide__img" src={card.avatar ? card.avatar : 'img/reviews/noAvatar.png'} alt="slide picture" />
							<div>
								<p className={styles.slide__name}>{card.name}</p>
								<p className={styles.slide__location}>{card.location}</p>
							</div>
						</div>
						<p className={styles.slide__text}>{card.text}</p>
					</div>
				</SwiperSlide>
			))}
		</Swiper>

	)
}

