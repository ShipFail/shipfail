import { ClassAttributes, InputHTMLAttributes, JSX, useState } from 'react';
import store from '../../redux/store';
import MenuItems from '@/shared/layout-components/sidebar/nav';

export function addOrRemoveCss(cssCode) {

    if (document.head) {
        const dynamicBootstrapStyle = document.head.querySelector(`style[data-name="dynamic-bootstrap"]`);
        if (dynamicBootstrapStyle) {
            document.head.removeChild(dynamicBootstrapStyle);
        }
    }
    const styleElement = document.createElement("style");
    styleElement.setAttribute("data-name", "dynamic-bootstrap");
    styleElement.textContent = cssCode;
    document.head.prepend(styleElement);
}

export function Ltr(actionfunction) {

    const theme = store.getState();
    actionfunction({ ...theme, dir: "ltr" });
    localStorage.setItem("scifiltr", "ltr");
    localStorage.removeItem("scifirtl");
}
export function Rtl(actionfunction) {
    const theme = store.getState();
    actionfunction({ ...theme, dir: "rtl" });
    localStorage.setItem("scifirtl", "rtl");
    localStorage.removeItem("scifiltr");
}

export const HorizontalClick = (actionfunction) => {
    const theme = store.getState();
    setTimeout(() => {
        document.querySelector<HTMLElement>(".main-content")?.click();
    }, 100);
    actionfunction({
        ...theme,
        "dataNavLayout": "horizontal",
        "dataVerticalStyle": "",
        "dataNavStyle": localStorage.scifinavstyles ? localStorage.scifinavstyles : "menu-click"
    });
    localStorage.setItem("scifilayout", "horizontal");
    localStorage.removeItem("scifiverticalstyles")
};
export const Vertical = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "dataNavLayout": "vertical",
        "dataVerticalStyle": "overlay",
        "dataToggled": "",
        "dataNavStyle": ''
    });
    localStorage.setItem("scifilayout", "vertical");
    localStorage.removeItem("scifinavstyles");

};

export const Menuclick = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "dataNavStyle": "menu-click",
        "dataVerticalStyle": "",
        "dataToggled": "menu-click-closed",
    });
    localStorage.setItem("scifinavstyles", "menu-click");
    localStorage.removeItem("scifiverticalstyles");

};

function closeMenuFn() {
    const closeMenuRecursively = (items) => {

        items?.forEach((item) => {
            item.active = false;
            closeMenuRecursively(item.children);
        });
    };
    closeMenuRecursively(MenuItems);
}

