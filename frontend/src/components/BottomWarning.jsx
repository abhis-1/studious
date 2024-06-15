import { Link } from "react-router-dom";

export const BottomWarning = ({ label, buttonText, to }) => {
  return (
    <>
      <div className="text-sm text-slate-600 mt-3 flex justify-center py-2">
        <div>{label}</div>
        <Link
          className="text-sm text-slate-600 cursor-pointer hover:text-blue-700 underline ml-1"
          to={to}
        >
          {buttonText}
        </Link>
      </div>
    </>
  );
};
