import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../../index.tsx";
import "./Header.css";

const Header: React.FC = observer(() => {
  const navigate = useNavigate();
  const { authStore } = useContext(Context);

  const handleProfileClick = () => {
    navigate("/profile");
  };

  return (
    <header className="header">
      <div className="banner">
        <div className="banner-text">
          DRONEMART - ПРОФЕССИОНАЛЬНЫЕ ДРОНЫ ДЛЯ БИЗНЕСА И ТВОРЧЕСТВА
        </div>
      </div>

      <div className="header-content">
        <div className="header-brand">
          <Link className="hrefMain" to="/">
            <h1 className="logo">DRONEMART</h1>
            <span className="tagline">ТОЧНОСТЬ В КАЖДОМ ПОЛЕТЕ</span>
          </Link>
        </div>

        <div className="header-profile" onClick={handleProfileClick}>
          <div className="profile-avatar">
            {authStore.user.email?.charAt(0).toUpperCase() || "U"}
          </div>
          <span className="profile-name">{authStore.user.email || "User"}</span>
        </div>
      </div>
    </header>
  );
});

export default Header;
