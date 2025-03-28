// components/Footer.tsx
import Link from "next/link";
import { FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa6";
import { BsSubstack } from "react-icons/bs";
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
						href="https://substack.com/@maxdirado"
						rel="noopener noreferrer"
					>
						<BsSubstack size={28} />
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
					<Link
						target="_blank"
						href="https://github.com/Gabe-Goodman?tab=repositories"
						rel="noopener noreferrer"
					>
						Created by Gabe Goodman
					</Link>
				</p>
			</div>
		</footer>
	);
}
