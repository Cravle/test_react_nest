import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Button, TextField, Typography, styled } from "@mui/material";
import { Controller, useForm } from "react-hook-form";

import * as yup from "yup";
import { PhoneNumberField } from "./PhoneNumberField";
import { CreateUserDto } from "../api/users/createUser";
import { RootStore, useAppDispatch } from "../redux/store";
import { createUsersThunk } from "../redux/thunks/users/createUserThunk";
import { useSelector } from "react-redux";

const schema = yup.object({
  name: yup.string().required().max(32),
  phoneNumber: yup.string().required(),
  password: yup
    .string()
    .required()
    .min(6)
    .max(12)
    .matches(/^(?=.*[A-Z])(?=.*[\W_])[A-Za-z\d\W_]{6,12}$/, {
      message:
        "Password must be 6-12 characters long and contain at least one uppercase letter and one special character",
    }),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match"),
});

export type UserFormValues = yup.InferType<typeof schema>;

export const UserForm = () => {
  const dispatch = useAppDispatch();
  const errorMsg = useSelector((state: RootStore) => state.users.errorMsg);

  const { control, handleSubmit } = useForm<UserFormValues>({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (data: UserFormValues) => {
    const unmarkedPhoneNumber = data.phoneNumber.replace("-", "");
    const createUserDto: CreateUserDto = {
      name: data.name,
      phoneNumber: unmarkedPhoneNumber,
      password: data.password,
      maskedPhoneNumber: data.phoneNumber,
    };

    dispatch(createUsersThunk(createUserDto));
    control._reset();
  };
  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <FormItem>
        <Controller
          name="name"
          control={control}
          rules={{ required: true }}
          render={({ field, fieldState }) => {
            return (
              <TextField
                variant="outlined"
                label="Name"
                {...field}
                error={!!fieldState.error?.message}
                helperText={fieldState.error?.message}
              />
            );
          }}
        />
      </FormItem>

      <FormItem>
        <Controller
          name="phoneNumber"
          control={control}
          rules={{ required: true }}
          render={({ field, fieldState }) => {
            return (
              <TextField
                variant="outlined"
                label="Phone Number"
                {...field}
                error={!!fieldState.error?.message}
                helperText={fieldState.error?.message}
                InputProps={{
                  inputComponent: PhoneNumberField as any,
                }}
              />
            );
          }}
        />
      </FormItem>

      <FormItem>
        <Controller
          name="password"
          control={control}
          rules={{ required: true }}
          render={({ field, fieldState }) => {
            return (
              <TextField
                variant="outlined"
                label="Password"
                type="password"
                {...field}
                error={!!fieldState.error?.message}
                helperText={fieldState.error?.message}
              />
            );
          }}
        />
      </FormItem>

      <FormItem>
        <Controller
          name="confirmPassword"
          control={control}
          rules={{ required: true }}
          render={({ field, fieldState }) => {
            return (
              <TextField
                variant="outlined"
                label="Confirm Password"
                type="password"
                {...field}
                error={!!fieldState.error?.message}
                helperText={fieldState.error?.message}
              />
            );
          }}
        />
      </FormItem>
      <Box visibility={errorMsg ? "initial" : "hidden"}>
        <Typography variant="body2" color="error">
          {errorMsg}
        </Typography>
      </Box>
      <FormItem>
        <Button type="submit" variant="contained">
          Submit
        </Button>
      </FormItem>
    </StyledForm>
  );
};

const StyledForm = styled("form")({
  marginTop: 16,
  display: "flex",
  flexDirection: "column",
  width: 194,
});

const FormItem = styled("div")({
  width: "fit-content",
  marginTop: 12,
});
