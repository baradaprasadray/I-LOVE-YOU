/**
 * ROMANTIC LOTUS PROPOSAL GAME - script.js
 * Real Pink Lotus & Hinglish Storytelling Experience.
 *
 * Exact Color Palette:
 * #006ba6 - Deep Cerulean Ocean
 * #0496ff - Azure Bright Sky Blue
 * #ffbc42 - Sunglow Warm Golden Yellow
 * #d81159 - Ruby Romantic Lotus Pink-Crimson
 * #8f2d56 - Quinacridone Magenta / Deep Mulberry
 */

// ==========================================================================
// 1. DATA: 14 ORIGINAL ROMANTIC SHAYARIS WITH SWEET HINGLISH EXPLANATIONS
// ==========================================================================
const SHAYARI_COLLECTION = [
  {
    chapter: 1,
    hindi: `Teri muskurahat mein ek sukoon sa milta hai,
Tujhse baat karke dil ko junoon sa milta hai.
Pata nahi kya rishta hai tere mere darmiyan,
Par tera naam sunte hi dil ko sukoon sa milta hai. 💙`,
    meaning: "Aapki pyari muskurahat dekh kar dil ko aisi shanti milti hai jo aur kahin nahi. Bas aapka naam sunte hi saari pareshaniyan door ho jaati hain."
  },
  {
    chapter: 2,
    hindi: `Chaand se kaha, teri roshni udhaar de,
Dil ne kaha, uski ek muskurahat hi de.
Ab aur kya maangu main is khoobsurat jahaan se,
Bas uske dil mein mere liye thodi si jagah de. 🪷`,
    meaning: "Maine chaand se noor maanga, par dil ne kaha mujhe bas aapki ek muskaan chahiye. Is poori duniya mein bas aapke dil ka ek chhota sa kona mil jaye."
  },
  {
    chapter: 3,
    hindi: `Har khwaab mein tera hi khayal aata hai,
Teri hansi se mera har din muskurata hai.
Kaise bataun kitni khaas ho tum,
Tera hona hi mere dil ko achha lagta hai. ❤️`,
    meaning: "Har sapne mein sirf aapki hi meethi yaadein hain. Aapki hansi se mera har din chamak uthta hai, aapka hona hi meri sabse badi khushi hai."
  },
  {
    chapter: 4,
    hindi: `Na chaand chahiye, na sitaaron ki baraat,
Bas tere saath ho meri har ek baat.
Agar kabhi poochho kya chahiye zindagi se,
Tera saath ho, bas itni si hai meri fariyaad. 💫`,
    meaning: "Mujhe na taare chahiye na chaand, bas zindagi ke har mod par aapka haath aur aapki pyari baatein chahiye."
  },
  {
    chapter: 5,
    hindi: `Khamosh raaton mein jab thandi hawa chhooti hai,
Dil ko lagta hai jaise tu paas aati hai.
Mohabbat lafzon ki mohtaaj nahi hoti,
Yeh toh wo ehsaas hai jo rooh ko chhoo jaati hai. 🌸`,
    meaning: "Sachha pyaar lafzon ka mohtaaj nahi hota, yeh toh ek aisa pavitra ehsaas hai jo seedhe aatma ko chhoo leta hai."
  },
  {
    chapter: 6,
    hindi: `Ek pal ki doori bhi sadiyon jaisi lagti hai,
Teri ek jhalak har dard ki dawa lagti hai.
Duniya ki bheed mein hazaaron chehre hain,
Par meri nigaahon ko bas tu hi apna lagti hai. ✨`,
    meaning: "Duniya ki is bheed mein hazaaron chehre hain, par meri aankhein sirf aapko dhoondti hain. Aapki ek jhalak har thakan mita deti hai."
  },
  {
    chapter: 7,
    hindi: `Samundar ki lehron sa behta hai tera khayal,
Dil ke har kone mein rehta hai tera sawal.
Kitna sukoon milta hai jab sochte hain tujhe,
Jaise registan mein mil gaya ho barf ka jamal. 💖`,
    meaning: "Aapke baare mein sochna hi dil ko beintehaa thandak aur sukoon deta hai, jaise tapti dhoop mein thandi hawa ka jhonka."
  },
  {
    chapter: 8,
    hindi: `Kabhi zulfon ko sanwaarna, kabhi palkon ka jhukna,
Kitna haseen hai tera bin kahe sab keh jaana.
Hum toh bas tere ek lafz ke intezaar mein hain,
Kab kahega dil tera 'haath thaam lo hamesha ke liye'. 🪷`,
    meaning: "Aapki aankhon ki khamoshi bhi kitna kuch bol jaati hai. Hum toh bas us pal ke intezaar mein hain jab aap humein apna bana lenge."
  },
  {
    chapter: 9,
    hindi: `Tu subah ki pehli kiran jaisi noorani hai,
Tu shaam ki dhalati hawa si deewani hai.
Meri zindagi ki sabse pyari kitaab ho tum,
Jiska har panna bas teri hi kahani hai. 📖`,
    meaning: "Aap meri zindagi ki sabse anmol aur khoobsurat kitaab hain, jiska har panna aapke bina adhoora hai."
  },
  {
    chapter: 10,
    hindi: `Lakeeron mein kya likha hai hum nahi jaante,
Par har dua mein bas tujhe hi maangte hain.
Khuda se koi aisi khwahish nahi maangi,
Jisme tera naam hum shamil nahi karte hain. 🕊️`,
    meaning: "Kismat mein kya likha hai hum nahi jaante, par hamari koi dua aisi nahi guzarti jisme aapka naam na ho."
  },
  {
    chapter: 11,
    hindi: `Jaise kamal khilta hai neelkanth paani mein,
Waise hi tum aayi ho meri zindagani mein.
Har rang phika hai tere noor ke aage,
Tu sabse anmol tara hai is aasmaan ki raani mein. 🪷`,
    meaning: "Jaise neele paani par gulaabi kamal shaan se khilta hai, waise hi aapki pyari aahat ne meri zindagi ko mehak diya hai."
  },
  {
    chapter: 12,
    hindi: `Agar dil ek mandir hai toh tum uski murat ho,
Agar ishq ek shayari hai toh tum sabse khoobsurat ho.
Ab isse aage hum kya bayan karein jazbaat apne,
Meri har saans, meri har dhadkan ki zaroorat ho tum. 💫`,
    meaning: "Aap meri har saans aur har dhadkan mein basi hain. Agar mohabbat ek kavita hai, toh aap uski sabse pyari pankti hain."
  },
  {
    chapter: 13,
    hindi: `Waqt ki leharon par hum intezaar kar lenge,
Tere har faisle ka hum aitbaar kar lenge.
Ishq me jaldi karke kya paana hai bhala,
Umr bhar bhi lag jaye toh tera intezaar kar lenge. ⏳💙`,
    meaning: "Sachhe pyaar mein koi jaldbazi nahi hoti. Aapka dil jab bhi ready ho, hum hamesha poori izzat aur sabr ke saath aapka intezaar karenge."
  },
  {
    chapter: 14,
    hindi: `Khamoshiyon mein bhi ek dastaan hoti hai,
Sache jazbaat ki har dafa pehchaan hoti hai.
Tu jab chahe aana hum yahi milenge,
Kyunki sachhi mohabbat hamesha meherbaan hoti hai. 🌸`,
    meaning: "Khamoshi ke peeche bhi gehre jazbaat hote hain. Jab bhi aapka dil chahe, aap humein hamesha isi jagah muskurate hue paayenge."
  }
];

