import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "../comps/Footer";
import Navbar from "../comps/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <h2 className={styles.title}>Homepage</h2>
      <p className={styles.text}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi,
        fuga? Perspiciatis, fuga architecto voluptatibus asperiores sequi
        aspernatur expedita nihil illum inventore dolor itaque quidem quam!
        Nobis nesciunt sequi accusantium odit.
      </p>
      <p className={styles.text}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi,
        fuga? Perspiciatis, fuga architecto voluptatibus asperiores sequi
        aspernatur expedita nihil illum inventore dolor itaque quidem quam!
        Nobis nesciunt sequi accusantium odit.
      </p>
      <Link href="/ninjas">
        <a className={styles.btn}>See Ninja Listing</a>
      </Link>
    </div>
  );
}
