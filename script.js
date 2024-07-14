document.addEventListener('DOMContentLoaded', function () {
    const experienceSection = document.getElementById('experienceSection');
    const addButton = document.querySelector('.add-btn');

    addButton.addEventListener('click', function () {
        const jobNumber = experienceSection.querySelectorAll('.box-section').length + 1;

        const jobSection = document.createElement('div');
        jobSection.classList.add('box-section');

        jobSection.innerHTML = `
            <h3>Job ${jobNumber}</h3>
            <div class="form-group">
                <label for="jobName${jobNumber}">Job Name</label>
                <input type="text" id="jobName${jobNumber}" name="jobName${jobNumber}" required>
            </div>
            <div class="form-group">
                <label for="startYear${jobNumber}">Start Year</label>
                <input type="number" id="startYear${jobNumber}" name="startYear${jobNumber}" required>
            </div>
            <div class="form-group">
                <label for="endYear${jobNumber}">End Year</label>
                <input type="number" id="endYear${jobNumber}" name="endYear${jobNumber}" required>
            </div>
            <!-- Buttons below job section -->
            <div class="button-group">
                <button type="button" class="remove-btn">-</button>
                <button type="button" class="add-btn">+</button>
            </div>
        `;

        experienceSection.appendChild(jobSection);
    });

    experienceSection.addEventListener('click', function (event) {
        if (event.target.classList.contains('remove-btn')) {
            const jobSection = event.target.closest('.box-section');
            jobSection.remove();
        }
    });
});
