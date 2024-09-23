export const packages = {
  standard: [
    {
      id: "autcare-standard-exterior",
      name: "Exterior",
      description: "Thorough Care for the Inside, Leaving Your Vehicle Fresh and Clean.",
      packages: ["Exterior washing", "Cleaning windows and mirrors", "Applying spray wax", "Rims"],
      totalDuration: "24 Months",
      duration: "± 45 min.",
      price: "€ 59.95",
      durationOptions: [
        { duration: "24 months", additionalCost: 0 },
        { duration: "12 months", additionalCost: 5.0 },
        { duration: "Monthly", additionalCost: 10.0 },
      ],
      cleaningFrequencyOptions: [
        { frequency: "Every 4 weeks", additionalCost: 0 },
        { frequency: "Every 8 weeks", additionalCost: 5.0 },
        { frequency: "Every 12 weeks", additionalCost: 12.5 },
      ],
      additionalOptions: {
        interior: [],
        exterior: [
          { name: "Bonnet cleaning", additionalCost: 50 },
          { name: "Polishing headlights", additionalCost: 50 },
          { name: "Polishing chrome parts", additionalCost: 90 },
        ],
        detailing: [
          {
            name: "Polish entire vehicle in 1 step",
            available: true,
            additionalCost: 180,
            options: ["remove scratches (50%)", "remove swirls (75%)"],
          },
          {
            name: "Polishing entire vehicle in 2 steps",
            additionalCost: 295,
            available: true,
            options: ["removing scratches (80%)", "removing swirls (85%)"],
          },
          {
            name: "Polishing entire vehicle in 3 steps",
            available: true,
            additionalCost: 425,
            options: ["removing scratches (95%)", "removing swirls (95%)"],
          },
          {
            name: "Paint sealant",
            additionalCost: "on request",
            available: false,
            options: ["You will be contacted by us later."],
          },
          {
            name: "Glass coating",
            additionalCost: "on request",
            available: false,
            options: ["You will be contacted by us later."],
          },
        ],
      },
    },
    {
      id: "autcare-standard-complete",
      name: "Complete",
      description: "Restore the Shine and Protect Your Vehicle's Exterior with Premium Detailing",
      packages: ["Exterior package", "Interior package", "Complete car care: inside and out"],
      totalDuration: "24 Months",
      duration: "± 90~120 min.",
      price: "€ 94.95",
      additionalOptions: {
        interior: [
          { name: "Leather treatment", additionalCost: 50 },
          { name: "Stain removal upholstery / Deep cleaning", additionalCost: 80 },
          { name: "Dog hair removal", additionalCost: 50 },
          { name: "Ozone treatment", additionalCost: 95 },
          { name: "Mold treatment", additionalCost: 105 },
          { name: "Stains in the ceiling", additionalCost: 75 },
          { name: "Fragrance treatment", additionalCost: 85 },
        ],
        exterior: [
          { name: "Bonnet cleaning", additionalCost: 50 },
          { name: "Polishing headlights", additionalCost: 50 },
          { name: "Polishing chrome parts", additionalCost: 90 },
        ],
        detailing: [
          {
            name: "Polish entire vehicle in 1 step",
            available: true,
            additionalCost: 180,
            options: ["remove scratches (50%)", "remove swirls (75%)"],
          },
          {
            name: "Polishing entire vehicle in 2 steps",
            available: true,
            additionalCost: 295,
            options: ["removing scratches (80%)", "removing swirls (85%)"],
          },
          {
            name: "Polishing entire vehicle in 3 steps",
            available: true,
            additionalCost: 425,
            options: ["removing scratches (95%)", "removing swirls (95%)"],
          },
          {
            name: "Paint sealant",
            additionalCost: "on request",
            available: false,
            options: ["You will be contacted by us later."],
          },
          {
            name: "Glass coating",
            additionalCost: "on request",
            available: false,
            options: ["You will be contacted by us later."],
          },
        ],
      },
      durationOptions: [
        { duration: "24 months", additionalCost: 0 },
        { duration: "12 months", additionalCost: 5.0 },
        { duration: "Monthly", additionalCost: 10.0 },
      ],
      cleaningFrequencyOptions: [
        { frequency: "Every 4 weeks", additionalCost: 0 },
        { frequency: "Every 8 weeks", additionalCost: 5.0 },
        { frequency: "Every 12 weeks", additionalCost: 12.5 },
      ],
    },
    {
      id: "autcare-standard-interior",
      name: "Interior",
      description: "The Complete Package for Ultimate Interior and Exterior Protection and Shine",
      packages: ["Windows", "Sills", "Steam cleaning", "Vacuuming", "Dashboard", "Feeding plastic parts", "Steaming mats"],
      totalDuration: "24 Months",
      duration: "± 60 min.",
      price: "€ 69.95",
      additionalOptions: {
        interior: [
          { name: "Leather treatment", additionalCost: 50 },
          { name: "Stain removal upholstery / deep cleaning", additionalCost: 80 },
          { name: "Dog hair removal", additionalCost: 50 },
          { name: "Ozone treatment", additionalCost: 95 },
          { name: "Mold treatment multiple places", additionalCost: 105 },
          { name: "Stains in the ceiling", additionalCost: 75 },
          { name: "Fragrance treatment", additionalCost: 85 },
        ],
        exterior: [
          { name: "Bonnet cleaning", additionalCost: 50 },
          { name: "Polishing headlights", additionalCost: 50 },
          { name: "Polishing chrome parts", additionalCost: 90 },
        ],
        detailing: [
          {
            name: "Polish entire vehicle in 1 step",
            additionalCost: 180,
            available: true,
            options: ["remove scratches (50%)", "remove swirls (75%)"],
          },
          {
            name: "Polishing entire vehicle in 2 steps",
            additionalCost: 295,
            available: true,
            options: ["removing scratches (80%)", "removing swirls (85%)"],
          },
          {
            name: "Polishing entire vehicle in 3 steps",
            additionalCost: 425,
            available: true,
            options: ["removing scratches (95%)", "removing swirls (95%)"],
          },
          {
            name: "Paint sealant",
            additionalCost: "on request",
            available: false,
            options: ["You will be contacted by us later."],
          },
          {
            name: "Glass coating",
            additionalCost: "on request",
            available: false,
            options: ["You will be contacted by us later."],
          },
        ],
      },
      durationOptions: [
        { duration: "24 months", additionalCost: 0 },
        { duration: "12 months", additionalCost: 5.0 },
        { duration: "Monthly", additionalCost: 10.0 },
      ],
      cleaningFrequencyOptions: [
        { frequency: "Every 4 weeks", additionalCost: 0 },
        { frequency: "Every 8 weeks", additionalCost: 5.0 },
        { frequency: "Every 12 weeks", additionalCost: 12.5 },
      ],
    },
  ],
  deluxe: [
    {
      id: "autcare-deluxe-exterior",
      name: "Exterior",
      description: "Thorough Care for the Inside, Leaving Your Vehicle Fresh and Clean.",
      packages: [
        "Exterior washing",
        "Cleaning windows and mirrors",
        "Applying spray wax",
        "Rims",
        "Blacken tires",
        "Sills and door edges",
        "Apply ceramic protection to windows",
        "Feed plastic parts",
        "Clean fuel filler cap",
      ],
      totalDuration: "24 Months",
      duration: "± 60 min.",
      price: "€ 89.95",
      durationOptions: [
        { duration: "24 months", additionalCost: 0 },
        { duration: "12 months", additionalCost: 5.0 },
        { duration: "Monthly", additionalCost: 10.0 },
      ],
      cleaningFrequencyOptions: [
        { frequency: "Every 4 weeks", additionalCost: 0 },
        { frequency: "Every 8 weeks", additionalCost: 5.0 },
        { frequency: "Every 12 weeks", additionalCost: 12.5 },
      ],
      additionalOptions: {
        interior: [
          { name: "Dog hair removal", additionalCost: 50 },
          { name: "Ozone treatment", additionalCost: 95 },
          { name: "Mold treatment", additionalCost: 105 },
          { name: "Stains in the ceiling", additionalCost: 75 },
          { name: "Fragrance treatment", additionalCost: 85 },
        ],
        exterior: [
          { name: "Bonnet cleaning", additionalCost: 50 },
          { name: "Polishing headlights", additionalCost: 50 },
          { name: "Polishing chrome parts", additionalCost: 90 },
        ],
        detailing: [
          {
            name: "Polish entire vehicle in 1 step",
            available: true,
            additionalCost: 180,
            options: ["remove scratches (50%)", "remove swirls (75%)"],
          },
          {
            name: "Polishing entire vehicle in 2 steps",
            additionalCost: 295,
            available: true,
            options: ["removing scratches (80%)", "removing swirls (85%)"],
          },
          {
            name: "Polishing entire vehicle in 3 steps",
            additionalCost: 425,
            available: true,
            options: ["removing scratches (95%)", "removing swirls (95%)"],
          },
          {
            name: "Paint sealant",
            additionalCost: "on request",
            available: false,
            options: ["You will be contacted by us later."],
          },
          {
            name: "Glass coating",
            additionalCost: "on request",
            available: false,
            options: ["You will be contacted by us later."],
          },
        ],
      },
    },
    {
      id: "autcare-deluxe-complete",
      name: "Complete",
      description: "Restore the Shine and Protect Your Vehicle's Exterior with Premium Detailing",
      packages: ["All checkboxes of the 'Deluxe Interior and Exterior Package' combined in one package"],
      totalDuration: "24 Months",
      duration: "± 120/150 min.",
      price: "€ 189.95",
      additionalOptions: {
        interior: [
          { name: "Dog hair removal", additionalCost: 50 },
          { name: "Ozone treatment", additionalCost: 95 },
          { name: "Mold treatment multiple places", additionalCost: 105 },
          { name: "Stains in the ceiling", additionalCost: 75 },
          { name: "Fragrance treatment", additionalCost: 85 },
        ],
        exterior: [
          { name: "Bonnet cleaning", additionalCost: 50 },
          { name: "Polishing headlights", additionalCost: 50 },
          { name: "Polishing chrome parts", additionalCost: 90 },
        ],
        detailing: [
          {
            name: "Polish entire vehicle in 1 step",
            available: true,
            additionalCost: 180,
            options: ["remove scratches (50%)", "remove swirls (75%)"],
          },
          {
            name: "Polishing entire vehicle in 2 steps",
            available: true,
            additionalCost: 295,
            options: ["removing scratches (80%)", "removing swirls (85%)"],
          },
          {
            name: "Polishing entire vehicle in 3 steps",
            available: true,
            additionalCost: 425,
            options: ["removing scratches (95%)", "removing swirls (95%)"],
          },
          {
            name: "Paint sealant",
            additionalCost: "on request",
            available: false,
            options: ["You will be contacted by us later."],
          },
          {
            name: "Glass coating",
            additionalCost: "on request",
            available: false,
            options: ["You will be contacted by us later."],
          },
        ],
      },
      durationOptions: [
        { duration: "24 months", additionalCost: 0 },
        { duration: "12 months", additionalCost: 5.0 },
        { duration: "Monthly", additionalCost: 10.0 },
      ],
      cleaningFrequencyOptions: [
        { frequency: "Every 4 weeks", additionalCost: 0 },
        { frequency: "Every 8 weeks", additionalCost: 5.0 },
        { frequency: "Every 12 weeks", additionalCost: 12.5 },
      ],
    },
    {
      id: "autcare-deluxe-interior",
      name: "Interior",
      description: "The Complete Package for Ultimate Interior and Exterior Protection and Shine",
      packages: [
        "Wipe dashboard and compartments",
        "Sills and door edges",
        "Steam out mats",
        "Clean windows and mirrors",
        "Remove stains / Deep cleaning",
        "Detailing",
        "Polishing plastic parts",
        "Leather treatment",
        "Mat stripe",
        "Intensive interior steam cleaning",
      ],
      totalDuration: "24 Months",
      duration: "± 90 min.",
      price: "€ 149.95",
      additionalOptions: {
        interior: [
          { name: "Dog hair removal", additionalCost: 50 },
          { name: "Ozone treatment", additionalCost: 95 },
          { name: "Mold treatment", additionalCost: 105 },
          { name: "Stains in the ceiling", additionalCost: 75 },
          { name: "Fragrance treatment", additionalCost: 85 },
        ],
        exterior: [
          { name: "Bonnet cleaning", additionalCost: 50 },
          { name: "Polishing headlights", additionalCost: 50 },
          { name: "Polishing chrome parts", additionalCost: 90 },
        ],
        detailing: [
          {
            name: "Polish entire vehicle in 1 step",
            additionalCost: 180,
            available: true,
            options: ["remove scratches (50%)", "remove swirls (75%)"],
          },
          {
            name: "Polishing entire vehicle in 2 steps",
            additionalCost: 295,
            available: true,
            options: ["removing scratches (80%)", "removing swirls (85%)"],
          },
          {
            name: "Polishing entire vehicle in 3 steps",
            additionalCost: 425,
            available: true,
            options: ["removing scratches (95%)", "removing swirls (95%)"],
          },
          {
            name: "Paint sealant",
            additionalCost: "on request",
            available: false,
            options: ["You will be contacted by us later."],
          },
          {
            name: "Glass coating",
            additionalCost: "on request",
            available: false,
            options: ["You will be contacted by us later."],
          },
        ],
      },
      durationOptions: [
        { duration: "24 months", additionalCost: 0 },
        { duration: "12 months", additionalCost: 5.0 },
        { duration: "Monthly", additionalCost: 10.0 },
      ],
      cleaningFrequencyOptions: [
        { frequency: "Every 4 weeks", additionalCost: 0 },
        { frequency: "Every 8 weeks", additionalCost: 5.0 },
        { frequency: "Every 12 weeks", additionalCost: 12.5 },
      ],
    },
  ],
  premium: [
    {
      id: "autcare-premium-showroom",
      name: "Showroom Package",
      packages: [
        "Exterior steam cleaning",
        "Cleaning windows and mirrors",
        "Applying spray wax",
        "Rims",
        "Blacken tires",
        "Sills and door edges",
        "Apply ceramic protection to windows",
        "Clean fuel filler cap",
        "Wipe dashboard and compartments",
        "Steam clean mats",
        "Stain removal / Deep cleaning",
        "Detailing",
        "Polishing plastic parts",
        "Leather treatment",
        "Intensive interior steam cleaning",
        "Hood cleaning",
        "Polishing headlights",
        "Polishing chrome parts",
        "Polishing light scratches",
      ],
      totalDuration: "24 Months",
      duration: "± 180 min.",
      price: "€ 394.95",
      durationOptions: [
        { duration: "24 months", additionalCost: 0 },
        { duration: "12 months", additionalCost: 5.0 },
        { duration: "Monthly", additionalCost: 10.0 },
      ],
      cleaningFrequencyOptions: [
        { frequency: "Every 4 weeks", additionalCost: 0 },
        { frequency: "Every 8 weeks", additionalCost: 5.0 },
        { frequency: "Every 12 weeks", additionalCost: 12.5 },
      ],
      additionalOptions: {
        interior: [
          { name: "Ozone treatment", additionalCost: 95 },
          { name: "Mold treatment multiple places", additionalCost: 105 },
        ],
        exterior: [{ name: "Polishing chrome parts", additionalCost: 90 }],
        detailing: [
          {
            name: "Polishing entire vehicle in 2 steps",
            available: true,
            additionalCost: 295,
            options: ["removing scratches (80%)", "removing swirls (85%)"],
          },
          {
            name: "Polishing entire vehicle in 3 steps",
            available: true,
            additionalCost: 425,
            options: ["removing scratches (95%)", "removing swirls (95%)"],
          },
          {
            name: "Paint sealant",
            additionalCost: "on request",
            available: false,
            options: ["You will be contacted by us later."],
          },
          {
            name: "Glass coating",
            additionalCost: "on request",
            available: false,
            options: ["You will be contacted by us later."],
          },
        ],
      },
    },
  ],
};