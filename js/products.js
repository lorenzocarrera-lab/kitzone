/* ═══════════════════════════════════════════
   CATALOGO PRODOTTI
   img → percorso relativo a /images/
   Sostituisci con le foto reali scaricate da Yupoo
════════════════════════════════════════════ */
const PRODUCTS = [

  // ── MONDIALI 2026 ─────────────────────────────────────────
  { id:1,  cat:'mondiali', league:'Mondiali 2026', season:'2026', name:'Italia',       variant:'Home',  price:39.99, img:'mondiali/italia-home.jpg',        c1:'#003087', c2:'#001f5e' },
  { id:2,  cat:'mondiali', league:'Mondiali 2026', season:'2026', name:'Italia',       variant:'Away',  price:39.99, img:'mondiali/italia-away.jpg',        c1:'#f0f0f0', c2:'#dde8f8' },
  { id:3,  cat:'mondiali', league:'Mondiali 2026', season:'2026', name:'Argentina',    variant:'Home',  price:39.99, img:'mondiali/argentina-home.jpg',     c1:'#74acdf', c2:'#4c8dc4' },
  { id:4,  cat:'mondiali', league:'Mondiali 2026', season:'2026', name:'Brasile',      variant:'Home',  price:39.99, img:'mondiali/brasile-home.jpg',       c1:'#009c3b', c2:'#006e29' },
  { id:5,  cat:'mondiali', league:'Mondiali 2026', season:'2026', name:'Brasile',      variant:'Away',  price:39.99, img:'mondiali/brasile-away.jpg',       c1:'#002776', c2:'#001550' },
  { id:6,  cat:'mondiali', league:'Mondiali 2026', season:'2026', name:'Francia',      variant:'Home',  price:39.99, img:'mondiali/francia-home.jpg',       c1:'#002395', c2:'#001470' },
  { id:7,  cat:'mondiali', league:'Mondiali 2026', season:'2026', name:'Spagna',       variant:'Home',  price:39.99, img:'mondiali/spagna-home.jpg',        c1:'#c60b1e', c2:'#8c0815' },
  { id:8,  cat:'mondiali', league:'Mondiali 2026', season:'2026', name:'Germania',     variant:'Home',  price:39.99, img:'mondiali/germania-home.jpg',      c1:'#f0f0f0', c2:'#e0e0e0' },
  { id:9,  cat:'mondiali', league:'Mondiali 2026', season:'2026', name:'Portogallo',   variant:'Home',  price:39.99, img:'mondiali/portogallo-home.jpg',    c1:'#006600', c2:'#004400' },
  { id:10, cat:'mondiali', league:'Mondiali 2026', season:'2026', name:'Inghilterra',  variant:'Home',  price:39.99, img:'mondiali/inghilterra-home.jpg',   c1:'#f0f0f0', c2:'#e8e8e8' },
  { id:11, cat:'mondiali', league:'Mondiali 2026', season:'2026', name:'Inghilterra',  variant:'Away',  price:39.99, img:'mondiali/inghilterra-away.jpg',   c1:'#001f5e', c2:'#00124a' },
  { id:12, cat:'mondiali', league:'Mondiali 2026', season:'2026', name:'USA',          variant:'Home',  price:39.99, img:'mondiali/usa-home.jpg',           c1:'#002868', c2:'#001845' },
  { id:13, cat:'mondiali', league:'Mondiali 2026', season:'2026', name:'Marocco',      variant:'Home',  price:39.99, img:'mondiali/marocco-home.jpg',       c1:'#c1272d', c2:'#8c0a10' },
  { id:14, cat:'mondiali', league:'Mondiali 2026', season:'2026', name:'Giappone',     variant:'Home',  price:39.99, img:'mondiali/giappone-home.jpg',      c1:'#003580', c2:'#001f4a' },
  { id:15, cat:'mondiali', league:'Mondiali 2026', season:'2026', name:'Messico',      variant:'Home',  price:39.99, img:'mondiali/messico-home.jpg',       c1:'#006847', c2:'#004a32' },

  // ── SERIE A 2025/26 ───────────────────────────────────────
  { id:20, cat:'serie-a',  league:'Serie A 2025/26', season:'25/26', name:'Inter',       variant:'Home',  price:39.99, img:'seriea/inter-home.jpg',       c1:'#010e80', c2:'#000960' },
  { id:21, cat:'serie-a',  league:'Serie A 2025/26', season:'25/26', name:'Inter',       variant:'Away',  price:39.99, img:'seriea/inter-away.jpg',       c1:'#f0f0f0', c2:'#e8e8e8' },
  { id:22, cat:'serie-a',  league:'Serie A 2025/26', season:'25/26', name:'Milan',       variant:'Home',  price:39.99, img:'seriea/milan-home.jpg',       c1:'#c8102e', c2:'#8c0b20' },
  { id:23, cat:'serie-a',  league:'Serie A 2025/26', season:'25/26', name:'Milan',       variant:'Away',  price:39.99, img:'seriea/milan-away.jpg',       c1:'#111111', c2:'#222222' },
  { id:24, cat:'serie-a',  league:'Serie A 2025/26', season:'25/26', name:'Juventus',    variant:'Home',  price:39.99, img:'seriea/juventus-home.jpg',    c1:'#111111', c2:'#222222' },
  { id:25, cat:'serie-a',  league:'Serie A 2025/26', season:'25/26', name:'Juventus',    variant:'Away',  price:39.99, img:'seriea/juventus-away.jpg',    c1:'#f0d060', c2:'#c8b200' },
  { id:26, cat:'serie-a',  league:'Serie A 2025/26', season:'25/26', name:'Napoli',      variant:'Home',  price:39.99, img:'seriea/napoli-home.jpg',      c1:'#007fc5', c2:'#005f93' },
  { id:27, cat:'serie-a',  league:'Serie A 2025/26', season:'25/26', name:'Roma',        variant:'Home',  price:39.99, img:'seriea/roma-home.jpg',        c1:'#8b0000', c2:'#620000' },
  { id:28, cat:'serie-a',  league:'Serie A 2025/26', season:'25/26', name:'Lazio',       variant:'Home',  price:39.99, img:'seriea/lazio-home.jpg',       c1:'#87ceeb', c2:'#5bb5d8' },
  { id:29, cat:'serie-a',  league:'Serie A 2025/26', season:'25/26', name:'Atalanta',    variant:'Home',  price:39.99, img:'seriea/atalanta-home.jpg',    c1:'#001f5e', c2:'#00124a' },
  { id:30, cat:'serie-a',  league:'Serie A 2025/26', season:'25/26', name:'Fiorentina',  variant:'Home',  price:39.99, img:'seriea/fiorentina-home.jpg',  c1:'#4b0082', c2:'#33005a' },
  { id:31, cat:'serie-a',  league:'Serie A 2025/26', season:'25/26', name:'Torino',      variant:'Home',  price:39.99, img:'seriea/torino-home.jpg',      c1:'#8b1a1a', c2:'#6b0000' },

  // ── CHAMPIONS / TOP CLUB ──────────────────────────────────
  { id:40, cat:'champions', league:'Champions League', season:'25/26', name:'Real Madrid',      variant:'Home',  price:39.99, img:'champions/realmadrid-home.jpg',    c1:'#f0f0f0', c2:'#e8e8e8' },
  { id:41, cat:'champions', league:'Champions League', season:'25/26', name:'Real Madrid',      variant:'Away',  price:39.99, img:'champions/realmadrid-away.jpg',    c1:'#800020', c2:'#5c0018' },
  { id:42, cat:'champions', league:'Champions League', season:'25/26', name:'Barcelona',        variant:'Home',  price:39.99, img:'champions/barcelona-home.jpg',     c1:'#a50044', c2:'#750030' },
  { id:43, cat:'champions', league:'Champions League', season:'25/26', name:'PSG',              variant:'Home',  price:39.99, img:'champions/psg-home.jpg',           c1:'#001f5e', c2:'#00124a' },
  { id:44, cat:'champions', league:'Champions League', season:'25/26', name:'Man City',         variant:'Home',  price:39.99, img:'champions/mancity-home.jpg',       c1:'#6cabdd', c2:'#4a93cc' },
  { id:45, cat:'champions', league:'Champions League', season:'25/26', name:'Liverpool',        variant:'Home',  price:39.99, img:'champions/liverpool-home.jpg',     c1:'#c8102e', c2:'#8c0b20' },
  { id:46, cat:'champions', league:'Champions League', season:'25/26', name:'Arsenal',          variant:'Home',  price:39.99, img:'champions/arsenal-home.jpg',       c1:'#ef0107', c2:'#b50004' },
  { id:47, cat:'champions', league:'Champions League', season:'25/26', name:'Chelsea',          variant:'Home',  price:39.99, img:'champions/chelsea-home.jpg',       c1:'#034694', c2:'#022d5e' },
  { id:48, cat:'champions', league:'Champions League', season:'25/26', name:'Bayern Monaco',    variant:'Home',  price:39.99, img:'bundesliga/bayernmunich-home.jpg', c1:'#dc052d', c2:'#9e0320' },
  { id:49, cat:'champions', league:'Champions League', season:'25/26', name:'Borussia Dortmund',variant:'Home',  price:39.99, img:'bundesliga/dortmund-home.jpg',    c1:'#fde100', c2:'#c8b200' },

  // ── PREMIER LEAGUE ────────────────────────────────────────
  { id:60, cat:'premier', league:'Premier League', season:'25/26', name:'Liverpool',   variant:'Home',  price:39.99, img:'premier/liverpool-home.jpg',  c1:'#c8102e', c2:'#8c0b20' },
  { id:61, cat:'premier', league:'Premier League', season:'25/26', name:'Arsenal',     variant:'Home',  price:39.99, img:'premier/arsenal-home.jpg',    c1:'#ef0107', c2:'#b50004' },
  { id:62, cat:'premier', league:'Premier League', season:'25/26', name:'Man City',    variant:'Home',  price:39.99, img:'premier/mancity-home.jpg',    c1:'#6cabdd', c2:'#4a93cc' },
  { id:63, cat:'premier', league:'Premier League', season:'25/26', name:'Chelsea',     variant:'Home',  price:39.99, img:'premier/chelsea-home.jpg',    c1:'#034694', c2:'#022d5e' },
  { id:64, cat:'premier', league:'Premier League', season:'25/26', name:'Man United',  variant:'Home',  price:39.99, img:'premier/manutd-home.jpg',     c1:'#da291c', c2:'#a01f14' },
  { id:65, cat:'premier', league:'Premier League', season:'25/26', name:'Tottenham',   variant:'Home',  price:39.99, img:'premier/tottenham-home.jpg',  c1:'#f0f0f0', c2:'#e8e8e8' },

  // ── LA LIGA ───────────────────────────────────────────────
  { id:70, cat:'laliga', league:'La Liga', season:'25/26', name:'Real Madrid',   variant:'Home',  price:39.99, img:'laliga/realmadrid-home.jpg',  c1:'#f0f0f0', c2:'#e8e8e8' },
  { id:71, cat:'laliga', league:'La Liga', season:'25/26', name:'Barcelona',     variant:'Home',  price:39.99, img:'laliga/barcelona-home.jpg',   c1:'#a50044', c2:'#750030' },
  { id:72, cat:'laliga', league:'La Liga', season:'25/26', name:'Atletico',      variant:'Home',  price:39.99, img:'laliga/atletico-home.jpg',    c1:'#c8102e', c2:'#8c0b20' },
  { id:73, cat:'laliga', league:'La Liga', season:'25/26', name:'Sevilla',       variant:'Home',  price:39.99, img:'laliga/sevilla-home.jpg',     c1:'#f0f0f0', c2:'#e8e8e8' },

  // ── BUNDESLIGA ────────────────────────────────────────────
  { id:80, cat:'bundesliga', league:'Bundesliga', season:'25/26', name:'Bayern Monaco',     variant:'Home',  price:39.99, img:'bundesliga/bayernmunich-home.jpg', c1:'#dc052d', c2:'#9e0320' },
  { id:81, cat:'bundesliga', league:'Bundesliga', season:'25/26', name:'Borussia Dortmund', variant:'Home',  price:39.99, img:'bundesliga/dortmund-home.jpg',    c1:'#fde100', c2:'#c8b200' },
  { id:82, cat:'bundesliga', league:'Bundesliga', season:'25/26', name:'Bayer Leverkusen',  variant:'Home',  price:39.99, img:'bundesliga/leverkusen-home.jpg',  c1:'#e32221', c2:'#a81615' },
  { id:83, cat:'bundesliga', league:'Bundesliga', season:'25/26', name:'RB Leipzig',        variant:'Home',  price:39.99, img:'bundesliga/leipzig-home.jpg',     c1:'#dd0741', c2:'#a8042f' },

];
