// CSV資料
const rawData = `"學生姓名","國文","數學","英文"
"陳小花",90,65,77
"張大頭",80,75,60
"張小草",60,60,60
"李一百",100,60,85`;

// 獲得dom元素物件
// tbody
const data = document.getElementById('data');
// button
const search = document.getElementById('search');
/**
 * @type HTMLInputElement
 */
const studentName = document.getElementById('studentName');

//console.log(data, search, studentName);

// 拆解學生資料，每列
const rows = rawData.split('\n');

//console.log(rows);

// 計算科目平均值的函式
// 傳入 studentArray= 學生物件陣列, subject=科目(字串)
// 回傳 保留小數點2位(字串)
function AverageSubject(studentArray, subject) {
    let total = 0;

    for (let i = 0; i < studentArray.length; i++) {
        // 取得每個學生的物件
        const student = studentArray[i];
        // 取得某科目的成績，之後相加
        total += student[subject];
    }

    // 回傳，計算平均與保留小數點2位
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

// 用於呈現學生資料用的函式
function display(studentArray) {
    // 先清空原本的呈現資料
    data.innerHTML = '';

    const displayList = studentArray.map(function (v) {
        return `<tr>
                 <td>${v.name}</td>
                 <td>${v.chinese}</td>
                 <td>${v.math}</td>
                 <td>${v.english}</td>
                 <td>${v.avg.toFixed(2)}</td>
                </tr>`;
    });

    const displayAverage = `<tr>
                                <td>各科平均</td>
                                <td>${AverageSubject(studentArray, 'chinese')}</td>
                                <td>${AverageSubject(studentArray, 'math')}</td>
                                <td>${AverageSubject(studentArray, 'english')}</td>
                                <td></td>
                            </tr>`

    data.innerHTML = displayList.join("") + displayAverage;
}

//第一次呈現資料
display(students);

// 按下查詢按鈕事件
search.addEventListener('click', function () {
    if (studentName.value) {
        // 出現過濾後的資料
        const newStudents = students.filter(function (v) {
            return v.name.includes(studentName.value);
        })

        display(newStudents);
    } else {
        // 出現全部的資料
        display(students);
    }
});