/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Footer = () => {
  return (
    <div className="bg-black text-white mt-[40px]">
      <div className="max-w-[1200px] m-auto py-[40px] flex justify-between">
        <div>
          <h2 className="font-bold mb-[10px] uppercase tracking-widest">
            Категории
          </h2>
          <ul className="flex flex-col gap-[10px] font-thin">
            <li>
              <a href="#">Frontend</a>
            </li>
            <li>
              <a href="#">Backend</a>
            </li>
            <li>
              <a href="#">Frontend+Backend</a>
            </li>
            <li>
              <a href="#">Design</a>
            </li>
            <li>
              <a href="#">Верстальщик</a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="font-bold mb-[10px] uppercase tracking-widest">
            Курсы
          </h2>
          <ul className="flex flex-col gap-[10px] font-thin">
            <li>
              <a href="#">JS</a>
            </li>
            <li>
              <a href="#">React</a>
            </li>
            <li>
              <a href="#">HTML</a>
            </li>
            <li>
              <a href="#">CSS</a>
            </li>
            <li>
              <a href="#">PHP</a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="font-bold mb-[10px] uppercase tracking-widest">
            Отзывы о курсах
          </h2>
          <ul className="flex flex-col gap-[10px] font-thin">
            <li>
              <a href="#">Отзывы о курсе JS</a>
            </li>
            <li>
              <a href="#">Отзывы о курсе React</a>
            </li>
            <li>
              <a href="#">Отзывы о курсе HTML</a>
            </li>
            <li>
              <a href="#">Отзывы о курсе CSS</a>
            </li>
            <li>
              <a href="#">Отзывы о курсе PHP</a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="font-bold mb-[10px] uppercase tracking-widest">
            Курсы
          </h2>
          <ul className="flex flex-col gap-[10px] font-thin">
            <li>
              <a href="#">С дипломом</a>
            </li>
            <li>
              <a href="#">С трудоустройством</a>
            </li>
            <li>
              <a href="#">Платные</a>
            </li>
            <li>
              <a href="#">Бесплатные</a>
            </li>
            <li>
              <a href="#">Ближайшие по дате старта</a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="font-bold mb-[10px] uppercase tracking-widest">
            Уровень сложности
          </h2>
          <ul className="flex flex-col gap-[10px] font-thin">
            <li>
              <a href="#">Начальный</a>
            </li>
            <li>
              <a href="#">Средний</a>
            </li>
            <li>
              <a href="#">Профессиональный</a>
            </li>
            <li>
              <a href="#">Для детей</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex max-w-[1200px] m-auto justify-between items-center pb-[30px]">
        <div className="flex gap-[50px] items-center">
          <div>Boltach</div>
          <p className="text-[12px]">© 2024. Boltach. Все права защищены</p>
        </div>
        <div className="flex items-center">
          <div className="h-[14px] flex gap-[20px]">
            <img src="./vk.svg" alt="" />
            <img src="./tg.svg" alt="" />
          </div>
          <p className="ml-[50px]">Пользовательское соглашение</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
