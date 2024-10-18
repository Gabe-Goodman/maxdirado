// app/music/page.tsx
import styles from "./Music.module.css";
import { Header, Footer, Album, BandcampAlbum } from "../components"; // Import the existing Header component

export default function MusicPage() {
	return (
		<>
			<Header />
			<div className={styles.titleContainer}>
				<div className={styles.titleContainer}>
					<h1 className={styles.pageTitle}>music</h1>
				</div>
			</div>
			<div className={styles.gridContainer}>
				<div className={styles.gridItem}>
					<Album
						imageSrc="/images/mourning-dove.jpg"
						alt="Mourning Dove"
						spotifyLink="https://open.spotify.com/album/41nYlo7rU71Azodw9SX2SV?si=eIKe4TXKQIeDuvxE_e963w"
						appleMusicLink="https://music.apple.com/us/album/mourning-dove-single/1763912009"
						bandcampLink="https://maxdirado.bandcamp.com/track/mourning-dove"
						albumTitle="Mourning Dove [2024]"
					/>
				</div>
				<div className={styles.gridItem}>
					<Album
						imageSrc="/images/my-love-heaventown.jpg"
						alt="Mourning Dove"
						spotifyLink="https://open.spotify.com/album/2bzUCLgqcAyN0j2eZU5DC6?si=swqpZUloQdWNwhddNrcI6A"
						appleMusicLink="https://music.apple.com/us/album/my-love-is-a-painter-heaventown-single/1732088896"
						bandcampLink="https://maxdirado.bandcamp.com/album/my-love-is-a-painter-heaventown"
						albumTitle="My Love is a Painter/Heaventown [2024]"
					/>
				</div>
				<div className={styles.gridItem}>
					<Album
						imageSrc="/images/america.jpg"
						alt="America (The Song)"
						spotifyLink="https://open.spotify.com/album/2nrHvDF4wQ0950kXo6eqdz?si=RibDH9N9RUCXHFh1QUn20A"
						appleMusicLink="https://music.apple.com/us/album/america-the-song-single/1743855505"
						bandcampLink="https://maxdirado.bandcamp.com/track/america-the-song"
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
						alt="Christmas EP"
						spotifyLink="https://open.spotify.com/album/2456iXq86v8SD4qKSZTJl1?si=Z5_WuYBnR9-i-0qFB4Edcw"
						appleMusicLink="https://music.apple.com/us/album/christmas-ep/1711675806"
						bandcampLink="https://maxdirado.bandcamp.com/album/christmas-ep"
						albumTitle="Christmas EP [2023]"
					/>
				</div>
				<div className={styles.gridItem}>
					<BandcampAlbum
						imageSrc="/images/el-dirado.jpg"
						alt="El DiRado"
						bandcampLink="https://maxdirado.bandcamp.com/album/el-dirado"
						albumTitle="el dirado [2023]"
					/>
				</div>
			</div>
			<Footer />
		</>
	);
}
