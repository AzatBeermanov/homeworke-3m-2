    const data = [
      {
        title: "Природа",
        text: "Красивые леса, деревья и свежий воздух.",
        img: "https://picsum.photos/id/1018/400/250"
      },
      {
        title: "Горы",
        text: "Высокие горы и захватывающие виды.",
        img: "https://picsum.photos/id/1002/400/250"
      },
      {
        title: "Море",
        text: "Синяя вода, пляжи и отдых.",
        img: "https://picsum.photos/id/1011/400/250"
      },
      {
        title: "Город",
        text: "Современные здания и ночные огни.",
        img: "https://picsum.photos/id/1015/400/250"
      }
    ];

    function showTab(index) {
      document.getElementById("title").innerText = data[index].title;
      document.getElementById("text").innerText = data[index].text;
      document.getElementById("image").src = data[index].img;

      const tabs = document.querySelectorAll(".tab");
      tabs.forEach(tab => tab.classList.remove("active"));
      tabs[index].classList.add("active");
    }
