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

// article content

window.addEventListener('load', function() {
    fetch('article.json')
    .then(response => response.json())
    .then(data => {
        const dataArray = data["home-article"];
        dataArray.forEach(item => {
            if(item["title-home"] && item["image-home"] && item["description-home"]){
                document.getElementById('home-title').innerHTML = item["title-home"];
                document.getElementById('home-image').src = item["image-home"];
                const description = Array.isArray(item["description-home"]) ? item["description-home"].join("\n\n") : item["description-home"];
                document.getElementById('home-description').innerText = description;
            }
        });

        
    }).catch(error => {
        console.error('Terjadi kesalahan:', error);
        document.getElementById('home-title').textContent = "Gagal memuat file";
        document.getElementById('content').textContent = "Gagal memuat file.";

    });
});

window.addEventListener('load', function() {
    fetch('article.json')
    .then(response => response.json())
    .then(data => {
        const dataArray = data["profile-article"];
        dataArray.forEach(item => {
            if(item["name-profile"] && item["image-profile"] && item["description-profile"]){
                document.getElementById('profile-name').innerHTML = item["name-profile"];
                document.getElementById('photo-profile').src = item["image-profile"];
                const description = Array.isArray(item["description-profile"]) ? item["description-profile"].join("\n\n") : item["description-profile"];
                document.getElementById('profile-description').innerText = description;
            }
        });

        
    }).catch(error => {
        console.error('Terjadi kesalahan:', error);
        document.getElementById('home-title').textContent = "Gagal memuat file";
        document.getElementById('content').textContent = "Gagal memuat file.";

    });
});

window.addEventListener('load', function() {
    fetch('article.json')
    .then(response => response.json())
    .then(data => {
        const dataArray = data["map-article"];
        dataArray.forEach(item => {
            if(item["title-map-skyrim"] && item["image-map-skyrim"] && item["map-description"]){
                document.getElementById('map-title').innerHTML = item["title-map-skyrim"];
                document.getElementById('map-image').src = item["image-map-skyrim"];
                const description = Array.isArray(item["map-description"]) ? item["map-description"].join("\n\n") : item["map-description"];
                document.getElementById('map-description').innerText = description;
            }
            if(item["title-riften"] && item["image-riften"] && item["description-riften"]){
                document.getElementById('riften-title').innerHTML = item["title-riften"];
                document.getElementById('riften-image').src = item["image-riften"];
                const description = Array.isArray(item["description-riften"]) ? item["description-riften"].join("\n\n") : item["description-riften"];
                document.getElementById('riften-description').innerText = description;
            }
            if(item["title-whiterun"] && item["image-whiterun"] && item["whiterun-description"]){
                document.getElementById('whiterun-title').innerHTML = item["title-whiterun"];
                document.getElementById('whiterun-image').src = item["image-whiterun"];
                const description = Array.isArray(item["whiterun-description"]) ? item["whiterun-description"].join("\n\n") : item["whiterun-description"];
                document.getElementById('whiterun-description').innerText = description;
            }
            if(item["title-solitude"] && item["image-solitude"] && item["description-solitude"]){
                document.getElementById('solitude-title').innerHTML = item["title-solitude"];
                document.getElementById('solitude-image').src = item["image-solitude"];
                const description = Array.isArray(item["description-solitude"]) ? item["description-solitude"].join("\n\n") : item["description-solitude"];
                document.getElementById('solitude-description').innerText = description;
            }
            if(item["title-windhelm"] && item["image-windhelm"] && item["description-windhelm"]){
                document.getElementById('windhelm-title').innerHTML = item["title-windhelm"];
                document.getElementById('windhelm-image').src = item["image-windhelm"];
                const description = Array.isArray(item["description-windhelm"]) ? item["description-windhelm"].join("\n\n") : item["description-windhelm"];
                document.getElementById('windhelm-description').innerText = description;
            }
            if(item["title-markarth"] && item["image-markarth"] && item["description-markarth"]){
                document.getElementById('markarth-title').innerHTML = item["title-markarth"];
                document.getElementById('markarth-image').src = item["image-markarth"];
                const description = Array.isArray(item["description-markarth"]) ? item["description-markarth"].join("\n\n") : item["description-markarth"];
                document.getElementById('markarth-description').innerText = description;
            }
            if(item["title-falkreath"] && item["image-falkreath"] && item["description-falkreath"]){
                document.getElementById('falkreath-title').innerHTML = item["title-falkreath"];
                document.getElementById('falkreath-image').src = item["image-falkreath"];
                const description = Array.isArray(item["description-falkreath"]) ? item["description-falkreath"].join("\n\n") : item["description-falkreath"];
                document.getElementById('falkreath-description').innerText = description;
            }
        });
 
    }).catch(error => {
        console.error('Terjadi kesalahan:', error);
        document.getElementById('home-title').textContent = "Gagal memuat file";
        document.getElementById('content').textContent = "Gagal memuat file.";

    });
});


