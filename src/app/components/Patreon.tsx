// components/Patreon.tsx
"use client";

export function Patreon() {
	return (
		<section className="newsletter">
			<h3 className="keepup">Subscribe to my Patreon</h3>
			<h4 className="join">
				{`and gain access to early and exclusive releases \n 
                stems, poetry collections and more!`}
			</h4>
			<form>
				<input type="email" placeholder="you@example.com" />
				<button type="submit">Patreon</button>
			</form>
			<style jsx>{`
				.newsletter {
					background-color: #85ff4a;
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
				input {
					padding: 10px;
					margin-right: 10px;
					border: none;
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
	);
}
