import Header from './../components/header/Header'
import "../components/header/style.css";

const Home = () => { return (
		<body className="header">
			<div className="header__wrapper">
				<div class="circular_image">
					<img src="http://placekitten.com/500/500"/>
				</div>
				<h1 className="header__title">
					<strong>
						Hi, my name is <em>Yuri</em>
					</strong>
					<br />a frontend developer
				</h1>
				<div className="header__text">
					<p>with passion for learning and creating.</p>
				</div>
				<a href="#!" className="btn">
					Download CV
				</a>
			</div>
		</body>
) }

export default Home;