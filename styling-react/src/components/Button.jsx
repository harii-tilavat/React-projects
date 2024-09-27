export default function Button({ children, ...props }) {
    return (
        <button className="font-semibold px-4 py-2 rounded-lg text-stone-900 bg-amber-500 hover:bg-amber-600" {...props}>
            {children}
        </button>
    );
}
