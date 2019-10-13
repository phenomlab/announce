import SettingsModal from 'flarum/components/SettingsModal';

export default class AnnounceSettingsModal extends SettingsModal {
    className() {
        return 'AnnounceSettingsModal Modal--medium';
    }

    title() {
        return app.translator.trans('zerosonesun-announce.admin.settings.title');
    }

    form() {
        return [
            <div className="Form-group">
                <label>{app.translator.trans('zerosonesfun-announce.admin.settings.text')}</label>
                <textarea rows="5" required className="FormControl" type="text" bidi={this.setting('zerosonesfun-announce.text')} />
            </div>,

            <div className="Form-group">
                <label>{app.translator.trans('zerosonesfun-announce.admin.settings.height')} (px)</label>
                <input className="FormControl" type="number" placeholder="50" bidi={this.setting('zerosonesfun-announce.height')} />
            </div>,

            <div className="Form-group">
                <label>{app.translator.trans('zerosonesfun-announce.admin.settings.js')}</label>
                <textarea rows="5" className="FormControl" type="text" bidi={this.setting('zerosonesfun-announce.js')} />
            </div>,
        ];
    }
}
