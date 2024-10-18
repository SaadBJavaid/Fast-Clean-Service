"use client";
import { Box } from "@mui/material";
import useMultiStepForm from "../../../hooks/useMultiStepForm";
import { useValidation } from "../../../contexts/ValidationContext";
import {
    AdditionalContainer,
    AdditionalContent,
    AdditionalName,
    AdditionalNoOption,
    AdditionalOption,
    AdditionalOptionText,
} from "../../mui/BookingFormPackages";
import { useTheme } from "../../../contexts/themeContext";
import Image from "next/image";
import CheckMark from "../../../../public/bookingFormIcons/CheckMark.svg";
import { calculateFilter } from "../../../lib/colorFilters";

const AdditionalOptionsBox = ({ color, selected, name, price, options = [], onClick }) => {
    const { theme } = useTheme();

    return (
        <Box>
            <AdditionalOption
                onClick={onClick}
                sx={{
                    backgroundColor: selected
                        ? color
                        : theme.palette.mode === "dark"
                            ? "transparent"
                            : "#ffffff",
                }}
            >
                <AdditionalOptionText selected={selected}>{name}</AdditionalOptionText>
                <AdditionalOptionText variant="p">+ €{price}</AdditionalOptionText>
            </AdditionalOption>
            {selected && options.length > 0 && (
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "8px",
                        padding: "0 1.2rem",
                        "@media (max-width: 600px)": {
                            padding: "0.5rem 1.2rem",
                            gap: 0,
                        },
                    }}
                >
                    {options.map((option, index) => (
                        <Box
                            key={index}
                            sx={{
                                display: "flex",
                                gap: "1rem",
                                alignItems: "center",
                                padding: "0 5.5rem",
                                "@media (max-width: 600px)": {
                                    padding: 0,
                                },
                            }}
                        >
                            <Image
                                src={CheckMark}
                                alt="Included Option"
                                width={12}
                                height={12}
                                style={{
                                    filter:
                                        theme.palette.mode === "dark"
                                            ? "brightness(0) invert(1)"
                                            : calculateFilter(color),
                                }}
                            />
                            <AdditionalOptionText variant="p">{option}</AdditionalOptionText>
                        </Box>
                    ))}
                </Box>
            )}
        </Box>
    );
};

const AdditionalOptions = () => {
    const form = useMultiStepForm();
    const selectedPackage = form.formData.selectedPackage;
    const { updateValidation } = useValidation();
    const pkg = form.formData.selectedPackage;

    const handleClick = (optionName) => {
        const selectedOptions = form.formData.selectedAdditionalOptions || [];
        const newSelectedOptions = selectedOptions.includes(optionName)
            ? selectedOptions.filter((option) => option !== optionName)
            : [...selectedOptions, optionName];

        form.updateFormData({
            selectedAdditionalOptions: newSelectedOptions,
        });
        updateValidation(newSelectedOptions.length > 0);
    };

    return (
        <AdditionalContainer sx={{ border: `0.4px solid ${form?.color}` }}>
            {pkg &&
                Object.keys(pkg?.additionalOptions)
                    .filter((category) => category !== "detailing") // Exclude detailing options
                    .map((category, index) => (
                        <Box key={index} sx={{ width: "100%" }}>
                            {/* Render the category name */}
                            <AdditionalName variant="h5">{category.toUpperCase()}</AdditionalName>
                            <AdditionalContent>
                                {/* If the category has options, display them */}
                                {pkg.additionalOptions[category]?.length !== 0 ? (
                                    pkg.additionalOptions[category].map((option, optionIndex) => (
                                        <AdditionalOptionsBox
                                            key={optionIndex}
                                            name={option.name}
                                            price={option.additionalCost}
                                            color={form.color}
                                            options={option.options} // Passing the inner options for each category
                                            selected={form.formData.selectedAdditionalOptions?.includes(
                                                option.name
                                            )}
                                            onClick={() => handleClick(option.name)}
                                        />
                                    ))
                                ) : (
                                    <AdditionalNoOption>No Add ons</AdditionalNoOption>
                                )}
                            </AdditionalContent>
                        </Box>
                    ))}
        </AdditionalContainer>
    );
};

export default AdditionalOptions;
