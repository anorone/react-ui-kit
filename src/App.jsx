import { useState } from 'react';
import { Button, Modal } from './lib';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);

  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="p-4">
      <Button color="secondary" size="large" onClick={openModal}>
        Open
      </Button>
      <Modal isOpen={isModalOpen} title="Modal">
        <div className="flex items-center justify-between">
          <p>Message</p>
          <Button size="small" onClick={closeModal}>Close</Button>
        </div>
      </Modal>
    </div>
  );
};

export default App;
