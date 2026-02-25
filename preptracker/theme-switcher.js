/**
 * PrepTracker Appearance Switcher
 * 4 tabs: 🎨 Colors · ✏️ Fonts · 🌐 Language · 🖱️ Cursor
 */

/* ══════════════════════════════════════════════════════════
   COLOUR THEMES
══════════════════════════════════════════════════════════ */
const THEMES = {
  'Royal Amethyst': {
    '--pale':'#F2EAF7','--lilac':'#C59DD9','--amethyst':'#7A3F91','--velvet':'#2B0D3E',
    '--bg':'#1A0828','--surface':'#220E34','--surface2':'#2D1345','--surface3':'#3A1A58',
    '--border':'rgba(197,157,217,0.12)','--border2':'rgba(197,157,217,0.22)',
    '--text':'#F2EAF7','--text-mid':'#C59DD9','--text-muted':'rgba(197,157,217,0.45)',
    '--accent':'#9B59C9','--accent2':'#C59DD9','--glow':'rgba(122,63,145,0.35)','--glow2':'rgba(197,157,217,0.12)',
    '--swatch':'linear-gradient(135deg,#7A3F91,#C59DD9)',
  },
  'Ocean Depths': {
    '--pale':'#E8F4F8','--lilac':'#7EC8E3','--amethyst':'#006994','--velvet':'#001F3F',
    '--bg':'#001A35','--surface':'#002244','--surface2':'#003366','--surface3':'#004080',
    '--border':'rgba(126,200,227,0.12)','--border2':'rgba(126,200,227,0.22)',
    '--text':'#E8F4F8','--text-mid':'#7EC8E3','--text-muted':'rgba(126,200,227,0.45)',
    '--accent':'#0096C7','--accent2':'#7EC8E3','--glow':'rgba(0,105,148,0.35)','--glow2':'rgba(126,200,227,0.12)',
    '--swatch':'linear-gradient(135deg,#006994,#7EC8E3)',
  },
  'Midnight Emerald': {
    '--pale':'#E8F5EE','--lilac':'#81C99B','--amethyst':'#1A6B3C','--velvet':'#052015',
    '--bg':'#071C10','--surface':'#0C2918','--surface2':'#133823','--surface3':'#1C4B30',
    '--border':'rgba(129,201,155,0.12)','--border2':'rgba(129,201,155,0.22)',
    '--text':'#E8F5EE','--text-mid':'#81C99B','--text-muted':'rgba(129,201,155,0.45)',
    '--accent':'#2DA05A','--accent2':'#81C99B','--glow':'rgba(26,107,60,0.35)','--glow2':'rgba(129,201,155,0.12)',
    '--swatch':'linear-gradient(135deg,#1A6B3C,#81C99B)',
  },
  'Crimson Dusk': {
    '--pale':'#FAE8E8','--lilac':'#E89898','--amethyst':'#8B1A1A','--velvet':'#2A0808',
    '--bg':'#1C0505','--surface':'#250808','--surface2':'#331010','--surface3':'#441818',
    '--border':'rgba(232,152,152,0.12)','--border2':'rgba(232,152,152,0.22)',
    '--text':'#FAE8E8','--text-mid':'#E89898','--text-muted':'rgba(232,152,152,0.45)',
    '--accent':'#C0392B','--accent2':'#E89898','--glow':'rgba(139,26,26,0.35)','--glow2':'rgba(232,152,152,0.12)',
    '--swatch':'linear-gradient(135deg,#8B1A1A,#E89898)',
  },
  'Golden Obsidian': {
    '--pale':'#FAF3E0','--lilac':'#D4AF37','--amethyst':'#9B7D0A','--velvet':'#1A1500',
    '--bg':'#0F0E00','--surface':'#1A1800','--surface2':'#252200','--surface3':'#302C00',
    '--border':'rgba(212,175,55,0.12)','--border2':'rgba(212,175,55,0.22)',
    '--text':'#FAF3E0','--text-mid':'#D4AF37','--text-muted':'rgba(212,175,55,0.45)',
    '--accent':'#C9A000','--accent2':'#D4AF37','--glow':'rgba(155,125,10,0.35)','--glow2':'rgba(212,175,55,0.12)',
    '--swatch':'linear-gradient(135deg,#9B7D0A,#D4AF37)',
  },
};

