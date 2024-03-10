import { CircularProgress, styled } from "@mui/material";
import { createPortal } from "react-dom";

export const PageLoader = () => {
  return (
    <>
      {createPortal(
        <Root className="page-loader">
          <CircularProgress />
        </Root>,
        document.getElementById("root")!,
      )}
    </>
  );
};

const Root = styled("div")({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 9999,
});
