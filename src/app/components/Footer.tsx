// components/Footer.tsx
"use client";

import Link from "next/link";
import {
	FaXTwitter,
	FaInstagram,
	FaYoutube,
	FaLinkedin,
} from "react-icons/fa6";

export function Footer() {
	return (
		<footer className="footer">
			<div className="footer-content">
				<div className="social-icons">
					<a href="https://twitter.com" aria-label="Twitter">
						<FaXTwitter size={28} />
					</a>
					<a href="https://instagram.com" aria-label="Instagram">
						<FaInstagram size={28} />
					</a>
					<a href="https://youtube.com" aria-label="YouTube">
						<FaYoutube size={28} />
					</a>
					<a href="https://linkedin.com" aria-label="LinkedIn">
						<FaLinkedin size={28} />
					</a>
				</div>
				<div className="footer-links">
					<h4>Links</h4>
					<ul>
						<li>
							<Link href="/music">Music</Link>
						</li>
						<li>
							<Link href="/video">Video</Link>
						</li>
						<li>
							<Link href="/about">About</Link>
						</li>
						<li>
							<Link href="/tour">Tour</Link>
						</li>
						<li>
							<Link href="/merch">Merch</Link>
						</li>
						<li>
							<Link href="/contact">Contact</Link>
						</li>
					</ul>
				</div>
			</div>

			<style jsx>{`
				.footer {
					padding: 20px;
					background-color: white;
					border-top: 1px solid #eaeaea;
				}

				.footer-content {
					display: flex;
					flex-direction: column;
					align-items: flex-start; /* Align everything to the left */
				}

				.social-icons {
					color: black;
					display: flex;
					gap: 20px;
					margin-bottom: 20px; /* Add space between icons and links */
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
			`}</style>
		</footer>
	);
}
