export class historyList {
  _list: [string] = ['default'];
  _listLength: number = 10;
  // 添加历史记录
  add(item: string) {
    this._list.push(item);
  }
  // 删除历史记录
  delete(index: number) {
    this._list.splice(index, 1);
  }
  // 获取历史记录
  get() {
    // 删除default
    if (this._list[0] === 'default') {
      this._list.shift();
    }
    // 取数组后10个
    if (this._list.length > this._listLength) {
    }
    return this._list.slice(-this._listLength);
  }
}
