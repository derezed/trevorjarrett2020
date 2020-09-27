import React from "react";
import Layout from "../globals/Layout";
import SEO from "../globals/SEO";
import {
  FaDiceD20,
  FaPaintBrush,
  FaGamepad,
  FaBook,
} from "react-icons/fa";

export default () => (
  <Layout>
    <SEO title="Trevor Jarrett" />

    <div className="w-full heading relative">
      <h2 className="text-2xl inline mr-5 font-bold">Front-end dev with ~10 years experience.</h2>
    </div>
    <p>IUPUI School of Informatics graduate from from Indianapolis, Indiana. I enjoy building front-end experiences with cutting edge libraries.</p>
    <p>Currently writing code at <a href="https://trendyminds.com" target="_blank">TrendyMinds</a> for a wide range of big and small clients.</p>

    <div className="w-full heading relative mr-5 mt-8 mb-2">
      <h3 className="inline mr-5 font-bold">In my free time you can find me...</h3>
    </div>

    <ul className="grid grid-cols-1 desktop:grid-cols-2 gap-10">
      <li className="block">
        <h4 className="mb-0 items-center inline-flex">
          <FaDiceD20
            className="mr-2"
          />
          Playing board games
        </h4>
        <p>From Catan, to Scythe, to Warhammer 40,000, you can find my board game shelf packed with all types of board games: roll and move, worker placement, deck building, area controls, miniature wargaming, etc.</p>
      </li>
      <li className="block">
        <h4 className="mb-0 items-center inline-flex">
          <FaPaintBrush
            className="mr-2"
          />
          Painting Minatures
        </h4>
        <p>I've been paining for 2+ years. BattleTech, Kingdom Death, Warhammer 40,000, anything I find that looks fun, I'll paint. It's a nice creative outlet after being in front of a computer all day. Checkout my <a href="https://www.instagram.com/txrev1991/" target="_blank">Instagram</a> to view my work.</p>
      </li>
      <li className="block">
        <h4 className="mb-0 items-center inline-flex">
          <FaGamepad
            className="mr-2"
          />
          Playing video games
        </h4>
        <p>I'm a sucker for RPG's and MMO's. I enjoy other genres like strategy games, city builders, and adventure games. Currently flying planes in Microsoft Flight Simulator 2020 while eagerly waiting Cyberpunk 2077.</p>
      </li>
      <li className="block">
        <h4 className="mb-0 items-center inline-flex">
          <FaBook
            className="mr-2"
          />
          Reading
        </h4>
        <p>I'm a huge fan of science fiction. You will find works from Issac Asimov, Terry Pratchet, and Douglas Adams on my shelf. I also have a large collection of comic and graphic novels spanning Marvel, DC, and independant publishers.</p>
      </li>
    </ul>
  </Layout>
);
