import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { clearMessage } from '../../redux/actions/authAction';

const ToastMessage = () => {
  const dispatch = useDispatch();
  const { message, error } = useSelector((state) => state.auth);

  useEffect(() => {
    if (message) {
      toast.success(message);
      dispatch(clearMessage());
    } else if (error) {
      toast.error(error);
    }
  }, [message, error, dispatch]);

  return null;
};

export default ToastMessage;