// components/PreSave.tsx
"use client";
import Link from "next/link";

export function PreSave() {
	return (
		<section className="presave">
			<div className="presave-container">
				<img src="/images/ssri.jpg" alt="SSRI" className="presave-image" />
				<div className="presave-text-container">
					<h2 className="presave-text">new song</h2>
					<h3 className="presave-track-name-text">&quot;SSRI&quot;</h3>
					<p className="presave-info-text">out October 25th</p>
					<div className="button-container">
						<Link href="https://ffm.to/k7axjdk" passHref>
							<button className="presave-button">pre-save</button>
						</Link>
					</div>
				</div>
			</div>
			<style jsx>{`
				.presave {
					background-color: #f29048;
					padding: 40px 10px;
				}
				.presave-container {
					display: flex;
					justify-content: center;
					align-items: center;
					max-width: 1200px;
					margin: 0 auto;
				}
				.button-container {
					text-align: center;
				}

				@media (min-width: 768px) {
					.presave-text-container {
						background-color: #f29048;
						border-radius: 12px;
						margin-left: -15vw;
						margin-top: -5vw;
						padding: 0px 50px;
					}
					.presave-image {
						max-width: 40vw;
						margin-right: 200px;
						margin-top: -10vw;
					}
					.presave-text {
						color: black;
						font-size: 40px;
						font-weight: 750;
						text-align: center;
					}
					.presave-track-name-text {
						color: white;
						text-align: center;
						margin: -15px;
						font-size: 80px;
						font-weight: 750;
					}
					.presave-info-text {
						color: black;
						text-align: center;
						margin: 2px;
						font-size: 25px;
						font-weight: 400;
					}
					.presave-button {
						margin-bottom: 20px;
						color: black;
						font-size: 30px;
						font-weight: 500;
						background-color: #7ff760;
						border-radius: 4px;
						padding: 14px 40px;
						cursor: pointer;
					}
				}
				@media (max-width: 767px) {
					.presave-text-container {
						position: relative;
						margin-top: -10vw;
					}
					.presave-image {
						max-width: 50vw;
						margin-right: 30px;
						margin-top: -100px;
					}
					.presave-text {
						color: black;
						font-size: 26px;
						font-weight: 750;
						text-align: center;
					}
					.presave-track-name-text {
						color: white;
						text-align: center;
						margin: -15px;
						font-size: 50px;
						font-weight: 750;
					}
					.presave-info-text {
						color: black;
						text-align: center;
						margin: 2px;
						font-size: 14px;
						font-weight: 400;
					}
					.presave-button {
						color: black;
						font-size: 15px;
						font-weight: 500;
						background-color: #7ff760;
						border-radius: 4px;
						padding: 7px 20px;
						cursor: pointer;
					}
				}
			`}</style>
		</section>
	);
}
