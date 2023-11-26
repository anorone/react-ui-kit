import { Modal } from '../lib';

export default {
  component: Modal,
};

export const Open = {
  args: {
    title: 'Modal title',
    children: 'Modal content',
    isOpen: true,
  },
};
