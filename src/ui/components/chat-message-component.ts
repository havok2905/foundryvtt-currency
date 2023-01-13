import {LootBreakdown} from '../../types';

export class ChatMessageComponent {
  partyMembers: number;
  result: LootBreakdown;

  constructor(partyMembers, result) {
    this.partyMembers = partyMembers;
    this.result = result;
  }

  render(): string {
    if (
      typeof this.partyMembers === 'undefined' ||
      this.partyMembers === null ||
      typeof this.result === 'undefined' ||
      this.result === null
    ) {
      return '';
    }

    return `
      <p>Party members: ${this.partyMembers}</p>
      <p>Each party member receives:</p>
      <ul>
        ${this.result.individualLoot.map((item => {
          return `<li><strong>${item.name}:</strong> ${item.total}</li>`;
        })).join('')}
      </ul>
      <p>Remainder:</p>
      <ul>
        ${this.result.remainderLoot.map((item => {
          return `<li><strong>${item.name}:</strong> ${item.total}</li>`;
        })).join('')}
      </ul>
    `;
  }
}
