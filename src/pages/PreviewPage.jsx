import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import CodeMirror from "@uiw/react-codemirror";
import { html } from "@codemirror/lang-html";
import { css } from "@codemirror/lang-css";
import { javascript } from "@codemirror/lang-javascript";
import { dracula } from "@uiw/codemirror-theme-dracula";

const PreviewPage = () => {
  const { id } = useParams();
  const [landingPage, setLandingPage] = useState(null);
  const [htmlCode, setHtmlCode] = useState("");
  const [cssCode, setCssCode] = useState("");
  const [jsCode, setJsCode] = useState("");

  // Reference to the iframe
  const iframeRef = useRef(null);

  // Landing page data
  const landingPages = [
    {
      id: 1,
      title: "Modern Business",
      image:
        "https://cdn.dribbble.com/userupload/17860359/file/original-5afe8c47a71f28ed26ae287cc5e6d20d.png?resize=1024x768&vertical=center",
      pageUrl: "/landing-pages/business.html",
      htmlcode: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>search your stuff</title>
    <link rel="stylesheet" href="style.css">
    <link rel="shortcut icon" href="https://store-images.s-microsoft.com/image/apps.26273.14125414353576360.25e774bc-c46c-479a-8230-201323b3a41e.68d1b6c6-f31b-4952-9a8e-fc3deb2d1db9" type="image/x-icon">
    <link
    href="https://cdn.jsdelivr.net/npm/remixicon@4.2.0/fonts/remixicon.css"
    rel="stylesheet"
/>
</head>
<body>
    <main>
        <div id="left">
            <h1 id="txt">Distractions Out, Concentration In!</h1>
            
            <label for="ytsearch">
                <img id="ytimg" src="./yt" alt="">
            </label>

            <form action="https://www.youtube.com/results" id="yt" target="_blank">
                <input id="ytsearch" type="search" name="search_query" placeholder="search what you want to learn">
               <i class="srch ri-search-line"></i>
            </form>
            
            <label for="gglsearch">
                <img id="gglimg" src="./ggle" alt="">
            </label>
            <form action="https://www.google.com/search" id="ggl" target="_blank">
                <input id="gglsearch" type="search" name="q" placeholder="search what you want to learn">
               <i id="gglsrch" class="srch ri-search-line"></i>
            </form>
        </div>
        <div id="right">
            <img id="landingimg" src="./DELETE YOUR DISTRICTIONS.png" alt="">
        </div>
    </main>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js" integrity="sha512-7eHRwcbYkK4d9g/6tD/mhkf++eoTHwpNM9woBxtPUBWm67zeAfFC+HrdoE2GanKeocly/VxeLvIqwvCdk7qScg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="./script.js"></script>
</body>
</html>`,
      csscode: `*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

html,body{
    height: 100%;
    width: 100%;
}

main{
    height: 100%;
    width: 100%;
    background-color: #2385C4;
    display: flex;
    overflow: hidden;
}

#left{
    margin-top: 2vw;
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Roboto';
}

#left>h1{
    font-size: 2.8vw;
    font-weight: 600;
    color: #000000b6;
}

#ytimg{
    margin-top: 3vw;
    height: 10vw;
    cursor: pointer;

}

#yt{
    background-color: rgb(255, 255, 255);
    height: 2.8vw;
    width: 60%;
    display: flex;
    align-items: center;
    gap: 0.1vw;
    border-radius: 20px;
    padding: 0.1vw;
    overflow: hidden;
    cursor: pointer;

}

.srch{
    width: 15%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.8vw;
    cursor: pointer;

}
#ytsearch{
    width: 85%;
    height: 100%;
    padding: 0.5vw;
    border: none;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    cursor: pointer;
}



#gglimg{
    margin-top: 3vw;
    height: 10vw;
    margin-bottom: 1vw;
    cursor: pointer;
}

#ggl{
    background-color: rgb(255, 255, 255);
    height: 2.8vw;
    width: 60%;
    display: flex;
    align-items: center;
    gap: 0.1vw;
    border-radius: 20px;
    padding: 0.1vw;
    overflow: hidden;
    cursor: pointer;
}

.srch{
    width: 15%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.8vw;
    cursor: pointer;

}
#gglsearch{
    width: 85%;
    height: 100%;
    padding: 0.5vw;
    border: none;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    cursor: pointer;

}

#right{
    width: 50%;
    height: 100%;

}

#landingimg{
    margin-top: 1vw;
    width: 95%;
    height: 90%;
    object-fit: cover;
    object-position: center;
    background-color: rgba(255, 0, 0, 0.825);
    border-radius: 10px;
}

