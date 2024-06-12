import { RouterProvider } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { router } from './router';
import './index.css';

const root = document.querySelector('#root')!;

createRoot(root).render(<RouterProvider router={router} />);
