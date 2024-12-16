import React from "react";
import CardLayout from "./CardLayout";

const cards = [
  {
    id: 1,
    image:
      "https://mysticstudios.in/wp-content/uploads/2024/07/coimbatore-malayali-wedding-photography-globus-centre-cocktail-mehendi-haldi-00001.jpg",
    title:
      "CAPTURING ROMANCE: POST-WEDDING PHOTOSHOOT AT KALDAN SAMUDHRA PALACE, CHENNAI",
  },
  {
    id: 2,
    image:
      "https://mysticstudios.in/wp-content/uploads/2024/07/coimbatore-malayali-wedding-photography-globus-centre-cocktail-mehendi-haldi-00007.jpg",
    title:
      "A VIBRANT CELEBRATION OF LOVE: MALAVIKA AND SANJAY'S COLORFUL COIMBATORE WEDDING",
  },
  {
    id: 3,
    image:
      "https://mysticstudios.in/wp-content/uploads/2024/07/coimbatore-malayali-wedding-photography-globus-centre-cocktail-mehendi-haldi-00001.jpg",
    title: "A LOVE-FILLED INTIMATE WEDDING AT TAMARIND TREE BANGALORE",
  },
  {
    id: 4,
    image:
      "https://mysticstudios.in/wp-content/uploads/2024/07/coimbatore-malayali-wedding-photography-globus-centre-cocktail-mehendi-haldi-00007.jpg",
    title: "CAPTURING THE BEAUTY OF A FALL WEDDING",
  },
];

function Postwedding() {
  return (
    <div className="t">
      <CardLayout cards={cards} />
    </div>
  );
}

export default Postwedding;

 