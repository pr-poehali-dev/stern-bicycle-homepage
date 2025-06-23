const SpecsSection = () => {
  const specs = [
    { label: "Рама", value: "Карбон высокого модуля" },
    { label: "Вес", value: "8.2 кг" },
    { label: "Колёса", value: "700C x 25мм" },
    { label: "Трансмиссия", value: "Shimano 105, 21 скорость" },
    { label: "Тормоза", value: "Дисковые гидравлические" },
    { label: "Размеры рамы", value: "S, M, L, XL" },
    { label: "Цвета", value: "Матовый чёрный, Серебристый" },
    { label: "Максимальная нагрузка", value: "120 кг" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Технические характеристики
        </h2>
        <p className="text-gray-600 mb-6">
          Подробные спецификации модели STERN 2024
        </p>
      </div>

      <div className="grid gap-3">
        {specs.map((spec, index) => (
          <div
            key={index}
            className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0"
          >
            <span className="font-medium text-gray-700">{spec.label}</span>
            <span className="text-gray-900 font-semibold">{spec.value}</span>
          </div>
        ))}
      </div>

      <div className="bg-purple-50 p-4 rounded-lg">
        <h4 className="font-semibold text-purple-900 mb-2">🏆 Награды</h4>
        <ul className="text-sm text-purple-800 space-y-1">
          <li>• Лучший городской велосипед 2024</li>
          <li>• Награда за инновационный дизайн</li>
          <li>• Выбор редакции BikeWorld</li>
        </ul>
      </div>
    </div>
  );
};

export default SpecsSection;
