// components/Newsletter.tsx
"use client";

export function Newsletter() {
	return (
		<section className="newsletter">
			<h3 className="keepup">keep up with me!</h3>
			<h4 className="join">join my newsletter</h4>
			<form>
				<input type="email" placeholder="you@example.com" />
				<button type="submit">submit</button>
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
