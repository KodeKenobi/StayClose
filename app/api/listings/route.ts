import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";
import getCurrentUser from "@/app/actions/getCurrentUser";
import getCurrentLandlord from "@/app/actions/getCurrentLandlord";
export async function POST(request: Request) {
  const currentUser = await getCurrentUser();
  const currentLandlord = await getCurrentLandlord();
  if (!currentUser) {
    return NextResponse.error();
  }
  if (!currentLandlord) {
    return NextResponse.error();
  }
  const body = await request.json();
  const {
    title,
    description,
    imageSrc,
    category,
    amnety,
    roomCount,
    bathroomCount,
    guestCount,
    location,
    price,
  } = body;

  Object.keys(body).forEach((value: any) => {
    if (!body[value]) {
      NextResponse.error();
    }
  });
  const listing = await prisma.listing.create({
    data: {
      title,
      description,
      imageSrc,
      category,
      amnety,
      roomCount,
      bathroomCount,
      guestCount,
      locationValue: location.value,
      price: parseInt(price, 10),
      userId: currentUser.id,
      landlordId: currentLandlord.id,
    },
  });
  return NextResponse.json(listing);
}
