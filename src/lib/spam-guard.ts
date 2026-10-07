// Filtros anti-spam del lado del navegador. Frenan bots simples y envíos
// duplicados, pero se pueden saltear: la barrera real es el reCAPTCHA,
// que EmailJS verifica en su servidor.

// Nadie completa el formulario en menos de 3 segundos; un bot sí.
export const MIN_FILL_MS = 3_000;

// Un envío por minuto por navegador: evita duplicados y protege la cuota.
export const COOLDOWN_MS = 60_000;

/** `startedAt` es la primera interacción con el formulario; null si nunca hubo. */
export const isTooFast = (startedAt: number | null, now: number) =>
  startedAt === null || now - startedAt < MIN_FILL_MS;

/** Milisegundos que faltan para poder volver a enviar; 0 si ya se puede. */
export const cooldownRemaining = (lastSentAt: number | null, now: number) => {
  if (lastSentAt === null || lastSentAt > now) return 0;
  return Math.max(0, lastSentAt + COOLDOWN_MS - now);
};
