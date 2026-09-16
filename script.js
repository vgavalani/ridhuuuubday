/* ═══════════════════════════════════════════════════════════
   FOR MY RIDHI — a little world she never asked for, but owns.
   by vanshuuuu, 3am heart, engine: love.
   ═══════════════════════════════════════════════════════════ */

/* ── helpers ─────────────────────────────────────────── */
const $  = (s) => document.querySelector(s);
const $$ = (s) => document.querySelectorAll(s);
const rand = (a, b) => Math.random() * (b - a) + a;
const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];

/* ── data ────────────────────────────────────────────── */
const QUIZ = [
  {
    emoji: '💍',
    q: 'Do you know you are literally the most beautiful girl to ever walk this planet?',
  },
  {
    emoji: '🥇',
    q: 'Am I, at this exact moment, your favourite person in the whole world?',
  },
  {
    emoji: '👑',
    q: 'Is it a scientifically proven fact that ridhi >>> everyone else, always?',
  },
  {
    emoji: '🌈',
    q: 'Do you promise to stay the reason behind every one of my smiles?',
  },
  {
    emoji: '⏰',
    q: 'If this birthday is 100% YOURS — 12am call or no call, your rules — do you trust me to love you your way?',
  },
  {
    emoji: '🔐',
    q: 'Will you let me annoy you, love you, and choose you for literally forever?',
  },
  {
    emoji: '💍',
    q: 'Okay, truly the final key to my heart… will you be mine today and every single day after?',
  },
];

const TEASES = [
  {
    title: 'EXCUSE ME?! 🤨',
    text: 'You said NO?? To ME?? The guy who would literally giggle at your texts at 3am like an idiot?',
    stingers: ['police has been called 🚨', 'love meter: depleted', 'vanshuuu is in tears', 'rejected (not canon)'],
  },
  {
    title: 'WRONG. WRONG. WRONG. 💢',
    text: 'Somewhere in the universe, 4 billion people just gasped in unison. You hit the wrong button, my love.',
    stingers: ['-1,000,000 brownie points', 'the audacity. THE AUDACITY', 'earth declared a glitch', 'imagine being THIS wrong'],
  },
  {
    title: 'NOPE. NEVER. NOT ACCEPTED. ❌',
    text: 'I checked the rules of the universe. Rule #1: Ridhi never says no to Vanshu. You just broke the universe.',
    stingers: ['universe.exe has stopped', 'love packet lost in transit', 'rebooting your heart…', 'pleading eyes: 1000% active'],
  },
  {
    title: 'THE AUDACITY. THE SHEER AUDACITY. 😤',
    text: 'That button was clearly a trap and you fell for it like the sweet dummy you are. Say YES now or I start singing.',
    stingers: ['warning: off-key singing incoming', 'my heart: 📉', 'you heard NOTHING from me', 'this is illegal in 7 countries'],
  },
  {
    title: 'VIOLATION DETECTED. ⚠️',
    text: 'Lying to Vanshu is a crime punishable by unlimited cuddles… which you just forfeited. Fix it. NOW.',
    stingers: ['cuddle privileges: revoked', 'you did NOT just do that', 'i am CLUTCHING my heart', 'judge: emotions, nowhere to be found'],
  },
  {
    title: 'LAST WARNING BEFORE I GET COCKY. 🫦',
    text: 'Listen, gorgeous, the options are YES… or me showing up at your door with a glitter banner and no shame.',
    stingers: ['shameless mode: ON', 'glitter: 99% loaded', 'banner: hand-painted', 'you have 3 seconds…'],
  },
];

const REASONS = [
  { e: '😍', t: 'your smile is the reason my bad days stand no chance' },
  { e: '🤭', t: 'you annoy me more than anyone alive… and i love you more because of it' },
  { e: '🌈', t: 'one conversation with you and my whole world rearranges to fit you better' },
  { e: '🫶🏻', t: 'you listen to my dumb jokes like they matter — best feeling ever' },
  { e: '🌙', t: 'your texts are the last thing I think about before i sleep and first when i wake' },
  { e: '✨', t: 'you made me believe in "the one" while i was busy pretending i didn\'t' },
  { e: '💫', t: 'your little angry face is my favourite masterpiece' },
  { e: '🎀', t: 'you\'re the combo of my type, my peace, and my chaos all at once' },
  { e: '🐣', t: 'you said my love makes you feel warm — so this whole site is your blanket' },
  { e: '👑', t: 'you walk into my mind and it instantly becomes royalty' },
];

