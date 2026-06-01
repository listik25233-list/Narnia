import React, { useEffect, useRef, useState } from 'react';

import kitchenImg from './assets/products/kitchen.png';
import wardrobeImg from './assets/products/wardrobe.png';
import closetImg from './assets/products/closet.png';
import kidsImg from './assets/products/kids.png';
import businessImg from './assets/products/business.png';
import chestImg from './assets/products/chest.png';

const App = () => {
  const navRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // Scroll-triggered animations using IntersectionObserver
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    );

    document.querySelectorAll('.anim').forEach((el) => observer.observe(el));

    // Nav scroll effect
    const handleScroll = () => {
      if (navRef.current) {
        navRef.current.classList.toggle('scrolled', window.scrollY > 60);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const steps = [
    {
      num: '01',
      title: 'Бесплатный замер',
      desc: 'Мастер приедет в удобное для вас время, покажет образцы материалов и сделает точные замеры помещения.',
    },
    {
      num: '02',
      title: 'Дизайн-проект',
      desc: 'Создадим 3D-визуализацию будущей мебели. Вы увидите результат ещё до начала производства.',
    },
    {
      num: '03',
      title: 'Производство',
      desc: 'Изготовим ваш заказ на современном оборудовании. Срок — от 14 до 21 рабочего дня.',
    },
    {
      num: '04',
      title: 'Доставка и монтаж',
      desc: 'Аккуратно доставим и профессионально соберём мебель у вас дома. Обычно за один день.',
    },
  ];

  const products = [
    { name: 'Угловой шкаф-купе', price: 'от 15 000 ₽', img: wardrobeImg },
    { name: 'Кухня', price: 'от 25 000 ₽', img: kitchenImg, badge: 'NEW' },
    { name: 'Гардеробная', price: 'от 20 000 ₽', img: closetImg },
    { name: 'Шкаф-купе в нишу', price: 'от 12 000 ₽', img: wardrobeImg },
    { name: 'Комод', price: 'от 8 000 ₽', img: chestImg },
    { name: 'Обувница', price: 'от 5 000 ₽', img: chestImg },
    { name: 'Мебель в детскую', price: 'от 15 000 ₽', img: kidsImg },
    { name: 'Шкаф с распашными дверьми', price: 'от 10 000 ₽', img: wardrobeImg },
    { name: 'Шкаф-купе с зеркалом', price: 'от 18 000 ₽', img: closetImg },
    { name: 'Мебель для бизнеса', price: 'от 20 000 ₽', img: businessImg },
    { name: 'Шкаф-купе', price: 'от 14 000 ₽', img: wardrobeImg },
    { name: 'Шкаф', price: 'от 9 000 ₽', img: wardrobeImg },
  ];

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="app">
      {/* ── Navigation ── */}
      <nav ref={navRef} className="nav">
        <div className="container nav-inner">
          <a href="#home" className="nav-logo">Narnia</a>
          <button className="nav-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Меню">
            <span /><span /><span />
          </button>
          <div className={`nav-links${menuOpen ? ' open' : ''}`}>
            <a href="#process" onClick={closeMenu}>Процесс</a>
            <a href="#catalog" onClick={closeMenu}>Каталог</a>
            <a href="#pricing" onClick={closeMenu}>Цены</a>
            <a href="#contact" onClick={closeMenu}>Контакты</a>
            <a href="#contact" onClick={closeMenu} className="btn" style={{ padding: '0.55rem 1.4rem', fontSize: '0.62rem' }}>
              Заказать
            </a>
          </div>
        </div>
      </nav>

      {/* ── Hero ── */}
      <header className="hero" id="home">
        <div className="hero-content">
          <span className="hero-tag anim">Сахалин · Мебель на заказ</span>
          <h1 className="anim anim-delay-1">
            Создаём мебель,<br />
            в которой живёт <em>душа</em>
          </h1>
          <p className="hero-subtitle anim anim-delay-2">
            Авторские проекты ручной работы. Натуральные материалы,
            точный замер и внимание к каждой детали.
          </p>
          <div className="hero-buttons anim anim-delay-3">
            <a href="#contact" className="btn btn-filled">Записаться на замер</a>
            <a href="#catalog" className="btn">Смотреть каталог</a>
          </div>
        </div>
        <div className="hero-line" />
      </header>

      {/* ── Timeline: Process ── */}
      <section id="process" className="section-padding" style={{ background: 'var(--bg-elevated)' }}>
        <div className="container">
          <div className="section-header anim">
            <span className="section-tag">Процесс</span>
            <h2>Путь к вашей идеальной мебели</h2>
            <p>Четыре простых шага — от идеи до готового изделия у вас дома.</p>
          </div>

          <div className="timeline">
            {steps.map((step, i) => (
              <div key={i} className={`timeline-item anim anim-delay-${i + 1}`}>
                <div className="timeline-content">
                  <div className="timeline-number">{step.num}</div>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
                <div className="timeline-dot" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── About / Features ── */}
      <section id="about" className="section-padding">
        <div className="container">
          <div className="section-header anim">
            <span className="section-tag">Почему мы</span>
            <h2>Мастерство, которому доверяют</h2>
            <p>Мы работаем без дорогих шоурумов — вкладывая все ресурсы в качество.</p>
          </div>
          <div className="features-grid">
            <div className="feature-card anim anim-delay-1">
              <span className="feature-icon">◈</span>
              <h3>Честная цена</h3>
              <p>Онлайн-формат без аренды позволяет использовать лучшие австрийские комплектующие без наценок.</p>
            </div>
            <div className="feature-card anim anim-delay-2">
              <span className="feature-icon">◇</span>
              <h3>Индивидуальность</h3>
              <p>Каждое изделие проектируется с нуля под ваши задачи, вкус и особенности помещения.</p>
            </div>
            <div className="feature-card anim anim-delay-3">
              <span className="feature-icon">▣</span>
              <h3>Точный замер</h3>
              <p>Мастер приезжает к вам с образцами ЛДСП, МДФ и шпона от ведущих заводов.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Catalog ── */}
      <section id="catalog" className="section-padding" style={{ background: 'var(--bg-elevated)' }}>
        <div className="container">
          <div className="section-header anim">
            <span className="section-tag">Каталог</span>
            <h2>Наши услуги и цены</h2>
            <p>Стоимость зависит от размеров, материалов и фурнитуры. Ниже — ориентировочные цены.</p>
          </div>
          <div className="catalog-grid">
            {products.map((item, i) => (
              <div key={i} className="product-card anim" style={{ transitionDelay: `${(i % 4) * 0.08}s` }}>
                <div className="product-card-image">
                  <img src={item.img} alt={item.name} />
                  <div className="product-overlay"></div>
                  {item.badge && <span className="product-badge">{item.badge}</span>}
                  <div className="product-card-content">
                    <h3>{item.name}</h3>
                    <a href="#contact" className="product-link">Рассчитать →</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pricing Explanation ── */}
      <section id="pricing" className="section-padding">
        <div className="container">
          <div className="pricing-info">
            <div className="pricing-info-text anim">
              <span className="section-tag">Ценообразование</span>
              <h2>Из чего складывается цена?</h2>
              <p>
                Мы не продаём типовую мебель. Каждый проект уникален, поэтому
                стоимость рассчитывается индивидуально.
              </p>
            </div>
            <div className="pricing-factors anim anim-delay-2">
              <div className="pricing-factor">
                <span className="pricing-factor-icon">◈</span>
                <span>Материал корпуса — ЛДСП или МДФ</span>
              </div>
              <div className="pricing-factor">
                <span className="pricing-factor-icon">◇</span>
                <span>Фасады — плёнка, эмаль, шпон или массив</span>
              </div>
              <div className="pricing-factor">
                <span className="pricing-factor-icon">▣</span>
                <span>Фурнитура — Blum, Hettich или аналоги</span>
              </div>
              <div className="pricing-factor">
                <span className="pricing-factor-icon">◈</span>
                <span>Размеры — под ваше помещение до миллиметра</span>
              </div>
              <div className="pricing-factor">
                <span className="pricing-factor-icon">◇</span>
                <span>Сложность — секции, ящики, механизмы</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section id="contact" className="section-padding" style={{ background: 'var(--bg-elevated)' }}>
        <div className="container">
          <div className="section-header anim">
            <span className="section-tag">Контакты</span>
            <h2>Обсудим ваш проект?</h2>
            <p>Напишите удобным способом или оставьте заявку — мы свяжемся в течение часа.</p>
          </div>
          <div className="contact-grid">
            <div className="anim anim-delay-1">
              <a href="tel:+79006644717" className="contact-phone">+7 900 664-47-17</a>
              <div className="socials-grid">
                <a href="wa.me/79006644717" target="_blank" rel="noreferrer" className="social-link">WhatsApp</a>
                <a href="https://t.me/Narnia65" target="_blank" rel="noreferrer" className="social-link">Telegram</a>
                <a href="https://vk.com/narnia.65" target="_blank" rel="noreferrer" className="social-link">MAX</a>
                <a href="https://www.instagram.com/narnia.65/" target="_blank" rel="noreferrer" className="social-link">Instagram</a>
              </div>
            </div>
            <form className="contact-form anim anim-delay-2" onSubmit={async (e) => {
              e.preventDefault();
              const btn = e.target.querySelector('button[type="submit"]');
              const originalText = btn.innerText;
              btn.innerText = 'Отправка...';
              btn.disabled = true;

              try {
                const res = await fetch("https://formsubmit.co/ajax/narnia65@mail.ru", {
                  method: "POST",
                  headers: { 'Accept': 'application/json' },
                  body: new FormData(e.target)
                });

                if (res.ok) {
                  btn.innerText = 'Успешно отправлено!';
                  e.target.reset();
                } else {
                  btn.innerText = 'Ошибка. Попробуйте позже';
                }
              } catch (err) {
                btn.innerText = 'Ошибка. Попробуйте позже';
              }

              setTimeout(() => {
                btn.innerText = originalText;
                btn.disabled = false;
              }, 4000);
            }}>
              {/* Отключаем капчу для более приятного UX (по желанию FormSubmit) */}
              <input type="hidden" name="_captcha" value="false" />
              <div className="form-group">
                <label htmlFor="name">Имя</label>
                <input id="name" name="name" type="text" placeholder="Как к вам обращаться?" required />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Телефон</label>
                <input id="phone" name="phone" type="tel" placeholder="+7 ..." required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Что вас интересует?</label>
                <textarea id="message" name="message" rows="3" placeholder="Опишите ваш проект..." required />
              </div>
              <button type="submit" className="btn btn-filled" style={{ width: '100%' }}>
                Отправить заявку
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="footer">
        <div className="container footer-inner">
          <span className="footer-logo">Narnia</span>
          <span className="footer-copy">© {new Date().getFullYear()} · Мебель Сахалина</span>
        </div>
      </footer>
    </div>
  );
};

export default App;
