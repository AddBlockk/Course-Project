import React, { useState } from "react";

const Sidebar = ({ onFilterChange }) => {
  const [priceRange, setPriceRange] = useState([0, 200000]);
  const [durationRange, setDurationRange] = useState([0, 36]);
  const [selectedSchools, setSelectedSchools] = useState([]);
  const [selectedLevels, setSelectedLevels] = useState([]);
  const [internshipAvailable, setInternshipAvailable] = useState(false);
  const [certificateAvailable, setCertificateAvailable] = useState(false);

  const handlePriceChange = (e) => {
    setPriceRange([Number(e.target.min), Number(e.target.value)]);
    onFilterChange({
      priceRange: [Number(e.target.min), Number(e.target.value)],
    });
  };

  const handleDurationChange = (e) => {
    setDurationRange([Number(e.target.min), Number(e.target.value)]);
    onFilterChange({
      durationRange: [Number(e.target.min), Number(e.target.value)],
    });
  };

  const handleSchoolChange = (e) => {
    const { value, checked } = e.target;
    setSelectedSchools((prev) =>
      checked ? [...prev, value] : prev.filter((school) => school !== value)
    );
    onFilterChange({
      selectedSchools: checked
        ? [...selectedSchools, value]
        : selectedSchools.filter((school) => school !== value),
    });
  };

  const handleLevelChange = (e) => {
    const { value, checked } = e.target;
    setSelectedLevels((prev) =>
      checked ? [...prev, value] : prev.filter((level) => level !== value)
    );
    onFilterChange({
      selectedLevels: checked
        ? [...selectedLevels, value]
        : selectedLevels.filter((level) => level !== value),
    });
  };

  const handleInternshipChange = (e) => {
    setInternshipAvailable(e.target.checked);
    onFilterChange({ internshipAvailable: e.target.checked });
  };

  const handleCertificateChange = (e) => {
    setCertificateAvailable(e.target.checked);
    onFilterChange({ certificateAvailable: e.target.checked });
  };

  return (
    <div className="w-[300px] p-4 bg-white rounded-lg border-[1px] border-gray-200">
      <h2 className="text-xl font-bold mb-4 pb-[20px] border-b-[1px]">
        Фильтры
      </h2>

      <div className="mb-4">
        <h3 className="text-lg font-bold mb-2">Цена</h3>
        <div className="mt-2 gap-[10px]">
          <div className="mb-[5px]">
            <label className="flex gap-[10px]">
              <input type="radio" name="priceType" value="paid" />
              Платные
            </label>
          </div>
          <label className="flex gap-[10px]">
            <input type="radio" name="priceType" value="free" />
            Бесплатные
          </label>
        </div>
        <input
          type="range"
          min={priceRange[0]}
          max={200000}
          value={priceRange[1]}
          onChange={handlePriceChange}
          className="w-full accent-primary mt-[30px]"
        />
        <div className="flex items-center justify-between mb-2">
          <span>{priceRange[0]} руб</span>
          <span>{priceRange[1]} руб</span>
        </div>
      </div>

      {/* Schools Filter */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Категории</h3>
        <div className="flex flex-col">
          <label className="flex gap-[10px]">
            <input
              type="checkbox"
              value="Frontend"
              onChange={handleSchoolChange}
            />
            Frontend
          </label>
          <label className="flex gap-[10px]">
            <input
              type="checkbox"
              value="Backend"
              onChange={handleSchoolChange}
            />
            Backend
          </label>
          <label className="flex gap-[10px]">
            <input
              type="checkbox"
              value="Frontend+Backend"
              onChange={handleSchoolChange}
            />
            Frontend+Backend
          </label>
          <label className="flex gap-[10px]">
            <input
              type="checkbox"
              value="Design"
              onChange={handleSchoolChange}
            />
            Design
          </label>
          <label className="flex gap-[10px]">
            <input
              type="checkbox"
              value="Верстальщик"
              onChange={handleSchoolChange}
            />
            Верстальщик
          </label>
        </div>
      </div>

      {/* Difficulty Level Filter */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Уровень сложности</h3>
        <div className="flex flex-col">
          <label className="flex gap-[10px]">
            <input
              type="checkbox"
              value="Начальный"
              onChange={handleLevelChange}
            />
            Начальный
          </label>
          <label className="flex gap-[10px]">
            <input
              type="checkbox"
              value="Средний"
              onChange={handleLevelChange}
            />
            Средний
          </label>
          <label className="flex gap-[10px]">
            <input
              type="checkbox"
              value="Профессиональный"
              onChange={handleLevelChange}
            />
            Профессиональный
          </label>
          <label className="flex gap-[10px]">
            <input
              type="checkbox"
              value="Для детей"
              onChange={handleLevelChange}
            />
            Для детей
          </label>
        </div>
      </div>

      {/* Duration Filter */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Длительность (месяцев)</h3>
        <div className="flex items-center justify-between mb-2">
          <span>{durationRange[0]} мес</span>
          <span>{durationRange[1]} мес</span>
        </div>
        <input
          type="range"
          min={durationRange[0]}
          max={36}
          value={durationRange[1]}
          onChange={handleDurationChange}
          className="w-full accent-primary"
        />
      </div>

      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg font-semibold mb-2">Возможность стажировки</h3>
        <label>
          <input type="checkbox" onChange={handleInternshipChange} />
        </label>
      </div>

      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg font-semibold mb-2">
          Возможность получить сертификат
        </h3>
        <label>
          <input type="checkbox" onChange={handleCertificateChange} />
        </label>
      </div>
    </div>
  );
};

export default Sidebar;
