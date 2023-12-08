document.addEventListener('DOMContentLoaded', function () {
    // 示例数据
    const data = [
        {nickname:'Comparethee', QQnumber:'3260135199', fan:'二代团', reject:'无', goodimpression:'二代4，7', other:'无'},
        // 添加更多数据...
    ];

    // 获取DOM元素
    const searchInput = document.getElementById('searchInput');
    const infoTableBody = document.querySelector('#infoTable tbody');

    // 初始化表格
    renderTable(data);

    // 搜索框事件监听
    searchInput.addEventListener('input', function () {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredData = data.filter(item =>
            item.nickname.toLowerCase().includes(searchTerm) ||
            item.QQnumber.toString().includes(searchTerm) ||
            item.fan.toLowerCase().includes(searchTerm) ||
            item.reject.toLowerCase().includes(searchTerm) ||
            item.goodimpression.toLowerCase().includes(searchTerm) ||
            item.other.toLowerCase().includes(searchTerm) ||
        );
        renderTable(filteredData);
    });

    // 渲染表格
    function renderTable(data) {
        // 清空表格
        infoTableBody.innerHTML = '';

        // 遍历数据并添加到表格
        data.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `<td>${item.nickname}</td><td>${item.QQnumber}</td><td>${item.fan}</td><td>${item.reject}</td><td>${item.goodimpression}</td><td>${item.other}</td>;`
            infoTableBody.appendChild(row);
        });
    }
});
