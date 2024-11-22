import React, { useState } from "react";
import Swal from "sweetalert2";

const AddReviewForm = ({ courseId, onAddReview }) => {
  const [formData, setFormData] = useState({
    title: "",
    text: "",
    author: "",
    rating: 5,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!courseId) {
      Swal.fire("Ошибка", "Course ID is undefined", "error");
      return;
    }
    onAddReview(formData);
    setFormData({
      title: "",
      text: "",
      author: "",
      rating: 5,
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto bg-white p-8 rounded shadow-md"
    >
      <h2 className="text-2xl font-bold mb-4">Добавить отзыв</h2>
      <div className="mb-4">
        <label className="block text-gray-700">Заголовок</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Текст отзыва</label>
        <textarea
          name="text"
          value={formData.text}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Автор</label>
        <input
          type="text"
          name="author"
          value={formData.author}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Рейтинг</label>
        <input
          type="number"
          name="rating"
          value={formData.rating}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
          min="1"
          max="5"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Добавить отзыв
      </button>
    </form>
  );
};

export default AddReviewForm;
