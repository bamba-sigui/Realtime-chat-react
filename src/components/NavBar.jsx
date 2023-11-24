import React, { useContext, useState } from "react";
import { Container, Nav, Navbar, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import Notifications from "./Chat/Notifications";

const NavBar = () => {
  const { user, logoutUser } = useContext(AuthContext);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <Container fluid>
      
      <style>
        {`
          .sidebar {
            height: 100%;
            width: 0;
            position: fixed;
            top: 0;
            left: 0;
            background-color: #198754;
            overflow-x: hidden;
            transition: 0.5s;
            padding-top: 60px;
          }

          .sidebar a {
            padding: 8px 8px 8px 32px;
            text-decoration: none;
            font-size: 18px;
            color: white;
            display: block;
            transition: 0.3s;
          }

          .sidebar a:hover {
            color: #818181;
          }

          .sidebar .close-btn {
            position: absolute;
            top: 0;
            right: 25px;
            font-size: 36px;
            margin-left: 50px;
          }

          .sidebar-toggle {
            font-size: 20px;
            cursor: pointer;
            background: none;
            border: none;
            color: white;
            padding: 10px;
            margin-top: -5px;
          }

          .sidebar.open {
            width: 250px;
          }

          .text_decoration{
            text-decoration:none;
            font-weight: bold;
            display: flex;
            gap: 3;
            text-aligns: spac
          }
          .text-align{
            text-align:center;
          }
        `}
      </style>
      <Navbar bg="success" className="mb-4" style={{ height: "3.75rem", width:"100rem", marginLeft:"-132px" }}>
        <Container>
          {/* <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
            <Link to="#" className="close-btn" onClick={toggleSidebar}>
              &times;
            </Link>
            <Link to="/logchat" onClick={toggleSidebar}>
              Discussions
            </Link>
            <Link to="/logchat" onClick={toggleSidebar}>
              Communauté
            </Link>
            <Link to="/logchat" onClick={toggleSidebar}>
              Personne connectée 
            </Link>
            <Link to="/logchat" onClick={toggleSidebar}>
              Favoris
              </Link>
            <Link to="/register" onClick={() => { toggleSidebar(); logoutUser(); }}>
              S'inscrire
            </Link>
            <Link to="/logchat" onClick={() => { toggleSidebar(); logoutUser(); }}>
              Se connecter
            </Link>
            <Link to="/logchat" onClick={() => { toggleSidebar(); logoutUser(); }}>
              Se déconnecter
            </Link>
          </div> */}
          
          <Nav className="me-auto my-2" style={{ height: "3.75rem" }}>
            <Stack direction="horizontal" gap={5}>
              {!user && (
                <>
                {/* <button className="sidebar-toggle" onClick={toggleSidebar}>
                ☰ Menu
              </button> */}

                <Link to="/logchat" onClick={toggleSidebar} className="text-white text_decoration">
                Discussions                </Link>
                <Link to="/logchat" onClick={toggleSidebar} className="text-white text_decoration">
                Communauté
                </Link>
                <Link to="/logchat" onClick={toggleSidebar} className="text-white text_decoration">
                Personne connectée 
                </Link>
                <Link to="/logchat" onClick={toggleSidebar} className="text-white text_decoration">
                Favoris
                </Link>
                {/* <Link to="/register" onClick={() => { toggleSidebar(); logoutUser(); }} className="text-white text_decoration">
                  S'inscrire
                </Link> */}
                <Link to="/logchat" onClick={() => { toggleSidebar(); logoutUser(); }} className="text-white text_decoration">
                  Se connecter
                </Link>
                <Link to="/logchat" onClick={() => { toggleSidebar(); logoutUser(); }} className="text-white text_decoration">
                  Se déconnecter
                </Link>
                  
                </>
              )}
              {user && (
                <>
                  <Notifications />
                  <Link onClick={() => logoutUser()} to="/logchat" className="link-light text-decoration-none">
                    Déconnexion
                  </Link>
                  <Link onClick={() => logoutUser()} to="/logchat" className="link-light text-decoration-none">
                    Personne en ligne 
                  </Link>
                  <Link onClick={() => logoutUser()} to="/logchat" className="link-light text-decoration-none">
                    Communauté
                  </Link>
                  <Link onClick={() => logoutUser()} to="/logchat" className="link-light text-decoration-none">
                    Favoris
                  </Link>
                </>
              )}
              
            </Stack>
          </Nav>
        </Container>
      </Navbar>
    </Container>
  );
};

export default NavBar;
