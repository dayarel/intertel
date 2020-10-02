import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
const Brands = ({ count }) => {
  const [logos, setLogos] = useState([]);
  const brands = [
    {
      brand: "Sony",
      logo: "/static/img/brands/logo-sony.png",
    },
    {
      brand: "Belkin",
      logo: "/static/img/brands/logo-belkin.png",
    },
    {
      brand: "Samsung",
      logo: "/static/img/brands/logo-samsung.png",
    },
    {
      brand: "Incipio",
      logo: "/static/img/brands/logo-incipio.png",
    },
    {
      brand: "Blackberry",
      logo: "/static/img/brands/logo-blackberry.png",
    },
    {
      brand: "Mophie",
      logo: "/static/img/brands/logo-mophie.png",
    },
    {
      brand: "Tech21",
      logo: "/static/img/brands/logo-tech21.png",
    },
    {
      brand: "Otter Box",
      logo: "/static/img/brands/logo-otter.png",
    },
    {
      brand: "Nokia",
      logo: "/static/img/brands/logo-nokia.png",
    },
    {
      brand: "Apple",
      logo: "/static/img/brands/logo-apple.png",
    },

    {
      brand: "Urbanista",
      logo: "/static/img/brands/logo-urbanista.png",
    },
    {
      brand: "Griffin",
      logo: "/static/img/brands/logo-griffin.png",
    },

    {
      brand: "Life Proof",
      logo: "/static/img/brands/logo-lifeproof.png",
    },
    {
      brand: "Speck",
      logo: "/static/img/brands/logo-speck.png",
    },
    {
      brand: "HTC",
      logo: "/static/img/brands/logo-htc.png",
    },
    {
      brand: "UAG",
      logo: "/static/img/brands/logo-uag.png",
    },
  ];

  useEffect(() => {
    const selectLogos = () => {
      count === "full" ? setLogos(brands) : setLogos(brands.slice(0, count));
    };

    selectLogos();
  }, []);

  return (
    <BrandsGrid>
      {logos.map((brand) => (
        <Img key={brand.brand}>
          <img src={brand.logo} alt={brand.brand} />
        </Img>
      ))}
    </BrandsGrid>
  );
};

export default Brands;

// Styled Components

const BrandsGrid = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  margin-bottom: 75px;
`;

const Img = styled.div`
  flex-basis: 40%;
  max-width: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 75px;

  @media (min-width: 768px) {
    max-width: 33.33333333%;
  }
  @media (min-width: 992px) {
    max-width: 25%;
  }
  img {
    width: 100%;
    max-width: 132px;
    @media (min-width: 768px) {
      max-width: 153px;
    }
    @media (min-width: 1200px) {
      max-width: 186px;
    }
  }
`;
