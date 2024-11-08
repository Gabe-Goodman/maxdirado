// components/Header.tsx
import Image from "next/image";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import styles from "./Header.module.css";

export function Header() {
	return (
		<header className={styles.header}>
			<a href="/">
				<Image
					width={300}
					height={300}
					src="/images/maxdiradologo.png"
					alt="Max Dirado"
					style={{
						maxWidth: "100%",
						height: "auto",
					}}
				/>
			</a>

			{/* Checkbox for toggling the menu */}
			<input type="checkbox" id="menuToggle" className={styles.menuToggle} />

			{/* Label for the checkbox to display the hamburger icon */}
			<label htmlFor="menuToggle" className={styles.hamburger}>
				<FaBars size={24} className={styles.openIcon} />
				<FaTimes size={24} className={styles.closeIcon} />
			</label>

			{/* Fullscreen overlay menu */}
			<div className={styles.overlay}>
				<nav className={styles.overlayNav}>
					<ul className={styles.navLinks}>
						<li>
							<Link href="/">home</Link>
						</li>
						<li>
							<Link href="/about">about</Link>
						</li>
						<li>
							<Link href="/music">music</Link>
						</li>
						<li>
							<label htmlFor="menuToggle">
								<a
									href="https://www.tiktok.com/@maxdirado"
									target="_blank"
									rel="noopener noreferrer"
								>
									video
								</a>
							</label>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
}
