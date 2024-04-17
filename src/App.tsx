import React from 'react';
import './App.css';

function App() {
	return (
		<div className="App">
			<div className="wrapper">
				<header className="header" >
					<div className="header__container container">
						<div className="header__body ">
							<div className="header__logo">
								<img src="img/logo.png" alt="logo"></img>
							</div>
							<nav className="header__menu menu">
								<ul className="menu__list">
									<li className="menu__item">
										<a href="#" className="menu__link">Как это работает</a>
									</li>
									<li className="menu__item">
										<a href="#" className="menu__link">3-й блок</a>
									</li>
									<li className="menu__item">
										<a href="#" className="menu__link">Вопросы и ответы</a>
									</li>
									<li className="menu__item">
										<a href="#" className="menu__link">Форма</a>
									</li>
								</ul>
							</nav>
						</div>
					</div>
				</header>
				<main className="main">
					{/* <section className="firstscreen">
						<div className="firstscreen__container container">
							<div className="firstscreen__body">
								<h1 className="firstscreen__title">Говорят, никогда не поздно сменить профессию</h1>
								<p className='firstscreen__text'>Сделай круто тестовое задание и у тебя получится</p>
								<button className="firstscreen__button button">Проще простого!</button>
							</div>
						</div>
					</section> */}

					<section className="howItWorks">
						<div className="howItWorks__container container">
							<h2 className="howItWorks__title">Как это работает</h2>
							<ul className="howItWorks__body">
								<li className="howItWorks__item">
									<img className="howItWorks__img" src="img/howItWorks/1.svg" alt="waiting" />
									<div className="howItWorks__content">
										<h6 className='howItWork__subtitle'>Прочитай задание внимательно</h6>
										<p className='howItWork__text'>Думаю у тебя не займет это больше двух-трех минут</p>
									</div>
								</li>
								<li className="howItWorks__item">
									<img className="howItWorks__img" src="img/howItWorks/2.svg" alt="delivery truck" />
									<div className="howItWorks__content">
										<h6 className='howItWork__subtitle'>Изучи весь макет заранее</h6>
										<p className='howItWork__text'>Подумай как это будет работать на разных разрешениях и при скролле</p>
									</div>
								</li>
								<li className="howItWorks__item">
									<img className="howItWorks__img" src="img/howItWorks/3.svg" alt="secure" />
									<div className="howItWorks__content">
										<h6 className='howItWork__subtitle'>Сделай хорошо</h6>
										<p className='howItWork__text'>Чтобы мы могли тебе доверить подобные задачи в будущем</p>
									</div>
								</li>
								<li className="howItWorks__item">
									<img className="howItWorks__img" src="img/howItWorks/4.svg" alt="money bags" />
									<div className="howItWorks__content">
										<h6 className='howItWork__subtitle'>Получи предложение</h6>
										<p className='howItWork__text'>Ну тут все просто, не я придумал правила, но думаю так и будет&#41;&#41;&#41;</p>
									</div>
								</li>
							</ul>
						</div>
					</section>

					<section className="credits">
						<div className="credits__container container">
							<div className="credits__body">
								<div className="credits__content">
									<h3 className="credits__title">Круто, ты дошел до третьего блока</h3>
									<div className="credits__text">
										<p>63% опрошенных пользовались кредитами из-за того, что не могли покрыть непредвиденные расходы свыше 15 000 ₽.		</p>
										<p>Доступ к заработанным деньгам помогает отказаться от кредитов и экономить деньги на процентах и штрафах.</p>
									</div>
								</div>
								<img className="credits__img" src="img/credits.png" alt="credits picture" />
							</div>
						</div>
					</section>

					<section className="reviews">
						<div className="reviews__container container">
							<h3 className="reviews__title">Отзывы</h3>
							<div className="reviews__swiper swiper">
								<div className="swiper__slide slide">
									<div className="slide__title">
										<img className="slide__img" src="img/reviews/user1.png" alt="slide picture" />
										<div>
											<p className="slide__name">Константинов Михаил Павлович</p>
											<p className="slide__location">Санкт-Петербург</p>
										</div>
									</div>
									<p className="slide__text">Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения. В своём стремлении улучшить пользовательский опыт мы</p>
								</div>
								<div className="swiper__slide slide">
									<div className="slide__title">
										<img className="slide__img" src="img/reviews/user2.png" alt="slide picture" />
										<div>
											<p className="slide__name">Иван Иванов</p>
											<p className="slide__location">Санкт-Петербург</p>
										</div>
									</div>
									<p className="slide__text">Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения. В своём стремлении улучшить пользовательский опыт мы упускаем, что активно развивающиеся страны третьего мира призваны к ответу.</p>
								</div>
								<div className="swiper__slide slide">
									<div className="slide__title">
										<img className="slide__img" src="img/reviews/user1.png" alt="slide picture" />
										<div>
											<p className="slide__name">Артем Корнилов</p>
											<p className="slide__location">Самара</p>
										</div>
									</div>
									<p className="slide__text">Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения.</p>
								</div>
							</div>
						</div>
					</section>

				</main>
				<footer className="footer">
					<p >© 2021 Лаборатория интернет</p>
				</footer>
			</div>
		</div>
	);
}

export default App;
