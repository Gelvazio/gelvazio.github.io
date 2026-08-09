(function () {
  'use strict';

  // ── i18n Data (inline) ──────────────────────────────────
  var langData = {
    "pt": {
      "nav.inicio": "Inicio",
      "nav.sobre": "Sobre",
      "nav.experiencia": "Experiencia",
      "nav.skills": "Skills",
      "nav.formacao": "Formacao",
      "nav.contato": "Contato",
      "hero.greeting": "Ola, eu sou",
      "hero.card.backend.title": "Backend Developer",
      "hero.card.backend.desc": "PHP • Python • Laravel • Django",
      "hero.card.professor.title": "Professor",
      "hero.card.professor.desc": "Senai SC • Tecnologia da Informacao e Comunicacao",
      "hero.card.math.title": "Professor",
      "hero.card.math.desc": "Matematica • Licenciatura Uniasselvi (2030)",
      "hero.card.ia.title": "IA Engineer",
      "hero.card.ia.desc": "Pos-Graduacao em Eng. de IA Aplicada",
      "hero.cta.contact": "Fale Comigo",
      "hero.cta.cv": "Download CV",
      "typing.phrases": [
        "Desenvolvedor Backend Senior",
        "Professor de TIC no Senai",
        "Especialista em PHP & Python",
        "Engenheiro de IA em Formacao",
        "Full Stack Developer"
      ],
      "sobre.title": "Sobre Mim",
      "sobre.stat.years": "Anos Exp.",
      "sobre.stat.companies": "Empresas",
      "sobre.stat.certs": "Certificacoes",
      "sobre.p1": "Desenvolvedor Full Stack e Backend Senior com mais de <strong>15 anos de experiencia</strong> em desenvolvimento de software, analise de sistemas e educacao tecnologica.",
      "sobre.p2": "Especialista em <strong>PHP</strong>, <strong>Python</strong> e <strong>Inteligencia Artificial</strong>, com atuacao em projetos de gestao publica, ERP, qualidade de software e aplicacoes web escalaveis.",
      "sobre.p3": "Possuo forte capacidade analitica, visao sistemica e experiencia em ambientes ageis. Atualmente atuo como <strong>professor no Senai SC</strong>, na area de Tecnologia da Informacao e Comunicacao.",
      "sobre.p4": "Atualmente cursando <strong>Pos-Graduacao em Engenharia de IA Aplicada</strong> pela Universidade Anhanguera, buscando unir experiencia de backend com o poder da Inteligencia Artificial.",
      "exp.title": "Experiencia Profissional",
      "exp.senai.role": "Professor de Tecnologia da Informacao e Comunicacao",
      "exp.senai.period": "08/2026 — Atual",
      "exp.senai.items": [
        "Planejamento e ministracao de aulas em Tecnologia da Informacao e Comunicacao",
        "Ensino de fundamentos de informatica, hardware, software, redes e sistemas operacionais",
        "Desenvolvimento de projetos praticos voltados a infraestrutura de TI e suporte tecnico",
        "Aplicacao de metodologias ativas e recursos digitais no ensino tecnico",
        "Formacao de tecnicos para atuacao no mercado de Tecnologia da Informacao"
      ],
      "exp.ibs_qa.role": "Analista de Qualidade",
      "exp.ibs_qa.items": [
        "Gestao de releases e controle de versoes de software Desktop",
        "Automacao de testes utilizando TestComplete e Delphi Script",
        "Validacao de sistemas Desktop, ERP e aplicacoes Mobile",
        "Elaboracao e execucao de planos, casos e testes de regressao",
        "Identificacao, registro e acompanhamento de defeitos e homologacao de novas versoes",
        "Atuacao integrada com equipes de desenvolvimento para melhoria continua dos produtos"
      ],
      "exp.ibs_suporte.role": "Especialista em Suporte de TI",
      "exp.ibs_suporte.items": [
        "Atendimento e suporte tecnico de primeiro nivel aos usuarios",
        "Consultas avancadas em banco de dados para investigacao e correcao de problemas",
        "Analise de regras de negocio e suporte a operacao dos sistemas",
        "Registro, acompanhamento e resolucao de chamados tecnicos"
      ],
      "exp.t2.role": "Desenvolvedor Full Stack PHP | Python",
      "exp.t2.items": [
        "Desenvolvimento e manutencao de sistemas web em PHP, Python e Laravel",
        "Implementacao de APIs REST e integracao com sistemas contabeis, fiscais, bancarios e meios de pagamento",
        "Automacao de processos financeiros, conciliacao bancaria e emissao de documentos fiscais eletronicos",
        "Desenvolvimento de sistemas corporativos, incluindo solucoes de credito e gestao financeira",
        "Migracao e modernizacao de sistemas legados, com refatoracao de regras de negocio e bancos de dados",
        "Modelagem de dados, analise de requisitos e documentacao tecnica"
      ],
      "exp.senac.role": "Professor de Desenvolvimento de Software",
      "exp.senac.items": [
        "Planejamento e ministracao de aulas em Desenvolvimento de Sistemas",
        "Ensino de tecnologias Backend (PHP, Java, Spring Boot, APIs REST e bancos de dados) e Frontend (HTML, CSS e JavaScript)",
        "Orientacao de projetos praticos alinhados as demandas do mercado",
        "Aplicacao de boas praticas de programacao, arquitetura de software e metodologias ageis",
        "Formacao de profissionais para atuacao em desenvolvimento web e sistemas corporativos"
      ],
      "exp.ipm.role": "Analista Desenvolvedor de Sistemas",
      "exp.ipm.items": [
        "Desenvolvimento de aplicacoes web para Gestao Publica",
        "Analise de sistemas para Procuradorias Municipais",
        "Integracao de sistemas e bancos de dados",
        "Levantamento de requisitos, suporte a usuarios e melhorias continuas"
      ],
      "skills.title": "Habilidades Tecnicas",
      "skills.tab.backend": "Backend",
      "skills.tab.frontend": "Frontend",
      "skills.tab.ia": "Inteligencia Artificial",
      "skills.tab.tools": "Ferramentas",
      "skills.ia.note": "Em evolucao — Pos-Graduacao em andamento (previsao 2027)",
      "skills.soft.title": "Competencias Comportamentais",
      "skills.soft.leadership": "Lideranca Tecnica e Mentoria",
      "skills.soft.systemic": "Visao Sistemica",
      "skills.soft.analytical": "Pensamento Analitico",
      "skills.soft.communication": "Comunicacao Eficaz",
      "skills.soft.problemsolving": "Gestao de Problemas",
      "skills.skill.sql": "SQL / Bancos de Dados",
      "skills.skill.pythonia": "Python para IA",
      "skills.skill.engai": "Eng. de IA Aplicada",
      "formacao.title": "Formacao e Certificacoes",
      "formacao.posgrad": "Pos-Graduacao em Engenharia de IA Aplicada",
      "formacao.posgrad.inst": "Universidade Anhanguera Sao Paulo",
      "formacao.posgrad.status": "Em andamento — Previsao 2027",
      "formacao.grad": "Tecnologo em Analise e Desenvolvimento de Sistemas",
      "formacao.grad.inst": "UNINTER Centro Universitario Internacional",
      "formacao.grad.status": "Concluido — 2017",
      "formacao.certs.title": "Certificacoes",
      "formacao.cert.delphi": "Programador Delphi Basico — Proway",
      "formacao.cert.logica": "Logica de Algoritmos — Prowayinfo",
      "formacao.cert.django": "API com Django 3: Django Rest Framework",
      "formacao.cert.pyoo": "Python: avancando na orientacao a objetos",
      "formacao.cert.pycol": "Python Collections parte 1: listas e tuplas",
      "formacao.cert.pyoob": "Python: entendendo a Orientacao a Objetos",
      "formacao.cert.pystart": "Python: comecando com a linguagem",
      "contato.title": "Contato",
      "contato.intro": "Estou disponivel para novas oportunidades e colaboracoes. Entre em contato e vamos conversar!",
      "contato.label.email": "Email",
      "contato.label.phone": "Telefone",
      "contato.download": "Download do Curriculo (PDF)",
      "contato.location": "📍 Rio do Sul — SC, Brasil",
      "footer": "© 2026 Gelvazio Camargo. Todos os direitos reservados."
    },
    "en": {
      "nav.inicio": "Home",
      "nav.sobre": "About",
      "nav.experiencia": "Experience",
      "nav.skills": "Skills",
      "nav.formacao": "Education",
      "nav.contato": "Contact",
      "hero.greeting": "Hi, I'm",
      "hero.card.backend.title": "Backend Developer",
      "hero.card.backend.desc": "PHP • Python • Laravel • Django",
      "hero.card.professor.title": "Professor",
      "hero.card.professor.desc": "Senai SC • Information & Communication Technology",
      "hero.card.math.title": "Professor",
      "hero.card.math.desc": "Mathematics • Uniasselvi Degree (2030)",
      "hero.card.ia.title": "AI Engineer",
      "hero.card.ia.desc": "Postgraduate in Applied AI Engineering",
      "hero.cta.contact": "Get in Touch",
      "hero.cta.cv": "Download CV",
      "typing.phrases": [
        "Senior Backend Developer",
        "ICT Professor at Senai",
        "PHP & Python Specialist",
        "AI Engineer in Training",
        "Full Stack Developer"
      ],
      "sobre.title": "About Me",
      "sobre.stat.years": "Years Exp.",
      "sobre.stat.companies": "Companies",
      "sobre.stat.certs": "Certifications",
      "sobre.p1": "Full Stack and Senior Backend Developer with over <strong>15 years of experience</strong> in software development, systems analysis, and technology education.",
      "sobre.p2": "Specialist in <strong>PHP</strong>, <strong>Python</strong>, and <strong>Artificial Intelligence</strong>, with experience in public management projects, ERP, software quality, and scalable web applications.",
      "sobre.p3": "I have strong analytical skills, systemic vision, and experience in agile environments. I currently work as a <strong>professor at Senai SC</strong>, in the area of Information and Communication Technology.",
      "sobre.p4": "Currently pursuing a <strong>Postgraduate degree in Applied AI Engineering</strong> at Anhanguera University, aiming to combine backend experience with the power of Artificial Intelligence.",
      "exp.title": "Professional Experience",
      "exp.senai.role": "Information and Communication Technology Professor",
      "exp.senai.period": "08/2026 — Present",
      "exp.senai.items": [
        "Planning and teaching classes in Information and Communication Technology",
        "Teaching fundamentals of computing, hardware, software, networks, and operating systems",
        "Developing practical projects focused on IT infrastructure and technical support",
        "Applying active methodologies and digital resources in technical education",
        "Training technicians for careers in the Information Technology market"
      ],
      "exp.ibs_qa.role": "Quality Analyst",
      "exp.ibs_qa.items": [
        "Release management and version control for Desktop software",
        "Test automation using TestComplete and Delphi Script",
        "Validation of Desktop, ERP, and Mobile systems",
        "Development and execution of regression test plans and cases",
        "Bug identification, logging, and tracking; new version homologation",
        "Integrated collaboration with development teams for continuous product improvement"
      ],
      "exp.ibs_suporte.role": "IT Support Specialist",
      "exp.ibs_suporte.items": [
        "First-level technical support and incident resolution for end users",
        "Advanced database queries for problem investigation and correction",
        "Business rules analysis and system operations support",
        "Ticket registration, follow-up, and resolution"
      ],
      "exp.t2.role": "Full Stack Developer PHP | Python",
      "exp.t2.items": [
        "Development and maintenance of web systems in PHP, Python, and Laravel",
        "Implementation of REST APIs and integration with accounting, tax, banking, and payment systems",
        "Automation of financial processes, bank reconciliation, and electronic tax document issuance",
        "Development of corporate systems, including credit and financial management solutions",
        "Migration and modernization of legacy systems, with refactoring of business rules and databases",
        "Data modeling, requirements analysis, and technical documentation"
      ],
      "exp.senac.role": "Software Development Professor",
      "exp.senac.items": [
        "Planning and teaching classes in Systems Development",
        "Teaching Backend technologies (PHP, Java, Spring Boot, REST APIs, and databases) and Frontend (HTML, CSS, and JavaScript)",
        "Mentoring practical projects aligned with market demands",
        "Applying best practices in programming, software architecture, and agile methodologies",
        "Training professionals for careers in web development and corporate systems"
      ],
      "exp.ipm.role": "Systems Developer Analyst",
      "exp.ipm.items": [
        "Development of web applications for Public Management",
        "Systems analysis for Municipal Attorney Offices",
        "Systems and database integration",
        "Requirements gathering, user support, and continuous improvements"
      ],
      "skills.title": "Technical Skills",
      "skills.tab.backend": "Backend",
      "skills.tab.frontend": "Frontend",
      "skills.tab.ia": "Artificial Intelligence",
      "skills.tab.tools": "Tools",
      "skills.ia.note": "Evolving — Postgraduate in progress (expected 2027)",
      "skills.soft.title": "Soft Skills",
      "skills.soft.leadership": "Technical Leadership & Mentoring",
      "skills.soft.systemic": "Systemic Vision",
      "skills.soft.analytical": "Analytical Thinking",
      "skills.soft.communication": "Effective Communication",
      "skills.soft.problemsolving": "Problem Management",
      "skills.skill.sql": "SQL / Databases",
      "skills.skill.pythonia": "Python for AI",
      "skills.skill.engai": "Applied AI Engineering",
      "formacao.title": "Education & Certifications",
      "formacao.posgrad": "Postgraduate in Applied AI Engineering",
      "formacao.posgrad.inst": "Anhanguera University, Sao Paulo",
      "formacao.posgrad.status": "In progress — Expected 2027",
      "formacao.grad": "Associate Degree in Systems Analysis and Development",
      "formacao.grad.inst": "UNINTER International University Center",
      "formacao.grad.status": "Completed — 2017",
      "formacao.certs.title": "Certifications",
      "formacao.cert.delphi": "Basic Delphi Programmer — Proway",
      "formacao.cert.logica": "Algorithm Logic — Prowayinfo",
      "formacao.cert.django": "API with Django 3: Django Rest Framework",
      "formacao.cert.pyoo": "Python: advancing in object-oriented programming",
      "formacao.cert.pycol": "Python Collections part 1: lists and tuples",
      "formacao.cert.pyoob": "Python: understanding Object-Oriented Programming",
      "formacao.cert.pystart": "Python: getting started with the language",
      "contato.title": "Contact",
      "contato.intro": "I'm available for new opportunities and collaborations. Get in touch and let's talk!",
      "contato.label.email": "Email",
      "contato.label.phone": "Phone",
      "contato.download": "Download Resume (PDF)",
      "contato.location": "📍 Rio do Sul — SC, Brazil",
      "footer": "© 2026 Gelvazio Camargo. All rights reserved."
    },
    "es": {
      "nav.inicio": "Inicio",
      "nav.sobre": "Acerca",
      "nav.experiencia": "Experiencia",
      "nav.skills": "Habilidades",
      "nav.formacao": "Formacion",
      "nav.contato": "Contacto",
      "hero.greeting": "Hola, soy",
      "hero.card.backend.title": "Backend Developer",
      "hero.card.backend.desc": "PHP • Python • Laravel • Django",
      "hero.card.professor.title": "Profesor",
      "hero.card.professor.desc": "Senai SC • Tecnologia de la Informacion y Comunicacion",
      "hero.card.math.title": "Profesor",
      "hero.card.math.desc": "Matematicas • Licenciatura Uniasselvi (2030)",
      "hero.card.ia.title": "Ingeniero de IA",
      "hero.card.ia.desc": "Posgrado en Ing. de IA Aplicada",
      "hero.cta.contact": "Contactame",
      "hero.cta.cv": "Descargar CV",
      "typing.phrases": [
        "Desarrollador Backend Senior",
        "Profesor de TIC en Senai",
        "Especialista en PHP y Python",
        "Ingeniero de IA en Formacion",
        "Desarrollador Full Stack"
      ],
      "sobre.title": "Acerca de Mi",
      "sobre.stat.years": "Años Exp.",
      "sobre.stat.companies": "Empresas",
      "sobre.stat.certs": "Certificaciones",
      "sobre.p1": "Desarrollador Full Stack y Backend Senior con mas de <strong>15 años de experiencia</strong> en desarrollo de software, analisis de sistemas y educacion tecnologica.",
      "sobre.p2": "Especialista en <strong>PHP</strong>, <strong>Python</strong> e <strong>Inteligencia Artificial</strong>, con experiencia en proyectos de gestion publica, ERP, calidad de software y aplicaciones web escalables.",
      "sobre.p3": "Poseo fuerte capacidad analitica, vision sistemica y experiencia en entornos agiles. Actualmente actuo como <strong>profesor en Senai SC</strong>, en el area de Tecnologia de la Informacion y Comunicacion.",
      "sobre.p4": "Actualmente cursando un <strong>Posgrado en Ingenieria de IA Aplicada</strong> en la Universidad Anhanguera, buscando unir la experiencia backend con el poder de la Inteligencia Artificial.",
      "exp.title": "Experiencia Profesional",
      "exp.senai.role": "Profesor de Tecnologia de la Informacion y Comunicacion",
      "exp.senai.period": "08/2026 — Actualidad",
      "exp.senai.items": [
        "Planificacion e imparticion de clases en Tecnologia de la Informacion y Comunicacion",
        "Ensenanza de fundamentos de informatica, hardware, software, redes y sistemas operativos",
        "Desarrollo de proyectos practicos orientados a infraestructura de TI y soporte tecnico",
        "Aplicacion de metodologias activas y recursos digitales en la ensenanza tecnica",
        "Formacion de tecnicos para actuacion en el mercado de Tecnologia de la Informacion"
      ],
      "exp.ibs_qa.role": "Analista de Calidad",
      "exp.ibs_qa.items": [
        "Gestion de releases y control de versiones de software Desktop",
        "Automatizacion de pruebas con TestComplete y Delphi Script",
        "Validacion de sistemas Desktop, ERP y aplicaciones Mobile",
        "Elaboracion y ejecucion de planes y casos de prueba de regresion",
        "Identificacion, registro y seguimiento de defectos y homologacion de versiones",
        "Colaboracion integrada con equipos de desarrollo para la mejora continua de productos"
      ],
      "exp.ibs_suporte.role": "Especialista en Soporte de TI",
      "exp.ibs_suporte.items": [
        "Atencion y soporte tecnico de primer nivel a usuarios",
        "Consultas avanzadas en base de datos para investigacion y correccion de problemas",
        "Analisis de reglas de negocio y soporte a la operacion de sistemas",
        "Registro, seguimiento y resolucion de tickets tecnicos"
      ],
      "exp.t2.role": "Desarrollador Full Stack PHP | Python",
      "exp.t2.items": [
        "Desarrollo y mantenimiento de sistemas web en PHP, Python y Laravel",
        "Implementacion de APIs REST e integracion con sistemas contables, fiscales, bancarios y medios de pago",
        "Automatizacion de procesos financieros, conciliacion bancaria y emision de documentos fiscales electronicos",
        "Desarrollo de sistemas corporativos, incluyendo soluciones de credito y gestion financiera",
        "Migracion y modernizacion de sistemas heredados, con refactorizacion de reglas de negocio y bases de datos",
        "Modelado de datos, analisis de requisitos y documentacion tecnica"
      ],
      "exp.senac.role": "Profesor de Desarrollo de Software",
      "exp.senac.items": [
        "Planificacion e imparticion de clases en Desarrollo de Sistemas",
        "Enseñanza de tecnologias Backend (PHP, Java, Spring Boot, APIs REST y bases de datos) y Frontend (HTML, CSS y JavaScript)",
        "Orientacion de proyectos practicos alineados con las demandas del mercado",
        "Aplicacion de buenas practicas de programacion, arquitectura de software y metodologias agiles",
        "Formacion de profesionales para actuacion en desarrollo web y sistemas corporativos"
      ],
      "exp.ipm.role": "Analista Desarrollador de Sistemas",
      "exp.ipm.items": [
        "Desarrollo de aplicaciones web para Gestion Publica",
        "Analisis de sistemas para Procuradurias Municipales",
        "Integracion de sistemas y bases de datos",
        "Relevamiento de requisitos, soporte a usuarios y mejoras continuas"
      ],
      "skills.title": "Habilidades Tecnicas",
      "skills.tab.backend": "Backend",
      "skills.tab.frontend": "Frontend",
      "skills.tab.ia": "Inteligencia Artificial",
      "skills.tab.tools": "Herramientas",
      "skills.ia.note": "En evolucion — Posgrado en curso (prevision 2027)",
      "skills.soft.title": "Competencias Blandas",
      "skills.soft.leadership": "Liderazgo Tecnico y Mentoria",
      "skills.soft.systemic": "Vision Sistemica",
      "skills.soft.analytical": "Pensamiento Analitico",
      "skills.soft.communication": "Comunicacion Eficaz",
      "skills.soft.problemsolving": "Gestion de Problemas",
      "skills.skill.sql": "SQL / Bases de Datos",
      "skills.skill.pythonia": "Python para IA",
      "skills.skill.engai": "Ing. de IA Aplicada",
      "formacao.title": "Formacion y Certificaciones",
      "formacao.posgrad": "Posgrado en Ingenieria de IA Aplicada",
      "formacao.posgrad.inst": "Universidad Anhanguera, Sao Paulo",
      "formacao.posgrad.status": "En curso — Prevision 2027",
      "formacao.grad": "Tecnologo en Analisis y Desarrollo de Sistemas",
      "formacao.grad.inst": "UNINTER Centro Universitario Internacional",
      "formacao.grad.status": "Completado — 2017",
      "formacao.certs.title": "Certificaciones",
      "formacao.cert.delphi": "Programador Delphi Basico — Proway",
      "formacao.cert.logica": "Logica de Algoritmos — Prowayinfo",
      "formacao.cert.django": "API con Django 3: Django Rest Framework",
      "formacao.cert.pyoo": "Python: avanzando en orientacion a objetos",
      "formacao.cert.pycol": "Python Collections parte 1: listas y tuplas",
      "formacao.cert.pyoob": "Python: entendiendo la Orientacion a Objetos",
      "formacao.cert.pystart": "Python: comenzando con el lenguaje",
      "contato.title": "Contacto",
      "contato.intro": "¡Estoy disponible para nuevas oportunidades y colaboraciones. Contactame y hablemos!",
      "contato.label.email": "Email",
      "contato.label.phone": "Telefono",
      "contato.download": "Descargar Curriculo (PDF)",
      "contato.location": "📍 Rio do Sul — SC, Brasil",
      "footer": "© 2026 Gelvazio Camargo. Todos los derechos reservados."
    }
  };

  var currentLang = 'pt';

  // ── i18n: Apply ─────────────────────────────────────────
  function t(key) {
    if (!langData[currentLang]) return null;
    return langData[currentLang][key] || null;
  }

  function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('portfolio-lang', lang);
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : lang;

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var val = t(el.getAttribute('data-i18n'));
      if (val) el.textContent = val;
    });

    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var val = t(el.getAttribute('data-i18n-html'));
      if (val) el.innerHTML = val;
    });

    document.querySelectorAll('[data-i18n-list]').forEach(function (ul) {
      var items = t(ul.getAttribute('data-i18n-list'));
      if (items && Array.isArray(items)) {
        ul.innerHTML = '';
        items.forEach(function (text) {
          var li = document.createElement('li');
          li.textContent = text;
          ul.appendChild(li);
        });
      }
    });

    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    restartTyping();
  }

  // ── Lang Switcher ───────────────────────────────────────
  document.getElementById('lang-switcher').addEventListener('click', function (e) {
    var btn = e.target.closest('.lang-btn');
    if (!btn) return;
    var lang = btn.getAttribute('data-lang');
    if (lang && langData[lang]) {
      applyLanguage(lang);
    }
  });

  // ── Theme Toggle ────────────────────────────────────────
  var currentTheme = localStorage.getItem('portfolio-theme') || 'dark';

  function applyTheme(theme) {
    currentTheme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
  }

  applyTheme(currentTheme);

  document.getElementById('theme-toggle').addEventListener('click', function () {
    applyTheme(currentTheme === 'dark' ? 'light' : 'dark');
  });

  // ── Typing Effect ───────────────────────────────────────
  var typingEl = document.getElementById('typing-text');
  var phraseIdx = 0;
  var charIdx = 0;
  var deleting = false;
  var typingTimer = null;

  function getTypingPhrases() {
    var phrases = t('typing.phrases');
    if (phrases && Array.isArray(phrases)) return phrases;
    return [
      'Desenvolvedor Backend Senior',
      'Professor de Desenvolvimento',
      'Especialista em PHP & Python',
      'Engenheiro de IA em Formacao',
      'Full Stack Developer'
    ];
  }

  function typeLoop() {
    var phrases = getTypingPhrases();
    var current = phrases[phraseIdx % phrases.length];

    if (deleting) {
      charIdx--;
      typingEl.textContent = current.substring(0, charIdx);
      if (charIdx === 0) {
        deleting = false;
        phraseIdx = (phraseIdx + 1) % phrases.length;
        typingTimer = setTimeout(typeLoop, 400);
        return;
      }
      typingTimer = setTimeout(typeLoop, 35);
    } else {
      charIdx++;
      typingEl.textContent = current.substring(0, charIdx);
      if (charIdx === current.length) {
        deleting = true;
        typingTimer = setTimeout(typeLoop, 2000);
        return;
      }
      typingTimer = setTimeout(typeLoop, 70);
    }
  }

  function restartTyping() {
    if (typingTimer) clearTimeout(typingTimer);
    phraseIdx = 0;
    charIdx = 0;
    deleting = false;
    if (typingEl) {
      typingEl.textContent = '';
      typeLoop();
    }
  }

  // ── Particles ───────────────────────────────────────────
  var particlesContainer = document.getElementById('particles');

  function createParticle() {
    var el = document.createElement('div');
    el.className = 'particle';

    var size = Math.random() * 4 + 2;
    var colors = ['#ff4fa3', '#34e0d7', '#ffb84d', '#5ab8ff', '#b58bff'];
    var color = colors[Math.floor(Math.random() * colors.length)];
    var duration = Math.random() * 8 + 6;

    el.style.width = size + 'px';
    el.style.height = size + 'px';
    el.style.background = color;
    el.style.boxShadow = '0 0 ' + (size * 2) + 'px ' + color;
    el.style.left = Math.random() * 100 + '%';
    el.style.bottom = '-10px';
    el.style.animationDuration = duration + 's';

    particlesContainer.appendChild(el);

    setTimeout(function () {
      el.remove();
    }, duration * 1000);
  }

  if (particlesContainer) {
    setInterval(createParticle, 300);
    for (var i = 0; i < 15; i++) {
      setTimeout(createParticle, i * 200);
    }
  }

  // ── Scroll Spy & Navbar ─────────────────────────────────
  var navLinks = document.querySelectorAll('.nav-link');
  var sections = document.querySelectorAll('section[id]');
  var nav = document.getElementById('nav');
  var scrollTopBtn = document.getElementById('scroll-top');

  function onScroll() {
    var scrollY = window.scrollY;

    if (scrollY > 50) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }

    if (scrollY > 500) {
      scrollTopBtn.classList.add('visible');
    } else {
      scrollTopBtn.classList.remove('visible');
    }

    var current = '';
    for (var si = 0; si < sections.length; si++) {
      var section = sections[si];
      var top = section.offsetTop - 100;
      if (scrollY >= top) {
        current = section.getAttribute('id');
      }
    }

    for (var j = 0; j < navLinks.length; j++) {
      navLinks[j].classList.remove('active');
      if (navLinks[j].getAttribute('href') === '#' + current) {
        navLinks[j].classList.add('active');
      }
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });

  scrollTopBtn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // ── Mobile Menu ─────────────────────────────────────────
  var navToggle = document.getElementById('nav-toggle');
  var navLinksContainer = document.getElementById('nav-links');

  navToggle.addEventListener('click', function () {
    navToggle.classList.toggle('open');
    navLinksContainer.classList.toggle('open');
  });

  for (var k = 0; k < navLinks.length; k++) {
    navLinks[k].addEventListener('click', function () {
      navToggle.classList.remove('open');
      navLinksContainer.classList.remove('open');
    });
  }

  // ── Reveal on Scroll (IntersectionObserver) ─────────────
  var revealElements = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            var bars = entry.target.querySelectorAll('.skill-fill');
            bars.forEach(function (bar) {
              var w = bar.getAttribute('data-width');
              if (w) bar.style.width = w + '%';
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    revealElements.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    revealElements.forEach(function (el) {
      el.classList.add('visible');
    });
  }

  // ── Skills Tabs ─────────────────────────────────────────
  var skillTabs = document.querySelectorAll('.skills-tab');
  var skillPanels = document.querySelectorAll('.skills-panel');

  skillTabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      var target = this.getAttribute('data-tab');
      skillTabs.forEach(function (tt) { tt.classList.remove('active'); });
      skillPanels.forEach(function (p) { p.classList.remove('active'); });
      this.classList.add('active');
      var panel = document.getElementById('panel-' + target);
      if (panel) {
        panel.classList.add('active');
        var bars = panel.querySelectorAll('.skill-fill');
        bars.forEach(function (bar) {
          bar.style.width = '0';
          setTimeout(function () {
            var w = bar.getAttribute('data-width');
            if (w) bar.style.width = w + '%';
          }, 50);
        });
      }
    });
  });

  // ── Smooth scroll for anchor links ──────────────────────
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      var targetId = this.getAttribute('href');
      if (targetId === '#') return;
      var target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // ── Init ────────────────────────────────────────────────
  onScroll();
  applyLanguage(currentLang);
})();