const LETTER = `Hey my Ridhi, my Chiki, my everything… 🥹💗

They say every soul has a year they belong to. But you were born on 17 September 2006, and honestly? The whole world got the memo that day — a queen had just arrived.

Before you, my life was just… days. Now every single one of them has a highlight, and her name is Ridhi.

I love the way you scrunch your nose. I love your sleepy voice. I love how you get angry at me for no reason and then love me harder anyway. I love that you're beautiful and you STILL don't get why people stare. I love your vibe, your drama, your flips, your mindset, your giggles.

Forever is a scary word for most people. For me? Forever just means: more time with you.

So here's my promise — through every dumb fight, every late night, every photo, every video, every version of us that life throws… I will keep choosing you. Loudly. Stupidly. Proudly.

Happy 20th birthday, my heart. This website is 0.0001% of what you mean to me — because I couldn't fit the rest into code.`;

/* ── music (top-right button, user gesture driven) ───── */
const audio = $('#bgMusic');
const cornerBtn = $('#cornerMusic');
let musicOn = false;

function startMusic() {
  audio.volume = 0.9;
  const p = audio.play();
  if (p) {
    p.then(() => setMusicUI(true))
     .catch(() => setMusicUI(false)); // autoplay blocked until a gesture
  }
}
function setMusicUI(on) {
  musicOn = !!on;
  cornerBtn.classList.toggle('playing', musicOn);
}
// try right away (desktop browsers may allow it)
startMusic();
// guarantee: the FIRST tap/touch anywhere starts it
document.addEventListener('click', function once() {
  if (audio.paused) startMusic();
}, { once: true });
cornerBtn.addEventListener('click', () => {
  if (audio.paused) {
    audio.play().then(() => setMusicUI(true)).catch(() => {});
  } else {
    audio.pause();
    setMusicUI(false);
  }
});

/* ── scene 1 : intro — plant grows, flower blooms ────── */
(function petalRain() {
  const zone = $('#introPetals');
  for (let i = 0; i < 18; i++) {
    const p = document.createElement('div');
    p.className = 'intro-petal';
    p.textContent = pick(['🌹', '🌸', '💗', '🌷', '🌻']);
    p.style.left = rand(4, 96) + '%';
    p.style.fontSize = rand(11, 21) + 'px';
    p.style.animationDuration = rand(7, 16) + 's';
    p.style.animationDelay = rand(0, 11) + 's';
    zone.appendChild(p);
  }
})();

const introTap = $('#introTap');
let introUnlocked = false;
let introDone = false;
setTimeout(() => { introUnlocked = true; }, 3000);
introTap.addEventListener('click', () => {
  if (!introUnlocked || introDone) return;
  introDone = true;
  $('#introScreen').classList.add('done');
  startMusic();
  setTimeout(() => startQuiz(), 1000);
});
setTimeout(() => { if (!introDone && introUnlocked) introTap.click(); }, 8000);

/* ── scene 2 : quiz gate ─────────────────────────────── */
let qIndex = 0;

