import React from 'react';
import { useRouter } from 'next/router';
import styles from '../../../styles/Feed.module.css';
import Navbar from '../../../components/Navbar';

const Business = ({ pageNumber, articles }) => {
	const router = useRouter();

	return (
		<div className="container">
			<Navbar />
			<div className={styles.main}>
				{/* map 메소드 사용하여 article 데이터 디스플레이하기 */}
				{articles.map((article, index) => (
					<div key={index} className={styles.post}>
						{/* 타이틀 클릭시 뉴스 링크로 이동 */}
						<h1 onClick={() => window.open(article.url)}>{article.title}</h1>
						<p>{article.description}</p>
						{/* 해당 기사 이미지가 없으면 백업 이미지로 대체 */}
						{article.urlToImage ? (
							<img
								src={article.urlToImage}
								onClick={() => window.open(article.url)}
							/>
						) : (
							<img
								src="/news-img.svg"
								onClick={() => window.open(article.url)}
							/>
						)}
					</div>
				))}
			</div>

			{/* 페이지 핸들링 */}
			<div className={styles.paginator}>
				<div
					className={pageNumber === 1 ? styles.disabled : styles.active}
					onClick={() => {
						if (pageNumber > 1) {
							router
								.push(`/feed/business/${pageNumber - 1}`)
								// router.push()는 프로미스이므로 .then을 사용하여 페이지 상단으로 이동한다
								.then(window.scrollTo(0, 0));
						}
					}}
				>
					이전
				</div>
				<div>{pageNumber}</div>
				<div
					className={pageNumber === 5 ? styles.disabled : styles.active}
					onClick={() => {
						if (pageNumber < 5) {
							router
								.push(`/feed/business/${pageNumber + 1}`)
								.then(window.scrollTo(0, 0));
						}
					}}
				>
					다음
				</div>
			</div>
		</div>
	);
};

export const getServerSideProps = async (pageContext) => {
	const pageNumber = pageContext.query.slug;

	// 만약 요청한 페이지가 없거나 1보다 작거나 5보다 클 경우
	if (!pageNumber || pageNumber < 1 || pageNumber > 5) {
		return {
			props: {
				articles: [],
				pageNumber: 1,
			},
		};
	}

	// 스포츠 카테고리만 fetch해오기
	const apiResponse = await fetch(
		`https://newsapi.org/v2/top-headlines?country=kr&category=business&pageSize=5&page=${pageNumber}&apiKey=${process.env.NEWS_API_KEY}`
	);

	const apiJson = await apiResponse.json();
	// apiJson에서 articles 꺼내오기
	const { articles } = apiJson;

	// 가져온 데이터를 props로 리턴하기
	return {
		props: {
			articles,
			pageNumber: Number.parseInt(pageNumber), // 넘버 타입으로 변환
		},
	};
};

export default Business;
