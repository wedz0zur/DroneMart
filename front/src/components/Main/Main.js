import React from "react";
import "./Main.css"
import Banner from "../Banner/Banner";
import Popular_products from "../Popular_products/Popular_products";

const Main = () => {
    return(
        <main>
            <Banner/>
            <Popular_products/>
        </main>
    )
}

export default Main