export const MenuHover = (actionfunction) => {

    const theme = store.getState();
    actionfunction({
        ...theme,
        "dataNavStyle": "menu-hover",
        "dataVerticalStyle": "",
        "dataToggled": "menu-hover-closed",
        "horStyle": ""
    });
    localStorage.setItem("scifinavstyles", "menu-hover");
    localStorage.removeItem("scifiverticalstyles",);
    closeMenuFn();
};
export const IconClick = (actionfunction) => {

    const theme = store.getState();
    actionfunction({
        ...theme,
        "dataNavStyle": "icon-click",
        "dataVerticalStyle": "",
        "dataToggled": "icon-click-closed",
    });
    localStorage.setItem("scifinavstyles", "icon-click");
    localStorage.removeItem("scifiverticalstyles");
    const Sidebar = document.querySelector(".main-menu");
    Sidebar.style.marginInline = "0px";
};
export const IconHover = (actionfunction) => {

    const theme = store.getState();
    actionfunction({
        ...theme,
        "dataNavStyle": "icon-hover",
        "dataVerticalStyle": "",
        "dataToggled": "icon-hover-closed"
    });
    localStorage.setItem("scifinavstyles", "icon-hover");
    localStorage.removeItem("scifiverticalstyles");
    const Sidebar = document.querySelector(".main-menu");
    Sidebar.style.marginInline = "0px";

    // closeMenuFn();
};
export const Fullwidth = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "dataWidth": "fullwidth",
    });
    localStorage.setItem("scififullwidth", "Fullwidth");
    localStorage.removeItem("scifiboxed");

};
export const Boxed = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "dataWidth": "boxed",
    });
    localStorage.setItem("scifiboxed", "Boxed");
    localStorage.removeItem("scififullwidth");
};
export const FixedMenu = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "dataMenuPosition": "fixed",
    });
    localStorage.setItem("scifimenufixed", "MenuFixed");
    localStorage.removeItem("scifimenuscrollable");
};
export const scrollMenu = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "dataMenuPosition": "scrollable",
    });
    localStorage.setItem("scifimenuscrollable", "Menuscrolled");
    localStorage.removeItem("scifimenufixed");
};
export const Headerpostionfixed = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "dataHeaderPosition": "fixed",
    });
    localStorage.setItem("scifiheaderfixed", 'FixedHeader');
    localStorage.removeItem("scifiheaderscrollable");
};
export const Headerpostionscroll = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "dataHeaderPosition": "scrollable",
    });
    localStorage.setItem("scifiheaderscrollable", "ScrollableHeader");
    localStorage.removeItem("scifiheaderfixed");
};
export const Regular = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "dataPageStyle": "regular"
    });
    localStorage.setItem("scifiregular", "Regular");
    localStorage.removeItem("scificlassic");
    localStorage.removeItem("scifimodern");
};
export const Classic = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "dataPageStyle": "classic",
    });
    localStorage.setItem("scificlassic", "Classic");
    localStorage.removeItem("scifiregular");
    localStorage.removeItem("scifimodern");
};
export const Modern = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "dataPageStyle": "modern",
    });
    localStorage.setItem("scifimodern", "Modern");
    localStorage.removeItem("scifiregular");
    localStorage.removeItem("scificlassic");
};
export function Enable(actionfunction) {
    const theme = store.getState();
    actionfunction({ ...theme, loader: "enable" });
    localStorage.setItem("scifiloaderenable", "enable");
    localStorage.setItem("scifiloaderdisable", "enable");
}
export function Disable(actionfunction) {
    const theme = store.getState();
    actionfunction({ ...theme, loader: "disable" });
    localStorage.setItem("scifiloaderdisable", "disable");
    localStorage.removeItem("scifiloaderenable");
}
export const Defaultmenu = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        //
        "dataVerticalStyle": "overlay",
        "dataNavLayout": "vertical",
        "dataToggled": ""
    });
    localStorage.setItem("scifiverticalstyles", "overlay");
    localStorage.removeItem("scifiverticalstyles");
};
export const Closedmenu = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "dataNavLayout": "vertical",
        "dataVerticalStyle": "closed",
        "dataToggled": "close-menu-close"
    });
    localStorage.setItem("scifiverticalstyles", "closed");
    localStorage.removeItem("scifinavstyles");

};

function icontextOpenFn() {
    const html = document.documentElement;
    if (html.getAttribute('data-toggled') === 'icon-text-close') {
        html.setAttribute('data-icon-text', 'open');
    }
}
function icontextCloseFn() {
    const html = document.documentElement;
    if (html.getAttribute('data-toggled') === 'icon-text-close') {
        html.removeAttribute('data-icon-text');
    }
}

