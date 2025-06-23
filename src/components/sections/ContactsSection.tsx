import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const ContactsSection = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Свяжитесь с нами
        </h2>
        <p className="text-gray-600 mb-6">
          Готовы ответить на все ваши вопросы о велосипедах STERN
        </p>
      </div>

      <div className="space-y-4">
        <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
          <Icon name="Phone" className="text-purple-600" size={20} />
          <div>
            <p className="font-medium">Телефон</p>
            <p className="text-sm text-gray-600">+7 (495) 123-45-67</p>
          </div>
        </div>

        <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
          <Icon name="Mail" className="text-purple-600" size={20} />
          <div>
            <p className="font-medium">Email</p>
            <p className="text-sm text-gray-600">info@stern-bikes.ru</p>
          </div>
        </div>

        <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
          <Icon name="MapPin" className="text-purple-600" size={20} />
          <div>
            <p className="font-medium">Адрес</p>
            <p className="text-sm text-gray-600">
              Москва, ул. Велосипедная, 15
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <Button className="w-full bg-purple-600 hover:bg-purple-700">
          <Icon name="MessageCircle" size={20} />
          Написать в WhatsApp
        </Button>

        <Button variant="outline" className="w-full">
          <Icon name="Calendar" size={20} />
          Записаться на тест-драйв
        </Button>
      </div>

      <div className="text-center p-4 bg-green-50 rounded-lg">
        <h4 className="font-semibold text-green-900 mb-1">Режим работы</h4>
        <p className="text-sm text-green-800">
          Пн-Пт: 10:00-20:00, Сб-Вс: 11:00-18:00
        </p>
      </div>
    </div>
  );
};

export default ContactsSection;
