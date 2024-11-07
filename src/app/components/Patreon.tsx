// components/Patreon.tsx
"use client";

import Link from "next/link";

export function Patreon() {
	return (
		<section className="patreon">
			<h3 className="keepup">subscribe to my patreon</h3>
			<h4 className="join">
				{`and gain access to early and exclusive releases, \n 
                stems, poetry collections and more!`}
			</h4>
			<Link
				target="_blank"
				href="https://www.patreon.com/maxdirado"
				rel="noopener noreferrer"
			>
				<button className="presave-button">patreon</button>
			</Link>
			<style jsx>{`
				.patreon {
					background-color: #7ff760;
					padding: 40px 20px;
					text-align: center;
					size: 200;
					color: black;
				}
				.keepup {
					font-size: 29px;
					font-weight: 750;
					color: black;
				}
				.join {
					color: black;
					margin-bottom: 20px;
					font-size: 17px;
					font-weight: 500;
				}
				.presave-button {
					color: black;
					font-size: 15px;
					font-weight: 500;
					background-color: #f29048;
					border-radius: 4px;
					padding: 7px 20px;
					cursor: pointer;
				}
			`}</style>
		</section>
	);
}
