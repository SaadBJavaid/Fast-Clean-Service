import { render } from "@react-email/render";
import sgMail from "../lib/sgMail";

const sendEmail = async (sendOptions: any, Template: any, props: any) => {
  const html = await render(<Template {...props} />);

  return await sgMail.send({ ...sendOptions, html });
};

export default sendEmail;