/* ══════════════════════════════════════════════════════════
   FONTS
══════════════════════════════════════════════════════════ */
const FONTS = [
  { name:'Jakarta Sans', label:'Jakarta Sans', desc:'Clean & modern (default)',
    body:"'Plus Jakarta Sans',sans-serif", heading:"'Cormorant Garamond',serif",
    google:'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap' },
  { name:'Inter', label:'Inter', desc:'Minimal & sharp',
    body:"'Inter',sans-serif", heading:"'Inter',sans-serif",
    google:'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap' },
  { name:'Playfair', label:'Playfair Display', desc:'Elegant & editorial',
    body:"'Lato',sans-serif", heading:"'Playfair Display',serif",
    google:'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Lato:wght@300;400;700&display=swap' },
  { name:'Space Grotesk', label:'Space Grotesk', desc:'Techy & geometric',
    body:"'Space Grotesk',sans-serif", heading:"'Space Grotesk',sans-serif",
    google:'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap' },
  { name:'DM Serif', label:'DM Serif', desc:'Soft & literary',
    body:"'DM Sans',sans-serif", heading:"'DM Serif Display',serif",
    google:'https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=DM+Sans:wght@300;400;500;600;700&display=swap' },
  { name:'Fira Code', label:'Fira Code', desc:'Developer & mono',
    body:"'Fira Code',monospace", heading:"'Fira Code',monospace",
    google:'https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&display=swap' },
  { name:'Nunito', label:'Nunito', desc:'Friendly & rounded',
    body:"'Nunito',sans-serif", heading:"'Nunito',sans-serif",
    google:'https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;500;600;700;800&display=swap' },
];

