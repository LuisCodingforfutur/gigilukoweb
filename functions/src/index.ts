import { onCall, HttpsError } from "firebase-functions/v2/https";
import * as admin from "firebase-admin";
import { Resend } from "resend";

admin.initializeApp();

// HIER DEINEN RESEND API KEY EINTRAGEN (aus dem Resend Dashboard)
const resend = new Resend("re_DEIN_API_KEY_HIER_EINTRAGEN");

// ==========================================
// 1. E-MAIL BESTÄTIGEN (VERIFICATION)
// ==========================================
export const sendCustomVerificationEmail = onCall(async (request) => {
    if (!request.auth) {
        throw new HttpsError("unauthenticated", "Nutzer muss angemeldet sein.");
    }

    const email = request.auth.token.email;
    if (!email) throw new HttpsError("invalid-argument", "Keine E-Mail gefunden.");

    try {
        const verificationLink = await admin.auth().generateEmailVerificationLink(email);

        await resend.emails.send({
            from: "GIGILUKO <hello@gigiluko.com>",
            to: email,
            subject: "Willkommen bei GIGILUKO! 🎉 Bitte E-Mail bestätigen",
            html: `
                <div style="font-family: 'Helvetica Neue', Arial, sans-serif; background-color: #05000a; color: #ffffff; padding: 40px 20px; border-radius: 16px; max-width: 500px; margin: 0 auto;">
                    <p style="font-size: 18px; font-weight: bold;">Willkommen bei GIGILUKO! 🎉</p>
                    <p style="color: #e5e7eb; font-size: 15px; line-height: 1.6;">Du bist nur einen Klick davon entfernt, das Nachtleben in Echtzeit zu entdecken.</p>
                    <p style="color: #e5e7eb; font-size: 15px;">Bestätige deine E-Mail-Adresse:</p>
                    
                    <p style="text-align:center; margin:32px 0;">
                      <a href="${verificationLink}" style="background:linear-gradient(135deg,#A855F7,#EC4899); color:white; padding:14px 32px; border-radius:24px; text-decoration:none; font-weight:700; font-size:16px; display: inline-block;">
                        E-Mail bestätigen
                      </a>
                    </p>

                    <p style="color: #e5e7eb; font-size: 15px;">Was als nächstes?</p>
                    <ul style="color: #e5e7eb; font-size: 15px; line-height: 1.6;">
                      <li>Folge deinen Lieblings-Bars und -Clubs</li>
                      <li>Verbinde dich mit Freunden</li>
                      <li>Sieh in Echtzeit was wo abgeht</li>
                    </ul>

                    <p style="color: #e5e7eb; font-size: 15px; margin-top: 30px;">Bis bald beim Feiern 🥂<br>Dein GIGILUKO Team</p>

                    <hr style="border:none; border-top:1px solid #333; margin:32px 0 16px;">
                    <p style="color:#9ca3af; font-size:11px; text-align:center;">
                        GIGILUKO Technologies · Stuttgart, Deutschland<br>hello@gigiluko.com
                    </p>
                </div>
            `
        });
        return { success: true };
    } catch (error) {
        throw new HttpsError("internal", "E-Mail konnte nicht gesendet werden.");
    }
});

// ==========================================
// 2. PASSWORT ZURÜCKSETZEN (RESET)
// ==========================================
export const sendCustomPasswordResetEmail = onCall(async (request) => {
    const email = request.data.email;
    if (!email) {
        throw new HttpsError("invalid-argument", "Bitte eine E-Mail angeben.");
    }

    try {
        const resetLink = await admin.auth().generatePasswordResetLink(email);

        await resend.emails.send({
            from: "GIGILUKO <hello@gigiluko.com>",
            to: email,
            subject: "GIGILUKO – Passwort zurücksetzen 🔐",
            html: `
                <div style="font-family: 'Helvetica Neue', Arial, sans-serif; background-color: #05000a; color: #ffffff; padding: 40px 20px; border-radius: 16px; max-width: 500px; margin: 0 auto;">
                    <p style="font-size: 16px; color: #e5e7eb;">Hey,</p>
                    <p style="color: #e5e7eb; font-size: 15px; line-height: 1.6;">jemand (hoffentlich du) hat angefordert, das Passwort für dein GIGILUKO-Konto zurückzusetzen.</p>
                    <p style="color: #e5e7eb; font-size: 15px;">Klick auf den Button, um ein neues Passwort zu setzen:</p>

                    <p style="text-align:center; margin:32px 0;">
                      <a href="${resetLink}" style="background:linear-gradient(135deg,#A855F7,#EC4899); color:white; padding:14px 32px; border-radius:24px; text-decoration:none; font-weight:700; font-size:16px; display: inline-block;">
                        Passwort zurücksetzen
                      </a>
                    </p>

                    <p style="color: #9ca3af; font-size: 13px; line-height: 1.5;">Wenn du das nicht warst, ignorier diese Mail einfach.<br>Dein Konto bleibt sicher.</p>
                    <p style="color: #e5e7eb; font-size: 15px; margin-top: 30px;">Bis bald beim Feiern 🥂<br>Dein GIGILUKO Team</p>

                    <hr style="border:none; border-top:1px solid #333; margin:32px 0 16px;">
                    <p style="color:#9ca3af; font-size:11px; text-align:center;">
                        GIGILUKO Technologies · Stuttgart, Deutschland<br>hello@gigiluko.com
                    </p>
                </div>
            `
        });
        return { success: true };
    } catch (error) {
        throw new HttpsError("internal", "Passwort-Reset E-Mail konnte nicht gesendet werden.");
    }
});