export const iconText = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "dataNavLayout": "vertical",
        "dataVerticalStyle": "icontext",
        "dataToggled": "icon-text-close",
        "dataNavStyle": "",

    });
    localStorage.setItem("scifiverticalstyles", "icontext");
    const MainContent = document.querySelector(".main-content");
    const appSidebar = document.querySelector('.app-sidebar');

    appSidebar?.addEventListener("click", () => {
        console.log("clicking");
        icontextOpenFn();
    });
    MainContent?.addEventListener("click", () => {
        icontextCloseFn();
    });
};
export const iconOverayFn = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "dataNavLayout": "vertical",
        "dataVerticalStyle": "overlay",
        "dataToggled": "icon-overlay-close",
        "dataNavStyle": "",
    });
    localStorage.setItem("scifiverticalstyles", "overlay");
    localStorage.removeItem("scifinavstyles");

    const icon = document.getElementById("switcher-icon-overlay");
    if (icon) {
        icon.checked = true;
    }
    const MainContent = document.querySelector(".main-content");
    const appSidebar = document.querySelector('.app-sidebar');
    appSidebar?.addEventListener("click", () => {
        DetachedOpenFn();
    });
    MainContent?.addEventListener("click", () => {
        console.log("detachedclose");
        DetachedCloseFn();
    });

};
function DetachedOpenFn() {
    if (window.innerWidth > 992) {
        const html = document.documentElement;
        if (html.getAttribute('data-dataToggled') === 'detached-close' || html.getAttribute('data-dataToggled') === 'icon-overlay-close') {
            html.setAttribute('data-icon-overlay', 'open');
        }
    }
}
function DetachedCloseFn() {
    if (window.innerWidth > 992) {
        const html = document.documentElement;
        if (html.getAttribute('data-dataToggled') === 'detached-close' || html.getAttribute('data-dataToggled') === 'icon-overlay-close') {
            html.removeAttribute('data-icon-overlay');
        }
    }
}
export const DetachedFn = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "dataNavLayout": "vertical",
        "dataVerticalStyle": "detached",
        "dataToggled": "",
        "dataNavStyle": "",
    });
    localStorage.setItem("scifiverticalstyles", "detached");

    const MainContent = document.querySelector(".main-content");
    const appSidebar = document.querySelector('.app-sidebar');

    appSidebar?.addEventListener("click", () => {
        DetachedOpenFn();
    });
    MainContent?.addEventListener("click", () => {
        console.log("detachedclose");
        DetachedCloseFn();
    });
};

export const DoubletFn = (actionfunction) => {

    const theme = store.getState();
    // const menuNochildElement = document.querySelectorAll(".side-menu__item.active")[0];
    actionfunction({
        ...theme,
        "dataNavLayout": "vertical",
        "dataVerticalStyle": "doublemenu",
        "dataToggled": "double-menu-open",
        "dataNavStyle": "",
    });
    localStorage.setItem("scifiverticalstyles", "doublemenu");
    localStorage.removeItem("scifinavstyles");

    setTimeout(() => {
        if (!document.querySelector(".main-menu .has-sub.open")) {
            const theme = store.getState();
            actionfunction(
                {
                    ...theme,
                    "dataToggled": "double-menu-close"
                }
            );
        }
    }, 100);
};

//Background Patterns
export const Pattern1 = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "patternImg": "bgpattern1"
    });
    localStorage.setItem("scifipatternImg", "bgpattern1");
    localStorage.removeItem("scifibgpattern4");
};
export const Pattern2 = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "patternImg": "bgpattern2"
    });
    localStorage.setItem("scifipatternImg", "bgpattern2");
    localStorage.removeItem("scifibgpattern4");

};
export const Pattern3 = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "patternImg": "bgpattern3"
    });
    localStorage.setItem("scifipatternImg", "bgpattern3");
    localStorage.removeItem("scifibgpattern4");

};
export const Pattern4 = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "patternImg": "bgpattern4"
    });
    localStorage.setItem("scifipatternImg", "bgpattern4");

};
export const Pattern5 = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "patternImg": "bgpattern5"
    });
    localStorage.setItem("scifipatternImg", "bgpattern5");
    localStorage.removeItem("scifibgpattern4");

};
export const Pattern6 = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "patternImg": "bgpattern6"
    });
    localStorage.setItem("scifipatternImg", "bgpattern6");
    localStorage.removeItem("scifibgpattern4");

};
export const Pattern7 = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "patternImg": "bgpattern7"
    });
    localStorage.setItem("scifipatternImg", "bgpattern7");
    localStorage.removeItem("scifibgpattern4");

};
export const Pattern8 = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "patternImg": "bgpattern8"
    });
    localStorage.setItem("scifipatternImg", "bgpattern8");
    localStorage.removeItem("scifibgpattern4");

};
export const Pattern9 = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "patternImg": "bgpattern9"
    });
    localStorage.setItem("scifipatternImg", "bgpattern9");
    localStorage.removeItem("scifibgpattern4");

};
export const Pattern10 = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "patternImg": "bgpattern10"
    });
    localStorage.setItem("scifipatternImg", "bgpattern10");
    localStorage.removeItem("scifibgpattern4");

};

