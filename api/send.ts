import { Resend } from 'resend';

// Vercel zieht sich den Key automatisch aus den Environment Variables
const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: any, res: any) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    const { email } = req.body;

    if (!email) {
        return res.status(400).json({ error: 'Email is required' });
    }

    try {
        const data = await resend.emails.send({
            from: "GIGILUKO <hello@gigiluko.com>",
            to: email,
            subject: "Du bist auf der Liste! 🚀 GIGILUKO Waitlist",
            html: `
                <div style="font-family: 'Helvetica Neue', Arial, sans-serif; background-color: #05000a; color: #ffffff; padding: 40px 20px; border-radius: 16px; max-width: 500px; margin: 0 auto;">
                    <p style="font-size: 18px; font-weight: bold; text-align: center;">Willkommen auf der Waitlist! 🚀</p>
                    
                    <p style="color: #e5e7eb; font-size: 15px; line-height: 1.6; margin-top: 24px;">Hey!</p>
                    <p style="color: #e5e7eb; font-size: 15px; line-height: 1.6;">Du bist offiziell auf der GIGILUKO Waitlist. Du gehörst zu den Ersten, die erfahren, wenn wir das Nachtleben revolutionieren.</p>
                    <p style="color: #e5e7eb; font-size: 15px; line-height: 1.6;">Wir arbeiten im Hintergrund auf Hochtouren an der App. Sobald es losgeht und du dir dein Profil sichern kannst, bekommst du von uns als Erstes Bescheid.</p>

                    <p style="text-align:center; margin:40px 0;">
                      <span style="background:linear-gradient(135deg,#A855F7,#EC4899); color:white; padding:14px 32px; border-radius:24px; font-weight:700; font-size:16px; display: inline-block; letter-spacing: 0.5px;">
                        Status: VIP Waitlist 🔒
                      </span>
                    </p>

                    <p style="color: #e5e7eb; font-size: 15px; margin-top: 30px;">Bis bald beim Feiern 🥂<br>Dein GIGILUKO Team</p>

                    <hr style="border:none; border-top:1px solid #333; margin:32px 0 16px;">
                    <p style="color:#9ca3af; font-size:11px; text-align:center;">
                        GIGILUKO Technologies · Stuttgart, Deutschland<br>hello@gigiluko.com
                    </p>
                </div>
            `
        });

        return res.status(200).json({ success: true, data });
    } catch (error) {
        console.error("Fehler beim Senden der Waitlist-Mail:", error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}
