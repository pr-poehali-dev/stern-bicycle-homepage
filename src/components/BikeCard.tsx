import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface BikeCardProps {
  title?: string;
  model?: string;
  price?: string;
  originalPrice?: string;
  features?: string[];
  imageUrl?: string;
  isNew?: boolean;
}

const BikeCard = ({
  title = "🚴‍♂️ Специальное предложение",
  model = "STERN Pro X1",
  price = "89 990 ₽",
  originalPrice = "119 990 ₽",
  features = [
    "Карбоновая рама",
    "21-скоростная трансмиссия",
    "Гидравлические тормоза",
    "LED-подсветка",
  ],
  imageUrl = "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop",
  isNew = true,
}: BikeCardProps) => {
  return (
    <Card className="overflow-hidden bg-gradient-to-r from-blue-50 to-purple-50 border-0 shadow-xl">
      {/* Шапка */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 text-center">
        <h2 className="text-xl font-bold">{title}</h2>
        {isNew && (
          <Badge className="mt-2 bg-yellow-400 text-yellow-900 hover:bg-yellow-400">
            НОВИНКА
          </Badge>
        )}
      </div>

      {/* Основной контент */}
      <div className="p-6">
        <div className="grid md:grid-cols-2 gap-6 items-center">
          {/* Изображение велосипеда */}
          <div className="relative">
            <img
              src={imageUrl}
              alt={model}
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            <div className="absolute top-2 right-2">
              <Badge className="bg-red-500 hover:bg-red-500 text-white">
                -25%
              </Badge>
            </div>
          </div>

          {/* Информация о велосипеде */}
          <div className="space-y-4">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{model}</h3>
              <div className="flex items-center gap-3">
                <span className="text-3xl font-bold text-blue-600">
                  {price}
                </span>
                <span className="text-lg text-gray-500 line-through">
                  {originalPrice}
                </span>
              </div>
            </div>

            {/* Особенности */}
            <div className="space-y-2">
              <h4 className="font-semibold text-gray-800 flex items-center gap-2">
                <Icon name="Star" size={16} className="text-yellow-500" />
                Ключевые особенности:
              </h4>
              <ul className="space-y-1">
                {features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2 text-sm text-gray-600"
                  >
                    <Icon
                      name="Check"
                      size={14}
                      className="text-green-500 flex-shrink-0"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Кнопки действий */}
            <div className="flex gap-3 pt-2">
              <Button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                <Icon name="ShoppingCart" size={16} className="mr-2" />
                Купить сейчас
              </Button>
              <Button variant="outline" className="flex-shrink-0">
                <Icon name="Heart" size={16} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default BikeCard;
