/**
 * Web3Forms utility function for consistent form submissions
 * All forms use the same API key from environment variables
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
  // Get Web3Forms access key from environment variable
  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

  if (!accessKey) {
    const errorMsg = 'Web3Forms access key not found in environment variables';
    console.error(errorMsg);
    if (onError) {
      onError('Form submission is not configured. Please contact support.');
    }
    return false;
  }

  // Convert FormData to object for JSON submission
  const data: { [key: string]: any } = {};
  formData.forEach((value, key) => {
    data[key] = value;
  });

  // Add Web3Forms access key
  data.access_key = accessKey;

  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (result.success) {
      if (onSuccess) {
        onSuccess();
      }
      return true;
    } else {
      const errorMsg = 'There was an error submitting the form. Please try again.';
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

