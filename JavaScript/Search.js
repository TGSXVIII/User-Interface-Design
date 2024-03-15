document.addEventListener('DOMContentLoaded', function () {
    // Attach event listener to the search form
    document.getElementById('searchForm').addEventListener('submit', function (event) {
        // Get the search value
        const searchValue = document.getElementById('searchInput').value.toLowerCase();

        // Check if the search value matches specific keywords
        if (searchValue = "mads") {
            // Load the Mads template
            loadMads();
        } else if (searchValue = "jonas") {
            // Load the Jonas template
            loadJonas();
        } else {
            // Load the template for other values
            LoadTemplate();
        }

        // Prevent default form submission behavior
        event.preventDefault();
    });

    // Attach event listener to the CV button
    document.getElementById('cvButton').addEventListener('click', function (event) {
        // Load the template
        LoadTemplate();

        // Prevent default button click behavior
        event.preventDefault();
    });
});
