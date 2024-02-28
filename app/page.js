import Link from "next/link";
import classes from "./page.module.css";
import ImageSlideshow from "@/components/images/image-slideshow";

export default function Home() {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.slideshow}>
          <ImageSlideshow/>
        </div>
        <div>
          <div className={classes.hero}>
            <h1>NextLevel Food for NextLevel Foodies</h1>
            <p>Taste & Share food from all over the world</p>
          </div>
          <div className={classes.cta}>
            <Link href="/community">Join the Commnity</Link>
            <Link href="/meals">Explore Meals</Link>
          </div>
        </div>
      </header>
      <main></main>
    </>
  );
}
