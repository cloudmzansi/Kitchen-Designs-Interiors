/**
 * Form submission utility function
 * Temporarily using Formspree.io for testing
 * All forms use the same endpoint
 */

export interface Web3FormsSubmitOptions {
  formData: FormData;
  onSuccess?: () => void;
  onError?: (error: string) => void;
}

export const submitToWeb3Forms = async ({
  formData,
  onSuccess,
  onError,
}: Web3FormsSubmitOptions): Promise<boolean> => {
  // Formspree.io endpoint
  const formspreeEndpoint = 'https://formspree.io/f/mkgdqndr';

  try {
    const response = await fetch(formspreeEndpoint, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
      },
      body: formData,
    });

    const result = await response.json();

    if (response.ok && !result.error) {
      if (onSuccess) {
        onSuccess();
      }
      return true;
    } else {
      const errorMsg = result.error || 'There was an error submitting the form. Please try again.';
      if (onError) {
        onError(errorMsg);
      }
      return false;
    }
  } catch (error) {
    console.error('Form submission error:', error);
    const errorMsg = 'There was a network error. Please try again.';
    if (onError) {
      onError(errorMsg);
    }
    return false;
  }
};

