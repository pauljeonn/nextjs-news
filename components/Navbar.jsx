import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
	const router = useRouter();
	const [category, setCategory] = useState('');

	// 현재 URL에서 카테고리명 추출하기
	useEffect(() => {
		const cat = router.pathname.split('/')[2]; // 카테고리 추출
		setCategory(cat);
	}, []);

	return (
		<div className={styles.main}>
			<div
				onClick={() => {
					router.push('/');
					setCategory('');
				}}
			>
				<img src="/news.svg" />
			</div>
			<div
				style={{
					borderBottom: category === 'all' && '2px solid #585454',
				}}
				onClick={() => {
					router.push('/feed/all/1');
					setCategory('all');
				}}
			>
				종합
			</div>
			<div
				style={{
					borderBottom: category === 'business' && '2px solid #585454',
				}}
				onClick={() => {
					router.push('/feed/business/1');
					setCategory('business');
				}}
			>
				경제
			</div>
			<div
				style={{
					borderBottom: category === 'tech' && '2px solid #585454',
				}}
				onClick={() => {
					router.push('/feed/tech/1');
					setCategory('tech');
				}}
			>
				IT
			</div>
			<div
				style={{
					borderBottom: category === 'science' && '2px solid #585454',
				}}
				onClick={() => {
					router.push('/feed/science/1');
					setCategory('science');
				}}
			>
				과학
			</div>
			<div
				style={{
					borderBottom: category === 'sports' && '2px solid #585454',
				}}
				onClick={() => {
					router.push('/feed/sports/1');
					setCategory('sports');
				}}
			>
				스포츠
			</div>
			<div
				style={{
					borderBottom: category === 'entertainment' && '2px solid #585454',
				}}
				onClick={() => {
					router.push('/feed/entertainment/1');
					setCategory('entertainment');
				}}
			>
				연예
			</div>
			<div
				style={{
					borderBottom: category === 'global' && '2px solid #585454',
				}}
				onClick={() => {
					router.push('/feed/global/1');
					setCategory('global');
				}}
			>
				세계(ENG)
			</div>
		</div>
	);
};

export default Navbar;
