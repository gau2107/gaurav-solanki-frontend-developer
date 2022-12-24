import InputField from "./common/InputField";

export default function CapsuleFilter({ filters, handleOnChange }) {
  return (
    <div>
      <InputField
        name={"type"}
        label={"Type"}
        value={filters.type}
        handleOnChange={handleOnChange}
      />
      <InputField
        name={"status"}
        label={"Status"}
        value={filters.status}
        handleOnChange={handleOnChange}
      />
      <InputField
        type={"date"}
        name={"original_launch_unix"}
        label={"Original Launch"}
        value={filters.original_launch_unix}
        handleOnChange={handleOnChange}
      />
    </div>
  );
}
