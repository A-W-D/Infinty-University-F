document.addEventListener("DOMContentLoaded", function () {

    const coursesPerPage = 6; // Number of courses to display per page
    const courses = document.querySelectorAll('.project-wrap'); // Select all the courses
    const paginationContainer = document.querySelector('.block-27 ul'); // Pagination controls

    let currentPage = 1;
    const totalPages = Math.ceil(courses.length / coursesPerPage); // Calculate total pages needed

    // Function to display only the courses for the current page
    function displayCourses(page) {
        const start = (page - 1) * coursesPerPage;
        const end = start + coursesPerPage;

        // Hide all courses first
        courses.forEach((course, index) => {
            course.style.display = (index >= start && index < end) ? 'block' : 'none';
        });
    }

    // Function to update pagination controls (highlight active page)
    function updatePaginationUI() {
        paginationContainer.querySelectorAll('li').forEach((li, index) => {
            if (parseInt(li.textContent.trim()) === currentPage) {
                li.classList.add('active');
            } else {
                li.classList.remove('active');
            }
        });
    }

    // Function to handle pagination clicks
    function handlePaginationClick(event) {
        event.preventDefault();
        const target = event.target;

        if (target.tagName === 'A' || target.tagName === 'SPAN') {
            const selectedPage = target.textContent.trim();

            if (selectedPage === "‹" && currentPage > 1) {
                currentPage--;
            } else if (selectedPage === "›" && currentPage < totalPages) {
                currentPage++;
            } else if (!isNaN(selectedPage)) {
                currentPage = parseInt(selectedPage);
            }

            displayCourses(currentPage);
            updatePaginationUI();
        }
    }

    // Initial course display and pagination setup
    function initPagination() {
        displayCourses(currentPage); // Display initial courses
        paginationContainer.addEventListener('click', handlePaginationClick); // Attach click handler
    }

    initPagination();
});
