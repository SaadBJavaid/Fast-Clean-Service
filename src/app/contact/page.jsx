import React from "react";
import ContactMain from "./ContactMain";
import {HomePkgBox, HomePkgsInBox} from "../../components/mui/HomePkgs";
import Questions from "../../components/FAQ/Questions";
import RadialCircle from "../../components/Decorative/RadialCircle";
import { DecorativeBackgroundImage } from "../../components/Decorative/ItemBoxes";

export default function Page() {
    return (
        <>
            <HomePkgBox
                sx={{
                    paddingTop: "12rem",
                    '@media (max-width: 600px)': {
                        paddingTop: "6rem",
                    },
                }}
            >
                <ContactMain />
                <RadialCircle bottom={"-90rem"} right={"0"} />
                <DecorativeBackgroundImage top={"25rem"} right={"0"} width="90rem" height="50rem" />
                <HomePkgsInBox sx={{ margin: "0 auto", padding: "2rem 3rem" }}>
                    <Questions />
                </HomePkgsInBox>
            </HomePkgBox>
        </>
    );
}
