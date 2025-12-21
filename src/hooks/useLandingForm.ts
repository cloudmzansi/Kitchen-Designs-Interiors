import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { submitToWeb3Forms } from '../utils/web3forms';

/**
 * Reusable form hook for landing pages
 * Generates unique IDs per page and handles form submission
 */
export const useLandingForm = (pageId: string) => {
  const navigate = useNavigate();
  const [isFormSubmitting, setIsFormSubmitting] = useState(false);
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});

  // Generate unique IDs for this page
  const formIds = {
    heroForm: `${pageId}-form`,
    contactForm: `${pageId}-contact-form`,
    name: `${pageId}-name`,
    phone: `${pageId}-phone`,
    email: `${pageId}-email`,
    message: `${pageId}-message`,
    contactName: `${pageId}-contact-name`,
    contactEmail: `${pageId}-contact-email`,
    contactPhone: `${pageId}-contact-phone`,
    contactProjectType: `${pageId}-contact-project-type`,
    contactMessage: `${pageId}-contact-message`,
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    // Validate required fields
    const errors: { [key: string]: string } = {};
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const projectType = formData.get('projectType') as string;
    const message = formData.get('message') as string;

    // Check if this is the hero form or contact form
    const isHeroForm = form.id === formIds.heroForm;
    const isContactForm = form.id === formIds.contactForm;

    // Common validations
    if (!name || name.trim() === '') {
      errors.name = 'Name is required';
    }

    // Hero form specific validations
    if (isHeroForm) {
      if (!phone || phone.trim() === '') {
        errors.phone = 'Phone number is required';
      }
      if (!email || email.trim() === '') {
        errors.email = 'Email address is required';
      }
      // Message is optional for hero form
    }

    // Contact form specific validations
    if (isContactForm) {
      if (!email || email.trim() === '') {
        errors.email = 'Email address is required';
      }
      if (!projectType || projectType === '') {
        errors.projectType = 'Please select a project type';
      }
      if (!message || message.trim() === '') {
        errors.message = 'Project details are required';
      }
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormErrors({});
    setIsFormSubmitting(true);

    // Use shared Web3Forms utility function
    await submitToWeb3Forms({
      formData,
      onSuccess: () => {
        // Store customer data in sessionStorage for enhanced conversions
        const customerData: {
          email?: string;
          phone_number?: string;
          first_name?: string;
          last_name?: string;
        } = {};
        
        if (email) customerData.email = email.trim().toLowerCase();
        if (phone) customerData.phone_number = phone.trim();
        
        // Split name into first and last name if available
        if (name) {
          const nameParts = name.trim().split(/\s+/);
          if (nameParts.length > 0) customerData.first_name = nameParts[0];
          if (nameParts.length > 1) customerData.last_name = nameParts.slice(1).join(' ');
        }
        
        // Store in sessionStorage for enhanced conversions on thank-you page
        sessionStorage.setItem('google_ads_conversion_data', JSON.stringify(customerData));
        
        // Redirect to thank-you page for Google Ads conversion tracking
        navigate('/thank-you');
      },
      onError: (errorMsg) => {
        setFormErrors({ submit: errorMsg });
        setIsFormSubmitting(false);
      },
    });
  };

  return {
    formIds,
    isFormSubmitting,
    formErrors,
    handleSubmit,
  };
};

