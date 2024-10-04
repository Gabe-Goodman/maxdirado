// components/PreSave.tsx
"use client";

export function PreSave() {
	return (
		<section className="presave">
			<div className="presave-container">
				<img
					src="/images/mourning-dove.jpg"
					alt="Mourning Dove"
					className="presave-image"
				/>
				<div>
					<h2 className="presave-text">Stream</h2>
					<h3 className="presave-track-name-text">"MOURNING DOVE"</h3>
					<p className="presave-info-text">Everywhere</p>
					<button className="presave-button">Listen</button>
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
				/* Media query for responsiveness */
				@media (min-width: 768px) {
					.presave-image {
						max-width: 55vw;
						margin-right: 200px;
						margin-top: -10vw;
					}
					.presave-text {
						color: black;
						font-size: 50px;
						font-weight: 750; /* Use the loaded 700 weight from Poppins */
						text-align: left;
					}
					.presave-track-name-text {
						color: white;
						text-align: left;
						font-size: 80px;
						font-weight: 750; /* Use the loaded 700 weight from Poppins */
					}
				}
				@media (max-width: 768px) {
					.presave-image {
						max-width: 55vw;
						margin-right: 20px;
						margin-top: -100px;
					}
				}
				.presave-button {
					background-color: #7eef5a;
					border-radius: 12px
					border: 2px;
					padding: 10px 20px;
					cursor: pointer;
				}
			`}</style>
		</section>
	);
}
