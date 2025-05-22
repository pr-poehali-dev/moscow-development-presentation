import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const moscowPeriods = [
  {
    id: 1,
    period: "XIX век",
    title: "Эпоха Империи",
    years: "1800-1900",
    population: "300 тыс → 1,2 млн",
    keyEvents: [
      "1812 - Пожар Москвы и восстановление",
      "1851 - Железная дорога Москва-Петербург",
      "1862 - Начало промышленного бума",
      "1880 - Открытие Исторического музея",
    ],
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop",
    description:
      "Москва превращается из разрушенного города в промышленный центр империи.",
    stats: {
      railways: "2 линии",
      factories: "600+",
      theaters: "12",
    },
  },
  {
    id: 2,
    period: "Начало XX века",
    title: "Революционная Москва",
    years: "1900-1920",
    population: "1,2 млн → 1 млн",
    keyEvents: [
      "1905 - Декабрьское восстание",
      "1918 - Москва — столица РСФСР",
      "1919 - План монументальной пропаганды",
      "1920 - ГОЭЛРО и электрификация",
    ],
    image:
      "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=600&h=400&fit=crop",
    description:
      "Эпоха революций и становления Москвы как столицы нового государства.",
    stats: {
      enterprises: "1200",
      tramLines: "15 км",
      universities: "8",
    },
  },
  {
    id: 3,
    period: "Советская эпоха",
    title: "Социалистическая стройка",
    years: "1920-1991",
    population: "1 млн → 8,9 млн",
    keyEvents: [
      "1935 - Открытие первой линии метро",
      "1947 - Строительство сталинских высоток",
      "1980 - Олимпийские игры",
      "1986 - Программа реновации",
    ],
    image:
      "https://images.unsplash.com/photo-1568667256549-094345857637?w=600&h=400&fit=crop",
    description: "Грандиозное преобразование города в столицу сверхдержавы.",
    stats: {
      metroStations: "150+",
      skyscrapers: "7",
      districts: "10",
    },
  },
  {
    id: 4,
    period: "Современная Москва",
    title: "Мегаполис XXI века",
    years: "1991-2024",
    population: "8,9 млн → 12,7 млн",
    keyEvents: [
      "1991 - Возвращение исторических названий",
      "2010 - Расширение границ города",
      "2018 - Программа 'Моя улица'",
      "2023 - Большая кольцевая линия метро",
    ],
    image:
      "https://images.unsplash.com/photo-1555109307-f7d9da25c244?w=600&h=400&fit=crop",
    description: "Превращение в современный мегаполис мирового значения.",
    stats: {
      metroLines: "16",
      parks: "120+",
      skyscrapers: "200+",
    },
  },
];

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

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
        </div>
      </div>

      {/* Timeline Navigation */}
      <div className="bg-white border-b shadow-sm py-4">
        <div className="container mx-auto px-4">
          <div className="flex justify-center space-x-2 md:space-x-4 overflow-x-auto">
            {moscowPeriods.map((period, index) => (
              <Button
                key={period.id}
                variant={currentSlide === index ? "default" : "outline"}
                size="sm"
                onClick={() => setCurrentSlide(index)}
                className="whitespace-nowrap"
              >
                {period.period}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <Carousel className="w-full">
          <CarouselContent>
            {moscowPeriods.map((period, index) => (
              <CarouselItem key={period.id}>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  {/* Image Section */}
                  <div className="relative">
                    <img
                      src={period.image}
                      alt={period.title}
                      className="w-full h-96 object-cover rounded-xl shadow-lg"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-xl"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <p className="text-sm opacity-90">{period.years}</p>
                      <h2 className="text-2xl font-bold">{period.title}</h2>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="space-y-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center justify-between">
                          <span className="text-amber-600">
                            {period.period}
                          </span>
                          <span className="text-sm text-gray-500">
                            Население: {period.population}
                          </span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-700 mb-4">
                          {period.description}
                        </p>

                        {/* Statistics */}
                        <div className="grid grid-cols-3 gap-4 mb-6">
                          {Object.entries(period.stats).map(([key, value]) => (
                            <div
                              key={key}
                              className="text-center p-3 bg-amber-50 rounded-lg"
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
                          {period.keyEvents.map((event, eventIndex) => (
                            <li key={eventIndex} className="flex items-start">
                              <span className="w-2 h-2 bg-amber-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                              <span className="text-sm text-gray-700">
                                {event}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
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
