
import emailjs from 'emailjs-com';

// Initialize EmailJS with your User ID
export const initEmailService = (userId: string) => {
  emailjs.init(userId);
};

// Email sending configuration
export const EMAIL_CONFIG = {
  serviceId: 'default_service', // Replace with your EmailJS service ID
  templateId: 'template_contact_form', // Replace with your EmailJS template ID
  userId: 'user_XXXXXXXXXXXXXX', // Replace with your EmailJS user ID
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
