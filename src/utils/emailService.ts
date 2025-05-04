
import emailjs from 'emailjs-com';

// Initialize EmailJS with your User ID
export const initEmailService = (userId: string) => {
  emailjs.init(userId);
};

// Email sending configuration
export const EMAIL_CONFIG = {
  serviceId: 'service_2l22yn9', // Your EmailJS service ID
  templateId: 'template_u3aj8ii', // Your EmailJS template ID
  userId: '_F_s7v-YO34mumNMf', // Your EmailJS public key
};

// Send email function
export const sendContactEmail = async (formData: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) => {
  const templateParams = {
    from_name: formData.name,
    from_email: formData.email,
    subject: formData.subject,
    message: formData.message,
    to_email: 'amalanathang20@gmail.com',
  };

  return await emailjs.send(
    EMAIL_CONFIG.serviceId,
    EMAIL_CONFIG.templateId,
    templateParams,
    EMAIL_CONFIG.userId
  );
};
