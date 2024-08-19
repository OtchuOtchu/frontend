export default function InputForm({ label, type = "text", value, onChange, placeholder }) {
    return (
        <div className="flex flex-col gap-2 mb-4 w-full">
            <label className="text-black text-xl font-normal">{label}</label>
            <input
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}

                className="h-[60px] p-5 bg-neutral-50 border-b border-black 
                focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
        </div>
    );
}