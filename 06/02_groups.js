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
}

let group = Group.from([10, 20]);
console.log(group.has(10));
// true
console.log(group.has(30));
// false
group.add(10);
group.delete(10);
console.log(group.has(10));
// false
