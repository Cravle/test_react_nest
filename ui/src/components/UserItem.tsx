import { Box, Paper, Typography, styled } from "@mui/material";
import { IUser } from "../types/user";

export interface UserItemProps {
  item: IUser;
}

export const UserItem = ({ item }: UserItemProps) => {
  return (
    <Root>
      <Content>
        <Box display="flex" alignItems={"baseline"}>
          <Typography variant="h6">User name:</Typography>
          <Typography variant="body2" ml={"4px"}>
            {item.name}
          </Typography>
        </Box>
        <Box display="flex" alignItems={"baseline"}>
          <Typography variant="h6">Phone number:</Typography>
          <Typography variant="body2" ml={"4px"}>
            {item.maskedPhoneNumber}
          </Typography>
        </Box>
      </Content>
    </Root>
  );
};

const Content = styled("div")({
  padding: 16,
});

const Root = styled(Paper)({
  width: 400,
});
