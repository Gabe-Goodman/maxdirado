module.exports = {
	async headers() {
		return [
			{
				source: "/(.*)",
				headers: [
					{
						key: "Content-Security-Policy",
						value:
							"default-src 'self'; img-src 'self' https://*.tiktokcdn.com https://*.tiktokv.com;",
					},
				],
			},
		];
	},
};
