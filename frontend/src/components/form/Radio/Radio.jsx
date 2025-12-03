export default function Radio(props) {
    const { label, name, isChecked, value, onChange } = props;
    return (
        <div className="flex items-center space-x-2 text-left">
            <input type="radio" id={label} name={name} value={value} checked={isChecked} onChange={onChange} className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500" />
            <label htmlFor={label} className="text-sm font-medium text-gray-700 cursor-pointer">
                {label}
            </label>
        </div>
    );
}
