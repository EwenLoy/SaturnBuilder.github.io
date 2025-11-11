// ...всё оригинальное содержимое до showMobileMenu...

function showMobileMenu(){
  const currentLang = localStorage.getItem('saturn_lang') || savedLang;
  const dict = translations[currentLang] || translations.ru;
  const overlay = document.createElement('div'); 
  overlay.id = 'mobileNavOverlay';
  overlay.style = `
    position: fixed;
    top: 110px;
    left: 12px;
    right: 12px;
    bottom: 12px;
    background: linear-gradient(180deg, rgba(6,6,10,0.96), rgba(6,6,10,0.92));
    /* backdrop-filter: blur(10px); -- УДАЛЕНО */
    border-radius: 22px;
    padding: 32px;
    overflow-y: auto;
    z-index: 1050;
    color: var(--text);
    font-weight: 700;
  `;
  overlay.innerHTML = `
    <div class="mobile-menu-content">
      <a href="#what-is" class="navlink mobile-item">
        <i class="fas fa-info-circle"></i> ${dict.navWhat}
      </a>
      <a href="#features" class="navlink mobile-item">
        <i class="fas fa-cogs"></i> ${dict.navFeatures}
      </a>
      <a href="#start" class="navlink mobile-item">
        <i class="fas fa-play-circle"></i> ${dict.navStart}
      </a>
      <a href="#usage" class="navlink mobile-item">
        <i class="fas fa-question-circle"></i> ${dict.navUsage}
      </a>
      <a href="https://github.com/EwenLoy/Saturn-Builder" target="_blank" class="navlink mobile-item github-btn">
        <i class="fab fa-github"></i> ${dict.githubBtn}
      </a>
      <button id="closeMobileNav" class="close-btn">
        <i class="fas fa-times"></i> ${dict.closeBtn}
      </button>
    </div>
  `;
  document.body.appendChild(overlay);
  document.getElementById('closeMobileNav').addEventListener('click', hideMobileMenu);
  overlay.querySelectorAll('a').forEach(a=> a.addEventListener('click', ()=> setTimeout(hideMobileMenu, 200)));
}

// ...всё остальное без изменений...
