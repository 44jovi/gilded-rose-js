# Item Properties

## Daily change rules

### Regular Item

- sellIn
  - -1
- quality
  - sellIn > 0 days
    - quality -1 (min. 0)
  - sellIn <= 0 days
    - quality -2 (min. 0)

### 'Aged Brie'

- sellIn
  - -1
- quality
  - +1 (max. 50)
  - stops increasing after sell by date(?)

### ‘Sulfuras, Hand of Ragnaros’

- sellIn
  - n/a (does not change)
- quality
  - 80 (always)

### ‘Backstage passes’

- sellIn
  - -1
- quality
  - sellIn > 10 days
    - quality -1 (max. 50)
  - sellIn <= 10 days
    - quality +2 (max. 50)
  - sellIn <= 5 days
    - quality +3 (max. 50)
  - sellIn <= 0 days
    - quality = 0

### ‘Conjured’ Item

- sellIn
  - -1
- quality
  - sellIn > 0 days
    - quality -2 (min. 0)
  - sellIn <= 0 days
    - quality -4 (min. 0)
