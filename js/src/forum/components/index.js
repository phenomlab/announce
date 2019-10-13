import { extend } from 'flarum/extend';
import Application from 'flarum/Application';

import Announce from './components/Announce';

app.initializers.add('zerosonesfun-announce', () => {
    extend(Application.prototype, 'mount', () => {
        const body = document.createElement('div');

        m.mount(document.body.appendChild(body), Announce.component());
    });
});
