import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const products = [
    {
      id: 1,
      name: 'Масляный фильтр',
      category: 'Фильтры',
      price: '450 ₽',
      image: 'https://cdn.poehali.dev/projects/207a022b-058a-4f8a-a8d8-7327dc773e85/files/22986c78-c124-4b67-a636-429028037b9b.jpg'
    },
    {
      id: 2,
      name: 'Тормозные колодки',
      category: 'Тормозная система',
      price: '1 890 ₽',
      image: 'https://cdn.poehali.dev/projects/207a022b-058a-4f8a-a8d8-7327dc773e85/files/6ba99661-80a9-4994-8be7-d72676633383.jpg'
    },
    {
      id: 3,
      name: 'Воздушный фильтр',
      category: 'Фильтры',
      price: '680 ₽',
      image: 'https://cdn.poehali.dev/projects/207a022b-058a-4f8a-a8d8-7327dc773e85/files/22986c78-c124-4b67-a636-429028037b9b.jpg'
    },
    {
      id: 4,
      name: 'Свечи зажигания',
      category: 'Двигатель',
      price: '320 ₽',
      image: 'https://cdn.poehali.dev/projects/207a022b-058a-4f8a-a8d8-7327dc773e85/files/22986c78-c124-4b67-a636-429028037b9b.jpg'
    }
  ];

  const services = [
    { icon: 'Wrench', title: 'Подбор запчастей', description: 'Поможем подобрать нужные запчасти для вашего автомобиля' },
    { icon: 'Clock', title: 'Быстрая доставка', description: 'Доставим товар в течение 1-2 дней по Новочебоксарску' },
    { icon: 'ShieldCheck', title: 'Гарантия качества', description: 'Все товары сертифицированы и имеют гарантию' },
    { icon: 'Headset', title: 'Консультация', description: 'Бесплатная консультация по выбору автозапчастей' }
  ];

  const NavLinks = () => (
    <>
      <button onClick={() => scrollToSection('home')} className="hover:text-primary transition-colors">
        Главная
      </button>
      <button onClick={() => scrollToSection('services')} className="hover:text-primary transition-colors">
        Услуги
      </button>
      <button onClick={() => scrollToSection('about')} className="hover:text-primary transition-colors">
        О магазине
      </button>
      <button onClick={() => scrollToSection('delivery')} className="hover:text-primary transition-colors">
        Доставка и оплата
      </button>
      <button onClick={() => scrollToSection('contacts')} className="hover:text-primary transition-colors">
        Контакты
      </button>
    </>
  );

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-white border-b shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Car" size={32} className="text-primary" />
            <div>
              <h1 className="text-xl font-bold text-secondary">Автомагазин Эксперт</h1>
              <p className="text-xs text-muted-foreground">Новочебоксарск</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <NavLinks />
          </nav>

          <div className="flex items-center gap-2">
            <Button variant="default" size="sm" className="hidden sm:flex">
              <Icon name="Phone" size={16} className="mr-2" />
              Позвонить
            </Button>

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Icon name="Menu" size={24} />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <nav className="flex flex-col gap-4 mt-8 text-lg">
                  <NavLinks />
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <section id="home" className="relative bg-gradient-to-br from-primary/5 to-secondary/5 py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-secondary">
                Автозапчасти для вашего автомобиля
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Широкий ассортимент качественных запчастей и комплектующих. Быстрая доставка по Новочебоксарску.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" onClick={() => scrollToSection('contacts')}>
                  <Icon name="MessageCircle" size={20} className="mr-2" />
                  Связаться с нами
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection('services')}>
                  Наши услуги
                </Button>
              </div>
            </div>
            <div className="animate-slide-up">
              <img 
                src="https://cdn.poehali.dev/projects/207a022b-058a-4f8a-a8d8-7327dc773e85/files/aef1ac3a-4bab-46b1-897b-e695f03c2811.jpg" 
                alt="Автомагазин Эксперт"
                className="rounded-lg shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12 text-secondary">Популярные товары</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <Card key={product.id} className="hover:shadow-lg transition-shadow animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <CardContent className="p-4">
                  <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-lg mb-4" />
                  <p className="text-xs text-primary font-medium mb-1">{product.category}</p>
                  <h4 className="font-semibold text-lg mb-2">{product.name}</h4>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-secondary">{product.price}</span>
                    <Button size="sm">
                      <Icon name="ShoppingCart" size={16} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12 text-secondary">Наши услуги</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="text-center animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                <CardContent className="p-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name={service.icon} size={32} className="text-primary" />
                  </div>
                  <h4 className="font-semibold text-lg mb-2">{service.title}</h4>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-6 text-secondary">О магазине</h3>
            <p className="text-lg text-muted-foreground mb-6">
              Автомагазин "Эксперт" работает на рынке автозапчастей более 10 лет. Мы предлагаем широкий ассортимент 
              качественных комплектующих для всех марок автомобилей по доступным ценам.
            </p>
            <p className="text-lg text-muted-foreground">
              Наши специалисты помогут подобрать нужные запчасти и ответят на все ваши вопросы. Работаем только с 
              проверенными поставщиками, гарантируем качество каждого товара.
            </p>
          </div>
        </div>
      </section>

      <section id="delivery" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12 text-secondary">Доставка и оплата</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Truck" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Доставка</h4>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>• По Новочебоксарску — 1-2 дня</li>
                      <li>• Бесплатно при заказе от 3000 ₽</li>
                      <li>• Самовывоз из магазина</li>
                      <li>• Доставка по России</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="CreditCard" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Оплата</h4>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>• Наличными при получении</li>
                      <li>• Банковской картой</li>
                      <li>• Безналичный расчёт для юр. лиц</li>
                      <li>• Онлайн оплата на сайте</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12 text-secondary">Контакты</h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name="MapPin" size={32} className="text-primary" />
                </div>
                <h4 className="font-semibold mb-2">Адрес</h4>
                <p className="text-sm text-muted-foreground">г. Новочебоксарск<br />ул. Винокурова, 14</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name="Phone" size={32} className="text-primary" />
                </div>
                <h4 className="font-semibold mb-2">Телефон</h4>
                <p className="text-sm text-muted-foreground">+7 (8352) 123-456<br />+7 (987) 654-32-10</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name="Clock" size={32} className="text-primary" />
                </div>
                <h4 className="font-semibold mb-2">Режим работы</h4>
                <p className="text-sm text-muted-foreground">Пн-Пт: 9:00 - 19:00<br />Сб-Вс: 10:00 - 17:00</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-secondary text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Icon name="Car" size={28} />
              <div>
                <p className="font-bold">Автомагазин Эксперт</p>
                <p className="text-sm text-white/80">Новочебоксарск</p>
              </div>
            </div>
            <p className="text-sm text-white/80">© 2024 Все права защищены</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
