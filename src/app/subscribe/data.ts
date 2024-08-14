export const packages = [
  {
    name: "Exterior",
    packages: ["Exterior cleaning", "Wax", "Windows", "Rims", "Blacken tires"],
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

    additionalOptions: [],
  },
  {
    name: "Complete",
    packages: ["Exterior package", "Interior package", "Complete car care: inside and out"],
    totalDuration: "24 Months",
    duration: "± 90~120 min.",
    price: "€ 94.95",
    additionalOptions: [
      { option: "Leather treatment", additionalCost: 5.0 },
      { option: "Removing dog hair", additionalCost: 5.0 },
      { option: "Stain Removal", additionalCost: 10.0 },
    ],
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
    name: "Interior",
    packages: ["Windows", "Sills", "Steam cleaning", "Vacuuming", "Dashboard", "Feeding plastic parts", "Steaming mats"],
    totalDuration: "24 Months",
    duration: "± 60 min.",
    price: "€ 69.95",
    additionalOptions: [
      { option: "Leather treatment", additionalCost: 5.0 },
      { option: "Removing dog hair", additionalCost: 5.0 },
      { option: "Stain Removal", additionalCost: 10.0 },
    ],
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
];