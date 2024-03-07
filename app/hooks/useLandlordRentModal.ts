import { create } from "zustand";

interface LandlordRentModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useLandlordRentModal = create<LandlordRentModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useLandlordRentModal;
