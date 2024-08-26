export default function InputForm({ label, type, value, onChange, placeholder,options }) {
    return (
        <div className="flex flex-col gap-2 mb-4 w-full">
            <label className="text-black text-xl font-normal">{label}</label>
            {type === "select" ? (
                <select
                    value={value}
                    onChange={onChange}
                    className="h-[60px] p-5 bg-neutral-50 border-b border-black 
                    focus:outline-none focus:ring-2 focus:ring-blue-500 "
                >
                    {options}
                </select>
            ) : (
                <input
                    type={type}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    className="h-[60px] p-5 bg-neutral-50 border-b border-black 
                    focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            )}
        </div>
    );
}