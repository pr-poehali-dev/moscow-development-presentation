import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const moscowPeriods = [
  {
    id: 1,
    period: "XIX век",
    title: "Послепожарное восстановление",
    years: "1812-1850",
    population: "300 тыс → 500 тыс",
    keyEvents: [
      "1812 - Великий пожар и эвакуация",
      "1813-1820 - Восстановление центра",
      "1817 - Театральная площадь",
      "1839 - Храм Христа Спасителя (начало)",
    ],
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop",
    description:
      "Эпоха грандиозного восстановления Москвы после наполеоновского нашествия.",
    stats: { churches: "400+", mansions: "2000", bridges: "15" },
  },
  {
    id: 2,
    period: "Промышленная эра",
    title: "Железнодорожная Москва",
    years: "1850-1900",
    population: "500 тыс → 1,2 млн",
    keyEvents: [
      "1851 - Николаевская железная дорога",
      "1862 - Московско-Рязанская дорога",
      "1880 - Исторический музей",
      "1893 - Верхние торговые ряды (ГУМ)",
    ],
    image:
      "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=600&h=400&fit=crop",
    description:
      "Превращение в крупнейший промышленный и торговый центр империи.",
    stats: { railways: "8 линий", factories: "600+", theaters: "25" },
  },
  {
    id: 3,
    period: "Революционные годы",
    title: "Столица революции",
    years: "1900-1922",
    population: "1,2 млн → 1 млн",
    keyEvents: [
      "1905 - Декабрьское восстание",
      "1918 - Перенос столицы в Москву",
      "1919 - План монументальной пропаганды",
      "1922 - Образование СССР",
    ],
    image:
      "https://images.unsplash.com/photo-1565099824688-e93eb20fe622?w=600&h=400&fit=crop",
    description:
      "Бурная эпоха социальных потрясений и становления новой власти.",
    stats: { councils: "50", newspapers: "200+", schools: "300" },
  },
  {
    id: 4,
    period: "Довоенное строительство",
    title: "Сталинская реконструкция",
    years: "1922-1941",
    population: "1 млн → 4,2 млн",
    keyEvents: [
      "1935 - Первая линия метро",
      "1937 - Канал Москва-Волга",
      "1939 - ВСХВ (ВДНХ)",
      "1940 - Семь сталинских высоток",
    ],
    image:
      "https://images.unsplash.com/photo-1568667256549-094345857637?w=600&h=400&fit=crop",
    description:
      "Грандиозная реконструкция города по генеральному плану 1935 года.",
    stats: { metroStations: "22", boulevards: "12", parks: "50+" },
  },
  {
    id: 5,
    period: "Военные годы",
    title: "Москва в огне войны",
    years: "1941-1945",
    population: "4,2 млн → 3,5 млн",
    keyEvents: [
      "1941 - Битва за Москву",
      "1941 - Парад на Красной площади",
      "1942 - Маскировка Кремля",
      "1945 - Парад Победы",
    ],
    image:
      "https://images.unsplash.com/photo-1553969420-fb915ad29a9b?w=600&h=400&fit=crop",
    description:
      "Героическая оборона столицы и центр координации военных действий.",
    stats: { shelters: "1000+", factories: "200", hospitals: "150" },
  },
  {
    id: 6,
    period: "Послевоенное восстановление",
    title: "Сталинский ампир",
    years: "1945-1960",
    population: "3,5 млн → 6 млн",
    keyEvents: [
      "1947-1957 - Сталинские высотки",
      "1955 - Кольцевая линия метро",
      "1957 - Фестиваль молодежи",
      "1958 - Лужники",
    ],
    image:
      "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=600&h=400&fit=crop",
    description: "Восстановление и создание архитектурных символов эпохи.",
    stats: { skyscrapers: "7", districts: "8", universities: "15" },
  },
  {
    id: 7,
    period: "Хрущевская оттепель",
    title: "Массовое жилищное строительство",
    years: "1960-1980",
    population: "6 млн → 8,1 млн",
    keyEvents: [
      "1960 - Программа 'хрущевок'",
      "1971 - Останкинская башня",
      "1975 - Новый генплан",
      "1980 - Олимпиада-80",
    ],
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
    description: "Решение жилищной проблемы и подготовка к Олимпийским играм.",
    stats: { apartments: "2M+", districts: "15", venues: "80" },
  },
  {
    id: 8,
    period: "Современная Москва",
    title: "Мегаполис XXI века",
    years: "1991-2024",
    population: "8,9 млн → 12,7 млн",
    keyEvents: [
      "1991 - Возвращение исторических названий",
      "2010 - Расширение границ (Новая Москва)",
      "2018 - Программа 'Моя улица'",
      "2023 - Большая кольцевая линия метро",
    ],
    image:
      "https://images.unsplash.com/photo-1555109307-f7d9da25c244?w=600&h=400&fit=crop",
    description: "Превращение в современный мегаполис мирового значения.",
    stats: { metroLines: "16", parks: "120+", skyscrapers: "200+" },
  },
];

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % moscowPeriods.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + moscowPeriods.length) % moscowPeriods.length,
    );
  };

  const currentPeriod = moscowPeriods[currentSlide];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-blue-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-600 to-blue-600 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Развитие Москвы
          </h1>
          <p className="text-xl md:text-2xl opacity-90">
            XIX - XXI век: от Imperial до Megapolis
          </p>

          {/* Slide Counter */}
          <div className="mt-6 flex items-center justify-center space-x-2">
            <span className="text-sm opacity-80">
              {currentSlide + 1} из {moscowPeriods.length}
            </span>
            <div className="w-32 bg-white/20 rounded-full h-1">
              <div
                className="bg-white h-1 rounded-full transition-all duration-500"
                style={{
                  width: `${((currentSlide + 1) / moscowPeriods.length) * 100}%`,
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="bg-white border-b shadow-sm py-6">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center space-x-3 mb-4">
            {moscowPeriods.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? "bg-amber-600 scale-125"
                    : "bg-gray-300 hover:bg-amber-400"
                }`}
              />
            ))}
          </div>

          {/* Period Navigation */}
          <div className="flex justify-center space-x-2 overflow-x-auto">
            {moscowPeriods.map((period, index) => (
              <Button
                key={period.id}
                variant={currentSlide === index ? "default" : "outline"}
                size="sm"
                onClick={() => setCurrentSlide(index)}
                className="whitespace-nowrap text-xs"
              >
                {period.years}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors"
          >
            <Icon name="ChevronLeft" size={24} className="text-gray-600" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors"
          >
            <Icon name="ChevronRight" size={24} className="text-gray-600" />
          </button>

          {/* Slide Content */}
          <div className="grid md:grid-cols-2 gap-8 items-center animate-fade-in">
            {/* Image Section */}
            <div className="relative">
              <img
                src={currentPeriod.image}
                alt={currentPeriod.title}
                className="w-full h-96 object-cover rounded-xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-xl"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-sm opacity-90">{currentPeriod.years}</p>
                <h2 className="text-2xl font-bold">{currentPeriod.title}</h2>
              </div>
            </div>

            {/* Content Section */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span className="text-amber-600">
                      {currentPeriod.period}
                    </span>
                    <span className="text-sm text-gray-500">
                      Население: {currentPeriod.population}
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    {currentPeriod.description}
                  </p>

                  {/* Statistics */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {Object.entries(currentPeriod.stats).map(([key, value]) => (
                      <div
                        key={key}
                        className="text-center p-3 bg-amber-50 rounded-lg hover:bg-amber-100 transition-colors"
                      >
                        <div className="text-2xl font-bold text-amber-600">
                          {value}
                        </div>
                        <div className="text-xs text-gray-600 capitalize">
                          {key}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Key Events */}
                  <h4 className="font-semibold mb-3 text-blue-600">
                    Ключевые события:
                  </h4>
                  <ul className="space-y-2">
                    {currentPeriod.keyEvents.map((event, eventIndex) => (
                      <li key={eventIndex} className="flex items-start">
                        <span className="w-2 h-2 bg-amber-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-sm text-gray-700">{event}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Navigation */}
      <div className="bg-gray-50 py-6">
        <div className="container mx-auto px-4">
          <div className="flex justify-center space-x-4">
            <Button
              onClick={prevSlide}
              variant="outline"
              size="sm"
              className="flex items-center space-x-2"
            >
              <Icon name="ChevronLeft" size={16} />
              <span>Предыдущий</span>
            </Button>

            <Button
              onClick={nextSlide}
              size="sm"
              className="flex items-center space-x-2"
            >
              <span>Следующий</span>
              <Icon name="ChevronRight" size={16} />
            </Button>
          </div>
        </div>
      </div>

      {/* Footer Stats */}
      <div className="bg-gradient-to-r from-blue-600 to-amber-600 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">200+</div>
              <div className="text-blue-100">лет развития</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">12.7M</div>
              <div className="text-blue-100">жителей сегодня</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">270+</div>
              <div className="text-blue-100">станций метро</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">2500+</div>
              <div className="text-blue-100">км² площадь</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
