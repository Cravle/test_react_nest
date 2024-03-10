import { IMaskInput } from "react-imask";
import { PHONE_NUMBER_MASK } from "../constants/masks";

export const PhoneNumberText = () => (
  <IMaskInput mask={PHONE_NUMBER_MASK} disabled />
);
