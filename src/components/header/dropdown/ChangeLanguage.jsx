import React, { useState, useEffect } from 'react';
import { GrLanguage } from "react-icons/gr";
import { Dropdown } from 'antd';
import { IoIosArrowBack } from "react-icons/io";
const languages = [
  { code: 'en', label: 'English' },
  { code: 'ru', label: 'Русский' },
  { code: 'de', label: 'Deutsch' },
];

function ChangeLanguage({open, setOpen}) {

  useEffect(() => {
    if (document.getElementById('google-translate-script')) return;

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'en',
          includedLanguages: 'en,ru,de',
          layout: window.google.translate.TranslateElement.InlineLayout.HORIZONTAL, // было SIMPLE
          autoDisplay: false,
        },
        'google_translate_element'
      );
    };

    const script = document.createElement('script');
    script.id = 'google-translate-script';
    script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const changeLanguage = (langCode) => {
    const select = document.querySelector('.goog-te-combo');
    if (select) {
      select.value = langCode;
      const event = document.createEvent('HTMLEvents');
      event.initEvent('change', true, true);
      select.dispatchEvent(event);
    } else {
      console.warn('Google Translate select не найден');
    }
    setOpen(false);
  };
  return (

    <>

      <div id="google_translate_element" style={{ display: 'none' }} />

      <Dropdown
        trigger={['click']}
        open={open}
        onOpenChange={(nextOpen) => setOpen(nextOpen)}
        popupRender={() => (

          <div className="max-[720px]:bg-[#121216] max-[720px]:p-6 max-[720px]:pt-0 max-[720px]:w-screen  min-[720px]:w-48 min-[720px]:rounded-2xl min-[720px]:font-semibold min-[720px]:bg-gradient-to-br min-[720px]:from-[#2b2b2f] min-[720px]:to-[#555] min-[720px]:p-2 min-[720px]:shadow-2xl">
            <button onClick={() => setOpen(false)} className='min-[720px]:hidden  pb-2.5 text-[17px] flex gap-4 items-center text-white'> <IoIosArrowBack />        Back</button>
            <h2 className='min-[720px]:hidden font-extrabold text-[29px] text-white pb-2.5'>Languages</h2>
            {languages.map((lang) => (

              <button key={lang.code}
                onClick={() => changeLanguage(lang.code)}
                className="max-[720px]:text-[17px] flex w-full duration-200 text-start max-[720px]:flex-col max-[720px]:text-[#F0FFFF] hover:bg-[#7d7d7d95] max-[720px]:rounded-[7px] max-[720px]:p-3 min-[720px]:pl-5 min-[720px]:block  min-[720px]:rounded-xl min-[720px]:px-4 min-[720px]:py-2 min-[720px]:!text-[#FEFEFE]"
              >
                {lang.label}
              </button>
            ))}
          </div>
        )}
      >
        <a className={`${open ? "max-[720px]:opacity-0" : "max-[720px]:opacity-100"} duration-200  max-[720px]:w-[83vw] group hover:text-[#8b8b92] cursor-pointer`}>
          <GrLanguage />
        </a>
      </Dropdown>
    </>
  );
}

export default ChangeLanguage;