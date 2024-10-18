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
					<h3>about</h3>
				</div>
				<p>
					Max DiRado is a Los Angeles based indie folk artist whose gentle
					vocals, poetic lyrics, and delicate playing evoke a sense of intimacy
					and introspection.
				</p>
				<Link href="/about">
					<button>more</button>
				</Link>
			</div>
			<div className="feature-card">
				<div className="title">
					<AiOutlineInfoCircle color="black" size="25" />
					<h3>music</h3>
				</div>
				<p>
					Listen to past releases in preparation for Max DiRado’s debut album{" "}
					<b>&quot;Rock Bottomless Mimosas,&quot;</b> set to drop at the start
					of 2025.{" "}
				</p>
				<Link href="/music">
					<button>listen</button>
				</Link>
			</div>
			<div className="feature-card">
				<div className="title">
					<AiOutlineInfoCircle color="black" size="25" />
					<h3>video</h3>
				</div>
				<p>
					Keep up with Max DiRado&apos;s feed, from candid TikToks to live
					YouTube performances and visualizers.
				</p>
				<Link href="/video">
					<button>watch</button>
				</Link>
			</div>
			<style jsx>{`
				.features {
					display: flex;
					justify-content: space-around;
					background-color: #f1d95f;
					padding: 40px 20px;
				}
				.feature-card {
					border-radius: 4px;
					background-color: #d95741;
					color: white;
					padding: 10px;
					width: 30%;
					text-align: left;
				}
				.title {
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
