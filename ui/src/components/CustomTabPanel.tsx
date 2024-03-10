import { ReactNode } from "react";

export interface TabPanelProps {
  children?: ReactNode;
  index: number;
  value: number;
}

export const CustomTabPanel = ({ children, index, value }: TabPanelProps) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      key={value + index}
    >
      {value === index && <>{children}</>}
    </div>
  );
};
