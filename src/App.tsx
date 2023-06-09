import * as React from 'react'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './routers/AppRouter';

export const App = () => {
    return (
        <div>
            <BrowserRouter>
                <AppRouter />
            </BrowserRouter>
        </div>
    )
}
