import React from 'react'
import Head from 'next/head'

const html = String.raw`
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>BunshinAI — AI Lead Generation & Sales Agency</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&family=Noto+Sans+JP:wght@300;400;700&display=swap" rel="stylesheet" />
  <style>
    *, *::before, *::after { box-sizing: border-box; }
    body {
      background-color: #0a0a0a;
      color: #fff;
      font-family: 'Montserrat', sans-serif;
      margin: 0;
      -webkit-font-smoothing: antialiased;
    }

    /* ── Colors ── */
    :root {
      --red:       #D0021B;
      --red-dim:   #9B0015;
      --red-glow:  rgba(208,2,27,0.18);
      --white:     #ffffff;
      --off-white: #e8e8e8;
      --gray:      rgba(255,255,255,0.45);
      --gray-dim:  rgba(255,255,255,0.2);
      --border:    rgba(255,255,255,0.08);
      --border-red:rgba(208,2,27,0.3);
      --bg:        #0a0a0a;
      --bg2:       #111111;
      --bg3:       #161616;
    }

    /* ── Utilities ── */
    .red-text { color: var(--red); }
    .gradient-red { background: linear-gradient(135deg, #D0021B 0%, #FF1F3A 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
    .gradient-white { background: linear-gradient(135deg, #fff 0%, #aaa 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }

    /* ── Buttons ── */
    .btn-red {
      background: var(--red);
      border-radius: 3px;
      color: #fff;
      font-weight: 700;
      font-size: 13px;
      padding: 14px 32px;
      display: inline-block;
      cursor: pointer;
      text-decoration: none;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      transition: background 0.2s, box-shadow 0.2s;
      font-family: 'Montserrat', sans-serif;
    }
    .btn-red:hover { background: #B50018; box-shadow: 0 0 24px rgba(208,2,27,0.4); }

    .btn-ghost {
      border: 1px solid rgba(255,255,255,0.25);
      border-radius: 3px;
      color: rgba(255,255,255,0.8);
      font-weight: 600;
      font-size: 13px;
      padding: 13px 32px;
      display: inline-block;
      cursor: pointer;
      text-decoration: none;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      transition: border-color 0.2s, color 0.2s;
    }
    .btn-ghost:hover { border-color: var(--red); color: #fff; }

    /* ── Cards ── */
    .card {
      background: var(--bg2);
      border: 1px solid var(--border);
      border-radius: 2px;
      transition: border-color 0.25s;
    }
    .card:hover { border-color: rgba(208,2,27,0.35); }

    /* ── Nav ── */
    .nav-wrap {
      background: rgba(10,10,10,0.92);
      backdrop-filter: blur(14px);
      border-bottom: 1px solid var(--border);
    }

    /* ── Geometric bg (subtle mandala-grid) ── */
    .geo-bg {
      position: absolute; inset: 0; overflow: hidden; pointer-events: none; z-index: 0;
    }
    .geo-bg::before {
      content: '';
      position: absolute;
      top: 50%; left: 50%;
      transform: translate(-50%,-50%);
      width: 900px; height: 900px;
      background:
        radial-gradient(circle at center, transparent 140px, rgba(208,2,27,0.04) 141px, rgba(208,2,27,0.04) 142px, transparent 143px),
        radial-gradient(circle at center, transparent 240px, rgba(208,2,27,0.035) 241px, rgba(208,2,27,0.035) 242px, transparent 243px),
        radial-gradient(circle at center, transparent 360px, rgba(208,2,27,0.03) 361px, rgba(208,2,27,0.03) 362px, transparent 363px),
        radial-gradient(circle at center, transparent 490px, rgba(208,2,27,0.025) 491px, rgba(208,2,27,0.025) 492px, transparent 493px);
    }
    .geo-bg::after {
      content: '';
      position: absolute;
      top: -200px; left: 50%;
      transform: translateX(-50%);
      width: 800px; height: 600px;
      background: radial-gradient(ellipse at 50% 0%, rgba(208,2,27,0.12) 0%, transparent 65%);
    }

    /* ── Red glow divider line ── */
    .katana-line {
      height: 1px;
      background: linear-gradient(90deg, transparent 0%, var(--red) 40%, var(--red) 60%, transparent 100%);
      opacity: 0.4;
      width: 80px;
      margin: 0 auto;
    }

    /* ── Tag badge ── */
    .tag {
      display: inline-block;
      font-size: 10px;
      font-weight: 700;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: var(--red);
      border: 1px solid rgba(208,2,27,0.4);
      border-radius: 2px;
      padding: 5px 14px;
      font-family: 'Noto Sans JP', 'Montserrat', sans-serif;
    }

    /* ── Stat pill ── */
    .stat-num {
      font-size: 38px;
      font-weight: 900;
      line-height: 1;
      color: var(--red);
    }
    .stat-label {
      font-size: 10px;
      font-weight: 600;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--gray);
      margin-top: 6px;
    }

    /* ── Service icon box ── */
    .icon-box {
      width: 44px; height: 44px;
      border: 1px solid rgba(208,2,27,0.35);
      border-radius: 2px;
      display: flex; align-items: center; justify-content: center;
      background: rgba(208,2,27,0.07);
      flex-shrink: 0;
    }

    /* ── Case study card ── */
    .case-card {
      background: var(--bg2);
      border: 1px solid var(--border);
      border-radius: 2px;
    }
    .case-tag {
      font-size: 9px; font-weight: 700; letter-spacing: 0.14em;
      text-transform: uppercase; color: var(--red);
    }
    .result-block {
      border-left: 2px solid var(--red);
      padding-left: 14px;
    }

    /* ── FAQ ── */
    .faq-item {
      border: 1px solid var(--border);
      border-radius: 2px;
      padding: 20px 22px;
      cursor: pointer;
      transition: border-color 0.2s;
    }
    .faq-item:hover { border-color: rgba(208,2,27,0.3); }

    /* ── Footer ── */
    .footer-link { color: rgba(255,255,255,0.3); font-size: 12px; text-decoration: none; transition: color 0.2s; }
    .footer-link:hover { color: var(--red); }

    /* ── CTA section ── */
    .cta-bg {
      background: #0f0f0f;
      border-top: 1px solid var(--border);
      border-bottom: 1px solid var(--border);
      position: relative;
      overflow: hidden;
    }
    .cta-bg::before {
      content: '';
      position: absolute; top: 0; left: 0; right: 0; bottom: 0;
      background: radial-gradient(ellipse at 50% 100%, rgba(208,2,27,0.1) 0%, transparent 60%);
      pointer-events: none;
    }

    /* ── Japanese character accent ── */
    .jp-char {
      font-family: 'Noto Sans JP', sans-serif;
      font-weight: 300;
      font-size: 11px;
      letter-spacing: 0.08em;
      color: rgba(208,2,27,0.5);
    }

    /* ── Process step ── */
    .step-num {
      font-size: 11px; font-weight: 700; color: var(--red);
      letter-spacing: 0.1em;
    }
    .step-line {
      width: 1px; background: rgba(208,2,27,0.25);
      flex-shrink: 0;
    }

    /* ── Guarantee badge ── */
    .guarantee {
      display: flex; align-items: center; gap: 10px;
      font-size: 12.5px; color: rgba(255,255,255,0.55); font-weight: 500;
    }
    .guarantee svg { flex-shrink: 0; }
  </style>
</head>
<body>

<!-- ═══════════════════════════════════════
     NAVBAR
═══════════════════════════════════════ -->
<nav class="nav-wrap" style="position:fixed;top:0;left:0;right:0;z-index:50;">
  <div style="max-width:1160px;margin:0 auto;padding:0 32px;display:flex;align-items:center;justify-content:space-between;height:64px;">

    <!-- Logo -->
    <a href="#" style="display:flex;align-items:center;gap:10px;text-decoration:none;">
      <div style="width:28px;height:28px;background:var(--red);border-radius:2px;display:flex;align-items:center;justify-content:center;flex-shrink:0;">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
      </div>
      <span style="font-weight:800;font-size:15px;color:#fff;letter-spacing:0.02em;">Bunshin<span style="color:var(--red);">AI</span></span>
    </a>

    <!-- Nav links -->
    <div style="display:flex;align-items:center;gap:36px;font-size:12.5px;font-weight:500;color:rgba(255,255,255,0.55);">
      <a href="#servicios" style="color:rgba(255,255,255,0.55);text-decoration:none;letter-spacing:0.04em;text-transform:uppercase;font-size:11.5px;">Servicios</a>
      <a href="#casos" style="color:rgba(255,255,255,0.55);text-decoration:none;letter-spacing:0.04em;text-transform:uppercase;font-size:11.5px;">Casos de éxito</a>
      <a href="#proceso" style="color:rgba(255,255,255,0.55);text-decoration:none;letter-spacing:0.04em;text-transform:uppercase;font-size:11.5px;">Proceso</a>
      <a href="#nosotros" style="color:rgba(255,255,255,0.55);text-decoration:none;letter-spacing:0.04em;text-transform:uppercase;font-size:11.5px;">Nosotros</a>
    </div>

    <a href="#cta" class="btn-red" style="font-size:11.5px;padding:11px 24px;">Consultoría Gratuita</a>
  </div>
</nav>


<!-- ═══════════════════════════════════════
     HERO
═══════════════════════════════════════ -->
<section style="padding:148px 32px 100px;text-align:center;position:relative;overflow:hidden;">
  <div class="geo-bg"></div>
  <div style="max-width:860px;margin:0 auto;position:relative;z-index:1;">

    <div style="display:flex;align-items:center;justify-content:center;gap:16px;margin-bottom:28px;">
      <div style="height:1px;width:32px;background:var(--red);opacity:0.6;"></div>
      <span class="tag">Agencia B2B de IA · Lead Generation & Sales</span>
      <div style="height:1px;width:32px;background:var(--red);opacity:0.6;"></div>
    </div>

    <h1 style="font-size:58px;font-weight:900;line-height:1.08;margin:0 0 24px;letter-spacing:-0.02em;">
      Tu fuerza de ventas con IA.<br>
      <span class="gradient-red">Siempre activa. Siempre cerrando.</span>
    </h1>

    <p style="color:rgba(255,255,255,0.52);font-size:17px;font-weight:400;line-height:1.7;margin:0 0 14px;max-width:620px;margin-left:auto;margin-right:auto;">
      BunshinAI despliega agentes de inteligencia artificial que buscan, cualifican y convierten leads para tu empresa — 24 horas al día, a escala corporativa.
    </p>
    <p style="color:rgba(255,255,255,0.3);font-size:13px;margin:0 0 44px;" class="jp-char">
      分身 AI — La IA que multiplica tu equipo de ventas
    </p>

    <div style="display:flex;gap:14px;justify-content:center;flex-wrap:wrap;margin-bottom:56px;">
      <a href="#cta" class="btn-red">Agenda tu consultoría gratis</a>
      <a href="#casos" class="btn-ghost">Ver casos de éxito</a>
    </div>

    <!-- Hero mini-stats -->
    <div style="display:inline-flex;gap:48px;flex-wrap:wrap;justify-content:center;border:1px solid var(--border);border-radius:2px;padding:24px 40px;background:rgba(255,255,255,0.02);">
      <div style="text-align:center;">
        <div class="stat-num">+122%</div>
        <div class="stat-label">Llamadas agendadas</div>
      </div>
      <div style="width:1px;background:var(--border);"></div>
      <div style="text-align:center;">
        <div class="stat-num">2.6x</div>
        <div class="stat-label">Leads cualificados</div>
      </div>
      <div style="width:1px;background:var(--border);"></div>
      <div style="text-align:center;">
        <div class="stat-num">-3h</div>
        <div class="stat-label">Gestión manual/día</div>
      </div>
      <div style="width:1px;background:var(--border);"></div>
      <div style="text-align:center;">
        <div class="stat-num">24/7</div>
        <div class="stat-label">Operación continua</div>
      </div>
    </div>
  </div>
</section>

<!-- Thin red divider -->
<div style="padding:0 32px;">
  <div style="max-width:1160px;margin:0 auto;height:1px;background:linear-gradient(90deg,transparent,rgba(208,2,27,0.35),transparent);"></div>
</div>


<!-- ═══════════════════════════════════════
     TECH STACK / SOCIAL PROOF BAR
═══════════════════════════════════════ -->
<div style="padding:20px 32px;background:rgba(255,255,255,0.015);">
  <div style="max-width:1000px;margin:0 auto;display:flex;align-items:center;justify-content:center;gap:56px;flex-wrap:wrap;">
    <span style="font-size:10px;font-weight:700;letter-spacing:0.14em;color:rgba(255,255,255,0.2);text-transform:uppercase;">Tecnología que empleamos</span>
    <span style="color:rgba(255,255,255,0.25);font-size:11.5px;font-weight:600;letter-spacing:0.08em;">OpenAI GPT-4</span>
    <span style="color:rgba(255,255,255,0.25);font-size:11.5px;font-weight:600;letter-spacing:0.08em;">Anthropic Claude</span>
    <span style="color:rgba(255,255,255,0.25);font-size:11.5px;font-weight:600;letter-spacing:0.08em;">Make.com</span>
    <span style="color:rgba(255,255,255,0.25);font-size:11.5px;font-weight:600;letter-spacing:0.08em;">Voiceflow</span>
    <span style="color:rgba(255,255,255,0.25);font-size:11.5px;font-weight:600;letter-spacing:0.08em;">WhatsApp API</span>
  </div>
</div>


<!-- ═══════════════════════════════════════
     SERVICES
═══════════════════════════════════════ -->
<section id="servicios" style="padding:96px 32px;">
  <div style="max-width:1160px;margin:0 auto;">

    <div style="margin-bottom:60px;">
      <div class="tag" style="margin-bottom:16px;">Servicios</div>
      <h2 style="font-size:38px;font-weight:900;color:#fff;margin:0 0 16px;line-height:1.15;letter-spacing:-0.01em;">
        Flujos de IA diseñados<br>para generar y cerrar ventas
      </h2>
      <p style="color:var(--gray);font-size:14px;line-height:1.7;max-width:480px;margin:0;">
        Cada servicio es un sistema autónomo de inteligencia artificial adaptado a las operaciones reales de tu negocio.
      </p>
    </div>

    <div style="display:grid;grid-template-columns:1fr 1fr;gap:2px;">

      <!-- Service 1 -->
      <div class="card" style="padding:36px 36px 32px;">
        <div class="icon-box" style="margin-bottom:22px;">
          <svg width="20" height="20" fill="none" stroke="var(--red)" stroke-width="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
        </div>
        <h3 style="color:#fff;font-weight:700;font-size:18px;margin:0 0 12px;letter-spacing:-0.01em;">Búsqueda Automática de Clientes</h3>
        <p style="color:var(--gray);font-size:13.5px;line-height:1.7;margin:0 0 24px;">Nuestros agentes de IA identifican, investigan y contactan leads de forma autónoma para que tu equipo sólo dedique tiempo a proveer el servicio — no a buscar a quién vendérselo.</p>
        <a href="#cta" style="font-size:12px;font-weight:700;color:var(--red);text-decoration:none;letter-spacing:0.06em;text-transform:uppercase;display:inline-flex;align-items:center;gap:6px;">
          Ver cómo funciona
          <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg>
        </a>
      </div>

      <!-- Service 2 -->
      <div class="card" style="padding:36px 36px 32px;">
        <div class="icon-box" style="margin-bottom:22px;">
          <svg width="20" height="20" fill="none" stroke="var(--red)" stroke-width="2" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/></svg>
        </div>
        <h3 style="color:#fff;font-weight:700;font-size:18px;margin:0 0 12px;letter-spacing:-0.01em;">Cualificación Inteligente de Leads</h3>
        <p style="color:var(--gray);font-size:13.5px;line-height:1.7;margin:0 0 24px;">Un agente de IA se comunica directamente con tus prospectos a través de email y WhatsApp, filtra a los interesados reales, y agenda llamadas con tu equipo — sin intervención humana.</p>
        <a href="#cta" style="font-size:12px;font-weight:700;color:var(--red);text-decoration:none;letter-spacing:0.06em;text-transform:uppercase;display:inline-flex;align-items:center;gap:6px;">
          Ver cómo funciona
          <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg>
        </a>
      </div>

      <!-- Service 3 -->
      <div class="card" style="padding:36px 36px 32px;">
        <div class="icon-box" style="margin-bottom:22px;">
          <svg width="20" height="20" fill="none" stroke="var(--red)" stroke-width="2" viewBox="0 0 24 24"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
        </div>
        <h3 style="color:#fff;font-weight:700;font-size:18px;margin:0 0 12px;letter-spacing:-0.01em;">Campañas de Email Hiperpersonalizadas</h3>
        <p style="color:var(--gray);font-size:13.5px;line-height:1.7;margin:0 0 24px;">Nuestra IA genera secuencias de email completamente personalizadas para cada prospecto — usando datos reales de su empresa, sector y contexto — con tasas de respuesta muy superiores al marketing masivo.</p>
        <a href="#cta" style="font-size:12px;font-weight:700;color:var(--red);text-decoration:none;letter-spacing:0.06em;text-transform:uppercase;display:inline-flex;align-items:center;gap:6px;">
          Ver cómo funciona
          <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg>
        </a>
      </div>

      <!-- Service 4 -->
      <div class="card" style="padding:36px 36px 32px;">
        <div class="icon-box" style="margin-bottom:22px;">
          <svg width="20" height="20" fill="none" stroke="var(--red)" stroke-width="2" viewBox="0 0 24 24"><path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
        </div>
        <h3 style="color:#fff;font-weight:700;font-size:18px;margin:0 0 12px;letter-spacing:-0.01em;">Automatización de Propuestas de Venta</h3>
        <p style="color:var(--gray);font-size:13.5px;line-height:1.7;margin:0 0 24px;">En cuanto tu equipo cuelga una llamada, el sistema genera y envía automáticamente una propuesta personalizada al cliente — con los datos y necesidades extraídas directamente de la conversación.</p>
        <a href="#cta" style="font-size:12px;font-weight:700;color:var(--red);text-decoration:none;letter-spacing:0.06em;text-transform:uppercase;display:inline-flex;align-items:center;gap:6px;">
          Ver cómo funciona
          <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg>
        </a>
      </div>

    </div>
  </div>
</section>


<!-- ═══════════════════════════════════════
     CASE STUDIES
═══════════════════════════════════════ -->
<section id="casos" style="padding:96px 32px;background:var(--bg2);border-top:1px solid var(--border);border-bottom:1px solid var(--border);">
  <div style="max-width:1160px;margin:0 auto;">

    <div style="margin-bottom:56px;">
      <div class="tag" style="margin-bottom:16px;">Casos reales de éxito</div>
      <h2 style="font-size:38px;font-weight:900;color:#fff;margin:0 0 14px;letter-spacing:-0.01em;">
        Resultados medibles.<br>En empresas reales.
      </h2>
      <p style="color:var(--gray);font-size:14px;line-height:1.7;max-width:440px;margin:0;">
        No prometemos teorías. Te mostramos lo que nuestros sistemas han conseguido para negocios como el tuyo.
      </p>
    </div>

    <div style="display:grid;grid-template-columns:1fr;gap:20px;max-width:680px;">

      <!-- Case 1 -->
      <div class="case-card" style="padding:36px;">
        <div style="display:flex;align-items:center;gap:12px;margin-bottom:6px;">
          <div style="width:6px;height:6px;background:var(--red);border-radius:50%;flex-shrink:0;"></div>
          <div class="case-tag">Agencia de Servicios Profesionales</div>
        </div>
        <h3 style="color:#fff;font-weight:700;font-size:17px;margin:0 0 6px;letter-spacing:-0.01em;">Cualificación de Leads y Ofertas Automatizadas</h3>

        <div style="margin:20px 0;padding:16px 0;border-top:1px solid var(--border);border-bottom:1px solid var(--border);">
          <div style="font-size:10px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:rgba(255,255,255,0.25);margin-bottom:8px;">Desafío</div>
          <p style="color:rgba(255,255,255,0.45);font-size:13px;line-height:1.6;margin:0;">El equipo de ventas dedicaba más de 20 horas semanales a buscar, filtrar y cualificar leads manualmente, consumiendo tiempo que debía dedicarse a cerrar ventas.</p>
        </div>

        <div style="margin-bottom:20px;">
          <div style="font-size:10px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:rgba(255,255,255,0.25);margin-bottom:8px;">Solución</div>
          <p style="color:rgba(255,255,255,0.45);font-size:13px;line-height:1.6;margin:0;">Implementamos un sistema de captación y cualificación inteligente que se comunicaba directamente con los leads, filtraba prospectos y agendaba llamadas de forma autónoma.</p>
        </div>

        <div style="font-size:10px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:rgba(255,255,255,0.25);margin-bottom:14px;">Resultados</div>
        <div style="display:flex;gap:24px;">
          <div class="result-block">
            <div style="font-size:28px;font-weight:900;color:var(--red);line-height:1;">+122%</div>
            <div style="font-size:11px;color:var(--gray);margin-top:4px;line-height:1.4;">Llamadas<br>agendadas</div>
          </div>
          <div class="result-block">
            <div style="font-size:28px;font-weight:900;color:var(--red);line-height:1;">2.6x</div>
            <div style="font-size:11px;color:var(--gray);margin-top:4px;line-height:1.4;">Leads<br>cualificados</div>
          </div>
          <div class="result-block">
            <div style="font-size:28px;font-weight:900;color:var(--red);line-height:1;">−38%</div>
            <div style="font-size:11px;color:var(--gray);margin-top:4px;line-height:1.4;">Ciclo de<br>venta</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


<!-- ═══════════════════════════════════════
     HOW IT WORKS / PROCESS
═══════════════════════════════════════ -->
<section id="proceso" style="padding:96px 32px;">
  <div style="max-width:1160px;margin:0 auto;">

    <div style="display:grid;grid-template-columns:1fr 1fr;gap:96px;align-items:start;">

      <div>
        <div class="tag" style="margin-bottom:16px;">El proceso</div>
        <h2 style="font-size:36px;font-weight:900;color:#fff;margin:0 0 18px;line-height:1.15;letter-spacing:-0.01em;">
          Tres pasos para<br>multiplicar tu pipeline
        </h2>
        <p style="color:var(--gray);font-size:14px;line-height:1.7;margin:0 0 36px;">
          En menos de dos semanas tus agentes de IA estarán operativos, generando y cualificando leads de forma autónoma.
        </p>
        <a href="#cta" class="btn-red">Empieza ahora — es gratis</a>
      </div>

      <div style="display:flex;flex-direction:column;gap:0;">
        <!-- Step 1 -->
        <div style="display:flex;gap:20px;padding-bottom:32px;">
          <div style="display:flex;flex-direction:column;align-items:center;">
            <div style="width:36px;height:36px;border:1px solid var(--red);border-radius:2px;display:flex;align-items:center;justify-content:center;flex-shrink:0;">
              <span style="font-size:13px;font-weight:800;color:var(--red);">01</span>
            </div>
            <div class="step-line" style="flex:1;margin-top:8px;"></div>
          </div>
          <div style="padding-top:6px;">
            <h4 style="color:#fff;font-weight:700;font-size:15px;margin:0 0 8px;">Auditoría y Diagnóstico Gratuito</h4>
            <p style="color:var(--gray);font-size:13px;line-height:1.65;margin:0;">Analizamos tu proceso de ventas actual, identificamos los cuellos de botella y diseñamos el sistema de IA más efectivo para tu negocio.</p>
          </div>
        </div>
        <!-- Step 2 -->
        <div style="display:flex;gap:20px;padding-bottom:32px;">
          <div style="display:flex;flex-direction:column;align-items:center;">
            <div style="width:36px;height:36px;border:1px solid var(--red);border-radius:2px;display:flex;align-items:center;justify-content:center;flex-shrink:0;">
              <span style="font-size:13px;font-weight:800;color:var(--red);">02</span>
            </div>
            <div class="step-line" style="flex:1;margin-top:8px;"></div>
          </div>
          <div style="padding-top:6px;">
            <h4 style="color:#fff;font-weight:700;font-size:15px;margin:0 0 8px;">Implementación y Puesta en Marcha</h4>
            <p style="color:var(--gray);font-size:13px;line-height:1.65;margin:0;">Construimos e integramos tus agentes de IA en las herramientas que ya usas. Configuramos los flujos de captación, cualificación y seguimiento adaptados a tu sector.</p>
          </div>
        </div>
        <!-- Step 3 -->
        <div style="display:flex;gap:20px;">
          <div style="display:flex;flex-direction:column;align-items:center;">
            <div style="width:36px;height:36px;border:1px solid var(--red);border-radius:2px;display:flex;align-items:center;justify-content:center;flex-shrink:0;">
              <span style="font-size:13px;font-weight:800;color:var(--red);">03</span>
            </div>
          </div>
          <div style="padding-top:6px;">
            <h4 style="color:#fff;font-weight:700;font-size:15px;margin:0 0 8px;">Optimización y Escala</h4>
            <p style="color:var(--gray);font-size:13px;line-height:1.65;margin:0;">Monitorizamos el rendimiento, iteramos sobre los resultados y escalamos los sistemas que funcionan. Tu pipeline crece de forma continua y predecible.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


<!-- ═══════════════════════════════════════
     FOUNDER
═══════════════════════════════════════ -->
<section id="nosotros" style="padding:96px 32px;border-top:1px solid var(--border);background:var(--bg2);">
  <div style="max-width:1160px;margin:0 auto;">
    <div style="display:grid;grid-template-columns:1fr 1.4fr;gap:80px;align-items:center;">

      <!-- Avatar placeholder -->
      <div style="position:relative;">
        <div style="border:1px solid var(--border-red);border-radius:2px;overflow:hidden;aspect-ratio:3/4;background:var(--bg3);display:flex;align-items:center;justify-content:center;max-width:320px;">
          <img src="https://bunshinai.com/chatgpt%20image%204%20dic%202025%2C%2017_15_22-400h.jpg" alt="César — Fundador de BunshinAI" style="width:100%;height:100%;object-fit:cover;object-position:top;"/>
        </div>
        <!-- Decorative red corner lines -->
        <div style="position:absolute;top:-8px;left:-8px;width:24px;height:24px;border-top:2px solid var(--red);border-left:2px solid var(--red);"></div>
        <div style="position:absolute;bottom:-8px;right:-8px;width:24px;height:24px;border-bottom:2px solid var(--red);border-right:2px solid var(--red);max-width:calc(100% - 0px);"></div>
      </div>

      <div>
        <div class="tag" style="margin-bottom:18px;">Sobre el fundador</div>
        <h2 style="font-size:34px;font-weight:900;color:#fff;margin:0 0 20px;line-height:1.2;letter-spacing:-0.01em;">
          Tecnología de<br>grandes corporaciones.<br>Aplicada a tu empresa.
        </h2>
        <p style="color:var(--gray);font-size:14.5px;line-height:1.75;margin:0 0 18px;">
          Soy César, especialista en automatización e IA para la gestión comercial y de clientes. Antes de fundar BunshinAI, trabajé como ejecutivo en Amazon, donde diseñé e implementé sistemas operativos de alto rendimiento para compañías como <strong style="color:rgba(255,255,255,0.75);">Samsung</strong> y <strong style="color:rgba(255,255,255,0.75);">Lenovo</strong>.
        </p>
        <p style="color:var(--gray);font-size:14.5px;line-height:1.75;margin:0 0 32px;">
          Hoy aplico ese mismo nivel de rigor y tecnología para ayudar a empresas medianas a competir con los recursos que antes sólo tenían las grandes corporaciones.
        </p>
        <div style="display:flex;flex-direction:column;gap:10px;">
          <div class="guarantee">
            <svg width="16" height="16" fill="none" stroke="var(--red)" stroke-width="2" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
            Ex-ejecutivo de Amazon — procesos implementados a escala global
          </div>
          <div class="guarantee">
            <svg width="16" height="16" fill="none" stroke="var(--red)" stroke-width="2" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
            Clientes en sectores inmobiliario, consultoría, servicios profesionales y más
          </div>
          <div class="guarantee">
            <svg width="16" height="16" fill="none" stroke="var(--red)" stroke-width="2" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
            Garantizamos resultados — o no pagas
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


<!-- ═══════════════════════════════════════
     FAQ
═══════════════════════════════════════ -->
<section style="padding:96px 32px;">
  <div style="max-width:1160px;margin:0 auto;display:grid;grid-template-columns:1fr 1.4fr;gap:80px;align-items:start;">

    <div>
      <div class="tag" style="margin-bottom:16px;">FAQ</div>
      <h2 style="font-size:34px;font-weight:900;color:#fff;margin:0 0 16px;line-height:1.2;letter-spacing:-0.01em;">
        Preguntas<br>frecuentes
      </h2>
      <p style="color:var(--gray);font-size:13.5px;line-height:1.7;margin:0 0 32px;">
        Si tienes más preguntas, agenda una consultoría gratuita y te respondemos en persona.
      </p>
      <a href="#cta" class="btn-red">Hablar con un experto</a>
    </div>

    <div style="display:flex;flex-direction:column;gap:8px;">
      <div class="faq-item">
        <div style="display:flex;justify-content:space-between;align-items:center;">
          <span style="color:#fff;font-weight:600;font-size:13.5px;line-height:1.4;padding-right:16px;">¿Necesito conocimientos técnicos para usar BunshinAI?</span>
          <svg width="16" height="16" fill="none" stroke="var(--red)" stroke-width="2.5" viewBox="0 0 24 24" style="flex-shrink:0;"><path d="M12 5v14M5 12h14"/></svg>
        </div>
        <p style="color:var(--gray);font-size:13px;line-height:1.65;margin:14px 0 0;">No. Nos encargamos de toda la implementación técnica. Tu equipo sólo interactúa con el resultado final: leads cualificados y propuestas enviadas automáticamente.</p>
      </div>
      <div class="faq-item">
        <div style="display:flex;justify-content:space-between;align-items:center;">
          <span style="color:#fff;font-weight:600;font-size:13.5px;line-height:1.4;padding-right:16px;">¿En cuánto tiempo empiezo a ver resultados?</span>
          <svg width="16" height="16" fill="none" stroke="var(--red)" stroke-width="2.5" viewBox="0 0 24 24" style="flex-shrink:0;"><path d="M12 5v14M5 12h14"/></svg>
        </div>
        <p style="color:var(--gray);font-size:13px;line-height:1.65;margin:14px 0 0;">La implementación típica tarda entre 1 y 2 semanas. La mayoría de nuestros clientes ven resultados medibles (leads cualificados, llamadas agendadas) en los primeros 30 días.</p>
      </div>
      <div class="faq-item">
        <div style="display:flex;justify-content:space-between;align-items:center;">
          <span style="color:#fff;font-weight:600;font-size:13.5px;line-height:1.4;padding-right:16px;">¿Cómo funciona la garantía de resultados?</span>
          <svg width="16" height="16" fill="none" stroke="var(--red)" stroke-width="2.5" viewBox="0 0 24 24" style="flex-shrink:0;"><path d="M12 5v14M5 12h14"/></svg>
        </div>
        <p style="color:var(--gray);font-size:13px;line-height:1.65;margin:14px 0 0;">Definimos juntos los KPIs y objetivos antes de empezar. Si el sistema no alcanza los resultados pactados en el plazo acordado, no pagas. Así de simple.</p>
      </div>
      <div class="faq-item">
        <div style="display:flex;justify-content:space-between;align-items:center;">
          <span style="color:#fff;font-weight:600;font-size:13.5px;line-height:1.4;padding-right:16px;">¿Se integra con las herramientas que ya uso?</span>
          <svg width="16" height="16" fill="none" stroke="var(--red)" stroke-width="2.5" viewBox="0 0 24 24" style="flex-shrink:0;"><path d="M12 5v14M5 12h14"/></svg>
        </div>
        <p style="color:var(--gray);font-size:13px;line-height:1.65;margin:14px 0 0;">Sí. Nuestros sistemas se integran con CRMs (HubSpot, Salesforce, Pipedrive), correo (Gmail, Outlook), WhatsApp Business y la mayoría de herramientas de ventas estándar del mercado.</p>
      </div>
      <div class="faq-item">
        <div style="display:flex;justify-content:space-between;align-items:center;">
          <span style="color:#fff;font-weight:600;font-size:13.5px;line-height:1.4;padding-right:16px;">¿Para qué tipo de empresas trabajáis?</span>
          <svg width="16" height="16" fill="none" stroke="var(--red)" stroke-width="2.5" viewBox="0 0 24 24" style="flex-shrink:0;"><path d="M12 5v14M5 12h14"/></svg>
        </div>
        <p style="color:var(--gray);font-size:13px;line-height:1.65;margin:14px 0 0;">Trabajamos con pymes y agencias B2B de cualquier sector: inmobiliario, consultoría, servicios profesionales, agencias de marketing, SaaS y más. Si tienes un proceso de ventas, podemos mejorarlo con IA.</p>
      </div>
    </div>
  </div>
</section>


<!-- ═══════════════════════════════════════
     CTA FINAL
═══════════════════════════════════════ -->
<section id="cta" class="cta-bg" style="padding:100px 32px;">
  <div style="max-width:680px;margin:0 auto;text-align:center;position:relative;z-index:1;">

    <div style="margin-bottom:20px;">
      <div style="height:1px;width:48px;background:var(--red);opacity:0.7;margin:0 auto 20px;"></div>
      <div class="tag">Consultoría gratuita · Sin compromiso</div>
    </div>

    <h2 style="font-size:42px;font-weight:900;color:#fff;margin:0 0 16px;line-height:1.12;letter-spacing:-0.02em;">
      ¿Preparado para multiplicar<br>tu pipeline de ventas?
    </h2>
    <p style="color:var(--gray);font-size:15px;line-height:1.7;margin:0 0 44px;">
      Agenda una sesión de 30 minutos sin coste. Analizamos tu negocio, identificamos las oportunidades más grandes y te presentamos un plan concreto.
    </p>

    <a href="mailto:cesar@bunshinai.com" class="btn-red" style="font-size:14px;padding:16px 40px;margin-bottom:28px;display:inline-block;">
      Agenda tu consultoría gratuita
    </a>

    <div style="display:flex;flex-direction:column;gap:10px;align-items:center;margin-top:28px;">
      <div class="guarantee">
        <svg width="15" height="15" fill="none" stroke="var(--red)" stroke-width="2.5" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
        Consultoría gratuita de 30 minutos
      </div>
      <div class="guarantee">
        <svg width="15" height="15" fill="none" stroke="var(--red)" stroke-width="2.5" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
        Sin ningún tipo de compromiso
      </div>
      <div class="guarantee">
        <svg width="15" height="15" fill="none" stroke="var(--red)" stroke-width="2.5" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
        Garantizamos resultados o no pagas
      </div>
    </div>

    <div style="margin-top:32px;padding-top:28px;border-top:1px solid var(--border);">
      <span style="color:rgba(255,255,255,0.25);font-size:12.5px;">O escríbenos directamente a </span>
      <a href="mailto:cesar@bunshinai.com" style="color:var(--red);font-size:12.5px;font-weight:600;text-decoration:none;">cesar@bunshinai.com</a>
    </div>
  </div>
</section>


<!-- ═══════════════════════════════════════
     FOOTER
═══════════════════════════════════════ -->
<footer style="border-top:1px solid var(--border);padding:52px 32px 32px;background:var(--bg);">
  <div style="max-width:1160px;margin:0 auto;">
    <div style="display:grid;grid-template-columns:1.8fr 1fr 1fr 1fr;gap:48px;margin-bottom:48px;">

      <!-- Brand -->
      <div>
        <div style="display:flex;align-items:center;gap:10px;margin-bottom:16px;">
          <div style="width:26px;height:26px;background:var(--red);border-radius:2px;display:flex;align-items:center;justify-content:center;flex-shrink:0;">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
          </div>
          <span style="font-weight:800;font-size:14px;color:#fff;letter-spacing:0.02em;">Bunshin<span style="color:var(--red);">AI</span></span>
        </div>
        <p style="color:rgba(255,255,255,0.28);font-size:12.5px;line-height:1.7;margin:0 0 18px;max-width:240px;">
          Agencia B2B de inteligencia artificial especializada en generación de leads y automatización de ventas.
        </p>
        <p style="color:rgba(255,255,255,0.18);font-size:11px;font-family:'Noto Sans JP',sans-serif;letter-spacing:0.06em;">分身 — Múltiple. Imparable.</p>
      </div>

      <!-- Nav -->
      <div>
        <h4 style="color:#fff;font-weight:700;font-size:11.5px;letter-spacing:0.08em;text-transform:uppercase;margin:0 0 18px;">Servicios</h4>
        <div style="display:flex;flex-direction:column;gap:10px;">
          <a href="#servicios" class="footer-link">Búsqueda de clientes</a>
          <a href="#servicios" class="footer-link">Cualificación de leads</a>
          <a href="#servicios" class="footer-link">Email hiperpersonalizado</a>
          <a href="#servicios" class="footer-link">Automatización de ofertas</a>
        </div>
      </div>

      <!-- Company -->
      <div>
        <h4 style="color:#fff;font-weight:700;font-size:11.5px;letter-spacing:0.08em;text-transform:uppercase;margin:0 0 18px;">Empresa</h4>
        <div style="display:flex;flex-direction:column;gap:10px;">
          <a href="#nosotros" class="footer-link">Sobre nosotros</a>
          <a href="#casos" class="footer-link">Casos de éxito</a>
          <a href="#proceso" class="footer-link">Proceso</a>
          <a href="#cta" class="footer-link">Contacto</a>
        </div>
      </div>

      <!-- Legal -->
      <div>
        <h4 style="color:#fff;font-weight:700;font-size:11.5px;letter-spacing:0.08em;text-transform:uppercase;margin:0 0 18px;">Legal</h4>
        <div style="display:flex;flex-direction:column;gap:10px;">
          <a href="#" class="footer-link">Política de privacidad</a>
          <a href="#" class="footer-link">Aviso legal</a>
          <a href="#" class="footer-link">Cookies</a>
        </div>
      </div>
    </div>

    <div style="border-top:1px solid var(--border);padding-top:22px;display:flex;justify-content:space-between;align-items:center;">
      <p style="color:rgba(255,255,255,0.18);font-size:11.5px;margin:0;">© 2025 BunshinAI · Todos los derechos reservados</p>
      <a href="mailto:cesar@bunshinai.com" style="color:rgba(255,255,255,0.18);font-size:11.5px;text-decoration:none;">cesar@bunshinai.com</a>
    </div>
  </div>
</footer>

</body>
</html>
`

export default function Home() {
  return (
    <>
      <Head>
        <title>BunshinAI</title>
        <meta
          name="description"
          content="Agencia B2B que usa IA y agentes para generar leads y ventas."
        />
      </Head>

      <iframe
        srcDoc={html}
        style={{
          width: '100%',
          minHeight: '100vh',
          border: 'none',
          display: 'block',
        }}
        sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
      />
    </>
  )
}
