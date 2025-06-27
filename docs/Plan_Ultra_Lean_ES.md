LegalPromptly – Plan ULTRA LEAN (n8n + OpenAI + Stripe + Dominio)

1. **Filosofía «Reduce to the Max»**
   - Menos puntos de fallo
   - Costes predecibles y muy bajos
   - Escalado progresivo: añade servicios solo cuando los pague la facturación.

2. **Arquitectura Técnica (Vista de Alto Nivel)**

| Capa                     | Herramienta          | Rol principal                                     |
|-------------------------|---------------------|--------------------------------------------------|
| Servidor único          | VPS económico       | Aloja todo en un único lugar.                    |
| Orquestación & Lógica   | n8n self-host       | Gestiona formularios, IA y flujos.               |
| Inteligencia            | OpenAI GPT-4o       | Genera el texto legal personalizado.             |
| Pagos                   | Stripe              | Suscripciones y cobros seguros.                  |
| Frontend                | HTML/Tailwind       | Landing y formulario de entrada.                 |
| Dominio                 | legalpromptly.com   | Punto de acceso único para usuarios.             |

3. **Plan de Monetización**
Stripe gestiona el cobro y la actualización automática del plan.

4. **Costes Mensuales Estimados**

| Plan       | Límite mensual | Precio      |
|-----------|---------------|------------|
| Free      | 1 contrato    | 0 €        |
| Pro       | 10 contratos  | 9,90 €/mes |
| Unlimited | Ilimitado     | 19,90 €/mes|

Costes fijos aproximados: VPS 5 €, Dominio 0,83 € (prorrateado). Total ≈ 6 €.
Costes variables: tokens de OpenAI (~0,012 €/contrato) y comisión de Stripe (2,9 % + 0,25 € por transacción).

5. **Roadmap (Primeras 4 Semanas)**
   1. MVP gratuito funcional (generar y descargar contrato)
   2. Activar planes de pago con Stripe
   3. Lanzar campaña orgánica en TikTok y X/Twitter
   4. Recoger feedback, mejorar copy y añadir segundo tipo de contrato

6. **Marketing «One-Person SaaS»**
   - Contenido viral en TikTok y reels mostrando el problema y la solución.
   - Build-in-public en X/Twitter: métricas transparentes cada semana.
   - Comunidades freelance (Reddit, foros, grupos de FB) para captar primeros usuarios.
   - Programa de afiliados sencillo (30 % comisión) para creadores.

7. **Legalidad & Seguridad (Lineamientos)**
   - Aviso de uso de IA y limitación de responsabilidad visible.
   - RGPD: datos alojados en servidor propio; DPA con OpenAI y Stripe.
   - HTTPS obligatorio y copia de seguridad periódica del sistema.

8. **Anexo A — Diseño Profesional Fase 3 (Workflow n8n + Prompt IA)**
   - **Objetivo:** Motor fiable que, con un formulario sencillo, devuelva un PDF de contrato listo para firmar.
   - **Entrada robusta:** Validación con ajv en n8n y sanitización RegEx para evitar prompt-injection.
   - **Prompt IA de calidad profesional:**
     - *SYSTEM*: "Eres un abogado mercantil colegiado en España con 10+ años de experiencia. Devuelve SIEMPRE un JSON válido..."
     - Añadir `response_format:{type:"json_object"}`.
   - **Orquestación n8n (flujo modular):** Webhook → Validate (ajv) → Cache lookup → ...
   - **Salida PDF profesional:** logotipo, tabla de partes, cláusulas numeradas, bloque de firmas.
   - **Gestión de errores y límites:** reintentos, mensajes de servidor ocupado, etc.
   - **Extensión futura preparada:** idiomas, nuevas cláusulas, firma electrónica, servicio "Explica tu contrato".
   - **Checklist pre-implementación:** definir JSON schema, escribir prompt v1, configurar credenciales OpenAI, etc.

Este documento resume las bases para construir LegalPromptly de forma sólida y profesional.
