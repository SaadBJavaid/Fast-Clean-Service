import { Box, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";

import { packages } from "../../../app/autocare/data";
import { useTheme } from "../../../contexts/themeContext";
import useMultiStepForm from "../../../hooks/useMultiStepForm";
import { useValidation } from "../../../contexts/ValidationContext";
import Image from "next/image";
import bg from "../../../../public/voor1.jpg";
import CheckMark from "../../../../public/bookingFormIcons/CheckMark.svg";
import { AutoCarePackageSubheading, BookingFormSubHeading } from "../../mui/BookingFormPackages";
import { AutoTab, AutoTabList } from "../../mui/AutoCarePkgs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { type } from "os";

const colors = ["#087300", "#005BAC", "#BA8B1D"];

const AutocarePackages = () => {
  const { theme } = useTheme();
  const [selectedPackage, setSelectedPackage] = useState(null);
  const form = useMultiStepForm();
  const { updateValidation } = useValidation();

  useEffect(() => {
    updateValidation(!!selectedPackage);
  }, [selectedPackage, updateValidation]);

  const handleClick = (type, pkg) => {
    if (pkg.id !== selectedPackage) {
      setSelectedPackage(pkg.id);
      form.updateFormData({ packageType: type, selectedPackage: pkg });
    }
  };

  return (
    <Box>
      {Object.keys(packages).map((key, index) => (
        <Box key={index}>
          <AutoCarePackageSubheading>{key.toLocaleUpperCase()}</AutoCarePackageSubheading>
          <Box
            sx={{
              marginBottom: "2rem",
              display: "flex",
              justifyContent: "center",
              gap: "1.5rem",
              "@media (max-width: 600px)": {
                "& > div": {
                  flex: "1 1 100%",
                  maxWidth: "100%",
                },
              },
            }}
          >
            {packages[key].map((pkg, index) => (
              <AutocarePackagesCard
                image={bg}
                color={colors[index]}
                packageType={pkg.name}
                descriptionItems={pkg.packages}
                price={pkg.price}
                description={pkg.description}
                selected={form.formData.selectedPackage?.id === pkg.id}
                onClick={() => handleClick(key, pkg)}
                key={pkg.id}
              />
            ))}
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default AutocarePackages;

const AutocarePackagesCard = ({ description, price, packageType, descriptionItems, onClick, selected = false }) => {
  const formattedPrice = Number(price.replace("€", "").trim()).toFixed(2);

  return (
    <Box
      onClick={onClick}
      sx={{
        position: "relative",
        padding: "24px 35px",
        width: "207px",
        borderRadius: "15px",
        boxShadow: "0px 4px 30.1px rgba(0, 0, 0, 0.25)",
        border: `1px solid ${selected ? "#1C79CC" : "#38E274"}`,
      }}
    >
      <Typography
        sx={{
          fontFamily: "Unbounded",
          color: "#000000",
          fontSize: "1.8rem",
          fontWeight: "regular",
        }}
      >
        {packageType}
      </Typography>
      <Typography
        sx={{
          fontFamily: "Unbounded",
          color: "#525252",
          fontSize: "0.9rem",
          fontWeight: "light",
        }}
      >
        {description}
      </Typography>
      <Box>
        <Typography
          sx={{
            fontFamily: "Unbounded",
            color: "#78D53F",
            fontSize: "2.6rem",
            lineHeight: "2.4rem",
            fontWeight: "semibold",
          }}
        >
          € {formattedPrice}
        </Typography>

        <Box
          sx={{
            marginTop: "2rem",
          }}
        >
          {descriptionItems &&
            descriptionItems.map((option, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  gap: "7px",
                  alignItems: "center",
                }}
              >
                <Image src={CheckMark} alt="Included Option" width={14} height={14} />
                <Typography
                  sx={{
                    fontFamily: "Unbounded",
                    fontSize: "0.7rem",
                    fontWeight: "light",
                    color: "#525252",
                    lineHeight: "1.5rem",
                  }}
                >
                  {option}
                </Typography>
              </Box>
            ))}
        </Box>
      </Box>
    </Box>
  );
};


export const AutoTabPackage = ({ pkg, index, color, onClick = undefined }) => {
  const [additional, setAdditional] = useState(false);
  const [duration, setDuration] = useState(false);
  const [frequency, setFrequency] = useState(false);

  return (
      <AutoTab sx={{ width: '100%', maxWidth: '37rem' }}>
          <div className="tab__side tab__side--front" style={{ position: "relative" }} onClick={onClick}>
              <div className={`tab__picture tab__picture--${index + 1}`}></div>
              <Typography className="heading">
                  <span className={`heading--span heading--span-${index + 1}`}>{pkg.name}</span>
              </Typography>
              <Box sx={{ marginBottom: "8px" }}>
                  <Typography sx={{ color: "primary.text1 !important", fontSize: "1.2rem !important", textAlign: "center", transform: "translateY(10px)" }}>
                      FROM
                  </Typography>
                  <Typography sx={{ fontSize: "4rem !important", textAlign: "center", fontWeight: "900" }}>
                      {pkg.price}
                  </Typography>
                  <Typography sx={{ color: "primary.text1 !important", fontSize: "1.5rem !important", textAlign: 'center' }}>
                      {pkg.duration}
                  </Typography>
              </Box>

              <AutoTabList sx={{
                  padding: "8px 0",
                  margin: "0 2rem",
                  width: "100%",
                  minHeight: "210px", height: "100%",
                  justifyContent: "flex-start",
              }}>
                  {pkg.packages.map((item, index) => (
                      <Box key={item} sx={{ width: "100%", display: 'flex', justifyContent: "", padding: '2px 0' }}>
                          <FontAwesomeIcon
                              icon={faCheckCircle}
                              style={{
                                  color: color,
                                  marginRight: "1rem",
                                  transform: "translateY(2px)",
                              }}
                          />
                          <Typography sx={{ textAlign: "left !important" }}>
                              {item}
                          </Typography>
                      </Box>
                  ))}
              </AutoTabList>

              {pkg.durationOptions && onClick === undefined && (
                  <Box sx={{ borderTop: "1px solid #00000020", margin: "0 2rem", padding: "2rem 0 1rem" }}>
                      <Typography onClick={() => setDuration(!duration)} sx={{ fontSize: "1.5rem", textAlign: "center", fontWeight: "900" }}>
                          Duration options
                          {duration ? <FontAwesomeIcon
                              icon={faChevronUp}
                              style={{ marginLeft: "6px" }}
                          />
                              : <FontAwesomeIcon
                                  icon={faChevronDown}
                                  style={{ marginLeft: "6px" }}
                              />
                          }
                      </Typography>
                      {duration && (
                          <AutoTabList sx={{
                              padding: "8px 0",
                              margin: "0",
                              width: "100%"
                          }}>
                              {pkg.durationOptions?.map((item) => (
                                  <Box key={item.duration} sx={{ width: "100%", display: 'flex', justifyContent: "", padding: "4px 0" }}>
                                      <Typography sx={{
                                          textAlign: "left !important",
                                          textWrap: "nowrap",
                                      }}>
                                          {item.duration}
                                      </Typography>
                                      <Typography sx={{ textAlign: "right !important", width: "100%", fontWeight: "bold !important", color: "primary.accent" }}>
                                          {item.additionalCost === 0 ? "" : `+ `}
                                          € {item.additionalCost.toFixed(1)}
                                      </Typography>
                                  </Box>
                              ))}
                          </AutoTabList>
                      )}
                  </Box>
              )}

              {pkg.cleaningFrequencyOptions && onClick === undefined && (
                  <Box sx={{ borderTop: "1px solid #00000020", margin: "0 2rem", padding: "2rem 0 1rem" }}>
                      <Typography onClick={() => setFrequency(!frequency)} sx={{ fontSize: "1.5rem", textAlign: "center", fontWeight: "900" }}>
                          Cleaning Frequency
                          {frequency ? <FontAwesomeIcon
                              icon={faChevronUp}
                              style={{ marginLeft: "1rem" }}
                          />
                              : <FontAwesomeIcon
                                  icon={faChevronDown}
                                  style={{ marginLeft: "6px" }}
                              />
                          }
                      </Typography>
                      {frequency && (
                          <AutoTabList sx={{
                              padding: "8px 0",
                              margin: "0",
                              width: "100%"
                          }}>
                              {pkg.cleaningFrequencyOptions?.map((item) => (
                                  <Box key={item.frequency} sx={{ width: "100%", display: 'flex', justifyContent: "space-between", padding: '4px 0', textWrap: "nowrap" }}>
                                      <Typography sx={{
                                          textAlign: "left !important"
                                      }}>
                                          {item.frequency}
                                      </Typography>
                                      <Typography sx={{ textAlign: "right !important", color: "primary.accent", fontWeight: "bold", textWrap: 'nowrap' }}>
                                          {item.additionalCost === 0 ? "" : `+ `}
                                          € {item.additionalCost.toFixed(1)}
                                      </Typography>
                                  </Box>
                              ))}
                          </AutoTabList>
                      )}
                  </Box>
              )}
              {
                  onClick === undefined && (
                      <>

              {pkg.additionalOptions.length > 0 ? (
                  <Box sx={{ borderTop: "1px solid #00000020", margin: "0 2rem", padding: "2rem 0 1rem" }}>
                      <Typography onClick={() => setAdditional(!additional)} sx={{ fontSize: "1.5rem", textAlign: "center", fontWeight: "900" }}>
                          Additional Options
                          {additional ? <FontAwesomeIcon
                              icon={faChevronUp}
                              style={{ marginLeft: "1rem" }}
                          />
                              : <FontAwesomeIcon
                                  icon={faChevronDown}
                                  style={{ marginLeft: "6px" }}
                              />
                          }
                      </Typography>

                      {
                          additional && (
                              <AutoTabList sx={{
                                  padding: "8px 0",
                                  margin: "0",
                                  width: "100%"
                              }}>
                                  {pkg.additionalOptions?.map((item) => (
                                      <Box key={item.option} sx={{ width: "100%", display: 'flex', justifyContent: "space-between", padding: "4px 0" }}>
                                          <Typography sx={{
                                              textAlign: "left"
                                          }}>
                                              {item.option}
                                          </Typography>
                                          <Typography sx={{ textAlign: "right", color: "primary.accent", fontWeight: "bold", textWrap: 'nowrap' }}>
                                              {item.additionalCost === 0 ? "" : `+ `}
                                              € {item.additionalCost.toFixed(1)}
                                          </Typography>
                                      </Box>
                                  ))}
                              </AutoTabList>
                          )
                      }
                  </Box>
              ) : (
                  <Box sx={{ borderTop: "1px solid #00000020", margin: "0 2rem", padding: "2rem 0 1rem" }}>
                      <Typography sx={{ fontSize: "1.5rem", textAlign: "center", fontWeight: "900", color: '#00000050' }}>
                          Additional Options
                          {additional ? <FontAwesomeIcon
                                  icon={faChevronUp}
                                  style={{ marginLeft: "1rem" }}
                              />
                              : <FontAwesomeIcon
                                  icon={faChevronDown}
                                  style={{ marginLeft: "6px" }}
                              />
                          }
                      </Typography>
                  </Box>
              )}
                      </>
                  )
              }
          </div>
      </AutoTab>
  )
}
