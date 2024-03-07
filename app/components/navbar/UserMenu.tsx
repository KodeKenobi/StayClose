"use client";

import { useCallback, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

import useLoginModal from "@/app/hooks/useLoginModal";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import useRentModal from "@/app/hooks/useRentModal";
import useLandlordLoginModal from "@/app/hooks/useLandlordLoginModal";
import useLandlordRentModal from "@/app/hooks/useLandlordRentModal";
import useLandlordRegisterModal from "@/app/hooks/useLandlordRegisterModal";
import { SafeUser, SafeLandlord } from "@/app/types";

import MenuItem from "./MenuItem";
import Avatar from "../Avatar";
import Menu from "react-select/dist/declarations/src/components/Menu";

interface UserMenuProps {
  currentUser?: SafeUser | null;
  currentLandlord?: SafeLandlord | null;
}

const UserMenu: React.FC<UserMenuProps> = ({
  currentUser,
  currentLandlord,
}) => {
  const router = useRouter();

  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();
  const rentModal = useRentModal();
  const landlordLoginModal = useLandlordLoginModal();
  const landlordRentModal = useLandlordRentModal();
  const landlordRegisterModal = useLandlordRegisterModal();

  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  const onRent = useCallback(() => {
    if (!currentUser) {
      return loginModal.onOpen();
    }

    rentModal.onOpen();
  }, [loginModal, rentModal, currentUser]);

  const onEditProfile = useCallback(() => {
    router.push("/edit-profile"); // Update the route according to your application
  }, [router]);

  const onLandlordLogin = useCallback(() => {
    if (!currentLandlord) {
      return landlordLoginModal.onOpen();
    }

    landlordRentModal.onOpen();
  }, [currentLandlord, landlordLoginModal, landlordRentModal]);

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div
          onClick={onRent}
          className="
            hidden
            md:block
            text-sm 
            font-semibold 
            py-3 
            px-4 
            rounded-full 
            hover:bg-neutral-100 
            transition 
            cursor-pointer
          "
        >
          Host your home
        </div>
        <div
          onClick={toggleOpen}
          className="
          p-4
          md:py-1
          md:px-2
          border-[1px] 
          border-neutral-200 
          flex 
          flex-row 
          items-center 
          gap-3 
          rounded-full 
          cursor-pointer 
          hover:shadow-md 
          transition
          "
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            <Avatar src={currentUser?.image} />
          </div>
        </div>
      </div>
      {isOpen && (
        <div
          className="
            absolute 
            rounded-xl 
            shadow-md
            w-[40vw]
            md:w-3/4 
            bg-white 
            overflow-hidden 
            right-0 
            top-12 
            text-sm
          "
        >
          <div className="flex flex-col cursor-pointer">
            {currentUser ? (
              <>
                <MenuItem
                  label="My trips"
                  onClick={() => router.push("/trips")}
                />
                <MenuItem
                  label="My favorites"
                  onClick={() => router.push("/favorites")}
                />
                <MenuItem
                  label="My reservations"
                  onClick={() => router.push("/reservations")}
                />
                <MenuItem
                  label="My properties"
                  onClick={() => router.push("/properties")}
                />
                <MenuItem
                  label="Host your home"
                  onClick={landlordRentModal.onOpen}
                />
                <hr />
                <MenuItem
                  label="Help center for reports"
                  onClick={() => router.push("/help")}
                />
                <MenuItem
                  label="Edit Profile"
                  onClick={() => router.push("/editProfile")}
                />
                <hr />
                <hr />
                <MenuItem label="Logout" onClick={() => signOut()} />
              </>
            ) : (
              <>
                <MenuItem label="Login" onClick={loginModal.onOpen} />
                <MenuItem label="Sign up" onClick={registerModal.onOpen} />
                {/* <hr />
                <MenuItem
                  label="Login as landlord"
                  onClick={landlordLoginModal.onOpen}
                /> */}
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
