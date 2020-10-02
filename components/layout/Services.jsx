import React from "react";
import styled from "@emotion/styled";
import Service from "../layout/Service";
const Services = () => {
  const services = [
    {
      title: "Distribution",
      content:
        "We can provide a range of device accessories. From the latest releases to EOL offers.",
      icon: "/static/img/worldwide.svg",
    },
    {
      title: "Asset Management",
      content:
        "If you have inventory you would like to clear, we can help you. Get in touch with us today.",
      icon: "/static/img/gear.svg",
    },
    {
      title: "Support",
      content:
        "We will offer support before and after every order. We will give you the latest product information along with current market trends.",
      icon: "/static/img/technical.svg",
    },
    {
      title: "Fast Shipping",
      content:
        "We use a number of well-known shipping companies. Rest assured, orders will be processed and shipped in a timely manner",
      icon: "/static/img/time-management.svg",
    },
    {
      title: "Experience",
      content:
        "With over 10 years experience in the industry, we have a good knowledge of the market. From suppliers to customers, you can trust us to minimize your risk.",
      icon: "/static/img/prize.svg",
    },
    {
      title: "Fulfilment",
      content:
        "So that we can ensure your needs are met, we can complete order processing on your behalf. We can take care of the complete process from point of sales inquiry to delivery of a product to the customer.",
      icon: "/static/img/tick.svg",
    },
  ];
  return (
    <StylesWrapper>
      {services.map((service) => (
        <Service service={service} key={service.title} />
      ))}
    </StylesWrapper>
  );
};

export default Services;

// Styled Components

const StylesWrapper = styled.div`
  margin-top: 80px;
  @media (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 75px;
  }
  @media (min-width: 992px) {
    margin-top: 125px;
  }
`;
