// --- High-Fidelity Showroom Assets Data (Bulky Furniture Focus) ---
const HERO_SLIDES = [
    {
        image: "https://images.unsplash.com/photo-1618221210892-a3629c71653d?auto=format&fit=crop&w=1600&q=80",
        tagline: "Grand Living Room Formations",
        title: "The Sovereign Throne Hall",
        description: "Enormous structural armchairs coupled with custom-carved mahogany coffee frameworks engineered for estate manors."
    },
    {
        image: "https://images.unsplash.com/photo-1595514534835-298bb957ffcc?auto=format&fit=crop&w=1600&q=80",
        tagline: "Stately Library Formations",
        title: "Imperial Solid Oak Shelves",
        description: "Floor-to-ceiling multi-tiered library arrays crafted out of full-grain matured British oak frames."
    },
    {
        image: "https://images.unsplash.com/photo-1505693395321-883724634266?auto=format&fit=crop&w=1600&q=80",
        tagline: "Stewardship Bedroom Suites",
        title: "Triple-Tier Grand Wardrobes",
        description: "Heavy solid-slab wardrobe architectures with meticulous internal cedar lining panels and authentic brass handles."
    }
];

const SHOWROOM_PRODUCTS = [
    {
        id: 1,
        name: "Sovereign Mahogany Throne",
        category: "chairs",
        price: 850000,
        img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80",
        description: "Heavy, hand-sculpted solid mahogany armchair upholstered in top-grade deep espresso aniline leather."
    },
    {
        id: 2,
        name: "Grand Chancellor 4-Door Wardrobe",
        category: "wardrobes",
        price: 3400000,
        img: "https://images.unsplash.com/photo-1601760561441-16420502c7e0?auto=format&fit=crop&w=800&q=80",
        description: "Colossal multi-compartment wardrobe architecture forged out of matured solid teak boards with concealed solid brass hinge frames."
    },
    {
        id: 3,
        name: "Archival Estates Library Shelf",
        category: "shelves",
        price: 2150000,
        img: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80",
        description: "Bulky, double-braced wall-anchored multi-tiered bookshelf configured cleanly with hand-milled detailed corner crown moldings."
    },
    {
        id: 4,
        name: "Monarch 12-Seat Dining Table",
        category: "tables",
        price: 4800000,
        img: "https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=800&q=80",
        description: "Single solid log layout slice from structural premium afzelia timber, leveled with organic historical wood grain finishes."
    },
    {
        id: 5,
        name: "Bespoke Chesterfield Study Chair",
        category: "chairs",
        price: 980000,
        img: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=800&q=80",
        description: "Deeply tufted classic buttoned backing execution with dense structural solid timber scroll legs and heavy framing weights."
    },
    {
        id: 6,
        name: "Victorian Glass Display Cabinet",
        category: "shelves",
        price: 1950000,
        img: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80",
        description: "Stately formal dish and silver collection storage cabinet designed with double-thickness reinforced safety glass frames."
    }
];

const TESTIMONIAL_DATA = [
    {
        quote: "The weight and structural bulk of the Grand Chancellor wardrobe we ordered from Semako is extraordinary. It is completely authentic solid timber work—magnificent craftsmanship.",
        author: "High Chief Adeleke O.",
        title: "Ikoyi Residential Estate"
    },
    {
        quote: "True classic joinery is rare nowadays. Semako's archival shelves changed the entire atmosphere of our legal chamber's consultation library setup.",
        author: "Barrister Funmi A.",
        title: "Senior Counsel Senior Partner"
    },
    {
        quote: "The deep buttoned Chesterfield chairs are beautifully finished. Absolute structural integrity that you notice instantly when seated.",
        author: "Engr. Emeka N.",
        title: "Abuja Executive Suites"
    }
];

// --- State Variables ---
let activeCart = [];
let currentSlideIndex = 0;
let currentTestimonialIndex = 0;
let slideInterval;
let testimonialInterval;

// --- DOM Cache Elements ---
const slidesContainer = document.getElementById('slides-container');
const productGrid = document.getElementById('product-grid');
const filterBtns = document.querySelectorAll('.filter-btn');
const cartDrawer = document.getElementById('cart-drawer');
const cartPanel = document.getElementById('cart-panel');
const cartBackdrop = document.getElementById('cart-backdrop');
const cartCountBadge = document.getElementById('cart-count');
const cartTotalLabel = document.getElementById('cart-total');
const testimonialsContainer = document.getElementById('testimonials-container');
const testimonialDotsContainer = document.getElementById('testimonial-dots');

