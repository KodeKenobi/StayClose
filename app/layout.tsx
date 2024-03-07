import { Nunito } from "next/font/google";

import Navbar from "@/app/components/navbar/Navbar";
import LoginModal from "@/app/components/modals/LoginModal";
import LandlordLoginModal from "@/app/components/modals/LandlordLoginModal";
import RegisterModal from "@/app/components/modals/LandlordRegisterModal";
import SearchModal from "@/app/components/modals/SearchModal";
import RentModal from "@/app/components/modals/RentModal";

import ToasterProvider from "@/app/providers/ToasterProvider";

import "./globals.css";
import ClientOnly from "./components/ClientOnly";
import getCurrentUser from "./actions/getCurrentUser";
import getCurrentLandlord from "./actions/getCurrentLandlord";
import Footer from "./components/Footer";

export const metadata = {
  title: "Stay Close",
  description: "Stay Close is a platform for renting and listing properties.",
};

const font = Nunito({
  subsets: ["latin"],
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();
  const currentLandlord = await getCurrentLandlord();

  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <LandlordLoginModal />
          <LoginModal />
          <RegisterModal />
          <SearchModal />
          <RentModal />
          <Navbar currentUser={currentUser} />
        </ClientOnly>
        <div className="pb-20 pt-28">{children}</div>
        <ClientOnly>
          <Footer />
        </ClientOnly>
      </body>
    </html>
  );
}
