import { PropertyListingProps } from "@/interfaces";

const SAMPLE_DATA: PropertyListingProps[] = [
  {
    propertyName: "Villa Arrciffee Beach House",
    location: {
      street: "123 Ocean Drive",
      city: "Miami",
      country: "USA",
    },
    rate: 4.76,
    currency: "$",
    amount: 620,
    favorite: false,
  },
  {
    propertyName: "Villa Arrciffee Beach House",
    location: {
      street: "123 Ocean Drive",
      city: "Miami",
      country: "USA",
    },
    rate: 4.76,
    currency: "$",
    amount: 620,
    favorite: false,
  },
];

const FILTERS: string[] = ["Mansion", "CountrySide", "Villa", "Tropical"];

export { SAMPLE_DATA, FILTERS };
