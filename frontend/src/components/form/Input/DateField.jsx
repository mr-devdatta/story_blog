// <input type="date" id="start" name="trip-start" value="2018-07-22" min="2018-01-01" max="2018-12-31" />;
export default function DateField(props) {
    const { name, value, onChange } = props;
    return (
        <div>
            <input
                type="date"
                className="form-input-field"
                id={name}
                name={name}
                value={value}
                min={"2020-01-01"}
                max={new Date().toISOString().split("T")[0]}
                onChange={onChange}
            />
        </div>
    );
}
