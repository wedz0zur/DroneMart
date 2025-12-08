import React from "react";
import "./Main.css"
import Banner from "../Banner/Banner";
import Popular_products from "../Popular_products/Popular_products";
import News_block from "../News_block/News_block"
import Promotions from "../Promotions/Promotions";

const Main = () => {
    return(
        <main>
            <Banner/>
            <Popular_products/>
            <News_block/>
            <Promotions/>
        </main>
    )
}

export default Main