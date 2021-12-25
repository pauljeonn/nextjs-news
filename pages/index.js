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
				<title>DAILY NEWS</title>
			</Head>
			<div className="container">
				<Navbar />
				<div className={styles.main}>
					<h1>DAILY NEWS</h1>
					<img src="/news.svg" />
					<p>데일리 뉴스에 오신 것을 환영합니다!</p>
					<p>매일 업데이트되는 다양한 채널의 최신 뉴스를 편하게 즐겨보세요.</p>
				</div>
			</div>
		</>
	);
}
