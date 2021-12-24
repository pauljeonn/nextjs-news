import React from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
	const router = useRouter();

	return (
		<div className={styles.main}>
			<div onClick={() => router.push('/')}>홈</div>
			<div onClick={() => router.push('/feed/all/1')}>종합</div>
			<div onClick={() => router.push('/feed/business/1')}>경제</div>
			<div onClick={() => router.push('/feed/tech/1')}>IT</div>
			<div onClick={() => router.push('/feed/science/1')}>과학</div>
			<div onClick={() => router.push('/feed/sports/1')}>스포츠</div>
			<div onClick={() => router.push('/feed/entertainment/1')}>연예</div>
			<div onClick={() => router.push('/feed/global/1')}>세계(ENG)</div>
		</div>
	);
};

export default Navbar;
