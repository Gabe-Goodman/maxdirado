// app/music/page.tsx
import styles from "./About.module.css";
import { Header, Footer } from "../components"; // Import the existing Header component
import Image from "next/image";

export default function MusicPage() {
	return (
		<div className="main-content">
			<Header />
			<h1 className={styles.pageTitle}>about</h1>
			<div className={styles.pageContainer}>
				<div className={styles.aboutContainer}>
					&nbsp;&nbsp;&nbsp;Max DiRado&apos;s music is, at its core, radically
					and daringly honest. His writing is akin to a diary entry or the
					transcript of a therapy session. He writes about road rage, child
					stars, hating (and loving) the people closest to him, his experience
					with depression medication, death, mortality, oblivion, legacy, lust,
					desire, nihilism, and joy. His lyrics are painfully vulnerable and
					glaringly real. He tells you who he is, what he thinks, how he acts
					and how you should perceive him. Max DiRado, the artist, exists in two
					realms: the human vs. the unimpeachable storyteller. These versions of
					himself are often at odds, yet together they create an electric and
					imperfect portrait of an artist navigating the contradictions of life.
					With each release, he invites listeners into his world—one that speaks
					to the heart while embracing the beautiful messiness of being human.
					<br />
					&nbsp;&nbsp;&nbsp;The music has been influenced by Rock and Americana
					artists like Father John Misty, Big Thief, Mitski, and Leonard Cohen.
					But the melodic hooks resonate with a wide audience, with recent songs
					like &quot;America (The Song)&quot; and &quot;My Love is a
					Painter&quot; quickly gaining traction online, cementing his place as
					an artist of rare sincerity. America&apos;s surprising 8-minute
					runtime went viral, and within two months, DiRado saw a rapid rise in
					his following, amassing 20k followers and maintaining over 15k monthly
					listeners—remarkable growth for an artist who began 2024 with fewer
					than 100. His songs transcend genre, capturing the zeitgeist and
					speaking with grace, vulnerability, and a bit of that electrifying
					unpredictability.
					<h1 className={styles.pageTitle2}>contact</h1>
					<div className={styles.contactContainer}>maxdiradomgmt@gmail.com</div>
					<h1 className={styles.pageTitle2}>socials</h1>
					<a
						target="_blank"
						href="https://www.instagram.com/diradomax/"
						rel="noopener noreferrer"
					>
						Instagram
					</a>
					<br />
					<a
						target="_blank"
						href="https://www.tiktok.com/@maxdirado"
						rel="noopener noreferrer"
					>
						TikTok
					</a>
					<br />
					<a
						target="_blank"
						href="https://www.youtube.com/@maxdirado"
						rel="noopener noreferrer"
					>
						YouTube
					</a>
					<br />
					<a
						target="_blank"
						href="https://www.patreon.com/maxdirado"
						rel="noopener noreferrer"
					>
						Patreon
					</a>
					<br />
				</div>
				<div className="relative item-detail">
					<Image
						src="/images/about.jpg"
						alt="Max DiRado"
						width={100}
						height={0}
						sizes="100vw"
						style={{
							width: "100%",
							height: "auto",
						}}
						priority
					/>
					<div className={styles.credit}>photo by Deanna Patelis</div>
				</div>
			</div>

			<Footer />
		</div>
	);
}
