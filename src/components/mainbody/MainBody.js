import { Container } from "@mui/material";
import React from "react";
import Search from "./shared/Search";

const MainBody = () => {
    return(
        <Container maxWidth='lg'>
            <div>
                <Search />
            </div>
        </Container>
       
    )
}

export default MainBody;