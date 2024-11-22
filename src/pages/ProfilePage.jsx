import React, { useEffect, useState } from "react";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import LoginPage from "./LoginPage";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [displayName, setDisplayName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      if (user) {
        setDisplayName(user.displayName || "");
      } else {
        navigate("/login");
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      Swal.fire("Успешно", "Вы успешно вышли из системы", "success");
      navigate("/login");
    } catch (error) {
      Swal.fire("Ошибка", error.message, "error");
    }
  };

  return (
    <div>
      {user ? (
        <div className="p-8">
          <div className="max-w-md mx-auto bg-white p-8 rounded shadow-md">
            <h2 className="text-2xl font-bold mb-4">Профиль</h2>
            <div className="mb-4">
              <label className="block text-gray-700">Имя</label>
              <input
                type="text"
                className="w-full px-3 py-2 border rounded"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                readOnly
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                className="w-full px-3 py-2 border rounded"
                value={user?.email || ""}
                readOnly
              />
            </div>
            <div className="flex justify-center">
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-4 py-2 rounded"
              >
                Выйти
              </button>
            </div>
          </div>
        </div>
      ) : (
        <LoginPage />
      )}
    </div>
  );
};

export default Profile;
