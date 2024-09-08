const Input = ({value,onChange}) => {
  return (
    <div className="relative w-full ">
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Enter a URL"
        className="p-3 pl-12 w-full rounded-lg bg-gray-900 text-white focus:outline-none focus:ring-4 focus:ring-gradient focus:ring-offset-1 focus:ring-opacity-50 transition duration-300 ease-in-out"
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="absolute left-3 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-400"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
        />
      </svg>
    </div>
  );
};

export default Input;
