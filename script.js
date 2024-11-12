var paragraphs = document.querySelectorAll('.table-btn p');
paragraphs.forEach(function (paragraph) {
    paragraph.addEventListener('click', function () {
        paragraphs.forEach(function (p) {
            p.style.color = 'black';
        });
        paragraph.style.color = '#F25038';
    });
});
document.getElementById('webDesign').addEventListener('click', function () {
    document.getElementById('projectTable').innerHTML = `
        <thead>
        <tr>
            <th class="tb-pro">Project Title</th>
            <th>Budget</th>
            <th>Deadline</th>
            <th>Client</th>
        </tr>
    </thead>   
<tbody>
<tr class="table-row">
 <td class="tb-color">Web Design</td>
 <td>$1,200 to $1,800</td>
 <td>2022 Dec 15</td>
 <td>Design Co.</td>
</tr>
<tr>
<td class="tb-color">Website Renovation</td>
<td>$2,500 to 3,600</td>
<td>2022 Dec 10</td>
<td>Online Ads</td>
</tr>
<tr>
<td class="tb-color">Marketing Plan</td>
<td>$2,500 to $2200</td>
<td>2022 Dec 8</td>
<td>Web Biz</td>
</tr>
<tr>
<td class="tb-color">All-new website</td>
<td>$3,000 to $6,600</td>
<td>2022 Dec 2</td>
<td>Web Biz</td>
</tr>
<tr>
<td class="tb-color">Website Redesign</td>
<td>$1500 to $2200</td>
<td>2022 Dec 12</td>
<td>Web Presence</td>
</tr>
</tbody>
        `;
});

document.getElementById('graphics').addEventListener('click', function () {
    document.getElementById('projectTable').innerHTML = `
        <thead>
                <tr>
                    <th class="tb-pro">Project Title</th>
                    <th>Budget</th>
                    <th>Deadline</th>
                    <th>Client</th>
                </tr>
            </thead>   
    <tbody>
        <tr class="table-row">
            <td class="tb-color">Graphics</td>
            <td>$1,200 to $1,800</td>
            <td>2022 Dec 15</td>
            <td>Design Co.</td>
        </tr>
        <tr>
            <td class="tb-color">Graphics</td>
            <td>$800 to $1,200</td>
            <td>2022 Dec 10</td>
            <td>Brand XYZ</td>
        </tr>
        <tr class="table-row">
        <td class="tb-color">Graphics</td>
        <td>$1,200 to $1,800</td>
        <td>2022 Dec 15</td>
        <td>Design Co.</td>
    </tr>
    <tr>
        <td class="tb-color">Graphics</td>
        <td>$800 to $1,200</td>
        <td>2022 Dec 10</td>
        <td>Brand XYZ</td>
    </tr>
    <tr>
        <td class="tb-color">Graphics</td>
        <td>$800 to $1,200</td>
        <td>2022 Dec 10</td>
        <td>Brand XYZ</td>
    </tr>
    </tbody>
        `;
});

document.getElementById('webCoding').addEventListener('click', function () {
    document.getElementById('projectTable').innerHTML = `
        <thead>
        <tr>
            <th class="tb-pro">Project Title</th>
            <th>Budget</th>
            <th>Deadline</th>
            <th>Client</th>
        </tr>
    </thead>   
<tbody>
<tr class="table-row">
 <td class="tb-color">Web Design</td>
 <td>$1,200 to $1,800</td>
 <td>2022 Dec 15</td>
 <td>Design Co.</td>
</tr>
<tr>
<td class="tb-color">Website Renovation</td>
<td>$2,500 to 3,600</td>
<td>2022 Dec 10</td>
<td>Online Ads</td>
</tr>
<tr>
<td class="tb-color">Marketing Plan</td>
<td>$2,500 to $2200</td>
<td>2022 Dec 8</td>
<td>Web Biz</td>
</tr>
<tr>
<td class="tb-color">All-new website</td>
<td>$3,000 to $6,600</td>
<td>2022 Dec 2</td>
<td>Web Biz</td>
</tr>
<tr>
<td class="tb-color">Website Redesign</td>
<td>$1500 to $2200</td>
<td>2022 Dec 12</td>
<td>Web Presence</td>
</tr>
</tbody>
        `;
});
