import { IconType } from "react-icons";
import { useState } from "react";

interface AmnetiesBoxProps {
  icon: IconType;
  label: string;
  selected: boolean;
  onClick: (value: string) => void;
}

const AmnetiesBox: React.FC<AmnetiesBoxProps> = ({
  icon: Icon,
  label,
  selected,
  onClick,
}) => {
  // Use local state to track the selection status of each amenity
  const [isSelected, setIsSelected] = useState<boolean>(selected);
  console.log(isSelected);

  // Function to handle click events on amenities
  const handleClick = () => {
    // Toggle the selection status of the amenity
    setIsSelected(!isSelected);
    // Call the onClick callback with the label of the amenity
    onClick(label);
  };

  return (
    <div
      onClick={handleClick}
      className={`
        rounded-xl
        border-2
        p-4
        flex
        flex-col
        gap-3
        hover:border-black
        transition
        cursor-pointer
        ${isSelected ? "bg-gray-200" : "border-neutral-200"}
      `}
    >
      <Icon size={30} />
      <div className="font-semibold">{label}</div>
    </div>
  );
};

export default AmnetiesBox;
