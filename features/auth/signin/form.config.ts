import { usePost } from "@/features/api";
import {
  passwordMessage,
  passwordRegex,
} from "@/features/helper/common-string";
import * as yup from "yup";


export const SignInSchema = yup.object({
  email: yup.string().label("Email").min(1).max(50).required(),
  password: yup
    .string()
    .label("Password")
    .min(8)
    .required()
    .matches(passwordRegex, passwordMessage),
});

export type SignInRequest = yup.InferType<typeof SignInSchema>;

export const InitialValue: SignInRequest = {
  email: "",
  password: "",
};

export type SignInResponse = {
  id: number,
  code: string,
  message: string,
  access_token: string,
  role: string,
  refreshToken: string,
};

export type Data = {
  id: number;
  message: string;
  access_token: string;
  // refreshToken: string;
  // user: User;
  role: string;
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
export type SignInApiResponse = ReturnType<
  typeof usePost<SignInRequest, SignInResponse>
>;

export type SignInApiError = SignInApiResponse["error"];