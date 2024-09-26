import Image from "next/image";
import { Box, Paper, styled, Typography } from "@mui/material";

import CarCheckIcon from "../../../../public/servicesicons/CarCheck.svg";
import ClipBoardPlusIcon from "../../../../public/servicesicons/ClipBoardPlus.svg";
import MapIcon from "../../../../public/servicesicons/Map.svg";
import UnionIcon from "../../../../public/servicesicons/Union.svg";

export default function CarService() {
  const servicesData = [
    {
      img: MapIcon,
      title: "Anywhere Auto-Care",
      description:
        "We bring the latest steam cleaning technology to your location, ensuring your vehicles are professionally cleaned and ready to go!",
    },
    {
      img: UnionIcon,
      title: "FleetCare Pro",
      description:
        "Tailored cleaning solutions for businesses with multiple vehicles. We ensure your fleet stays spotless and road-ready.",
    },
    {
      img: ClipBoardPlusIcon,
      title: "Subscriptions",
      description: "Hassle-free car care with regular service packages. Enjoy consistent maintenance at discounted rates.",
    },
    {
      img: CarCheckIcon,
      title: "Long term Vehicle Care",
      description:
        "Long-term vehicle maintenance plans to ensure your car remains in peak condition with additional care options.",
    },
  ];

  const CarServicesContainer = styled(Box)(({ theme }) => ({
    margin: "7.8rem auto 17.5rem",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    gap: "1rem",
    width: "100%",
  }));

  return (
    <CarServicesContainer>
      {servicesData.map(({ img, title, description }, index) => (
        <CarServiceItem key={index} icon={img} title={title} description={description} />
      ))}
    </CarServicesContainer>
  );
}

const ServiceItemContainer = styled(Paper)(({ theme }) => ({
  width: "350px",
  minHeight: "325px",
  maxHeight: "330px",
  textAlign: "center",
  borderRadius: "1rem",
  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
  border: "0.5px solid #FFFFFF inset",
  backgroundColor: theme.palette.mode === "dark" ? "#85858520" : "#fff",
  filter: theme.palette.mode === "dark" ? "blur(14.4)" : "none",
}));

const ServiceItemBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  margin: "3.5rem 1.8rem",
}));

const ServiceItemIconContainer = styled(Box)(({ theme }) => ({
  width: "10.64rem",
  height: "10.64rem",
  backgroundColor: theme.palette.mode === "dark" ? "transparent" : "#2E75E8",
  borderRadius: "50%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginBottom: "1.7rem",
}));

const ServiceItemIcon = styled(Image)(({ theme }) => ({
  filter:
    theme.palette.mode === "dark"
      ? "invert(41%) sepia(100%) saturate(493%) hue-rotate(170deg) brightness(92%) contrast(96%)"
      : "invert(0)",
}));

const ServiceItemHeading = styled(Typography)(({ theme }) => ({
  fontSize: "1.8rem",
  marginBottom: "1rem",
  color: theme.palette.mode === "dark" ? "#fff" : "#232E4A",
}));

const ServiceItemDescription = styled(Typography)(({ theme }) => ({
  fontSize: "1.4rem",
  fontWeight: "300",
  color: theme.palette.mode === "dark" ? "#C2C2C2" : "#535353",
}));

const CarServiceItem = ({ icon, title, description }) => {
  return (
    <ServiceItemContainer>
      <ServiceItemBox>
        <ServiceItemIconContainer>
          <ServiceItemIcon src={icon} alt={title} width={50} height={50} />
        </ServiceItemIconContainer>

        <ServiceItemHeading variant={"h4"}>{title}</ServiceItemHeading>

        <ServiceItemDescription variant={"p"}>{description}</ServiceItemDescription>
      </ServiceItemBox>
    </ServiceItemContainer>
  );
};
