export default function PasswordField(props) {
    const { label, name, value, onChange } = props;
    return <input type="password" className="form-input-field" id={name} placeholder={label} name={name} value={value} onChange={onChange} />;
}