// ==========================================================================
// 2. STATE MACHINE & SESSION DATA
// ==========================================================================
const AppState = {
  currentScene: 'scene-welcome',
  userName: '',
  userGender: 'Female', // 'Female' | 'Male' | 'Prefer not to say'
  currentShayariIndex: 0,
  isLotusBloomed: false,
  isBloomingAnimating: false,
  celebrationMode: false
};

// ==========================================================================
// 4. CANVAS PARTICLE & REAL LOTUS PETALS ENGINE
// ==========================================================================
class StarfieldAndPetalsCanvas {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.stars = [];
    this.particles = [];
    this.petals = [];
    this.confetti = [];
    this.animationFrameId = null;

    this.init();
  }

  init() {
    this.resize();
    window.addEventListener('resize', () => this.resize(), { passive: true });

    // Seed background stars with golden & azure hints
    const starCount = Math.min(130, Math.floor((this.width * this.height) / 6800));
    for (let i = 0; i < starCount; i++) {
      this.stars.push({
        x: Math.random() * this.width,
        y: Math.random() * (this.height * 0.75),
        size: Math.random() * 1.8 + 0.4,
        alpha: Math.random() * 0.8 + 0.2,
        twinkleSpeed: 0.01 + Math.random() * 0.02,
        twinklePhase: Math.random() * Math.PI * 2,
        isGold: Math.random() > 0.6
      });
    }

    // Seed gentle floating golden (#ffbc42) and azure (#0496ff) motes
    for (let i = 0; i < 26; i++) {
      this.particles.push({
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        radius: Math.random() * 3 + 1.2,
        speedY: -(0.3 + Math.random() * 0.5),
        speedX: (Math.random() - 0.5) * 0.4,
        color: ['#ffbc42', '#0496ff', '#d81159', '#ffccd5'][Math.floor(Math.random() * 4)],
        alpha: Math.random() * 0.65 + 0.2
      });
    }

    // Seed realistic pink & rose lotus petals
    for (let i = 0; i < 16; i++) {
      this.petals.push(this.createPetal(true));
    }

    this.animate();
  }

  resize() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.canvas.width = this.width;
    this.canvas.height = this.height;
  }

  createPetal(randomY = false) {
    const lotusPetalColors = ['#d81159', '#ff4d6d', '#ff758f', '#ffccd5', '#ffe5ec'];
    return {
      x: Math.random() * this.width,
      y: randomY ? Math.random() * this.height : -35,
      size: Math.random() * 15 + 11,
      speedY: 0.6 + Math.random() * 0.8,
      speedX: Math.sin(Math.random() * Math.PI) * 0.8 + 0.25,
      rotation: Math.random() * Math.PI * 2,
      rotationSpeed: (Math.random() - 0.5) * 0.03,
      alpha: 0.45 + Math.random() * 0.45,
      hue: lotusPetalColors[Math.floor(Math.random() * lotusPetalColors.length)]
    };
  }

  triggerConfettiBurst(originX, originY) {
    const count = 75;
    const colors = ['#d81159', '#ffbc42', '#0496ff', '#8f2d56', '#ffffff', '#ff758f'];
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const velocity = 3.5 + Math.random() * 7.5;
      this.confetti.push({
        x: originX || this.width / 2,
        y: originY || this.height / 2,
        vx: Math.cos(angle) * velocity,
        vy: Math.sin(angle) * velocity - 2.5,
        size: 5 + Math.random() * 7,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.2,
        gravity: 0.12,
        alpha: 1,
        life: 1,
        decay: 0.007 + Math.random() * 0.008,
        isHeart: Math.random() > 0.55
      });
    }
  }

  drawLotusPetal(ctx, x, y, size, rotation, color, alpha) {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(rotation);
    ctx.globalAlpha = alpha;
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(0, -size);
    ctx.bezierCurveTo(size * 0.6, -size * 0.4, size * 0.5, size * 0.6, 0, size);
    ctx.bezierCurveTo(-size * 0.5, size * 0.6, -size * 0.6, -size * 0.4, 0, -size);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  }

  animate() {
    this.ctx.clearRect(0, 0, this.width, this.height);

    // 1. Draw Twinkling Stars
    for (const star of this.stars) {
      star.twinklePhase += star.twinkleSpeed;
      const currentAlpha = star.alpha * (0.6 + 0.4 * Math.sin(star.twinklePhase));
      this.ctx.fillStyle = star.isGold ? '#ffbc42' : '#ffffff';
      this.ctx.globalAlpha = Math.max(0.1, currentAlpha);
      this.ctx.beginPath();
      this.ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
      this.ctx.fill();
    }

    // 2. Draw Floating Golden & Azure Light Motes
    for (const p of this.particles) {
      p.y += p.speedY;
      p.x += p.speedX;
      if (p.y < -10) {
        p.y = this.height + 10;
        p.x = Math.random() * this.width;
      }
      this.ctx.fillStyle = p.color;
      this.ctx.globalAlpha = p.alpha;
      this.ctx.shadowBlur = 8;
      this.ctx.shadowColor = p.color;
      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      this.ctx.fill();
      this.ctx.shadowBlur = 0;
    }

    // 3. Draw Floating Natural Pink Lotus Petals
    for (let i = 0; i < this.petals.length; i++) {
      const petal = this.petals[i];
      petal.y += petal.speedY;
      petal.x += Math.sin(petal.y * 0.015) * petal.speedX;
      petal.rotation += petal.rotationSpeed;

      if (petal.y > this.height + 40) {
        this.petals[i] = this.createPetal(false);
      }

      this.drawLotusPetal(
        this.ctx,
        petal.x,
        petal.y,
        petal.size,
        petal.rotation,
        petal.hue,
        petal.alpha
      );
    }

    // 4. Draw Celebration Hearts & Confetti
    for (let i = this.confetti.length - 1; i >= 0; i--) {
      const c = this.confetti[i];
      c.x += c.vx;
      c.y += c.vy;
      c.vy += c.gravity;
      c.rotation += c.rotationSpeed;
      c.life -= c.decay;

      if (c.life <= 0 || c.y > this.height + 20) {
        this.confetti.splice(i, 1);
        continue;
      }

      this.ctx.save();
      this.ctx.translate(c.x, c.y);
      this.ctx.rotate(c.rotation);
      this.ctx.globalAlpha = Math.max(0, c.life);

      if (c.isHeart) {
        this.ctx.font = `${Math.floor(c.size * 2)}px sans-serif`;
        this.ctx.textAlign = 'center';
        this.ctx.textBaseline = 'middle';
        this.ctx.fillText('💖', 0, 0);
      } else {
        this.ctx.fillStyle = c.color;
        this.ctx.fillRect(-c.size / 2, -c.size / 2, c.size, c.size * 1.5);
      }
      this.ctx.restore();
    }

    this.ctx.globalAlpha = 1;
    this.animationFrameId = requestAnimationFrame(() => this.animate());
  }
}

