let t=null;const n={btnStart:document.querySelector("button[data-start]"),btnStop:document.querySelector("button[data-stop]"),body:document.querySelector("body")};function e(t){n.btnStart.disabled=t,n.btnStop.disabled=!t}n.btnStop.disabled=!0,n.btnStart.addEventListener("click",(function(){e(!0),t=setInterval((()=>{n.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3)})),n.btnStop.addEventListener("click",(function(){n.btnStart.disabled=!1,n.btnStop.disabled=!0,clearInterval(t)}));
//# sourceMappingURL=01-color-switcher.008d56db.js.map