import {
  currencyBreakdown,
  getTreasure
} from '../../utils';
import {
  Loot,
  LootBreakdown,
  LootItem
} from '../../types';

export class CurrencyFormComponent {
  el: HTMLElement | null;
  partyMembers: number;
  loot: Loot;
  onSubmit: (partyMembers: number, result: LootBreakdown) => void;

  constructor(partyMembers, loot, onSubmit) {
    this.el = null;
    this.loot = loot;
    this.partyMembers = partyMembers;
    this.onSubmit = onSubmit;
  }

  getRandomLootCrFromHtml(): number {
    const input = <HTMLInputElement>this.el?.querySelector('[name="random-loot-cr-field"]');
    const num = Number(input?.value);
    return Number.isNaN(num) ? 0 : num;
  }

  getRandomLootPartyMembersFromHtml(): number {
    const input = <HTMLInputElement>this.el?.querySelector('[name="random-loot-party-members-field"]');
    const num = Number(input?.value);
    return Number.isNaN(num) ? 0 : num;
  }

  getPartyMembersFromHtml(): number {
    const input = <HTMLInputElement>this.el?.querySelector('[name="party-members"]');
    const num = Number(input?.value);
    return Number.isNaN(num) ? 0 : num;
  }

  getLootFromHtml(): Loot {
    const items = this.el?.querySelectorAll('.currency-item') || [];
    const loot: Loot = [];

    if (!items.length) return loot;

    for(let x=0; x<items.length; x++) {
      const name = items[x].getElementsByTagName('label')[0].textContent?.trim() ?? '';
      const total = Number(items[x].getElementsByTagName('input')[0].value) ?? 0;
      loot.push({name, total});
    }

    return loot;
  }

  registerAddButton(): void {
    const addButton = <HTMLButtonElement>this.el?.querySelector('[name="add-currency-button"]');

    if (!addButton) return;

    addButton.addEventListener('click', event => {
      event.preventDefault();

      this.partyMembers = this.getPartyMembersFromHtml();
      this.loot = this.getLootFromHtml();

      const input = <HTMLInputElement>this.el?.querySelector('#new-currency-item-field');
      
      if (!input) return;

      const name = input.value;
      const total = 0;

      this.loot.push({name, total});
      this.render();
    });
  }

  registerRandomLootButton(): void {
    const randomLootButton = <HTMLButtonElement>this.el?.querySelector('[name="submit-random-loot"]');
    
    if (!randomLootButton) return;

    randomLootButton.addEventListener('click', event => {
      event.preventDefault();

      const cr = this.getRandomLootCrFromHtml();
      const partyMembers = this.getRandomLootPartyMembersFromHtml();
      const loot = getTreasure(cr);
      const result = currencyBreakdown(loot, partyMembers);

      this.onSubmit(partyMembers, result);
    });
  }

  registerSubmitButton(): void {
    const submitButton = <HTMLButtonElement>this.el?.querySelector('[name="submit-calculate"]');

    if (!submitButton) return;

    submitButton.addEventListener('click', event => {
      event.preventDefault();

      const loot = this.getLootFromHtml();
      const partyMembers = this.getPartyMembersFromHtml();
      const result = currencyBreakdown(loot, partyMembers);

      this.onSubmit(partyMembers, result);
    });
  }

  getLootItem(item: LootItem): string {
    const {name, total} = item;

    return `
      <div class="currency-item">
        <label for="${name}">
          ${name}
        </label>
        <input
          type="number"
          value="${total}"/>
      </div>
    `;
  }

  getLootList(): string {
    return this.loot.map(item => this.getLootItem(item)).join('');
  }

  render() {
    if (
      typeof this.partyMembers === 'undefined' ||
      this.partyMembers === null ||
      typeof this.loot === 'undefined' ||
      this.loot === null ||
      !this.loot.length ||
      !this.el
    ) {
      return;
    }

    const content = `
      <div>
        <h2>Currency Breakdown</h2>
        <form>
          <div>
            <label for="party-members">
              Party Members
            </label>
            <input
              id="party-members"
              name="party-members"
              type="number"
              value="${this.partyMembers}">
          </div>
          ${this.getLootList()}
          <div>
            <label for="new-currency-item-field">
              New Loot Item
            </label>
            <input
              id="new-currency-item-field"
              name="new-currency-item-field"
              placeholder="Name..."
              type="text"
              value=""/>
            <button
              id="add-currency-button"
              name="add-currency-button"
              type="button">
              +
            </button>
            <button
              id="submit-calculate"
              name="submit-calculate"
              type="button">
              Calculate
            </button>
          </div>
        </form>
        <h2>Random Loot Generator</h2>
        <form>
          <div>
            <label>
              Party Members
            </label>
            <input
              id="random-loot-party-members-field"
              name="random-loot-party-members-field"
              type="number"
              value="0"/>
          </div>  
          <div>
            <label>
              CR
            </label>
            <input
              id="random-loot-cr-field"
              name="random-loot-cr-field"
              type="number"
              value="0"/>
          </div>
          <div>
            <button
              id="submit-random-loot"
              name="submit-random-loot"
              type="button">
              Calculate Random Loot
            </button>
          </div>
        </form>
      </div>
    `;

    this.el.innerHTML = content;
    this.registerAddButton();
    this.registerRandomLootButton();
    this.registerSubmitButton();
  }
}