let canvasEngine = null;

// ==========================================================================
// 5. CORE NAVIGATION & SCENE TRANSITION CONTROLLER
// ==========================================================================
function transitionToScene(targetSceneId) {
  const currentSceneEl = document.getElementById(AppState.currentScene);
  const targetSceneEl = document.getElementById(targetSceneId);

  if (!targetSceneEl) {
    console.error(`Target scene ${targetSceneId} not found.`);
    return;
  }

  const restartBtn = document.getElementById('global-restart-btn');
  if (restartBtn) {
    if (targetSceneId === 'scene-welcome') {
      restartBtn.classList.add('hidden');
    } else {
      restartBtn.classList.remove('hidden');
    }
  }

  if (currentSceneEl && currentSceneEl !== targetSceneEl) {
    currentSceneEl.classList.remove('active-scene');
  }

  targetSceneEl.classList.add('active-scene');
  AppState.currentScene = targetSceneId;

  window.scrollTo({ top: 0, behavior: 'smooth' });

  if (targetSceneId === 'scene-shayari') {
    renderShayari(AppState.currentShayariIndex);
  } else if (targetSceneId === 'scene-confession') {
    populateConfessionText();
  } else if (targetSceneId === 'scene-proposal') {
    populateProposalText();
  } else if (targetSceneId === 'scene-accepted') {
    populateCelebrationText();
  }
}

