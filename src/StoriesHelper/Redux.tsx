import { Provider } from 'react-redux';

// store
import store from '../Store/store';

export default function Redux({
    children,
}: {
    children: JSX.Element;
}): JSX.Element {
    return <Provider store={store}>{children}</Provider>;
}
