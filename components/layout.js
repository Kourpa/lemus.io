import styles from './layout.module.css'
import Head from 'next/head'

export default function Layout({ children, home }) {
	return (
		<div className={styles.container}>
			<main className={styles.content}>{children}</main>
		</div>
	)
}
