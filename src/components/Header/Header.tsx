import {useEffect, useState} from "react";
import "./Header.scss"

const NAV_ITEMS = [
    {title: "HOME", href: "/"},
    {title: "DOCS", href: "/docs/"},
    {title: "BLOG", href: "/blog/"},
    {title: "ABOUT", href: "/about/"},
]

type HeaderProps = Array<{ title: string; href: string }>

export default function Header() {
    // menuOpen: 菜单是否处于打开状态
    const [menuOpen, setMenuOpen] = useState(false)

    // isLandscape: 当前是否为竖屏模式
    const [isLandscape, setLandscape] =
        useState(window.innerHeight > window.innerWidth)

    // 窗口大小变动时重设 isLandscape
    useEffect(() => window.addEventListener("resize", () =>
        setLandscape(window.innerHeight > window.innerWidth)))

    return (
        <header>
            <img className="menu-icon"
                 src={menuOpen ? "/assets/menu_close.png" : "/assets/menu_open.png"}
                 onClick={() => setMenuOpen(!menuOpen)}
                 style={{
                     height: "10vmin",
                     position: "fixed",
                     top: "3vh",
                     right: "3vh",
                     zIndex: 99,
                     display: isLandscape ? "inline-block" : "none",
                 }}
                 alt="Open Menu"/>
            <div onClick={() => setMenuOpen(!menuOpen)} style={{
                width: "6vh",
                height: "20vh",
                backgroundImage: "url('/assets/menu_button.png')",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "50%",
                position: "fixed",
                top: "35vh",
                zIndex: 1,
                opacity: isLandscape ? 0 : 1,
            }}><span style={{
                color: "white",
                padding: "2vh 1vh",
                boxSizing: "border-box",
                display: "inline-block",
                fontFamily: "Orbitron",
                fontSize: "1.8vh",
                fontWeight: "bold",
                writingMode: "vertical-rl",
                userSelect: "none"
            }}>MORE</span></div>
            <nav onClick={() => {
                if (!isLandscape) setMenuOpen(false)
            }} style={{
                display: menuOpen ? "block" : "none",
                position: "fixed",
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                zIndex: 2,
            }}>
                <ul style={{
                    width: isLandscape ? "100vw" : "10vw",
                    height: isLandscape ? "100vh" : "40vh",
                    padding: isLandscape ? "15vh 0 60vh 0" : 0,
                    margin: 0,
                    boxSizing: "border-box",
                    backgroundImage: `url("/assets/menu_bg.${isLandscape ? 'jpg' : 'png'}")`,
                    backgroundPosition: isLandscape ? "center" : "bottom",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    listStyleType: "none",
                    position: "fixed",
                    top: isLandscape ? 0 : "20vh",
                    right: 0,
                    bottom: isLandscape ? 0 : "30vh",
                    left: 0,
                    display: "flex",
                    flexDirection: "column",
                    // flexGrow: 1,
                    alignItems: "center",
                }}>{NAV_ITEMS.map((i, index) => (<li key={index} className="nav-item" style={{
                    // backgroundColor: "#252726",
                    height: "100%",
                    width: isLandscape ? "60vw" : "unset",
                    boxSizing: "border-box",
                    borderLeft: "0vw solid #fdfd1f",
                    display: "inline-block",
                    flexGrow: 1,
                }}>
                    <a href={i.href} style={{
                        height: "100%",
                        color: "white",
                        textDecoration: "none",
                        display: "flex",
                        alignItems: "center",
                        fontFamily: "SourceHanSans-Medium",
                    }}>
                        <div style={{
                            width: "5vw",
                            height: "100%",
                            marginRight: "1.2vw",
                            backgroundImage: "linear-gradient(0deg, #6e6e6e, #6e6e6e), linear-gradient(0deg, #6e6e6e, #6e6e6e)",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "1.2vh 1.2vh, 100% .15vh",
                            backgroundPosition: 0,
                            display: isLandscape ? "inline-block" : "none",
                        }}/>
                        {i.title}
                        <div style={{
                            height: "100%",
                            flexGrow: 1,
                            marginLeft: "1.2vw",
                            backgroundImage: "linear-gradient(0deg, #6e6e6e, #6e6e6e), linear-gradient(0deg, #6e6e6e, #6e6e6e)",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "1.2vh 1.2vh, 100% .15vh",
                            backgroundPosition: "100%",
                            display: isLandscape ? "inline-block" : "none",
                        }}/>
                    </a></li>))}</ul>
            </nav>
        </header>
    )
}
