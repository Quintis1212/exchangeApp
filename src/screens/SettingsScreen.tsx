import { Fragment } from "react";
import { ratesWithCZK } from "../api/cnb";
import CurrencyPicker from "../components/CurrencyPicker";
import SettingsRow from "../components/SettingsRow";
import SettingsSection from "../components/SettingsSection";
import { INFO_ROWS } from "../constants";
import { useBase } from "../context/BaseCurrencyContext";
import { useCNBRates } from "../hooks/useCNBQueries";
import { AccentText, ScrollContainer } from "../ui/primitives";

export default function SettingsScreen() {
  const { base, setBase } = useBase();
  const { data } = useCNBRates();

  return (
    <ScrollContainer>
      <SettingsSection label="Base Currency">
        <SettingsRow label="Compare rates against">
          <CurrencyPicker
            selected={base}
            rates={data ? ratesWithCZK(data) : []}
            onSelect={setBase}
          />
        </SettingsRow>
      </SettingsSection>

      <SettingsSection label="About">
        {INFO_ROWS.map((row, i) => (
          <Fragment key={row.label}>
            <SettingsRow label={row.label}>
              <AccentText>{row.value}</AccentText>
            </SettingsRow>
          </Fragment>
        ))}
      </SettingsSection>
    </ScrollContainer>
  );
}
