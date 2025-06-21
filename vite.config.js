import react from '@vitejs/plugin-react-swc';

export default {
  plugins: [react()],
  preview: {
    allowedHosts: ['v-nest.onrender.com']
  }
};
