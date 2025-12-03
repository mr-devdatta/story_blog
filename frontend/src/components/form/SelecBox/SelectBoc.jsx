export default function SelectBox(props) {
    const { label, name, value, onChange, options } = props;

    return (
        <div>
            <select id={name} name={name} value={value} onChange={onChange} className="form-input-field">
                <option value="">{label}</option>
                {options &&
                    options.map((option, index) => (
                        <option key={index} value={option.value}>
                            {option.label}
                        </option>
                    ))}
            </select>
        </div>
    );
}
