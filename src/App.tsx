import React from 'react';
import { Header } from './components/header/Header';
import { Credits } from './components/credits/Credits';
import { HowItWorks } from './components/howItWorks/HowItWorks';
import { Firstscreen } from './components/firstscreen/Firstscreen';
import { Reviews } from './components/reviews/Reviews';
import { Footer } from './components/footer/Footer';
import './App.css';

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
				</main>
				<Footer />
			</div>
		</div>
	);
}

export default App;