// ==========================================================================
// 6. SCENE 1: WELCOME FORM SUBMISSION & HINGLISH VALIDATION
// ==========================================================================
function handleWelcomeSubmit(event) {
  if (event) {
    event.preventDefault();
  }

  const nameInput = document.getElementById('user-name-input');
  const validationMsg = document.getElementById('welcome-validation-msg');
  const genderRadios = document.getElementsByName('user-gender');

  if (!nameInput || !validationMsg) return;

  const rawName = nameInput.value.trim();

  // Strict Validation in Hinglish
  if (!rawName) {
    validationMsg.textContent = 'Please aage badhne se pehle apna pyara sa naam likho 💖';
    validationMsg.classList.add('error-active');
    nameInput.focus();
    return;
  }

  if (rawName.length < 2) {
    validationMsg.textContent = 'Naam kam se kam 2 akshar ka hona chahiye ✨';
    validationMsg.classList.add('error-active');
    nameInput.focus();
    return;
  }

  let selectedGender = 'Female';
  for (const radio of genderRadios) {
    if (radio.checked) {
      selectedGender = radio.value;
      break;
    }
  }

  AppState.userName = rawName;
  AppState.userGender = selectedGender;

  validationMsg.textContent = '';
  validationMsg.classList.remove('error-active');

  // Personalize Scene 2 Garden greeting in Hinglish
  const gardenGreetingEl = document.getElementById('garden-greeting');
  if (gardenGreetingEl) {
    gardenGreetingEl.textContent = `Suno, ${AppState.userName}... 💖`;
  }

  transitionToScene('scene-garden');
}

