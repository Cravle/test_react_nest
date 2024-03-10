import { forwardRef } from "react";
import { IMaskInput } from "react-imask";
import { PHONE_NUMBER_MASK } from "../constants/masks";

interface PhoneNumberFieldProps {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
}

export const PhoneNumberField = forwardRef<
  HTMLInputElement,
  PhoneNumberFieldProps
>(function PhoneNumberField({ onChange, ...props }, ref) {
  return (
    <IMaskInput
      {...props}
      mask={PHONE_NUMBER_MASK}
      definitions={{
        "#": /[1-9]/,
      }}
      inputRef={ref}
      onAccept={(value: any) =>
        onChange({ target: { name: props.name, value } })
      }
      overwrite
    />
  );
});
