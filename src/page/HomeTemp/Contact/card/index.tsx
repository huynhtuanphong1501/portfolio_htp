import { useState } from "react";
import { FiCopy, FiCheck } from "react-icons/fi";
import type { CopyCard } from "../../../../type/type";

export default function index({ label, value }: CopyCard) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(value);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className="w-[320px] bg-black border border-gray-700 rounded-2xl p-6 flex flex-col items-center gap-4 shadow-md">
      <h3 className="text-white font-semibold">{label}</h3>

      <div className="flex items-center gap-3">
        <span className="text-gray-300">{value}</span>

        <button
          onClick={handleCopy}
          className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition"
        >
          {copied ? (
            <FiCheck className="text-green-400" />
          ) : (
            <FiCopy className="text-white" />
          )}
        </button>
      </div>

      {copied && <p className="text-green-400 text-sm">Copied!</p>}
    </div>
  );
}
