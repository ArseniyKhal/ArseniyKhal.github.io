import { useState } from 'react';
import styles from './Form.module.scss';


export const Form = () => {
	const [isValidName, setIsValidName] = useState(true);
	const [isValidTel, setIsValidTel] = useState(true);
	const [isChecked, setIsChecked] = useState(false);

	const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const nameRegex = /^[a-zA-Zа-яА-Я]+$/; // Регулярное выражение для проверки имени (только буквы)
		const isValidName = nameRegex.test(e.target.value);
		setIsValidName(isValidName);
		if (!isValidName) {
			e.target.classList.add(styles.invalid);
		} else {
			e.target.classList.remove(styles.invalid);
		}
	};

	const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const phoneRegex = /^\d{10}$/; // Регулярное выражение для 10 цифр
		const isValidTel = phoneRegex.test(e.target.value);
		setIsValidTel(isValidTel);
		if (!isValidTel) {
			e.target.classList.add(styles.invalid);
		} else {
			e.target.classList.remove(styles.invalid);
		}
	};

	const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setIsChecked(e.target.checked);
	};

	return (
		<section className={styles.info} id="form">
			<div className={styles.container}>
				<div className={styles.info__body}>
					<h2 className={styles.info__title}>Отправь форму</h2>
					<form className={`${styles.info__form} ${styles.form}`}>
						<input className={styles.form__input} type="text"
							onChange={handleNameChange}
							placeholder="Имя" />
						<input className={`${styles.form__input} `} type="tel"
							onChange={handlePhoneChange}
							placeholder="Телефон" />
						<div>
							<input className={styles.form__checkbox} type="checkbox"
								onChange={handleCheckboxChange}
								checked={isChecked}
								id="formCheckbox" />
							<label className={styles.form__label} htmlFor="formCheckbox">Согласен, отказываюсь</label>
						</div>
						<button className={`${styles.button} ${styles.form__button}`}
						disabled={!isValidName || !isValidTel || !isChecked}
						>Отправить</button>
					</form>
				</div>
			</div>
		</section>
	)
}


