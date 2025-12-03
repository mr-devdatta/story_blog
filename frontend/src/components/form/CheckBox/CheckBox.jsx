export default function CheckBox(props) {
  const { label, name, value, checked, onChange } = props;
  return (
    <div className="flex items-center space-x-2 text-left">
      <input
        type="checkbox"
        id={value}
        name={name}
        checked={checked}
        onChange={onChange}
        value={value}
        className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
      />
      <label htmlFor={value} className="text-sm font-medium text-gray-700 cursor-pointer">
        {label}
      </label>
    </div>
  );
}
