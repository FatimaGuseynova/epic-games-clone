import React, { useEffect } from 'react';
import { GrLanguage } from "react-icons/gr";
import { Dropdown } from 'antd';
import { IoIosArrowBack } from "react-icons/io";

const languages = [
    { code: 'en', label: 'English' },
    { code: 'ru', label: 'Русский' },
    { code: 'de', label: 'Deutsch' },
];

function ChangeLanguage({ open, setOpen }) {

useEffect(() => {
    window.googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
            {
                pageLanguage: 'en',
                includedLanguages: 'en,ru,de',
                autoDisplay: false,
            },
            'google_translate_element'
        );
    };

    if (window.google?.translate) {
        window.googleTranslateElementInit();
        return;
    }

    if (document.getElementById('google-translate-script')) {
        return;
    }

    const script = document.createElement('script');

    script.id = 'google-translate-script';
    script.src =
        'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';

    script.async = true;

    document.body.appendChild(script);
}, []);

const changeLanguage = (langCode) => {
    const select = document.querySelector('.goog-te-combo');

    console.log('CLICKED:', langCode);
    console.log('SELECT:', select);

    if (!select) {
        console.log('SELECT NOT FOUND');
        return;
    }

    select.value = langCode;

    console.log('VALUE:', select.value);

    select.dispatchEvent(
        new Event('change', {
            bubbles: true
        })
    );

    console.log('CHANGE EVENT FIRED');

    setTimeout(() => {
        setOpen(false);
    }, 500);
};
    const languageContent = (
        <div className="
            min-[720px]:w-48
            min-[720px]:rounded-2xl
            min-[720px]:font-semibold
            min-[720px]:bg-gradient-to-br
            min-[720px]:from-[#2b2b2f]
            min-[720px]:to-[#555]
            min-[720px]:p-2
            min-[720px]:shadow-2xl
        ">
            {languages.map((lang) => (
                <button
                    key={lang.code}
                    onClick={() => changeLanguage(lang.code)}
                    className="
                        flex
                        w-full
                        text-start
                        duration-200
                        min-[720px]:pl-5
                        min-[720px]:rounded-xl
                        min-[720px]:px-4
                        min-[720px]:py-2
                        min-[720px]:!text-[#FEFEFE]
                        hover:bg-[#7d7d7d95]
                    "
                >
                    {lang.label}
                </button>
            ))}
        </div>
    );

    return (
        <>
          <div
    id="google_translate_element"
    style={{
        position: 'absolute',
        width: '1px',
        height: '1px',
        overflow: 'hidden',
        opacity: 0,
        pointerEvents: 'none',
    }}
/>
            <div className="min-[720px]:block max-[719px]:hidden">

                <Dropdown
                    trigger={['click']}
                    open={open}
                    onOpenChange={setOpen}
                    popupRender={() => languageContent}
                >
                    <button className="group hover:text-[#8b8b92] cursor-pointer">
                        <GrLanguage />
                    </button>
                </Dropdown>

            </div>

            <div className="min-[720px]:hidden">

                <button
                    onClick={() => setOpen(true)}
                    className={`
                        duration-200
                        ${open ? "opacity-0" : "opacity-100"}
                    `}
                >
                    <GrLanguage />
                </button>


                <div
                    className={`
                        fixed
                        inset-0
                        z-[9999]
                        bg-[#121216]
                        w-screen
                        h-screen
                        p-6
                        pt-0
                        duration-300
                        top-30
                        ${
                            open
                                ? "opacity-100 "
                                : "opacity-0  pointer-events-none"
                        }
                    `}
                >

                    <button
                        onClick={() => setOpen(false)}
                        className="
                            pb-2.5
                            text-[17px]
                            flex
                            gap-4
                            items-center
                            text-white
                        "
                    >
                        <IoIosArrowBack />
                        Back
                    </button>

                    <h2
                        className="
                            font-extrabold
                            text-[29px]
                            text-white
                            pb-2.5
                            text-start
                            py-6
                        "
                    >
                        Languages
                    </h2>

                    {languages.map((lang) => (
                        <button
                            key={lang.code}
                            onClick={() => changeLanguage(lang.code)}
                            className="
                                text-[17px]
                                flex
                                w-full
                                text-start
                                text-[#F0FFFF]
                                hover:bg-[#7d7d7d95]
                                rounded-[7px]
                                p-3
                                duration-200
                                pt-4
                            "
                        >
                            {lang.label}
                        </button>
                    ))}

                </div>

            </div>
        </>
    );
}

export default ChangeLanguage;