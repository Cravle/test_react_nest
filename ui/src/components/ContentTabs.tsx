import { Box, Tab, Tabs } from "@mui/material";

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export interface ContentTabsProps {
  value: number;
  handleChange: (event: React.SyntheticEvent, newValue: number) => void;
  items: string[];
}

export const ContentTabs = ({
  handleChange,
  items,
  value,
}: ContentTabsProps) => {
  return (
    <Box sx={{ borderBottom: 1, borderTop: 1, borderColor: "divider" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="basic tabs example"
      >
        {items.map((tab, index) => (
          <Tab label={tab} key={tab + index} {...a11yProps(index)} />
        ))}
      </Tabs>
    </Box>
  );
};
