function updateClock() {
    var now = new Date(); var h = ('0' + now.getHours()).slice(-2); var m = ('0' + now.getMinutes()).slice(-2); var s = ('0' + now.getSeconds()).slice(-2);
    var el = document.getElementById('clock'); if (el) el.textContent = 'Текущее время: ' + h + ':' + m + ':' + s;
}
setInterval(updateClock, 1000); window.addEventListener('load', updateClock);
function updateVisitorCounter() {
    var el = document.getElementById('visitor-counter'); if (!el) return;
    var today = new Date().toDateString(); var lastVisit = localStorage.getItem('zdom_last_visit'); var total = parseInt(localStorage.getItem('zdom_total_visits') || '0', 10);
    if (lastVisit !== today) { total += 1; localStorage.setItem('zdom_total_visits', total); localStorage.setItem('zdom_last_visit', today); }
    el.textContent = 'Вы посетили сайт за сегодня: ' + total + ' раз(а)';
}
window.addEventListener('load', updateVisitorCounter);
window.addEventListener('load', function () {
    var links = document.querySelectorAll('#nav a'); var current = location.pathname.split('/').pop() || 'index.html';
    links.forEach(function (a) { if (a.getAttribute('href') === current) { a.style.background = '#1a5e2a'; a.style.fontWeight = 'bold'; } });
});
window.addEventListener('load', function () {
    var el = document.getElementById('greeting'); if (!el) return; var h = new Date().getHours(); var text = 'Добро пожаловать!';
    if (h >= 5 && h < 12) text = 'Доброе утро!'; else if (h >= 12 && h < 18) text = 'Добрый день!'; else if (h >= 18 && h < 23) text = 'Добрый вечер!'; else text = 'Доброй ночи!';
    el.textContent = text;
});