import React from "react";

export default function Footer() {
    return(
        <footer>
            <div className="container footer-container">
                <div className="flex flex-col gap-2">
                    <h3 className="text-xl font-bold">Pages</h3>
                    <p>Home</p>
                    <p>Product</p>
                    <p>Pricing</p>
                    <p>About</p>
                    <p>Contact</p>
                </div>
                <div className="flex flex-col gap-2">
                    <h3 className="text-xl font-bold">Tomothy </h3>
                    <p>Eleanor Edwards</p>
                    <p>Ted Robertson</p>
                    <p>Annette Russell</p>
                    <p>Jennie Mckinney</p>
                    <p>Gloria Richards</p>
                </div>
                <div className="flex flex-col gap-2">
                    <h3 className="text-xl font-bold">Jane Black</h3>
                    <p>Philip Jones</p>
                    <p>Product</p>
                    <p>Colleen Russell</p>
                    <p>Marvin Hawkins</p>
                    <p>Bruce Simmmons</p>
                </div>
                <div className="">
                    <div className=" footer-info ">
                        <a href="https://www.google.com/maps"><img src="./img/map white logo.svg" alt=""/></a>
                        <p>7480 Mockingbird Hill undefined </p>
                    </div>
                    <div className=" footer-info"><img src="./img/Mobile white logo.svg" alt=""/>
                        <p>(239) 555-0108</p>
                    </div>
                    <div className=" flex gap-3 justify-start items-center ">
                        <a href="https://twitter.com/home"><img src="./img/twitter white logo.svg" alt=""/></a>
                        <a href="https://www.facebook.com/"><img src="./img/Facebook white logo.svg" alt=""/></a>
                        <a href="https://www.linkedin.com/feed/"><img src="./img/linkedinwhitelogo.svg" alt=""/></a>
                    </div>
                </div>
            </div>
    </footer>
    )
}