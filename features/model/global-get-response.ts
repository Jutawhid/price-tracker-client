import { TData } from "../product/product-questions-answers/product-question-answerr.component";

export type TGlobalGetResponse = {
  code: string;
  success: boolean;
  message: string;
  data: null | [] | object | TData;
};
