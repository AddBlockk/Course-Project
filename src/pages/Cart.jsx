import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, purchaseCourse } from "../redux/actions";
import Swal from "sweetalert2";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (courseTitle) => {
    dispatch(removeFromCart(courseTitle));
  };

  const handlePurchase = (course) => {
    dispatch(purchaseCourse(course));
    dispatch(removeFromCart(course.title));
    Swal.fire(
      "Успешно",
      `Курс "${course.title}" успешно приобретен!`,
      "success"
    );
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Корзина</h2>
      {cart.length === 0 ? (
        <p>Ваша корзина пуста.</p>
      ) : (
        <div className="w-full">
          <ul>
            {cart.map((course, index) => (
              <li key={index} className="mb-4 flex gap-[60px]">
                <div className="flex text-[#2B2B2B] border-[#F0F0F0] border-[1px] rounded-[5px] justify-between h-[150px] items-center px-[50px] cursor-default w-full">
                  <p className="text-[18px] font-bold w-[150px]">
                    {course.title}
                  </p>
                  <div className="w-[150px]">
                    <h2 className="text-[18px] font-bold">{course.school}</h2>
                    <div className="flex gap-[10px] items-center">
                      <img src="./star.svg" alt="" />
                      <p className="text-[18px] text-[#2B2B2B] font-bold">
                        {course.rating}
                      </p>
                    </div>
                    <p className="text-[#B5B5B5] text-[12px]">
                      {course.reviews}
                    </p>
                  </div>
                  <div className="w-[150px]">
                    <p className="text-[12px] font-semibold">
                      <span className="text-[16px] font-bold">
                        {course.price}
                      </span>{" "}
                      руб
                    </p>
                    <p className="text-[#00C213] text-[12px] font-bold">
                      от{" "}
                      <span className="text-[16px]">{course.monthlyPrice}</span>{" "}
                      руб./месяц
                    </p>
                  </div>
                  <div className="text-[#2B2B2B] flex items-center gap-[10px]">
                    <img src="./clock.svg" alt="" />
                    {course.availability}
                  </div>
                  <div className="text-[#2B2B2B] font-semibold flex flex-col gap-[10px] w-[150px]">
                    <div className="flex gap-[10px]">
                      <img src="./calendar.svg" alt="" />
                      <p>{course.duration}</p>
                    </div>
                    <div className="flex gap-[10px]">
                      <img src="./portfel.svg" alt="" />
                      <p>{course.internship}</p>
                    </div>
                    <div className="flex gap-[10px]">
                      <img src="./level.svg" alt="" />
                      <p>{course.level}</p>
                    </div>
                    <div className="flex gap-[10px]">
                      <img src="./diplom.svg" alt="" />
                      <p>{course.diploma}</p>
                    </div>
                  </div>
                  <div className="text-[#2B2B2B] font-bold flex flex-col gap-[20px]">
                    <button
                      className="text-white bg-red-500 rounded-[100px] py-[7px] w-[200px]"
                      onClick={() => handleRemoveFromCart(course.title)}
                    >
                      Убрать из корзины
                    </button>
                    <button
                      className="text-white bg-green-500 rounded-[100px] py-[7px] w-[200px]"
                      onClick={() => handlePurchase(course)}
                    >
                      Приобрести
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Cart;
