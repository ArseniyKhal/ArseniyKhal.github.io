import styles from './Credits.module.scss';

export const Credits = () => {
	return (
		<section className="credits" id="credits">
			<div className={styles.container}>
				<div className={styles.credits__body}>
					<div className="credits__content">
						<h3 className={styles.credits__title}>Круто, ты дошел до третьего блока</h3>
						<div className={styles.credits__text}>
							<p>63% опрошенных пользовались кредитами из-за того, что не могли покрыть непредвиденные расходы свыше 15 000 ₽.		</p>
							<p>Доступ к заработанным деньгам помогает отказаться от кредитов и экономить деньги на процентах и штрафах.</p>
						</div>
					</div>
					<img className="credits__img" src="img/credits.png" alt="credits picture" />
				</div>
			</div>
		</section>

	)
}


