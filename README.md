NewPortfolio

## Contact Form Setup

The contact form uses EmailJS for sending emails. To enable email functionality:

1. **Create EmailJS Account**
   - Go to [emailjs.com](https://www.emailjs.com/) and create a free account
   - You get 200 free emails per month

2. **Setup Email Service**
   - Add an email service (Gmail, Outlook, Yahoo, etc.)
   - Follow EmailJS instructions to connect your email provider

3. **Create Email Template**
   - Create a new email template with these variables:
     - `{{from_name}}` - Sender's name
     - `{{from_email}}` - Sender's email
     - `{{message}}` - Message content
     - `{{to_name}}` - Your name (AL-MAHDI AIT-OUNZAR)

4. **Update Configuration**
   - Open `src/services/emailService.ts`
   - Replace the placeholder values:
     - `SERVICE_ID`: Your EmailJS service ID
     - `TEMPLATE_ID`: Your EmailJS template ID  
     - `PUBLIC_KEY`: Your EmailJS public key

5. **Test the Form**
   - Fill out the contact form on your portfolio
   - Check your email for the message

### Example EmailJS Template

```
Subject: New Contact from Portfolio - {{from_name}}

Hello {{to_name}},

You have received a new message from your portfolio website:

Name: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

The form includes proper error handling, loading states, and success feedback for a professional user experience.