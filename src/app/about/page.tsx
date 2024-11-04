// app/music/page.tsx
import styles from "./About.module.css";
import { Header, Footer } from "../components"; // Import the existing Header component
import Image from "next/image";

export default function MusicPage() {
	return (
		<>
			<Header />
			<div className={styles.titleContainer}>
				<div className={styles.titleContainer}>
					<h1 className={styles.pageTitle}>about</h1>
				</div>
			</div>
			<div className={styles.pageContainer}>
				<div className={styles.aboutContainer}>
					Max DiRado is a Los Angeles based indie folk artist whose gentle
					vocals, poetic lyrics, and delicate nylon guitar playing evoke a sense
					of intimacy and introspection. Influenced by artists such as Big
					Thief, Mitski, and Father John Misty, DiRado crafts deeply sincere
					prose that resonates with his audience. His recent online success with
					&quot;America (The Song)&quot; and &quot;My Love is a Painter&quot;
					has audiences already calling him a once-in-a-generation artist prior
					to their official upcoming release. America&apos;s 8 minute runtime
					astounded labels for being able to go viral in its full length online.
					In 2 months he accrued 20k followers online and his monthly listeners
					has remained above 10k for over 4 months after being only a mere 100
					at the start of 2024. His songs highlight his ability to capture the
					zeitgeist and speak to an audience with grace and sincerity. With each
					release, DiRado continues to enchant listeners with his soul-stirring
					melodies and provocative storytelling, forging connections that
					transcend boundaries and unite us in our shared humanity.
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
		</>
	);
}
