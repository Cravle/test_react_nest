import { useState } from "react";
import { ContentTabs } from "../components/ContentTabs";
import { CustomTabPanel } from "../components/CustomTabPanel";
import { UserForm } from "../components/UserForm";
import { UserList } from "../components/UserList";
import { styled } from "@mui/material";

const TABS = [
  { label: "form", Component: UserForm },
  { label: "user", Component: UserList },
];

export const HomePage = () => {
  const [value, setValue] = useState(0);

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Root>
      <ContentTabs
        value={value}
        handleChange={handleChange}
        items={TABS.map((tab) => tab.label)}
      />
      {TABS.map((tab, index) => (
        <CustomTabPanel key={tab.label + index} index={index} value={value}>
          {value === index && <tab.Component />}
        </CustomTabPanel>
      ))}
    </Root>
  );
};
const Root = styled("div")({});
