export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  calculateOrdinaryQuality(item, days) {
    const itemQuality = item.quality;
    const itemQualityDevalued = itemQuality - days;
    item.quality = this.roundQuality(itemQualityDevalued);
  }

  calculateBrie(item, days) {
    console.log(
      '🚀 ~ file: gilded-rose.ts ~ line 27 ~ GildedRose ~ calculateBrie ~ item',
      item
    );
    // console.log(item, 'brie before');
    // const itemQuality = item.quality;
    // const itemQualityDevalued = itemQuality + days;
    // item.quality = this.roundQuality(itemQualityDevalued);
    // console.log(item, 'brie after');
  }

  calculateQualitByType(item, days) {
    const calculations = {
      ['Aged Brie']: this.calculateBrie(item, days),
      Sulfuras: null,
      ['Backstage passes to a TAFKAL80ETC concert']: null,
      ['Conjured Mana Cake']: null,
    };
    return calculations[item.name] || this.calculateOrdinaryQuality(item, days);
  }

  updateQuality(items, days) {
    items.forEach((item) => this.calculateQualitByType(item, days));
  }

  roundQuality(itemQualityDevalued: number) {
    if (!itemQualityDevalued) {
      return 0;
    }
    if (itemQualityDevalued > 50) {
      return 50;
    }
    if (itemQualityDevalued < 0) {
      return 0;
    }
    return itemQualityDevalued;
  }
}