const formatNaira = (value) => new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN', minimumFractionDigits: 0 }).format(value);

// --- Massive Hero Slideshow System ---
function initHeroSlideshow() {
    HERO_SLIDES.forEach((slide, idx) => {
        const slideEl = document.createElement('div');
        slideEl.className = `slide absolute inset-0 w-full h-full object-cover flex items-center bg-cover bg-center ${idx === 0 ? 'opacity-100 z-10' : 'opacity-0 z-0'}`;
        slideEl.style.backgroundImage = `linear-gradient(to right, rgba(11,11,11,0.9) 40%, rgba(11,11,11,0.2) 100%), url('${slide.image}')`;
        
        slideEl.innerHTML = `
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div class="max-w-2xl space-y-5 transform ${idx === 0 ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'} transition-all duration-1000 delay-300">
                    <span class="text-classicGold tracking-[0.3em] uppercase text-xs font-bold block">${slide.tagline}</span>
                    <h1 class="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1]">${slide.title}</h1>
                    <p class="text-gray-300 font-light text-sm sm:text-base max-w-lg leading-relaxed">${slide.description}</p>
                    <div class="pt-4">
                        <a href="#showroom" class="inline-block bg-classicGold hover:bg-classicGoldHover text-white text-xs font-bold tracking-[0.2em] uppercase px-10 py-5 transition-all transform hover:-translate-y-0.5">Enter Showroom Floor</a>
                    </div>
                </div>
            </div>
        `;
        slidesContainer.appendChild(slideEl);
    });
    startSlideTimer();
}

function goToSlide(nextIndex) {
    const slides = document.querySelectorAll('.slide');
    if (!slides.length) return;
    
    slides[currentSlideIndex].classList.replace('opacity-100', 'opacity-0');
    slides[currentSlideIndex].classList.replace('z-10', 'z-0');
    slides[currentSlideIndex].querySelector('div > div').classList.replace('translate-y-0', 'translate-y-8');
    slides[currentSlideIndex].querySelector('div > div').classList.replace('opacity-100', 'opacity-0');

    currentSlideIndex = (nextIndex + HERO_SLIDES.length) % HERO_SLIDES.length;

    slides[currentSlideIndex].classList.replace('opacity-0', 'opacity-100');
    slides[currentSlideIndex].classList.replace('z-0', 'z-10');
    slides[currentSlideIndex].querySelector('div > div').classList.replace('translate-y-8', 'translate-y-0');
    slides[currentSlideIndex].querySelector('div > div').classList.replace('opacity-0', 'opacity-100');
}

function startSlideTimer() {
    clearInterval(slideInterval);
    slideInterval = setInterval(() => goToSlide(currentSlideIndex + 1), 7000);
}

// --- Furniture Catalog Floor Rendering Pipeline ---
function renderShowroomFloor(filterValue = 'all') {
    productGrid.innerHTML = '';
    const operationalData = filterValue === 'all' ? SHOWROOM_PRODUCTS : SHOWROOM_PRODUCTS.filter(item => item.category === filterValue);

    operationalData.forEach(product => {
        const itemCard = document.createElement('div');
        itemCard.className = "bg-white border border-gray-100 flex flex-col justify-between opacity-0 translate-y-4 animate-[fadeUp_0.4s_ease-out_forwards] shadow-sm hover:shadow-xl transition-all duration-300";
        
        itemCard.innerHTML = `
            <div class="relative overflow-hidden group aspect-[4/3] bg-gray-100 cursor-pointer">
                <img src="${product.img}" alt="${product.name}" class="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105">
                <!-- Hover Details Sheet Reveal Panel Overlay -->
                <div class="absolute inset-0 bg-black/85 flex flex-col justify-between p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-400 ease-in-out">
                    <div class="space-y-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                        <span class="text-xs tracking-widest text-classicGold uppercase font-semibold">${product.category} Archive</span>
                        <h4 class="font-serif text-2xl font-bold text-white leading-tight">${product.name}</h4>
                        <p class="text-gray-300 text-xs font-light leading-relaxed">${product.description}</p>
                    </div>
                    <div class="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                        <button onclick="addItemToCart(${product.id})" class="w-full bg-classicGold hover:bg-classicGoldHover text-white text-xs uppercase tracking-[0.15em] font-bold py-4 transition-all">
                            Stage Masterpiece
                        </button>
                    </div>
                </div>
            </div>
            <div class="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2 bg-white z-10 border-t border-gray-50">
                <h3 class="font-serif font-bold text-base text-classicDark tracking-wide">${product.name}</h3>
                <span class="font-bold text-sm text-classicGold tracking-wide whitespace-nowrap">${formatNaira(product.price)}</span>
            </div>
        `;
        productGrid.appendChild(itemCard);
    });
}

