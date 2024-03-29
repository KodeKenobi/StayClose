import { NextResponse } from "next/server";

import getCurrentUser from "@/app/actions/getCurrentUser";
import getCurrentLandlord from "@/app/actions/getCurrentLandlord";
import prisma from "@/app/libs/prismadb";

interface IParams {
  listingId?: string;
}

export async function POST(request: Request, { params }: { params: IParams }) {
  const currentUser = await getCurrentUser();
  const currentLandlord = await getCurrentLandlord();

  if (!currentUser) {
    return NextResponse.error();
  }

  if (!currentLandlord) {
    return NextResponse.error();
  }

  const { listingId } = params;

  if (!listingId || typeof listingId !== "string") {
    throw new Error("Invalid ID");
  }

  let favoriteIds = [
    ...(currentUser.favoriteIds || currentLandlord.favoriteIds || []),
  ];

  favoriteIds.push(listingId);

  const user = await prisma.user.update({
    where: {
      id: currentUser.id,
    },
    data: {
      favoriteIds,
    },
  });

  const landlord = await prisma.landlord.update({
    where: {
      id: currentLandlord.id,
    },
    data: {
      favoriteIds,
    },
  });

  return NextResponse.json(user);
}

export async function DELETE(
  request: Request,
  { params }: { params: IParams }
) {
  const currentUser = await getCurrentUser();

  const currentLandlord = await getCurrentLandlord();

  if (!currentUser) {
    return NextResponse.error();
  }

  if (!currentLandlord) {
    return NextResponse.error();
  }

  const { listingId } = params;

  if (!listingId || typeof listingId !== "string") {
    throw new Error("Invalid ID");
  }

  let favoriteIds = [
    ...(currentUser.favoriteIds || currentLandlord.favoriteIds || []),
  ];

  favoriteIds = favoriteIds.filter((id) => id !== listingId);

  const user = await prisma.user.update({
    where: {
      id: currentUser.id,
    },
    data: {
      favoriteIds,
    },
  });

  const landlord = await prisma.landlord.update({
    where: {
      id: currentLandlord.id,
    },
    data: {
      favoriteIds,
    },
  });

  return NextResponse.json(user);
}
