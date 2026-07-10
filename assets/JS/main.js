/*=========================================================
    PIXEL TIME
    MAIN.JS
=========================================================*/

document.addEventListener("DOMContentLoaded", () => {

    initializeWebsite();

});


/*=========================================================
    INITIALIZE WEBSITE
=========================================================*/

function initializeWebsite(){

    heroButton();

    smoothScroll();

    loader();

}


/*=========================================================
    HERO BUTTON
=========================================================*/

function heroButton(){

    const button = document.querySelector("#hero button");

    const about = document.querySelector("#about-preview");

    if(!button || !about) return;

    button.addEventListener("click", ()=>{

        about.scrollIntoView({

            behavior:"smooth"

        });

    });

}


/*=========================================================
    LOADER
=========================================================*/

function loader(){

    const loader = document.getElementById("loader");

    if(!loader) return;

    window.addEventListener("load",()=>{

        loader.style.opacity = "0";

        loader.style.visibility = "hidden";

    });

}


/*=========================================================
    SMOOTH SCROLL
=========================================================*/

function smoothScroll(){

    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link=>{

        link.addEventListener("click",(e)=>{

            e.preventDefault();

            const target = document.querySelector(link.getAttribute("href"));

            if(target){

                target.scrollIntoView({

                    behavior:"smooth"

                });

            }

        });

    });

}


/*=========================================================
    SCROLL EFFECT
=========================================================*/

window.addEventListener("scroll",()=>{

    const scroll = window.scrollY;

    const hero = document.querySelector("#hero");

    if(!hero) return;

    hero.style.transform = `translateY(${scroll * 0.15}px)`;

});


/*=========================================================
    CONSOLE
=========================================================*/

console.clear();

console.log("%cPIXEL TIME","font-size:35px;font-weight:bold;color:#F57C00;");

console.log("%cStudio Photography","font-size:16px;color:white;");

console.log("%cWebsite initialized successfully.","color:lightgreen;");



/*==========================================================
    THEME SWITCH
==========================================================*/

const themeButton = document.getElementById("theme-toggle");

themeButton.addEventListener("click", () => {

    document.body.classList.toggle("light");

});