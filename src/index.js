import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Import custom components
import store from './store';

import Main from './components/main'

class Root extends React.Component {
    render() {
        return(
        	<Provider store={store}>
				<BrowserRouter basename={'/'} >	
                    {/* 메인 페이지 */}
                    <Switch>
                        {/* <Loader/> */}
                        <Route exact path={`${process.env.PUBLIC_URL}/`} component={Main}/>
                    </Switch>
                </BrowserRouter>
			</Provider>
    	);
    }
}

ReactDOM.render(<Root />, document.getElementById('root'));
