// components/Newsletter.tsx
"use client";

export default function Newsletter() {
	return (
		<section className="newsletter">
			<h3>keep up with me!</h3>
			<form>
				<input type="email" placeholder="you@example.com" />
				<button type="submit">submit</button>
			</form>
			<style jsx>{`
				.newsletter {
					background-color: #5cb2e0;
					padding: 40px 20px;
					text-align: center;
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
