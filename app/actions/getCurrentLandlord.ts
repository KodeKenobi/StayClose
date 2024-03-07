import { getServerSession } from "next-auth/next";

import { authOptions } from "@/pages/api/auth/[...nextauth]";
import prisma from "@/app/libs/prismadb";

export async function getSession() {
  return await getServerSession(authOptions);
}

export default async function getCurrentLandlord() {
  try {
    const session = await getSession();

    if (!session?.user?.email) {
      return null;
    }

    const currentLandlord = await prisma.user.findUnique({
      where: {
        email: session.user.email as string,
      },
    });

    if (!currentLandlord) {
      return null;
    }

    return {
      ...currentLandlord,
      createdAt: currentLandlord.createdAt.toISOString(),
      updatedAt: currentLandlord.updatedAt.toISOString(),
      emailVerified: currentLandlord.emailVerified?.toISOString() || null,
    };
  } catch (error: any) {
    return null;
  }
}