function startQuiz() {
  const qs = $('#quizScreen');
  qs.classList.remove('hidden');
  qs.classList.add('fade-in');
  qIndex = 0;
  $('#quizTotal').textContent = QUIZ.length;
  buildQuizHearts();
  renderQuestion(true);
}
function buildQuizHearts() {
  const host = $('#quizHearts');
  host.innerHTML = '';
  for (let i = 0; i < 10; i++) {
    const h = document.createElement('div');
    h.className = 'fh';
    h.textContent = pick(['💖', '💘', '💗', '🌹', '🌸', '💝']);
    h.style.left = rand(0, 100) + '%';
    h.style.animationDuration = rand(1.8, 3.4) + 's';
    h.style.animationDelay = rand(0, 3) + 's';
    host.appendChild(h);
  }
}
function renderQuestion(anim) {
  const q = QUIZ[qIndex];
  $('#quizProgressNum').textContent = qIndex + 1;
  $('#quizEmoji').textContent = q.emoji;
  $('#quizQuestion').textContent = q.q;
  const noBtn = $$('.no-option')[0];
  noBtn.style.transform = 'translate(0,0) rotate(0)';
  const card = $('#quizCard');
  card.style.animation = 'none';
  void card.offsetWidth;
  card.style.animation = '';
}
$$('.quiz-option').forEach(btn => {
  btn.addEventListener('click', () => {
    if (btn.dataset.answer === 'yes') {
      qIndex++;
      if (qIndex >= QUIZ.length) {
        finishQuiz();
      } else {
        renderQuestion(true);
      }
    } else {
      $('#quizCard').classList.remove('shake');
      void $('#quizCard').offsetWidth;
      $('#quizCard').classList.add('shake');
      escapeAttempt();
      openTease(qIndex);
    }
  });
});

// the No button literally runs away from her finger on the final question
function escapeAttempt() {
  if (qIndex !== QUIZ.length - 1) return;
  const noBtn = $$('.no-option')[0];
  noBtn.style.transition = 'transform .3s ease';
  noBtn.style.transform = `translate(${rand(-70, 70)}px, ${rand(-40, 140)}px) rotate(${rand(-30, 30)}deg)`;
  setTimeout(() => { noBtn.style.transform = 'translate(0,0) rotate(0)'; }, 950);
}

/* ── tease overlay ───────────────────────────────────── */
let teaseOpen = false;
function openTease(idx) {
  if (teaseOpen) return;
  teaseOpen = true;
  const t = TEASES[idx % TEASES.length];
  $('#teaseTitle').textContent = t.title;
  $('#teaseText').textContent = t.text;
  $('#teaseEmoji').textContent = pick(['🤨🤨🤨', '😤😤😤', '💢💢💢', '🫦🫦🫦', '🥹🥹🥹']);
  const sg = $('#teaseStingers');
  sg.innerHTML = '';
  t.stingers.slice(0, 3).forEach((s, i) => {
    const b = document.createElement('span');
    b.textContent = s;
    b.style.animationDelay = (0.2 + i * 0.15) + 's';
    sg.appendChild(b);
  });
  const ov = $('#teaseOverlay');
  ov.classList.remove('hidden', 'in');
  void ov.offsetWidth;
  ov.classList.add('in');
  if (navigator.vibrate) navigator.vibrate([60, 40, 60, 40, 120]);
}
$('#teaseRetryBtn').addEventListener('click', () => {
  teaseOpen = false;
  $('#teaseOverlay').classList.add('hidden');
});

/* ── finish quiz → main world ────────────────────────── */
function finishQuiz() {
  chipConfetti();
  $('#quizScreen').classList.add('hidden');
  const world = $('#mainWorld');
  world.classList.remove('hidden');
  world.classList.add('reveal');
  initEarthTimers();
  typeLetter();
  startFloatingBackground();
  initSwipeDeck();
  window.scrollTo(0, 0);
  if (!musicOn) startMusic();
  setTimeout(() => chipConfetti(), 1400);
}

/* ── earth timer : born 17 sep 2006 ──────────────────── */
const BIRTH = new Date('2006-09-17T00:00:00').getTime();

