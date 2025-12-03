export default function DataContainer(props) {
    const { title, children } = props;

    return (
        <>
            <div className="data-container-title">
                <span className="text">{title}</span>
            </div>
            <div className="data-container-body">{children}</div>
        </>
    );
}
