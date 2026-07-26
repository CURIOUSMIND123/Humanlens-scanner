/* Vidya Arunodaya — offline curriculum manifest.
   Every asset is legally bundled:
   - PhET sims: CC BY 4.0 (redistribution allowed, attribution kept)
   - 3D models: royalty-free sample assets (viewer demo)
   - Notes: ORIGINAL text written for this pack (no NCERT text reproduced)
   - "Official chapter" links open ncert.nic.in / diksha.gov.in when online. */

const CURRICULUM = {
  "Class 10": {
    "Science": [
      {
        ch: 1, title: "Chemical Reactions and Equations", titleHi: "रासायनिक अभिक्रियाएँ",
        sim: "balancing-chemical-equations", model: null,
        ncert: "https://ncert.nic.in/textbook/pdf/jesc101.pdf",
        notes: "A chemical reaction rearranges atoms to form new substances. Atoms are never created or destroyed, so a chemical equation must be balanced — the same number of each atom on both sides. Explore this by balancing real equations in the simulation.",
        notesHi: "रासायनिक अभिक्रिया में परमाणु पुनर्व्यवस्थित होकर नए पदार्थ बनाते हैं। परमाणु न बनते हैं न नष्ट होते हैं, इसलिए समीकरण संतुलित होना चाहिए।",
        quiz: [
          { q: "Why must a chemical equation be balanced?", opts: ["To look neat", "Atoms are conserved — not created or destroyed", "To use less paper"], a: 1 },
          { q: "In 2H₂ + O₂ → 2H₂O, how many oxygen atoms are on the left?", opts: ["1", "2", "4"], a: 1 },
        ],
      },
      {
        ch: 4, title: "Carbon and its Compounds — Atomic Structure", titleHi: "परमाणु की संरचना",
        sim: "build-an-atom", model: null,
        ncert: "https://ncert.nic.in/textbook/pdf/jesc104.pdf",
        notes: "Everything is made of atoms: a nucleus of protons and neutrons, with electrons around it. The number of protons decides which element it is. Build atoms yourself and watch the element change.",
        notesHi: "प्रत्येक वस्तु परमाणुओं से बनी है — प्रोटॉन और न्यूट्रॉन का नाभिक तथा चारों ओर इलेक्ट्रॉन। प्रोटॉनों की संख्या तत्व तय करती है।",
        quiz: [
          { q: "What decides which element an atom is?", opts: ["Number of neutrons", "Number of protons", "Its colour"], a: 1 },
          { q: "Where are electrons found?", opts: ["In the nucleus", "Around the nucleus", "Outside the atom entirely"], a: 1 },
        ],
      },
      {
        ch: 10, title: "Light — Reflection and Refraction", titleHi: "प्रकाश — परावर्तन और अपवर्तन",
        sim: "geometric-optics-basics", model: null,
        ncert: "https://ncert.nic.in/textbook/pdf/jesc110.pdf",
        notes: "Light bends (refracts) when it passes from one medium to another, and lenses use this to form images. Move the object and the lens and watch where the image forms.",
        notesHi: "प्रकाश एक माध्यम से दूसरे में जाने पर मुड़ता है (अपवर्तन), और लेंस इससे प्रतिबिंब बनाते हैं।",
        quiz: [
          { q: "A convex lens converges light to form an image at its…", opts: ["Focus", "Edge", "Centre only"], a: 0 },
          { q: "Bending of light entering a new medium is called…", opts: ["Reflection", "Refraction", "Rotation"], a: 1 },
        ],
      },
      {
        ch: 11, title: "The Human Eye and the Colourful World", titleHi: "मानव नेत्र और रंगबिरंगा संसार",
        lesson: "lessons/eye-class10.html", sim: null, model: null,
        ncert: "https://ncert.nic.in/textbook/pdf/jesc111.pdf",
        original: true,
        notes: "OUR ORIGINAL interactive 3D lesson: rotate a cut-away eye, click each part, explore accommodation, vision defects, prism dispersion and why the sky is blue. This is the kind of original content we build for Arunachal.",
        notesHi: "हमारा मौलिक इंटरैक्टिव 3D पाठ — नेत्र के भागों को घुमाकर देखें और समझें।",
        quiz: [
          { q: "Where is the image formed in a healthy eye?", opts: ["On the cornea", "On the retina", "On the iris"], a: 1 },
          { q: "The sky looks blue because of…", opts: ["Blue oceans", "Scattering of light", "Blue air"], a: 1 },
        ],
      },
      {
        ch: 12, title: "Electricity", titleHi: "विद्युत",
        sim: "circuit-construction-kit-dc", model: null,
        ncert: "https://ncert.nic.in/textbook/pdf/jesc112.pdf",
        notes: "An electric current flows when charges move through a closed circuit. Build circuits with batteries, bulbs, wires and switches, and see current, voltage and resistance in action.",
        notesHi: "बंद परिपथ में आवेश गति करने पर विद्युत धारा बहती है। बैटरी, बल्ब, तार और स्विच से परिपथ बनाइए।",
        quiz: [
          { q: "Current flows only when the circuit is…", opts: ["Open", "Closed", "Broken"], a: 1 },
          { q: "A device that breaks or completes a circuit is a…", opts: ["Switch", "Battery", "Bulb"], a: 0 },
        ],
      },
      {
        ch: 2, title: "Acids, Bases and Salts", titleHi: "अम्ल, क्षार और लवण",
        sim: "ph-scale-basics", model: null,
        ncert: "https://ncert.nic.in/textbook/pdf/jesc102.pdf",
        notes: "Acids and bases can be measured on the pH scale, from 0 to 14. Below 7 is acidic, above 7 is basic, and 7 is neutral. Test everyday liquids and watch the scale change.",
        notesHi: "अम्ल और क्षार को pH पैमाने (0 से 14) पर मापा जाता है। 7 से कम अम्लीय, 7 से अधिक क्षारीय।",
        quiz: [{ q: "A liquid with pH 3 is…", opts: ["Acidic", "Basic", "Neutral"], a: 0 }],
      },
      {
        ch: 13, title: "Magnetic Effects of Electric Current", titleHi: "विद्युत धारा के चुंबकीय प्रभाव",
        sim: "faradays-law", model: null,
        ncert: "https://ncert.nic.in/textbook/pdf/jesc113.pdf",
        notes: "Moving a magnet near a coil of wire produces electricity — this is Faraday's law, and it is how generators light our homes. Move the magnet and watch the current appear.",
        notesHi: "तार की कुंडली के पास चुंबक हिलाने पर बिजली बनती है — यही फैराडे का नियम है।",
        quiz: [{ q: "Electricity is produced when a magnet…", opts: ["Stays still", "Moves near a coil", "Is heated"], a: 1 }],
      },
      {
        ch: 9, title: "Heredity and Evolution", titleHi: "आनुवंशिकता और विकास",
        sim: "natural-selection", model: null,
        ncert: "https://ncert.nic.in/textbook/pdf/jesc109.pdf",
        notes: "Living things pass on traits to their young. Over many generations, the traits that help survival become more common — this is natural selection. Run the simulation and watch a population change.",
        notesHi: "जीव अपने गुण संतानों को देते हैं। जीवित रहने में सहायक गुण पीढ़ियों में बढ़ते हैं — यही प्राकृतिक चयन है।",
        quiz: [{ q: "Traits that help survival become…", opts: ["Rarer", "More common", "Unchanged"], a: 1 }],
      },
    ],
    "Mathematics": [
      {
        ch: 8, title: "Introduction to Trigonometry — Angles & Waves", titleHi: "त्रिकोणमिति",
        sim: "wave-on-a-string", model: null,
        ncert: "https://ncert.nic.in/textbook/pdf/jemh108.pdf",
        notes: "Trigonometry describes repeating, wave-like patterns. A vibrating string shows how amplitude and frequency shape a wave — the same sine curve behind trigonometry.",
        notesHi: "त्रिकोणमिति दोहराने वाले तरंग-पैटर्न का वर्णन करती है।",
        quiz: [{ q: "The height of a wave is its…", opts: ["Amplitude", "Speed", "Colour"], a: 0 }],
      },
      {
        ch: 7, title: "Coordinate Geometry", titleHi: "निर्देशांक ज्यामिति",
        sim: "graphing-lines", model: null,
        ncert: "https://ncert.nic.in/textbook/pdf/jemh107.pdf",
        notes: "Every straight line can be written as an equation. Change the slope and the intercept and watch the line move on the graph — see how the numbers and the picture connect.",
        notesHi: "हर सीधी रेखा को समीकरण से लिखा जा सकता है। ढलान बदलिए और रेखा को हिलते देखिए।",
        quiz: [{ q: "The steepness of a line is its…", opts: ["Slope", "Colour", "Length"], a: 0 }],
      },
    ],
  },
  "Class 9": {
    "Science": [
      {
        ch: 1, title: "Matter in Our Surroundings", titleHi: "हमारे आस-पास के पदार्थ",
        sim: "states-of-matter-basics", model: null,
        ncert: "https://ncert.nic.in/textbook/pdf/iesc101.pdf",
        notes: "Matter exists as solid, liquid or gas depending on how much its particles move. Add or remove heat in the simulation and watch matter change state.",
        notesHi: "पदार्थ ठोस, द्रव या गैस के रूप में होता है, जो कणों की गति पर निर्भर करता है।",
        quiz: [
          { q: "Heating a solid enough turns it into a…", opts: ["Gas directly always", "Liquid", "New element"], a: 1 },
          { q: "Particles move fastest in a…", opts: ["Solid", "Liquid", "Gas"], a: 2 },
        ],
      },
      {
        ch: 10, title: "Gravitation", titleHi: "गुरुत्वाकर्षण",
        sim: "gravity-and-orbits", model: null,
        ncert: "https://ncert.nic.in/textbook/pdf/iesc110.pdf",
        notes: "Every mass pulls every other mass. Gravity keeps planets in orbit around the Sun and the Moon around Earth. Turn gravity on and off and watch orbits form or break.",
        notesHi: "प्रत्येक द्रव्यमान दूसरे को खींचता है। गुरुत्वाकर्षण ग्रहों को सूर्य के चारों ओर बनाए रखता है।",
        quiz: [
          { q: "What keeps planets orbiting the Sun?", opts: ["Wind", "Gravity", "Magnetism"], a: 1 },
          { q: "Gravity between two objects depends on their…", opts: ["Colour", "Mass", "Age"], a: 1 },
        ],
      },
      {
        ch: 12, title: "Sound", titleHi: "ध्वनि",
        sim: "wave-on-a-string", model: null,
        ncert: "https://ncert.nic.in/textbook/pdf/iesc112.pdf",
        notes: "Sound travels as a wave. Shake one end of a string and a wave carries energy along it — just as vibrations carry sound through air.",
        notesHi: "ध्वनि तरंग के रूप में चलती है। तरंग ऊर्जा को आगे ले जाती है।",
        quiz: [{ q: "Sound travels as a…", opts: ["Wave", "Solid", "Light ray"], a: 0 }],
      },
      {
        ch: 8, title: "Motion", titleHi: "गति",
        sim: "projectile-motion", model: null,
        ncert: "https://ncert.nic.in/textbook/pdf/iesc108.pdf",
        notes: "When you throw a ball, it follows a curved path. Change the angle and speed and watch how far it goes — this is projectile motion, the science behind every throw and jump.",
        notesHi: "गेंद फेंकने पर वह घुमावदार रास्ते पर चलती है। कोण और गति बदलकर देखिए वह कितनी दूर जाती है।",
        quiz: [{ q: "A thrown ball follows a path that is…", opts: ["Straight", "Curved", "Circular"], a: 1 }],
      },
      {
        ch: 9, title: "Force and Laws of Motion", titleHi: "बल तथा गति के नियम",
        sim: "forces-and-motion-basics", model: null,
        ncert: "https://ncert.nic.in/textbook/pdf/iesc109.pdf",
        notes: "A push or a pull is a force. Add force to an object and watch it speed up; balance the forces and it stays still. Explore how force, mass and motion work together.",
        notesHi: "धक्का या खिंचाव बल है। किसी वस्तु पर बल लगाइए और उसे तेज़ होते देखिए।",
        quiz: [{ q: "A push or a pull is called a…", opts: ["Force", "Mass", "Speed"], a: 0 }],
      },
      {
        ch: 11, title: "Work and Energy", titleHi: "कार्य तथा ऊर्जा",
        sim: "energy-skate-park-basics", model: null,
        ncert: "https://ncert.nic.in/textbook/pdf/iesc111.pdf",
        notes: "Energy changes from one form to another but is never lost. Watch a skater trade height (potential energy) for speed (kinetic energy) again and again — energy is always conserved.",
        notesHi: "ऊर्जा एक रूप से दूसरे में बदलती है पर नष्ट नहीं होती। स्केटर की ऊँचाई और गति की अदला-बदली देखिए।",
        quiz: [{ q: "Energy at the top of a hill is mostly…", opts: ["Kinetic", "Potential", "Lost"], a: 1 }],
      },
    ],
  },
  "Class 8": {
    "Science": [
      {
        ch: 17, title: "Stars and the Solar System", titleHi: "तारे और सौर मंडल",
        lesson: "lessons/solar-3d.html", sim: null, model: null, original: true,
        ncert: "https://ncert.nic.in/textbook/pdf/hesc117.pdf",
        notes: "OUR ORIGINAL flagship 3D lesson: the whole Solar System, planets orbiting the Sun with their names floating above them, an asteroid belt and a starfield. Tap any planet to fly to it and read its story. Includes a built-in teacher script (English + Hinglish).",
        notesHi: "हमारा मौलिक 3D पाठ: पूरा सौर मंडल — सूर्य के चारों ओर घूमते ग्रह, उनके नाम ऊपर तैरते हुए। किसी भी ग्रह पर टैप करके वहाँ जाएँ।",
        quiz: [
          { q: "Which planet is closest to the Sun?", opts: ["Earth", "Mercury", "Jupiter"], a: 1 },
          { q: "Which is the largest planet?", opts: ["Saturn", "Jupiter", "Neptune"], a: 1 },
        ],
      },
      {
        ch: 16, title: "Light", titleHi: "प्रकाश",
        sim: "bending-light", model: null,
        ncert: "https://ncert.nic.in/textbook/pdf/hesc116.pdf",
        notes: "When light passes from air into water or glass, it bends. Shine the beam at different angles and materials and watch it bend — this is refraction, why a straw looks broken in a glass of water.",
        notesHi: "प्रकाश हवा से पानी या कांच में जाने पर मुड़ता है। किरण को अलग-अलग कोण पर डालिए और मुड़ते देखिए।",
        quiz: [{ q: "Light bends when it goes from air into…", opts: ["More air", "Water", "Nothing"], a: 1 }],
      },
      {
        ch: 13, title: "Sound", titleHi: "ध्वनि",
        sim: "waves-intro", model: null,
        ncert: "https://ncert.nic.in/textbook/pdf/hesc113.pdf",
        notes: "Sound is made of waves that travel through the air. Change the frequency and see how the waves get closer or further apart — that is what makes a sound high or low.",
        notesHi: "ध्वनि हवा में चलने वाली तरंगों से बनी है। आवृत्ति बदलिए और तरंगों को पास-दूर होते देखिए।",
        quiz: [{ q: "A high sound has waves that are…", opts: ["Close together", "Far apart", "Still"], a: 0 }],
      },
    ],
  },
  "Class 6": {
    "Science": [
      {
        ch: 1, title: "Planet Earth — Our Home in Space", titleHi: "हमारी पृथ्वी — अंतरिक्ष में हमारा घर",
        lesson: "lessons/earth-3d.html", sim: null, model: null, original: true,
        ncert: "https://ncert.nic.in/textbook/pdf/fess1dd.pdf",
        notes: "OUR ORIGINAL flagship 3D lesson: a photoreal, rotatable Earth with real clouds, atmosphere and terrain, an orbiting Moon and a starfield. Tap the glowing pins — including Arunachal Pradesh — to learn about the equator, the poles, day and night, and the Moon.",
        notesHi: "हमारा मौलिक 3D पाठ: वास्तविक बादलों, वायुमंडल और चंद्रमा के साथ घूमती हुई पृथ्वी। अरुणाचल प्रदेश सहित चमकते बिंदुओं पर टैप करें।",
        quiz: [
          { q: "Why does Arunachal Pradesh see the sunrise first in India?", opts: ["It is the easternmost", "It is the tallest", "It is the coldest"], a: 0 },
          { q: "Day and night are caused by the Earth's…", opts: ["Rotation on its axis", "Distance from the Moon", "Clouds"], a: 0 },
        ],
      },
    ],
    "Mathematics": [
      {
        ch: 7, title: "Fractions", titleHi: "भिन्न",
        sim: "fractions-intro", model: null,
        ncert: "https://ncert.nic.in/textbook/pdf/femh107.pdf",
        notes: "A fraction is a part of a whole. Build fractions from shapes and see how one half, two quarters and three sixths are all the same amount.",
        notesHi: "भिन्न किसी पूरी वस्तु का एक भाग है। आकृतियों से भिन्न बनाइए।",
        quiz: [{ q: "Two quarters (2/4) is the same as…", opts: ["One half", "One third", "Three quarters"], a: 0 }],
      },
    ],
  },
  "Class 7": {
    "Mathematics": [
      {
        ch: 2, title: "Fractions and Decimals", titleHi: "भिन्न और दशमलव",
        sim: "fraction-matcher", model: null,
        ncert: "https://ncert.nic.in/textbook/pdf/gemh102.pdf",
        notes: "A fraction is a part of a whole. Match shapes and numbers to build an intuition for equal fractions — ½ = 2/4 = 3/6.",
        notesHi: "भिन्न किसी वस्तु का एक भाग है। समान भिन्नों को मिलाइए।",
        quiz: [{ q: "Which is equal to ½?", opts: ["2/4", "1/3", "3/5"], a: 0 }],
      },
      {
        ch: 1, title: "Integers", titleHi: "पूर्णांक",
        sim: "number-line-integers", model: null,
        ncert: "https://ncert.nic.in/textbook/pdf/gemh101.pdf",
        notes: "Numbers go both ways from zero — positive to the right, negative to the left. Move along the number line to add and subtract integers and see how it works.",
        notesHi: "संख्याएँ शून्य से दोनों ओर जाती हैं — दाईं ओर धनात्मक, बाईं ओर ऋणात्मक। संख्या रेखा पर चलकर जोड़-घटाव कीजिए।",
        quiz: [{ q: "Numbers to the left of zero are…", opts: ["Positive", "Negative", "Zero"], a: 1 }],
      },
    ],
    "Science": [
      {
        ch: 1, title: "Nutrition in Plants (PlantVerse)", titleHi: "पौधों में पोषण",
        lesson: "lessons/plantverse.html", sim: null, model: null, original: true,
        ncert: "https://ncert.nic.in/textbook/pdf/gesc101.pdf",
        notes: "OUR ORIGINAL interactive lesson: toggle sunlight, water and CO₂ and watch photosynthesis happen; explore stomata and how water and food travel in a plant.",
        notesHi: "हमारा मौलिक इंटरैक्टिव पाठ — प्रकाश-संश्लेषण को समझें।",
        quiz: [{ q: "Plants need which three things to make food?", opts: ["Sunlight, water, CO₂", "Soil, salt, wind", "Only water"], a: 0 }],
      },
      {
        ch: 5, title: "Acids, Bases and Salts", titleHi: "अम्ल, क्षारक और लवण",
        sim: "ph-scale-basics", model: null,
        ncert: "https://ncert.nic.in/textbook/pdf/gesc105.pdf",
        notes: "Some things are sour (acids, like lemon) and some are bitter and slippery (bases, like soap). The pH scale tells them apart. Test different liquids and read the scale.",
        notesHi: "कुछ चीज़ें खट्टी (अम्ल, जैसे नींबू) और कुछ कड़वी-चिकनी (क्षारक, जैसे साबुन) होती हैं। pH पैमाना इन्हें पहचानता है।",
        quiz: [{ q: "Lemon juice is an…", opts: ["Acid", "Base", "Salt"], a: 0 }],
      },
      {
        ch: 13, title: "Motion and Time", titleHi: "गति एवं समय",
        sim: "pendulum-lab", model: null,
        ncert: "https://ncert.nic.in/textbook/pdf/gesc113.pdf",
        notes: "A swinging pendulum takes the same time for each swing — that is how old clocks kept time. Change the length and weight and see what changes the swing, and what does not.",
        notesHi: "झूलता हुआ लोलक हर झूले में समान समय लेता है — पुराने घड़ियाँ इसी से समय रखती थीं।",
        quiz: [{ q: "What changes how fast a pendulum swings?", opts: ["Its colour", "Its length", "The room"], a: 1 }],
      },
    ],
  },
  "3D Model Lab": {
    "Interactive 3D": [
      {
        ch: 0, title: "★ Where Do I Live? — cinematic journey to space", titleHi: "★ मैं कहाँ रहता हूँ? — अंतरिक्ष तक की यात्रा",
        lesson: "lessons/cosmic-3d.html", sim: null, model: null, original: true,
        notes: "OUR signature cinematic 3D lesson for young children: it starts with a child standing in their village and slowly zooms out — past trees and houses, above the clouds, to reveal the whole Earth, the Moon, satellites and the Sun. It answers 'where do I live, and what is out there?' with narration in English and Hindi.",
        notesHi: "हमारा सिग्नेचर सिनेमैटिक 3D पाठ: एक बच्चे से शुरू होकर धीरे-धीरे पृथ्वी, चंद्रमा, उपग्रह और सूर्य तक ज़ूम आउट होता है।",
        quiz: [],
      },
      {
        ch: 1, title: "The Solar System — interactive 3D (flagship)", titleHi: "सौर मंडल — इंटरैक्टिव 3D",
        lesson: "lessons/solar-3d.html", sim: null, model: null, original: true,
        notes: "OUR flagship original 3D lesson — the full Solar System with orbiting planets, floating name labels, fly-to-planet on tap, and a built-in teacher script. World-class standard, fully offline.",
        notesHi: "हमारा प्रमुख मौलिक 3D पाठ — घूमते ग्रह, नाम लेबल और शिक्षक स्क्रिप्ट के साथ पूरा सौर मंडल।",
        quiz: [],
      },
      {
        ch: 2, title: "Planet Earth — photoreal 3D (flagship)", titleHi: "पृथ्वी — फ़ोटोरियल 3D",
        lesson: "lessons/earth-3d.html", sim: null, model: null, original: true,
        notes: "OUR flagship original 3D lesson — photoreal rotating Earth, clouds, atmosphere, orbiting Moon and clickable locations. This is the world-class standard we build original content to; it runs fully offline.",
        notesHi: "हमारा प्रमुख मौलिक 3D पाठ — घूमती पृथ्वी, बादल, वायुमंडल और चंद्रमा।",
        quiz: [],
      },
      {
        ch: 3, title: "Animated human figure — 3D viewer", titleHi: "मानव आकृति — 3D",
        model: "lessons/model3d-human.html", sim: null, sampleModel: true,
        notes: "Drag to rotate, scroll or pinch to zoom, watch the animation — the viewer runs fully offline from the board's storage. In the deployed library, real CBSE 3D models (organs, machines, molecules) plug into this same viewer.",
        notesHi: "इस 3D मॉडल को घुमाएँ और ज़ूम करें — पूरी तरह ऑफ़लाइन।",
        quiz: [],
      },
      {
        ch: 4, title: "Original 3D lesson — The Human Eye", titleHi: "मानव नेत्र — मौलिक 3D पाठ",
        lesson: "lessons/eye-class10.html", sim: null, model: null, original: true,
        notes: "OUR ORIGINAL 3D lesson reused here to show the difference between a plain model viewer and a full built lesson: a rotatable eye, clickable parts, and five interactive rooms — the standard we build original content to.",
        notesHi: "हमारा मौलिक 3D पाठ — नेत्र के भागों को घुमाकर देखें।",
        quiz: [],
      },
    ],
  },
};

// UI strings incl. a local-language (Nyishi) sample to show localisation capability
const I18N = {
  en: { explore: "Explore", read: "Read", model3d: "3D Model", quiz: "Quiz", official: "Open official NCERT chapter", pick: "Pick a class to begin", offline: "Works 100% offline", lang: "English" },
  hi: { explore: "प्रयोग करें", read: "पढ़ें", model3d: "3D मॉडल", quiz: "प्रश्नोत्तरी", official: "आधिकारिक NCERT अध्याय खोलें", pick: "आरंभ करने के लिए कक्षा चुनें", offline: "पूर्णतः ऑफ़लाइन चलता है", lang: "हिंदी" },
  // Nyishi (Arunachal) — indicative sample localisation of the shell
  nyi: { explore: "Ka-tola", read: "Lung-nam", model3d: "3D Model", quiz: "Ali-nam", official: "NCERT chapter open toku", pick: "Class ka nyi-nam", offline: "Internet ma-do bo chal-la", lang: "Nyishi (नमूना)" },
};
