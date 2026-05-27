function toogleBio() {
    const bio = document.getElementById('biodata');
    const btn = document.querySelector('button')
    if (bio.style.display == 'none') {
        bio.style.display = 'block';
        btn.textContent = 'Sembunyikan';
    } else {
        bio.style.display = 'none';
        btn.textContent = 'lihat Biodata';
    }
}
function gantiwarna(warna) {
    const box = document.getElementById('colorBox');
    box.style.backgroundColor = warna;
}
function tambahSkill() {
    const input = document.getElementById('skillInput');
    const text = input.value.trim();
    if (text == '') return
    const list = document.getElementById('skillList');
    const li = document.createElement('li');


    const span = document.createElement('span');
    span.textContent = text;

    const btnHapus = document.createElement('button');
    btnHapus.textContent = 'Hapus';
    btnHapus.className = 'btn-hapus';
    btnHapus.onclick = function () {
        li.remove();
    };
    li.appendChild(span); // teks dulu
    li.appendChild(btnHapus);
    list.appendChild(li);

    input.value = '';
    input.focus();

}