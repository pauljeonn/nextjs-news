import React from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
	const router = useRouter();

	return (
		<div className={styles.main}>
			<div onClick={() => router.push('/')}>홈</div>
			<div onClick={() => router.push('/feed/1')}>종합</div>
			<div onClick={() => router.push('/business/1')}>경제</div>
			<div onClick={() => router.push('/tech/1')}>IT</div>
			<div onClick={() => router.push('/science/1')}>과학</div>
			<div onClick={() => router.push('/sports/1')}>스포츠</div>
			<div onClick={() => router.push('/entertainment/1')}>연예</div>
			<div onClick={() => router.push('/english/1')}>해외(영문)</div>
		</div>
	);
};

export default Navbar;
