// components/PreSave.tsx
"use client";

export default function PreSave() {
	return (
		<section className="presave">
			<div className="presave-container">
				<img
					src="/images/mourning-dove.jpg"
					alt="Mourning Dove"
					className="presave-image"
				/>
				<div>
					<h2 className="presave-text">pre-save new song</h2>
					<h3 className="presave-track-text">MOURNING DOVE</h3>
					<p className="presave-info-text">out everywhere August 26th</p>
					<button className="presave-button">pre-save</button>
				</div>
			</div>
			<style jsx>{`
				.presave {
					background-color: #f29048;
					padding: 40px 20px;
				}
				.presave-container {
					display: flex;
					justify-content: center;
					align-items: center;
					max-width: 1200px;
					margin: 0 auto;
				}
				.presave-image {
					max-width: 55vw;
					margin-right: 20px;
					margin-top: -100px;
				}
				.presave-text {
					color: black;
					text-align: left;
				}
				.presave-track-text {
					color: white;
					text-align: left;
				}
				.presave-info-text {
					color: black;
					text-align: left;
				}
				.presave-button {
					background-color: #7bf15e;
					border: none;
					padding: 10px 20px;
					cursor: pointer;
				}
			`}</style>
		</section>
	);
}
