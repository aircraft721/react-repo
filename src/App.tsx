import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';

//stores
import { demoStore } from './stores/DemoStore';

//views

const stores = {
    demoStore
};

interface IProps {
    className?: string;
}

export const App: React.SFC<IProps> = () => {
    return (
        <>
            blabla
        </>
    );
}

ReactDOM.render(
<Provider 
    {...stores}
>
    <App />
</Provider>
, document.getElementById('app'));
