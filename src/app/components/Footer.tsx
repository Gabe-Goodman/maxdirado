// components/Footer.tsx
"use client";
import Link from "next/link";
import { FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa6";

export function Footer() {
	return (
		<footer className="footer">
			<div className="footer-content-left">
				<div className="social-icons">
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
				</div>
			</div>
			<div className="footer-content-right">
				<div className="footer-links">
					<h4>Links</h4>
					<ul>
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
				</div>
			</div>
			<div className="copyright">
				<p>
					Copyright Max DiRado.{" "}
					<a href="https://github.com/Gabe-Goodman?tab=repositories">
						Created by Gabe Goodman
					</a>
				</p>
			</div>
			<style jsx>{`
				.footer {
					padding: 20px;
					background-color: white;
					border-top: 1px solid #eaeaea;
				}
				.footer-content-left {
					display: flex;
					flex-direction: column;
					align-items: flex-end; /* Align everything to the left */
				}
				.footer-content-right {
					display: flex;
					flex-direction: column;
					align-items: flex-start; /* Align everything to the left */
				}
				.social-icons {
					color: black;
					display: flex;
					gap: 20px;
					margin-bottom: -30px; /* Add space between icons and links */
				}
				.footer-links {
					display: flex;
					flex-direction: column;
				}
				.footer-links h4 {
					margin-bottom: 10px;
					font-weight: bold;
					color: black;
				}
				.footer-links ul {
					list-style: none;
					padding: 0;
					margin: 0;
					color: black;
				}
				.footer-links li {
					margin-bottom: 8px;
				}
				.footer-links a {
					text-decoration: none;
					color: black;
					font-size: 16px;
				}
				.footer-links a:hover {
					text-decoration: underline;
				}
				.copyright {
					margin-top: 8px;
					color: #60676a;
					font-size: 12px;
				}
				.copyright a {
					text-decoration: underline;
				}
				p {
					align-items: center;
					text-align: center;
				}
			`}</style>
		</footer>
	);
}
