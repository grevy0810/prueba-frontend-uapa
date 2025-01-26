import {React, useState} from "react";

export default function ContactUs() {
    const [formData, setFormData] = useState({
        fname: "",
        email: "",
        message: "",
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Lógica personalizada, como mostrar una confirmación o enviar los datos
        confirmInput("contact");
        return false;
      };
    
      const confirmInput = (formType) => {
        alert(`Form submitted: ${formType}`);
        console.log(formData); // Verifica los datos enviados
      };
    
    return(
        <section className="container contact" id="Contact">
        <h2 className="text-5xl">Contact Us</h2>
        <p>Most calendars are designed for teams. 
        Slate is designed for freelancers </p>
        <div className="hidden lg:flex w-full contact-desktop-section">
            <div className="contact-form w-1/2 max-w-[550px]">
                <h5 className="text-xl font-bold">Contact Us</h5>
                <form name="contactForm" autoComplete="on" onSubmit={handleSubmit}>
                    <input
                    type="text"
                    placeholder="Your Name"
                    name="fname"
                    value={formData.fname}
                    onChange={handleChange}
                    required
                    />
                    <input
                    type="email"
                    placeholder="Your Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    />
                    <textarea
                    placeholder="Your Message"
                    name="message"
                    cols="10"
                    rows="5"
                    minLength="20"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    ></textarea>
                    <input className="btn" type="submit" value="Send"></input>
                </form>
            </div>
            <div className=" flex flex-col items-center ">
                <div className=" hidden lg:flex lg:gap-6 text-[#374754] ">
                    <div className="info info-contact">
                        <a href="https://www.google.com/maps"><img src="./img/map logo.svg" alt=""/></a>
                        <p>6386 Spring St undefined Anchorage, 
                        Georgia 12473 United States</p>
                    </div>
                    <div className="info info-contact"><img src="./img/Mobile logo.svg" alt=""/>
                        <p>(843) 555-0130</p>
                    </div>
                    <div className="info info-contact"> <img src="./img/gmail logo.svg" alt=""/>
                        <p>willie.jennings@example.com</p>
                    </div>
                </div>
                <img className="max-w-[450px] xl:max-w-full" src="./img/map.png" alt="Map"/>
                <div className="w-full justifiy-left gap-4 flex mt-20">
                    <a href="https://twitter.com/home"><img src="./img/twitter logo.svg" alt=""/></a>
                    <a href="https://www.facebook.com/"><img src="./img/Facebook logo.svg" alt=""/></a>
                    <a href="https://www.linkedin.com/feed/"><img src="./img/linkedinlogo.svg" alt=""/></a>
                </div>

            </div>
        </div>
        <div className="mt-15 lg:hidden flex flex-col">
            <div className="w-full justify-center gap-5 flex  items-center mb-2">
                <a href="https://twitter.com/home"><img src="./img/twitter logo.svg" alt=""/></a>
                <a href="https://www.facebook.com/"><img src="./img/Facebook logo.svg" alt=""/></a>
                <a href="https://www.linkedin.com/feed/"><img src="./img/linkedinlogo.svg" alt=""/></a>
            </div>
            <br></br>
            <div className="flex flex-col text-left gap-5">

                <div className="flex flex-row gap-3 text-[#374754]">
                    <a  href="https://www.google.com/maps"><img className="min-w-[30px]"src="./img/map logo.svg" alt=""/></a>
                    <p>6386 Spring St undefined Anchorage, Georgia 12473 United States</p>
                </div>
                <div className=" flex flex-row gap-3 text-[#374754]"><img className="min-w-[30px]" src="./img/Mobile logo.svg" alt=""/>
                    <p>(843) 555-0130</p>
                </div>
                <div className=" flex flex-row gap-3  text-[#374754]"> <img className="min-w-[30px]" src="./img/gmail logo.svg" alt=""/>
                    <p>willie.jennings@example.com</p>
                </div>
            </div>
            <div className="contact-form">
                <h5 className="text-xl font-bold">Contact Us</h5>
                <form action=""  name="contactMobileForm" autoComplete="on" onSubmit={handleSubmit}>
                    <input type="text" placeholder="Your Name" name="fname" required/>
                    <input type="email" placeholder="Your Email" required/>
                    <textarea placeholder="Your Message" cols="10" rows="5" minLength="20" required></textarea>
                    <input className="btn" type="submit" value="Send"/>
                </form>
            </div>
        </div>
    </section>
    
    )
}