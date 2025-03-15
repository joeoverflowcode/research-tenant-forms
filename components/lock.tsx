import { useState } from "react";
import { LockKeyhole, LockKeyholeOpen } from "lucide-react";

const ToggleSwitch = () => {
  const [isLocked, setIsLocked] = useState(true);

  return (
    <button
      className={`w-80 h-20 flex items-center rounded-2xl p-10 transition duration-300   ${
        isLocked ? "bg-gray-400" : "bg-primary-green"
      }`}
      onClick={() => setIsLocked(!isLocked)}
    >
      <div
        className={`w-80 h-20 flex items-center justify-center bg-white rounded-2xl shadow-md transform transition duration-300 ${
          isLocked ? "-translate-x-10" : "translate-x-10"
        }`}
      >
        {isLocked ? (
          <LockKeyholeOpen className="text-gray-700" />
        ) : (
          <LockKeyhole className="text-green-600" />
        )}
      </div>

    </button>
  );
};

export default ToggleSwitch;