// ==========================================================================
// 7. SCENE 2: THE REAL LOTUS BLOOM INTERACTION
// ==========================================================================
function openLotus() {
  if (AppState.isBloomingAnimating) return;
  AppState.isBloomingAnimating = true;

  const lotusContainer = document.getElementById('lotus-svg-container');
  const touchHint = document.getElementById('touch-hint');

  if (lotusContainer) {
    lotusContainer.classList.add('bloomed');
  }

  if (touchHint) {
    touchHint.style.opacity = '0';
  }

  if (canvasEngine) {
    const lotusRect = lotusContainer
      ? lotusContainer.getBoundingClientRect()
      : { left: window.innerWidth / 2, top: window.innerHeight / 2, width: 0, height: 0 };
    const burstX = lotusRect.left + lotusRect.width / 2;
    const burstY = lotusRect.top + lotusRect.height / 2;
    canvasEngine.triggerConfettiBurst(burstX, burstY);
  }

  AppState.isLotusBloomed = true;

  setTimeout(() => {
    AppState.isBloomingAnimating = false;
    transitionToScene('scene-shayari');
  }, 1500);
}

// ==========================================================================
// 8. SCENE 3: SHAYARI JOURNEY RENDERING & NAVIGATION (HINGLISH)
// ==========================================================================
function renderShayari(index) {
  if (index < 0 || index >= SHAYARI_COLLECTION.length) return;
  AppState.currentShayariIndex = index;

  const activeData = SHAYARI_COLLECTION[index];
  const cardEl = document.getElementById('active-shayari-card');
  const counterEl = document.getElementById('shayari-chapter-counter');
  const textEl = document.getElementById('shayari-text-display');
  const meaningEl = document.getElementById('shayari-english-meaning');
  const prevBtn = document.getElementById('btn-shayari-prev');
  const nextLabel = document.getElementById('shayari-next-label');

  if (cardEl) {
    cardEl.classList.remove('card-enter');
    void cardEl.offsetWidth;
    cardEl.classList.add('card-enter');
  }

  if (counterEl) {
    counterEl.textContent = `Ehsaas ${index + 1} of ${SHAYARI_COLLECTION.length}`;
  }

  if (textEl) {
    textEl.textContent = activeData.hindi;
  }

  if (meaningEl) {
    meaningEl.textContent = `“${activeData.meaning}”`;
  }

  if (prevBtn) {
    prevBtn.disabled = index === 0;
  }

  if (nextLabel) {
    if (index === SHAYARI_COLLECTION.length - 1) {
      nextLabel.textContent = 'Mera Dil Kholo 💌';
    } else {
      nextLabel.textContent = 'Agla Ehsaas ❤️';
    }
  }

  renderProgressDots(index);
}

function renderProgressDots(activeIndex) {
  const container = document.getElementById('shayari-progress-dots');
  if (!container) return;

  container.innerHTML = '';
  SHAYARI_COLLECTION.forEach((item, idx) => {
    const dot = document.createElement('button');
    dot.type = 'button';
    dot.className = `dot-indicator ${idx === activeIndex ? 'active' : ''}`;
    dot.setAttribute('aria-label', `Ehsaas ${idx + 1}`);
    dot.setAttribute('title', `Ehsaas ${idx + 1}`);
    dot.addEventListener('click', () => {
      renderShayari(idx);
    });
    container.appendChild(dot);
  });
}

function showNextShayari() {
  if (AppState.currentShayariIndex < SHAYARI_COLLECTION.length - 1) {
    renderShayari(AppState.currentShayariIndex + 1);
  } else {
    showConfession();
  }
}

