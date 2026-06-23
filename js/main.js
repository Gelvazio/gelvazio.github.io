(function () {
  'use strict';

  // ── Typing Effect ───────────────────────────────────────
  const phrases = [
    'Desenvolvedor Backend Senior',
    'Professor de Desenvolvimento',
    'Especialista em PHP & Python',
    'Engenheiro de IA em Formacao',
    'Full Stack Developer',
  ];

  var typingEl = document.getElementById('typing-text');
  var phraseIdx = 0;
  var charIdx = 0;
  var deleting = false;

  function typeLoop() {
    var current = phrases[phraseIdx];

    if (deleting) {
      charIdx--;
      typingEl.textContent = current.substring(0, charIdx);
      if (charIdx === 0) {
        deleting = false;
        phraseIdx = (phraseIdx + 1) % phrases.length;
        setTimeout(typeLoop, 400);
        return;
      }
      setTimeout(typeLoop, 35);
    } else {
      charIdx++;
      typingEl.textContent = current.substring(0, charIdx);
      if (charIdx === current.length) {
        deleting = true;
        setTimeout(typeLoop, 2000);
        return;
      }
      setTimeout(typeLoop, 70);
    }
  }

  if (typingEl) typeLoop();

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

    // Navbar shadow
    if (scrollY > 50) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }

    // Scroll to top button
    if (scrollY > 500) {
      scrollTopBtn.classList.add('visible');
    } else {
      scrollTopBtn.classList.remove('visible');
    }

    // Active nav link
    var current = '';
    for (var i = 0; i < sections.length; i++) {
      var section = sections[i];
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

  // Scroll to top
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

  // Close mobile menu on link click
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

            // Animate skill bars when visible
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

      skillTabs.forEach(function (t) { t.classList.remove('active'); });
      skillPanels.forEach(function (p) { p.classList.remove('active'); });

      this.classList.add('active');
      var panel = document.getElementById('panel-' + target);
      if (panel) {
        panel.classList.add('active');

        // Trigger skill bar animations for newly active panel
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

  // Initial scroll check
  onScroll();
})();
