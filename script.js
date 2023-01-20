const url = "https://whatyearisit-backend-xi-ten.vercel.app"

fetch("https://whatyearisit-backend-xi-ten.vercel.app/year")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    document.querySelector("#year").textContent = "This year is: " + data.year;
  });
