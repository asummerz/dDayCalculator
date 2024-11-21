document.getElementById('dDayForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission

    const startDate = new Date(document.getElementById('startDate').value);
    const targetDate = new Date(document.getElementById('targetDate').value);

    if (isNaN(startDate) || isNaN(targetDate)) {
        alert("Please select both dates.");
        return;
    }

    // Calculate the difference in milliseconds
    const difference = targetDate - startDate;

    // Convert to days
    const daysBetween = Math.ceil(difference / (1000 * 60 * 60 * 24));

    // Display the result
    const resultDiv = document.getElementById('result');
    if (daysBetween > 0) {
        resultDiv.textContent = `🚀 ${daysBetween}일 남았습니다`;
    } else if (daysBetween === 0) {
        resultDiv.textContent = "D-Day예요!";
    } else {
        resultDiv.textContent = `${Math.abs(daysBetween)}일 전 D-Day였습니다 😅`;
    }
});