//Card Styleing
export const Card1 = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "dataCardStyle": "style1"
    });
    localStorage.setItem("scifidataCardStyle", "style1");
};
export const Card2 = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "dataCardStyle": "style2"
    });
    localStorage.setItem("scifidataCardStyle", "style2");
    localStorage.removeItem("scifistyle1");

};
export const Card3 = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "dataCardStyle": "style3"
    });
    localStorage.setItem("scifidataCardStyle", "style3");
    localStorage.removeItem("scifistyle1");

};
export const Card4 = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "dataCardStyle": "style4"
    });
    localStorage.setItem("scifidataCardStyle", "style4");
    localStorage.removeItem("scifistyle1");

};
export const Card5 = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "dataCardStyle": "style5"
    });
    localStorage.setItem("scifidataCardStyle", "style5");
    localStorage.removeItem("scifistyle1");

};
export const Card6 = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "dataCardStyle": "style6"
    });
    localStorage.setItem("scifidataCardStyle", "style6");
    localStorage.removeItem("scifistyle1");

};
export const Card7 = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "dataCardStyle": "style7"
    });
    localStorage.setItem("scifidataCardStyle", "style7");
    localStorage.removeItem("scifistyle1");

};
export const Card8 = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "dataCardStyle": "style8"
    });
    localStorage.setItem("scifidataCardStyle", "style8");
    localStorage.removeItem("scifistyle1");

};
export const Card9 = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "dataCardStyle": "style9"
    });
    localStorage.setItem("scifidataCardStyle", "style9");
    localStorage.removeItem("scifistyle1");

};
export const Card10 = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "dataCardStyle": "style10"
    });
    localStorage.setItem("scifidataCardStyle", "style10");
    localStorage.removeItem("scifistyle1");

};

//Card Background
export const Background1 = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "dataCardBackground": "background1"
    });
    localStorage.setItem("scifidataCardBackground", "background1");
};
export const Background2 = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "dataCardBackground": "background2"
    });
    localStorage.setItem("scifidataCardBackground", "background2");
    localStorage.removeItem("scifibackground1");
};

export const Background3 = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "dataCardBackground": "background3"
    });
    localStorage.setItem("scifidataCardBackground", "background3");
    localStorage.removeItem("scifibackground1");

};

export const Background4 = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "dataCardBackground": "background4"
    });
    localStorage.setItem("scifidataCardBackground", "background4");
    localStorage.removeItem("scifibackground1");

};

export const Background5 = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "dataCardBackground": "background5"
    });
    localStorage.setItem("scifidataCardBackground", "background5");
    localStorage.removeItem("scifibackground1");

};

export const Background6 = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "dataCardBackground": "background6"
    });
    localStorage.setItem("scifidataCardBackground", "background6");
    localStorage.removeItem("scifibackground1");

};

export const Background7 = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "dataCardBackground": "background7"
    });
    localStorage.setItem("scifidataCardBackground", "background7");
    localStorage.removeItem("scifibackground1");

};

export const Background8 = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "dataCardBackground": "background8"
    });
    localStorage.setItem("scifidataCardBackground", "background8");
    localStorage.removeItem("scifibackground1");

};

export const Background9 = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "dataCardBackground": "background9"
    });
    localStorage.setItem("scifidataCardBackground", "background9");
    localStorage.removeItem("scifibackground1");

};

