"use client";

import dynamic from "next/dynamic";
import { IconType } from "react-icons";

import useCountries from "@/app/hooks/useCountries";
import { SafeUser } from "@/app/types";

import Avatar from "../Avatar";
import ListingCategory from "./ListingCategory";
import ListingsAmneties from "./ListingsAmneties";
import { amneties } from "../navbar/Amneties";

const Map = dynamic(() => import("../Map"), {
  ssr: false,
});

interface ListingInfoProps {
  user: SafeUser;
  description: string;
  title: string;
  guestCount: number;
  roomCount: number;
  bathroomCount: number;
  category:
    | {
        icon: IconType;
        label: string;
        description: string;
      }
    | undefined;
  locationValue: string;
  amnety: string[];
}

const ListingInfo: React.FC<ListingInfoProps> = ({
  user,
  description,
  title,
  guestCount,
  roomCount,
  bathroomCount,
  category,
  locationValue,
  amnety,
}) => {
  const { getByValue } = useCountries();

  const coordinates = getByValue(locationValue)?.latlng;

  return (
    <div className="col-span-4 flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <div
          className="
            text-xl 
            font-semibold 
            flex 
            flex-row 
            items-center
            gap-2
          "
        >
          <div>Hosted by {user?.name}</div>
          <Avatar src={user?.image} />
        </div>
        <div
          className="
            flex 
            flex-row 
            items-center 
            gap-4 
            font-light
            text-neutral-500
          "
        >
          <div>{guestCount} guests</div>
          <div>{roomCount} rooms</div>
          <div>{bathroomCount} bathrooms</div>
        </div>
      </div>
      <hr />
      <div
        className="
            text-xl 
            font-semibold 
            flex 
            flex-row 
            items-center
            gap-2
          "
      >
        <div>Property Category</div>
      </div>
      {category && (
        <ListingCategory
          icon={category.icon}
          label={category?.label}
          description={category?.description}
        />
      )}
      <hr />
      <div
        className="
            text-xl 
            font-semibold 
            flex 
            flex-row 
            items-center
            gap-2
          "
      >
        <div>Property Amenities Available</div>
      </div>
      {amnety &&
        amnety.map((item) => {
          const amnety = amneties.find((a) => a.label === item);
          if (amnety) {
            const Icon = amnety.icon;
            return (
              <div key={item} className="flex flex-row items-center gap-4">
                <Icon size={26} />
                <div>
                  <div className="text-lg font-semibold">{item}</div>{" "}
                  <div className="text-sm text-gray-500">
                    {amnety.description}
                  </div>{" "}
                </div>
              </div>
            );
          } else {
            return null;
          }
        })}

      <hr />
      <div className="text-lg font-light text-neutral-500"></div>
      <div
        className="
      text-lg text-2xl font-semibold text-neutral-900"
      >
        {title}
      </div>
      <div
        className="
      text-lg font-light text-neutral-500"
      >
        {description}
      </div>
      <hr />
      <Map center={coordinates} />
    </div>
  );
};

export default ListingInfo;
