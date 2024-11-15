import { usePost } from "@/features/api";
import {
  passwordMessage,
  passwordRegex,
} from "@/features/helper/common-string";
import * as yup from "yup";


export const SignUpSchema = yup.object({
  email: yup.string().label("Email").min(1).max(50).required(),
  name: yup.string().label("Name").min(1).max(50).required(),
  password: yup
    .string()
    .label("Password")
    .min(8)
    .required()
    .matches(passwordRegex, passwordMessage),
});

export type SignupRequest = yup.InferType<typeof SignUpSchema>;

export const InitialValue: SignupRequest = {
  email: "",
  password: "",
  name: "",
};

export type SignupResponse = {
  code: string;
  isSuccess: boolean;
  message: string;
  data: Data;
};

export type Data = {
  message: string;
  accessToken: string;
  tokenType: string;
  refreshToken: string;
  user: User;
};

export type User = {
  _id: string;
  id: number;
  name: string;
  email: string;
  phone: string;
  isEmailVerified: boolean;
  isPhoneVerified: boolean;
  createdAt: Date;
  updatedAt: Date;
  profileImage: string;
  deviceToken: string;
};
export type SignupApiResponse = ReturnType<
  typeof usePost<SignupRequest, SignupResponse>
>;

export type SignUpApiError = SignupApiResponse["error"];