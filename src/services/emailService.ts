import emailjs from '@emailjs/browser';

// EmailJS configuration
const SERVICE_ID = 'service_portfolio';
const TEMPLATE_ID = 'template_contact';
const PUBLIC_KEY = 'your_public_key_here';

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export const sendEmail = async (formData: ContactFormData): Promise<boolean> => {
  try {
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_name: 'AL-MAHDI AIT-OUNZAR',
    };

    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      templateParams,
      PUBLIC_KEY
    );

    return response.status === 200;
  } catch (error) {
    console.error('Email sending failed:', error);
    return false;
  }
};

export const initEmailJS = () => {
  emailjs.init(PUBLIC_KEY);
};