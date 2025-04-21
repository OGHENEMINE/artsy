"use client";
import { alertSelector, clearAlert } from "@/app/store/alertSlice";
import { useAppSelector } from "@/app/store/hook";
import { CheckCircle2, X, XCircle } from "lucide-react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const Alert = () => {
  const { message, type } = useAppSelector(alertSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    const timeOutId = setTimeout(() => dispatch(clearAlert()), 3000);
    return () => clearTimeout(timeOutId);
  }, [message, dispatch]);

  return (
    <>
      {message && (
        <div
          className={`flex text-white items-center gap-x-2 fixed rounded-md text-sm top-1 left-1/2 -translate-x-1/2 p-4 max-w-sm w-full z-30 ${
            type === "success" ? "bg-green-500" : "bg-red-500"
          }`}
        >
          <span>
            {type === "success" ? (
              <CheckCircle2 className="size-5" />
            ) : (
              <XCircle className="size-5" />
            )}
          </span>
          <span>{message}</span>
          <button
            onClick={() => dispatch(clearAlert())}
            className="absolute top-2 right-2 cursor-pointer"
          >
            <X className="size-4" />
          </button>
        </div>
      )}
    </>
  );
};

export default Alert;
