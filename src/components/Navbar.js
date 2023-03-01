import { Container } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Categories from "./shared/Categories";

const Navbar = () => {
    return (
        <Container maxWidth='lg'>
            <div>
                <ul>
                    <li>
                        <Link>
                            مشاوره پزشکی
                            <i class="bi bi-caret-down"></i>
                        </Link>
                        <Categories />
                    </li>
                </ul>
            </div>
        </Container>
    )
}

export default Navbar;