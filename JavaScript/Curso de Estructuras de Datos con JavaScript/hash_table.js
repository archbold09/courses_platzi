class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  hashMethod(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(key, value) {
    const address = this.hashMethod(key);

    if (!this.data[address]) {
      this.data[address] = [];
    }

    this.data[address].push([key, value]);

    return this.data;
  }

  get(key) {
    const address = this.hashMethod(key);
    const currentBucket = this.data[address];

    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    }

    return [];
  }

  delete(key) {
    const address = this.hashMethod(key);

    delete this.data[address];

    return this.data;
  }

  keys() {
    const keys = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        keys.push(this.data[i][0][0]);
      }
    }

    return keys;
  }

  values() {
    const values = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        values.push(this.data[i][0][1]);
      }
    }

    return values;
  }
}

const myTable = new HashTable(50);

myTable.set('Angel', '1999');
myTable.set('Milena', '1997');
myTable.set('Giovanna', '1958');

// myTable.get('Angel');

// myTable.delete('Angel');

myTable.keys();

myTable.values();