function showPreviousShayari() {
  if (AppState.currentShayariIndex > 0) {
    renderShayari(AppState.currentShayariIndex - 1);
  }
}

function repeatCurrentShayari() {
  renderShayari(AppState.currentShayariIndex);
}

// ==========================================================================
// 9. SCENE 4: PERSONAL ROMANTIC CONFESSION (HINGLISH)
// ==========================================================================
function showConfession() {
  transitionToScene('scene-confession');
}

function populateConfessionText() {
  const line1El = document.getElementById('confession-line-1');
  const safeName = AppState.userName || 'Khaas Dost';

  if (line1El) {
    line1El.innerHTML = `<strong class="user-highlight-name">${escapeHTML(safeName)}</strong>, kuch log zindagi mein aate hain aur har aam pal ko behad khaas aur yaadgar bana dete hain.`;
  }
}

// ==========================================================================
// 10. SCENE 5: THE GRAND LOVE PROPOSAL (HINGLISH)
// ==========================================================================
function showProposal() {
  transitionToScene('scene-proposal');
}

function populateProposalText() {
  const headlineEl = document.getElementById('proposal-headline');
  const intentLineEl = document.getElementById('proposal-intent-line');
  const questionEl = document.getElementById('proposal-main-question');

  const safeName = AppState.userName || 'Meri Jaan';
  const gender = AppState.userGender;

  if (headlineEl) {
    headlineEl.textContent = `${safeName}, ek baat sachche dil se kehni hai…`;
  }

  // Hinglish Gender Grammatical Tuning
  if (gender === 'Female') {
    if (intentLineEl) intentLineEl.textContent = 'Main apne dil ki sabse pyari baat tumse kehna chahta hoon…';
    if (questionEl) questionEl.innerHTML = `Kya tum meri zindagi ki khoobsurat love story ka hissa banogi? 💖🪷`;
  } else if (gender === 'Male') {
    if (intentLineEl) intentLineEl.textContent = 'Main apne dil ki sabse pyari baat tumse kehna chahti hoon…';
    if (questionEl) questionEl.innerHTML = `Kya tum meri zindagi ki khoobsurat love story ka hissa banoge? 💖🪷`;
  } else {
    if (intentLineEl) intentLineEl.textContent = 'Main apne dil ki sabse pyari baat tumse kehna chahta/chahti hoon…';
    if (questionEl) questionEl.innerHTML = `Kya tum meri zindagi ki khoobsurat love story ka hissa banoge/banogi? 💖🪷`;
  }
}

// ==========================================================================
// 11. SCENE 6: GAME LOOP - ACCEPTANCE OR RESPECTFUL MORE TIME
// ==========================================================================
function handleAcceptance() {
  AppState.celebrationMode = true;

  if (canvasEngine) {
    canvasEngine.triggerConfettiBurst(window.innerWidth / 2, window.innerHeight / 2);
    setTimeout(() => {
      canvasEngine.triggerConfettiBurst(window.innerWidth * 0.3, window.innerHeight * 0.4);
      canvasEngine.triggerConfettiBurst(window.innerWidth * 0.7, window.innerHeight * 0.4);
    }, 450);
  }

  transitionToScene('scene-accepted');
}

function populateCelebrationText() {
  const customTextEl = document.getElementById('celebration-custom-text');
  const safeName = AppState.userName || 'Pyar';

  if (customTextEl) {
    customTextEl.innerHTML = `<strong class="user-highlight-name">${escapeHTML(safeName)}</strong>, tumhare is haan ne is kahani ko lajawab bana diya. Har sachhe rishte ki shuruaat sachchai, izzat aur ek-doosre ko samajhne se hoti hai.`;
  }
}

function handleMoreTime() {
  transitionToScene('scene-more-time');
}

