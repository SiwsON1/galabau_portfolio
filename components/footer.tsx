import React from "react";
import Socials from "./socials";
import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="pt-12 xl:pt-[60px] bg-[#272723] text-white">
      <div className="container mx-auto pb-12">
        {/* Zmiana tutaj: Dodanie warunkowego stylowania dla małych ekranów */}
        <div className="flex flex-col md:flex-row gap-x-5 gap-y-10 text-center md:text-left">
          <div className="flex-1 mx-auto md:mx-0">
            <h2 className="font-bold text-xl text-steelblue mb-5">
              Galabau Darius
            </h2>
            <div className="flex flex-col gap-y-3 items-center md:items-start">
              <div className="flex items-center gap-x-3">
                <MapPin className="text-steelblue" />
                <div>49626 Grafeld</div>
              </div>
              <div className="flex items-center gap-x-3">
                <Phone className="text-steelblue" />
                <a href="tel:+4915736978719">+49 1573 6978719</a>
              </div>
              <div className="flex items-center gap-x-3">
                <Mail className="text-steelblue" />
                <div>kontakt@nazwafirmy.com</div>
              </div>
            </div>
          </div>

          {/* Zmiana tutaj: Wyśrodkowanie na małych ekranach */}
          <div className="flex-1 mx-auto md:mx-0 xl:mt-[50px]">
            <Socials containerStyles="flex justify-center md:justify-start gap-x-3 text-steelblue" />
          </div>
        </div>

        <hr className="my-8 border-t border-gray-600" />
        <div className="text-center text-gray-500 text-xs">
          <p>
            © {new Date().getFullYear()} Created by{" "}
            <a
              href="https://github.com/SiwsON1"
              className="text-steelblue hover:text-steelblue-dark"
              target="_blank"
              rel="noopener noreferrer"
            >
              SiwsON1
            </a>
            . All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;