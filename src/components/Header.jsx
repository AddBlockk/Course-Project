import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";

const Header = () => {
  const [user, setUser] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search?query=${searchQuery}`);
  };

  const links = [
    { label: "Курсы", path: "/Courses" },
    { label: "Отзывы о курсах", path: "/Reviews" },
    { label: "Корзина", path: "/Cart" },
  ];

  return (
    <div className="h-[70px] items-center flex">
      <h1 className="text-[24px] font-semibold">
        <Link to="/">Boltach</Link>
      </h1>
      <ul className="flex space-x-4 ml-16 gap-4">
        {links.map((link, index) => (
          <li key={index}>
            <NavLink
              to={link.path}
              className="text-[16px] font-semibold"
              style={({ isActive }) => ({
                color: isActive ? "#24b960" : "inherit",
              })}
            >
              {link.label}
            </NavLink>
          </li>
        ))}
        {user ? (
          <li>
            <NavLink
              to="/Profile"
              className="text-[16px] font-semibold"
              style={({ isActive }) => ({
                color: isActive ? "#24b960" : "inherit",
              })}
            >
              Профиль
            </NavLink>
          </li>
        ) : (
          <li>
            <NavLink
              to="/Login"
              className="text-[16px] font-semibold"
              style={({ isActive }) => ({
                color: isActive ? "#24b960" : "inherit",
              })}
            >
              Вход
            </NavLink>
          </li>
        )}
      </ul>
      <form className="ml-auto flex items-center" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Искать курсы"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="px-4 py-2 border rounded-l-md focus:outline-none"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-gray-100 border border-l-0 rounded-r-md"
        >
          Поиск
        </button>
      </form>
    </div>
  );
};

export default Header;
