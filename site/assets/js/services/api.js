import "https://cdn.jsdelivr.net/npm/emailjs-com@2/dist/email.min.js";
import {
  USER_POST_USER_ID,
  USER_POST_SERVICE_ID,
  USER_POST_CONTACT_TEMPLATE_ID,
} from "../keys.js";

emailjs.init(USER_POST_USER_ID);

const sendUserDetails = (body) => {
  return emailjs.send(
    USER_POST_SERVICE_ID,
    USER_POST_CONTACT_TEMPLATE_ID,
    body
  );
};
export default {
  sendUserDetails,
};
