document.addEventListener("DOMContentLoaded", function() {
    // Ընտրում ենք որոնման տուփը ID-ի միջոցով
    var searchInput = document.getElementById("Search-In-Template");
    
    if (searchInput) {
        // Զամբյուղի ոճերի փոփոխություն
        searchInput.style.backgroundColor = "#f4f4f4"; 
        searchInput.style.border = "2px solid #d1d1d1";
        searchInput.style.borderRadius = "30px";
        searchInput.style.padding = "10px 20px";
        searchInput.style.fontSize = "16px";
        searchInput.style.transition = "all 0.3s ease";
        searchInput.style.width = "100%";

        // Focus և blur են հնարավոր դարձնում
        searchInput.addEventListener("focus", function() {
            searchInput.style.backgroundColor = "#fff";
            searchInput.style.borderColor = "#007bff";
            searchInput.style.boxShadow = "0 0 10px rgba(0, 123, 255, 0.5)";
        });

        searchInput.addEventListener("blur", function() {
            searchInput.style.backgroundColor = "#f4f4f4";
            searchInput.style.borderColor = "#d1d1d1";
            searchInput.style.boxShadow = "none";
        });
    }
});
