class Group {
  constructor() {
    this.items = [];
  }

  add(value) {
    if (!this.has(value)) {
      this.items.push(value);
    }
  }

  delete(value) {
    this.items = this.items.filter((v) => v !== value);
  }

  has(value) {
    return this.items.indexOf(value) !== -1;
  }

  static from(values) {
    let group = new Group();
    for (const value of values) {
      group.add(value);
    }
    return group;
  }

  [Symbol.iterator]() {
    return new GroupIterator(this);
  }
}

class GroupIterator {
  constructor(group) {
    this.index = 0;
    this.group = group;
  }

  next() {
    if (this.index >= this.group.items.length) return { done: true };

    let value = this.group.items[this.index];
    this.index++;
    return { value, done: false };
  }
}

for (let value of Group.from(['a', 'b', 'c'])) {
  console.log(value);
}
// a
// b
// c
