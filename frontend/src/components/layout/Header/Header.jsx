export default function Header({ children }) {
    return (
        <div className="max-h-12 px-4 py-2 m-1 flex justify-between items-center">
            <span className="text-2xl">React Application</span>
            <div>{children}</div>
        </div>
    );
}