/* ══════════════════════════════════════════════════════════
   LANGUAGES  (UI strings only — no backend needed)
══════════════════════════════════════════════════════════ */
const LANGUAGES = [
  { code:'en', name:'English',    flag:'🇺🇸', dir:'ltr', strings:{
    dashboard:'Dashboard', skills:'Skills', goals:'Daily Goals', companies:'Companies',
    resume:'Resume', notes:'Notes', signout:'⎋ Sign Out', welcome:'Welcome back',
    streak:'Day Streak', goalsToday:'Goals Today', companiesTracked:'Companies Tracked',
    resumeVer:'Resume Version', skillsTracked:'Skills Tracked', chooseTheme:'Choose Theme',
    chooseFont:'Choose Font', chooseLang:'Choose Language', chooseCursor:'Choose Cursor',
    colors:'🎨 Colors', fonts:'✏️ Fonts', lang:'🌐 Language', cursor:'🖱️ Cursor',
  }},
  { code:'hi', name:'हिन्दी',     flag:'🇮🇳', dir:'ltr', strings:{
    dashboard:'डैशबोर्ड', skills:'कौशल', goals:'दैनिक लक्ष्य', companies:'कंपनियाँ',
    resume:'रिज्यूमे', notes:'नोट्स', signout:'⎋ साइन आउट', welcome:'वापसी पर स्वागत',
    streak:'दिन की स्ट्रीक', goalsToday:'आज के लक्ष्य', companiesTracked:'कंपनियाँ ट्रैक',
    resumeVer:'रिज्यूमे संस्करण', skillsTracked:'कौशल ट्रैक', chooseTheme:'थीम चुनें',
    chooseFont:'फ़ॉन्ट चुनें', chooseLang:'भाषा चुनें', chooseCursor:'कर्सर चुनें',
    colors:'🎨 रंग', fonts:'✏️ फ़ॉन्ट', lang:'🌐 भाषा', cursor:'🖱️ कर्सर',
  }},
  { code:'es', name:'Español',    flag:'🇪🇸', dir:'ltr', strings:{
    dashboard:'Panel', skills:'Habilidades', goals:'Metas Diarias', companies:'Empresas',
    resume:'Currículum', notes:'Notas', signout:'⎋ Cerrar sesión', welcome:'Bienvenido de vuelta',
    streak:'Días seguidos', goalsToday:'Metas de Hoy', companiesTracked:'Empresas Seguidas',
    resumeVer:'Versión del CV', skillsTracked:'Habilidades', chooseTheme:'Elegir Tema',
    chooseFont:'Elegir Fuente', chooseLang:'Elegir Idioma', chooseCursor:'Elegir Cursor',
    colors:'🎨 Colores', fonts:'✏️ Fuentes', lang:'🌐 Idioma', cursor:'🖱️ Cursor',
  }},
  { code:'fr', name:'Français',   flag:'🇫🇷', dir:'ltr', strings:{
    dashboard:'Tableau de bord', skills:'Compétences', goals:'Objectifs Quotidiens', companies:'Entreprises',
    resume:'CV', notes:'Notes', signout:'⎋ Se déconnecter', welcome:'Content de vous revoir',
    streak:'Jours consécutifs', goalsToday:"Objectifs d'aujourd'hui", companiesTracked:'Entreprises suivies',
    resumeVer:'Version du CV', skillsTracked:'Compétences suivies', chooseTheme:'Choisir un thème',
    chooseFont:'Choisir une police', chooseLang:'Choisir la langue', chooseCursor:'Choisir le curseur',
    colors:'🎨 Couleurs', fonts:'✏️ Polices', lang:'🌐 Langue', cursor:'🖱️ Curseur',
  }},
  { code:'de', name:'Deutsch',    flag:'🇩🇪', dir:'ltr', strings:{
    dashboard:'Dashboard', skills:'Fähigkeiten', goals:'Tagesziele', companies:'Unternehmen',
    resume:'Lebenslauf', notes:'Notizen', signout:'⎋ Abmelden', welcome:'Willkommen zurück',
    streak:'Tage Streak', goalsToday:'Heutige Ziele', companiesTracked:'Verfolgte Unternehmen',
    resumeVer:'Lebenslauf-Version', skillsTracked:'Verfolgte Fähigkeiten', chooseTheme:'Thema wählen',
    chooseFont:'Schriftart wählen', chooseLang:'Sprache wählen', chooseCursor:'Cursor wählen',
    colors:'🎨 Farben', fonts:'✏️ Schriften', lang:'🌐 Sprache', cursor:'🖱️ Cursor',
  }},
  { code:'ja', name:'日本語',     flag:'🇯🇵', dir:'ltr', strings:{
    dashboard:'ダッシュボード', skills:'スキル', goals:'日々の目標', companies:'企業',
    resume:'履歴書', notes:'ノート', signout:'⎋ サインアウト', welcome:'おかえりなさい',
    streak:'日連続', goalsToday:'本日の目標', companiesTracked:'追跡中の企業',
    resumeVer:'履歴書バージョン', skillsTracked:'追跡中のスキル', chooseTheme:'テーマを選択',
    chooseFont:'フォントを選択', chooseLang:'言語を選択', chooseCursor:'カーソルを選択',
    colors:'🎨 カラー', fonts:'✏️ フォント', lang:'🌐 言語', cursor:'🖱️ カーソル',
  }},
  { code:'ar', name:'العربية',   flag:'🇸🇦', dir:'rtl', strings:{
    dashboard:'لوحة القيادة', skills:'المهارات', goals:'الأهداف اليومية', companies:'الشركات',
    resume:'السيرة الذاتية', notes:'ملاحظات', signout:'⎋ تسجيل الخروج', welcome:'مرحبًا بعودتك',
    streak:'أيام متتالية', goalsToday:'أهداف اليوم', companiesTracked:'الشركات المتتبعة',
    resumeVer:'إصدار السيرة', skillsTracked:'المهارات المتتبعة', chooseTheme:'اختر السمة',
    chooseFont:'اختر الخط', chooseLang:'اختر اللغة', chooseCursor:'اختر المؤشر',
    colors:'🎨 الألوان', fonts:'✏️ الخطوط', lang:'🌐 اللغة', cursor:'🖱️ المؤشر',
  }},
  { code:'zh', name:'中文',       flag:'🇨🇳', dir:'ltr', strings:{
    dashboard:'仪表板', skills:'技能', goals:'每日目标', companies:'公司',
    resume:'简历', notes:'笔记', signout:'⎋ 退出登录', welcome:'欢迎回来',
    streak:'天连续', goalsToday:'今日目标', companiesTracked:'跟踪公司',
    resumeVer:'简历版本', skillsTracked:'跟踪技能', chooseTheme:'选择主题',
    chooseFont:'选择字体', chooseLang:'选择语言', chooseCursor:'选择光标',
    colors:'🎨 颜色', fonts:'✏️ 字体', lang:'🌐 语言', cursor:'🖱️ 光标',
  }},
  { code:'pt', name:'Português',  flag:'🇧🇷', dir:'ltr', strings:{
    dashboard:'Painel', skills:'Habilidades', goals:'Metas Diárias', companies:'Empresas',
    resume:'Currículo', notes:'Notas', signout:'⎋ Sair', welcome:'Bem-vindo de volta',
    streak:'Dias seguidos', goalsToday:'Metas de Hoje', companiesTracked:'Empresas Rastreadas',
    resumeVer:'Versão do CV', skillsTracked:'Habilidades Rastreadas', chooseTheme:'Escolher Tema',
    chooseFont:'Escolher Fonte', chooseLang:'Escolher Idioma', chooseCursor:'Escolher Cursor',
    colors:'🎨 Cores', fonts:'✏️ Fontes', lang:'🌐 Idioma', cursor:'🖱️ Cursor',
  }},
];

