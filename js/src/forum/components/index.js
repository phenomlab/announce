import { extend } from 'flarum/extend';
import Application from 'flarum/Application';

import Announce from './components/Announce';

app.initializers.add('zerosonesfun-announce', () => {
    extend(Application.prototype, 'mount', () => {
        const footer = document.createElement('div');
        footer.setAttribute("id", "Announce-Container");

        m.mount(document.body.appendChild(footer), Announce.component());
    });
});
