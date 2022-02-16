import { expect } from 'chai';
import { Item, GildedRose } from '@/gilded-rose';

describe('Gilded Rose', () => {
  it('Quality should never be higher than 50', () => {
    const gildedRose = new GildedRose();
    const result = gildedRose.roundQuality(51);
    expect(result).equal(50);
  });
  it('Quality should never be less than 0', () => {
    const gildedRose = new GildedRose();
    const result = gildedRose.roundQuality(-1);
    expect(result).equal(0);
  });
  it('quality degrades twice as fast for expired ordinary item', () => {});
  it('degradeQualityByType should call the right function', () => {});
  it('Aged Brie should increase in quality with age', () => {});
});
