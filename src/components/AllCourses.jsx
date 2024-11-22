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

const AllCourses = ({ sortCriteria, sortOrder, filters }) => {
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

  const filteredCourses = courses.filter((course) => {
    const {
      priceRange,
      durationRange,
      selectedSchools,
      selectedLevels,
      internshipAvailable,
      certificateAvailable,
    } = filters;
    const priceInRange =
      course.price >= priceRange[0] && course.price <= priceRange[1];
    const durationInRange =
      course.duration >= durationRange[0] &&
      course.duration <= durationRange[1];
    const schoolInSelected =
      selectedSchools.length === 0 || selectedSchools.includes(course.school);
    const levelInSelected =
      selectedLevels.length === 0 || selectedLevels.includes(course.level);
    const internshipMatches =
      !internshipAvailable || course.internship === "Стажировка";
    const certificateMatches =
      !certificateAvailable || course.diploma === "Диплом";

    return (
      priceInRange &&
      durationInRange &&
      schoolInSelected &&
      levelInSelected &&
      internshipMatches &&
      certificateMatches
    );
  });

  const sortedCourses = [...filteredCourses].sort((a, b) => {
    if (sortCriteria === "title") {
      return sortOrder === "asc"
        ? a.title.localeCompare(b.title)
        : b.title.localeCompare(a.title);
    }
    if (sortCriteria === "school") {
      return sortOrder === "asc"
        ? a.school.localeCompare(b.school)
        : b.school.localeCompare(a.school);
    }
    if (sortCriteria === "price") {
      return sortOrder === "asc" ? a.price - b.price : b.price - a.price;
    }
    if (sortCriteria === "duration") {
      return sortOrder === "asc"
        ? a.duration - b.duration
        : b.duration - a.duration;
    }
    return 0;
  });

  return (
    <div className="w-full">
      {sortedCourses.map((course, index) => (
        <CourseCard key={index} {...course} />
      ))}
    </div>
  );
};

export default AllCourses;
