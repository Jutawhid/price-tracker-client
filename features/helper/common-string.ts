import { DateTime } from "luxon";

export const errorMessage: string = "Something went wrong. Please try again.";
export const requiredMessage = "${label} is required";
export const passwordRegex: RegExp =
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{4,}$/;
export const passwordMessage: string =
  "Your password must be at least 4 characters long and include at least one digit, one lowercase letter, one uppercase letter, and one special character (! @ $ % ^ & *). This will help ensure the security of your password.";
export const userNameRegex: string = "^[a-z][a-z0-9]*$";
export const bdPhoneNumber: RegExp = /^(\\+?880|0)1[3-9][0-9]{8}$/;
export const passwordMinLength: number = 6;
export const passwordMaxLength: number = 50;
export const phoneNumberMaxLength: number = 20;
export const maxInputFieldLength: number = 100;
export const maxTextAreaLength: number = 255;
export const formDateFormat: string = "YYYY-MM-DD";
export const today: string = DateTime.now().toFormat(formDateFormat);
export const currency: string = "BDT";
export const productNameMaxLength: number = 200;
export const webUrlPatternRegex: RegExp =
  /^(https?:\/\/)?([A-Za-z0-9\-]+\.){1,2}[A-Za-z]{2,}(:\d{1,5})?(\/\S*)?$/;
export const defaultQueryParams = { page: 1, size: 10, statusId: 1 };
export const defaultAuthQueryParams = {
  currentPage: 1,
  rowsPerPage: 10,
  statusId: 1,
};
export const urlPathRegex: RegExp = /^\/([a-zA-Z0-9\-._~%!$&'()*+,;=:@]+\/?)*$/;
export const urlPathMessage: string =
  'Please enter a valid path starting with "/"';
export const codeRegex: RegExp = /^[a-zA-Z][a-zA-Z0-9_]*$/;
export const codeMessage: string =
  'Should start with alphabets and can only contain letters and numbers and underscore "_"';

export const headers = [
  "Name",
  "Seller Name",
  "Image",
  "Qty",
  "Amount",
  "Order Status",
];
