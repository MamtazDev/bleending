import Link from "next/link";
import React from "react";
import { Offcanvas } from "react-bootstrap";
import Popup from "./Popup";
import logo from "../public/images/Logo.png";

const HeaderTwo = () => {
  const [show, setShow] = React.useState(false);
  const closeMenu = () => setShow(false);
  const openMenu = () => setShow(true);
  const [menuItems] = React.useState([
    { title: "Home", route: "/" },
    {
      title: "Services",
      route: "/services",
      subItems: [
        {
          title: "Game Development Services",
          route: "#",
          children: [
            {
              title: "Mobile Game Development",
              route: "services/mobile-game-development",
            },
            {
              title: "NFT Game Development",
              route: "services/nft-game-development",
            },
            {
              title: "Desktop Game Development",
              route: "services/desktop-game-development",
            },
            {
              title: "Web3 Game Development",
              route: "services/web3-game-development",
            },
            {
              title: "Metaverse Game Development",
              route: "services/metaverse-game-development",
            },
          ],
        },
        {
          title: "Art, Design & Animation",
          route: "#",
          children: [
            { title: "Post-Production", route: "services/post-production" },
            { title: "UI/UX", route: "services/ui-ux" },
            { title: "Asset Production", route: "services/asset-production" },
            { title: "Animation", route: "services/animation" },
          ],
        },

        {
          title: "Interactive Application",
          route: "#",
          children: [
            {
              title: "Metaverse Services",
              route: "services/metaverse-services",
            },
            { title: "Simulations", route: "services/simulation" },
            {
              title: "Learning And Edutainment",
              route: "services/learning-and-edutainment",
            },
            {
              title: "AR, VR, WebXR Development",
              route: "services/ar-vr-webxr-development",
            },
            {
              title: "Gamification & Serious Games",
              route: "services/gamification-serious-games",
            },
          ],
        },

        {
          title: "Technology Services",
          route: "#",
          children: [
            {
              title: "Unity3D Game Development",
              route: "services/unity-game-development",
            },
            {
              title: "Unreal Game Development",
              route: "services/unreal-game-development",
            },
            {
              title: "HTML5/WebGL Game Development",
              route: "services/html5-web-gl-game-development",
            },
            {
              title: "Flutter Developments",
              route: "services/flutter-development",
            },
          ],
        },

        {
          title: "Blockchain Services",
          route: "#",
          children: [
            {
              title: "Blockchain Game Development",
              route: "services/blockchain-game-development",
            },
            {
              title: "dApps Game Development",
              route: "services/dapps-game-development",
            },
          ],
        },

        {
          title: "Resource Augmentation",
          route: "#",
          children: [
            { title: "Game Designer", route: "services/game-design" },
            { title: "2D Artist", route: "services/artists-2d" },
            { title: "3D Artist", route: "services/artists-3d" },
          ],
        },
      ],
    },

    {
      title: "Solution",
      route: "/solution",
      subItems: [
        {
          title: "Snack & Ladder Game",
          route: "solution/snakes-and-ladder-game-development",
        },
        { title: "Ludo Game", route: "solution/ludo-game-development" },
        {
          title: "Tic Tac Toe Game",
          route: "solution/tic-tac-toe-game-development",
        },
        {
          title: "Hyper Casual Game",
          route: "solution/hyper-casual-game-development",
        },
        {
          title: "Bubble Shooter Game",
          route: "solution/bubble-shooter-game-development",
        },
        { title: "UNO Game ", route: "solution/uno-game-development" },
        { title: "Carrom Game", route: "solution/carrom-game-development" },
        { title: "Archery Game", route: "solution/archery-game-development" },
        {
          title: "8 Ball Pool Game",
          route: "solution/pool-8_ball-game-development",
        },
        {
          title: "Real Money Game",
          route: "solution/real-money-game-development",
        },
        { title: "Chess Game", route: "solution/chess-game-development" },
        {
          title: "Car Simulation Game",
          route: "solution/car-simulation-game-development",
        },
        { title: "Shooting Game", route: "solution/shooting-game-development" },
        { title: "Rummy Game", route: "solution/rummy-game-development" },
        { title: "Poker Game", route: "solution/poker-game-development" },
        { title: "Tarneeb Game", route: "solution/tarneeb-game-development" },
        { title: "Hand Game", route: "solution/hand-game-development" },
        { title: "Casino Game", route: "solution/casino-game-development" },
        {
          title: "Tower Defence Game",
          route: "solution/tower-defense-game-development",
        },
        {
          title: "Callbreak Card Game",
          route: "solution/callbreak-card-game-development",
        },
        {
          title: "Stock Fantasy App",
          route: "solution/stock-fantasy-app-development",
        },
        {
          title: "Fantasy Sports App",
          route: "solution/fantasy-sports-app-development",
        },
        {
          title: "Multi-gaming App",
          route: "solution/multi-gaming-app-development",
        },
      ],
    },
    {
      title: "Company",
      route: "/about",
      subItems: [
        { title: "About Us", route: "/about" },
        { title: "Our Work", route: "/work" },
        { title: "Our Process", route: "/process" },
        { title: "Key Infrastructure", route: "/infrastructure" },
        { title: "Engagement Model", route: "/engagement" },
        // { title: "Chess Game", route: "/chessgame" },
      ],
    },
    { title: "Career", route: "/career" },
    { title: "Let's Talk", route: "/contact" },
  ]);
  return (
    <nav className="navbar navbar-dark">
      <div className="container-fluid px-3 px-lg-5">
        <Link className="navbar-brand" href="/">
          <img src={logo.src} alt="Cross Jump Studio" height={70} />
        </Link>
        <button
          variant="primary"
          onClick={openMenu}
          className="navbar-toggler border-primary shadow-primary rounded-circle border-2 p-2"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>

      <Offcanvas
        show={show}
        onHide={closeMenu}
        placement="end"
        className="text-bg-dark bg-black"
      >
        <Offcanvas.Header closeButton closeVariant="white" className="px-4">
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="px-0">
          <ul className="nav flex-column">
            {menuItems.map((item, i) => (
              <li
                className="nav-item border-bottom border-dark"
                data-bs-dismiss="offcanvas"
                key={i}
              >
                {item.subItems ? (
                  <Popup item={item} key={i} index={i} closeMenu={closeMenu} />
                ) : (
                  <Link
                    className="nav-link fs-4"
                    href={item.route}
                    onClick={closeMenu}
                  >
                    {item.title}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </nav>
  );
};

export default HeaderTwo;
