import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import AllCourses from "../components/AllCourses";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const CourseCatalog = () => {
  const [sortCriteria, setSortCriteria] = useState(null);
  const [sortOrder, setSortOrder] = useState({});
  const [filters, setFilters] = useState({
    priceRange: [0, 200000],
    durationRange: [0, 36],
    selectedSchools: [],
    selectedLevels: [],
    internshipAvailable: false,
    certificateAvailable: false,
  });
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Проверка состояния авторизации пользователя
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAuthenticated(!!user);
    });

    return () => unsubscribe();
  }, []);

  const handleSort = (criteria) => {
    const newSortOrder = {
      ...sortOrder,
      [criteria]: sortOrder[criteria] === "asc" ? "desc" : "asc",
    };
    setSortCriteria(criteria);
    setSortOrder(newSortOrder);
  };

  const handleFilterChange = (newFilters) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      ...newFilters,
    }));
  };

  return (
    <div className="text-[#2B2B2B] mt-[30px]">
      <a href="/">
        Главная - <span className="text-[#A6A6A6]">Онлайн-курсы</span>
      </a>
      <h1 className="text-[36px] font-semibold mt-[10px]">Каталог курсов</h1>
      <p>
        Список всех онлайн-курсов с рейтингом, отзывами и детальным описанием
        курса 2021 года. Для удобства поиска курса используйте фильтры,
        сортировку, сравнение и поиск. Мы обновляем информацию о всех курсах
        каждую неделю.
      </p>
      <ul className="text-[#2B2B2B] font-bold flex justify-between mt-[33px] mb-[15px]">
        <li>
          <button className="cursor-pointer text-[#FFFFFF] bg-primary rounded-[50px] h-[40px] px-[10px]">
            Программирование
          </button>
        </li>
        <li>
          <button className="cursor-pointer">Маркетинг</button>
        </li>
        <li>
          <button className="cursor-pointer">Дизайн</button>
        </li>
        <li>
          <button className="cursor-pointer">Аналитика</button>
        </li>
        <li>
          <button className="cursor-pointer">Финансы</button>
        </li>
        <li>
          <button className="cursor-pointer">Управление</button>
        </li>
        <li>
          <button className="cursor-pointer">Контент-маркетинг</button>
        </li>
        <li>
          <button className="cursor-pointer">Иностранные языки</button>
        </li>
      </ul>
      <div className="flex justify-end mr-[70px]">
        <ul className="flex justify-between max-w-[1020px] w-full">
          <li
            className="flex items-center gap-[10px] cursor-pointer w-[150px] justify-center"
            onClick={() => handleSort("title")}
          >
            Курс <img src="sort.svg" alt="" />
          </li>
          <li className="flex items-center gap-[10px] cursor-pointer w-[150px] justify-center">
            Отзывы
          </li>
          <li
            className="flex items-center gap-[10px] cursor-pointer w-[150px] justify-center"
            onClick={() => handleSort("price")}
          >
            Цена <img src="sort.svg" alt="" />
          </li>
          <li
            className="flex items-center gap-[10px] cursor-pointer left-[200px] w-[140px] justify-center"
            onClick={() => handleSort("duration")}
          >
            Длительность <img src="sort.svg" alt="" />
          </li>
          <li className="flex items-center gap-[10px] cursor-pointer w-[150px] justify-center">
            Особенности
          </li>
          <li className="flex items-center gap-[10px] cursor-pointer w-[140px] justify-center">
            Курс
          </li>
        </ul>
      </div>
      <div className="flex justify-between w-full gap-[20px]">
        <div className="mt-[15px]">
          <Sidebar onFilterChange={handleFilterChange} />
        </div>
        <div className="flex flex-col w-[100%]">
          <AllCourses
            sortCriteria={sortCriteria}
            sortOrder={sortOrder[sortCriteria]}
            filters={filters}
            isAuthenticated={isAuthenticated}
            navigate={navigate}
          />
        </div>
      </div>
    </div>
  );
};

export default CourseCatalog;
