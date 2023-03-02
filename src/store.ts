import { createStore } from '@stencil/store';

export interface State {
  pageTheme: 'light' | 'dark';
}

const { state } = createStore<State>({
  pageTheme: 'light',
});

export const defaults = {
  title: 'Install Doctor',
  description: 'Setup your workstation automatically with the best, free open-source software using Install Doctor, an open-source, multi-OS provisioning system.',
  meta_image: 'https://install.doctor/assets/img/og.png',
};

export default state;
