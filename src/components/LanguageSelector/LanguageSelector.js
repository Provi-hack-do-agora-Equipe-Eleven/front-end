import "./LanguageSelector.css";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { MenuItem, Select } from "@mui/material";

const LanguageSelector = () => {
  const {
    t,
    i18n: { changeLanguage, language },
  } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState("us");
  const [open, setOpen] = useState(false);

  const countryLangDict = {
    us: "en",
    br: "pt",
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleChange = (e) => {
    setSelectedLanguage(e);
    changeLanguage(countryLangDict[e.toLowerCase()]);
  };

  function getKeyByValue(object, value) {
    return Object.keys(object).find((key) => object[key] === value);
  }

  useEffect(() => {
    if (language) {
      const userLangExists = getKeyByValue(
        countryLangDict,
        language.slice(0, 2)
      );
      if (userLangExists) {
        setSelectedLanguage(userLangExists);
      }
    }
    // eslint-disable-next-line
  }, []);

  return (
    <div className="select-language">
      <label
        id="demo-controlled-open-select-label"
        className="lang-label"
        onClick={handleOpen}
      >
        <img src={`countries-flags/${selectedLanguage}.svg`} alt="" />
      </label>
      <Select
        className="hide"
        labelId="demo-controlled-open-select-label"
        id="demo-controlled-open-select"
        open={open}
        value={selectedLanguage}
        onClose={handleClose}
        onOpen={handleOpen}
        onChange={(e) => handleChange(e.target.value)}
      >
        {Object.keys(countryLangDict).map((country) => {
          return (
            <MenuItem key={country} value={country}>
              <img
                src={`countries-flags/${country}.svg`}
                alt={country + " flag"}
              />
            </MenuItem>
          );
        })}
      </Select>
    </div>
  );
};

export default LanguageSelector;
