// app/music/page.tsx
"use client";
import styles from "./Video.module.css";
import { Header, Footer, TikTokEmbedComponent } from "../components"; // Import the existing Header component
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";

export default function VideoPage() {
	return (
		<>
			<Header />
			<div className={styles.titleContainer}>
				<div className={styles.titleContainer}>
					<h1 className={styles.pageTitle}>Tiktok</h1>
				</div>
			</div>
			<>
				<TikTokEmbedComponent />
				<Swiper
					scrollbar={{
						hide: true,
					}}
					modules={[Scrollbar]}
					className="mySwiper"
				>
					<SwiperSlide>1</SwiperSlide>
					<SwiperSlide>2</SwiperSlide>
					<SwiperSlide>3</SwiperSlide>
					<SwiperSlide>4</SwiperSlide>
					<SwiperSlide>5</SwiperSlide>
					<SwiperSlide>6</SwiperSlide>
				</Swiper>
			</>
			{/* <blockquote
				className="tiktok-embed"
				cite="https://www.tiktok.com/@maxdirado/video/7331900371213897002"
				data-video-id="7331900371213897002"
				style={{ width: "605px", minWidth: "325px" }}
			>
				{" "}
				<section>
					{" "}
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
					</a>{" "}
				</section>{" "}
			</blockquote>{" "} */}
			<Footer />
		</>
	);
}