export const bgImage1 = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "bgImg": "bgimg1"
    });
    localStorage.setItem("bgimage1", "bgimg1");
    localStorage.removeItem("bgimage2");
    localStorage.removeItem("bgimage3");
    localStorage.removeItem("bgimage4");
    localStorage.removeItem("bgimage5");
};
export const bgImage2 = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "bgImg": "bgimg2"
    });
    localStorage.setItem("bgimage2", "bgimg2");
    localStorage.removeItem("bgimage1");
    localStorage.removeItem("bgimage3");
    localStorage.removeItem("bgimage4");
    localStorage.removeItem("bgimage5");
};
export const bgImage3 = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "bgImg": "bgimg3"
    });
    localStorage.setItem("bgimage3", "bgimg3");
    localStorage.removeItem("bgimage1");
    localStorage.removeItem("bgimage2");
    localStorage.removeItem("bgimage4");
    localStorage.removeItem("bgimage5");
};
export const bgImage4 = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "bgImg": "bgimg4"
    });
    localStorage.setItem("bgimage4", "bgimg4");
    localStorage.removeItem("bgimage1");
    localStorage.removeItem("bgimage2");
    localStorage.removeItem("bgimage3");
    localStorage.removeItem("bgimage5");
};
export const bgImage5 = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "bgImg": "bgimg5"
    });
    localStorage.setItem("bgimage5", "bgimg5");
    localStorage.removeItem("bgimage1");
    localStorage.removeItem("bgimage2");
    localStorage.removeItem("bgimage3");
    localStorage.removeItem("bgimage4");
};

export const primaryColor1 = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "colorPrimaryRgb": "0, 255, 0",
        "bgGradient": "#011a01",
        "bgLight": "1, 26, 1"
    });
    localStorage.setItem("primaryRGB", "0, 255, 0");
    // localStorage.setItem("bgGradient", "#011a01");
    // localStorage.setItem("bgLight", "1, 26, 1");

};
export const primaryColor2 = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "colorPrimaryRgb": "255, 235, 59",
        "bgGradient": "#181601",
        "bgLight": "24, 22, 1"
    });
    localStorage.setItem("primaryRGB", "255, 235, 59");
    localStorage.setItem("primaryRGB1", "255 235 59");
};
export const primaryColor3 = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "colorPrimaryRgb": "0, 254, 252",
        "bgGradient": "#011813",
        "bgLight": "1, 24, 19"
    });
    localStorage.setItem("primaryRGB", "0, 254, 252");
    localStorage.setItem("primaryRGB1", "0 254 252");
};
export const primaryColor4 = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "colorPrimaryRgb": "0, 175, 255",
        "bgGradient": "#011118",
        "bgLight": "1, 17, 24"
    });
    localStorage.setItem("primaryRGB", "0, 175, 255");
    localStorage.setItem("primaryRGB1", "0 175 255");
};
export const primaryColor5 = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "colorPrimaryRgb": "209, 115, 255",
        "bgGradient": "#110118",
        "bgLight": " 17, 1, 24"
    });
    localStorage.setItem("primaryRGB", "209, 115, 255");
    localStorage.setItem("primaryRGB1", "209 115 255");
};

const ColorPicker = (props) => {
    return (
        <div className="color-picker-input">
            <input type="color" {...props} />
        </div>
    );
};

function hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}
const Themeprimarycolor = ({ actionfunction }) => {
    const theme = store.getState();
    const [state, updateState] = useState("#FFFFFF");

    const handleInput = (e) => {
        const rgb = hexToRgb(e.target.value);

        if (rgb !== null) {
            const { r, g, b } = rgb;
            updateState(e.target.value);
            actionfunction({
                ...theme,
                "colorPrimaryRgb": `${r} , ${g} , ${b}`,
                "bgGradient": `${r} , ${g} , ${b}`,
                "bgLight": `${r} , ${g} , ${b}`
            });
            localStorage.setItem("dynamiccolor", `${r} , ${g} , ${b}`);
        }
    };

    return (
        <div className="Themeprimarycolor theme-container-primary pickr-container-primary">
            <ColorPicker onChange={handleInput} value={state} />
        </div>
    );
};

export default Themeprimarycolor;


export const Reset = (actionfunction) => {
    const theme = store.getState()
    Vertical(actionfunction)
        actionfunction({
        ...theme,
        lang: "en",
        dir: "ltr",
        dataThemeMode: "dark",
        dataMenuStyles: "dark",
        dataNavLayout: "vertical",
        dataHeaderStyles: "dark",
        dataVerticalStyle: "detached",
        dataCardBackground: "background1",
        dataCardStyle: "style1",
        dataToggled: "",
        dataNavStyle: "",
        horStyle: "",
        dataPageStyle: "regular",
        dataWidth: "fullwidth",
        dataMenuPosition: "fixed",
        dataHeaderPosition: "fixed",
        patternImg: "bgpattern4",
        iconOverlay: "",
        colorPrimaryRgb: "",
        colorPrimary: "",
        bgImg: "",
        iconText: "",
        body: {
            class: ""
        },
    });
    localStorage.clear();
    var icon =document.getElementById("switcher-detached");
    if(icon){
        icon.checked=true
    }
}

