
import React from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 backdrop-blur-sm p-4">
      <div className="bg-white dark:bg-mukesa-gray-dark p-6 rounded-lg shadow-xl w-full max-w-md mx-auto relative transform transition-all duration-300 ease-out scale-95 opacity-0 animate-modal-pop-in">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-mukesa-red dark:text-mukesa-gray-text dark:hover:text-mukesa-red transition-colors"
          aria-label="Close modal"
        >
          <XMarkIcon className="h-6 w-6" />
        </button>
        {title && <h3 className="text-xl font-semibold text-mukesa-blue mb-4">{title}</h3>}
        <div className="text-gray-700 dark:text-mukesa-gray-text">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
