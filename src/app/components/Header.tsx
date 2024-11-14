// components/Header.tsx
import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css";
import MenuToggle from "./MenuToggle"; // Import the client component
import { FaInstagram, FaTiktok, FaYoutube, FaPatreon } from "react-icons/fa6";

export function Header() {
	return (
		<header className={styles.header}>
			<Link href="/">
				<Image
					width={300}
					height={300}
					src="/images/maxdiradologo.png"
					alt="Max Dirado"
					style={{ maxWidth: "100%", width: "auto", height: "auto" }}
				/>
			</Link>
			{/* Wrapper for Social Icons and Hamburger */}
			<div className={styles.iconContainer}>
				<div className={styles.socialIconsDesktop}>
					<Link
						href="https://www.instagram.com/diradomax/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FaInstagram />
					</Link>
					<Link
						href="https://www.tiktok.com/@maxdirado"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FaTiktok />
					</Link>
					<Link
						href="https://www.youtube.com/@maxdirado"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FaYoutube />
					</Link>
					<Link
						href="https://www.patreon.com/maxdirado"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FaPatreon />
					</Link>
				</div>
				<MenuToggle />
			</div>
		</header>
	);
}
