/* ==========================================================================
   INTERACTIVE LOGIC: APP.JS
   Crunchyroll Anime Awards 2026 Landing Page
   ========================================================================== */

// 1. DATA OF ALL CATEGORY WINNERS
const winnersData = {
    "mha": {
        id: "mha",
        category: "🌟 Anime del Año",
        filterCategory: "anime-year",
        title: "My Hero Academia: Final Season",
        studio: "Bones",
        image: "assets/images/mha_hero_banner.png",
        quote: "El desenlace definitivo de una era de héroes y villanos, con una emotividad insuperable.",
        reason: "La temporada final de My Hero Academia logró capturar de forma impecable la tensión del conflicto final entre héroes y villanos, entregando batallas épicas y momentos de gran emotividad que resonaron profundamente en la comunidad global de fans. Representa un tributo y cierre supremo para el manga original de Kōhei Horikoshi.",
        impact: "Cerró la noche obteniendo tres galardones de altísimo nivel: Anime del Año, Mejor Personaje de Reparto (Katsuki Bakugo) y Mejor Secuencia de Cierre (Ending con el tema 'I' de BUMP OF CHICKEN)."
    },
    "demon-slayer": {
        id: "demon-slayer",
        category: "🎬 Película del Año",
        filterCategory: "tecnicos",
        title: "Demon Slayer: Infinity Castle",
        studio: "ufotable",
        image: "assets/images/demon_slayer_infinity.png",
        quote: "Un espectáculo visual que redefinió los límites de la animación en cines. Ganadora de 7 premios.",
        reason: "La recreación tridimensional del Castillo del Infinito y sus fluidas secuencias de acción marcaron un nuevo estándar para la industria del cine de animación mundial. La fluidez técnica y el impacto sonoro brindaron una experiencia inmersiva cinematográfica única y sobrecogedora.",
        impact: "Fue la obra más galardonada de la noche, arrasando con 7 estatuillas, entre ellas Película del Año, Mejor Banda Sonora (Yuki Kajiura y Go Shiina) y Mejor Actuación de Voz en Inglés (Lucien Dodge como Akaza)."
    },
    "gachiakuta": {
        id: "gachiakuta",
        category: "✨ Mejor Serie Nueva",
        filterCategory: "series",
        title: "Gachiakuta",
        studio: "Bones",
        image: "assets/images/gachiakuta_art.png",
        quote: "Estilo urbano rebelde 'grunge', colores vibrantes y una narrativa fascinante de redención.",
        reason: "Adaptando con maestría el manga de Kei Urana, Gachiakuta se convirtió en la gran sorpresa estética del año. El estudio Bones imprimió una vibra callejera única, toques de grafiti fluorescente y secuencias de acción trepidantes que enamoraron tanto a la crítica como al público general.",
        impact: "Se alzó con tres galardones sumamente relevantes: Mejor Serie Nueva, Mejor Diseño de Personajes y Mejor Dirección de Arte / Fondos."
    },
    "one-piece": {
        id: "one-piece",
        category: "🔄 Mejor Serie en Curso",
        filterCategory: "series",
        title: "ONE PIECE",
        studio: "Toei Animation",
        image: "assets/images/one_piece_luffy.png",
        quote: "Consistencia, animación estelar en el clímax de Egghead y un fenómeno mundial incombustible.",
        reason: "A pesar de llevar más de 25 años en emisión, ONE PIECE sigue demostrando por qué es un gigante indiscutible. El premio reconoce la increíble dirección de arte y los altísimos estándares de producción que el estudio Toei Animation ha mantenido y superado en los episodios cumbre de la Isla de Egghead, particularmente con el despliegue del Gear 5.",
        impact: "Revalida su título global como una de las obras más queridas y consistentes de la historia del anime contemporáneo."
    },
    "solo-leveling": {
        id: "solo-leveling",
        category: "🎨 Mejor Animación",
        filterCategory: "tecnicos",
        title: "Solo Leveling Season 2",
        studio: "A-1 Pictures",
        image: "assets/images/solo_leveling_shadows.png",
        quote: "Combates fluidos y espectaculares, invocaciones de sombras imponentes y un dinamismo extremo.",
        reason: "La segunda temporada de la adaptación del famoso webtoon coreano elevó las apuestas en cuanto a secuencias de combate se refiere. La fluidez de la animación, el espectacular juego de luces y sombras, y el imponente misticismo de las invocaciones del ejército de sombras le valieron este merecido reconocimiento técnico, venciendo en una categoría muy reñida.",
        impact: "Obtuvo el premio a Mejor Animación y Mejor Anime de Acción del Año."
    },
    "maomao": {
        id: "maomao",
        category: "🧠 Mejor Personaje Principal",
        filterCategory: "personajes",
        title: "Maomao",
        studio: "The Apothecary Diaries S2",
        image: "assets/images/maomao_apothecary.png",
        quote: "Su inteligencia analítica, obsesión por los venenos y personalidad única cautivaron al mundo.",
        reason: "Maomao destaca por romper con los arquetipos de heroínas tradicionales. Su pragmatismo, falta de interés por el romance cortesano, intelecto brillante, devoción analítica por las pócimas y sus divertidas reacciones faciales la han establecido como uno de los personajes más carismáticos del anime contemporáneo.",
        impact: "Además de coronarse como Mejor Personaje Principal, su actriz de voz japonesa, Aoi Yuki, recibió el premio a Mejor Interpretación de Voz (Japonesa) por este mismo papel."
    },
    "bakugo": {
        id: "bakugo",
        category: "💥 Mejor Personaje de Reparto",
        filterCategory: "personajes",
        title: "Katsuki Bakugo",
        studio: "My Hero Academia",
        image: "assets/images/bakugo_mha.png",
        quote: "La apoteosis de su arco de redención y crecimiento personal en la batalla más crítica.",
        reason: "El temperamental pero sumamente heroico Bakugo se llevó este reconocimiento gracias a su tremenda evolución en la temporada de cierre. Su sacrificio, madurez, el entendimiento profundo de su rivalidad con Deku y su liderazgo en las batallas definitivas sirvieron como el broche de oro perfecto para su desarrollo a lo largo de toda la serie.",
        impact: "Es considerado por fans y críticos como uno de los mejores arcos de desarrollo de personaje en la historia del shonen moderno."
    },
    "direccion": {
        id: "direccion",
        category: "🎭 Mejor Dirección",
        filterCategory: "tecnicos",
        title: "Akinori Fudesaka, Norihiro Naganuma",
        studio: "The Apothecary Diaries S2 (OLM / TOHO)",
        image: "assets/images/maomao_apothecary.png", // Reuse Maomao image with a stylish filter handled by CSS
        quote: "Excelente balance entre misterio palaciego, drama, comedia y una ambientación histórica sublime.",
        reason: "La dirección de esta temporada logró equilibrar de manera soberbia los momentos de comedia íntima de Maomao con los tensos misterios políticos del palacio imperial. La riqueza de los detalles de época, la fluidez visual de la narrativa y la tensión dramática demuestran una labor directiva de altísimo nivel.",
        impact: "Contribuyó a que The Apothecary Diaries S2 fuera una de las producciones más aclamadas de la gala, obteniendo también Mejor Drama."
    },
    "dandadan": {
        id: "dandadan",
        category: "🛸 Mejor Comedia",
        filterCategory: "series",
        title: "DAN DA DAN Season 2",
        studio: "Science SARU",
        image: "assets/images/dandadan_comedy.png",
        quote: "Locura sobrenatural a un ritmo vertiginoso, humor absurdo genial y animación psicodélica brillante.",
        reason: "Bajo la dirección del dinámico equipo de Science SARU, la segunda temporada de Dandadan se consolidó como la propuesta más divertida y original de la televisión. Con un ritmo vertiginoso, animación psicodélica y situaciones hilarantes que combinan alienígenas, fantasmas y romance adolescente, conquistó al público.",
        impact: "Llegó al evento con un récord histórico de 20 nominaciones previas, logrando asegurar los premios a Mejor Comedia y Mejor Secuencia de Apertura (Opening con el tema 'On The Way' de AiNA THE END)."
    },
    "lazarus": {
        id: "lazarus",
        category: "💡 Mejor Anime Original",
        filterCategory: "series",
        title: "Lazarus",
        studio: "MAPPA",
        image: "assets/images/lazarus_cyberpunk.png",
        quote: "Un thriller de ciencia ficción estilizado bajo el genio de Shinichiro Watanabe y coreografías John Wick.",
        reason: "Dirigida por el legendario Shinichiro Watanabe (creador de Cowboy Bebop) y con secuencias de acción coreografiadas por Chad Stahelski (director de John Wick), Lazarus ofreció una experiencia de ciencia ficción y acción pura que no dependió de ninguna obra impresa previa, demostrando el poder de las historias originales en el anime.",
        impact: "Aclamado unánimemente por su dirección estilizada, banda sonora de jazz y cyberpunk electrónico, y su espectacular animación de combate."
    }
};

