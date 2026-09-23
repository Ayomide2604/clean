export const services = [
  {
    slug: "regular-cleaning",
    title: "Regular Cleaning",
    summary: "Reliable recurring cleaning for homes, apartments, and offices.",
    description:
      "A routine cleaning visit keeps your space comfortable and manageable without adding another task to your week.",
    included: [
      "Kitchen surface cleaning and general tidying",
      "Bathroom cleaning and sanitizing",
      "Vacuuming and mopping of accessible floors",
      "Dusting of reachable furniture and fixtures",
    ],
    bestFor:
      "Homes, apartments, offices, and customers who want weekly, bi-weekly, monthly, or as-needed support.",
  },
  {
    slug: "deep-cleaning",
    title: "Deep Cleaning",
    summary:
      "A detailed reset for high-use rooms, surfaces, and hard-to-reach areas.",
    description:
      "Deep cleaning is for spaces that need more attention than a standard regular clean. We tailor the detail work to the condition of your property.",
    included: [
      "Detailed kitchen and bathroom cleaning",
      "Extra attention to buildup and high-touch surfaces",
      "Dusting of accessible vents, baseboards, and fixtures",
      "Floor cleaning appropriate to the surface",
    ],
    bestFor:
      "Seasonal resets, first-time visits, and properties that have not been professionally cleaned recently.",
  },
  {
    slug: "move-in-move-out-cleaning",
    title: "Move-In / Move-Out Cleaning",
    summary:
      "A fresh start for tenants, homeowners, landlords, and property managers.",
    description:
      "A detailed cleaning plan for a property transition, based on the condition of the home and the requirements of the move.",
    included: [
      "Kitchen and appliance exterior cleaning",
      "Bathroom cleaning and sanitizing",
      "Interior cabinets and closets when empty and accessible",
      "Vacuuming, mopping, dusting, and general presentation",
    ],
    bestFor:
      "Tenants, homeowners, landlords, property managers, and real-estate related moves.",
  },
  {
    slug: "short-term-rental-cleaning",
    title: "Short-Term Rental Cleaning",
    summary: "Between-guest resets that help your rental feel ready.",
    description:
      "A turnover clean helps short-term rentals stay consistent between guests. The scope can include a reset checklist unique to your property.",
    included: [
      "Bathroom and kitchen cleaning",
      "Bedroom and living-area reset",
      "Garbage removal and general tidying",
      "Visual presentation check before the next guest",
    ],
    bestFor:
      "Airbnb and short-term rental hosts who need reliable turnover support.",
  },
  {
    slug: "commercial-cleaning",
    title: "Commercial Cleaning",
    summary:
      "Practical cleaning support for small offices, retail spaces, and facilities.",
    description:
      "Commercial work is planned around access, business hours, required frequency, and the size of the space so the service is sustainable for everyone.",
    included: [
      "Common-area and workspace cleaning",
      "Washroom cleaning and restocking as agreed",
      "Accessible floor care and garbage removal",
      "A recurring scope tailored to the facility",
    ],
    bestFor:
      "Small offices, retail businesses, restaurants, property managers, and other small commercial spaces.",
  },
  {
    slug: "post-renovation-cleaning",
    title: "Post-Renovation Cleaning",
    summary:
      "Cleaning dust, residue, and affected surfaces after renovation work.",
    description:
      "Post-renovation cleaning is a detailed service for spaces affected by construction or upgrades. Scope is assessed carefully before a quote is provided.",
    included: [
      "Removal of accessible dust and construction residue",
      "Detailed cleaning of affected surfaces",
      "Vacuuming and mopping of accessible floors",
      "Final presentation clean based on the completed work",
    ],
    bestFor:
      "Homes and commercial spaces following renovations, repairs, or construction projects.",
  },
] as const;

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
