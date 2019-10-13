import app from 'flarum/app';
import CustomFooterSettingsModal from './components/AnnounceSettingsModal';

app.initializers.add('zerosonesfun-announce', () => {
    app.extensionSettings['zerosonesfun-announce'] = () => app.modal.show(new CustomFooterSettingsModal());
});
