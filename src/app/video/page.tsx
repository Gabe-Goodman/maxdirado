// app/music/page.tsx
"use client";
import styles from "./Video.module.css";
import { Header, Footer, Album, BandcampAlbum, Tiktok } from "../components"; // Import the existing Header component
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";

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
				<Swiper
					scrollbar={{
						hide: true,
					}}
					modules={[Scrollbar]}
					className="mySwiper"
				>
					<SwiperSlide>
						<Tiktok link="https://www.tiktok.com/@maxdirado/video/7331900371213897002" />
					</SwiperSlide>
					<SwiperSlide>
						<Tiktok link="https://www.tiktok.com/@maxdirado/video/7331900371213897002" />
					</SwiperSlide>
					<SwiperSlide>
						<Tiktok link="https://www.tiktok.com/@maxdirado/video/7331900371213897002" />
					</SwiperSlide>
					<SwiperSlide>
						<Tiktok link="https://www.tiktok.com/@maxdirado/video/7331900371213897002" />
					</SwiperSlide>
					<SwiperSlide>
						<Tiktok link="https://www.tiktok.com/@maxdirado/video/7331900371213897002" />
					</SwiperSlide>
					<SwiperSlide>
						<Tiktok link="https://www.tiktok.com/@maxdirado/video/7331900371213897002" />
					</SwiperSlide>
				</Swiper>
			</>
			<div className={styles.gridContainer}>
				<div className={styles.gridItem}>
					<Album
						imageSrc="/images/mourning-dove.jpg"
						alt="Mourning Dove"
						spotifyLink="https://spotify.com"
						appleMusicLink="https://music.apple.com"
						bandcampLink=""
						albumTitle="Mourning Dove [2024]"
					/>
				</div>
				<div className={styles.gridItem}>
					<Album
						imageSrc="/images/my-love-heaventown.jpg"
						alt="Mourning Dove"
						spotifyLink="https://spotify.com"
						appleMusicLink="https://music.apple.com"
						bandcampLink=""
						albumTitle="My Love is a Painter/Heaventown [2024]"
					/>
				</div>
				<div className={styles.gridItem}>
					<Album
						imageSrc="/images/america.jpg"
						alt="Mourning Dove"
						spotifyLink="https://spotify.com"
						appleMusicLink="https://music.apple.com"
						bandcampLink=""
						albumTitle="America (The Song) [2024]"
					/>
				</div>
				<div className={styles.gridItem}>
					<BandcampAlbum
						imageSrc="/images/humor-as-violence.jpg"
						alt="humor as violence"
						bandcampLink="https://maxdirado.bandcamp.com/track/humor-as-violence-demo"
						albumTitle="humor as violence [2024] (bandcamp exclusive)"
					/>
				</div>
				<div className={styles.gridItem}>
					<Album
						imageSrc="/images/christmas-ep.jpg"
						alt="Mourning Dove"
						spotifyLink="https://spotify.com"
						appleMusicLink="https://music.apple.com"
						bandcampLink=""
						albumTitle="Christmas EP [2023]"
					/>
				</div>
				<div className={styles.gridItem}>
					<Album
						imageSrc="/images/el-dirado.jpg"
						alt="Mourning Dove"
						spotifyLink="https://spotify.com"
						appleMusicLink="https://music.apple.com"
						bandcampLink=""
						albumTitle="el dirado [2023]"
					/>
				</div>
			</div>
			<Footer />
		</>
	);
}
