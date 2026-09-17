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

const LETTER = `Ridhi. My Ridhu.
Just your name in my mind and my whole day changes.
The countdown is over, my Chiku. And I tried, whole night I tried, but no sentence is big enough. Because some love is too soft for words, and ours is that love. It lives in your good mornings, in the way you say my name, in those 4:50 am calls where sleep was never as precious as you.

We started as strangers on an app I barely even liked. I never knew one little message could give me a heartbeat like this. You were a stranger once, my Chikii. Now you're my first thought at sunrise and my last prayer at night.

You're so strong, my pyala sa bachuu. You carry your whole world on your shoulders, face everything alone, and still save the softest corner of your heart just for me. Do you have any idea what that does to me, Ridhu? I look at you and feel like I won a lottery I never even bought a ticket for.

I love the way we love. The silly names, the Guggu Muggu and Mendak language nobody else understands, the way you call me your idiot and I melt every single time. You're not just my girlfriend, you're also my best friend, the one I run to first with every good, every bad, every stupid joke. And I wouldn't trade it for anything in this universe.

If I ever get another life, I'll still find you. And I'll still fall for you, every single time.

So here's my promise, written on your birthday so I can never forget it. One day I'll take you to every place you've ever dreamed of, hand in hand. One day I'll sing for you, and you'll laugh at how bad I am, and I'll sing even louder just to see you smile. One day, when you're tired, you'll close your eyes in my arms, and I'll stay awake just to keep you safe.

This day is yours, my Chiku. My Chikii. My Guggu Muggu. My everything.
There's something waiting for you at the end of this page. Open it slowly, and know that every little part of it was made with all the love I have for you.

Happy Birthday, my Ridhu. You're my girlfriend, my best friend, my home, my calm, and my loudest happiness.
Your Mendak, the luckiest boy in the world

Best girlfriend and best friend forever, my Ridhu`;

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

/* ── scene 1 : tulip intro magic ─────────────────────── */
(function tulipIntroEffects() {
  // glowing particles drifting up from the soil
  const soil = $('#soilParticles');
  if (soil) {
    for (let i = 0; i < 18; i++) {
      const p = document.createElement('div');
      p.className = 'soil-particle';
      p.style.left = rand(6, 94) + '%';
      p.style.bottom = rand(8, 55) + 'px';
      p.style.animationDuration = rand(6, 12) + 's';
      p.style.animationDelay = rand(0, 8) + 's';
      soil.appendChild(p);
    }
  }

  // tiny hearts gently sprinkling behind the text
  const hearts = $('#floatingHearts');
  function spawnHeart() {
    if (!hearts) return;
    const h = document.createElement('div');
    h.className = 'floating-heart';
    h.textContent = pick(['💗', '💖', '💘', '🩷', '💕', '💞']);
    h.style.left = rand(5, 95) + '%';
    h.style.top = rand(10, 90) + '%';
    h.style.fontSize = rand(6, 11) + 'px';
    const hx = (Math.random() > .5 ? 1 : -1) * rand(10, 30);
    const hy = -rand(15, 45);
    h.style.setProperty('--hx', '0px');
    h.style.setProperty('--hy', '0px');
    h.style.setProperty('--hr', '0deg');
    h.style.setProperty('--hx1', hx + 'px');
    h.style.setProperty('--hy1', (hy * .4) + 'px');
    h.style.setProperty('--hr1', rand(-15, 15) + 'deg');
    h.style.setProperty('--hx2', (hx * .8) + 'px');
    h.style.setProperty('--hy2', (hy * .9) + 'px');
    h.style.setProperty('--hr2', rand(-25, 25) + 'deg');
    hearts.appendChild(h);
    setTimeout(() => h.remove(), 6500);
  }
  for (let i = 0; i < 12; i++) setTimeout(spawnHeart, i * 420);
  setInterval(spawnHeart, 2000);
})();

const introScreen = $('#introScreen');
let introUnlocked = false;
let introDone = false;
setTimeout(() => { introUnlocked = true; }, 3000);
introScreen.addEventListener('click', () => {
  if (!introUnlocked || introDone) return;
  introDone = true;
  introScreen.classList.add('done');
  startMusic();
  setTimeout(() => startQuiz(), 1000);
});
setTimeout(() => { if (!introDone && introUnlocked) introScreen.click(); }, 8000);

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
  $('#quizScreen').classList.add('hidden');
  const world = $('#mainWorld');
  world.classList.remove('hidden');
  world.classList.add('reveal');
  initEarthTimers();
  typeLetter();
  startFloatingBackground();
  spawnHeroFlowers();
  initSwipeDeck();
  window.scrollTo(0, 0);
  if (!musicOn) startMusic();
}

/* ── earth timer : born 17 sep 2006 ──────────────────── */
const BIRTH = new Date('2006-09-17T00:00:00').getTime();

