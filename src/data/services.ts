export const services = [
  {
    slug: "regular-cleaning",
    title: "Regular Cleaning",
    image: "/assets/images/gallery/gallery-1.jpg",
    summary:
      "Reliable recurring cleaning for homes, apartments, offices, and other properties.",
    description:
      "Our regular cleaning service helps keep your property clean, comfortable, and manageable without adding another task to your week. The service can be arranged as a one-time visit or on a recurring schedule.",
    included: [
      "Kitchen surface cleaning and general tidying",
      "Bathroom cleaning and sanitizing",
      "Dusting of accessible surfaces",
      "Vacuuming and mopping of accessible floors",
      "General cleaning of common areas",
    ],
    bestFor:
      "Weekly, bi-weekly, monthly, or occasional cleaning for homes, apartments, offices, and other properties.",
  },

  {
    slug: "deep-cleaning",
    title: "Deep Cleaning",
    image: "/assets/images/gallery/gallery-2.jpg",
    summary:
      "A more detailed clean for properties that need extra attention beyond routine maintenance.",
    description:
      "Deep cleaning is designed for spaces that need more attention than a standard regular clean. We focus on areas where dust, buildup, and accumulated dirt may require additional time and attention.",
    included: [
      "Detailed kitchen and bathroom cleaning",
      "Additional attention to buildup and high-touch areas",
      "Dusting of accessible baseboards, fixtures, and other surfaces",
      "Detailed floor cleaning",
      "Extra attention to areas that may be missed during routine cleaning",
    ],
    bestFor:
      "First-time professional cleaning, seasonal resets, or properties that require additional attention.",
  },

  {
    slug: "move-in-move-out-cleaning",
    title: "Move-In / Move-Out Cleaning",
    image: "/assets/images/gallery/gallery-1.jpg",
    summary:
      "Detailed cleaning to help prepare a property for its next occupant.",
    description:
      "Moving can leave plenty to take care of. Our move-in and move-out cleaning service helps prepare a property for a new occupant or leave it clean and presentable after a move.",
    included: [
      "Kitchen cleaning",
      "Bathroom cleaning and sanitizing",
      "Accessible cabinets and closets when empty",
      "Dusting and surface cleaning",
      "Vacuuming and mopping",
      "General presentation cleaning",
    ],
    bestFor:
      "Tenants, homeowners, landlords, property managers, and property transitions.",
  },

  {
    slug: "short-term-rental-cleaning",
    title: "Short-Term Rental Cleaning",
    image: "/assets/images/gallery/gallery-2.jpg",
    summary:
      "Reliable turnover cleaning to help your rental feel ready for the next guest.",
    description:
      "Our short-term rental cleaning service helps hosts prepare their properties between guests. The cleaning scope can be adapted to the needs of your property and turnover schedule.",
    included: [
      "Kitchen and bathroom cleaning",
      "Bedroom and living-area reset",
      "Vacuuming and mopping",
      "Garbage removal",
      "Surface cleaning and general tidying",
      "Final presentation check",
    ],
    bestFor:
      "Airbnb and other short-term rental properties requiring reliable between-guest cleaning.",
  },

  {
    slug: "commercial-cleaning",
    title: "Commercial Cleaning",
    image: "/assets/images/gallery/gallery-3.jpg",
    summary:
      "Practical cleaning support for offices, retail spaces, restaurants, and other commercial properties.",
    description:
      "Commercial cleaning is planned around the needs of your business, including access, operating hours, cleaning frequency, and the size and use of the space.",
    included: [
      "Workspace and common-area cleaning",
      "Washroom cleaning and sanitizing",
      "Floor cleaning",
      "Garbage removal",
      "Surface cleaning",
      "Recurring cleaning schedules based on the property's needs",
    ],
    bestFor:
      "Small businesses, offices, retail spaces, restaurants, property managers, and other commercial facilities.",
  },

  {
    slug: "post-renovation-cleaning",
    title: "Post-Renovation Cleaning",
    image: "/assets/images/gallery/gallery-4.jpg",
    summary:
      "Detailed cleaning after renovations, repairs, or construction work.",
    description:
      "Renovation work can leave dust and residue throughout a property. Our post-renovation cleaning service focuses on accessible areas affected by the work and helps prepare the space for use.",
    included: [
      "Removal of accessible construction dust and residue",
      "Cleaning of affected surfaces",
      "Vacuuming and mopping of accessible floors",
      "Cleaning of accessible fixtures and surfaces",
      "Final presentation cleaning",
    ],
    bestFor:
      "Homes and commercial properties following renovations, repairs, or construction work.",
  },
] as const;

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
