import React from "react";
import Spain from "../assets/img/spain-1.jpeg";
import Riyadh from "../assets/img/riyadh.jpg";
import Italy from "../assets/img/italy.jpg";
import Maldives2 from "../assets/img/maldives-2.jpeg";
import Bali from "../assets/img/bali.jpg";
import Cappa from "../assets/img/cappadocia.jpeg";
import SelectCard from "./SelectCard";
const Gallery = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 text-center">
      <h1>Top Picks</h1>
      <div className="max-w-[1240px] mx-auto px-4 py-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <SelectCard bg={Spain} text="Spain" />
      <SelectCard bg={Riyadh} text="Riyadh" />
      <SelectCard bg={Italy} text="Italy" />
      <SelectCard bg={Maldives2} text="Maldives" />
      <SelectCard bg={Bali} text="Bali" />
      <SelectCard bg={Cappa} text="Cappadocia" />
    </div>
    </div>
  );
};

export default Gallery;