function initEarthTimers() {
  const el = { y: $('#etYears'), mo: $('#etMonths'), mi: $('#etMins'), s: $('#etSecs') };

  tick();
  setInterval(tick, 500);

  function tick() {
    const now = Date.now();
    const diff = Math.max(0, now - BIRTH);

    const years   = Math.floor(diff / (365.2425 * 864e5));
    const months  = Math.floor(diff / (30.4375 * 864e5));
    const minutes = Math.floor(diff / 6e4);
    const seconds = Math.floor(diff / 1e3);

    setTxt(el.y, years);
    setTxt(el.mo, months.toLocaleString('en-IN'));
    setTxt(el.mi, minutes.toLocaleString('en-IN'));
    setTxt(el.s, seconds.toLocaleString('en-IN'));
    fitNumbers();
  }
  function fitNumbers() {
    Object.keys(el).forEach(k => {
      const box = el[k].closest('.et-box');
      if (!box) return;
      const span = el[k];
      let fs = parseFloat(getComputedStyle(span).fontSize);
      while (span.scrollWidth > box.clientWidth && fs > 8) {
        fs -= 0.5;
        span.style.fontSize = fs + 'px';
      }
    });
  }
  function setTxt(node, v) {
    v = String(v);
    if (node.textContent !== v) node.textContent = v;
  }
}

/* ── love letter ─────────────────────────────────────── */
function typeLetter() {
  const el = $('#letterBody');
  el.innerHTML = '';
  let caret = document.createElement('span');
  caret.className = 'caret';
  function step() {
    caret.remove();
    el.textContent = LETTER;
    caret = document.createElement('span');
    caret.className = 'caret';
    el.appendChild(caret);
    setTimeout(() => caret.remove(), 900);
  }
  const io = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) { io.disconnect(); setTimeout(step, 400); }
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

/* ── hero animated flowers ──────────────────────────── */
function spawnHeroFlowers() {
  const host = $('#heroFlowers');
  if (!host) return;
  const flowers = ['🌸', '🌷', '🌹', '🌺', '🌻', '💐', '🌼'];
  function drop() {
    const f = document.createElement('div');
    f.className = 'hero-flower';
    f.textContent = pick(flowers);
    f.style.left = rand(5, 95) + '%';
    f.style.bottom = '0';
    f.style.fontSize = rand(18, 36) + 'px';
    f.style.setProperty('--fr', rand(-40, 40) + 'deg');
    f.style.animationDuration = rand(4, 8) + 's';
    host.appendChild(f);
    setTimeout(() => f.remove(), 8000);
  }
  for (let i = 0; i < 8; i++) setTimeout(drop, i * 400);
  setInterval(() => { for (let i = 0; i < 3; i++) setTimeout(drop, i * 300); }, 2500);
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
  if (dir === 'super') { card.classList.add('flip-super'); }
  deckIdx++;
  setTimeout(renderDeck, 420);
}

/* ── lightbox ────────────────────────────────────────── */
const MEDIA = [
  { type: 'photo', file: 'photo1.jpeg', emoji: '💗', quote: 'the day my world became prettier.' },
  { type: 'video', file: 'video1.mp4', emoji: '▶️', quote: 'your laugh — my favourite sound.' },
  { type: 'photo', file: 'photo2.jpeg', emoji: '💘', quote: 'proof that magic wears your face.' },
  { type: 'video', file: 'video2.mp4', emoji: '▶️', quote: '3 seconds that rebooted my heart.' },
  { type: 'photo', file: 'photo3.jpeg', emoji: '🫶🏻', quote: 'my favourite part of everywhere.' },
  { type: 'video', file: 'video3.mp4', emoji: '▶️', quote: 'your eyes, a whole movie.' },
];

/* ── show photos/videos right on the cards ─────────── */
function initMediaCards() {
  const cards = $$('.media-card');
  cards.forEach((card, i) => {
    const media = MEDIA[i];
    if (!media) return;
    const frame = card.querySelector('.media-frame');
    if (!frame) return;
    if (media.type === 'photo') {
      const img = document.createElement('img');
      img.className = 'preview-img';
      img.src = media.file;
      img.alt = media.quote;
      img.loading = 'lazy';
      frame.classList.add('has-media');
      card.classList.add('has-media');
      img.addEventListener('error', () => { frame.classList.remove('has-media'); card.classList.remove('has-media'); });
      frame.prepend(img);
    } else {
      const v = document.createElement('video');
      v.className = 'preview-video';
      v.src = media.file;
      v.muted = true;
      v.loop = true;
      v.playsInline = true;
      v.autoplay = true;
      v.preload = 'metadata';
      frame.classList.add('has-media');
      card.classList.add('has-media');
      v.addEventListener('error', () => { frame.classList.remove('has-media'); card.classList.remove('has-media'); });
      frame.prepend(v);
    }
  });
}
initMediaCards();
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
// tap the dark backdrop (or press Escape) to close
$('#lightbox').addEventListener('click', (e) => {
  if (e.target === e.currentTarget) closeLightbox();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !$('#lightbox').classList.contains('hidden')) closeLightbox();
});

/* ── candle + wish ───────────────────────────────────── */
$('#blowBtn').addEventListener('click', () => {
  const btn = $('#blowBtn');
  if (btn.classList.contains('blown')) return;
  btn.classList.add('blown');
  btn.textContent = '🙈 wish already sent to the universe';
  $('#wishMessage').classList.remove('hidden');
});