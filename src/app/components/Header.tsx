// components/Header.jsx
import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css";
import MenuToggle from "./MenuToggle"; // Import the client component

export function Header() {
	return (
		<header className={styles.header}>
			<Link href="/">
				<Image
					width={300}
					height={300}
					src="/images/maxdiradologo.png"
					alt="Max Dirado"
					style={{ maxWidth: "100%", height: "auto" }}
				/>
			</Link>
			<MenuToggle /> {/* Include the client component here */}
		</header>
	);
}
