import React from "react";
import LegalPage from "../components/LegalPage";

const Support: React.FC = () => {
    return (
        <LegalPage title="Support" lastUpdated="May 2026">
            <section>
                <h2>Need Help?</h2>
                <p>We're here to help. For any questions, feedback, or issues with the GIGILUKO app, please reach out to us:</p>
                <p><strong>Email:</strong> <a href="mailto:support@gigiluko.com">support@gigiluko.com</a></p>
                <p>We typically respond within 24 hours, Monday through Friday.</p>
            </section>

            <section>
                <h2>Frequently Asked Questions</h2>

                <h3>How do I reset my password?</h3>
                <p>On the login screen, tap "Forgot password?" and enter your email address. You'll receive a reset link from us within a few minutes. If the email doesn't arrive, check your spam folder or contact <a href="mailto:support@gigiluko.com">support@gigiluko.com</a>.</p>

                <h3>Why does the app ask for my location?</h3>
                <p>GIGILUKO uses your location to show nearby venues on the Discover map. With "Always" permission, we can also detect automatic check-ins at venues equipped with Bluetooth beacons. You can change or revoke location permissions anytime in your device settings. See our <a href="/privacy">Privacy Policy</a> for full details.</p>

                <h3>How do I delete my account?</h3>
                <p>You can delete your GIGILUKO account directly from within the app:</p>
                <ol className="list-decimal pl-6 space-y-1">
                    <li>Open the app and tap the <strong>Profile</strong> tab</li>
                    <li>Tap the <strong>Settings</strong> icon (gear) in the top right corner</li>
                    <li>Scroll down and tap <strong>Delete Account</strong></li>
                    <li>Confirm the deletion when prompted</li>
                </ol>
                <p>Account deletion is permanent and immediately removes your profile, posts, friends, chat messages, and all associated data from our servers. If you have any issues, email <a href="mailto:support@gigiluko.com">support@gigiluko.com</a> and we'll handle the deletion manually within 48 hours.</p>

                <h3>How do I report inappropriate content or behavior?</h3>
                <p>Tap the menu icon (⋯) on any post or user profile and select <strong>Report</strong>. Choose a reason and submit. Our moderation team reviews all reports within 24 hours and takes appropriate action, including content removal and account suspension when necessary.</p>

                <h3>How are venues added to GIGILUKO?</h3>
                <p>We partner directly with bars, clubs, lounges, and other nightlife venues in Stuttgart. If you'd like to see a specific venue on GIGILUKO, or if you're a venue owner interested in joining, email us at <a href="mailto:hello@gigiluko.com">hello@gigiluko.com</a>.</p>

                <h3>When will GIGILUKO launch in my city?</h3>
                <p>We're launching first in Stuttgart and expanding city by city. Berlin, Munich, and Hamburg are next on our roadmap. Sign up at <a href="https://gigiluko.com">gigiluko.com</a> to be notified when we launch in your city.</p>

                <h3>Why aren't push notifications working?</h3>
                <p>Push notifications require permission. Open your device's <strong>Settings → Notifications → GIGILUKO</strong> and enable notifications. If notifications are still not arriving, log out and log back in to refresh the notification token, or contact support.</p>

                <h3>Is GIGILUKO free?</h3>
                <p>Yes — GIGILUKO is free for all users. There are no subscriptions, no premium tiers, and no in-app purchases.</p>
            </section>

            <section>
                <h2>Bug Reports & Feature Requests</h2>
                <p>Found a bug or have an idea to make GIGILUKO better? We genuinely read every message. Email <a href="mailto:support@gigiluko.com">support@gigiluko.com</a> and include:</p>
                <ul className="list-disc pl-6 space-y-1">
                    <li>Your device model and iOS or Android version</li>
                    <li>What you were trying to do when the issue occurred</li>
                    <li>What actually happened (screenshots are very helpful)</li>
                    <li>Steps to reproduce the issue, if possible</li>
                </ul>
            </section>

            <section>
                <h2>Other Resources</h2>
                <p>
                    <a href="/privacy">Privacy Policy</a> · <a href="/terms">Terms of Service</a> · <a href="/impressum">Imprint</a>
                </p>
            </section>
        </LegalPage>
    );
};

export default Support;
