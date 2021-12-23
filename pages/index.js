import Head from 'next/head';
import Navbar from '../components/Navbar';
import styles from '../styles/Home.module.css';

export default function Home() {
	return (
		<>
			<Head>
				<link
					href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<div className="container">
				<Navbar />
				<div className={styles.main}>
					<h1>데일리 뉴스</h1>
				</div>
			</div>
		</>
	);
}
