import { useState } from 'react';

function useModal(initState = false) {
  //Modal
  const [isOpen, setIsOpen] = useState(initState);

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  return { isOpen, openModal, closeModal };
}

export default useModal;
