export default function TextField(props) {
    const { label, name, value, onChange } = props;
    return <input type="text" id={name} className="form-input-field" placeholder={label} name={name} value={value} onChange={onChange} />;
}
