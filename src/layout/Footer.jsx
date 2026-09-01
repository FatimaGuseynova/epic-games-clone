import React, { useState } from "react";
import {
  FaFacebookF,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { IoChevronDown, IoArrowUp } from "react-icons/io5";

function Footer() {
  const [openSection, setOpenSection] = useState(null);

  const footerLinks = [
    {
      title: "Games",
      links: [
        "Fortnite",
        "Fall Guys",
        "Rocket League",
        "Unreal Tournament",
        "Infinity Blade",
        "Shadow Complex",
        "Robo Recall",
      ],
    },
    {
      title: "Marketplaces",
      links: [
        "Epic Games Store",
        "Fab",
        "Quixel Megascans on Fab",
        "Quixel Megaplants on Fab",
        "Store Refund Policy",
        "Store EULA",
      ],
    },
    {
      title: "Tools",
      links: [
        "Unreal Engine",
        "UEFN",
        "MetaHuman",
        "Twinmotion",
        "RealityScan",
        "RAD Game Tools",
      ],
    },
    {
      title: "Online Services",
      links: [
        "Epic Online Services",
        "Kids Web Services",
        "Services Agreement",
        "Acceptable Use Policy",
        "Trust Statement",
        "Subprocessor List",
      ],
    },
    {
      title: "Company",
      links: [
        "About",
        "Newsroom",
        "Careers",
        "Students",
        "UX Research",
      ],
    },
    {
      title: "Resources",
      links: [
        "Dev Community",
        "MegaGrants",
        "Support-A-Creator",
        "Creator Agreement",
        "Distribute on Epic Games",
        "Unreal Engine Branding Gui...",
        "Fan Art Policy",
        "Community Rules",
        "EU Digital Services Act Inqu...",
        "Epic Pro Support",
      ],
    },
  ];

  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index);
  };

  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-[#18181b] text-white">
      <div className="mx-auto w-full max-w-[1655px] px-4 sm:px-6 md:px-10">

        <div className="flex h-[114px] flex-col items-center justify-center border-b border-[#2c2c2f] md:h-[85px] md:flex-row md:justify-between">
          <div className="text-[18px] font-black tracking-[-0.5px] sm:text-[22px] md:text-[30px]">
            STORE
          </div>

          <div className="mt-4 flex items-center gap-6 text-[#a8a8ab] md:mt-0 md:gap-8">
            <a href="#" className="transition hover:text-white">
              <FaFacebookF size={18} />
            </a>

            <a href="#" className="transition hover:text-white">
              <FaXTwitter size={19} />
            </a>

            <a href="#" className="transition hover:text-white">
              <FaYoutube size={22} />
            </a>
          </div>
        </div>

        <div className="border-b  border-[#2c2c2f] py-0 md:grid md:grid-cols-3 lg:grid lg:grid-cols-6 md:gap-x-8 md:py-11">
          {footerLinks.map((section, index) => (
            <div
              key={section.title}
              className="border-b border-[#2c2c2f] last:border-b-0 md:border-b-0"
            >
              <button
                onClick={() => toggleSection(index)}
                className="flex w-full items-center justify-between py-4 text-left md:mb-5 md:block md:cursor-default md:py-0"
              >
                <span className="text-[15px] font-bold sm:text-[16px] md:text-[22px]">
                  {section.title}
                </span>

                <IoChevronDown
                  className={`text-[#c5c5c7] transition-transform duration-200 md:hidden ${
                    openSection === index ? "rotate-180" : ""
                  }`}
                  size={17}
                />
              </button>

              <ul
                className={`overflow-hidden transition-all duration-300 md:block ${
                  openSection === index
                    ? "max-h-[500px] pb-4"
                    : "max-h-0"
                } md:max-h-none md:pb-0`}
              >
                <div className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-[13px] w-full text-[#a8a8ab] transition hover:text-white md:text-[17px]"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </div>
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col py-8 sm:py-10 md:flex-row md:items-start md:justify-between md:gap-8 md:py-12">
          <div className="max-w-[1000px] text-center text-[10px] leading-[14px] text-[#c2c2c5] sm:text-[12px] sm:leading-[17px] md:text-left md:text-[15px] md:leading-[22px]">
            <p>
              © 2026 Epic Games, Inc. All rights reserved. Epic, Epic Games,
              the Epic Games logo, Fortnite, the Fortnite logo, Unreal, Unreal
              Engine, the Unreal Engine logo, Unreal Tournament, and the Unreal
              Tournament logo are trademarks or registered trademarks of Epic
              Games, Inc. in the United States of America and elsewhere. Other
              brands or product names are the trademarks of their respective
              owners. Our websites may contain links to other sites and
              resources provided by third parties. These links are provided for
              your convenience only. Epic Games has no control over the
              contents of those sites or resources, and accepts no
              responsibility for them or for any loss or damage that may arise
              from your use of them.
            </p>
          </div>

          <button
            onClick={handleBackToTop}
            className="mx-auto mt-8 flex shrink-0 items-center gap-2 rounded-lg bg-[#3a3a3f] px-5 py-3 text-[12px] font-medium transition hover:bg-[#4a4a4f] sm:text-[14px] md:mx-0 md:mt-0 md:px-6 md:py-4 md:text-[16px]"
          >
            Back to top

            <span className="flex h-4 w-4 items-center justify-center rounded-full border border-[#d1d1d1] md:h-5 md:w-5">
              <IoArrowUp size={11} />
            </span>
          </button>
        </div>

        <div className="flex flex-wrap justify-center gap-x-5 gap-y-3 pb-8 text-[11px] font-semibold text-white md:hidden">
          <a href="#" className="hover:underline">
            Terms of service
          </a>

          <a href="#" className="hover:underline">
            Privacy policy
          </a>

          <a href="#" className="hover:underline">
            Safety & security
          </a>

          <a href="#" className="hover:underline">
            Store refund policy
          </a>

          <a href="#" className="hover:underline">
            Publisher Index
          </a>
        </div>

      </div>
    </footer>
  );
}

export default Footer;