import Link from "next/link";
import React, { useState } from "react";
import logo from "../public/images/Logo.png";
import Offcanvas from "react-bootstrap/Offcanvas";
import OffcanvasHeader from "react-bootstrap/OffcanvasHeader";
import OffcanvasTitle from "react-bootstrap/OffcanvasTitle";
import OffcanvasBody from "react-bootstrap/OffcanvasBody";

const HeaderTwo = () => {
  const [show, setShow] = useState(false);
  const closeMenu = () => setShow(false);
  const openMenu = () => setShow(true);
  const [menuItems] = useState([
    { title: "Home", route: "/" },
    {
      title: "Services",
      description: "Services",
      route: "/services",
      subItems: [
        {
          title: "Game Development Services",
          route: "#",
          description: "Game Development Services",
          children: [
            {
              title: "Mobile Game Development",
              route: "/services/mobile-game-development",
              description: "Mobile Game Development",
            },
            {
              title: "NFT Game Development",
              route: "/services/nft-game-development",
              description: "NFT Game Development",
            },
            {
              title: "Desktop Game Development",
              route: "/services/desktop-game-development",
              description: "Desktop Game Development",
            },
            {
              title: "Web3 Game Development",
              route: "/services/web3-game-development",
              description: "Web3 Game Development",
            },
            {
              title: "Metaverse Game Development",
              route: "/services/metaverse-game-development",
              description: "Metaverse Game Development",
            },
          ],
        },
        {
          title: "Art, Design & Animation",
          description: "Art, Design & Animation",
          route: "#",
          children: [
            {
              title: "Post-Production",
              route: "/services/post-production",
              description: "Post-Production",
            },
            {
              title: "UI/UX",
              route: "/services/ui-ux",
              description: "UI/UX",
            },
            {
              title: "Asset Production",
              route: "/services/asset-production",
              description: "Asset Production",
            },
            {
              title: "Animation",
              route: "/services/animation",
              description: "Animation",
            },
          ],
        },

        {
          title: "Interactive Application",
          description: "Interactive Application",
          route: "#",
          children: [
            {
              title: "Metaverse Services",
              route: "/services/metaverse-services",
              description: "Metaverse Services",
            },
            {
              title: "Simulations",
              route: "/services/simulation",
              description: "Simulations",
            },
            {
              title: "Learning And Edutainment",
              route: "/services/learning-and-edutainment",
              description: "Learning And Edutainment",
            },
            {
              title: "AR, VR, WebXR Development",
              route: "/services/ar-vr-webxr-development",
              description: "AR, VR, WebXR Development",
            },
            {
              title: "Gamification & Serious Games",
              route: "/services/gamification-serious-games",
              description: "Gamification & Serious Games",
            },
          ],
        },

        {
          title: "Technology Services",
          description: "Technology Services",
          route: "#",
          children: [
            {
              title: "Unity3D Game Development",
              route: "/services/unity-game-development",
              description: "Unity3D Game Development",
            },
            {
              title: "Unreal Game Development",
              route: "/services/unreal-game-development",
              description: "Unreal Game Development",
            },
            {
              title: "HTML5/WebGL Game Development",
              route: "/services/html5-web-gl-game-development",
              description: "Unreal Game Development",
            },
            {
              title: "Flutter Developments",
              route: "/services/flutter-development",
              description: "Unreal Game Development",
            },
          ],
        },

        {
          title: "Blockchain Services",
          description: "Unreal Game Development",
          route: "#",
          children: [
            {
              title: "Blockchain Game Development",
              route: "/services/blockchain-game-development",
              description: "Unreal Game Development",
            },
            {
              title: "dApps Game Development",
              route: "/services/dapps-game-development",
              description: "Unreal Game Development",
            },
          ],
        },

        {
          title: "Resource Augmentation",
          description: "Unreal Game Development",
          route: "#",
          children: [
            {
              title: "Game Designer",
              route: "/services/game-design",
              description: "Unreal Game Development",
            },
            {
              title: "2D Artist",
              route: "/services/artists-2d",
              description: "Unreal Game Development",
            },
            {
              title: "3D Artist",
              route: "/services/artists-3d",
              description: "Unreal Game Development",
            },
          ],
        },
      ],
    },

    {
      title: "Solution",
      description: "Unreal Game Development",
      route: "/solution",
      subItems: [
        {
          title: "Snack & Ladder Game",
          route: "/solution/snakes-and-ladder-game-development",
          description: "Unreal Game Development",
        },
        {
          title: "Ludo Game",
          route: "/solution/ludo-game-development",
          description: "Unreal Game Development",
        },
        {
          title: "Tic Tac Toe Game",
          route: "/solution/tic-tac-toe-game-development",
          description: "Unreal Game Development",
        },
        {
          title: "Hyper Casual Game",
          route: "/solution/hyper-casual-game-development",
          description: "Unreal Game Development",
        },
        {
          title: "Bubble Shooter Game",
          route: "/solution/bubble-shooter-game-development",
          description: "Unreal Game Development",
        },
        {
          title: "UNO Game ",
          route: "/solution/uno-game-development",
          description: "Unreal Game Development",
        },
        {
          title: "Carrom Game",
          route: "/solution/carrom-game-development",
          description: "Unreal Game Development",
        },
        {
          title: "Archery Game",
          route: "/solution/archery-game-development",
          description: "Unreal Game Development",
        },
        {
          title: "8 Ball Pool Game",
          route: "/solution/pool-8_ball-game-development",
          description: "Unreal Game Development",
        },
        {
          title: "Real Money Game",
          route: "/solution/real-money-game-development",
          description: "Unreal Game Development",
        },
        {
          title: "Chess Game",
          route: "/solution/chess-game-development",
          description: "Unreal Game Development",
        },
        {
          title: "Car Simulation Game",
          route: "/solution/car-simulation-game-development",
          description: "Unreal Game Development",
        },
        {
          title: "Shooting Game",
          route: "/solution/shooting-game-development",
          description: "Unreal Game Development",
        },
        {
          title: "Rummy Game",
          route: "/solution/rummy-game-development",
          description: "Unreal Game Development",
        },
        {
          title: "Poker Game",
          route: "/solution/poker-game-development",
          description: "Unreal Game Development",
        },
        {
          title: "Tarneeb Game",
          route: "/solution/tarneeb-game-development",
          description: "Unreal Game Development",
        },
        {
          title: "Hand Game",
          route: "/solution/hand-game-development",
          description: "Unreal Game Development",
        },
        {
          title: "Casino Game",
          route: "/solution/casino-game-development",
          description: "Unreal Game Development",
        },
        {
          title: "Tower Defence Game",
          route: "/solution/tower-defense-game-development",
          description: "Unreal Game Development",
        },
        {
          title: "Callbreak Card Game",
          route: "/solution/callbreak-card-game-development",
          description: "Unreal Game Development",
        },
        {
          title: "Stock Fantasy App",
          route: "/solution/stock-fantasy-app-development",
          description: "Unreal Game Development",
        },
        {
          title: "Fantasy Sports App",
          route: "/solution/fantasy-sports-app-development",
          description: "Unreal Game Development",
        },
        {
          title: "Multi-gaming App",
          route: "/solution/multi-gaming-app-development",
          description: "Multi-gaming App",
        },
      ],
    },
    {
      title: "Company",
      description: "Company",
      route: "/about",
      subItems: [
        {
          title: "About Us",
          route: "/about",
          description: "About Us",
        },
        {
          title: "Our Work",
          route: "/work",
          description: "Our Work",
        },
        {
          title: "Our Process",
          route: "/process",
          description: "Our Process",
        },
        {
          title: "Key Infrastructure",
          route: "/infrastructure",
          description: "Key Infrastructure",
        },
        {
          title: "Engagement Model",
          route: "/engagement",
          description: "Engagement Model",
        },
        // { title: "Chess Game", route: "/chessgame" },
      ],
    },
    {
      title: "Career",
      route: "/career",
      description: "Career",
    },
    {
      title: "Let's Talk",
      route: "/contact",
      description: "Let's Talk",
    },
  ]);

  function Popup({ item, index }) {
    return (
      <>
        <a
          href="#"
          className="nav-link fs-4"
          data-bs-toggle="modal"
          data-bs-target={`#modal${index}`}
          onClick={closeMenu}
        >
          {item.title} {"->"}
        </a>
        <div
          className="modal fade"
          id={`modal${index}`}
          tabIndex="-1"
          aria-labelledby={`modalLabel${index}`}
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content border border-primary-light border-2 bg-black text-start">
              <div className="modal-header border-0">
                <h1
                  className="modal-title fs-5 text-light"
                  id={`modalLabel${index}`}
                >
                  <Link
                    className="nav-link fs-4"
                    href={item.route}
                    onClick={closeMenu}
                  >
                    {item.title}
                  </Link>
                </h1>
                <button
                  type="button"
                  className="btn-close btn-close-white"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <ul className="row list-unstyled">
                  {item.subItems.map((si, i2) => (
                    <li
                      className={"col-12 col-lg-4 pt-3"}
                      key={`${index}${i2}`}
                    >
                      <Link
                        href={si.route}
                        key={`${index}${i2}`}
                        className={`text-decoration-none ${
                          si.children ? "fw-bold" : "link-light"
                        }`}
                      >
                        {si.title}
                      </Link>

                      {si.children && (
                        <ul className="list-unstyled p-3">
                          {si.children.map((child, i3) => (
                            <li key={i3} className="ps-2">
                              <Link
                                href={child.route}
                                className="text-decoration-none link-light"
                                key={`${index}${i2}${i3}`}
                              >
                                {child.title}
                              </Link>
                            </li>
                          ))}
                          <hr className="d-lg-none" />
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <nav className="bg-black text-light navbar navbar-dark">
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
        <OffcanvasHeader closeButton closeVariant="white" className="px-4">
          <OffcanvasTitle>Menu</OffcanvasTitle>
        </OffcanvasHeader>
        <OffcanvasBody className="px-0">
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
        </OffcanvasBody>
      </Offcanvas>
    </nav>
  );
};

export default HeaderTwo;
