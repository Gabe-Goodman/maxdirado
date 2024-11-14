// components/Footer.tsx
import Link from "next/link";
import { FaInstagram, FaTiktok, FaYoutube, FaPatreon } from "react-icons/fa6";
import styles from "./Footer.module.css";

export function Footer() {
	return (
		<footer className={styles.footer}>
			<div className={styles.footerContentLeft}>
				<div className={styles.socialIcons}>
					<Link
						target="_blank"
						href="https://www.instagram.com/diradomax/"
						rel="noopener noreferrer"
					>
						<FaInstagram size={28} />
					</Link>
					<Link
						target="_blank"
						href="https://www.tiktok.com/@maxdirado"
						rel="noopener noreferrer"
					>
						<FaTiktok size={28} />
					</Link>
					<Link
						target="_blank"
						href="https://www.youtube.com/@maxdirado"
						rel="noopener noreferrer"
					>
						<FaYoutube size={28} />
					</Link>
					<Link
						target="_blank"
						href="https://www.patreon.com/maxdirado"
						rel="noopener noreferrer"
					>
						<FaPatreon size={28} />
					</Link>
				</div>
			</div>
			<div className={styles.footerContentRight}>
				<div className={styles.footerLinks}>
					<ul>
						<li>
							<Link href="/">Home</Link>
						</li>
						<li>
							<Link href="/about">About</Link>
						</li>
						<li>
							<Link href="/music">Music</Link>
						</li>
						<li>
							<Link
								target="_blank"
								href="https://www.tiktok.com/@maxdirado"
								rel="noopener noreferrer"
							>
								Video
							</Link>
						</li>
					</ul>
				</div>
			</div>
			<div className={styles.copyright}>
				<p>
					Copyright Max DiRado.{" "}
					<a href="https://github.com/Gabe-Goodman?tab=repositories">
						Created by Gabe Goodman
					</a>
				</p>
			</div>
		</footer>
	);
}
