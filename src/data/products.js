const products = [
  // ═══════════════════════════════════════════════════════
  //  BOAT CATEGORY 1: SINGLE (1X)
  // ═══════════════════════════════════════════════════════
  {
    slug: "single-scull",
    title: "Single",
    subtitle: "High-performance single scull for competitive rowing",
    category: "Boats",
    image: "/boats/single scull heavyweight .jpg",
    images: [
      "/boats/single scull heavyweight .jpg",
      "/boats/single scull heavyweight 2.jpg",
      "/boats/single scull kudrat ali.jpg",
      "/boats/single scull rowing boat light weight model 34.jpg",
      "/boats/single.jpg",
      "/boats/single 2.jpg",
      "/boats/single 3.jpg",
      "/boats/single scull swastik traning balance boat 1.jpg",
      "/boats/single scull traning blance full photo.jpg",
      "/boats/single scull traning boat side float photo1.jpg",
    ],
    description:
      "The Single Scull (1X) is a precision-engineered single-rower sculling boat designed for competitive racing at every level. Available in Lightweight (LW) and Heavyweight (HW) configurations, each optimized for athletes of different body weights. Built with advanced composite materials and a fine hydrodynamic hull for minimal drag and maximum speed.",
    specs: {
      class: "1X",
      hullShape: "Klaus Filter",
    },
    variants: [
      {
        name: "LW (Lightweight)",
        size: "LW",
        avgCrewWeight: "70 kg",
        crewWeightRange: "60–75 kg",
        lengths: {
          length: "7000 mm",
        },
        specs: {
          olympic: "14 kg",
          international: "14 kg",
          club: "15 kg",
          competitor: "17 kg",
          trainer: "19 kg",
        },
      },
      {
        name: "HW (Heavyweight)",
        size: "HW",
        avgCrewWeight: "95 kg",
        crewWeightRange: "85–105 kg",
        lengths: {
          length: "8120 mm",
        },
        specs: {
          olympic: "14 kg",
          international: "14 kg",
          club: "15 kg",
          competitor: "17 kg",
          trainer: "19 kg",
        },
      },
    ],
    features: [
      "Fine hull design for optimal hydrodynamics",
      "Available in LW (70 kg) and HW (95 kg) variants",
      "Advanced composite construction with carbon fiber",
      "Precision-engineered for competitive racing",
      "Adjustable footplate and sliding seat system",
      "Reinforced rigger for reliable performance",
      "Competition-ready configuration",
      "Professional-grade build quality",
    ],
  },

  // ═══════════════════════════════════════════════════════
  //  BOAT CATEGORY 2: DOUBLE / PAIR (2X / 2-)
  // ═══════════════════════════════════════════════════════
  {
    slug: "double-pair",
    title: "Double / Pair",
    subtitle: "High-performance double scull and pair for competitive rowing",
    category: "Boats",
    image: "/boats/double scull.jpg",
    images: [
      "/boats/double scull.jpg",
      "/boats/Double 1.jpg",
      "/boats/double 2.jpg",
      "/boats/double scull 3.jpg",
      "/boats/double scull heavy 3.jpg",
      "/boats/double scull lightweight jpg.jpg",
      "/boats/heavyweight double scull.jpg",
    ],
    description:
      "The Double Scull (2X) / Pair (2-) is a precision-engineered two-rower boat designed for maximum speed and efficiency. Available in Lightweight (LW) and Heavyweight (HW) variants, each optimized for different athlete weight classes. Built with advanced composite materials and fine hull geometry for superior hydrodynamic performance.",
    specs: {
      class: "2X / 2-",
      hullShape: "Klaus Filter",
    },
    variants: [
      {
        name: "LW (Lightweight)",
        size: "LW",
        avgCrewWeight: "70 kg",
        crewWeightRange: "60–85 kg",
        lengths: {
          length: "9400 mm",
        },
        specs: {
          olympic: "27 kg",
          international: "27 kg",
          club: "28 kg",
          competitor: "32 kg",
          trainer: "34 kg",
        },
      },
      {
        name: "HW (Heavyweight)",
        size: "HW",
        avgCrewWeight: "95 kg",
        crewWeightRange: "90–105 kg",
        lengths: {
          length: "9870 mm",
        },
        specs: {
          olympic: "27 kg",
          international: "27 kg",
          club: "28 kg",
          competitor: "32 kg",
          trainer: "34 kg",
        },
      },
    ],
    features: [
      "Fine hull design for optimal hydrodynamics",
      "Available in LW (70 kg) and HW (95 kg) variants",
      "Advanced composite construction",
      "Exceptional glide characteristics",
      "Synchronized two-rower configuration",
      "Competition-ready design",
      "Professional-grade build quality",
    ],
  },

  // ═══════════════════════════════════════════════════════
  //  BOAT CATEGORY 3: FOURS / QUADS (4X / 4-)
  // ═══════════════════════════════════════════════════════
  {
    slug: "fours-quads",
    title: "Fours / Quads",
    subtitle: "High-performance quad scull and coxless four for competitive rowing",
    category: "Boats",
    image: "/boats/four heavy.jpg",
    images: [
      "/boats/four heavy.jpg",
      "/boats/four heavyweight .jpeg",
    ],
    description:
      "The Fours / Quads (4X / 4-) is a precision-engineered four-person boat designed for competitive rowing at the highest level. Available in three variants — LW Standard, HW Standard, and HW Extended — each optimized for specific athlete profiles and racing conditions. Built with advanced composite materials and fine hull design for superior speed and efficiency.",
    specs: {
      class: "4X / 4-",
      hullShape: "Klaus Filter",
    },
    variants: [
      {
        name: "LW (Lightweight)",
        size: "LW",
        avgCrewWeight: "70 kg",
        crewWeightRange: "60–80 kg",
        lengths: {
          length: "11820 mm",
        },
        specs: {
          olympic: "50–52 kg",
          international: "50–52 kg",
          club: "52–54 kg",
          competitor: "56.5–59 kg",
          trainer: "58–62 kg",
        },
      },
      {
        name: "HW (Standard)",
        size: "HW-Standard",
        avgCrewWeight: "95 kg",
        crewWeightRange: "90–105 kg",
        lengths: {
          length: "12275 mm",
        },
        specs: {
          olympic: "50–52 kg",
          international: "50–52 kg",
          club: "52–54 kg",
          competitor: "56.5–59 kg",
          trainer: "58–62 kg",
        },
      },
      {
        name: "HW (Extended)",
        size: "HW-Extended",
        avgCrewWeight: "95 kg",
        crewWeightRange: "90–105 kg",
        lengths: {
          length: "12770 mm",
        },
        specs: {
          olympic: "50–52 kg",
          international: "50–52 kg",
          club: "52–54 kg",
          competitor: "56.5–59 kg",
          trainer: "58–62 kg",
        },
      },
    ],
    features: [
      "Fine hull design for optimal hydrodynamics",
      "Three variant options for different athlete profiles",
      "Advanced composite construction",
      "Exceptional four-person synchronization",
      "Professional-grade build quality",
      "Competition-ready configuration",
      "Superior speed and efficiency",
    ],
  },

  // ═══════════════════════════════════════════════════════
  //  BOAT CATEGORY 4: COXED FOURS (4+)
  // ═══════════════════════════════════════════════════════
  {
    slug: "coxed-four",
    title: "Coxed Fours",
    subtitle: "Five-person crew boat with coxswain for competitive rowing",
    category: "Boats",
    image: "/boats/four heavy.jpg",
    images: [
      "/boats/four heavy.jpg",
      "/boats/four heavyweight .jpeg",
    ],
    description:
      "The Coxed Fours (4+) is a precision-engineered five-person crew boat — four rowers plus coxswain — designed for competitive rowing at the highest level. Available in Lightweight (LW) and Heavyweight (HW) variants, each optimized for athletes of different body weights. Built with advanced composite materials and fine hull design for superior speed, stability, and crew coordination.",
    specs: {
      class: "4+",
      hullShape: "Klaus Filter",
    },
    variants: [
      {
        name: "LW (Lightweight)",
        size: "LW",
        avgCrewWeight: "70 kg",
        crewWeightRange: "60–80 kg",
        lengths: {
          length: "12275 mm",
        },
        specs: {
          olympic: "51 kg",
          international: "51 kg",
          club: "52 kg",
          competitor: "56 kg",
          trainer: "58 kg",
        },
      },
      {
        name: "HW (Heavyweight)",
        size: "HW",
        avgCrewWeight: "95 kg",
        crewWeightRange: "90–105 kg",
        lengths: {
          length: "12770 mm",
        },
        specs: {
          olympic: "51 kg",
          international: "51 kg",
          club: "52 kg",
          competitor: "56 kg",
          trainer: "58 kg",
        },
      },
    ],
    features: [
      "Fine hull design for optimal hydrodynamics",
      "Available in LW (70 kg) and HW (95 kg) variants",
      "Coxswain-steered configuration for precise course control",
      "Advanced composite construction",
      "Professional-grade build quality",
      "Competition-ready design",
      "Superior team coordination and stability",
    ],
  },

  // ═══════════════════════════════════════════════════════
  //  BOAT CATEGORY 5: EIGHTS (8+)
  // ═══════════════════════════════════════════════════════
  {
    slug: "eights",
    title: "Eights",
    subtitle: "Eight-person crew boat for elite competitive rowing",
    category: "Boats",
    image: "/boats/eightboat.jpg",
    images: [
      "/boats/eightboat.jpg",
    ],
    description:
      "The Eights (8+) is the premier eight-rower crew boat with coxswain, designed for elite athletes and rowing institutions competing at the highest international level. Available in Lightweight (LW) and Heavyweight (HW) variants, each engineered for maximum speed, power transfer, and crew synchronization. Built with advanced composite materials and fine hull design.",
    specs: {
      class: "8+",
      hullShape: "Klaus Filter",
    },
    variants: [
      {
        name: "LW (Lightweight)",
        size: "LW",
        avgCrewWeight: "80 kg",
        crewWeightRange: "70–85 kg",
        lengths: {
          length: "17170 mm",
        },
        specs: {
          olympic: "96 kg",
          international: "96 kg",
          club: "98 kg",
          competitor: "N/A",
          trainer: "N/A",
        },
      },
      {
        name: "HW (Heavyweight)",
        size: "HW",
        avgCrewWeight: "95 kg",
        crewWeightRange: "90–105 kg",
        lengths: {
          length: "19195 mm",
        },
        specs: {
          olympic: "96 kg",
          international: "96 kg",
          club: "98 kg",
          competitor: "N/A",
          trainer: "N/A",
        },
      },
    ],
    features: [
      "Fine hull design for optimal hydrodynamics",
      "Available in LW (80 kg) and HW (95 kg) variants",
      "Nine-person crew configuration with coxswain",
      "Advanced composite construction",
      "Professional-grade build quality",
      "Elite competition-ready design",
      "Superior power transfer and synchronization",
    ],
  },

  // ═══════════════════════════════════════════════════════
  //  SPARE PARTS
  // ═══════════════════════════════════════════════════════
  {
    slug: "spare-rowing-seat",
    title: "Rowing Seat",
    subtitle: "Spare rowing seat for all boat types",
    category: "Spare Parts",
    isSparePart: true,
    image: "/boats/Spare part of rowing seat.jpg",
    description: "High-quality replacement rowing seat.",
  },
  {
    slug: "spare-carbon-rowing-seat",
    title: "Carbon Rowing Seat (1X / 2X)",
    subtitle: "Carbon fiber racing seat for sculling boats",
    category: "Spare Parts",
    isSparePart: true,
    image: "/boats/spar part of carbon rowing sest 1x2x.jpeg",
    description: "Lightweight carbon fiber racing seat for single and double sculls.",
  },
  {
    slug: "spare-fibre-glass-seat",
    title: "Fibre Glass Seat",
    subtitle: "Durable fibre glass seat replacement",
    category: "Spare Parts",
    isSparePart: true,
    image: "/boats/spare part of fibre glass seat .jpeg",
    description: "Durable fibre glass replacement seat.",
  },
  {
    slug: "spare-adjustable-seat",
    title: "Adjustable Seat",
    subtitle: "Adjustable seat for custom positioning",
    category: "Spare Parts",
    isSparePart: true,
    image: "/boats/spar part of Seat adjustable.jpg",
    description: "Adjustable seat for precise positioning.",
  },
  {
    slug: "spare-aluminium-rails",
    title: "Aluminium Slide Rails",
    subtitle: "Replacement aluminium slide rails",
    category: "Spare Parts",
    isSparePart: true,
    image: "/boats/spare part of aluminimum rails .jpeg",
    description: "High-quality aluminium slide rails for seat tracks.",
  },
  {
    slug: "spare-rudder",
    title: "Rudder",
    subtitle: "Replacement rudder assembly",
    category: "Spare Parts",
    isSparePart: true,
    image: "/boats/spare part of rudder.jpg",
    description: "Precision replacement rudder assembly.",
  },
  {
    slug: "spare-rowing-shoe-blue-yellow",
    title: "Rowing Shoe (Blue/Yellow)",
    subtitle: "Adjustable rowing shoe with mounting plate",
    category: "Spare Parts",
    isSparePart: true,
    image: "/boats/spart part of rowing shoe adjsuatble blue yellow with plate.jpeg",
    description: "Adjustable rowing shoe with blue and yellow design, includes mounting plate.",
  },
  {
    slug: "spare-rowing-shoe-black",
    title: "Rowing Shoe (Black)",
    subtitle: "Black rowing shoe replacement",
    category: "Spare Parts",
    isSparePart: true,
    image: "/boats/spart part of rowing shoe black.jpeg",
    description: "Durable black rowing shoe replacement.",
  },
  {
    slug: "spare-double-action-swivel",
    title: "Double Action Swivel",
    subtitle: "Double action swivel mechanism",
    category: "Spare Parts",
    isSparePart: true,
    image: "/boats/Sparte part Double action schasy-.jpg",
    description: "Double action swivel mechanism for oarlock.",
  },
  {
    slug: "spare-rigger-height-edges",
    title: "Rigger Height Adjustment Edges",
    subtitle: "Spacer edges for rigger height adjustment",
    category: "Spare Parts",
    isSparePart: true,
    image: "/boats/Spare part of edges for rigger hight adjesment.jpg",
    description: "Spacer edges for precise rigger height adjustment.",
  },
  {
    slug: "spare-t-bolt-wing-nut",
    title: "T-Bolt with Wing Nut & Washer (5 mm)",
    subtitle: "Rail mounting T-bolt set",
    category: "Spare Parts",
    isSparePart: true,
    image: "/boats/Spart part of rail 5 mm t bolt with wing but and washer.jpg",
    description: "5 mm T-bolt with wing nut and washer for rail mounting.",
  },
  {
    slug: "spare-t-bolt-plain",
    title: "T-Bolt (Plain)",
    subtitle: "T-bolt without wing nut",
    category: "Spare Parts",
    isSparePart: true,
    image: "/boats/spar part of t bolt without wing nut.jpg",
    description: "Standard T-bolt without wing nut.",
  },
  {
    slug: "spare-structure-patti",
    title: "Structure Patti",
    subtitle: "Structural reinforcement strip",
    category: "Spare Parts",
    isSparePart: true,
    image: "/boats/Spar part of strecture patti.jpg",
    description: "Structural reinforcement strip for hull repair.",
  },
  {
    slug: "spare-rowlock-bush",
    title: "Rowlock Bush (Scull / Sweep)",
    subtitle: "Rowlock bush for scull and sweep oars",
    category: "Spare Parts",
    isSparePart: true,
    image: "/boats/spare part rowlock bush scull sweep.jpg",
    description: "Rowlock bush compatible with both scull and sweep oar configurations.",
  },
  {
    slug: "spare-floating-ball",
    title: "Rowing Floating Ball",
    subtitle: "Floating ball for balance training",
    category: "Spare Parts",
    isSparePart: true,
    image: "/boats/spare part rowing floating ball.jpeg",
    description: "Floating ball attachment for balance training.",
  },
  {
    slug: "spare-bow-cover",
    title: "Bow Cover",
    subtitle: "Protective bow cover",
    category: "Spare Parts",
    isSparePart: true,
    image: "/boats/spart part of drawn cover .jpeg",
    description: "Protective bow cover for hull protection.",
  },
];

// Boat class descriptions mapping
export const boatClassDescriptions = {
  "1X": "Single Scull",
  "2X": "Double Scull",
  "2-": "Coxless Pair",
  "4X": "Quad Scull",
  "4-": "Coxless Four",
  "4+": "Coxed Four",
  "8+": "Eight",
};

// Helper function to format boat class with description
export function formatBoatClass(classCode) {
  if (!classCode) return "";
  const description = boatClassDescriptions[classCode.trim()];
  if (description) {
    return `${classCode} (${description})`;
  }
  return classCode;
}

export default products;
