import React from 'react'
import styles from './Header.module.sass'

const Header: React.FC = () => (
	<header className={styles.HeaderContainer}>
		<div>Track Day Tv</div>
		<div>Fast List Manager</div>
	</header>
)

export default Header