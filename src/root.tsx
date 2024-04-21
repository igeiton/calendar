import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
} from 'react-router-dom';
import App from './App';
import Note from './Body/Note';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/">
            <Route index element={<App />} />
            <Route path="/:date" element={<Note />} />
        </Route>
    )
);

export default router;
