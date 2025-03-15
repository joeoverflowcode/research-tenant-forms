import { useState } from "react";
import { LockKeyhole, LockKeyholeOpen } from "lucide-react";

const ToggleSwitch = () => {
  const [isLocked, setIsLocked] = useState(true);

  return (
    <button
      className={`w-80 h-20 flex items-center rounded-2xl p-1 transition duration-300 relative  ${
        isLocked ? "bg-gray-400" : "bg-green-500"
      }`}
      onClick={() => setIsLocked(!isLocked)}
    >
      {/* Moving Toggle (Icon + Text Together) */}
      <div
        className={`w-80 h-20 flex items-center justify-center space-x-1 bg-white rounded-2xl shadow-md transform transition duration-300 ${
          isLocked ? "-translate-x-10" : "translate-x-10"
        }`}
      >
        {isLocked ? (
          <LockKeyholeOpen className="text-black" />
        ) : (
          <LockKeyhole className="text-green-500" />
        )}
      </div>

      {/* Text inside switch */}
      <span
        className={`absolute left-3 text-black font-medium text-sm transition-opacity duration-300 ${
          isLocked ? "opacity-100" : "opacity-0"
        }`}
      >
        Unlocked
      </span>
      <span
        className={`absolute right-3 text-black font-medium text-sm transition-opacity duration-300 ${
          isLocked ? "opacity-0" : "opacity-100"
        }`}
      >
        Locked
      </span>
    </button>
  );
};

export default ToggleSwitch;
