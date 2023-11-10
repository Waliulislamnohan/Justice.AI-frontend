import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Justice.Ai</title>
				<meta
					name=" An ai assistante for your legal advice "
					content="An ai platform for your legal advice"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			
			<h1>Justice.AI</h1>
			
			<div className={styles.box}>
				<div className={styles.history}>
					<div className={styles.historyBox}></div>
					<div className={styles.historyBox}></div>
					<div className={styles.historyBox}></div>
					<div className={styles.historyBox}></div>
					<div className={styles.historyBox}></div>
					<div className={styles.historyBox}></div>
					<div className={styles.historyBox}></div>
					<div className={styles.historyBox}></div>
					<div className={styles.historyBox}></div>
				</div>

				<div className={styles.chatbox}>
					<div>
					<input className={styles.chat} type="text" placeholder='Share your problem' />
					</div>
					<div className={styles.chatSpace}> 
							<div></div>
					</div>
				</div>

			</div>
			

		</div>
	)
}
