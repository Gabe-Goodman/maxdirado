"use client"; // Ensure this is marked as a Client Component
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa"; // Install react-icons if you haven't: npm install react-icons

export function Header() {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<header className="header">
			<Link href="/">
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
			</Link>
			<nav>
				{/* Full nav links for desktop view */}
				<ul className={`nav-links ${isOpen ? "nav-active" : ""}`}>
					<li>
						<Link href="/music">Music</Link>
					</li>
					<li>
						<Link href="/video">Video</Link>
					</li>
					<li>
						<Link href="/blog">Blog</Link>
					</li>
					{/* <li>
						<Link href="/tour">Tour</Link>
					</li>
					<li>
						<Link href="/merch">Merch</Link>
					</li>
					<li>
						<Link href="/contact">Contact</Link>
					</li> */}
				</ul>
				{/* Hamburger menu for mobile view */}
				<div className="hamburger" onClick={toggleMenu}>
					{isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
				</div>

				{/* Dropdown for mobile menu */}
				{isOpen && (
					<ul className="mobile-nav">
						<li>
							<Link href="/about" onClick={toggleMenu}>
								About
							</Link>
						</li>
						<li>
							<Link href="/music" onClick={toggleMenu}>
								Music
							</Link>
						</li>
						<li>
							<Link href="/video" onClick={toggleMenu}>
								Video
							</Link>
						</li>

						{/* <li>
							<Link href="/tour" onClick={toggleMenu}>
								Tour
							</Link>
						</li>
						<li>
							<Link href="/merch" onClick={toggleMenu}>
								Merch
							</Link>
						</li>
						<li>
							<Link href="/contact" onClick={toggleMenu}>
								Contact
							</Link>
						</li> */}
					</ul>
				)}
			</nav>
			<style jsx>{`
				.header {
					display: flex;
					justify-content: space-between;
					align-items: center;
					padding: 20px;
					background-color: white;
					box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
					z-index: 3;
					color: black;
				}
				.nav-links {
					list-style: none;
					display: flex;
					gap: 20px;
				}
				.nav-links a {
					text-decoration: none;
					color: black;
					font-weight: bold;
					transition: color 0.3s ease;
				}
				.nav-links a:hover {
					color: purple;
				}

				/* Hamburger menu styles */
				.hamburger {
					display: none;
					cursor: pointer;
				}

				.mobile-nav {
					list-style: none;
					position: absolute;
					top: 60px;
					right: 20px;
					background-color: white;
					width: 200px;
					border-radius: 8px;
					box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
					padding: 10px;
					animation: fadeIn 0.3s ease;
					z-index: 3;
					color: black;
				}

				.mobile-nav li {
					margin: 10px 0;
				}

				.mobile-nav a {
					color: black;
					text-decoration: none;
					font-weight: bold;
					display: block;
					padding: 10px;
					transition: color 0.3s ease;
				}

				.mobile-nav a:hover {
					color: purple;
				}

				/* Animation for dropdown */
				@keyframes fadeIn {
					from {
						opacity: 0;
						transform: translateY(-10px);
					}
					to {
						opacity: 1;
						transform: translateY(0);
					}
				}

				/* Media query for responsiveness */
				@media (max-width: 768px) {
					.nav-links {
						display: none;
					}
					.hamburger {
						display: block;
					}
				}
			`}</style>
		</header>
	);
}
