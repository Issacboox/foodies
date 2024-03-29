"use client";
/* eslint-disable jsx-a11y/alt-text */
import Link from "next/link";
import Image from "next/image";

import logoImg from "@/assets/logo.png";
import classes from "./main-header.module.css";
import MainHeaderBackground from "./main-header-background";
import { usePathname } from "next/navigation";
import NavLink from "./nav-link";

export default function MainHeader() {
  const path = usePathname();

  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link className={classes.logo} href="/">
          <Image src={logoImg} alt="A palte with food on it" priority />
          NextLevel Food
        </Link>

        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink href="/meals">Browse Meals</NavLink>
              {/* <Link
                href="/meals"
                className={
                  path.startWith('/meals') ? classes.active : undefined
                }
              >
                Browse Meals
              </Link> */}
            </li>
            <li>
              <NavLink href="/community">Foodies Commnity</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
