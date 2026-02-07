
const generateEmailTemplate = (data) => {
    const { name, email, phone, website, service, message } = data;

    // Define colors and titles based on service
    const serviceConfig = {
        seo: {
            color: '#4F46E5', // Indigo
            title: 'SEO Optimization Inquiry',
            description: 'New lead interested in boosting their search rankings.',
        },
        ads: {
            color: '#EA580C', // Orange
            title: 'Google & Meta Ads Inquiry',
            description: 'New lead interested in paid advertising campaigns.',
        },
        web: {
            color: '#0EA5E9', // Sky Blue
            title: 'Website Development Inquiry',
            description: 'New lead interested in a new website or redesign.',
        },
        other: {
            color: '#64748B', // Slate
            title: 'General Inquiry',
            description: 'New general contact form submission.',
        },
    };

    const config = serviceConfig[service] || serviceConfig.other;

    const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; background-color: #f9fafb; }
    .container { max-width: 600px; margin: 40px auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); }
    .header { background-color: ${config.color}; color: #ffffff; padding: 32px; text-align: center; }
    .header h1 { margin: 0; font-size: 24px; font-weight: 700; letter-spacing: -0.025em; }
    .header p { margin: 8px 0 0; opacity: 0.9; font-size: 16px; }
    .content { padding: 32px; }
    .field { margin-bottom: 24px; }
    .label { font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; color: #6b7280; font-weight: 600; margin-bottom: 4px; display: block; }
    .value { font-size: 16px; color: #111827; font-weight: 500; }
    .message-box { background-color: #f3f4f6; border-left: 4px solid ${config.color}; padding: 16px; border-radius: 4px; margin-top: 8px; }
    .footer { background-color: #f9fafb; padding: 24px; text-align: center; font-size: 12px; color: #9ca3af; border-top: 1px solid #e5e7eb; }
    .tag { display: inline-block; padding: 4px 12px; border-radius: 9999px; font-size: 12px; font-weight: 600; background-color: ${config.color}20; color: ${config.color}; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>${config.title}</h1>
      <p>${config.description}</p>
    </div>
    
    <div class="content">
      <div class="field">
        <span class="label">Name</span>
        <div class="value">${name}</div>
      </div>
      
      <div class="field">
        <span class="label">Email</span>
        <div class="value"><a href="mailto:${email}" style="color: ${config.color}; text-decoration: none;">${email}</a></div>
      </div>

      ${phone ? `
      <div class="field">
        <span class="label">Phone</span>
        <div class="value">${phone}</div>
      </div>
      ` : ''}

      ${website ? `
      <div class="field">
        <span class="label">Website</span>
        <div class="value"><a href="${website}" target="_blank" style="color: ${config.color}; text-decoration: none;">${website}</a></div>
      </div>
      ` : ''}

      <div class="field">
        <span class="label">Service Interest</span>
        <div class="value"><span class="tag">${config.title}</span></div>
      </div>

      <div class="field">
        <span class="label">Message</span>
        <div class="value message-box">
          ${message.replace(/\n/g, '<br>')}
        </div>
      </div>
    </div>

    <div class="footer">
      <p>This email was sent from your website's contact form.</p>
      <p>&copy; ${new Date().getFullYear()} Adzenity. All rights reserved.</p>
    </div>
  </div>
</body>
</html>
  `;

    return {
        subject: `[Adzenity] ${config.title} from ${name}`,
        text: `New inquiry from ${name} (${email}). Service: ${service}. Message: ${message}`, // Fallback text
        html,
    };
};

module.exports = generateEmailTemplate;
