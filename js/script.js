document.addEventListener("DOMContentLoaded", function () {
    const downloadButton = document.getElementById
    ("downloadButton");

    downloadButton.addEventListener("click", function() {
        const cvPath = "../assets/OPERATOR_QC.docx";

        const link = document.createElement("a");
        link.href = cvPath;

        link.download = "operatorQC.docx";

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
});
