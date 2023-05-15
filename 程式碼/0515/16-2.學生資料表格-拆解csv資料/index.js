// CSV資料
const rawData = `"學生姓名","國文","數學","英文"
"陳小花",90,65,77
"張大頭",80,75,60
"李一百",100,60,85`;

// 獲得dom元素物件
const data = document.getElementById('data');

// 拆解學生資料，每列
const rows = rawData.split('\n');

console.log(rows);

// 用來裝入所有學生物件的陣列
const students = [];

// i從1開始，略過第一列(索引為0)
for (let i = 1; i < rows.length; i++) {
    const row = rows[i].split(',');
    console.log(row);

    // 建立學生物件
    const student = {
        name: row[0].replaceAll('"', ''),
        chinese: Number(row[1]),
        math: Number(row[2]),
        english: Number(row[3]),
        avg: (Number(row[1]) + Number(row[2]) + Number(row[3])) / 3
    };

    // 加到陣列中
    students.push(student);
}

console.log(students);