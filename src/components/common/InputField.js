export default function InputField({
  name,
  label,
  type,
  value,
  handleOnChange,
}) {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        type={type ?? "text"}
        name={name}
        value={value}
        onChange={(ev) => handleOnChange(ev)}
      />
    </div>
  );
}
