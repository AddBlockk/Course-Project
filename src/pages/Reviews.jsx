import React, { useState, useEffect } from "react";
import reviewsData from "../reviews.json";
import { db } from "../firebase";
import {
  addDoc,
  collection,
  serverTimestamp,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import Swal from "sweetalert2";
import AddReviewForm from "../components/AddReviewForm";

const Reviews = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [reviews, setReviews] = useState(reviewsData);

  const handleViewReviews = (course) => {
    setSelectedCourse(course);
  };

  const handleBack = () => {
    setSelectedCourse(null);
  };

  const handleAddReview = async (newReview) => {
    try {
      if (!selectedCourse || !selectedCourse.id) {
        throw new Error("Course ID is undefined");
      }
      await addDoc(collection(db, "reviews"), {
        ...newReview,
        courseId: selectedCourse.id,
        timestamp: serverTimestamp(),
      });
      Swal.fire("Успешно", "Отзыв успешно добавлен", "success");
      // Обновите состояние отзывов, если необходимо
      fetchReviews();
    } catch (error) {
      Swal.fire("Ошибка", error.message, "error");
    }
  };

  const fetchReviews = async () => {
    if (!selectedCourse) return;
    const reviewsCollection = collection(db, "reviews");
    const q = query(
      reviewsCollection,
      where("courseId", "==", selectedCourse.id)
    );
    const querySnapshot = await getDocs(q);
    const reviewsData = querySnapshot.docs.map((doc) => doc.data());
    console.log("Fetched reviews:", reviewsData); // Добавьте это для отладки
    setReviews((prevReviews) =>
      prevReviews.map((course) =>
        course.id === selectedCourse.id
          ? { ...course, reviews: [...course.reviews, ...reviewsData] }
          : course
      )
    );
  };

  useEffect(() => {
    if (selectedCourse) {
      fetchReviews();
    }
  }, [selectedCourse]);

  if (selectedCourse) {
    return (
      <div className="text-[#2B2B2B] mt-[30px]">
        <a href="/">
          Главная - <span className="text-[#A6A6A6]">Отзывы-курсов</span>
        </a>
        <div className="flex items-center gap-[50px]">
          <div>
            <h1 className="text-[36px] font-semibold mt-[10px]">
              Отзывы о курсах
            </h1>
            <p>Оценки качества курсов от пользователей.</p>
          </div>
          <button
            className="text-white bg-primary px-[46px] rounded-[100px] h-[50px] font-semibold mt-[20px]"
            onClick={handleBack}
          >
            Назад
          </button>
        </div>
        <div className="mt-[30px]">
          <h2 className="text-[24px] font-semibold">{selectedCourse.title}</h2>
          <div className="inline-flex items-center gap-[20px]">
            <img
              src={selectedCourse.image}
              alt={selectedCourse.title}
              className="max-w-[100px] max-h-[100px] rounded-full"
            />
            <div className="flex gap-[10px] items-center">
              <img src="./star.svg" alt="" className="w-[24px]" />
              <h2 className="text-[30px] font-bold">5</h2>
            </div>
          </div>
          <div className="text-[#8C8C8C]">
            {selectedCourse.reviews.length} отзывов от пользователей
          </div>
          <div className="mt-[20px] inline-flex w-full gap-[100px]">
            <div>
              {selectedCourse.reviews.map((review, index) => (
                <div
                  key={index}
                  className="bg-[#F6F7FF] rounded-[5px] px-[40px] py-[32px] w-full mb-[20px]"
                >
                  <div className="flex gap-[20px] items-center justify-between">
                    <h2 className="text-[24px] font-bold">{review.title}</h2>
                    <div className="flex gap-[5px]">
                      {[...Array(5)].map((_, i) => (
                        <img key={i} src="./star.svg" alt="" width={20} />
                      ))}
                    </div>
                  </div>
                  <div className="mt-[50px]">
                    <p>{review.text}</p>
                    <p className="mt-[20px]">
                      {review.author}, {review.date}
                    </p>
                    <button
                      href="#"
                      className="text-[#00C213] flex items-center gap-[10px] font-bold mt-[20px]"
                    >
                      Читать полностью <img src="./arrow.svg" alt="" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-[#F6F7FF] rounded-[20px] inline-flex flex-col items-center max-w-[350px] p-[20px] h-full">
              <p className="text-center">{selectedCourse.info}</p>
              <div>
                <button className="text-white bg-primary px-[46px] py-[13px] rounded-[100px] font-semibold mt-[20px]">
                  Узнать больше о курсе
                </button>
              </div>
            </div>
          </div>
        </div>
        <AddReviewForm
          courseId={selectedCourse.id}
          onAddReview={handleAddReview}
        />
      </div>
    );
  }

  return (
    <div className="text-[#2B2B2B] mt-[30px]">
      <a href="/">
        Главная - <span className="text-[#A6A6A6]">Отзывы-курсов</span>
      </a>
      <h1 className="text-[36px] font-semibold mt-[10px]">Отзывы о курсах</h1>
      <p>Оценки качества курсов от пользователей.</p>
      <div className="grid grid-cols-3 gap-[20px] mt-[30px]">
        {reviewsData.map((course, index) => (
          <div
            key={index}
            className="flex border-[#F0F0F0] border-[1px] rounded-[5px] px-[20px] py-[20px]"
          >
            <img
              src={course.image}
              alt={course.title}
              className="max-w-[100px] max-h-[100px] rounded-full"
            />
            <div className="ml-[30px] flex flex-col gap-[20px]">
              <p className="font-semibold">{course.title}</p>
              <button
                className="text-white bg-primary px-[46px] py-[13px] rounded-[100px] font-semibold"
                onClick={() => handleViewReviews({ ...course, id: index })}
              >
                Просмотр отзывов
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
