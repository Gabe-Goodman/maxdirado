// components/FeatureSection.tsx
"use client";

export function FeatureSection() {
	return (
		<section className="features">
			<div className="feature-card">
				<h3>about</h3>
				<p>Info about Max and the music journey.</p>
				<button>read more</button>
			</div>
			<div className="feature-card">
				<h3>music</h3>
				<p>Discover the latest tracks and albums.</p>
				<button>listen</button>
			</div>
			<div className="feature-card">
				<h3>online comments</h3>
				<p>See what fans have to say about Max.</p>
				<button>read more</button>
			</div>
			<style jsx>{`
				.features {
					display: flex;
					justify-content: space-around;
					background-color: #f1d95f;
					padding: 40px 20px;
				}
				.feature-card {
					background-color: #d95741;
					color: white;
					padding: 20px;
					width: 30%;
					text-align: center;
				}
				button {
					background-color: white;
					border: none;
					color: black;
					padding: 10px 15px;
					cursor: pointer;
				}
			`}</style>
		</section>
	);
}
