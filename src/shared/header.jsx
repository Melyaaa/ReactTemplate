import * as React from 'react';
import { hot } from 'react-hot-loader/root';

export function HeaderComponent() {
    return (
        <header>
            <h1>
                Hello, World!
            </h1>
            <p>hello there</p>
        </header>
    );
}

export const Header = hot(HeaderComponent);