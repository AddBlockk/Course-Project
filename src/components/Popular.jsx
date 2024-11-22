import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../redux/actions";

const CourseCard = ({
  title,
  school,
  rating,
  reviews,
  price,
  monthlyPrice,
  availability,
  duration,
  internship,
  level,
  diploma,
}) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const isInCart = cart.some((course) => course.title === title);

  const handleButtonClick = () => {
    if (isInCart) {
      dispatch(removeFromCart(title));
    } else {
      dispatch(
        addToCart({
          title,
          school,
          rating,
          reviews,
          price,
          monthlyPrice,
          availability,
          duration,
          internship,
          level,
          diploma,
        })
      );
    }
  };
  return (
    <div className="mt-[15px]">
      <div className="flex text-[#2B2B2B] border-[#F0F0F0] border-[1px] rounded-[5px] justify-between h-[150px] items-center px-[50px] cursor-default">
        <p className="text-[18px] font-bold w-[150px]">{title}</p>
        <div className="w-[150px]">
          <h2 className="text-[18px] font-bold">{school}</h2>
          <div className="flex gap-[10px] items-center">
            <img src="./star.svg" alt="" />
            <p className="text-[18px] text-[#2B2B2B] font-bold">{rating}</p>
          </div>
          <p className="text-[#B5B5B5] text-[12px]">{reviews}</p>
        </div>
        <div className="w-[150px]">
          <p className="text-[12px] font-semibold">
            <span className="text-[16px] font-bold">{price}</span> руб
          </p>
          <p className="text-[#00C213] text-[12px] font-bold">
            от <span className="text-[16px]">{monthlyPrice}</span> руб./месяц
          </p>
        </div>
        <div className="text-[#2B2B2B] flex items-center gap-[10px]">
          <img src="./clock.svg" alt="" />
          {availability}
        </div>
        <div className="text-[#2B2B2B] font-semibold flex flex-col gap-[10px] w-[150px]">
          <div className="flex gap-[10px]">
            <img src="./calendar.svg" alt="" />
            <p>{duration}</p>
          </div>
          <div className="flex gap-[10px]">
            <img src="./portfel.svg" alt="" />
            <p>{internship}</p>
          </div>
          <div className="flex gap-[10px]">
            <img src="./level.svg" alt="" />
            <p>{level}</p>
          </div>
          <div className="flex gap-[10px]">
            <img src="./diplom.svg" alt="" />
            <p>{diploma}</p>
          </div>
        </div>
        <div className="text-[#2B2B2B] font-bold flex flex-col gap-[8px]">
          <div>
            <button
              className={`text-white bg-primary rounded-[100px] py-[7px] w-[160px] ${
                isInCart ? "bg-red-500" : ""
              }`}
              onClick={handleButtonClick}
            >
              {isInCart ? "Убрать из корзины" : "Приобрести"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Popular = () => {
  const courses = [
    {
      title: "Профессия веб-разработчик",
      school: "Frontend",
      rating: "4.5",
      reviews: "Отзывы о школе 58",
      price: 66800,
      monthlyPrice: "4 745",
      availability: "В любое время",
      duration: 3,
      internship: "Стажировка",
      level: "Начальный",
      diploma: "Диплом",
    },
    {
      title: "Основы вёрстки",
      school: "Верстальщик",
      rating: "4.7",
      reviews: "Отзывы о школе 120",
      price: 45000,
      monthlyPrice: "3 500",
      availability: "В любое время",
      duration: 2,
      internship: "Нет",
      level: "Средний",
      diploma: "Сертификат",
    },
    {
      title: "Графический дизайн",
      school: "Design",
      rating: "4.3",
      reviews: "Отзывы о школе 80",
      price: 50000,
      monthlyPrice: "4 000",
      availability: "В любое время",
      duration: 4,
      internship: "Нет",
      level: "Продвинутый",
      diploma: "Диплом",
    },
    {
      title: "Full Stack",
      school: "Frontend+Backend",
      rating: "4.6",
      reviews: "Отзывы о школе 95",
      price: 70000,
      monthlyPrice: "5 500",
      availability: "В любое время",
      duration: 5,
      internship: "Стажировка",
      level: "Средний",
      diploma: "Сертификат",
    },
    {
      title: "Профессия бекенд-разработчик",
      school: "Backend",
      rating: "4.8",
      reviews: "Отзывы о школе 150",
      price: 80000,
      monthlyPrice: "6 000",
      availability: "В любое время",
      duration: 6,
      internship: "Нет",
      level: "Продвинутый",
      diploma: "Диплом",
    },
  ];

  return (
    <div className="mt-[40px]">
      <h1 className="text-4xl font-bold flex justify-center">
        Популярные онлайн-курсы
      </h1>
      {/* <ul className="text-[#2B2B2B] font-bold flex justify-between mt-[33px] mb-[15px]">
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
      </ul> */}
      <div>
        {courses.map((course, index) => (
          <CourseCard key={index} {...course} />
        ))}
      </div>
      <div className="flex justify-center items-center mt-[25px]">
        <button className="text-[#8C8C8C] px-[42px] py-[12px] rounded-[100px] border-[#D7D7D7] hover:bg-[#D7D7D7] hover:text-[#fff] transition-all border-[1px]">
          Посмотреть ещё
        </button>
      </div>
    </div>
  );
};

export default Popular;
