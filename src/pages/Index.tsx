import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [calculatorData, setCalculatorData] = useState({
    from: '',
    to: '',
    weight: '',
    type: '',
    urgent: false
  });

  const [estimatedCost, setEstimatedCost] = useState<number | null>(null);

  const calculateCost = () => {
    const baseRate = 50;
    const weightMultiplier = parseFloat(calculatorData.weight) * 2;
    const urgentMultiplier = calculatorData.urgent ? 1.5 : 1;
    const typeMultiplier = calculatorData.type === 'fragile' ? 1.3 : 1;
    
    const cost = (baseRate + weightMultiplier) * urgentMultiplier * typeMultiplier;
    setEstimatedCost(Math.round(cost));
  };

  const fleet = [
    { type: 'Легкие грузовики', capacity: 'до 3 т', count: 15, icon: 'Truck' },
    { type: 'Средние грузовики', capacity: 'до 10 т', count: 8, icon: 'TruckIcon' },
    { type: 'Тяжелые грузовики', capacity: 'до 40 т', count: 5, icon: 'Container' },
    { type: 'Рефрижераторы', capacity: 'до 20 т', count: 3, icon: 'Snowflake' }
  ];

  const services = [
    {
      title: 'Городские перевозки',
      description: 'Быстрая доставка по городу в день заказа',
      icon: 'MapPin',
      features: ['Экспресс-доставка', 'Отслеживание груза', 'SMS-уведомления']
    },
    {
      title: 'Междугородние перевозки',
      description: 'Надежная транспортировка между городами',
      icon: 'Route',
      features: ['Страхование груза', 'Регулярные рейсы', 'Оптимальные маршруты']
    },
    {
      title: 'Крупногабаритные грузы',
      description: 'Специализированный транспорт для негабарита',
      icon: 'Package',
      features: ['Специальное оборудование', 'Разрешительные документы', 'Сопровождение']
    }
  ];

  const reviews = [
    {
      name: 'Алексей Петров',
      company: 'ООО "СтройМатериалы"',
      rating: 5,
      text: 'Отличный сервис! Груз доставили точно в срок, все в целости и сохранности.'
    },
    {
      name: 'Мария Иванова',
      company: 'ИП Иванова М.С.',
      rating: 5,
      text: 'Работаем с СЕВТРАК уже 2 года. Всегда профессиональный подход и разумные цены.'
    },
    {
      name: 'Дмитрий Сидоров',
      company: 'Торговый дом "Альфа"',
      rating: 4,
      text: 'Качественные услуги логистики. Рекомендую для постоянного сотрудничества.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img 
                src="/img/6bf43e1a-2490-4958-bbe7-0b4c68d50cb5.jpg"
                alt="SEVTRAK Логотип"
                className="h-12 w-12 object-contain"
              />
              <div>
                <h1 className="text-2xl font-bold text-primary">СЕВТРАК</h1>
                <p className="text-sm text-muted-foreground font-medium">Ваш груз — наша миссия</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#services" className="text-foreground hover:text-primary transition-colors">Услуги</a>
              <a href="#fleet" className="text-foreground hover:text-primary transition-colors">Автопарк</a>
              <a href="#calculator" className="text-foreground hover:text-primary transition-colors">Калькулятор</a>
              <a href="#reviews" className="text-foreground hover:text-primary transition-colors">Отзывы</a>
              <a href="#contacts" className="text-foreground hover:text-primary transition-colors">Контакты</a>
            </nav>
            <Button>
              <Icon name="Phone" size={16} className="mr-2" />
              Заказать звонок
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-primary/5 py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-4">
                <p className="text-primary font-semibold text-lg uppercase tracking-wider">
                  Ваш груз — наша миссия
                </p>
              </div>
              <h2 className="text-5xl font-bold text-foreground mb-6">
                Надежные грузоперевозки по всей России
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Современная транспортная компания с собственным автопарком. 
                Гарантируем безопасность, точность сроков и конкурентные цены.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg">
                  <Icon name="Calculator" size={20} className="mr-2" />
                  Рассчитать стоимость
                </Button>
                <Button size="lg" variant="outline" className="text-lg">
                  <Icon name="Play" size={20} className="mr-2" />
                  Смотреть видео
                </Button>
              </div>
              <div className="flex items-center gap-8 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">150+</div>
                  <div className="text-sm text-muted-foreground">Клиентов</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">5000+</div>
                  <div className="text-sm text-muted-foreground">Перевозок</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">99%</div>
                  <div className="text-sm text-muted-foreground">В срок</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/img/e8525560-6917-420c-b2d6-965e0376805d.jpg"
                alt="SEVTRAK - Транспортная компания"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <Icon name="CheckCircle" size={20} className="text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold">Груз в пути</div>
                    <div className="text-sm text-muted-foreground">Москва → СПб</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Наши услуги</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Полный спектр логистических услуг для вашего бизнеса
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={service.icon as any} size={24} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2">
                        <Icon name="Check" size={16} className="text-green-600" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6" variant="outline">
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet */}
      <section id="fleet" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Наш автопарк</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Современная техника для любых видов грузоперевозок
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {fleet.map((vehicle, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={vehicle.icon as any} size={32} className="text-primary" />
                  </div>
                  <CardTitle className="text-lg">{vehicle.type}</CardTitle>
                  <CardDescription>{vehicle.capacity}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge variant="secondary" className="text-lg font-semibold">
                    {vehicle.count} ед.
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section id="calculator" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4">Калькулятор стоимости</h2>
              <p className="text-xl text-muted-foreground">
                Рассчитайте стоимость перевозки за 1 минуту
              </p>
            </div>
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-center">Параметры груза</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="from">Откуда</Label>
                    <Input
                      id="from"
                      placeholder="Город отправления"
                      value={calculatorData.from}
                      onChange={(e) => setCalculatorData({...calculatorData, from: e.target.value})}
                    />
                  </div>
                  <div>
                    <Label htmlFor="to">Куда</Label>
                    <Input
                      id="to"
                      placeholder="Город назначения"
                      value={calculatorData.to}
                      onChange={(e) => setCalculatorData({...calculatorData, to: e.target.value})}
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="weight">Вес (кг)</Label>
                    <Input
                      id="weight"
                      type="number"
                      placeholder="1000"
                      value={calculatorData.weight}
                      onChange={(e) => setCalculatorData({...calculatorData, weight: e.target.value})}
                    />
                  </div>
                  <div>
                    <Label htmlFor="type">Тип груза</Label>
                    <Select onValueChange={(value) => setCalculatorData({...calculatorData, type: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите тип" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="standard">Стандартный</SelectItem>
                        <SelectItem value="fragile">Хрупкий</SelectItem>
                        <SelectItem value="dangerous">Опасный</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="urgent"
                    checked={calculatorData.urgent}
                    onChange={(e) => setCalculatorData({...calculatorData, urgent: e.target.checked})}
                    className="rounded"
                  />
                  <Label htmlFor="urgent">Срочная доставка</Label>
                </div>
                <Button onClick={calculateCost} className="w-full" size="lg">
                  <Icon name="Calculator" size={20} className="mr-2" />
                  Рассчитать стоимость
                </Button>
                {estimatedCost && (
                  <div className="text-center p-6 bg-primary/10 rounded-lg">
                    <div className="text-3xl font-bold text-primary mb-2">
                      {estimatedCost.toLocaleString()} ₽
                    </div>
                    <p className="text-muted-foreground">Примерная стоимость перевозки</p>
                    <Button className="mt-4">
                      <Icon name="Phone" size={16} className="mr-2" />
                      Заказать перевозку
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Отзывы клиентов</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Что говорят о нас наши партнеры
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Icon
                        key={i}
                        name="Star"
                        size={16}
                        className={i < review.rating ? "text-yellow-400 fill-current" : "text-gray-300"}
                      />
                    ))}
                  </div>
                  <CardTitle className="text-lg">{review.name}</CardTitle>
                  <CardDescription>{review.company}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">"{review.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">О компании СЕВТРАК</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Мы работаем на рынке грузоперевозок уже более 10 лет и знаем, 
                как важно доставить ваш груз точно в срок и в целости.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <Icon name="Shield" size={20} className="text-green-600" />
                  </div>
                  <span>Страхование всех грузов</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <Icon name="Clock" size={20} className="text-blue-600" />
                  </div>
                  <span>Работаем 24/7</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-purple-100 p-2 rounded-lg">
                    <Icon name="MapPin" size={20} className="text-purple-600" />
                  </div>
                  <span>Доставка по всей России</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                <div className="text-3xl font-bold text-primary mb-2">10+</div>
                <div className="text-muted-foreground">лет опыта</div>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                <div className="text-3xl font-bold text-primary mb-2">31</div>
                <div className="text-muted-foreground">автомобиль</div>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                <div className="text-muted-foreground">поддержка</div>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <div className="text-muted-foreground">гарантия</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contacts */}
      <section id="contacts" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Контакты</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Свяжитесь с нами удобным способом
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Оставьте заявку</CardTitle>
                  <CardDescription>Мы свяжемся с вами в течение 15 минут</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="name">Имя</Label>
                    <Input id="name" placeholder="Ваше имя" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Телефон</Label>
                    <Input id="phone" placeholder="+7 (999) 123-45-67" />
                  </div>
                  <div>
                    <Label htmlFor="message">Сообщение</Label>
                    <Textarea id="message" placeholder="Опишите ваш груз и маршрут" />
                  </div>
                  <Button className="w-full">
                    <Icon name="Send" size={16} className="mr-2" />
                    Отправить заявку
                  </Button>
                </CardContent>
              </Card>
            </div>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Icon name="Phone" size={24} className="text-primary" />
                </div>
                <div>
                  <div className="font-semibold">Телефон</div>
                  <div className="text-muted-foreground">+7 (985) 401-11-90</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Icon name="Mail" size={24} className="text-primary" />
                </div>
                <div>
                  <div className="font-semibold">Email</div>
                  <div className="text-muted-foreground">info@sevtrak.ru</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Icon name="MapPin" size={24} className="text-primary" />
                </div>
                <div>
                  <div className="font-semibold">Адрес</div>
                  <div className="text-muted-foreground">г. Севастополь, ул. Рыбаков 7 оф.112</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Icon name="Clock" size={24} className="text-primary" />
                </div>
                <div>
                  <div className="font-semibold">Режим работы</div>
                  <div className="text-muted-foreground">Круглосуточно, без выходных</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img 
                  src="/img/6bf43e1a-2490-4958-bbe7-0b4c68d50cb5.jpg"
                  alt="SEVTRAK Логотип"
                  className="h-10 w-10 object-contain"
                />
                <div>
                  <h3 className="text-xl font-bold">СЕВТРАК</h3>
                  <p className="text-sm opacity-75">Ваш груз — наша миссия</p>
                </div>
              </div>
              <p className="text-sm opacity-75">
                Надежные грузоперевозки по всей России. 
                Доверьте нам ваш самый важный груз.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm opacity-75">
                <li>Городские перевозки</li>
                <li>Междугородние рейсы</li>
                <li>Крупногабаритные грузы</li>
                <li>Экспресс-доставка</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm opacity-75">
                <li>О нас</li>
                <li>Наш автопарк</li>
                <li>Отзывы клиентов</li>
                <li>Вакансии</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-sm opacity-75">
                <div>+7 (495) 123-45-67</div>
                <div>info@sevtrak.ru</div>
                <div>г. Москва, ул. Логистическая, 25</div>
              </div>
            </div>
          </div>
          <div className="border-t border-background/20 mt-8 pt-8 text-center text-sm opacity-75">
            <p>&copy; 2024 СЕВТРАК. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;