// --- Testimonial Smooth Carousel Slider Loop ---
function initTestimonials() {
    TESTIMONIAL_DATA.forEach((t, idx) => {
        const testEl = document.createElement('div');
        testEl.className = `testimonial-slide absolute inset-0 flex flex-col items-center justify-center space-y-4 text-center transition-all duration-500 ${idx === 0 ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-95 z-0'}`;
        
        testEl.innerHTML = `
            <div class="flex text-classicGold space-x-1.5 justify-center mb-1">
                ${'&#9733;'.repeat(5)}
            </div>
            <p class="font-serif text-lg sm:text-xl lg:text-2xl text-classicDark italic max-w-2xl px-6 leading-relaxed font-light">
                "${t.quote}"
            </p>
            <div class="pt-2">
                <h5 class="text-xs uppercase tracking-widest font-bold text-classicDark">${t.author}</h5>
                <span class="text-[10px] text-classicGold uppercase tracking-wider font-medium">${t.title}</span>
            </div>
        `;
        testimonialsContainer.appendChild(testEl);

        const dot = document.createElement('button');
        dot.className = `w-2 h-2 rounded-full transition-all duration-300 ${idx === 0 ? 'bg-classicGold w-6' : 'bg-gray-300'}`;
        dot.addEventListener('click', () => jumpToTestimonial(idx));
        testimonialDotsContainer.appendChild(dot);
    });
    startTestimonialTimer();
}

function jumpToTestimonial(targetIdx) {
    const slides = document.querySelectorAll('.testimonial-slide');
    const dots = testimonialDotsContainer.querySelectorAll('button');
    if(!slides.length) return;

    slides[currentTestimonialIndex].className = "testimonial-slide absolute inset-0 flex flex-col items-center justify-center space-y-4 text-center transition-all duration-500 opacity-0 scale-95 z-0";
    dots[currentTestimonialIndex].className = "w-2 h-2 rounded-full bg-gray-300 transition-all duration-300";

    currentTestimonialIndex = targetIdx;

    slides[currentTestimonialIndex].className = "testimonial-slide absolute inset-0 flex flex-col items-center justify-center space-y-4 text-center transition-all duration-500 opacity-100 scale-100 z-10";
    dots[currentTestimonialIndex].className = "w-2 h-2 rounded-full bg-classicGold w-6 transition-all duration-300";
    startTestimonialTimer();
}

function startTestimonialTimer() {
    clearInterval(testimonialInterval);
    testimonialInterval = setInterval(() => {
        let next = (currentTestimonialIndex + 1) % TESTIMONIAL_DATA.length;
        jumpToTestimonial(next);
    }, 6000);
}

