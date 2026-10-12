"use client";

import { useEffect } from "react";

export default function GoogleTranslate() {
  useEffect(() => {
    if (document.getElementById("google-translate-script")) return;

    (window as any).googleTranslateElementInit = () => {
      new (window as any).google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: "en,fa",
          autoDisplay: false,
        },
        "google_translate_element"
      );
    };

    const script = document.createElement("script");
    script.id = "google-translate-script";
    script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    document.body.appendChild(script);

    // Observer to continuously remove Google top banner iframe if it injects
    const observer = new MutationObserver(() => {
      const bannerFrame = document.querySelector(".goog-te-banner-frame") as HTMLElement;
      if (bannerFrame) {
        bannerFrame.style.display = "none";
        bannerFrame.style.visibility = "hidden";
      }
      const skiptranslateElements = document.querySelectorAll("body > iframe.skiptranslate");
      skiptranslateElements.forEach((el) => {
        (el as HTMLElement).style.display = "none";
        (el as HTMLElement).style.visibility = "hidden";
      });
      if (document.body.style.top && document.body.style.top !== "0px") {
        document.body.style.top = "0px";
      }
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, []);

  return <div id="google_translate_element" style={{ display: "none" }} />;
}