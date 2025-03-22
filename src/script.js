// top button scroll

let topScrollButton = document.getElementById('topScrollButton');
window.onscroll = function(){topScrollFunction()};
function topScrollFunction(){
    if(document.body.scrollTop > 500 || document.documentElement.scrollTop > 500){
        topScrollButton.style.display = "block";
    } else {
        topScrollButton.style.display = "none";
    }
}
function topScroll(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// home page text content

window.addEventListener('load', function() {
    fetch('../assets/texts/apa_itu_skyrim.txt')
    .then(response => response.text())
    .then(text => {
        const formated_text = text
            .replace(/\n/g, '<br>')
            .replace(/\t/g, '&nbsp;&nbsp;&nbsp;&nbsp;');
        document.getElementById('apa-itu-skyrim').innerHTML = formated_text;
    })
.catch(error => {
    console.error('Terjadi kesalahan:', error);
    document.getElementById('apa-itu-skyrim').textContent = "Gagal memuat file.";
    });
});

// profile page text content

window.addEventListener('load', function() {
    fetch('../assets/texts/deskripsi-profile.txt') // Ganti dengan file yang ada di server
    .then(response => response.text())
    .then(text => {
        const formated_text = text
            .replace(/\n/g, '<br>')
            .replace(/\t/g, '&nbsp;&nbsp;&nbsp;&nbsp;');
        document.getElementById('deskripsi').innerHTML = formated_text;
    })
.catch(error => {
    console.error('Terjadi kesalahan:', error);
    document.getElementById('deskripsi').textContent = "Gagal memuat file.";
    });
});

// map page text content 

window.addEventListener('load', function() {
    fetch('../assets/texts/deskripsi-map.txt') 
    .then(response => response.text())
    .then(text => {
        const formated_text = text
            .replace(/\n/g, '<br>')
            .replace(/\t/g, '&nbsp;&nbsp;&nbsp;&nbsp;');
        document.getElementById('deskripsi-map').innerHTML = formated_text;
    })
.catch(error => {
    console.error('Terjadi kesalahan:', error);
    document.getElementById('deskripsi-map').textContent = "Gagal memuat file.";
    });
});
window.addEventListener('load', function() {
    fetch('../assets/texts/deskripsi-solitude.txt') 
    .then(response => response.text())
    .then(text => {
        const formated_text = text
            .replace(/\n/g, '<br>')
            .replace(/\t/g, '&nbsp;&nbsp;&nbsp;&nbsp;');
        document.getElementById('deskripsi-solitude').innerHTML = formated_text;
    })
.catch(error => {
    console.error('Terjadi kesalahan:', error);
    document.getElementById('deskripsi-solitude').textContent = "Gagal memuat file.";
    });
});
window.addEventListener('load', function() {
    fetch('../assets/texts/deskripsi-whiterun.txt') 
    .then(response => response.text())
    .then(text => {
        const formated_text = text
            .replace(/\n/g, '<br>')
            .replace(/\t/g, '&nbsp;&nbsp;&nbsp;&nbsp;');
        document.getElementById('deskripsi-whiterun').innerHTML = formated_text;
    })
.catch(error => {
    console.error('Terjadi kesalahan:', error);
    document.getElementById('deskripsi-whiterun').textContent = "Gagal memuat file.";
    });
});
window.addEventListener('load', function() {
    fetch('../assets/texts/deskripsi-windhelm.txt') 
    .then(response => response.text())
    .then(text => {
        const formated_text = text
            .replace(/\n/g, '<br>')
            .replace(/\t/g, '&nbsp;&nbsp;&nbsp;&nbsp;');
        document.getElementById('deskripsi-windhelm').innerHTML = formated_text;
    })
.catch(error => {
    console.error('Terjadi kesalahan:', error);
    document.getElementById('deskripsi-windhelm').textContent = "Gagal memuat file.";
    });
});
window.addEventListener('load', function() {
    fetch('../assets/texts/deskripsi-riften.txt') 
    .then(response => response.text())
    .then(text => {
        const formated_text = text
            .replace(/\n/g, '<br>')
            .replace(/\t/g, '&nbsp;&nbsp;&nbsp;&nbsp;');
        document.getElementById('deskripsi-riften').innerHTML = formated_text;
    })
.catch(error => {
    console.error('Terjadi kesalahan:', error);
    document.getElementById('deskripsi-riften').textContent = "Gagal memuat file.";
    });
});
window.addEventListener('load', function() {
    fetch('../assets/texts/deskripsi-markarth.txt') 
    .then(response => response.text())
    .then(text => {
        const formated_text = text
            .replace(/\n/g, '<br>')
            .replace(/\t/g, '&nbsp;&nbsp;&nbsp;&nbsp;');
        document.getElementById('deskripsi-markarth').innerHTML = formated_text;
    })
.catch(error => {
    console.error('Terjadi kesalahan:', error);
    document.getElementById('deskripsi-markarth').textContent = "Gagal memuat file.";
    });
});
window.addEventListener('load', function() {
    fetch('../assets/texts/deskripsi-falkreath.txt') 
    .then(response => response.text())
    .then(text => {
        const formated_text = text
            .replace(/\n/g, '<br>')
            .replace(/\t/g, '&nbsp;&nbsp;&nbsp;&nbsp;');
        document.getElementById('deskripsi-falkreath').innerHTML = formated_text;
    })
.catch(error => {
    console.error('Terjadi kesalahan:', error);
    document.getElementById('deskripsi-falkreath').textContent = "Gagal memuat file.";
    });
});

// character page text content

