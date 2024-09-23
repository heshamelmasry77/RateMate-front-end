import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { hideToast } from "../store/toastSlice";

const Toast = () => {
  const dispatch = useDispatch();
  const { message, isVisible } = useSelector((state) => state.toast);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        dispatch(hideToast());
      }, 3000); // Automatically hide after 3 seconds
      return () => clearTimeout(timer);
    }
  }, [isVisible, dispatch]);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="rounded-md bg-green-500 px-4 py-2 text-white shadow-lg">
        {message}
      </div>
    </div>
  );
};

export default Toast;