//Landingpage
export const Reset1 = (actionfunction) => {
    const theme = store.getState()
    Vertical(actionfunction)
    actionfunction({
        ...theme,
        lang: "en",
        dir: "ltr",
        dataThemeMode: "dark",
        dataNavLayout: "horizontal",
        dataVerticalStyle: "overlay",
        patternImg: "bgpattern4",
        dataCardBackground: "background1",
        dataCardStyle: "style1",
        dataToggled: "",
        dataNavStyle: "menu-click",
        dataMenuPosition: "fixed",
        iconOverlay: "",
        colorPrimaryRgb: "",
        body: {
            class: ""
        }
    });
    localStorage.clear();
}
export const LocalStorageBackup = (actionfunction) => {

    (localStorage.scifirtl) ? Rtl(actionfunction) : Ltr(actionfunction);
    (localStorage.scifiregular) ? Regular(actionfunction) : "";
    (localStorage.scificlassic) ? Classic(actionfunction) : "";
    (localStorage.scifimodern) ? Modern(actionfunction) : "";
    (localStorage.scififullwidth) ? Fullwidth(actionfunction) : "";
    (localStorage.scifiboxed) ? Boxed(actionfunction) : "";
    (localStorage.scifimenufixed) ? FixedMenu(actionfunction) : "";
    (localStorage.scifimenuscrollable) ? scrollMenu(actionfunction) : "";
    (localStorage.scifiheaderfixed) ? Headerpostionfixed(actionfunction) : "";
    (localStorage.scifiheaderscrollable) ? Headerpostionscroll(actionfunction) : "";

    (localStorage.scifiloaderenable) ? Enable(actionfunction) : "";
    (localStorage.scifiloaderdisable) ? Disable(actionfunction) : "";

    (localStorage.scifinavstyles === "menu-click") ? Menuclick(actionfunction) : '';
    (localStorage.scifinavstyles === "menu-hover") ? MenuHover(actionfunction) : '';
    (localStorage.scifinavstyles === "icon-click") ? IconClick(actionfunction) : '';
    (localStorage.scifinavstyles === "icon-hover") ? IconHover(actionfunction) : '';

    (localStorage.scifipatternImg === "bgpattern1") ? Pattern1(actionfunction) : '';
    (localStorage.scifipatternImg === "bgpattern2") ? Pattern2(actionfunction) : '';
    (localStorage.scifipatternImg === "bgpattern3") ? Pattern3(actionfunction) : '';
    (localStorage.scifipatternImg === "bgpattern4") ? Pattern4(actionfunction) : '';
    (localStorage.scifipatternImg === "bgpattern5") ? Pattern5(actionfunction) : '';
    (localStorage.scifipatternImg === "bgpattern6") ? Pattern6(actionfunction) : '';
    (localStorage.scifipatternImg === "bgpattern7") ? Pattern7(actionfunction) : '';
    (localStorage.scifipatternImg === "bgpattern8") ? Pattern8(actionfunction) : '';
    (localStorage.scifipatternImg === "bgpattern9") ? Pattern9(actionfunction) : '';
    (localStorage.scifipatternImg === "bgpattern10") ? Pattern10(actionfunction) : '';

    (localStorage.scifidataCardStyle === "style1") ? Card1(actionfunction) : '';
    (localStorage.scifidataCardStyle === "style2") ? Card2(actionfunction) : '';
    (localStorage.scifidataCardStyle === "style3") ? Card3(actionfunction) : '';
    (localStorage.scifidataCardStyle === "style4") ? Card4(actionfunction) : '';
    (localStorage.scifidataCardStyle === "style5") ? Card5(actionfunction) : '';
    (localStorage.scifidataCardStyle === "style6") ? Card6(actionfunction) : '';
    (localStorage.scifidataCardStyle === "style7") ? Card7(actionfunction) : '';
    (localStorage.scifidataCardStyle === "style8") ? Card8(actionfunction) : '';
    (localStorage.scifidataCardStyle === "style9") ? Card9(actionfunction) : '';
    (localStorage.scifidataCardStyle === "style10") ? Card10(actionfunction) : '';

    (localStorage.scifidataCardBackground === "background1") ? Background1(actionfunction) : '';
    (localStorage.scifidataCardBackground === "background2") ? Background2(actionfunction) : '';
    (localStorage.scifidataCardBackground === "background3") ? Background3(actionfunction) : '';
    (localStorage.scifidataCardBackground === "background4") ? Background4(actionfunction) : '';
    (localStorage.scifidataCardBackground === "background5") ? Background5(actionfunction) : '';
    (localStorage.scifidataCardBackground === "background6") ? Background6(actionfunction) : '';
    (localStorage.scifidataCardBackground === "background7") ? Background7(actionfunction) : '';
    (localStorage.scifidataCardBackground === "background8") ? Background8(actionfunction) : '';
    (localStorage.scifidataCardBackground === "background9") ? Background9(actionfunction) : '';

    (localStorage.bgimage1) ? bgImage1(actionfunction) : '';
    (localStorage.bgimage2) ? bgImage2(actionfunction) : '';
    (localStorage.bgimage3) ? bgImage3(actionfunction) : '';
    (localStorage.bgimage4) ? bgImage4(actionfunction) : '';
    (localStorage.bgimage5) ? bgImage5(actionfunction) : '';
    (localStorage.scifilayout == 'horizontal') && HorizontalClick(actionfunction);
    //primitive 
    if (
        localStorage.getItem("scifiltr") == null ||
        localStorage.getItem("scifiltr") == "ltr"
    ) {
        // addOrRemoveCss(ltr);
    }
    if (localStorage.getItem("scifirtl") == "rtl") {
        document.querySelector("body")?.classList.add("rtl");
        document.querySelector("html[lang=en]")?.setAttribute("dir", "rtl");
        // addOrRemoveCss(rtl);
    }

    // Theme Primary: Colors: Start
    switch (localStorage.primaryRGB) {
        case '0, 255, 0':
            primaryColor1(actionfunction);

            break;
        case '255, 235, 59':
            primaryColor2(actionfunction);

            break;
        case '0, 254, 252':
            primaryColor3(actionfunction);

            break;
        case '0, 175, 255':
            primaryColor4(actionfunction);

            break;
        case '209, 115, 255':
            primaryColor5(actionfunction);

            break;
        default:
            break;
    }

    //layout
    if (localStorage.scifiverticalstyles) {
        const verticalStyles = localStorage.getItem("scifiverticalstyles");

        switch (verticalStyles) {
            case "default":
                Defaultmenu(actionfunction);
                break;
            case "closed":
                Closedmenu(actionfunction);
                break;
            case "icontext":
                iconText(actionfunction);
                break;
            case "overlay":
                iconOverayFn(actionfunction);
                break;
            case "detached":
                DetachedFn(actionfunction);
                break;
            case "doublemenu":
                DoubletFn(actionfunction);
                break;
        }
    }

    //Theme Primary:
    if (localStorage.dynamiccolor) {
        const theme = store.getState();
        actionfunction({
            ...theme,
            "colorPrimaryRgb": localStorage.dynamiccolor,
            "colorPrimary": localStorage.dynamiccolor
        });
    }
    //Theme BAckground:
    if (localStorage.darkBgRGB1) {
        const theme = store.getState();
        actionfunction({
            ...theme,
            "bodyBg1": localStorage.darkBgRGB1,
            "bodyBg2": localStorage.darkBgRGB2,
            "darkBg": localStorage.darkBgRGB3,
            "inputBorder": localStorage.darkBgRGB4,
            "dataThemeMode": "dark",
            "dataHeaderStyles": "dark",
            "dataMenuStyles": "dark",
        });
        // Dark(actionfunction);
    }
};
