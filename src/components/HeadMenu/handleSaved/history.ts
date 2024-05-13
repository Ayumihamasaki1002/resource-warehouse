export default class historyList {
  _list: [string] = ['default'];
  _listLength: number = 5;
  // 添加历史记录
  add(item: string) {
    this._list.unshift(item);
  }
  // 删除指定的历史记录
  delete(index: number) {
    this._list.splice(index, 1);
  }
  // 替换历史记录
  replace(list: [string]) {
    this._list = list;
  }
  // 获取历史记录
  get() {
    // 删除default
    if (this._list[this._list.length - 1] === 'default') {
      this._list.pop();
    }
    // 取数组前5个
    return this._list.slice(0, this._listLength);
  }
}
