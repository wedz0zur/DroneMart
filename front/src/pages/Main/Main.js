import React from "react";
import "./Main.css"
import Banner from "../../components/Banner/Banner";
import Popular_products from "../../components/Popular_products/Popular_products";
import News_block from "../../components/News_block/News_block"
import Promotions from "../../components/Promotions/Promotions";

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