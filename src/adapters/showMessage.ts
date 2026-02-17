import { toast } from 'react-toastify';

export const showMessage = (
  type: 'success' | 'error' | 'warning' | 'info',
  message: string,
) => {
  toast[type](message);
};

showMessage.dismiss = () => {
  toast.dismiss();
};
