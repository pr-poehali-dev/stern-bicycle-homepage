import Icon from "@/components/ui/icon";

const AboutSection = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          О велосипеде STERN
        </h2>
        <p className="text-gray-600 mb-6">
          Модель STERN 2024 представляет собой идеальное сочетание современных
          технологий и классического дизайна. Разработанный для городских
          поездок и активного отдыха.
        </p>
      </div>

      <div className="space-y-4">
        <div className="flex items-start space-x-3">
          <Icon name="Bicycle" className="text-purple-600 mt-1" size={20} />
          <div>
            <h4 className="font-semibold">Карбоновая рама</h4>
            <p className="text-sm text-gray-600">
              Лёгкая и прочная конструкция для максимальной производительности
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-3">
          <Icon name="Cog" className="text-purple-600 mt-1" size={20} />
          <div>
            <h4 className="font-semibold">21-скоростная трансмиссия</h4>
            <p className="text-sm text-gray-600">
              Плавное переключение передач для любых условий
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-3">
          <Icon
            name="CircleCheckBig"
            className="text-purple-600 mt-1"
            size={20}
          />
          <div>
            <h4 className="font-semibold">Дисковые тормоза</h4>
            <p className="text-sm text-gray-600">
              Надёжное торможение в любую погоду
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-purple-100 to-purple-50 p-4 rounded-lg">
        <h4 className="font-semibold mb-2">Гарантия качества</h4>
        <p className="text-sm text-gray-600">
          2 года международной гарантии и бесплатное обслуживание в первый год
        </p>
      </div>
    </div>
  );
};

export default AboutSection;
