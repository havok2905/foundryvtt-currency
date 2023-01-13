import {
  ChatMessageComponent,
  CurrencyFormComponent
} from './ui';
import {
  COPPER_PIECES,
  ELECTRUM_PIECES,
  GOLD_PIECES,
  PLATINUM_PIECES,
  SILVER_PIECES
} from './constants';
import {
  Loot
} from './types';

const renderSidebarButton = (controls, onClick) => {
  const tokenControls = controls.find(c => c.name === 'notes');
  
  if (!tokenControls?.tools) {
    return;
  }

  tokenControls.tools.push({
    button: true,
    icon: 'fas fa-coins',
    name: 'currency',
    onClick,
    title: 'Currency'
  });
};

class MyFormApplication extends FormApplication {
  chatMessageComponent: ChatMessageComponent;
  currencyFormComponent: CurrencyFormComponent;

  constructor(object, options) {
    super(object, options);

    const partyMembers = 0;

    const loot: Loot = [
      { name: COPPER_PIECES, total: 0 },
      { name: SILVER_PIECES, total: 0 },
      { name: ELECTRUM_PIECES, total: 0 },
      { name: GOLD_PIECES, total: 0 },
      { name: PLATINUM_PIECES, total: 0 }
    ];

    this.currencyFormComponent = new CurrencyFormComponent(partyMembers, loot, (partyMembers, result) => {
      const chatMessageComponent = new ChatMessageComponent(partyMembers, result);
      const content = chatMessageComponent.render();

      ChatMessage.create({
        speaker: { alias: 'Foundry VTT Currency' },
        content
      });
    });
  }

  activateListeners(html) {
    super.activateListeners(html);
    const el = html[0];
    this.currencyFormComponent.el = el;
    this.currencyFormComponent.render();
  }

  async _updateObject() {
    return;
  }
}

declare global {
  interface Window {
    /* eslint-disable-next-line */
    MyFormApplication: any; 
  }
}

window.MyFormApplication = MyFormApplication;

Hooks.on('getSceneControlButtons', (controls) => {
  renderSidebarButton(controls, () => {
    new MyFormApplication({}, {
      closeOnSubmit: false,
      height: 650,
      id: 'foundry-vtt-currency-application',
      popOut: true,
      resizable: true,
      template: 'modules/foundryvtt-currency/templates/main.html',
      title: 'Foundry VTT Currency',
      width: 800
    }).render(true);
  });
});
