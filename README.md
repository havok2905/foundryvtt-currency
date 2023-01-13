# foundryvtt-currency

## About

This module uses an extremely naive approach to breaking down fantasy currency equally among the members of a party.

**Example:**

A party of 3 receives 2 gold pieces and 10 silver pieces.

This tool would break this down as such:

- Party Member A: 3 SP
- Party Member B: 3 SP
- Party Member C: 3 SP
- Remainder: 2 GP and 1 SP

It is technically possible to break this out evenly, however.

- Party Member A: 1 GP
- Party Member B: 1 GP
- Party Member C: 10 SP
- Remainder: 0

## Commands

- `npm run build`: generates a bundled JS file in `/dist`.
- `npm run lint`: runs eslint against src
- `npm test`: runs unit tests
