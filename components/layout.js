import styles from './layout.module.css'
import Head from 'next/head'
import Parallax from './parallax'

export default function Layout({ children, home }) {
	return (
		<div className={styles.container}>
			<Parallax/>
			<main className={styles.content}>
				{children}
			</main>
		</div>
	)
}
