// components/FeatureSection.tsx
"use client";

import Link from "next/link";
import { AiOutlineInfoCircle } from "react-icons/ai";

export function FeatureSection() {
	return (
		<section className="features">
			<div className="feature-card">
				<div className="title">
					<AiOutlineInfoCircle color="black" size="25" />
					<h3 className="feature-heading">about</h3>
				</div>
				<p>
					Read about Max DiRado, the Los Angeles based indie folk songwriter.
				</p>
				<Link href="/about">
					<button>more</button>
				</Link>
			</div>
			<div className="feature-card">
				<div className="title">
					<AiOutlineInfoCircle color="black" size="25" />
					<h3 className="feature-heading">music</h3>
				</div>
				<p>
					Listen to past releases in preparation for Max DiRado’s debut album{" "}
					<b>&quot;Rock Bottomless Mimosas,&quot;</b> set to drop at the start
					of 2025.{" "}
				</p>
				<Link href="/music">
					<button>more</button>
				</Link>
			</div>
			<div className="feature-card">
				<div className="title">
					<AiOutlineInfoCircle color="black" size="25" />
					<h3 className="feature-heading">video</h3>
				</div>
				<p>
					Keep up with Max DiRado&apos;s feed, from candid TikToks to live
					YouTube performances and visualizers.
				</p>
				<Link
					target="_blank"
					href="https://www.tiktok.com/@maxdirado"
					rel="noopener noreferrer"
				>
					<button>more</button>
				</Link>
			</div>
			<style jsx>{`
				.features {
					display: flex;
					justify-content: space-around;
					background-color: #f1d960;
					padding: 40px 20px;
				}
				.feature-card {
					border-radius: 4px;
					background-color: #da5742;
					color: white;
					padding: 10px;
					width: 30%;
					text-align: left;
				}
				.title {
					font-weight: bold;
					display: flex;
					align-items: center;
				}
				h3 {
					font-size: 20px;
					color: black;
					text-align: left;
					margin: 5px;
				}
				p {
					margin-left: 5px;
					font-size: 12px;
					text-align: left;
				}
				button {
					font-size: 15px;
					border-radius: 4px;
					background-color: #e3e3e3;
					border: 2px;
					border-color: #847175;
					color: black;
					padding: 5px 10px;
					cursor: pointer;
					margin-top: 10px;
				}
			`}</style>
		</section>
	);
}
