import React from "react";

const MainMenu = () => {
  return (
    <div className="p-8 flex items-center bg-[#F8F8F8]">
      <div>
        <h1 className="text-4xl font-bold">
          Добро пожаловать на платформу онлайн-курсов
        </h1>
        <p className="text-lg mt-4">
          Изучайте новые навыки с элементами геймификации
          <br />
          Выбирайте курс по отзывам, цене, продолжительности и другим критериям!
        </p>
      </div>
      <div>
        <img src="./main-photo.svg" alt="" />
      </div>
    </div>
  );
};

export default MainMenu;
