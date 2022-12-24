export default function InputField({
  name,
  label,
  type,
  value,
  handleOnChange,
}) {
  return (
    <div className="flex flex-col md:mr-16">
      <label
        htmlFor={name}
        className="text-black text-sm font-bold leading-tight tracking-normal mb-2"
      >
        {label}
      </label>
      <input
        type={type ?? "text"}
        name={name}
        value={value}
        onChange={(ev) => handleOnChange(ev)}
        className=" focus:outline-none focus:border  dark:border-gray-700 bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow"
      />
    </div>
  );
}
