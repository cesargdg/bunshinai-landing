import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container10">
      <Helmet>
        <title>Plush Buzzing Wolf</title>
        <meta property="og:title" content="Plush Buzzing Wolf" />
        <link
          rel="canonical"
          href="https://plush-buzzing-wolf-djy10z.teleporthq.app/"
        />
      </Helmet>
      <section className="bunshin-hero">
        <div className="hero-background-pattern">
          <div className="circle-1 geometric-circle"></div>
          <div className="circle-2 geometric-circle"></div>
          <div className="circle-3 geometric-circle"></div>
          <div className="geometric-line line-1"></div>
          <div className="geometric-line line-2"></div>
          <div className="zen-square"></div>
        </div>
        <div className="hero-container">
          <div className="hero-content">
            <div className="home-content-wrapper content-wrapper">
              <div className="headline-group">
                <div className="japanese-accent"></div>
                <h1 className="home-hero-headline hero-headline">
                  <span>
                    {' '}
                    Haz crecer tu negocio con
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="home-text11"> IA y Automatización</span>
                </h1>
              </div>
              <p className="hero-subheadline">
                <span>Llevamos a pymes y agencias la tecnología de</span>
                <span className="home-text13">
                  {' '}
                  IA que antes solo estaba al alcance de las grandes
                  corporaciones
                </span>
                <span>
                  . Elimina el trabajo manual,
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-text15">enfócate en crecer.</span>
              </p>
              <div className="cta-wrapper">
                <a
                  href="https://calendly.com/cesar-bunshinai/30min"
                  target="_blank"
                  rel="noreferrer noopener"
                  id="ctaButton"
                >
                  <div className="cta-button">
                    <span className="button-text">
                      Descubre que podemos automatizar de tu empresa
                    </span>
                    <span className="button-icon">
                      <svg
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                        height="20"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="m5 12l7-7l7 7m-7 7V5"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </span>
                  </div>
                </a>
                <div className="cta-accent-line"></div>
              </div>
            </div>
            <div className="floating-elements">
              <div className="float-element element-1"></div>
              <div className="element-2 float-element"></div>
              <div className="float-element element-3"></div>
            </div>
          </div>
        </div>
      </section>
      <div className="home-bg-pattern bg-pattern"></div>
      <div className="home-container11">
        <div className="home-container12">
          <Script
            html={`<style>
        @keyframes float-1 {0%,100% {transform: translateY(0px) translateX(0px);}
50% {transform: translateY(-30px) translateX(20px);}}@keyframes float-2 {0%,100% {transform: rotate(45deg) translateY(0px);}
50% {transform: rotate(45deg) translateY(-40px);}}@keyframes float-3 {0%,100% {transform: translateY(0px) scale(1);}
50% {transform: translateY(-25px) scale(1.1);}}
        </style> `}
          ></Script>
        </div>
      </div>
      <section className="case-studies-section">
        <div className="section-header">
          <div className="header-accent"></div>
          <h2 className="section-title">Casos reales de éxito</h2>
          <p className="section-subtitle">
            {' '}
            Transformamos negocios mediante la automatización inteligente
          </p>
        </div>
        <div className="case-studies-container">
          <div className="case-studies-grid">
            <article className="case-study-card">
              <div className="card-accent-bar"></div>
              <div className="card-header">
                <div className="client-logo">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5m8.774-10.69a1.12 1.12 0 0 0-1.549 0a2.5 2.5 0 0 1-3.451 0a1.12 1.12 0 0 0-1.548 0a2.5 2.5 0 0 1-3.452 0a1.12 1.12 0 0 0-1.549 0a2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244"></path>
                      <path d="M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05"></path>
                    </g>
                  </svg>
                </div>
                <h3 className="client-name">Inmobiliaria</h3>
                <div className="case-study-label">
                  <span>Captación y gestión de propietarios</span>
                </div>
              </div>
              <div className="card-content">
                <div className="challenge-block content-block">
                  <div className="challenge-icon block-icon">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M12 6v6l4 2"></path>
                        <circle r="10" cx="12" cy="12"></circle>
                      </g>
                    </svg>
                  </div>
                  <div className="block-content">
                    <h4 className="block-title">Desafio</h4>
                    <p className="block-text">
                      <span>
                        {' '}
                        La agencia dedicaba +6h diarias a la gestión de
                        propietarios
                      </span>
                      <br></br>
                      <span>
                        Muchos leads de propietarios se perdían por falta de
                        atención o respuesta rápida
                      </span>
                      Manual order processing took 8 hours daily
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </p>
                  </div>
                </div>
                <div className="content-block solution-block">
                  <div className="block-icon solution-icon">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M15 14c.2-1 .7-1.7 1.5-2.5c1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5c.7.7 1.3 1.5 1.5 2.5m0 4h6m-5 4h4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                  <div className="block-content">
                    <h4 className="block-title">solución</h4>
                    <p className="block-text">
                      Implementamos un sistema de IA que cualifica propietarios,
                      prioriza oportunidades y automatiza el seguimiento
                      multicanal (email, WhatsApp...)
                    </p>
                  </div>
                </div>
                <div className="results-block content-block">
                  <div className="block-icon results-icon">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M16 7h6v6"></path>
                        <path d="m22 7l-8.5 8.5l-5-5L2 17"></path>
                      </g>
                    </svg>
                  </div>
                  <div className="block-content">
                    <h4 className="block-title">resultados</h4>
                    <div className="metrics-grid">
                      <div className="metric">
                        <span className="metric-value">+20%</span>
                        <span className="metric-label">
                          de propietarios en pipeline
                        </span>
                      </div>
                      <div className="metric">
                        <span className="metric-value">-4h</span>
                        <span className="metric-label">
                          de gestión manual al dia
                        </span>
                      </div>
                      <div className="metric">
                        <span className="metric-value">+12%</span>
                        <span className="metric-label">
                          {' '}
                          conversión propietario a venta
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-decoration"></div>
            </article>
            <article className="case-study-card">
              <div className="card-accent-bar"></div>
              <div className="card-header">
                <div className="client-logo">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                      <rect x="2" y="6" rx="2" width="20" height="14"></rect>
                    </g>
                  </svg>
                </div>
                <h3 className="client-name">
                  Agencia de servicios profesionales
                </h3>
                <div className="case-study-label">
                  <span>
                    cualificación de leads y construcción de ofertas
                    automatizadas
                  </span>
                </div>
              </div>
              <div className="card-content">
                <div className="challenge-block content-block">
                  <div className="challenge-icon block-icon">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle r="10" cx="12" cy="12"></circle>
                        <circle r="6" cx="12" cy="12"></circle>
                        <circle r="2" cx="12" cy="12"></circle>
                      </g>
                    </svg>
                  </div>
                  <div className="block-content">
                    <h4 className="block-title">Desafío</h4>
                    <p className="block-text">
                      {' '}
                      El equipo de ventas dedicaba +20h semanales a buscar,
                      filtrar y cualificar leads
                    </p>
                  </div>
                </div>
                <div className="content-block solution-block">
                  <div className="block-icon solution-icon">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                  <div className="block-content">
                    <h4 className="block-title">solución</h4>
                    <p className="block-text">
                      {' '}
                      Implementamos un sistema de captación y cualificación
                      inteligente que se comunicaba directamente con los leads
                    </p>
                  </div>
                </div>
                <div className="results-block content-block">
                  <div className="block-icon results-icon">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M16 7h6v6"></path>
                        <path d="m22 7l-8.5 8.5l-5-5L2 17"></path>
                      </g>
                    </svg>
                  </div>
                  <div className="block-content">
                    <h4 className="block-title">Resultados</h4>
                    <div className="metrics-grid">
                      <div className="metric">
                        <span className="metric-value">+120%</span>
                        <span className="metric-label">
                          {' '}
                          de llamadas agendadas con leads
                        </span>
                      </div>
                      <div className="metric">
                        <span className="metric-value">2.5x</span>
                        <span className="metric-label">leads cualificados</span>
                      </div>
                      <div className="metric">
                        <span className="metric-value">0.5x</span>
                        <span className="metric-label">
                          tiempo de ciclo de venta medio
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-decoration"></div>
            </article>
          </div>
        </div>
      </section>
      <div className="home-container13">
        <div className="home-container14">
          <Script
            html={`<script>
(function(){
  // Smooth card entrance animations on scroll
  const observerOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px",
  }

  const cardObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "0"
        entry.target.style.transform = "translateY(30px)"

        setTimeout(function () {
          entry.target.style.transition =
            "opacity 0.6s ease, transform 0.6s ease"
          entry.target.style.opacity = "1"
          entry.target.style.transform = "translateY(0)"
        }, 100)

        cardObserver.unobserve(entry.target)
      }
    })
  }, observerOptions)

  const cards = document.querySelectorAll(".case-study-card")
  cards.forEach(function (card, index) {
    card.style.transitionDelay = index * 0.15 + "s"
    cardObserver.observe(card)
  })

  // Metrics counter animation on hover
  const caseCards = document.querySelectorAll(".case-study-card")
  caseCards.forEach(function (card) {
    let hasAnimated = false

    card.addEventListener("mouseenter", function () {
      if (!hasAnimated) {
        const metrics = card.querySelectorAll(".metric")
        metrics.forEach(function (metric, idx) {
          setTimeout(function () {
            metric.style.transition = "all 0.3s ease"
            metric.style.transform = "translateX(4px)"
          }, idx * 100)
        })
        hasAnimated = true
      }
    })
  })
})()
</script>`}
          ></Script>
        </div>
      </div>
      <section className="bunshin-services-section">
        <div className="geometric-accent-top"></div>
        <div className="geometric-accent-bottom"></div>
        <div className="services-container">
          <div className="home-section-header">
            <div className="header-decoration"></div>
            <h2 className="home-section-title">
              Nuestros servicios más demandados
            </h2>
            <p className="home-section-subtitle">
              Flujos de trabajo personalizados para las necesidades de tu
              negocio
            </p>
          </div>
          <div className="services-grid">
            <div className="services-column">
              <div className="services-list">
                <div id="service-1" className="service-item">
                  <div className="service-icon-wrapper">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                      className="service-icon"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M13 20.693c-.905.628-2.36.292-2.675-1.01a1.724 1.724 0 0 0-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066-2.573c-.94-1.543.826-3.31 2.37-2.37c1 .608 2.296.07 2.572-1.065c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.492.362 1.716 2.219.674 3.03"></path>
                        <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0-6 0m8 10l5-3l-5-3z"></path>
                      </g>
                    </svg>
                    <div className="service-accent-line"></div>
                  </div>
                  <div className="service-content">
                    <h3 className="service-title">
                      Automatización de procesos
                    </h3>
                    <p className="home-service-description1 service-description">
                      Optimizamos tareas repetitivas con flujos de trabajo de IA
                      reduciendo tus costes y tiempo invertido
                    </p>
                  </div>
                  <div className="service-hover-indicator">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="m18 15l-6-6l-6 6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div id="service-2" className="service-item">
                  <div className="service-icon-wrapper">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                      className="service-icon"
                    >
                      <rect
                        x="3"
                        y="3"
                        rx="2"
                        fill="none"
                        width="18"
                        height="18"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></rect>
                    </svg>
                    <div className="service-accent-line"></div>
                  </div>
                  <div className="service-content">
                    <h3 className="service-title">
                      Busqueda automática de clientes
                    </h3>
                    <p className="service-description">
                      Automatizamos la busqueda y contacto de leads para que te
                      enfoques en proveer el servicio
                    </p>
                  </div>
                  <div className="service-hover-indicator">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="m18 15l-6-6l-6 6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div id="service-3" className="service-item">
                  <div className="service-icon-wrapper">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                      className="service-icon"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M12 20v2m0-20v2m5 16v2m0-20v2M2 12h2m-2 5h2M2 7h2m16 5h2m-2 5h2M20 7h2M7 20v2M7 2v2"></path>
                        <rect x="4" y="4" rx="2" width="16" height="16"></rect>
                        <rect x="8" y="8" rx="1" width="8" height="8"></rect>
                      </g>
                    </svg>
                    <div className="service-accent-line"></div>
                  </div>
                  <div className="service-content">
                    <h3 className="service-title">Atención al cliente</h3>
                    <p className="service-description">
                      {' '}
                      Construimos modelos que te ayuden a gestionar las dudas y
                      problemas de tus clientes de manera automática para que
                      solo tengas que ocuparte de los casos graves
                    </p>
                  </div>
                  <div className="service-hover-indicator">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="m18 15l-6-6l-6 6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div id="service-4" className="service-item">
                  <div className="service-icon-wrapper">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                      className="service-icon"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M12 18V5m3 8a4.17 4.17 0 0 1-3-4a4.17 4.17 0 0 1-3 4m8.598-6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5"></path>
                        <path d="M17.997 5.125a4 4 0 0 1 2.526 5.77"></path>
                        <path d="M18 18a4 4 0 0 0 2-7.464"></path>
                        <path d="M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517"></path>
                        <path d="M6 18a4 4 0 0 1-2-7.464"></path>
                        <path d="M6.003 5.125a4 4 0 0 0-2.526 5.77"></path>
                      </g>
                    </svg>
                    <div className="service-accent-line"></div>
                  </div>
                  <div className="service-content">
                    <h3 className="service-title">
                      Campañas de mails personalizados
                    </h3>
                    <p className="service-description">
                      <span>
                        Usamos IA para generar emails completamente
                        personalizados para captar a tus clientes
                      </span>
                      <br></br>
                      Transform raw data into actionable insights with ML
                      analytics
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </p>
                  </div>
                  <div className="service-hover-indicator">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="m18 15l-6-6l-6 6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div id="service-5" className="service-item">
                  <div className="service-icon-wrapper">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                      className="service-icon"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594zM20 2v4m2-2h-4"></path>
                        <circle r="2" cx="4" cy="20"></circle>
                      </g>
                    </svg>
                    <div className="service-accent-line"></div>
                  </div>
                  <div className="service-content">
                    <h3 className="service-title">Automatización de ofertas</h3>
                    <p className="service-description">
                      {' '}
                      En cuanto tu equipo de ventas cuelgue una llamada, se
                      generará una presentación con la propuesta en base a la
                      información de llamada, y la propuesta se enviará
                      automáticamente al cliente
                    </p>
                  </div>
                  <div className="service-hover-indicator">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="m18 15l-6-6l-6 6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="tech-column">
              <div className="tech-showcase">
                <div className="tech-header">
                  <div className="tech-header-line"></div>
                  <h3 className="tech-title">SOBRE EL FUNDADOR</h3>
                </div>
                <img
                  alt="image"
                  src="/chatgpt%20image%204%20dic%202025%2C%2017_15_22-400h.jpg"
                  className="home-image"
                />
                <div className="home-tech-image-container tech-image-container"></div>
                <p className="tech-description">
                  <span>
                    Soy César, especialista en automatizacion e IA. Antes de
                    lanzar BunshinAI, trabajé como ejecutivo de Amazon, donde
                    implementé y optimicé procesos para algunas de las compañias
                    más grandes del mundo como Apple o Lenovo.
                  </span>
                  <br></br>
                  <br></br>
                  <span>
                    Hoy aplico este conocimiento para ofrecer soluciones de IA,
                    antes reservadas para grandes corporaciones, a empresas
                    pequeñas y medianas que quieren escalar con sistemas
                    eficientes
                  </span>
                  <br></br>
                </p>
                <div className="tech-badges">
                  <div className="tech-badge">
                    <svg
                      width="18"
                      xmlns="http://www.w3.org/2000/svg"
                      height="18"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M20 6L9 17l-5-5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    <span>OpenAI GPT-4</span>
                  </div>
                  <div className="tech-badge">
                    <svg
                      width="18"
                      xmlns="http://www.w3.org/2000/svg"
                      height="18"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M20 6L9 17l-5-5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    <span>Automation</span>
                  </div>
                  <div className="tech-badge">
                    <svg
                      width="18"
                      xmlns="http://www.w3.org/2000/svg"
                      height="18"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M20 6L9 17l-5-5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    <span>AI services</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="home-container15">
        <div className="home-container16">
          <Script
            html={`<script>
(function(){
  // Add smooth hover animations for service items
  const serviceItems = [
    document.getElementById("service-1"),
    document.getElementById("service-2"),
    document.getElementById("service-3"),
    document.getElementById("service-4"),
    document.getElementById("service-5"),
  ].filter(Boolean)

  serviceItems.forEach((item, index) => {
    if (item) {
      // Add staggered animation on load
      item.style.opacity = "0"
      item.style.transform = "translateY(20px)"

      setTimeout(() => {
        item.style.transition = "opacity 0.6s ease, transform 0.6s ease"
        item.style.opacity = "1"
        item.style.transform = "translateY(0)"
      }, 100 * index)
    }
  })

  // Add intersection observer for scroll animations
  if ("IntersectionObserver" in window) {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1"
          entry.target.style.transform = "translateY(0)"
        }
      })
    }, observerOptions)

    // Observe tech showcase
    const techShowcase = document.querySelector(".tech-showcase")
    if (techShowcase) {
      techShowcase.style.opacity = "0"
      techShowcase.style.transform = "translateY(30px)"
      techShowcase.style.transition = "opacity 0.8s ease, transform 0.8s ease"
      observer.observe(techShowcase)
    }
  }

  // Add click event to service items for mobile interaction
  serviceItems.forEach((item) => {
    if (item) {
      item.addEventListener("click", function () {
        // Remove active state from all items
        serviceItems.forEach((i) => {
          if (i) i.classList.remove("active-service")
        })
        // Add active state to clicked item
        this.classList.add("active-service")
      })
    }
  })

  // Parallax effect for geometric accents
  const geometricTop = document.querySelector(".geometric-accent-top")
  const geometricBottom = document.querySelector(".geometric-accent-bottom")

  if (geometricTop && geometricBottom) {
    window.addEventListener("scroll", () => {
      const scrolled = window.pageYOffset
      const rate = scrolled * 0.3

      geometricTop.style.transform = \`translateY(\${rate}px) rotate(\${
        rate * 0.05
      }deg)\`
      geometricBottom.style.transform = \`translateY(\${-rate}px) rotate(\${
        -rate * 0.05
      }deg)\`
    })
  }
})()
</script>`}
          ></Script>
        </div>
      </div>
      <section className="bunshin-cta-section">
        <div className="cta-accent-line-top home-cta-accent-line"></div>
        <div className="cta-accent-line-bottom home-cta-accent-line"></div>
        <div className="cta-corner-tl cta-corner"></div>
        <div className="cta-corner-tr cta-corner"></div>
        <div className="cta-corner-bl cta-corner"></div>
        <div className="cta-corner-br cta-corner"></div>
        <div className="cta-content-wrapper">
          <div className="cta-sparkle-icon">
            <svg
              width="48"
              xmlns="http://www.w3.org/2000/svg"
              height="48"
              viewBox="0 0 24 24"
            >
              <g
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594zM20 2v4m2-2h-4"></path>
                <circle r="2" cx="4" cy="20"></circle>
              </g>
            </svg>
          </div>
          <h2 className="cta-headline">
            Preparado para cambiar tus operaciones?
          </h2>
          <div className="cta-accent-bar"></div>
          <p className="cta-subheadline">
            {' '}
            Desbloquea el crecimiento exponencial
          </p>
          <ul className="cta-benefits-list">
            <li className="cta-benefit-item">
              <span className="cta-benefit-icon">
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M20 6L9 17l-5-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </span>
              <span className="cta-benefit-text">
                Consultoría gratuita de 30 minutos
              </span>
            </li>
            <li className="cta-benefit-item">
              <span className="cta-benefit-icon">
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M20 6L9 17l-5-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </span>
              <span className="cta-benefit-text">
                Sin ningún tipo de compromiso
              </span>
            </li>
            <li className="cta-benefit-item">
              <span className="cta-benefit-icon">
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M20 6L9 17l-5-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </span>
              <span className="cta-benefit-text">
                {' '}
                Garantizamos resultados o no pagas
              </span>
            </li>
          </ul>
          <div className="cta-button-wrapper">
            <a
              href="https://calendly.com/cesar-bunshinai/30min"
              target="_blank"
              rel="noreferrer noopener"
              id="ctaButton"
            >
              <address className="home-cta-button2 home-cta-button">
                <span className="cta-button-icon">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M8 2v4m8-4v4"></path>
                      <rect x="3" y="4" rx="2" width="18" height="18"></rect>
                      <path d="M3 10h18"></path>
                    </g>
                  </svg>
                </span>
                <span className="home-cta-button-text cta-button-text">
                  Agenda tu consultoría gratuita
                </span>
              </address>
            </a>
            <div className="cta-button-glow"></div>
          </div>
          <div className="cta-secondary-contact">
            <span className="cta-contact-icon">
              <svg
                width="20"
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                viewBox="0 0 24 24"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                  <rect x="2" y="4" rx="2" width="20" height="16"></rect>
                </g>
              </svg>
            </span>
            <span className="cta-contact-text">
              <span>
                {' '}
                Or email us at
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <a href="mailto:hello@bunshinai.com?subject=">
                <div className="home-cta-email-link">
                  <span>
                    {' '}
                    cesar@bunshinai.com
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </div>
              </a>
            </span>
          </div>
        </div>
        <div className="cta-bg-pattern">
          <div className="cta-pattern-grid"></div>
          <div className="cta-pattern-circle cta-pattern-circle-1"></div>
          <div className="cta-pattern-circle cta-pattern-circle-2"></div>
        </div>
      </section>
      <div className="home-container17">
        <div className="home-container18">
          <Script
            html={`<style>
        @keyframes cta-pulse {0%,100% {transform: scale(1);
opacity: 0.2;}
50% {transform: scale(1.1);
opacity: 0.3;}}@keyframes cta-sparkle-float {0%,100% {transform: translateY(0px) rotate(0deg);}
50% {transform: translateY(-10px) rotate(5deg);}}
        </style> `}
          ></Script>
        </div>
      </div>
      <div className="home-container19">
        <div className="home-container20">
          <Script
            html={`<script>
(function(){
  // Enhanced button interaction with ripple effect
  const ctaButton = document.getElementById("ctaButton")

  if (ctaButton) {
    ctaButton.addEventListener("click", function (e) {
      // Create ripple effect
      const ripple = document.createElement("span")
      const rect = this.getBoundingClientRect()
      const size = Math.max(rect.width, rect.height)
      const x = e.clientX - rect.left - size / 2
      const y = e.clientY - rect.top - size / 2

      ripple.style.width = ripple.style.height = size + "px"
      ripple.style.left = x + "px"
      ripple.style.top = y + "px"
      ripple.style.position = "absolute"
      ripple.style.borderRadius = "50%"
      ripple.style.background = "rgba(255, 255, 255, 0.5)"
      ripple.style.transform = "scale(0)"
      ripple.style.animation = "cta-ripple 0.6s ease-out"
      ripple.style.pointerEvents = "none"

      this.appendChild(ripple)

      setTimeout(() => ripple.remove(), 600)
    })
  }

  // Add ripple animation dynamically
  const style = document.createElement("style")
  style.textContent = \`
  @keyframes cta-ripple {
    to {
      transform: scale(2);
      opacity: 0;
    }
  }
\`
  document.head.appendChild(style)

  // Parallax effect on scroll for background elements
  let ticking = false

  function updateParallax() {
    const section = document.querySelector(".bunshin-cta-section")
    if (!section) return

    const rect = section.getBoundingClientRect()
    const scrollPercent =
      (window.innerHeight - rect.top) / (window.innerHeight + rect.height)

    if (scrollPercent > 0 && scrollPercent < 1) {
      const circles = section.querySelectorAll(".cta-pattern-circle")
      circles.forEach((circle, index) => {
        const speed = (index + 1) * 0.3
        const offset = (scrollPercent - 0.5) * 100 * speed
        circle.style.transform = \`translate(\${offset}px, \${offset * 0.5}px)\`
      })
    }

    ticking = false
  }

  function requestParallax() {
    if (!ticking) {
      window.requestAnimationFrame(updateParallax)
      ticking = true
    }
  }

  window.addEventListener("scroll", requestParallax, { passive: true })

  // Initial parallax update
  updateParallax()
})()
</script>`}
          ></Script>
        </div>
      </div>
      <a href="https://play.teleporthq.io/signup" className="home-link4">
        <div aria-label="Sign up to TeleportHQ" className="home-container21">
          <svg
            width="24"
            height="24"
            viewBox="0 0 19 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="home-icon94"
          >
            <path
              d="M9.1017 4.64355H2.17867C0.711684 4.64355 -0.477539 5.79975 -0.477539 7.22599V13.9567C-0.477539 15.3829 0.711684 16.5391 2.17867 16.5391H9.1017C10.5687 16.5391 11.7579 15.3829 11.7579 13.9567V7.22599C11.7579 5.79975 10.5687 4.64355 9.1017 4.64355Z"
              fill="#B23ADE"
            ></path>
            <path
              d="M10.9733 12.7878C14.4208 12.7878 17.2156 10.0706 17.2156 6.71886C17.2156 3.3671 14.4208 0.649963 10.9733 0.649963C7.52573 0.649963 4.73096 3.3671 4.73096 6.71886C4.73096 10.0706 7.52573 12.7878 10.9733 12.7878Z"
              fill="#FF5C5C"
            ></path>
            <path
              d="M17.7373 13.3654C19.1497 14.1588 19.1497 15.4634 17.7373 16.2493L10.0865 20.5387C8.67402 21.332 7.51855 20.6836 7.51855 19.0968V10.5141C7.51855 8.92916 8.67402 8.2807 10.0865 9.07221L17.7373 13.3654Z"
              fill="#2874DE"
            ></path>
          </svg>
          <span className="home-text33">Built in TeleportHQ</span>
        </div>
      </a>
    </div>
  )
}

export default Home
