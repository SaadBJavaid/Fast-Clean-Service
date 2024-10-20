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
      vehicleOptions: {
        Hatchback: {
          basePrice: 74.95,
          additionalPrice: 0,
          additionalTime: 0,
        },
        Sedan: {
          basePrice: 74.95,
          additionalPrice: 10,
          additionalTime: 10,
        },
        SUV: {
          basePrice: 74.95,
          additionalPrice: 10,
          additionalTime: 10,
        },
        "Station Wagon": {
          basePrice: 74.95,
          additionalPrice: 10,
          additionalTime: 10,
        },
        MPV: {
          basePrice: 74.95,
          additionalPrice: 10,
          additionalTime: 10,
        },
        "Coupé": {
          basePrice: 74.95,
          additionalPrice: 0,
          additionalTime: 0,
        },
        Convertible: {
          basePrice: 74.95,
          additionalPrice: 0,
          additionalTime: 0,
        },
        Van: {
          basePrice: 74.95,
          additionalPrice: 10,
          additionalTime: 10,
        },
        "Pick-up Truck": {
          basePrice: 74.95,
          additionalPrice: 10,
          additionalTime: 10,
        },
        Motorbike: {
          basePrice: 64.95,
          additionalPrice: 0,
          additionalTime: 0,
          notes: "exterior only",
        },
      },
      additionalOptions: {
        interior: [
          {
            name: "Deep cleaning child seat (per seat)",
            additionalCost: 15,
            options: ["Deep cleaning for fabric upholstery.", "Removes tough stains."],
          },
          {
            name: "Ozone Treatment",
            additionalCost: 50,
            options: ["Purifies air, kills bacteria and mold.", "Eliminates odors permanently."],
          },
        ],
        exterior: [
          {
            name: "Cleaning Convertible Roof",
            additionalCost: 85,
            options: ["Roof polishing", "Scratch removal (up to 30%)"],
          },
          {
            name: "Sills and Door Edges",
            additionalCost: 10,
            options: ["Cleans sills and door edges.", "Provides a thorough clean."],
          },
          {
            name: "Remove Resin Dots",
            additionalCost: 25,
            options: ["Removes resin from the surface.", "Leaves paint smooth and undamaged."],
          },
          {
            name: "Polishing Plastic Parts",
            additionalCost: 7.5,
            options: ["Polishing all plastic parts.", "Scratch removal for finish."],
          },
          {
            name: "Cleaning Moss From Seams",
            additionalCost: 15,
            options: ["Removes moss from seams without damage.", "Maintains paint protection."],
          },
          {
            name: "Bonnet Cleaning ",
            additionalCost: 50,
            options: ["Hood polishing", "Restore shine in the bonnet."],
          },
          {
            name: "Cleaning the Sliding/Tilting Roof",
            additionalCost: 15,
            options: ["Thorough cleaning of the roof.", "Prevents dirt buildup."],
          },
          {
            name: "Polishing Chrome Parts",
            additionalCost: 55,
            options: ["Polishes and restores chrome shine.", "Removes minor scratches."],
          },
          {
            name: "Polishing Headlights",
            additionalCost: 50,
            options: ["Restores headlight brightness.", "Improves visibility."],
          },
        ],
        detailing: [
          { 
            name: "Clay bar treatment",
            available: true,
            additionalCost: 50,
            options: ["Removes stubborn contaminants from the paint.", "Leaves the paint with a smooth finish."],
          },
          {
            name: "Ceramic Paint Sealant",
            available: true,
            additionalCost: 65,
            options: [" Provides long-lasting protection.", "Ensures a high-quality, glossy finish."],
          },
          {
            name: "Polishing entire vehicle in 1 step",
            available: true,
            additionalCost: 180,
            options: ["Removes light scratches (up to 50%) and repairs 75% of swirls.", "Restores a fresh, shiny finish."],
          },
          {
            name: "Polishing entire vehicle in 2 steps",
            available: true,
            additionalCost: 295,
            options: [
              "Removes medium scratches (up to 80%) and repairs 85% of swirls.",
              "Gives the vehicle a deeper shine and protection.",
            ],
          },
          {
            name: "Polishing entire vehicle in 3 steps",
            available: true,
            additionalCost: 425,
            options: [
              "Removes heavy scratches (up to 95%) and repairs 95% of swirls.",
              "Provides the ultimate result and a showroom-like shine.",
            ],
          },
          {
            name: "Glass Coating",
            additionalCost: "On Request",
            available: false,
            options: [
              " Adds long-lasting, water- and dirt-repellent protection to the paint.",
              "Details and costs available upon request.",
            ],
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
      vehicleOptions: {
        Hatchback: {
          basePrice: 139.95,
          additionalPrice: 0,
          additionalTime: 0,
        },
        Sedan: {
          basePrice: 139.95,
          additionalPrice: 15,
          additionalTime: 15,
        },
        SUV: {
          basePrice: 139.95,
          additionalPrice: 15,
          additionalTime: 15,
        },
        "Station Wagon": {
          basePrice: 139.95,
          additionalPrice: 15,
          additionalTime: 15,
        },
        MPV: {
          basePrice: 139.95,
          additionalPrice: 15,
          additionalTime: 15,
        },
        "Coupé": {
          basePrice: 139.95,
          additionalPrice: 0,
          additionalTime: 0,
        },
        Convertible: {
          basePrice: 139.95,
          additionalPrice: 0,
          additionalTime: 0,
        },
        Van: {
          basePrice: 139.95,
          additionalPrice: 15,
          additionalTime: 15,
        },
        "Pick-up Truck": {
          basePrice: 74.95,
          additionalPrice: 15,
          additionalTime: 15,
        },
      },
      additionalOptions: {
        interior: [
          {
            name: "Leather treatment",
            additionalCost: 50,
            options: ["Cleans and protects leather.", "Prevents cracking and extends life."],
          },
          {
            name: "Stain removal upholstery",
            additionalCost: 80,
            options: ["Deep cleaning to remove stubborn stains.", "Focused on fabric upholstery."],
          },
          {
            name: "Pet hair removal",
            additionalCost: 50,
            options: ["Removes pet hair from upholstery and carpets.", "Leaves the interior deeply cleaned."],
          },
          {
            name: "Ozone treatment",
            additionalCost: 95,
            options: ["Purifies air, kills bacteria and mold.", "Eliminates odors permanently."],
          },
          {
            name: "Mold treatment",
            additionalCost: 105,
            options: ["Removes mold inside the vehicle.", "Reduces health risks from mold."],
          },
          {
            name: "Ceiling Steam Cleaning",
            additionalCost: 75,
            options: ["Steam cleans the ceiling, removes stains.", "Not suitable for fragile headliners."],
          },
          {
            name: "Vomit Treatment",
            additionalCost: 125,
            options: ["Deep clean stains", "Upholstery restoration"],
          },
          {
            name: "Deep High Chair Cleaning (Per Chair)",
            additionalCost: 15,
            options: ["Deep cleaning for fabric upholstery.", "Removes tough stains."],
          },
          {
            name: "Fragrance treatment",
            additionalCost: 85,
            options: ["Odor neutralization", "Includes antibacterial sprays."],
          },
        ],
        exterior: [
          {
            name: "Cleaning Convertible Roof",
            additionalCost: 85,
            options: ["Roof polishing", "Scratch removal (up to 30%)"],
          },
          {
            name: "Sills and Door Edges",
            additionalCost: 10,
            options: ["Cleans sills and door edges.", "Provides a thorough clean."],
          },
          {
            name: "Remove Resin Dots",
            additionalCost: 25,
            options: ["Removes resin from the surface.", "Leaves paint smooth and undamaged."],
          },
          {
            name: "Polishing Plastic Parts",
            additionalCost: 7.5,
            options: ["Polishing all plastic parts.", "Scratch removal for finish."],
          },
          {
            name: "Cleaning Moss From Seams",
            additionalCost: 15,
            options: ["Removes moss from seams without damage.", "Maintains paint protection."],
          },
          {
            name: "Bonnet Cleaning ",
            additionalCost: 50,
            options: ["Hood polishing", "Restore shine in the bonnet."],
          },
          {
            name: "Cleaning the Sliding/Tilting Roof",
            additionalCost: 15,
            options: ["Thorough cleaning of the roof.", "Prevents dirt buildup."],
          },
          {
            name: "Polishing Chrome Parts",
            additionalCost: 55,
            options: ["Polishes and restores chrome shine.", "Removes minor scratches."],
          },
          {
            name: "Polishing Headlights",
            additionalCost: 50,
            options: ["Restores headlight brightness.", "Improves visibility."],
          },
        ],
        detailing: [
          {
            name: "Clay bar treatment",
            available: true,
            additionalCost: 50,
            options: ["Removes stubborn contaminants from the paint.", "Leaves the paint with a smooth finish."],
          },
          {
            name: "Ceramic Paint Sealant",
            available: true,
            additionalCost: 65,
            options: [" Provides long-lasting protection.", "Ensures a high-quality, glossy finish."],
          },
          {
            name: "Polishing entire vehicle in 1 step",
            available: true,
            additionalCost: 180,
            options: ["Removes light scratches (up to 50%) and repairs 75% of swirls.", "Restores a fresh, shiny finish."],
          },
          {
            name: "Polishing entire vehicle in 2 steps",
            available: true,
            additionalCost: 295,
            options: [
              "Removes medium scratches (up to 80%) and repairs 85% of swirls.",
              "Gives the vehicle a deeper shine and protection.",
            ],
          },
          {
            name: "Polishing entire vehicle in 3 steps",
            available: true,
            additionalCost: 425,
            options: [
              "Removes heavy scratches (up to 95%) and repairs 95% of swirls.",
              "Provides the ultimate result and a showroom-like shine.",
            ],
          },
          {
            name: "Glass Coating",
            additionalCost: "On Request",
            available: false,
            options: [
              " Adds long-lasting, water- and dirt-repellent protection to the paint.",
              "Details and costs available upon request.",
            ],
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
      vehicleOptions: {
        Hatchback: {
          basePrice: 89.95,
          additionalPrice: 0,
          additionalTime: 0,
        },
        Sedan: {
          basePrice: 89.95,
          additionalPrice: 10,
          additionalTime: 10,
        },
        SUV: {
          basePrice: 89.95,
          additionalPrice: 10,
          additionalTime: 10,
        },
        "Station Wagon": {
          basePrice: 89.95,
          additionalPrice: 10,
          additionalTime: 10,
        },
        MPV: {
          basePrice: 89.95,
          additionalPrice: 10,
          additionalTime: 10,
        },
        "Coupé": {
          basePrice: 89.95,
          additionalPrice: 0,
          additionalTime: 0,
        },
        Convertible: {
          basePrice: 99.95,
          additionalPrice: 0,
          additionalTime: 0,
        },
        Van: {
          basePrice: 89.95,
          additionalPrice: 10,
          additionalTime: 10,
        },
        "Pick-up Truck": {
          basePrice: 89.95,
          additionalPrice: 10,
          additionalTime: 10,
        },
      },
      additionalOptions: {
        interior: [
          {
            name: "Leather treatment",
            additionalCost: 50,
            options: ["Cleans and protects leather.", "Prevents cracking and extends life."],
          },
          {
            name: "Stain removal upholstery",
            additionalCost: 80,
            options: ["Deep cleaning to remove stubborn stains.", "Focused on fabric upholstery."],
          },
          {
            name: "Pet hair removal",
            additionalCost: 50,
            options: ["Removes pet hair from upholstery and carpets.", "Leaves the interior deeply cleaned."],
          },
          {
            name: "Ozone treatment",
            additionalCost: 95,
            options: ["Purifies air, kills bacteria and mold.", "Eliminates odors permanently."],
          },
          {
            name: "Mold treatment",
            additionalCost: 105,
            options: ["Removes mold inside the vehicle.", "Reduces health risks from mold."],
          },
          {
            name: "Ceiling Steam Cleaning",
            additionalCost: 75,
            options: ["Steam cleans the ceiling, removes stains.", "Not suitable for fragile headliners."],
          },
          {
            name: "Vomit Treatment",
            additionalCost: 125,
            options: ["Deep clean stains", "Upholstery restoration"],
          },
          {
            name: "Deep High Chair Cleaning (Per Chair)",
            additionalCost: 15,
            options: ["Deep cleaning for fabric upholstery.", "Removes tough stains."],
          },
          {
            name: "Fragrance treatment",
            additionalCost: 85,
            options: ["Odor neutralization", "Includes antibacterial sprays."],
          },
        ],
        exterior: [
          {
            name: "Bonnet Cleaning ",
            additionalCost: 50,
            options: ["Hood polishing", "Restore shine in the bonnet."],
          },
          {
            name: "Cleaning the Sliding/Tilting Roof",
            additionalCost: 15,
            options: ["Thorough cleaning of the roof.", "Prevents dirt buildup."],
          },
          {
            name: "Polishing Chrome Parts",
            additionalCost: 55,
            options: ["Polishes and restores chrome shine.", "Removes minor scratches."],
          },
          {
            name: "Polishing Headlights",
            additionalCost: 50,
            options: ["Restores headlight brightness.", "Improves visibility."],
          },
          {
            name: "Cleaning Convertible Roof",
            additionalCost: 85,
            options: ["Roof polishing", "Scratch removal (up to 30%)"],
          },
        ],
        detailing: [
          {
            name: "Clay bar treatment",
            available: true,
            additionalCost: 50,
            options: ["Removes stubborn contaminants from the paint.", "Leaves the paint with a smooth finish."],
          },
          {
            name: "Ceramic Paint Sealant",
            available: true,
            additionalCost: 65,
            options: [" Provides long-lasting protection.", "Ensures a high-quality, glossy finish."],
          },
          {
            name: "Polishing entire vehicle in 1 step",
            available: true,
            additionalCost: 180,
            options: ["Removes light scratches (up to 50%) and repairs 75% of swirls.", "Restores a fresh, shiny finish."],
          },
          {
            name: "Polishing entire vehicle in 2 steps",
            available: true,
            additionalCost: 295,
            options: [
              "Removes medium scratches (up to 80%) and repairs 85% of swirls.",
              "Gives the vehicle a deeper shine and protection.",
            ],
          },
          {
            name: "Polishing entire vehicle in 3 steps",
            available: true,
            additionalCost: 425,
            options: [
              "Removes heavy scratches (up to 95%) and repairs 95% of swirls.",
              "Provides the ultimate result and a showroom-like shine.",
            ],
          },
          {
            name: "Glass Coating",
            additionalCost: "On Request",
            available: false,
            options: [
              " Adds long-lasting, water- and dirt-repellent protection to the paint.",
              "Details and costs available upon request.",
            ],
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
      vehicleOptions: {
        Hatchback: {
          basePrice: 89.95,
          additionalPrice: 0,
        },
        Sedan: {
          basePrice: 89.95,
          additionalPrice: 10,
        },
        SUV: {
          basePrice: 89.95,
          additionalPrice: 10,
        },
        "Station Wagon": {
          basePrice: 89.95,
          additionalPrice: 10,
        },
        MPV: {
          basePrice: 89.95,
          additionalPrice: 10,
        },
        "Coupé": {
          basePrice: 89.95,
          additionalPrice: 0,
        },
        Convertible: {
          basePrice: 89.95,
          additionalPrice: 0,
        },
        Van: {
          basePrice: 89.95,
          additionalPrice: 10,
        },
        "Pick-up Truck": {
          basePrice: 89.95,
          additionalPrice: 10,
        },
        Motorbike: {
          basePrice: 79.95,
          additionalPrice: 0,
          notes: "exterior only",
        },
      },
      additionalOptions: {
        interior: [
          {
            name: "Ozone treatment",
            additionalCost: 95,
            options: ["Purifies air, kills bacteria and mold.", "Eliminates odors permanently."],
          },
        ],
        exterior: [
          {
            name: "Bonnet Cleaning ",
            additionalCost: 50,
            options: ["Hood polishing", "Restore shine in the bonnet."],
          },
          {
            name: "Cleaning the Sliding/Tilting Roof",
            additionalCost: 15,
            options: ["Thorough cleaning of the roof.", "Prevents dirt buildup."],
          },
          {
            name: "Polishing Chrome Parts",
            additionalCost: 55,
            options: ["Polishes and restores chrome shine.", "Removes minor scratches."],
          },
          {
            name: "Polishing Headlights",
            additionalCost: 50,
            options: ["Restores headlight brightness.", "Improves visibility."],
          },
          {
            name: "Sills and Door Edges",
            additionalCost: 10,
            options: ["Cleans sills and door edges.", "Provides a thorough clean."],
          },
        ],
        detailing: [
          {
            name: "Clay bar treatment",
            available: true,
            additionalCost: 50,
            options: ["Removes stubborn contaminants from the paint.", "Leaves the paint with a smooth finish."],
          },
          {
            name: "Ceramic Paint Sealant",
            available: true,
            additionalCost: 65,
            options: [" Provides long-lasting protection.", "Ensures a high-quality, glossy finish."],
          },
          {
            name: "Polishing entire vehicle in 1 step",
            available: true,
            additionalCost: 180,
            options: ["Removes light scratches (up to 50%) and repairs 75% of swirls.", "Restores a fresh, shiny finish."],
          },
          {
            name: "Polishing entire vehicle in 2 steps",
            available: true,
            additionalCost: 295,
            options: [
              "Removes medium scratches (up to 80%) and repairs 85% of swirls.",
              "Gives the vehicle a deeper shine and protection.",
            ],
          },
          {
            name: "Polishing entire vehicle in 3 steps",
            available: true,
            additionalCost: 425,
            options: [
              "Removes heavy scratches (up to 95%) and repairs 95% of swirls.",
              "Provides the ultimate result and a showroom-like shine.",
            ],
          },
          {
            name: "Glass Coating",
            additionalCost: "On Request",
            available: false,
            options: [
              " Adds long-lasting, water- and dirt-repellent protection to the paint.",
              "Details and costs available upon request.",
            ],
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
      vehicleOptions: {
        Hatchback: {
          basePrice: 189.95,
          additionalPrice: 0,
        },
        Sedan: {
          basePrice: 189.95,
          additionalPrice: 0,
        },
        SUV: {
          basePrice: 189.95,
          additionalPrice: 15,
        },
        "Station Wagon": {
          basePrice: 189.95,
          additionalPrice: 15,
        },
        MPV: {
          basePrice: 189.95,
          additionalPrice: 15,
        },
        "Coupé": {
          basePrice: 189.95,
          additionalPrice: 0,
        },
        Convertible: {
          basePrice: 189.95,
          additionalPrice: 0,
        },
        Van: {
          basePrice: 189.95,
          additionalPrice: 15,
        },
        "Pick-up Truck": {
          basePrice: 189.95,
          additionalPrice: 15,
        },
      },
      additionalOptions: {
        interior: [
          {
            name: "Pet hair removal",
            additionalCost: 50,
            options: ["Removes pet hair from upholstery and carpets.", "Leaves the interior deeply cleaned."],
          },
          {
            name: "Ozone treatment",
            additionalCost: 95,
            options: ["Purifies air, kills bacteria and mold.", "Eliminates odors permanently."],
          },
          {
            name: "Mold treatment",
            additionalCost: 105,
            options: ["Removes mold inside the vehicle.", "Reduces health risks from mold."],
          },
          {
            name: "Ceiling Steam Cleaning",
            additionalCost: 75,
            options: ["Steam cleans the ceiling, removes stains.", "Not suitable for fragile headliners."],
          },
          {
            name: "Fragrance treatment",
            additionalCost: 85,
            options: ["Odor neutralization", "Includes antibacterial sprays."],
          },
        ],
        exterior: [
          {
            name: "Bonnet cleaning",
            additionalCost: 50,
            options: ["Hood polishing", "Scratch removal (up to 30%)"],
          },
          {
            name: "Cleaning the Sliding/Tilting Roof",
            additionalCost: 15,
            options: ["Thorough cleaning of the roof.", "Prevents dirt buildup."],
          },
          {
            name: "Polishing Chrome Parts",
            additionalCost: 55,
            options: ["Polishes and restores chrome shine.", "Removes minor scratches."],
          },
          {
            name: "Polishing Headlights",
            additionalCost: 50,
            options: ["Restores headlight brightness.", "Improves visibility."],
          },
        ],
        detailing: [
          {
            name: "Clay bar treatment",
            available: true,
            additionalCost: 50,
            options: ["Removes stubborn contaminants from the paint.", "Leaves the paint with a smooth finish."],
          },
          {
            name: "Ceramic Paint Sealant",
            available: true,
            additionalCost: 65,
            options: [" Provides long-lasting protection.", "Ensures a high-quality, glossy finish."],
          },
          {
            name: "Polishing entire vehicle in 1 step",
            available: true,
            additionalCost: 180,
            options: ["Removes light scratches (up to 50%) and repairs 75% of swirls.", "Restores a fresh, shiny finish."],
          },
          {
            name: "Polishing entire vehicle in 2 steps",
            available: true,
            additionalCost: 295,
            options: [
              "Removes medium scratches (up to 80%) and repairs 85% of swirls.",
              "Gives the vehicle a deeper shine and protection.",
            ],
          },
          {
            name: "Polishing entire vehicle in 3 steps",
            available: true,
            additionalCost: 425,
            options: [
              "Removes heavy scratches (up to 95%) and repairs 95% of swirls.",
              "Provides the ultimate result and a showroom-like shine.",
            ],
          },
          {
            name: "Glass Coating",
            additionalCost: "On Request",
            available: false,
            options: [
              " Adds long-lasting, water- and dirt-repellent protection to the paint.",
              "Details and costs available upon request.",
            ],
          },
        ],
      },
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
      vehicleOptions: {
        Hatchback: {
          basePrice: 149.95,
          additionalPrice: 0,
        },
        Sedan: {
          basePrice: 149.95,
          additionalPrice: 10,
        },
        SUV: {
          basePrice: 144.95,
          additionalPrice: 10,
        },
        "Station Wagon": {
          basePrice: 149.95,
          additionalPrice: 10,
        },
        MPV: {
          basePrice: 149.95,
          additionalPrice: 10,
        },
        "Coupé": {
          basePrice: 149.95,
          additionalPrice: 0,
        },
        Convertible: {
          basePrice: 149.95,
          additionalPrice: 0,
        },
        Van: {
          basePrice: 149.95,
          additionalPrice: 10,
        },
        "Pick-up Truck": {
          basePrice: 149.95,
          additionalPrice: 10,
        },
      },
      additionalOptions: {
        interior: [
          {
            name: "Pet hair removal",
            additionalCost: 50,
            options: ["Removes pet hair from upholstery and carpets.", "Leaves the interior deeply cleaned."],
          },
          {
            name: "Ozone treatment",
            additionalCost: 95,
            options: ["Purifies air, kills bacteria and mold.", "Eliminates odors permanently."],
          },
          {
            name: "Mold treatment",
            additionalCost: 105,
            options: ["Removes mold inside the vehicle.", "Reduces health risks from mold."],
          },
          {
            name: "Ceiling Steam Cleaning",
            additionalCost: 75,
            options: ["Steam cleans the ceiling, removes stains.", "Not suitable for fragile headliners."],
          },
          {
            name: "Fragrance treatment",
            additionalCost: 85,
            options: ["Odor neutralization", "Includes antibacterial sprays."],
          },
        ],
        exterior: [
          {
            name: "Bonnet Cleaning ",
            additionalCost: 50,
            options: ["Hood polishing", "Restore shine in the bonnet."],
          },
          {
            name: "Cleaning the Sliding/Tilting Roof",
            additionalCost: 15,
            options: ["Thorough cleaning of the roof.", "Prevents dirt buildup."],
          },
          {
            name: "Polishing Chrome Parts",
            additionalCost: 55,
            options: ["Polishes and restores chrome shine.", "Removes minor scratches."],
          },
          {
            name: "Polishing Headlights",
            additionalCost: 50,
            options: ["Restores headlight brightness.", "Improves visibility."],
          },
        ],
        detailing: [
          {
            name: "Clay bar treatment",
            available: true,
            additionalCost: 50,
            options: ["Removes stubborn contaminants from the paint.", "Leaves the paint with a smooth finish."],
          },
          {
            name: "Ceramic Paint Sealant",
            available: true,
            additionalCost: 65,
            options: [" Provides long-lasting protection.", "Ensures a high-quality, glossy finish."],
          },
          {
            name: "Polishing entire vehicle in 1 step",
            available: true,
            additionalCost: 180,
            options: ["Removes light scratches (up to 50%) and repairs 75% of swirls.", "Restores a fresh, shiny finish."],
          },
          {
            name: "Polishing entire vehicle in 2 steps",
            available: true,
            additionalCost: 295,
            options: [
              "Removes medium scratches (up to 80%) and repairs 85% of swirls.",
              "Gives the vehicle a deeper shine and protection.",
            ],
          },
          {
            name: "Polishing entire vehicle in 3 steps",
            available: true,
            additionalCost: 425,
            options: [
              "Removes heavy scratches (up to 95%) and repairs 95% of swirls.",
              "Provides the ultimate result and a showroom-like shine.",
            ],
          },
          {
            name: "Glass Coating",
            additionalCost: "On Request",
            available: false,
            options: [
              " Adds long-lasting, water- and dirt-repellent protection to the paint.",
              "Details and costs available upon request.",
            ],
          },
        ],
      },
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
      vehicleOptions: {
        Hatchback: {
          basePrice: 429.95,
          additionalPrice: 0,
          additionalTime: 0
        },
        Sedan: {
          basePrice: 429.95,
          additionalPrice: 45,
          additionalTime: 30
        },
        SUV: {
          basePrice: 429.95,
          additionalPrice: 45,
          additionalTime: 30
        },
        "Station Wagon": {
          basePrice: 429.95,
          additionalPrice: 45,
          additionalTime: 30
        },
        MPV: {
          basePrice: 429.95,
          additionalPrice: 45,
          additionalTime: 30
        },
        "Coupé": {
          basePrice: 429.95,
          additionalPrice: 0,
          additionalTime: 0
        },
        Convertible: {
          basePrice: 429.95,
          additionalPrice: 0,
          additionalTime: 0
        },
        Van: {
          basePrice: 429.95,
          additionalPrice: 45,
          additionalTime: 30
        }
      },
      additionalOptions: {
        interior: [
          {
            name: "Vomit Treatment",
            additionalCost: 125,
            options: ["Deep clean stains", "Upholstery restoration"],
          },
          {
            name: "Ozone treatment",
            additionalCost: 95,
            options: ["Purifies air, kills bacteria and mold.", "Eliminates odors permanently."],
          },
          {
            name: "Mold treatment",
            additionalCost: 105,
            options: ["Removes mold inside the vehicle.", "Reduces health risks from mold."],
          },
        ],
        exterior: [
          {
            name: "Cleaning the Convertible Roof",
            additionalCost: 85,
            options: ["Restore shine", "Scratch removal"],
          },
        ],
        detailing: [
          {
            name: "Clay bar treatment",
            available: true,
            additionalCost: 50,
            options: ["Removes stubborn contaminants from the paint.", "Leaves the paint with a smooth finish."],
          },
          {
            name: "Ceramic Paint Sealant",
            available: true,
            additionalCost: 65,
            options: [" Provides long-lasting protection.", "Ensures a high-quality, glossy finish."],
          },
          {
            name: "Polishing entire vehicle in 1 step",
            available: true,
            additionalCost: 180,
            options: ["Removes light scratches (up to 50%) and repairs 75% of swirls.", "Restores a fresh, shiny finish."],
          },
          {
            name: "Polishing entire vehicle in 2 steps",
            available: true,
            additionalCost: 295,
            options: [
              "Removes medium scratches (up to 80%) and repairs 85% of swirls.",
              "Gives the vehicle a deeper shine and protection.",
            ],
          },
          {
            name: "Polishing entire vehicle in 3 steps",
            available: true,
            additionalCost: 425,
            options: [
              "Removes heavy scratches (up to 95%) and repairs 95% of swirls.",
              "Provides the ultimate result and a showroom-like shine.",
            ],
          },
          {
            name: "Glass Coating",
            additionalCost: "On Request",
            available: false,
            options: [
              " Adds long-lasting, water- and dirt-repellent protection to the paint.",
              "Details and costs available upon request.",
            ],
          },
        ],
      },
    },
  ],
};

export const options = [
  {
    id: "autocare-standard",
    name: "Standard",
    duration: "± 36 min.",
    price: "From € 74",
  },
  {
    id: "autocare-deluxe",
    name: "Deluxe",
    duration: "± 45 min.",
    price: "From € 94",
  },
  {
    id: "autocare-premium",
    name: "Premium",
    duration: "± 101 min.",
    price: "From € 149",
  },
];