@media screen and (max-width: 800px) {
    main{
        flex-direction: column;
        align-items: center;
        gap: 2vw;
    }
    
    #left{
        margin-top: 10vw;
        width: 100%;
        height: 50%;
    }
    
    #left>h1{
        font-size: 5.3vw;
        font-weight: 600;
        color: #000000;
    }
    
    #ytimg{
        margin-top: 3vw;
        height: 15vw;    
    }
    
    #yt{
        height: 5vw;
        width: 70%;
    
    }
    
    .srch{
        font-size: 2.2vw;
    
    }
    #ytsearch{
        padding: 0.5vw 1vw;
    }
    
    
    
    #gglimg{
        margin-top: 3vw;
        height: 15vw;  
    }
    
    #ggl{
        height: 5vw;
        width: 70%;
    }
    
    #gglsearch{
        padding: 0.5vw 1vw;    
    }
    
    #right{
        width: 80%;
        height: 80%;
    
    }
    
    #landingimg{
        width: 100%;
        height: 100%;
    }
}`,
      jscode: `let searchicon = document.querySelector(".srch")
let srchicon = document.querySelector("#gglsrch")
let form = document.querySelector("#yt")
let form2 = document.querySelector("#ggl")
searchicon.addEventListener("click", function(){
    form.submit();
});

srchicon.addEventListener("click", function(){
    form2.submit();
})
gsap.from("#txt",{
    opacity:0,
    y:-80,
    ease:"power1.inOut"
})


gsap.from("#landingimg",{
    opacity:0,
    x:400,
    ease:"power1.inOut"
})`,
    },
    // Add other landing pages here
  ];

  useEffect(() => {
    const selectedPage = landingPages.find((page) => page.id === parseInt(id));
    if (selectedPage) {
      setLandingPage(selectedPage);
      setHtmlCode(selectedPage.htmlcode);
      setCssCode(selectedPage.csscode);
      setJsCode(selectedPage.jscode);
    }
  }, [id]);

  const updateIframe = () => {
    if (iframeRef.current) {
      const iframeDoc = iframeRef.current.contentWindow.document;
      iframeDoc.open();
      iframeDoc.write(`
        <html>
          <head>
            <style>${cssCode}</style>
          </head>
          <body>
            ${htmlCode}
            <script>${jsCode}</script>
          </body>
        </html>
      `);
      iframeDoc.close();
    }
  };

  useEffect(() => {
    updateIframe();
  }, [htmlCode, cssCode, jsCode]); // Re-run when code changes

  return (
    <div>
      {landingPage && (
        <div className="flex flex-col items-center">
          <iframe
            ref={iframeRef}
            style={{ width: "100%", height: "700px", border: "1px solid #ccc" }}
            title="Live Preview"
          ></iframe>
          <div className="bg-zinc-700 flex items-center justify-center w-full gap-5">
            <div className="w-[32%] h-auto p-2">
              <div className="flex justify-between items-center mb-1">
              <h2 className="text-gray-100 text-3xl font-semibold">HTML Code</h2>
              <button className="bg-slate-500 text-white text-3xl p-2  font-semibold rounded-md">Copy HTML</button>
              </div>
              <CodeMirror
                value={htmlCode}
                onChange={(value) => setHtmlCode(value)}
                height="350px"
                theme={dracula}
                extensions={[html()]}
              />
            </div>
            <div className="w-[32%] h-auto p-2">
            <div className="flex justify-between items-center mb-1">
              <h2 className="text-gray-100 text-3xl font-semibold">CSS Code</h2>
              <button className="bg-slate-500 text-white text-3xl p-2  font-semibold rounded-md">Copy CSS</button>
              </div>
              <CodeMirror
                value={cssCode}
                onChange={(value) => setCssCode(value)}
                height="350px"
                theme={dracula}
                extensions={[css()]}
              />
            </div>
            <div className="w-[32%] h-auto p-2">
            <div className="flex justify-between items-center mb-1">
              <h2 className="text-gray-100 text-3xl font-semibold">JS Code</h2>
              <button className="bg-slate-500 text-white text-3xl p-2  font-semibold rounded-md ">Copy JS</button>
              </div>
              <CodeMirror
                value={jsCode}
                onChange={(value) => setJsCode(value)}
                height="350px"
                theme={dracula}
                extensions={[javascript()]}
              />
            </div>
          </div>

          <h1 className="text-gray-200 font-semibold text-5xl mt-10">{landingPage.title}</h1>
          <img className="w-{80%} h-{80%}" src={landingPage.image} alt={landingPage.title} />
        </div>
      )}
    </div>
  );
};

export default PreviewPage;
