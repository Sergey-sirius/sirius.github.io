(()=>{(()=>{let t=Array.from(document.querySelectorAll("pre.mermaid"));if(!t)return;t.forEach(e=>{e.setAttribute("data-src",e.innerHTML)});let a=()=>new Promise(e=>{t.forEach(r=>{r.innerHTML=r.getAttribute("data-src")??"",r.removeAttribute("data-processed")}),e()}),i=e=>{window.mermaid.initialize({theme:e}),window.mermaid.init({theme:e},t)};(localStorage.getItem("hb-theme")==="dark"||window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches)&&i("dark"),document.addEventListener("hb:theme",e=>{a().then(i(e.detail.theme==="dark"?"dark":"default")).catch(console.error)})})();})();
