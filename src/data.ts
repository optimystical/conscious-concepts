/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { DishPreset, ProjectTransformation, TestimonialItem, AuditTarget } from "./types";

export const DISH_PRESETS: DishPreset[] = [
  {
    id: "burger",
    name: "Classic Cheeseburger",
    category: "Mains",
    originalPrice: 14.50,
    originalDesc: "Ground beef patty with melted cheddar cheese, lettuce, tomato, pickles, and burger sauce on a sesame seed bun. Served with fries.",
    originalServing: "Plated simply on a white ceramic round plate with a side basket of frozen fries.",
    
    cinematicName: "The Wagyu Hearth Craft",
    cinematicPrice: 28.00,
    sensoryDescription: "A flame-breathed medallion of reserve dry-aged Wagyu beef, bathed in the rich embrace of ancient melted Comté. Crowned with charred heirloom tomato-heart confit, and nestled in a golden pillow of cold-fermented, hand-kneaded buttered brioche. Served over hand-cut rust-skinned tubers, seasoned with fine flaked Cyprus sea salt.",
    poeticTone: "Rich. Primal. Decadent.",
    sommelierPairing: "Pomerol, Château Rouge, Vintage 2018 — its structured tannins cut beautifully through the high-marbling beef.",
    visualNote: "Presented on a cracked slate slab with glowing smoking embers of rosemary, caught under an amber glass cloche.",
    culinaryCategory: "Somatic Entrées",
    moodHighlight: "Charcoal, Embers, Earth"
  },
  {
    id: "salad",
    name: "Caesar Salad",
    category: "Appetizers",
    originalPrice: 11.00,
    originalDesc: "Romaine lettuce tossed with Caesar dressing, parmesan cheese shavings, and baked garlic croutons.",
    originalServing: "Standard salad bowl with pre-shaved cheese and store-bought croutons around the rim.",
    
    cinematicName: "The Verdant Monolith",
    cinematicPrice: 19.00,
    sensoryDescription: "Sculpted hearts of absolute crisp baby Romaine, standing vertically inside an emulsion of 36-month aged Reggiano and wind-cured salinity. Interspersed with hand-shattered crystal croutons of sourdough lardons and draped in delicate sheets of cured silver anchovy. Spritzed with cold-pressed Sicilian lemon mist.",
    poeticTone: "Sculptural. Herbaceous. Crisp.",
    sommelierPairing: "Sancerre, Les Monts Damnés, 2021 — a flinty, mineral-driven sauvignon blanc to complement the salinity and citrus zest.",
    visualNote: "Asymmetric minimalist architecture, drizzled with olive oil fractures on a raw rimmed matte granite plate.",
    culinaryCategory: "Sculpted Starters",
    moodHighlight: "Verdant Crisp, Shaven Flakes, Mineral Oil"
  },
  {
    id: "torte",
    name: "Chocolate Lava Cake",
    category: "Desserts",
    originalPrice: 8.50,
    originalDesc: "Warm chocolate cake with a molten chocolate center, served with a scoop of vanilla ice cream.",
    originalServing: "Served quickly on a small dessert dish with a dusting of powdered sugar and a classic cherry.",
    
    cinematicName: "The Volcanic Solstice",
    cinematicPrice: 16.00,
    sensoryDescription: "A sovereign dome of warm, flourless Venetian chocolate cake, engineered to collapse at the nudge of a spoon. Releases a slowly flowing river of obsidian Valrhona dark cocoa core at 64% intensity. Accompanied by a frozen orb of Madagascar vanilla bean pod cream, sweetened with local spring honeycomb nectar.",
    poeticTone: "Ethereal. Dark. Obsidian.",
    sommelierPairing: "Tawny Port 20-Year, Quinta do Noval — deep fig, nutty, and caramel notes that weave through the dark chocolate magma.",
    visualNote: "Dusted with crystalline gold flakes, back-lit with a subtle copper-amber sugar glass sail.",
    culinaryCategory: "Molten Celestial",
    moodHighlight: "Magma, Gold Ore, Pure Bean"
  }
];

