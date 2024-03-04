import EmptyState from "@/app/components/EmptyState";
import ClientOnly from "@/app/components/ClientOnly";

import getCurrentUser from "@/app/actions/getCurrentUser";
import getListings from "@/app/actions/getListings";
import getFavoriteListings from "@/app/actions/getFavoriteListings";
import { NextPage } from "next";
import PropertiesClient from "../properties/PropertiesClient";
import FavoritesClient from "../favorites/FavoritesClient";
import getReservations from "@/app/actions/getReservations";

import TripsClient from "../reservations/ReservationsClient";

const EditProfilePage = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return <EmptyState title="Unauthorized" subtitle="Please login" />;
  }

  const listings = await getListings({ userId: currentUser.id });
  const favorites = await getFavoriteListings();
  const reservations = await getReservations({ authorId: currentUser.id });

  if (listings.length === 0) {
    return (
      <ClientOnly>
        <EmptyState
          title="No properties found"
          subtitle="Looks like you have no properties."
        />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <PropertiesClient listings={listings} currentUser={currentUser} />
      <div className="mt-24">
        <hr />
      </div>
      <div className="mt-24">
        <TripsClient reservations={reservations} currentUser={currentUser} />
      </div>
      <div className="mt-24">
        <hr />
      </div>
      {listings.length === 0 && (
        <EmptyState
          title="No properties found"
          subtitle="Looks like you have no properties."
        />
      )}
      {favorites.length === 0 && (
        <EmptyState
          title="No favorites found"
          subtitle="Looks like you have no favorite listings."
        />
      )}
      {reservations.length === 0 && (
        <EmptyState
          title="No reservations found"
          subtitle="Looks like you have no reservations on your properties."
        />
      )}
    </ClientOnly>
  );
};

export default EditProfilePage;
