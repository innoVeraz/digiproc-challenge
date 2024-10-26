"use server";

export const getProducts = async () => {
  return [
    {
      image: "/prodorg.svg",
      name: "Savings & Cost avoidance",
      price: 90000,
      rating: 4,
      color: "orange",
    },
    {
      image: "/prodblue.svg",
      name: "Code of Conduct",
      price: 90000,
      rating: 4,
      color: "blue",
    },
    {
      image: "/prodgreen.svg",
      name: "ESG measurement",
      price: 90000,
      rating: 4,
      color: "green",
    },
  ];
};
