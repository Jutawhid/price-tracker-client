import { Api } from "@/features/api/endpoints";
import axios from "axios";
import { SignupRequest } from "./form.config";

export function useSignUp() {
  const singUpMutation = async (data: SignupRequest) => {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_CUSTOMER_SERVICE_API_URL}${Api.SignUp}`,
      data,
    );

    if (!response.data) {
      throw new Error("Mutation failed");
    }

    return response.data;
  };
  return {
    singUpMutation,
  };
}
