// components/TikTokEmbedComponent.tsx
"use client";

import { TikTokEmbed } from "react-social-media-embed";

type TiktokProps = {
	link: string;
};

export function Tiktok({ link }: TiktokProps) {
	return (
		<div className="tiktok-container">
			<TikTokEmbed
				url={link}
				width={325} // Optional: specify width
			/>
			<style jsx>{`
				.tiktok-container {
					text-align: center;
					background-color: #78f3ab;
					margin: 20px;
				}
			`}</style>
		</div>
	);
}
