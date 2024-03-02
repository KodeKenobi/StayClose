import React, { useState } from "react";
import Select from "react-select";

interface CountrySelectProps {
  onChange: (value: string) => void; // Adjust onChange to accept a string
  value: string | null;
}

const CountrySelect: React.FC<CountrySelectProps> = ({ onChange, value }) => {
  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  const [selectedArea, setSelectedArea] = useState<string | null>(null);

  // Define the data for South African cities and areas
  const southAfricaData = [
    {
      city: "Johannesburg",
      areas: ["Sandton", "Soweto", "Randburg"],
    },
    {
      city: "Cape Town",
      areas: ["City Bowl", "Southern Suburbs", "Northern Suburbs"],
    },
    // Add more cities and areas as needed
  ];

  const handleCityChange = (selectedOption: any) => {
    setSelectedCity(selectedOption.value);
    setSelectedArea(null); // Reset selected area when city changes
    const locationValue = selectedOption.value; // Only city selected initially
    onChange(locationValue); // Call the onChange function with the selected value
  };

  const handleAreaChange = (selectedOption: any) => {
    setSelectedArea(selectedOption.value);
    const locationValue = `${selectedCity}, ${selectedOption.value}`; // Concatenate city and area
    onChange(locationValue); // Call the onChange function with the concatenated value
  };

  return (
    <div>
      <Select
        placeholder="Select a city"
        options={southAfricaData.map((city) => ({
          value: city.city,
          label: city.city,
        }))}
        value={
          selectedCity ? { value: selectedCity, label: selectedCity } : null
        }
        onChange={handleCityChange}
      />
      {selectedCity && (
        <Select
          placeholder="Select an area"
          options={
            southAfricaData
              .find((city) => city.city === selectedCity)
              ?.areas.map((area) => ({ value: area, label: area })) || []
          }
          value={
            selectedArea ? { value: selectedArea, label: selectedArea } : null
          }
          onChange={handleAreaChange}
          isDisabled={!selectedCity} // Disable area selection if no city is selected
          className="mt-2"
        />
      )}
    </div>
  );
};

export default CountrySelect;
