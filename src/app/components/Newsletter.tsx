// components/Newsletter.tsx
"use client";
import Image from "next/image";
import MediaQuery from "react-responsive";

export function Newsletter() {
	return (
		<div>
			<section className="newsletter">
				<h3 className="keepup">keep up with me!</h3>
				<h4 className="join">join my newsletter</h4>
				<form>
					<input type="email" placeholder="you@example.com" />
					<button type="submit" className="submit">
						submit
					</button>
				</form>
				<style jsx>{`
					.newsletter {
						background-color: #5cb2e0;
						padding: 40px 20px;
						text-align: center;
						size: 200;
						color: black;
					}
					.keepup {
						font-size: 20px;
						font-weight: 500;
						color: black;
					}
					.join {
						color: #60676a;
						margin-bottom: 20px;
						font-size: 17px;
						font-weight: 300;
					}
					.submit {
						padding: 7px 20px;
						border-radius: 4px;
					}
					input {
						padding: 10px;
						margin-right: 10px;
						border: none;
						border-radius: 4px;
					}
					button {
						padding: 10px;
						background-color: black;
						color: white;
						border: none;
						cursor: pointer;
					}
				`}</style>
			</section>
			<MediaQuery query="(max-device-width: 767px)">
				<Image
					src="/images/longform.jpg"
					alt="Max DiRado"
					width={100}
					height={0}
					sizes="100vw"
					style={{
						width: "100%",
						height: "auto",
					}}
				/>
			</MediaQuery>
			<MediaQuery query="(min-device-width: 768px)">
				<Image
					src="/images/shortform2.jpg"
					alt="Max DiRado"
					width={100}
					height={0}
					sizes="100vw"
					style={{
						width: "100%",
						height: "auto",
					}}
				/>
			</MediaQuery>
		</div>
	);
}
