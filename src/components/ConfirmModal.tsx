import { useCheckoutContext } from "@/app/context/CheckoutContext";
import { CircleAlert, X } from "lucide-react";

const ConfirmModal = ({
  heading = "You are about to delete a product",
  message = "Are you sure you want to continue",
}: {
  heading?: string;
  message?: string;
}) => {
  const {closeConfirmModal, confirmRemove, showConfirm, } = useCheckoutContext();
  return (
    <>
      {showConfirm && (
        <div className="bg-white dark:bg-neutral-900 shadow-xl rounded-xl fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-6 max-w-md w-full z-50 transition-all">
          <button
            aria-label="Close"
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
            onClick={closeConfirmModal}
          >
            <X className="size-5" />
          </button>

          <div className="flex flex-col items-center text-center space-y-4">
            <CircleAlert className="size-12 text-red-500" />
            <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
              {heading}
            </h2>
            <p className="text-gray-600 dark:text-gray-300">{message}</p>

            <div className="flex w-full gap-3 mt-4">
              <button
                onClick={confirmRemove}
                className="w-full py-2 rounded-md bg-red-600 text-white font-semibold hover:bg-red-700 transition-colors"
              >
                Yes, delete
              </button>
              <button
                onClick={closeConfirmModal}
                className="w-full py-2 rounded-md border border-gray-300 dark:border-gray-700 font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ConfirmModal;
