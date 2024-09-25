import React from "react";
import ContactMain from "./ContactMain";
import {HomePkgBox, HomePkgsInBox} from "../../components/mui/HomePkgs";
import Questions from "../../components/FAQ/Questions";

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
                <HomePkgsInBox sx={{ margin: "0 auto", padding: "2rem 3rem" }}>
                    <Questions />
                </HomePkgsInBox>
            </HomePkgBox>
        </>
    );
}
