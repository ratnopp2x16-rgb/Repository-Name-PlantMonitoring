if('serviceWorker'in navigator){navigator.serviceWorker.register('service-worker.js');}
const t=document.getElementById('themeBtn');t.onclick=()=>document.body.classList.toggle('dark');
async function load(){try{const r=await fetch(API);const d=await r.json();
document.getElementById('status').textContent=d.status??'RUNNING';
document.getElementById('prod').textContent=d.production??'-';
document.getElementById('runtime').textContent=d.runtime??'-';
document.getElementById('alarm').textContent=d.alarm??'-';
}catch(e){document.getElementById('status').textContent='Offline';}}
load();setInterval(load,10000);