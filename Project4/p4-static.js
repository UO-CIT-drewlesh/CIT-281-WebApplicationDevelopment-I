// Static copy of your data array
const data = [
  { question: "Q1: What is HTML?", answer: "A1: HTML is the markup language for web pages." },
  { question: "Q2: What is CSS?", answer: "A2: CSS styles the HTML elements on a page." },
  { question: "Q3: What is JavaScript?", answer: "A3: JavaScript adds interactivity to web pages." }
];

// Reference DOM elements
const buttonsDiv = document.getElementById("buttons");
const outputDiv = document.getElementById("output");

// Create buttons for each question
data.forEach((item, index) => {
    const btn = document.createElement("button");
    btn.textContent = item.question;
    btn.style.margin = "0.3rem";
    btn.style.padding = "0.5rem 1rem";
    btn.style.borderRadius = "4px";
    btn.style.cursor = "pointer";
    btn.onclick = () => {
        outputDiv.innerHTML = `<strong>${item.question}</strong><br>${item.answer}`;
    };
    buttonsDiv.appendChild(btn);
});

// Optional: button to show all Q/A
const showAllBtn = document.createElement("button");
showAllBtn.textContent = "Show All Questions & Answers";
showAllBtn.style.margin = "0.5rem 0";
showAllBtn.style.padding = "0.5rem 1rem";
showAllBtn.style.borderRadius = "4px";
showAllBtn.style.cursor = "pointer";
showAllBtn.onclick = () => {
    outputDiv.innerHTML = data.map(d => `<strong>${d.question}</strong><br>${d.answer}`).join("<hr>");
};
buttonsDiv.appendChild(showAllBtn);
