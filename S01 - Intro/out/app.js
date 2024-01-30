function selam4(mesaj, ...isim) {
    return `${mesaj + ' ' + isim.join(",") + '!'}`;
}
console.log(selam4('Merhaba', 'Mark'));
console.log(selam4('Merhaba', 'Mark', 'Anthony', 'Ch15'));
