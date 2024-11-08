// components/MenuToggle.jsx
"use client"; // Marks this as a client component

import { useState } from "react";
import Link from "next/link";
import styles from "./Header.module.css";

export default function MenuToggle() {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<>
			<div
				className={`${styles.hamburger} ${isOpen ? styles.open : ""}`}
				onClick={toggleMenu}
			>
				<div className={styles.line}></div>
				<div className={styles.line}></div>
				<div className={styles.line}></div>
			</div>
			<div className={`${styles.overlay} ${isOpen ? styles.visible : ""}`}>
				<nav className={styles.overlayNav}>
					<ul className={styles.navLinks}>
						<li>
							<Link href="/" onClick={toggleMenu}>
								home
							</Link>
						</li>
						<li>
							<Link href="/about" onClick={toggleMenu}>
								about
							</Link>
						</li>
						<li>
							<Link href="/music" onClick={toggleMenu}>
								music
							</Link>
						</li>
						<li>
							<a
								href="https://www.tiktok.com/@maxdirado"
								target="_blank"
								rel="noopener noreferrer"
								onClick={toggleMenu}
							>
								video
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</>
	);
}