// 2. DOM ELEMENTS
const searchInput = document.getElementById('search-input');
const navItems = document.querySelectorAll('.nav-item');
const mobileFilterSelect = document.getElementById('mobile-filter-select');
const countNumber = document.getElementById('count-number');
const winnersGrid = document.getElementById('winners-grid-container');
const cards = document.querySelectorAll('.winner-card');

// Modal elements
const modal = document.getElementById('detail-modal');
const modalClose = document.getElementById('modal-close');
const modalImage = document.getElementById('modal-image');
const modalCategory = document.getElementById('modal-category');
const modalTitle = document.getElementById('modal-title');
const modalStudio = document.getElementById('modal-studio');
const modalReason = document.getElementById('modal-reason-text');
const modalImpact = document.getElementById('modal-impact-text');

// Simulator elements
const userVoteSelect = document.getElementById('user-vote-select');
const voteBtn = document.getElementById('vote-btn');
const voteResultMsg = document.getElementById('vote-result-msg');

// 3. FILTERING LOGIC
function filterWinners(filterValue) {
    let visibleCount = 0;
    const searchQuery = searchInput.value.toLowerCase().trim();

    cards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        const searchTags = card.getAttribute('data-search');
        
        // Check category matching
        const matchesCategory = (filterValue === 'all') || (cardCategory === filterValue) || (filterValue === 'anime-year' && card.getAttribute('data-id') === 'mha');
        
        // Check search matching
        const matchesSearch = !searchQuery || searchTags.includes(searchQuery);

        if (matchesCategory && matchesSearch) {
            card.style.display = 'flex';
            // Trigger a quick entrance micro-animation
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
            visibleCount++;
        } else {
            card.style.display = 'none';
            card.style.opacity = '0';
        }
    });

    countNumber.textContent = visibleCount;
}

