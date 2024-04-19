import { QuestionsType } from '../../types';
import { questionsData } from '../../mockData';
import styles from './Questions.module.scss';
import { useState } from 'react';

export const Questions = () => {
	return (
		<section className={styles.questions} id="questions">
			<div className={styles.container}>
				<h2 className={styles.questions__title}>Вопросы и ответы</h2>
				<div className={styles.questions__body}>
					<ul className={styles.questions__list}>
						{questionsData.map((item) => <Question item={item} key={item.id} />)}
					</ul>
				</div>
			</div>
		</section>
	)
}


const Question = ({ item }: { item: QuestionsType }) => {
	const [open, setOpen] = useState(false);
	return (
		<li className={styles.questions__item}
			onClick={() => setOpen(!open)}>
			<div className={`${styles.questions__question} ${open ? styles.open : ''}`}>
				{item.question}
			</div>
			<p className={`${styles.questions__answer} ${open ? styles.open : ''}`}>
				{item.answer}
			</p>
		</li>
	)
}