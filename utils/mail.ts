import { createTransport, getTestMessageUrl } from "nodemailer";
import postmarkTransport from "nodemailer-postmark-transport";

//dev
const transport = createTransport({
  host: process.env.MAIL_HOST,
  port: Number(process.env.EMAIL_PORT) || 0,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

//prod
const mailTransport = createTransport(
  postmarkTransport({
    auth: {
      apiKey: process.env.POSTMARK_API,
    },
  })
);

function makeANiceEmail(text: string) {
  return `
      <div className="email" style="
        border: 1px solid black;
        padding: 20px;
        font-family: sans-serif;
        line-height: 2;
        font-size: 20px;
      ">
        <h2>Hello!</h2>
        <p>${text}</p>
        <p>😘, Madeline</p>
      </div>
    `;
}

export async function sendPasswordResetEmail(resetToken: string, to: string) {
  const email = {
    to,
    from: "madeline@pick-em.club",
    subject: "Your password reset token!",
    html: makeANiceEmail(`Your Password Reset Token is here!
        <a href="${process.env.FRONTEND_URL}/reset?token=${resetToken}">Click Here to reset</a>
      `),
  };
  // email the user a token
  if (process.env.MAIL_USER.includes("ethereal.email")) {
    const info = await transport
      .sendMail(email)
      .then(() =>
        console.log(
          `💌 Message Sent!  Preview it at ${getTestMessageUrl(info)}`
        )
      )
      .catch((error) =>
        console.error("There was an error while sending the email:", error)
      );
  } else {
    await mailTransport
      .sendMail(email)
      .then(() => console.log("💌 Email sent successfully!"))
      .catch((error) =>
        console.error("There was an error while sending the email:", error)
      );
  }
}
