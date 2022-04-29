import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { MenuItem, Select } from "@mui/material";
import "../styles/App.css";

const App = () => {
  const {
    t,
    i18n: { changeLanguage, language },
  } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState("us");
  const [open, setOpen] = useState(false);

  const countryLangDict: any = {
    us: "en",
    br: "pt",
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleChange = (e: any) => {
    console.log("handleChangeEvent", e);
    setSelectedLanguage(e);
    changeLanguage(countryLangDict[e.toLowerCase()]);

    console.log(
      "handleChange changeLang value",
      countryLangDict[e.toLowerCase()]
    );
  };

  function getKeyByValue(object: any, value: string) {
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
    <div>
      <h1>{t("title")}</h1>
      <div className="select-language">
        <label
          id="demo-controlled-open-select-label"
          className="lang-label"
          onClick={handleOpen}
          style={{
            padding: "4px",
          }}
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
    </div>
  );
};

export default App;