/* ══════════════════════════════════════════════════════════
   CURSORS
══════════════════════════════════════════════════════════ */
const CURSORS = [
  { name:'Default',    desc:'System default',       css:'default',       emoji:'↖️' },
  { name:'Pointer',    desc:'Always a hand',         css:'pointer',       emoji:'👆' },
  { name:'Crosshair',  desc:'Precise targeting',     css:'crosshair',     emoji:'✛'  },
  { name:'Dot',        desc:'Tiny minimal dot',
    css:`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12'%3E%3Ccircle cx='6' cy='6' r='5' fill='%239B59C9' stroke='white' stroke-width='1.5'/%3E%3C/svg%3E") 6 6, auto`,
    emoji:'⚫' },
  { name:'Star',       desc:'Sparkle cursor',
    css:`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Ctext y='20' font-size='20'%3E✦%3C/text%3E%3C/svg%3E") 12 12, auto`,
    emoji:'✦' },
  { name:'Arrow',      desc:'Bold arrow',
    css:`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24'%3E%3Cpolygon points='4,2 4,20 9,15 13,22 15,21 11,14 18,14' fill='%23C59DD9' stroke='%232B0D3E' stroke-width='1.2'/%3E%3C/svg%3E") 4 2, auto`,
    emoji:'🏹' },
  { name:'Wand',       desc:'Magic wand',
    css:`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='28' viewBox='0 0 28 28'%3E%3Cline x1='4' y1='24' x2='20' y2='8' stroke='%23D4AF37' stroke-width='3' stroke-linecap='round'/%3E%3Ccircle cx='21' cy='7' r='3' fill='%23F2EAF7' stroke='%23D4AF37' stroke-width='1.5'/%3E%3Ctext x='0' y='10' font-size='8'%3E✦%3C/text%3E%3C/svg%3E") 4 24, auto`,
    emoji:'🪄' },
  { name:'None',       desc:'Hidden cursor',         css:'none',          emoji:'👻' },
];

/* ══════════════════════════════════════════════════════════
   STORAGE KEYS
══════════════════════════════════════════════════════════ */
const THEME_KEY  = 'preptracker-theme';
const FONT_KEY   = 'preptracker-font';
const LANG_KEY   = 'preptracker-lang';
const CURSOR_KEY = 'preptracker-cursor';

/* ══════════════════════════════════════════════════════════
   APPLY FUNCTIONS
══════════════════════════════════════════════════════════ */
function applyTheme(name) {
  const theme = THEMES[name]; if (!theme) return;
  const root = document.documentElement;
  for (const [p,v] of Object.entries(theme)) if (p !== '--swatch') root.style.setProperty(p, v);
  localStorage.setItem(THEME_KEY, name);
  document.querySelectorAll('.ts-color-opt').forEach(el => el.classList.toggle('ts-active', el.dataset.theme === name));
}

function applyFont(name) {
  const font = FONTS.find(f => f.name === name); if (!font) return;
  const linkId = 'ts-gfont-' + name.replace(/\s/g,'-');
  if (!document.getElementById(linkId)) {
    const link = Object.assign(document.createElement('link'), { id:linkId, rel:'stylesheet', href:font.google });
    document.head.appendChild(link);
  }
  let dynStyle = document.getElementById('ts-font-override');
  if (!dynStyle) { dynStyle = document.createElement('style'); dynStyle.id = 'ts-font-override'; document.head.appendChild(dynStyle); }
  dynStyle.textContent = `body,p,span,li,a,button,input,textarea,select,td,th,label{font-family:${font.body}!important}
    h1,h2,h3,h4,h5,h6,.logo-text,.page-title,.card-title,.section-title{font-family:${font.heading}!important}`;
  localStorage.setItem(FONT_KEY, name);
  document.querySelectorAll('.ts-font-opt').forEach(el => el.classList.toggle('ts-active', el.dataset.font === name));
}

