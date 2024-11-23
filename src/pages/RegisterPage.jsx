import React, { useState } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/userSlice";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Initialize navigate

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      Swal.fire("Ошибка", "Пароли не совпадают", "error");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      await updateProfile(userCredential.user, { displayName: formData.name });
      dispatch(setUser({ name: formData.name, email: formData.email }));
      Swal.fire("Успешно", "Вы успешно зарегистрировались", "success").then(
        () => {
          navigate("/"); // Redirect to homepage
        }
      );
    } catch (error) {
      Swal.fire("Ошибка", error.message, "error");
    }
  };

  return (
    <div className="p-8">
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto bg-white p-8 rounded shadow-md"
      >
        <h2 className="text-2xl font-bold mb-4">Регистрация</h2>
        <div className="mb-4">
          <label className="block text-gray-700">Имя</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Пароль</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Подтвердите пароль</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="flex justify-center items-center mb-[20px]">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Зарегистрироваться
          </button>
        </div>
        <div className="flex justify-end">
          <Link to="/Login">Есть аккаунт?</Link>
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;
