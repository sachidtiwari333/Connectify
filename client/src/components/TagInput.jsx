import { useState } from "react";

const TagInput = ({ items, setItems, placeholder, Icon }) => {
  const [input, setInput] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && input.trim()) {
      e.preventDefault();

      if (!items.includes(input.trim())) {
        setItems([...items, input.trim()]);
      }

      setInput("");
    }
  };

  const removeItem = (item) => {
    setItems(items.filter((i) => i !== item));
  };

  return (
    <div className="border-2 border-gray-500 rounded-xl p-2 relative">
       <Icon className="absolute left-3 top-3 w-5 h-5 text-gray-400" />

      <div className="pl-10">
        <div className="flex flex-wrap gap-2 mb-2">
          {items.map((item) => (
            <div
              key={item}
              className="flex items-center px-3 py-1 rounded-full border border-gray-400"
            >
              <span>{item}</span>

              <button
                type="button"
                onClick={() => removeItem(item)}
                className="ml-2 text-lg"
              >
                ×
              </button>
            </div>
          ))}
        </div>

        <input
          type="text"
          placeholder={placeholder}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="w-full outline-none"
        />
      </div>
    </div>
  );
};

export default TagInput;