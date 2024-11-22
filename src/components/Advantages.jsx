import React from "react";

const Advantages = () => {
  return (
    <div className="mt-[52px]">
      <h1 className="text-4xl font-bold flex justify-center">
        Наши преимущества
      </h1>
      <div className="flex justify-between gap-[100px] mt-[72px] mb-[70px]">
        <div className="">
          <div className="flex gap-[30px]">
            <img src="./advantages1.svg" alt="" />
            <h2 className="text-[20px] text-[#2B2B2B] font-bold">
              Большой выбор <br /> онлайн-курсов
            </h2>
          </div>
          <p className="mt-[25px] text-[#7E7E7E]">
            Мы аккумулируем большое количество онлайн-курсов по различным
            направлениям, позволяя сравнивать их, и выбирать то, что вам
            нравится
          </p>
        </div>
        <div className="">
          <div className="flex gap-[30px]">
            <img src="./advantages2.svg" alt="" />
            <h2 className="text-[20px] text-[#2B2B2B] font-bold">
              Большой выбор <br /> онлайн-курсов
            </h2>
          </div>
          <p className="mt-[25px] text-[#7E7E7E]">
            Мы регулярно обновляем наши базы данных, чтобы предоставлять вам
            только самую свежую информацию о новых курсах, старте обучения,
            скидках и предложениях от нас
          </p>
        </div>
        <div className="">
          <div className="flex gap-[30px]">
            <img src="./advantages3.svg" alt="" />
            <h2 className="text-[20px] text-[#2B2B2B] font-bold">
              Большой выбор <br /> онлайн-курсов
            </h2>
          </div>
          <p className="mt-[25px] text-[#7E7E7E]">
            Вы можете с легкостью найти подходящий курс в нашем каталоге по
            различным фильтрам
          </p>
        </div>
      </div>
    </div>
  );
};

export default Advantages;
