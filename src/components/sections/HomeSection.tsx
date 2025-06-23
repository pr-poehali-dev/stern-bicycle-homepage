import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HomeSection = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Добро пожаловать в мир STERN
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          Инновационные велосипеды, созданные для тех, кто ценит качество, стиль
          и производительность. Каждая модель STERN — это результат многолетних
          исследований и страсти к велоспорту.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="text-center p-4 bg-purple-50 rounded-lg">
          <Icon
            name="Award"
            size={32}
            className="mx-auto mb-2 text-purple-600"
          />
          <h3 className="font-semibold">Премиальное качество</h3>
        </div>
        <div className="text-center p-4 bg-purple-50 rounded-lg">
          <Icon name="Zap" size={32} className="mx-auto mb-2 text-purple-600" />
          <h3 className="font-semibold">Высокая скорость</h3>
        </div>
        <div className="text-center p-4 bg-purple-50 rounded-lg">
          <Icon
            name="Shield"
            size={32}
            className="mx-auto mb-2 text-purple-600"
          />
          <h3 className="font-semibold">Надёжность</h3>
        </div>
      </div>

      <Button className="w-full bg-purple-600 hover:bg-purple-700">
        <Icon name="ArrowRight" size={20} />
        Узнать больше
      </Button>
    </div>
  );
};

export default HomeSection;