function applyLanguage(code) {
  const lang = LANGUAGES.find(l => l.code === code); if (!lang) return;
  const s = lang.strings;
  document.documentElement.lang = code;
  document.documentElement.dir  = lang.dir;

  // Nav items
  const navLinks = document.querySelectorAll('.nav-item span:last-child');
  const navKeys  = ['dashboard','skills','goals','companies','resume','notes'];
  navLinks.forEach((el,i) => { if (navKeys[i] && s[navKeys[i]]) el.textContent = s[navKeys[i]]; });

  // Logout button
  const logoutBtn = document.querySelector('.logout-btn');
  if (logoutBtn) logoutBtn.textContent = s.signout;

  // Page title h1
  const pageTitle = document.querySelector('.page-title');
  if (pageTitle) pageTitle.textContent = s.dashboard;

  // Stat labels
  const statLabels = document.querySelectorAll('.stat-lbl');
  const statKeys = ['goalsToday','companiesTracked','resumeVer','skillsTracked'];
  statLabels.forEach((el,i) => { if (statKeys[i] && s[statKeys[i]]) el.textContent = s[statKeys[i]]; });

  // Update panel tab labels
  const tabs = document.querySelectorAll('.ts-tab');
  const tabKeys = ['colors','fonts','lang','cursor'];
  tabs.forEach((el,i) => { if (tabKeys[i] && s[tabKeys[i]]) el.textContent = s[tabKeys[i]]; });

  // Section labels
  const secLabels = document.querySelectorAll('.ts-section-label');
  const secMap = [s.chooseTheme, s.chooseFont, s.chooseLang, s.chooseCursor];
  secLabels.forEach((el,i) => { if (secMap[i]) el.textContent = secMap[i]; });

  localStorage.setItem(LANG_KEY, code);
  document.querySelectorAll('.ts-lang-opt').forEach(el => el.classList.toggle('ts-active', el.dataset.lang === code));
}

function applyCursor(name) {
  const cur = CURSORS.find(c => c.name === name); if (!cur) return;
  let cursorStyle = document.getElementById('ts-cursor-override');
  if (!cursorStyle) { cursorStyle = document.createElement('style'); cursorStyle.id = 'ts-cursor-override'; document.head.appendChild(cursorStyle); }
  cursorStyle.textContent = `*{cursor:${cur.css}!important}`;
  localStorage.setItem(CURSOR_KEY, name);
  document.querySelectorAll('.ts-cursor-opt').forEach(el => el.classList.toggle('ts-active', el.dataset.cursor === name));
}

