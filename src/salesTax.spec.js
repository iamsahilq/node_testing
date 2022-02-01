import { expect } from 'chai';
import generateReceipt from './salesTax';

const basket_1 = [
  {
    name: 'book',
    category: 'Book',
    qty: 1,
    imported: false,
    shelfPrice: 12.49,
  },
  {
    name: 'music CD',
    category: 'Other',
    qty: 1,
    imported: false,
    shelfPrice: 14.99,
  },
  {
    name: 'chocolate bar',
    category: 'Food',
    qty: 1,
    imported: false,
    shelfPrice: 0.85,
  },
];

describe('Testing sales tax', () => {
  it('test basket_1', () => {
    expect(basket_1).to.haveOwnProperty('length');
    const result = generateReceipt(basket_1);
    expect(result).to.haveOwnProperty('length');
    expect(result.length).to.equal(basket_1.length + 1);
    basket_1.map((e, i) => {
      expect(e.name).to.equal(result[i].name);
    });
    const total = result.pop();
    expect(total).to.haveOwnProperty('Total Amount');
    expect(Number(total['Total Amount'])).to.equal(29.83);
    expect(total).to.haveOwnProperty('Total Tax');
    expect(Number(total['Total Tax'])).to.equal(1.5);
  });
});
