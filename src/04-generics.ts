import { friends, colleagues } from './01-basics';
import { Friend, Colleague } from './myTypes';

function findMatch<T>(data: T[], criteria: (d: T) => boolean): T | undefined {
    return data.find(criteria);
}

console.log(findMatch<Friend>(friends, (f) => f.name.startsWith('Jane')));
console.log(findMatch<Colleague>(colleagues.current, (c) => c.department === 'Finance'));
function sort<T>(data: T[], sorter: (a: T, b: T) => number): T[] {
    return [...data].sort(sorter);  // 创建副本，防止原数组被修改
}
console.log(sort<Friend>(friends, (a, b) => a.age - b.age)); // 按年龄排序朋友
console.log(
  sort<Colleague>(colleagues.current, (a, b) => a.contact.extension - b.contact.extension) // 按分机号排序同事
);