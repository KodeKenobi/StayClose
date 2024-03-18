"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { AiOutlineWifi } from "react-icons/ai";
import { MdOutlineHotTub, MdLocalLaundryService } from "react-icons/md";
import { BiTv } from "react-icons/bi";
import { RiParkingBoxLine } from "react-icons/ri";
import { BiFoodMenu } from "react-icons/bi";
import { BsSun } from "react-icons/bs";
import { FaShower } from "react-icons/fa";
import { IoIosWine } from "react-icons/io";
import { SiSpeakerdeck } from "react-icons/si";
import { IoMdPricetag } from "react-icons/io";
import { HiSpeakerphone, HiOutlineSpeakerphone } from "react-icons/hi";
import { MdSmokingRooms, MdFreeBreakfast } from "react-icons/md";
import { BiDumbbell } from "react-icons/bi";
import { IconType } from "react-icons";
import { FaPaw } from "react-icons/fa";
import { GiSpoon } from "react-icons/gi";
import qs from "query-string";
import AmnetiesBox from "../AmnetiesBox";
import Container from "../Container";
import { useState } from "react";

export const amneties = [
  {
    label: "WiFi",
    icon: AiOutlineWifi,
    description: "Free WiFi is available!",
  },
  {
    label: "Hot Tub",
    icon: MdOutlineHotTub,
    description: "Enjoy a relaxing time in our hot tub!",
  },
  {
    label: "Pet Friendly",
    icon: FaPaw,
    description: "We welcome your furry friends!",
  },
  {
    label: "TV",
    icon: BiTv,
    description: "Watch your favorite shows and movies!",
  },
  {
    label: "Laundry Service",
    icon: MdLocalLaundryService,
    description: "Access to laundry service is provided!",
  },
  {
    label: "Cleaning Services",
    icon: GiSpoon,
    description: "We ensure your comfort with cleaning services!",
  },
  {
    label: "Parking",
    icon: RiParkingBoxLine,
    description: "Parking space available for guests!",
  },
  {
    label: "Food Menu",
    icon: BiFoodMenu,
    description: "Explore our delicious food menu!",
  },
  {
    label: "Sun Terrace",
    icon: BsSun,
    description: "Relax and sunbathe on our terrace!",
  },
  {
    label: "Shower",
    icon: FaShower,
    description: "Refresh yourself with a hot shower!",
  },
  {
    label: "Wine Tasting",
    icon: IoIosWine,
    description: "Experience wine tasting sessions!",
  },
  {
    label: "Sound System",
    icon: SiSpeakerdeck,
    description: "Listen to your favorite music with our sound system!",
  },
  {
    label: "Affordable Pricing",
    icon: IoMdPricetag,
    description: "Great amenities at affordable prices!",
  },
  {
    label: "Speakerphone",
    icon: HiSpeakerphone,
    description: "Stay connected with our speakerphone!",
  },
  {
    label: "Non-Smoking Rooms",
    icon: MdSmokingRooms,
    description: "We offer non-smoking rooms for your comfort!",
  },
  {
    label: "Free Breakfast",
    icon: MdFreeBreakfast,
    description: "Enjoy a complimentary breakfast every morning!",
  },
  {
    label: "Gym Facilities",
    icon: BiDumbbell,
    description: "Stay fit and active with our gym facilities!",
  },
];

const Amneties = () => {
  const params = useSearchParams();
  const [selectedAmneties, setSelectedAmneties] = useState<string[]>([]);
  const router = useRouter();

  // Check if params is null before using it
  if (params !== null) {
    const updatedQuery = new URLSearchParams(params as any); // Create a new URLSearchParams object

    // Rest of your code that uses updatedQuery
  } else {
    // Handle the case where params is null, perhaps by initializing updatedQuery differently
  }
  const pathname = usePathname();
  const isMainPage = pathname === "/";

  // Toggle the selected amneties so user can select multiple amneties

  const handleAmneties = (label: string) => {
    const isSelected = selectedAmneties.includes(label);
    let updatedSelectedAmneties: string[];

    if (isSelected) {
      updatedSelectedAmneties = selectedAmneties.filter(
        (item) => item !== label
      );
    } else {
      updatedSelectedAmneties = [...selectedAmneties, label];
    }

    setSelectedAmneties(updatedSelectedAmneties);
  };

  if (!isMainPage) {
    return null;
  }

  const handleQueryParams = (updatedQuery: any) => {
    const url = qs.stringifyUrl(
      {
        url: "/",
        query: updatedQuery,
      },
      { skipNull: true }
    );
    return url;
  };

  const handlePush = (url: string) => {
    // Use next/router to push the URL
  };

  return (
    <Container>
      <div
        className="
          pt-4
          flex 
          flex-row 
          items-center 
          justify-between
          overflow-x-auto
        "
      >
        {amneties.map((item) => (
          <AmnetiesBox
            key={item.label}
            label={item.label}
            icon={item.icon}
            selected={selectedAmneties.includes(item.label)}
            onClick={() => {
              handleAmneties(item.label);
              const updatedQuery: any = { ...params };
              if (selectedAmneties.includes(item.label)) {
                updatedQuery.delete("amnety");
              } else {
                updatedQuery.delete("amnety");
                selectedAmneties.forEach((label) =>
                  updatedQuery.append("amnety", label)
                );
                updatedQuery.append("amnety", item.label);
              }
              const url = handleQueryParams(updatedQuery);
              handlePush(url);
            }}
          />
        ))}
      </div>
    </Container>
  );
};

export default Amneties;
