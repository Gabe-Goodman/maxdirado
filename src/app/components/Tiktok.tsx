// components/TikTokEmbedComponent.tsx
"use client";

// import { TikTokEmbed } from "react-social-media-embed";

import { useEffect } from "react";

export const TikTokEmbedComponent = () => {
	useEffect(() => {
		// Load the TikTok embed script
		const script = document.createElement("script");
		script.src = "https://www.tiktok.com/embed.js";
		script.async = true;
		document.body.appendChild(script);

		// Cleanup script from the DOM
		return () => {
			document.body.removeChild(script);
		};
	}, []);

	return (
		<blockquote
			className="tiktok-embed"
			cite="https://www.tiktok.com/@maxdirado/video/7331900371213897002"
			data-video-id="7331900371213897002"
			style={{ maxWidth: "605px", minWidth: "325px" }}
		>
			<section>
				<a
					target="_blank"
					title="@maxdirado"
					href="https://www.tiktok.com/@maxdirado?refer=embed"
				>
					@maxdirado
				</a>{" "}
				my love is a painter{" "}
				<a
					title="indiefolk"
					target="_blank"
					href="https://www.tiktok.com/tag/indiefolk?refer=embed"
				>
					#indiefolk
				</a>{" "}
				<a
					title="originalmusic"
					target="_blank"
					href="https://www.tiktok.com/tag/originalmusic?refer=embed"
				>
					#originalmusic
				</a>{" "}
				<a
					title="lyrics"
					target="_blank"
					href="https://www.tiktok.com/tag/lyrics?refer=embed"
				>
					#lyrics
				</a>{" "}
				<a
					title="ebow"
					target="_blank"
					href="https://www.tiktok.com/tag/ebow?refer=embed"
				>
					#ebow
				</a>{" "}
				<a
					title="blick"
					target="_blank"
					href="https://www.tiktok.com/tag/blick?refer=embed"
				>
					#blick
				</a>{" "}
				<a
					title="artist"
					target="_blank"
					href="https://www.tiktok.com/tag/artist?refer=embed"
				>
					#artist
				</a>{" "}
				<a
					title="painter"
					target="_blank"
					href="https://www.tiktok.com/tag/painter?refer=embed"
				>
					#painter
				</a>{" "}
				<a
					title="love"
					target="_blank"
					href="https://www.tiktok.com/tag/love?refer=embed"
				>
					#love
				</a>{" "}
				<a
					title="fyp"
					target="_blank"
					href="https://www.tiktok.com/tag/fyp?refer=embed"
				>
					#fyp
				</a>{" "}
				<a
					target="_blank"
					title="♬ original sound - Max DiRado"
					href="https://www.tiktok.com/music/original-sound-7331900518387813163?refer=embed"
				>
					♬ original sound - Max DiRado
				</a>
				<style jsx>{`
					.tiktokEmbed {
						display: flex;
						justify-content: center;
						align-items: center;
						padding: 0;
						margin: 0;
						overflow: hidden;
					}

					.tiktokEmbed iframe {
						width: 100%;
						height: auto;
						display: block;
						border: none;
					}

					.tiktokEmbed section {
						margin: 0;
						padding: 0;
					}
					article,
					aside,
					details,
					figcaption,
					figure,
					footer,
					header,
					hgroup,
					menu,
					nav,
					section {
						display: block;
					}
					body {
						line-height: 1;
					}
					ol,
					ul {
						list-style: none;
					}
					blockquote,
					q {
						quotes: none;
					}
					blockquote:before,
					blockquote:after,
					q:before,
					q:after {
						content: "";
						content: none;
					}
					table {
						border-collapse: collapse;
						border-spacing: 0;
					}
				`}</style>
			</section>
		</blockquote>
	);
};
