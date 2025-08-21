import { PropertyListing, Unit } from "@/types";

export const ListingToUnit = (listing: PropertyListing): Unit => {
  const validPhotos = listing.photos.filter(
    (photo) => photo && photo.trim() !== ""
  );

  return {
    id: listing.unit_id,
    type: listing.unit_type,
    bua: listing.bua ? `${listing.bua}m²` : "N/A",
    status: listing.status,
    totalPrice: `EGP ${listing.total_price.toLocaleString()}`,
    photos: validPhotos.length > 0 ? validPhotos : ["/logo.svg"],
  };
};

export const ListingsToUnits = (listings: PropertyListing[]): Unit[] => {
  return listings.map(ListingToUnit);
};
