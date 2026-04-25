import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { email } = req.body;

  try {
    const data = await resend.emails.send({
      from: 'GIGILUKO <welcome@gigiluko.com>',
      to: [email],
      subject: 'Welcome to GIGILUKO 2026',
      html: `<div style="background-color:#0c001c;color:white;padding:40px;text-align:center;border-radius:20px;font-family:sans-serif;">
              <h1 style="color:#a855f7;">GIGILUKO</h1>
              <p>Thanks for joining the waitlist for Stuttgart 2026.</p>
              <p style="color:#666;font-size:12px;margin-top:40px;">Digitalizing the scene.</p>
             </div>`
    });
    return res.status(200).json(data);
  } catch (error) {
    return res.status(400).json(error);
  }
}
