const aptBtn = document.querySelector('#accept')
aptBtn.addEventListener('click', () => {
    navigator.clipboard.writeText('data:text/html;' +
        'base64,aHR0cHM6Ly9kaXNrLnlhbmRleC5ydS9pL1lTeVN4TkZzNnFwRmpB')
    const dInf = document.createElement('dialog')
    const clBtn = document.querySelector('.clsBtn')
    dInf.className = 'dinf'
    dInf.innerHTML = 'text is copied<br>' +
        '<button class=clsBtn onclick=document.querySelector(\'.dinf\').close()>close</button>'
    document.body.append(dInf)
    dInf.showModal()
    //alert('text is copied')
})
// impossible to navigate
//location.href = 'data:text/html;base64,aHR0cHM6Ly9kaXNrLnlhbmRleC5ydS9pL1lTeVN4TkZzNnFwRmpB'