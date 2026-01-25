
import { X } from "lucide-react";
import './Close.scss';
export default function CloseRegister({onClose}) {
  return (
    <button onClick={onClose} className="close-register-button">
      <X />
    </button>
  );
}
