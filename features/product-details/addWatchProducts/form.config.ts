import { usePost } from "@/features/api";
import * as yup from "yup";


export const AddWatchSchema = yup.object({
  desired_price: yup.string().label("Desired Price").min(1).max(50).required(),
  label: yup.string().label("Label").nullable(),
  is_notify: yup.boolean().required(),
});

export type AddWatchRequest = yup.InferType<typeof AddWatchSchema>;

export const InitialValue: AddWatchRequest = {
  // product_id: "",
  desired_price: "",
  label: "",
  is_notify: true,
};

export type AddWatchResponse = {
  code: string;
  isSuccess: boolean;
  message: string;
  data: Data;
};

export type Data = {
  access_token: string;
  role: string;
  // refreshToken: string;
  // user: User;
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
export type AddWatchApiResponse = ReturnType<
  typeof usePost<AddWatchRequest, AddWatchResponse>
>;

export type AddWatchApiError = AddWatchApiResponse["error"];