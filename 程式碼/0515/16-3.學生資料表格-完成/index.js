// CSV資料
const rawData = `"學生姓名","國文","數學","英文"
"陳小花",90,65,77
"張大頭",80,75,60
"李一百",100,60,85`;

// 獲得dom元素物件
const data = document.getElementById('data');

// 拆解學生資料，每列
const rows = rawData.split('\n');

//console.log(rows);

// 計算科目平均值的函式
// 傳入 studentArray= 學生物件陣列, subject=科目(字串)
// 回傳 保留小數點2位字串
function AverageSubject(studentArray, subject) {
    let total = 0;

    for (let i = 0; i < studentArray.length; i++) {
        // 取得每個學生的物件
        const student = studentArray[i];
        // 取得某科目的成績，之後相加
        total += student[subject];
    }

    return (total / studentArray.length).toFixed(2);
}

// 用來裝入所有學生物件的陣列
const students = [];

// i從1開始，略過第一列(索引為0)
for (let i = 1; i < rows.length; i++) {
    // 拆解學生每格的資料，利用逗點分隔符號
    const row = rows[i].split(',');
    //console.log(row);

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

const displayList = students.map(function (v) {
    return `<tr>
             <td>${v.name}</td>
             <td>${v.chinese}</td>
             <td>${v.math}</td>
             <td>${v.english}</td>
             <td>${v.avg.toFixed(2)}</td>
            </tr>`;
});

//console.log(displayList);
const displayAverage = `<tr>
<td>各科平均</td>
<td>${AverageSubject(students, 'chinese')}</td>
<td>${AverageSubject(students, 'math')}</td>
<td>${AverageSubject(students, 'english')}</td>
<td></td>
</tr>`

data.innerHTML = displayList.join("") + displayAverage;