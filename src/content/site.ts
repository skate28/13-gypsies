/**
 * Single source of truth for 13 Gypsies content.
 * Every fact here comes from the restaurant's own published copy or its public listings.
 * Nothing is invented: if a detail could not be confirmed it is simply left out.
 */

export type MenuItem = { name: string; price?: number; desc?: string };
export type MenuGroup = { id: string; title: string; note?: string; items: MenuItem[] };
export type Photo = { src: string; alt: string; caption?: string; w: number; h: number };

export const site = {
  name: "13 Gypsies",
  tagline: "A Peasant Kitchen",
  cuisine: "Spanish tapas & small plates",
  description:
    "13 Gypsies is a cozy, intimate Spanish tapas bistro on Stockton Street in Riverside, Jacksonville. Nearly everything is made from scratch in house: breads, cured meats, cheeses, sausages, spice blends, pickled vegetables and desserts.",
  phone: "(904) 389-0330",
  phoneHref: "tel:+19043890330",
  address: {
    street: "887 Stockton St",
    city: "Jacksonville",
    region: "FL",
    postal: "32204",
    neighborhood: "Riverside",
    crossStreet: "Right off I-10 on Stockton St. at College St.",
    lat: 30.31479,
    lng: -81.689095,
  },
  reserveUrl: "https://www.opentable.com/r/13-gypsies-jacksonville",
  /** 0 = Sunday. Times are 24h, America/New_York. */
  hours: [
    { day: 0, label: "Sunday", open: null, close: null },
    { day: 1, label: "Monday", open: null, close: null },
    { day: 2, label: "Tuesday", open: "17:00", close: "21:00" },
    { day: 3, label: "Wednesday", open: "17:00", close: "21:00" },
    { day: 4, label: "Thursday", open: "17:00", close: "21:00" },
    { day: 5, label: "Friday", open: "17:00", close: "22:00" },
    { day: 6, label: "Saturday", open: "17:00", close: "22:00" },
  ] as { day: number; label: string; open: string | null; close: string | null }[],
  story: {
    lead: "13 Gypsies was born from a love of tradition.",
    paragraphs: [
      "With a heritage firmly rooted in Spain, 13 Gypsies brings Jacksonville a taste of true Mediterranean flavor. While many restaurants chase innovation, this kitchen works to preserve traditional recipes and flavors before they are lost: simple, elegant food of the old world, built on good ingredients and honest preparation.",
      "Spanish techniques drive both creative and classic renditions of Spanish dishes, with the influence of other cuisines found throughout the menu. It is a true craft kitchen. Breads, cured meats, cheeses, sausages, spice blends, pickled vegetables and desserts are made in house, which means less waste and better food.",
      "The wines are mainly from Spain and the beer is Florida local.",
    ],
    building:
      "Home is a two-story Spanish-style building built in 1923 by Henrietta Dozier, Jacksonville's only female architect in the early part of the 20th century. Inside you'll find the original floor tile and walls covered in eclectic, maximalist religious iconography.",
  },
  facts: [
    { value: "7", label: "tables" },
    { value: "20", label: "seats" },
    { value: "1923", label: "building" },
    { value: "4.8★", label: "OpenTable" },
  ],
  houseMade: [
    "Peasant bread",
    "Fresh chorizo",
    "Dry-cured meats",
    "Ricotta & fresh cheese",
    "Fresh pasta",
    "Spice blends",
    "Pickled vegetables",
    "Desserts",
  ],
  menuNote:
    "The kitchen changes the menu with the seasons. These are dishes and prices from the most recently published menu, so tonight's plates and prices may differ. Call for today's menu.",
  menu: [
    {
      id: "vegetables",
      title: "Vegetables",
      items: [
        { name: "Patatas Fritas", price: 9, desc: "sea salt, sweet onion curry sauce" },
        { name: "Cauliflower", price: 13, desc: "sautéed with curry sauce and sweet peas" },
        { name: "Mushroom Sevilla", price: 14, desc: "cream sherry sauce, goat cheese toast" },
        { name: "Roasted Crimini Mushrooms", price: 10, desc: "garlic, rosemary, saffron aioli, sautéed kale" },
        { name: "Empanada of Kale", price: 6, desc: "parmesan, black pepper, dill buttermilk dressing" },
        { name: "Pan Roasted Brussels Sprouts", price: 10, desc: "blue cheese sauce, roasted almonds" },
        { name: "Butter Braised Cabbage", price: 9, desc: "brown butter, house kimchi paste" },
      ],
    },
    {
      id: "meat-seafood",
      title: "Meat & Seafood",
      items: [
        { name: "House Made Fresh Chorizo", price: 13, desc: "honey sautéed pear, warm spiced dates" },
        { name: "Mongolian Beef", price: 10, desc: "honey-soy dipping sauce" },
        { name: "Vietnamese Styled Meatballs", price: 15, desc: "house chili-garlic oil, sweet lime sauce" },
        { name: "Spanish Pork Mojo", price: 10, desc: "house cultured cream" },
        { name: "Gambas al Ajillo", price: 15, desc: "olive oil, cream sherry, tomatoes, parsley, house baguette" },
        { name: "Pan Fried Fish", price: 14, desc: "lightly floured, brown butter, lemon, parsley" },
      ],
    },
    {
      id: "cold",
      title: "Cold",
      items: [
        { name: "Honey Garlic Hummus", price: 9, desc: "flatbread, clover honey" },
        { name: "House Made Ricotta", price: 10, desc: "smoked honey, grilled peasant bread" },
        { name: "Grilled Housemade Peasant Bread", price: 4, desc: "olive oil, sea salt, black pepper" },
        { name: "Mushroom Escabeche", price: 11, desc: "Spanish olive oil, sherry vinegar, white wine, onion, garlic, rosemary, toasted house baguette" },
        { name: "Tomato & Cucumber Salad", price: 11, desc: "couscous, citronette, dill whipped feta, pickled red onion" },
        { name: "Zanahorias", price: 9, desc: "Moorish spiced carrots, pickled sultanas, cilantro, roasted almonds, olive oil" },
      ],
    },
    {
      id: "pasta-daily",
      title: "Etc. & Daily",
      items: [
        { name: "Roman Style Gnocchi", price: 15, desc: "beef and mushroom stock, butter, herbs, pecorino" },
        { name: "Gnudi", price: 13, desc: "house cultured cream sauce, lemony kale, pecorino" },
        { name: "Risotto", price: 15, desc: "daily offering" },
        { name: "From the Chamber", price: 10, desc: "true in-house, handcrafted dry cured meat, peasant bread" },
      ],
    },
  ] as MenuGroup[],
  signatureDishes: [
    {
      name: "Roasted Crimini Mushrooms",
      desc: "Garlic, rosemary, saffron aioli and sautéed kale.",
      photo: { src: "/images/roasted-crimini-mushrooms.webp", alt: "Roasted crimini mushrooms over saffron aioli with sautéed kale", w: 1600, h: 1067 },
    },
    {
      name: "Butter Braised Cabbage",
      desc: "Brown butter and house kimchi paste.",
      photo: { src: "/images/butter-braised-cabbage.webp", alt: "Butter braised cabbage glazed with brown butter and kimchi paste", w: 1600, h: 1067 },
    },
    {
      name: "Mushroom Escabeche",
      desc: "Sherry vinegar, white wine, rosemary and toasted house baguette.",
      photo: { src: "/images/mushroom-escabeche.webp", alt: "Mushroom escabeche on toasted house baguette", w: 1600, h: 1067 },
    },
    {
      name: "Zanahorias & Escabeche",
      desc: "Moorish spiced carrots with pickled sultanas, alongside the escabeche.",
      photo: { src: "/images/zanahorias-escabeche.webp", alt: "Zanahorias carrots and mushroom escabeche with toasted bread", w: 1600, h: 1067 },
    },
  ],
  gallery: [
    { src: "/images/bar-harlequin.webp", alt: "The harlequin-tiled bar and dining room", w: 1600, h: 1200 },
    { src: "/images/tomato-cucumber-salad.webp", alt: "A bright vegetable small plate over whipped cheese", w: 1600, h: 1600 },
    { src: "/images/bar-iconography.webp", alt: "The bar framed by walls of religious iconography", w: 1600, h: 1204 },
    { src: "/images/seared-ahi-tuna.webp", alt: "Seared ahi tuna with crisps and dipping sauce", w: 1600, h: 1067 },
    { src: "/images/dining-room-evening.webp", alt: "The dining room in the evening", w: 1600, h: 1204 },
    { src: "/images/storefront.webp", alt: "The Stockton Street storefront with sidewalk seating", w: 1600, h: 1382 },
  ] as Photo[],
  heroPhoto: { src: "/images/dining-room.webp", alt: "The intimate dining room at 13 Gypsies", w: 1600, h: 1067 } as Photo,
  reviews: {
    rating: 4.8,
    count: 687,
    source: "OpenTable",
    breakdown: [
      { label: "Food", value: 4.8 },
      { label: "Service", value: 4.9 },
      { label: "Ambience", value: 4.8 },
      { label: "Value", value: 4.7 },
    ],
    quotes: [
      { text: "This is a hidden gem. We had such a great evening. The food was amazing! Get the shrimp!", source: "OpenTable diner, Oct 2026" },
      { text: "Great bottles for great prices, really flavorful shareables you can't find anywhere else in the area, and a very cozy setting.", source: "OpenTable diner, Oct 2026" },
      { text: "Always slaps. Best in Jax. Would go here every week if it wouldn't ruin the novelty for me.", source: "OpenTable diner, Oct 2026" },
      { text: "No doubt. The best restaurant in Jacksonville! We keep going back for every special occasion in our lives.", source: "OpenTable diner, Sep 2026" },
      { text: "I'm always impressed with my experience at 13 Gypsies. As a local, I'm proud to recommend them to friends visiting from out of town.", source: "OpenTable diner, Oct 2026" },
      { text: "One the best restaurants in town, a real Jax staple.", source: "OpenTable diner, Oct 2026" },
    ],
  },
  faq: [
    {
      q: "Should I make a reservation?",
      a: "Yes. 13 Gypsies is a very small traditional bistro with seven tables and twenty seats, and it fills up fast. Call during business hours and speak with someone, or book on OpenTable. Reservations are not accepted by email or voicemail.",
    },
    {
      q: "Is it casual?",
      a: "Absolutely. It's a true neighborhood eatery with no pretense. Come in shorts and a t-shirt. This is your place.",
    },
    {
      q: "When is last seating?",
      a: "Last seating is an hour and a half before closing time.",
    },
    {
      q: "No one is answering the phone!",
      a: "The front-of-house team is only in during business hours. The kitchen is there earlier, but busy preparing your meal, so please call during open hours.",
    },
    {
      q: "Do you cater or host private parties?",
      a: "Yes. They cater, and you can reserve the whole restaurant for an all-inclusive flat rate covering food, beverages, room rental, tax and gratuity. It's great for rehearsal dinners, holiday parties and birthdays. Call for details.",
    },
    {
      q: "Can I buy house-made products in bulk?",
      a: "Yes. Fresh chorizo, spice blends, bread, fresh cheese, cured meats, fresh pasta, pickled vegetables and more are sold in bulk to customers and other eateries. Just call and let them know what you want.",
    },
    {
      q: "Parking, seating and dietary needs?",
      a: "Street parking. Inside and patio seating, counter seating, wheelchair access and gluten-free options. Cards accepted: AMEX, Discover, Mastercard and Visa.",
    },
  ],
};

export type Site = typeof site;
