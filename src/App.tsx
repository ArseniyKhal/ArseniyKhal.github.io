import React from 'react';
import { Header } from './components/header/Header';
import { Credits } from './components/credits/Credits';
import { HowItWorks } from './components/howItWorks/HowItWorks';
import { Firstscreen } from './components/firstscreen/Firstscreen';
import { Reviews } from './components/reviews/Reviews';
import { Questions } from './components/Questions/Questions';
import { Info } from './components/Info/Info';
import { Form } from './components/form/Form';
import { Footer } from './components/footer/Footer';
import 'normalize.css/normalize.css';
import './styles/globals.scss';


function App() {
	return (
		<div className="App">
			<div className="wrapper">
				<Header />
				<main className="main">
					<Firstscreen />
					<HowItWorks />
					<Credits />
					<Reviews />
					<Questions />
					<Info />
					<Form />
				</main>
				<Footer />
			</div>
		</div>
	);
}

export default App;