/* ══════════════════════════════════════════════════════════
   BUILD UI
══════════════════════════════════════════════════════════ */
function buildSwitcher() {
  const savedTheme  = localStorage.getItem(THEME_KEY)  || 'Royal Amethyst';
  const savedFont   = localStorage.getItem(FONT_KEY)   || 'Jakarta Sans';
  const savedLang   = localStorage.getItem(LANG_KEY)   || 'en';
  const savedCursor = localStorage.getItem(CURSOR_KEY) || 'Default';

  /* Styles */
  const style = document.createElement('style');
  style.textContent = `
    #ts-fab{position:fixed;bottom:28px;right:24px;z-index:99999;width:52px;height:52px;border-radius:50%;border:none;cursor:pointer;background:var(--accent);box-shadow:0 4px 20px var(--glow),0 0 0 2px var(--border2);font-size:22px;display:flex;align-items:center;justify-content:center;transition:transform .2s,box-shadow .2s;color:#fff}
    #ts-fab:hover{transform:scale(1.1);box-shadow:0 6px 28px var(--glow)}
    #ts-panel{position:fixed;bottom:90px;right:24px;z-index:99998;background:var(--surface2);border:1px solid var(--border2);border-radius:18px;width:260px;box-shadow:0 16px 48px rgba(0,0,0,.55);display:none;flex-direction:column;backdrop-filter:blur(12px);overflow:hidden}
    #ts-panel.ts-open{display:flex}
    .ts-tabs{display:flex;border-bottom:1px solid var(--border2)}
    .ts-tab{flex:1;padding:10px 0;text-align:center;cursor:pointer;font-size:10px;letter-spacing:.08em;text-transform:uppercase;color:var(--text-muted);border:none;background:transparent;transition:color .15s,background .15s;font-family:inherit;line-height:1.3}
    .ts-tab:hover{color:var(--text)}
    .ts-tab.ts-tab-active{color:var(--accent2);background:var(--surface3);font-weight:600}
    .ts-pane{display:none;flex-direction:column;gap:5px;padding:14px;max-height:320px;overflow-y:auto}
    .ts-pane.ts-pane-active{display:flex}
    .ts-pane::-webkit-scrollbar{width:3px}
    .ts-pane::-webkit-scrollbar-thumb{background:var(--border2);border-radius:3px}
    .ts-section-label{font-size:10px;letter-spacing:.12em;text-transform:uppercase;color:var(--text-muted);padding:0 2px;margin-bottom:4px}
    .ts-color-opt,.ts-font-opt,.ts-lang-opt,.ts-cursor-opt{display:flex;align-items:center;gap:10px;padding:8px 10px;border-radius:10px;cursor:pointer;border:1px solid transparent;transition:background .15s,border-color .15s;background:transparent}
    .ts-color-opt:hover,.ts-font-opt:hover,.ts-lang-opt:hover,.ts-cursor-opt:hover{background:var(--surface3)}
    .ts-color-opt.ts-active,.ts-font-opt.ts-active,.ts-lang-opt.ts-active,.ts-cursor-opt.ts-active{border-color:var(--accent2);background:var(--surface3)}
    .ts-swatch{width:26px;height:26px;border-radius:50%;flex-shrink:0;border:2px solid rgba(255,255,255,.15)}
    .ts-icon-box{width:32px;height:32px;border-radius:8px;flex-shrink:0;background:var(--surface3);border:1px solid var(--border2);display:flex;align-items:center;justify-content:center;font-size:16px}
    .ts-font-preview{width:32px;height:32px;border-radius:8px;flex-shrink:0;background:var(--surface3);border:1px solid var(--border2);display:flex;align-items:center;justify-content:center;font-size:15px;font-weight:700;color:var(--accent2)}
    .ts-opt-info{display:flex;flex-direction:column;gap:1px;min-width:0}
    .ts-opt-name{font-size:13px;color:var(--text);white-space:nowrap}
    .ts-opt-desc{font-size:10px;color:var(--text-muted)}
    .ts-cursor-preview{font-size:18px;width:32px;text-align:center}
  `;
  document.head.appendChild(style);

  /* FAB */
  const fab = document.createElement('button');
  fab.id = 'ts-fab'; fab.title = 'Customise'; fab.textContent = '🎨';

  /* Panel */
  const panel = document.createElement('div');
  panel.id = 'ts-panel';

  /* Tab bar — 4 tabs */
  const tabBar = document.createElement('div');
  tabBar.className = 'ts-tabs';
  const tabDefs = [
    { key:'colors', label:'🎨\nColors' },
    { key:'fonts',  label:'✏️\nFonts'  },
    { key:'lang',   label:'🌐\nLang'   },
    { key:'cursor', label:'🖱️\nCursor' },
  ];
  const tabs  = {};
  const panes = {};
  tabDefs.forEach(({ key, label }) => {
    const btn = document.createElement('button');
    btn.className = 'ts-tab'; btn.textContent = label; btn.dataset.pane = key;
    tabs[key] = btn; tabBar.appendChild(btn);

    const pane = document.createElement('div');
    pane.className = 'ts-pane'; pane.id = 'ts-pane-' + key;
    panes[key] = pane;
  });
  tabs['colors'].classList.add('ts-tab-active');
  panes['colors'].classList.add('ts-pane-active');

  tabBar.addEventListener('click', e => {
    const btn = e.target.closest('.ts-tab'); if (!btn) return;
    const key = btn.dataset.pane;
    e.stopPropagation();
    Object.values(tabs).forEach(t  => t.classList.toggle('ts-tab-active',   t === btn));
    Object.values(panes).forEach(p => p.classList.toggle('ts-pane-active', p.id === 'ts-pane-'+key));
  });

  panel.appendChild(tabBar);

  /* ── COLOR PANE ── */
  const colorLabel = document.createElement('div');
  colorLabel.className = 'ts-section-label'; colorLabel.textContent = 'Choose Theme';
  panes['colors'].appendChild(colorLabel);
  for (const [name, vars] of Object.entries(THEMES)) {
    const opt = document.createElement('div');
    opt.className = 'ts-color-opt'; opt.dataset.theme = name;
    if (name === savedTheme) opt.classList.add('ts-active');
    const sw = document.createElement('div'); sw.className = 'ts-swatch'; sw.style.background = vars['--swatch'];
    const info = document.createElement('div'); info.className = 'ts-opt-info';
    info.innerHTML = `<span class="ts-opt-name">${name}</span>`;
    opt.append(sw, info);
    opt.addEventListener('click', () => { applyTheme(name); panel.classList.remove('ts-open'); });
    panes['colors'].appendChild(opt);
  }

  /* ── FONT PANE ── */
  const fontLabel = document.createElement('div');
  fontLabel.className = 'ts-section-label'; fontLabel.textContent = 'Choose Font';
  panes['fonts'].appendChild(fontLabel);
  for (const font of FONTS) {
    const opt = document.createElement('div');
    opt.className = 'ts-font-opt'; opt.dataset.font = font.name;
    if (font.name === savedFont) opt.classList.add('ts-active');
    const prev = document.createElement('div'); prev.className = 'ts-font-preview';
    prev.style.fontFamily = font.body; prev.textContent = 'Aa';
    const info = document.createElement('div'); info.className = 'ts-opt-info';
    info.innerHTML = `<span class="ts-opt-name" style="font-family:${font.body}">${font.label}</span><span class="ts-opt-desc">${font.desc}</span>`;
    opt.append(prev, info);
    opt.addEventListener('click', () => { applyFont(font.name); panel.classList.remove('ts-open'); });
    panes['fonts'].appendChild(opt);
  }

  /* ── LANGUAGE PANE ── */
  const langLabel = document.createElement('div');
  langLabel.className = 'ts-section-label'; langLabel.textContent = 'Choose Language';
  panes['lang'].appendChild(langLabel);
  for (const lang of LANGUAGES) {
    const opt = document.createElement('div');
    opt.className = 'ts-lang-opt'; opt.dataset.lang = lang.code;
    if (lang.code === savedLang) opt.classList.add('ts-active');
    const icon = document.createElement('div'); icon.className = 'ts-icon-box'; icon.style.fontSize = '20px'; icon.textContent = lang.flag;
    const info = document.createElement('div'); info.className = 'ts-opt-info';
    info.innerHTML = `<span class="ts-opt-name">${lang.name}</span><span class="ts-opt-desc">${lang.code.toUpperCase()}</span>`;
    opt.append(icon, info);
    opt.addEventListener('click', () => { applyLanguage(lang.code); panel.classList.remove('ts-open'); });
    panes['lang'].appendChild(opt);
  }

  /* ── CURSOR PANE ── */
  const cursorLabel = document.createElement('div');
  cursorLabel.className = 'ts-section-label'; cursorLabel.textContent = 'Choose Cursor';
  panes['cursor'].appendChild(cursorLabel);
  for (const cur of CURSORS) {
    const opt = document.createElement('div');
    opt.className = 'ts-cursor-opt'; opt.dataset.cursor = cur.name;
    if (cur.name === savedCursor) opt.classList.add('ts-active');
    const icon = document.createElement('div'); icon.className = 'ts-icon-box'; icon.textContent = cur.emoji;
    const info = document.createElement('div'); info.className = 'ts-opt-info';
    info.innerHTML = `<span class="ts-opt-name">${cur.name}</span><span class="ts-opt-desc">${cur.desc}</span>`;
    opt.append(icon, info);
    opt.addEventListener('click', () => { applyCursor(cur.name); panel.classList.remove('ts-open'); });
    panes['cursor'].appendChild(opt);
  }

  /* Append panes to panel */
  Object.values(panes).forEach(p => panel.appendChild(p));

  /* Toggle */
  fab.addEventListener('click', e => { e.stopPropagation(); panel.classList.toggle('ts-open'); });
  document.addEventListener('click', () => panel.classList.remove('ts-open'));
  panel.addEventListener('click', e => e.stopPropagation());

  document.body.append(fab, panel);

  /* Apply saved settings */
  applyTheme(savedTheme);
  applyFont(savedFont);
  applyLanguage(savedLang);
  applyCursor(savedCursor);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', buildSwitcher);
} else {
  buildSwitcher();
}
