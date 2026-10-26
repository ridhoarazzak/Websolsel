const MENU=[['kebakaran','Kebakaran'],['embung','Air dan embung'],['risiko','Banjir dan galodo'],['profil','Profil nagari']];
function mulai(aktif){
  document.querySelector('header').innerHTML='<b>Solsel Siaga</b><nav>'+MENU.map(([k,t])=>`<a href="${k}.html"${k===aktif?' aria-current="page"':''}>${t}</a>`).join('')+'</nav>';
}
function buatPeta(){
  const m=L.map('map').setView([-1.6,101.3],9);
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',{maxZoom:18,attribution:'© OpenStreetMap'}).addTo(m);
  return m;
}
function pesan(h){const e=document.getElementById('pesan');e.hidden=false;e.innerHTML+='<p>'+h+'</p>';}
async function muat(url){
  try{const r=await fetch(url);if(!r.ok)throw 0;return await r.json();}
  catch(e){pesan('Data <code>'+url+'</code> belum ditemukan. Jalankan skrip GEE yang sesuai, lalu taruh hasilnya di folder <code>data/</code>. Buka lewat server (GitHub Pages atau <code>python -m http.server</code>), bukan klik dua kali.');return null;}
}
const fmt=(n,d=0)=>n==null||isNaN(n)?'-':Number(n).toLocaleString('id-ID',{maximumFractionDigits:d});
const $=id=>document.getElementById(id);
function kuantil(arr,q){const s=[...arr].sort((a,b)=>a-b);return s[Math.floor((s.length-1)*q)];}
