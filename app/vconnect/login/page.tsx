"use client";
import Container from "../../../components/Container";

// Externe Microsoft B2C / Flyda login URL (aangeleverd)
const LOGIN_URL = "https://login.flyda.eu/8cccdca9-961a-490b-af41-d7006e3a3006/b2c_1_flyda_signin/oauth2/v2.0/authorize?client_id=cb2a6c54-a839-4f4f-bd5f-2ccd0bd4f5b5&scope=https%3A%2F%2Ffuroobvprod.onmicrosoft.com%2Fb3fe16a5-58de-41cf-8ddb-c3f74e0c2d9a%2Fuser_impersonation%20openid%20profile%20offline_access&redirect_uri=https%3A%2F%2Fapp.vconnect-wvervaet.be%2F&client-request-id=01994d1b-a35f-7686-a410-8181eb3153e8&response_mode=fragment&response_type=code&x-client-SKU=msal.js.browser&x-client-VER=3.27.0&client_info=1&code_challenge=cncRTlEnwmXLzO6BHlIYYMwBrVpZlFw48KwoPkqjv78&code_challenge_method=S256&nonce=01994d1b-a35f-7af1-ba45-f14cedb25cd1&state=eyJpZCI6IjAxOTk0ZDFiLWEzNWYtNzg5Mi1hZGMwLThiNjE5ZGNjYWFkNiIsIm1ldGEiOnsiaW50ZXJhY3Rpb25UeXBlIjoicmVkaXJlY3QifX0%3D";

export default function LoginPage() {
  // Geen automatische redirect: gebruiker klikt bewust op de login knop.

  return (
    <div className="pt-40 pb-24 min-h-screen bg-gradient-to-br from-primary/10 via-white to-primary/5">
      <Container>
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold text-primary">Vconnect Login</h1>
          <p className="mt-6 text-lg text-slate-700 leading-relaxed">
            Meld u aan via ons beveiligde portaal. Klik op de knop hieronder om verder te gaan naar de Vconnect login omgeving.
          </p>
          <div className="mt-8 flex items-center gap-4 flex-wrap">
            <a href={LOGIN_URL} target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center gap-2">Login</a>
          </div>
        </div>
      </Container>
    </div>
  );
}
