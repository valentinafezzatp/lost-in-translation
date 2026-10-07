// Envío de consultas por EmailJS usando su API REST (sin SDK).
// Las claves son públicas por diseño: la protección vive en el dashboard
// (destinatario fijo en el template + dominios permitidos en Security).

const ENDPOINT = 'https://api.emailjs.com/api/v1.0/email/send';

export type QuoteRequest = {
  name: string;
  email: string;
  service: string;
  length: string;
  deadline: string;
  message: string;
  file_link: string;
  // Token del reCAPTCHA v2: EmailJS lo valida en su servidor con la secret key
  // configurada en el template (Settings → Enable reCAPTCHA V2 verification)
  'g-recaptcha-response'?: string;
};

export async function sendQuoteRequest(params: QuoteRequest): Promise<void> {
  const res = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      service_id: import.meta.env.PUBLIC_EMAILJS_SERVICE_ID,
      template_id: import.meta.env.PUBLIC_EMAILJS_TEMPLATE_ID,
      user_id: import.meta.env.PUBLIC_EMAILJS_PUBLIC_KEY,
      template_params: params,
    }),
  });

  if (!res.ok) throw new Error(`EmailJS ${res.status}: ${await res.text()}`);
}