// 4. SIDEBAR EVENT LISTENERS
navItems.forEach(item => {
    item.addEventListener('click', () => {
        // Update active class
        navItems.forEach(nav => nav.classList.remove('active'));
        item.classList.add('active');

        const filterValue = item.getAttribute('data-filter');
        
        // Sync mobile filter dropdown
        if (mobileFilterSelect) {
            mobileFilterSelect.value = filterValue;
        }

        filterWinners(filterValue);
    });
});

// 5. MOBILE SELECT EVENT LISTENER
if (mobileFilterSelect) {
    mobileFilterSelect.addEventListener('change', (e) => {
        const filterValue = e.target.value;

        // Sync sidebar active class
        navItems.forEach(nav => {
            if (nav.getAttribute('data-filter') === filterValue) {
                nav.classList.add('active');
            } else {
                nav.classList.remove('active');
            }
        });

        filterWinners(filterValue);
    });
}

// 6. SEARCH BAR DYNAMIC FILTERING
searchInput.addEventListener('input', () => {
    // Get currently active category
    const activeNavItem = document.querySelector('.nav-item.active');
    const filterValue = activeNavItem ? activeNavItem.getAttribute('data-filter') : 'all';
    
    filterWinners(filterValue);
});

// 7. MODAL DETAILED VIEW LOGIC
function openModal(winnerId) {
    const data = winnersData[winnerId];
    if (!data) return;

    // Populate fields
    modalImage.src = data.image;
    modalImage.alt = data.title;
    modalCategory.textContent = data.category;
    modalTitle.textContent = data.title;
    modalStudio.textContent = data.studio;
    modalReason.textContent = data.reason;
    modalImpact.textContent = data.impact;

    // Show modal with animation
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Lock background scroll
}

function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = ''; // Unlock background scroll
}

// Open modal triggers
document.querySelectorAll('.open-details-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const winnerId = btn.getAttribute('data-winner-id');
        openModal(winnerId);
    });
});

// Also trigger on card body click for maximum interactivity
cards.forEach(card => {
    card.addEventListener('click', (e) => {
        // Prevent click if button was already clicked directly
        if (e.target.classList.contains('open-details-btn')) return;
        const winnerId = card.getAttribute('data-id');
        openModal(winnerId);
    });
});

// Close modal triggers
modalClose.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// Support ESC key to close modal
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
    }
});

// 8. INTERACTIVE VOTING SIMULATOR LOGIC
const simulatedVotes = {
    "mha": { name: "My Hero Academia: Final Season", percentage: 38 },
    "demon-slayer": { name: "Demon Slayer: Infinity Castle", percentage: 42 },
    "gachiakuta": { name: "Gachiakuta", percentage: 24 },
    "one-piece": { name: "ONE PIECE", percentage: 31 },
    "solo-leveling": { name: "Solo Leveling Season 2", percentage: 29 },
    "maomao": { name: "Maomao (The Apothecary Diaries S2)", percentage: 76 },
    "dandadan": { name: "DAN DA DAN Season 2", percentage: 48 },
    "lazarus": { name: "Lazarus", percentage: 18 }
};

voteBtn.addEventListener('click', () => {
    const selectedVal = userVoteSelect.value;
    
    if (selectedVal === "none" || !selectedVal) {
        voteResultMsg.textContent = "⚠️ Por favor, selecciona una nominación primero.";
        voteResultMsg.style.color = "#ffb4ab";
        voteResultMsg.style.display = "block";
        return;
    }

    const voteData = simulatedVotes[selectedVal];
    if (voteData) {
        // Simulate vote registering
        voteBtn.disabled = true;
        voteBtn.textContent = "Registrando...";
        
        setTimeout(() => {
            voteResultMsg.innerHTML = `🏆 <strong>¡Voto registrado con éxito!</strong> Has votado por <em>${voteData.name}</em>. Actualmente esta opción cuenta con un <strong>${voteData.percentage}%</strong> de popularidad global entre los fanáticos en esta categoría.`;
            voteResultMsg.style.color = "var(--color-brand-orange)";
            voteResultMsg.style.display = "block";
            
            // Re-enable button
            voteBtn.disabled = false;
            voteBtn.textContent = "Registrar Voto";
        }, 800);
    }
});

// 9. ON LOAD EFFECT
window.addEventListener('DOMContentLoaded', () => {
    // Reveal cards one by one on entrance
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
        
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 100 * index);
    });
});