export const PROJECT_TRANSFORMATIONS: ProjectTransformation[] = [
  {
    id: "obsidian",
    title: "Gastronomic Menu Sculpture",
    type: "menu",
    clientName: "The Obsidian Pavilion",
    location: "SOHO, Manhattan",
    bland: {
      description: "A standard, double-sided laminated plastic folder. White cardstock, crowded Times New Roman text, cluttered categories, and standard bright overhead lighting reflecting off the plastic film.",
      style: "Corporate Laminated Folder",
      typography: "Times New Roman, Arial bold (8pt)",
      metrics: "Average order spend: $42 / table retention: 45m",
      visualTone: "Uninspiring, functional, crowded"
    },
    elegant: {
      description: "An offline-first physical and digital art canvas. Bound in debossed slate paper with copper metal margins. Each menu item is a photographic frame, utilizing moody low-key lighting, deep cinematic shadow lines, and poetic ingredient origin profiles.",
      style: "Sensory Monolith Binding",
      typography: "Bespoke Serifs paired with Micro Grotesk",
      metrics: "+38.4% Lift on high-margin main plates",
      visualTone: "An intellectual dialogue of texture, shadow, and taste.",
      sommelierNote: "The menu reads like a luxurious culinary publication.",
      heroImage: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=600"
    },
    cameraAngle: {
      name: "Chiaroscuro Low-Key 30°",
      skewVal: "skew-y-2",
      translationVal: "translate-y-1 hover:-translate-y-2",
      focusElement: "Engraved copper binder margins with custom leaf imprint"
    }
  },
  {
    id: "saint-amour",
    title: "The Digital Web Theater",
    type: "website",
    clientName: "Hôtel Saint-Amour & Spa",
    location: "Provence, France",
    bland: {
      description: "Generic WordPress template with stock photos of happy pool families, clunky PDF booking forms that redirect users, and a heavy corporate blue color palette that clashes with Provençal warmth.",
      style: "Standard Holiday Template",
      typography: "Roboto and Open Sans",
      metrics: "Bounce rate: 68% / session duration: 1.2m",
      visualTone: "Impersonal, mechanical, distracting"
    },
    elegant: {
      description: "An immersive sensory portal. Full-screen slow-motion cinematic video loop of mountain mist rolling over rosemary shrubs. Transitions are custom-timed layout swipes mimicking physical paper. Booking is an elegant boutique chat interface wrapped in a soft warm-sand vignette.",
      style: "Autonomous Visual Sanctuary",
      typography: "Bespoke Italianate Display Roman",
      metrics: "+52.1% Luxury Suite booking conversion",
      visualTone: "Pure sensory transition, evocative and calm.",
      sommelierNote: "The website feels like a physical room in the monastery itself.",
      heroImage: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=600"
    },
    cameraAngle: {
      name: "Horizontal Dolly Pan 110°",
      skewVal: "-skew-y-1",
      translationVal: "translate-y-2 hover:translate-y-0",
      focusElement: "Organic responsive scroll-motion floating parallax ribbons"
    }
  },
  {
    id: "brass-anchor",
    title: "Cinematic Visual Identity",
    type: "menu",
    clientName: "The Brass Anchor",
    location: "St. Ives, Cornwall",
    bland: {
      description: "A chalkboard near the bar with illegible chalk handwriting, smudged fish sauce stains, and standard yellowed card menus printed from an office ink-jet desktop printer.",
      style: "Scribbled Chalkboard & Office Print",
      typography: "Default bold Gothic script and Comic Sans",
      metrics: "Average beverage tie-in: 12% / repeat guests: 8%",
      visualTone: "Cluttered, chaotic, informal"
    },
    elegant: {
      description: "A hand-pressed heavy paper booklet, embedded with real ocean kelp fibers. Features elegant maritime charcoal charcoal drawings, asymmetrical offset typography, and immersive culinary coordinates of the harvesting vessels.",
      style: "Ocean-Pressed Textural Booklet",
      typography: "Monospace Latitude Serif",
      metrics: "+41.8% Increase in premium seafood sales",
      visualTone: "Rugged yet ultra-refined seaside modernism.",
      sommelierNote: "Every page reveals the raw coordinates of that morning's ocean harvest.",
      heroImage: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&q=80&w=600"
    },
    cameraAngle: {
      name: "Bilateral Macroscopic 45°",
      skewVal: "rotate-2",
      translationVal: "translate-x-1 hover:-translate-x-1",
      focusElement: "Salt-crusted copper-foil debossed stamp mark"
    }
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "test1",
    quote: "Konscious Koncepts didn't just re-design our website; they created an online art museum for our restaurant. Guests arrive already understanding our culinary philosophy by the time they take their seats.",
    author: "Elena Petrova",
    role: "Executive Chef & Owner",
    establishment: "The Obsidian Pavilion",
    metricLabel: "Average Check Value Hike",
    metricValue: "50.5%",
    metricImprovement: "up from $74 base",
    badge: "Grand Prix Culinary Design",
    gridSpan: "md:col-span-2"
  },
  {
    id: "test2",
    quote: "The visual transformation of our drinks menu was stunning. Aligning the layout with cinematic shadows sparked table discussions. Sensory sales exploded.",
    author: "Marc-Antoine Laurent",
    role: "Beverage Director",
    establishment: "Hôtel Saint-Amour",
    metricLabel: "Sommelier Order Increase",
    metricValue: "64.2%",
    metricImprovement: "reserve wines pairing",
    badge: "Epicurean Excellence Award",
    gridSpan: "md:col-span-1"
  },
  {
    id: "test3",
    quote: "Online engagement went from utility to reverence. Clicking our booking button feels like taking an elegant train through Burgundy. Our bounce rate fell off a cliff.",
    author: "Sir Julian Thorne",
    role: "General Manager",
    establishment: "The Brass Anchor Cornwall",
    metricLabel: "Suite Bookings Growth",
    metricValue: "39.0%",
    metricImprovement: "direct-to-client reservations",
    badge: "Michelin Guide Key Recognition",
    gridSpan: "md:col-span-1"
  },
  {
    id: "test4",
    quote: "Their cinematic layout is high-contrast craft. Every single dish description feels like physical texture under low light. They are in a league of their own.",
    author: "Chef Koji Tanaka",
    role: "Proprietor",
    establishment: "Mori Atelier",
    metricLabel: "Menu Conversion Rate",
    metricValue: "47.8%",
    metricImprovement: "signature tasting courses",
    badge: "Tokyo Avant-Garde Visual Award",
    gridSpan: "md:col-span-2"
  }
];

export const AUDIT_TARGETS: AuditTarget[] = [
  { id: "menu-copy", label: "Poetic & Sensory Menu Copy", category: "menu", selectedByDefault: true },
  { id: "menu-typography", label: "Luxury Layout & Custom Typography", category: "menu", selectedByDefault: true },
  { id: "digital-cinematic", label: "Cinematic Slow-Motion Website Entrance", category: "digital", selectedByDefault: true },
  { id: "digital-transitions", label: "Premium Tactile Layout Swipes", category: "digital", selectedByDefault: false },
  { id: "atm-lighting", label: "Chiaroscuro Menu Backlighting", category: "atmosphere", selectedByDefault: true },
  { id: "atm-sommelier", label: "Active Sommelier Curated Pairings", category: "atmosphere", selectedByDefault: false }
];