// --- Compilation Context Operations Synchronizer ---
function updateCartView() {
    const totalCount = activeCart.reduce((sum, item) => sum + item.quantity, 0);
    if (totalCount > 0) {
        cartCountBadge.textContent = totalCount;
        cartCountBadge.classList.remove('hidden');
        document.getElementById('empty-cart-msg').classList.add('hidden');
    } else {
        cartCountBadge.classList.add('hidden');
        document.getElementById('empty-cart-msg').classList.remove('hidden');
    }

    const customRows = document.querySelectorAll('.cart-item-row');
    customRows.forEach(row => row.remove());

    let runningSum = 0;
    activeCart.forEach(item => {
        runningSum += (item.price * item.quantity);
        const cartItemRow = document.createElement('div');
        cartItemRow.className = "cart-item-row flex items-center justify-between border-b border-gray-100 pb-4";
        cartItemRow.innerHTML = `
            <div class="flex-1 pr-4">
                <h4 class="font-serif font-bold text-sm text-classicDark">${item.name}</h4>
                <p class="text-xs text-classicGold mt-0.5">${formatNaira(item.price)}</p>
                <div class="flex items-center space-x-2 mt-2">
                    <button onclick="changeQty(${item.id}, -1)" class="w-5 h-5 border border-gray-200 rounded flex items-center justify-center text-xs hover:border-classicDark">-</button>
                    <span class="text-xs font-semibold w-4 text-center">${item.quantity}</span>
                    <button onclick="changeQty(${item.id}, 1)" class="w-5 h-5 border border-gray-200 rounded flex items-center justify-center text-xs hover:border-classicDark">+</button>
                </div>
            </div>
            <div class="text-right">
                <span class="text-xs font-bold block">${formatNaira(item.price * item.quantity)}</span>
                <button onclick="removeFromCart(${item.id})" class="text-[10px] uppercase text-red-400 hover:text-red-600 mt-1">Remove</button>
            </div>
        `;
        document.getElementById('cart-items').appendChild(cartItemRow);
    });

    cartTotalLabel.textContent = formatNaira(runningSum);
}

function toggleCartPanel(openIntent) {
    if (openIntent) {
        cartDrawer.classList.remove('hidden');
        setTimeout(() => {
            cartBackdrop.classList.remove('opacity-0');
            cartPanel.classList.remove('translate-x-full');
        }, 15);
    } else {
        cartBackdrop.classList.add('opacity-0');
        cartPanel.classList.add('translate-x-full');
        setTimeout(() => cartDrawer.classList.add('hidden'), 300);
    }
}

// --- Global Context Architectural Accessors ---
window.addItemToCart = function(productId) {
    const item = SHOWROOM_PRODUCTS.find(p => p.id === productId);
    const inCart = activeCart.find(c => c.id === productId);

    if (inCart) {
        inCart.quantity += 1;
    } else {
        activeCart.push({ ...item, quantity: 1 });
    }
    updateCartView();
    toggleCartPanel(true);
};

window.removeFromCart = function(productId) {
    activeCart = activeCart.filter(c => c.id !== productId);
    updateCartView();
};

window.changeQty = function(productId, delta) {
    const cartItem = activeCart.find(c => c.id === productId);
    if (!cartItem) return;
    cartItem.quantity += delta;
    if (cartItem.quantity <= 0) {
        window.removeFromCart(productId);
    } else {
        updateCartView();
    }
};

// --- Execution Events Pipeline Setup ---
document.addEventListener('DOMContentLoaded', () => {
    initHeroSlideshow();
    renderShowroomFloor();
    initTestimonials();

    document.getElementById('prev-slide').addEventListener('click', () => { goToSlide(currentSlideIndex - 1); startSlideTimer(); });
    document.getElementById('next-slide').addEventListener('click', () => { goToSlide(currentSlideIndex + 1); startSlideTimer(); });

    document.getElementById('filter-container').addEventListener('click', (e) => {
        const btn = e.target.closest('.filter-btn');
        if (!btn) return;
        filterBtns.forEach(b => b.className = "filter-btn px-6 py-3.5 border border-gray-200 text-gray-500 hover:border-classicDark hover:text-classicDark transition-all duration-300");
        btn.className = "filter-btn px-6 py-3.5 border border-classicDark bg-classicDark text-white transition-all duration-300";
        renderShowroomFloor(btn.dataset.filter);
    });

    document.getElementById('cart-toggle-btn').addEventListener('click', () => toggleCartPanel(true));
    document.getElementById('cart-close-btn').addEventListener('click', () => toggleCartPanel(false));
    cartBackdrop.addEventListener('click', () => toggleCartPanel(false));

    document.getElementById('subscribe-form').addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Your email has been safely logged in Semako dispatch ledgers.');
        e.target.reset();
    });
});

const runtimeStyle = document.createElement("style");
runtimeStyle.textContent = `
    @keyframes fadeUp {
        from { opacity: 0; transform: translateY(24px); }
        to { opacity: 1; transform: translateY(0); }
    }
`;
document.head.appendChild(runtimeStyle);