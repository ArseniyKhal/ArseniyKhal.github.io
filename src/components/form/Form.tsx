import { useState } from 'react';
import styles from './Form.module.scss';


export const Form = () => {
	const [nameValue, setNameValue] = useState("");
	const [telValue, setTelValue] = useState("");
	const [isChecked, setIsChecked] = useState(false);
	const [formValid, setFormValid] = useState(false);
	const nameRegex = /^[a-zA-Zа-яА-Я]{3,}$/;
	const phoneRegex = /^\d{10,}$/;

	const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setNameValue(e.target.value)
		if (nameRegex.test(e.target.value)) {
			e.target.classList.remove(styles.invalid);
		} else {
			e.target.classList.add(styles.invalid);
		}
		validateForm()
	};

	const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setTelValue(e.target.value)
		if (phoneRegex.test(e.target.value)) {
			e.target.classList.remove(styles.invalid);
		} else {
			e.target.classList.add(styles.invalid);
		}
		validateForm()
	};

	const validateForm = () => {
		const isNameValid = nameValue.trim() !== "" && nameRegex.test(nameValue);
		const isPhoneValid = telValue.trim() !== "" && phoneRegex.test(telValue);
		setFormValid(isNameValid && isPhoneValid);
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formData = {
			name: nameValue,
			phone: telValue,
		};
		// Отправляем данные на сервер
		fetch('YOUR_SERVER_ENDPOINT', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(formData),
		})
			.then((response) => {
				if (!response.ok) {
					throw new Error('Network response was not ok');
				}
				return response.json();
			})
			.then((data) => {
				console.log('Success:', data);
				// Здесь можно добавить обработку успешной отправки
			})
			.catch((error) => {
				console.error('Error:', error);
				// Здесь можно добавить обработку ошибки
			});
	};


	return (
		<section className={styles.info} id="form">
			<div className={styles.container}>
				<div className={styles.info__body}>
					<h2 className={styles.info__title}>Отправь форму</h2>
					<form className={`${styles.info__form} ${styles.form}`} onSubmit={handleSubmit}>
						<input className={styles.form__input} type="text"
							onChange={handleNameChange}
							placeholder="Имя" />
						<input className={`${styles.form__input} `} type="tel"
							onChange={handlePhoneChange}
							placeholder="Телефон" />
						<div>
							<input className={styles.form__checkbox} type="checkbox"
								onChange={(e) => setIsChecked(e.target.checked)}
								checked={isChecked}
								id="formCheckbox" />
							<label className={styles.form__label} htmlFor="formCheckbox">Согласен, отказываюсь</label>
						</div>
						<button className={`${styles.button} ${styles.form__button}`}
							disabled={!formValid || !isChecked}
						>Отправить</button>
					</form>
				</div>
			</div>
		</section>
	)
}