function initEarthTimers() {
  const all = [];

  // featured card (4 boxes with ids)
  all.push({
    y: $('#etYears'), mo: $('#etMonths'), mi: $('#etMins'), s: $('#etSecs'),
  });

  const hb = $('#statHeartbeats'), br = $('#statBreaths'), mo = $('#statMoments');
  const startNow = Date.now();

  tick();
  setInterval(tick, 500);

  function tick() {
    const now = Date.now();
    const diff = Math.max(0, now - BIRTH);

    const years   = Math.floor(diff / (365.2425 * 864e5));
    const months  = Math.floor(diff / (30.4375 * 864e5)); // total months on earth
    const minutes = Math.floor(diff / 6e4);               // total minutes
    const seconds = Math.floor(diff / 1e3);               // total seconds

    for (const t of all) {
      setTxt(t.y, years);
      setTxt(t.mo, months);
      setTxt(t.mi, minutes.toLocaleString('en-IN'));
      setTxt(t.s, seconds.toLocaleString('en-IN'));
    }

    // fluffy growing stats since she opened the page (also counts "the earth got lucky")
    const since = now - startNow;
    hb.textContent = Math.floor(since / 1000 * 1.2).toLocaleString('en-IN');
    br.textContent = Math.floor(since / 1000 * 4.9).toLocaleString('en-IN');
    mo.textContent = Math.floor(since / 1000 * 2.7).toLocaleString('en-IN');
  }
  function setTxt(el, v) {
    v = String(v);
    if (el.textContent !== v) el.textContent = v;
  }
}

/* ── love letter typing ──────────────────────────────── */
function typeLetter() {
  const el = $('#letterBody');
  el.innerHTML = '';
  let i = 0;
  let caret = document.createElement('span');
  caret.className = 'caret';
  function step() {
    if (i < LETTER.length) {
      const ch = LETTER[i];
      if (ch === '\n') {
        el.appendChild(document.createElement('br'));
      } else {
        el.appendChild(document.createTextNode(ch));
      }
      caret.remove();
      caret = document.createElement('span');
      caret.className = 'caret';
      el.appendChild(caret);
      i++;
      setTimeout(step, 8);
    } else {
      caret.remove();
    }
  }
  const io = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) { io.disconnect(); setTimeout(step, 500); }
  }, { threshold: 0.3 });
  io.observe(el);
}

/* ── subtle floating background hearts ───────────────── */
function startFloatingBackground() {
  const host = $('#floatBg');
  const icons = ['💖', '💘', '💗', '🌹', '🌸', '💝', '💞'];
  setInterval(() => {
    const h = document.createElement('div');
    h.className = 'fh';
    h.textContent = pick(icons);
    h.style.left = rand(0, 100) + '%';
    h.style.fontSize = rand(12, 22) + 'px';
    h.style.animationDuration = rand(14, 26) + 's';
    h.style.animationDelay = rand(0, 10) + 's';
    host.appendChild(h);
    setTimeout(() => h.remove(), 30000);
  }, 1300);
}

/* ── swipe deck ──────────────────────────────────────── */
let deck = [];
let deckIdx = 0;
function initSwipeDeck() {
  deck = [...REASONS].sort(() => Math.random() - .5);
  deckIdx = 0;
  renderDeck();
}
function renderDeck() {
  const host = $('#swipeDeck');
  host.innerHTML = '';
  if (deckIdx >= deck.length) {
    deck = [...REASONS].sort(() => Math.random() - .5);
    deckIdx = 0;
  }
  const r = deck[deckIdx];
  const card = document.createElement('div');
  card.className = 'swipe-card';
  card.innerHTML = `<div class="big-emoji">${r.e}</div><div class="reason">${r.t}</div>`;
  host.appendChild(card);
}
function swipeCard(dir) {
  const card = $('#swipeDeck .swipe-card');
  if (!card) return;
  if (dir === 'no')    card.classList.add('flip-left');
  if (dir === 'yes')   card.classList.add('flip-right');
  if (dir === 'super') { card.classList.add('flip-super'); chipConfetti(); }
  deckIdx++;
  setTimeout(renderDeck, 420);
}

