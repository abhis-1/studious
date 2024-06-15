export const InputBox = ({ label, placeholder, onChange, type = "text" }) => {
  return (
    <>
      <div>
        <div className="text-md font-bold text-gray-900 text-left px-2 py-1 mt-3">
          {label}
        </div>
        <input
          onChange={onChange}
          placeholder={placeholder}
          type={type}
          className="w-full text-left px-2 py-1 border rounded-lg border-slate-300 bg-white"
        />
      </div>
    </>
  );
};