// ==========================================================================
// 12. RESTART & RESET LOGIC
// ==========================================================================
function restartGame() {
  AppState.currentShayariIndex = 0;
  AppState.isLotusBloomed = false;
  AppState.isBloomingAnimating = false;
  AppState.celebrationMode = false;

  const lotusContainer = document.getElementById('lotus-svg-container');
  if (lotusContainer) {
    lotusContainer.classList.remove('bloomed');
  }

  const touchHint = document.getElementById('touch-hint');
  if (touchHint) {
    touchHint.style.opacity = '1';
  }

  const nameInput = document.getElementById('user-name-input');
  if (nameInput) {
    nameInput.value = '';
  }

  const validationMsg = document.getElementById('welcome-validation-msg');
  if (validationMsg) {
    validationMsg.textContent = '';
    validationMsg.classList.remove('error-active');
  }

  transitionToScene('scene-welcome');
}

// ==========================================================================
// 13. UTILITY FUNCTIONS & SECURITY
// ==========================================================================
function escapeHTML(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

// ==========================================================================
// 14. EVENT LISTENERS INITIALIZATION
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  canvasEngine = new StarfieldAndPetalsCanvas('bg-canvas');

  // Global Restart Button
  const globalRestartBtn = document.getElementById('global-restart-btn');
  if (globalRestartBtn) {
    globalRestartBtn.addEventListener('click', restartGame);
  }

  // Scene 1: Welcome Form
  const welcomeForm = document.getElementById('welcome-form');
  if (welcomeForm) {
    welcomeForm.addEventListener('submit', handleWelcomeSubmit);
  }

  // Scene 2: Interactive Central Real Lotus
  const centralLotus = document.getElementById('central-lotus-interactive');
  if (centralLotus) {
    centralLotus.addEventListener('click', openLotus);
    centralLotus.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openLotus();
      }
    });
  }

  // Scene 3: Shayari Journey Buttons
  const btnShayariNext = document.getElementById('btn-shayari-next');
  if (btnShayariNext) {
    btnShayariNext.addEventListener('click', showNextShayari);
  }

  const btnShayariPrev = document.getElementById('btn-shayari-prev');
  if (btnShayariPrev) {
    btnShayariPrev.addEventListener('click', showPreviousShayari);
  }

  const btnShayariRepeat = document.getElementById('btn-shayari-repeat');
  if (btnShayariRepeat) {
    btnShayariRepeat.addEventListener('click', repeatCurrentShayari);
  }

  // Scene 4: Confession Button
  const btnOpenProposal = document.getElementById('btn-open-proposal');
  if (btnOpenProposal) {
    btnOpenProposal.addEventListener('click', showProposal);
  }

  // Scene 5: Proposal Decision Buttons
  const btnProposalYes = document.getElementById('btn-proposal-yes');
  if (btnProposalYes) {
    btnProposalYes.addEventListener('click', handleAcceptance);
  }

  const btnProposalMoreTime = document.getElementById('btn-proposal-more-time');
  if (btnProposalMoreTime) {
    btnProposalMoreTime.addEventListener('click', handleMoreTime);
  }

  // Scene 6A: Celebration Buttons
  const btnCelebrationReadAgain = document.getElementById('btn-celebration-read-again');
  if (btnCelebrationReadAgain) {
    btnCelebrationReadAgain.addEventListener('click', () => {
      AppState.currentShayariIndex = 0;
      transitionToScene('scene-shayari');
    });
  }

  const btnCelebrationRestart = document.getElementById('btn-celebration-restart');
  if (btnCelebrationRestart) {
    btnCelebrationRestart.addEventListener('click', restartGame);
  }

  // Scene 6B: Respectful More Time Options
  const btnMoreTimeShayari = document.getElementById('btn-more-time-shayari');
  if (btnMoreTimeShayari) {
    btnMoreTimeShayari.addEventListener('click', () => {
      const nextIdx = (AppState.currentShayariIndex + 1) % SHAYARI_COLLECTION.length;
      AppState.currentShayariIndex = nextIdx;
      transitionToScene('scene-shayari');
    });
  }

  const btnMoreTimeConfession = document.getElementById('btn-more-time-confession');
  if (btnMoreTimeConfession) {
    btnMoreTimeConfession.addEventListener('click', () => {
      transitionToScene('scene-confession');
    });
  }

  const btnMoreTimeProposal = document.getElementById('btn-more-time-proposal');
  if (btnMoreTimeProposal) {
    btnMoreTimeProposal.addEventListener('click', () => {
      transitionToScene('scene-proposal');
    });
  }
});
