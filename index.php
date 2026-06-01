<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SEMAKO FURNITURE | Luxury Handcrafted Classics</title>
    <!-- Tailwind CSS CDN -->
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        classicDark: '#111111',
                        classicGold: '#c5a059',
                        classicGoldHover: '#a38243',
                        mahoganyBg: '#1a1512'
                    },
                    fontFamily: {
                        serif: ['Playfair Display', 'Georgia', 'serif'],
                    }
                }
            }
        }
    </script>
    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <style>
        body { font-family: 'Plus Jakarta Sans', sans-serif; scroll-behavior: smooth; }
        .font-serif { font-family: 'Playfair Display', serif; }
        .slide { transition: opacity 0.9s ease-in-out; }
        .testimonial-slide { transition: all 0.5s ease-in-out; }
    </style>
</head>
<body class="bg-[#fafafa] text-classicDark overflow-x-hidden">

    <!-- Header Navigation Bar -->
    <header class="bg-white/90 backdrop-blur-md sticky top-0 z-40 border-b border-gray-100">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-24 flex items-center justify-between">
            <a href="#" class="font-serif text-2xl font-bold tracking-widest text-classicDark flex flex-col">
                <span class="tracking-[0.2em]">SEMAKO</span>
                <span class="text-xs text-classicGold tracking-[0.4em] font-sans font-semibold -mt-1">FURNITURE</span>
            </a>

            <!-- Expanded Desktop Nav -->
            <nav class="hidden md:flex space-x-8 font-medium text-xs tracking-wider uppercase">
                <a href="#hero" class="hover:text-classicGold transition-colors">Atelier Home</a>
                <a href="#showroom" class="hover:text-classicGold transition-colors">The Vault Collection</a>
                <a href="#heritage" class="hover:text-classicGold transition-colors">Our Heritage</a>
                <a href="#lookbook" class="hover:text-classicGold transition-colors">Gallery Exhibits</a>
            </nav>

            <div class="flex items-center space-x-6">
                <!-- Cart Trigger Button -->
                <button id="cart-toggle-btn" class="relative p-2 text-classicDark hover:text-classicGold transition-colors focus:outline-none flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.2" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h3.375c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M2.25 21h19.5M4.5 21V6.242M4.5 21h3.75M5.625 9h2.25m-2.25 3h2.25m-2.25 3h2.25M13.5 6.25h.008v.008H13.5V6.25Zm0 3h.008v.008H13.5V9Zm0 3h.008v.008H13.5v-.008Zm0 3h.008v.008H13.5V15Z" />
                    </svg>
                    <span id="cart-count" class="absolute -top-1 -right-1 bg-classicGold text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold hidden">0</span>
                </button>
            </div>
        </div>
    </header>

    <!-- Bulky Hero Exhibition Slider -->
    <section id="hero" class="relative bg-classicDark text-white h-[85vh] min-h-[650px] overflow-hidden">
        <div id="slides-container" class="absolute inset-0 w-full h-full">
            <!-- Dynamic bulky environment slides injected via JS -->
        </div>
        <!-- Heavy Slider Controls -->
        <div class="absolute bottom-12 left-12 z-20 flex space-x-4">
            <button id="prev-slide" class="w-14 h-14 border border-white/20 flex items-center justify-center hover:bg-classicGold hover:text-white transition-all text-lg">&#10229;</button>
            <button id="next-slide" class="w-14 h-14 border border-white/20 flex items-center justify-center hover:bg-classicGold hover:text-white transition-all text-lg">&#10230;</button>
        </div>
    </section>

    <!-- Broad Dynamic Categorized Showroom Floor -->
    <section id="showroom" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
        <div class="flex flex-col xl:flex-row xl:items-end justify-between mb-16 pb-8 border-b border-gray-200">
            <div>
                <span class="text-classicGold font-medium tracking-[0.2em] uppercase text-xs block mb-3">Architectural Mastery</span>
                <h2 class="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-classicDark">The Classic Inventory Floor</h2>
            </div>
            
            <!-- Category Filtering Mechanism -->
            <div id="filter-container" class="flex flex-wrap gap-2 mt-8 xl:mt-0 font-medium text-xs uppercase tracking-wider">
                <button data-filter="all" class="filter-btn px-6 py-3.5 border border-classicDark bg-classicDark text-white transition-all duration-300">All Masterpieces</button>
                <button data-filter="chairs" class="filter-btn px-6 py-3.5 border border-gray-200 text-gray-500 hover:border-classicDark hover:text-classicDark transition-all duration-300">Thrones & Chairs</button>
                <button data-filter="wardrobes" class="filter-btn px-6 py-3.5 border border-gray-200 text-gray-500 hover:border-classicDark hover:text-classicDark transition-all duration-300">Grand Wardrobes</button>
                <button data-filter="shelves" class="filter-btn px-6 py-3.5 border border-gray-200 text-gray-500 hover:border-classicDark hover:text-classicDark transition-all duration-300">Library Shelves</button>
                <button data-filter="tables" class="filter-btn px-6 py-3.5 border border-gray-200 text-gray-500 hover:border-classicDark hover:text-classicDark transition-all duration-300">Bespoke Tables</button>
            </div>
        </div>

        <!-- Dynamic Hover Interactive Furniture Grid -->
        <div id="product-grid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <!-- Dynamic interactive structural nodes populated via app.js -->
        </div>
    </section>

    <!-- Handcrafted Wood Heritage Section -->
    <section id="heritage" class="bg-mahoganyBg text-white py-28 relative overflow-hidden border-t-4 border-classicGold">
        <div class="absolute inset-0 bg-[radial-gradient(#c5a059_1px,transparent_1px)] [background-size:24px_24px] opacity-5"></div>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            
            <div class="relative group p-4 border border-white/10 bg-white/5 backdrop-blur">
                <div class="absolute inset-0 border border-classicGold/20 m-8 pointer-events-none"></div>
                <img src="https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1200&q=80" alt="Solid Oak Joinery Masterwork" class="w-full aspect-[4/3] object-cover filter brightness-90 transition-transform duration-700 group-hover:scale-102">
            </div>

            <div class="space-y-8">
                <span class="text-classicGold font-medium tracking-[0.3em] uppercase text-xs block">Atelier Joinery</span>
                <h2 class="font-serif text-4xl sm:text-5xl font-bold leading-tight">Heavy Hardwood. <br>Generational Solid Craftsmanship.</h2>
                <p class="text-gray-400 font-light leading-relaxed text-sm sm:text-base">
                    At Semako Furniture, we deliberately reject transient trends. We craft heavy, structural statement pieces using premium matured mahogany, solid teak wood, and hand-finished oak timbers. Each dowel, mortise, and tenon joinery system is compiled manually to withstand a century of usage.
                </p>
                <div class="grid grid-cols-2 gap-8 pt-6 border-t border-white/10">
                    <div>
                        <h4 class="font-serif text-4xl font-semibold text-classicGold">Solid Wood</h4>
                        <p class="text-gray-400 text-xs uppercase tracking-widest mt-1.5">No Veneer or MDF Fills</p>
                    </div>
                    <div>
                        <h4 class="font-serif text-4xl font-semibold text-classicGold">Hand-Carved</h4>
                        <p class="text-gray-400 text-xs uppercase tracking-widest mt-1.5">Bespoke Baroque Accents</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Immersive Architectural Lookbook Layout -->
    <section id="lookbook" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
        <div class="text-center max-w-2xl mx-auto mb-20">
            <span class="text-classicGold font-medium tracking-widest uppercase text-xs block mb-3">Manorial Inspirations</span>
            <h2 class="font-serif text-4xl font-bold tracking-tight">The Estate Gallery Exhibits</h2>
            <p class="text-gray-500 text-xs mt-4 max-w-lg mx-auto">Explore authentic, heavy classic configurations styled across premium corporate studies, estate libraries, and formal dining halls.</p>
        </div>
        
        <!-- Multi-scale Staggered Luxury Grid Layout -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="space-y-6 md:col-span-2">
                <div class="overflow-hidden aspect-[16/10] bg-gray-200 relative group border border-gray-100">
                    <img src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105">
                    <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 p-8 flex items-end">
                        <p class="text-white font-serif text-lg italic">The Chancellor Library Suite</p>
                    </div>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div class="overflow-hidden aspect-square bg-gray-200 relative group border border-gray-100">
                        <img src="https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=800&q=80" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105">
                    </div>
                    <div class="overflow-hidden aspect-square bg-gray-200 relative group border border-gray-100">
                        <img src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105">
                    </div>
                </div>
            </div>
            
            <div class="space-y-6">
                <div class="overflow-hidden aspect-[3/4] bg-gray-200 relative group border border-gray-100 md:h-[calc(100%-1.5rem)]">
                    <img src="https://images.unsplash.com/photo-1615876234886-fd9a39fda97f?auto=format&fit=crop&w=800&q=80" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105">
                    <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 p-8 flex items-end">
                        <p class="text-white font-serif text-lg italic">Imperial Bedroom Armor Set</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Fading Testimonial Endorsements Loop -->
    <section class="bg-gray-100 py-28 border-t border-b border-gray-200/60 overflow-hidden">
        <div class="max-w-4xl mx-auto px-4 text-center relative h-64 flex flex-col justify-center">
            <div id="testimonials-container" class="relative w-full h-full">
                <!-- Testimonials context injected cleanly via app.js -->
            </div>
            <div id="testimonial-dots" class="flex justify-center space-x-2.5 mt-8"></div>
        </div>
    </section>

    <!-- Estate Footprint & Communication Footer -->
    <footer class="bg-classicDark text-white pt-24 pb-12 border-t-2 border-classicGold">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 pb-20 border-b border-white/5">
            <div class="space-y-5">
                <h3 class="font-serif text-2xl font-bold tracking-[0.15em] text-classicGold">SEMAKO</h3>
                <p class="text-gray-400 text-xs font-light leading-relaxed">
                    Premium architectural outfit specializing explicitly in substantial classic solid wood furniture, grand wardrobes, and bespoke aristocratic masterworks.
                </p>
                <p class="text-xs text-gray-500 font-medium">Ogun State, Nigeria.</p>
            </div>
            
            <div>
                <h4 class="font-serif text-sm font-semibold tracking-widest uppercase text-gray-300 mb-6">The Showroom Schedule</h4>
                <ul class="text-xs text-gray-400 space-y-3 font-light">
                    <li>Monday - Friday: 08:30 - 18:00</li>
                    <li>Saturday: 10:00 - 16:00</li>
                    <li>Sunday: Private Exhibition Viewings Only</li>
                </ul>
            </div>

            <div>
                <h4 class="font-serif text-sm font-semibold tracking-widest uppercase text-gray-300 mb-6">Atelier Dispatches</h4>
                <p class="text-xs text-gray-400 mb-4 font-light">Subscribe to receive exclusive access invitations to seasonal hardwood acquisitions.</p>
                <form id="subscribe-form" class="flex border border-white/10 p-1 bg-white/5">
                    <input type="email" placeholder="Corporate email address" class="bg-transparent px-4 py-3 text-xs text-white focus:outline-none flex-1" required>
                    <button type="submit" class="bg-classicGold hover:bg-classicGoldHover text-white text-xs font-bold px-5 transition-colors uppercase tracking-wider">Join</button>
                </form>
            </div>

            <div>
                <h4 class="font-serif text-sm font-semibold tracking-widest uppercase text-gray-300 mb-6">Direct Concierge</h4>
                <ul class="text-xs text-gray-400 space-y-3 font-light">
                    <li>Inquiries: concierge@semakofurniture.com</li>
                    <li>Hotline: +234 (0) 80 7777 7777</li>
                    <li>Office: Structural Estate Portals</li>
                </ul>
            </div>
        </div>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500">
            <p>&copy; 2026 SEMAKO FURNITURE. Executed using pure HTML, Tailwind CSS, & Vanilla JS.</p>
            <div class="space-x-6 mt-4 sm:mt-0">
                <a href="#" class="hover:text-classicGold transition-colors">Privacy Framework</a>
                <a href="#" class="hover:text-classicGold transition-colors">Terms of Architectural Carriage</a>
            </div>
        </div>
    </footer>

    <!-- Structural Slide-out Verification Drawer -->
    <div id="cart-drawer" class="fixed inset-0 z-50 pointer-events-none hidden" role="dialog">
        <div id="cart-backdrop" class="absolute inset-0 bg-black/70 opacity-0 transition-opacity duration-300 pointer-events-auto"></div>
        <div class="absolute inset-y-0 right-0 max-w-full flex pl-10">
            <div id="cart-panel" class="w-screen max-w-md bg-white pointer-events-auto transform translate-x-full transition-transform duration-300 flex flex-col shadow-2xl">
                <div class="p-6 border-b border-gray-100 flex items-center justify-between">
                    <div class="flex flex-col">
                        <h3 class="font-serif text-xl font-bold text-classicDark">Consultation File</h3>
                        <span class="text-[10px] text-gray-400 uppercase tracking-widest">Selected Masterpieces</span>
                    </div>
                    <button id="cart-close-btn" class="p-2 text-gray-400 hover:text-classicDark transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" /></svg>
                    </button>
                </div>
                <div id="cart-items" class="flex-1 overflow-y-auto p-6 space-y-6">
                    <div id="empty-cart-msg" class="text-center py-16 text-gray-400 font-light">
                        <p class="italic">No timber works staged for viewing compilation yet.</p>
                    </div>
                </div>
                <div class="p-6 border-t border-gray-100 bg-gray-50 space-y-4">
                    <div class="flex justify-between text-base font-semibold text-classicDark">
                        <p>Total Estimated Evaluation</p>
                        <p id="cart-total">₦0</p>
                    </div>
                    <button onclick="alert('Your staging sequence is locked! Our architectural concierge desk is processing your files.')" class="w-full bg-classicDark hover:bg-gray-800 text-white font-medium tracking-widest text-xs uppercase py-4 transition-colors">
                        Book Private Architectural Manifest Consultation
                    </button>
                </div>
            </div>
        </div>
    </div>

    <!-- Script Entrypoint Link -->
    <script src="app.js"></script>
</body>
</html>