/* ── lightbox ────────────────────────────────────────── */
const MEDIA = [
  { type: 'photo', file: 'photo1.jpg', emoji: '💗', quote: 'the day my world became prettier.' },
  { type: 'video', file: 'video1.mp4', emoji: '▶️', quote: 'your laugh — my favourite sound.' },
  { type: 'photo', file: 'photo2.jpg', emoji: '💘', quote: 'proof that magic wears your face.' },
  { type: 'video', file: 'video2.mp4', emoji: '▶️', quote: '3 seconds that rebooted my heart.' },
  { type: 'photo', file: 'photo3.jpg', emoji: '🫶🏻', quote: 'my favourite part of everywhere.' },
  { type: 'video', file: 'video3.mp4', emoji: '▶️', quote: 'your eyes, a whole movie.' },
];
$$('.media-card').forEach(c => {
  c.addEventListener('click', () => {
    const kind = c.classList.contains('video-card') ? 'video' : 'photo';
    lightboxFrom(c, kind);
  });
});
function lightboxFrom(card, kind) {
  const cards = Array.from($$('.media-card'));
  const allOfKind = cards.filter(c => c.classList.contains(kind + '-card'));
  const pos = allOfKind.indexOf(card);
  const pool = MEDIA.filter(m => m.type === kind);
  const media = pool[pos % pool.length];

  const content = $('#lbContent');
  content.innerHTML = '';
  const lb = $('#lightbox');
  lb.classList.remove('hidden', 'in');
  void lb.offsetWidth;
  lb.classList.add('in');

  function onMediaMissing() {
    content.innerHTML = `
      <div class="lb-no-media">
        <div class="e">${media.emoji}</div>
        <h3>"${media.quote}"</h3>
        <p>drop <b>${media.file}</b> into the <b>ridhi folder</b><br>and it will appear here — promise.<br><br><i>reserved for our memory ${pos + 1} 💌</i></p>
      </div>`;
  }

  if (media.type === 'video') {
    const v = document.createElement('video');
    v.src = media.file;
    v.controls = true;
    v.autoplay = true;
    v.addEventListener('error', onMediaMissing);
    content.appendChild(v);
  } else {
    const img = document.createElement('img');
    img.src = media.file;
    img.addEventListener('error', onMediaMissing);
    content.appendChild(img);
  }
}
function closeLightbox() {
  $('#lightbox').classList.add('hidden');
  $('#lbContent').innerHTML = '';
}

/* ── candle + wish ───────────────────────────────────── */
$('#blowBtn').addEventListener('click', () => {
  const btn = $('#blowBtn');
  if (btn.classList.contains('blown')) return;
  btn.classList.add('blown');
  btn.textContent = '🙈 wish already sent to the universe';
  $('#wishMessage').classList.remove('hidden');
  chipConfetti();
});

/* ── confetti (hand-rolled, no CDN) ──────────────────── */
const confettiCanvas = $('#confettiCanvas');
const ctx = confettiCanvas.getContext('2d');
let confetti = [];
let confettiRunning = false;

function resizeCanvas() {
  confettiCanvas.width = window.innerWidth;
  confettiCanvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

function chipConfetti() {
  const colors = ['#ff2e63', '#ffd700', '#3ef0b0', '#c850c0', '#ff8fb3', '#7cffcb', '#fca311'];
  for (let i = 0; i < 150; i++) {
    confetti.push({
      x: Math.random() * confettiCanvas.width,
      y: -20 - Math.random() * confettiCanvas.height * 0.3,
      w: rand(6, 14),
      h: rand(8, 18),
      vy: rand(2, 6),
      vx: rand(-2, 2),
      rot: rand(0, 360),
      vr: rand(-6, 6),
      color: pick(colors),
      shape: Math.random() > .5 ? 'rect' : 'heart',
    });
  }
  if (!confettiRunning) { confettiRunning = true; confettiLoop(); }
}
function confettiLoop() {
  ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
  for (const c of confetti) {
    c.x += c.vx; c.y += c.vy; c.rot += c.vr;
    if (c.shape === 'heart') {
      ctx.save();
      ctx.translate(c.x, c.y);
      ctx.rotate(c.rot * Math.PI / 180);
      ctx.fillStyle = c.color;
      ctx.font = c.w + 'px sans-serif';
      ctx.fillText('💗', 0, 0);
      ctx.restore();
    } else {
      ctx.save();
      ctx.translate(c.x, c.y);
      ctx.rotate(c.rot * Math.PI / 180);
      ctx.fillStyle = c.color;
      ctx.fillRect(-c.w / 2, -c.h / 2, c.w, c.h);
      ctx.restore();
    }
  }
  confetti = confetti.filter(c => c.y < confettiCanvas.height + 30);
  if (confetti.length === 0) {
    confettiRunning = false;
    ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
    return;
  }
  requestAnimationFrame(confettiLoop);
}