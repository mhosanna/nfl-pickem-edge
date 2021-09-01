import { createTransport, getTestMessageUrl } from "nodemailer";

const transport = createTransport({
  host: process.env.MAIL_HOST,
  port: Number(process.env.EMAIL_PORT) || 0,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

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
  // email the user a token
  const info = await transport.sendMail({
    to,
    from: "madeline@pick-em.club",
    subject: "Your password reset token!",
    html: makeANiceEmail(`Your Password Reset Token is here!
        <a href="${process.env.FRONTEND_URL}/reset?token=${resetToken}">Click Here to reset</a>
      `),
  });
  if (process.env.MAIL_USER.includes("ethereal.email")) {
    console.log(`💌 Message Sent!  Preview it at ${getTestMessageUrl(info)}`);
  }
}
