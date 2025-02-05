import { Friend, Colleague, EmailContact } from './myTypes';
import { friends, colleagues } from './01-basics';
function older(f: Friend) : string {
    f.age += 1
    return `${f.name} is now ${f.age}` 
}

console.log(older(friends[0]))
function allOlder(fs: Friend[]): string[] {
    return fs.map(f => {
        f.age += 1;
        return `${f.name} is now ${f.age}`;
    });
}
console.log(allOlder(friends));
function highestExtension(cs: Colleague[]): Colleague {
    const result = cs.sort((c1, c2) => c1.contact.extension - c2.contact.extension);
    return result[cs.length - 1]; 
}
    console.log(highestExtension(colleagues.current));
    function addColleague(cs: Colleague[], name: string, department: string, email: string): void {
        const maxExtension = Math.max(...cs.map(c => c.contact.extension)); // 获取最高分机号
        const newColleague: Colleague = {
            name,
            department,
            contact: {
                email,
                extension: maxExtension + 1,
            }
        };
        cs.push(newColleague);
    }
    addColleague(colleagues.current, "Sheild O Connell", "HR", "soc@here.com");
console.log(colleagues.current.filter((c) => c.name === "Sheild O Connell"));

function sortColleagues(
    colleagues: Colleague[],
    sorter: (c1: Colleague, c2: Colleague) => number,
    max?: number  
  ): EmailContact[] {
    let end = colleagues.length;
    if (max !== undefined) {
      end = max < 2 ? 1 : max;  
    }
    const sorted = colleagues.sort(sorter);
    const fullResult = sorted.map((ce) => ({
      name: ce.name,
      email: ce.contact.email
    }));
    return fullResult.slice(0, end);
  }
  
  console.log(sortColleagues(colleagues.current, (a, b) => a.contact.extension - b.contact.extension, 3));
  console.log(sortColleagues(colleagues.current, (a, b) => a.name.length - b.name.length, 1));
  console.log(sortColleagues(colleagues.current, (a, b) => a.name.length - b.name.length));