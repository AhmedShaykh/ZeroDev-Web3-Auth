import React from "react";
import { Button } from "@/Components/button";

const Home = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <Button
                className="bg-white hover:bg-black text-black hover:text-white text-xl p-6 font-bold"
            >
                Connect Wallet
            </Button>
        </div>
    )
};

export default Home;