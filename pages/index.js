import Navbar from '../components/Navbar';
import styles from '../styles/Home.module.css';

export default function Home() {
	return (
		<div className="container">
			<Navbar />
			<div className={styles.main}>
				<h1>News App</h1>
			</div>
		</div>
	);
}
