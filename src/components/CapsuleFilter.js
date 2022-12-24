import InputField from "./common/InputField";

export default function CapsuleFilter({ filters, handleOnChange }) {
  return (
    // <div>

    <div
      className="bg-gray-200 flex items-center justify-center"
      style={{ fontFamily: '"Lato", sans-serif' }}
    >
      <div className="flex lg:flex-row sm:flex-col flex-col items-center py-8 px-4">
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
    </div>
  );
}
