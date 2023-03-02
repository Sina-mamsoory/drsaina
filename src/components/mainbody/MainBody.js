import { Container } from "@mui/material";
import React from "react";
import SearchSection from "./shared/SearchSection";

const MainBody = () => {
    return(
        <Container maxWidth='lg'>
            <div>
                <SearchSection />
            </div>
        </Container>
       
    )
}

export default MainBody;