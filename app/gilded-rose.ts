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

  degradeOrdinaryItem(item, days) {
    const itemQuality = item.quality;
    const itemQualityDevalued = itemQuality - days;
    item.quality = this.roundQuality(itemQualityDevalued);
    console.log(item);
  }

  degradeAgedBrie(item) {
    //console.log(item, 'brie')
    return;
  }

  degradeQualityByType(item, days) {
    return (
      {
        'Aged Brie': this.degradeAgedBrie(item),
      }[item.type] || this.degradeOrdinaryItem(item, days)
    );
  }

  updateQuality(items, days) {
    items.forEach((item) => this.degradeQualityByType(item, days));
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
