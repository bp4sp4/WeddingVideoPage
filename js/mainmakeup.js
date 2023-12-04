(() => {
  const $ul = document.getElementById("myList3");
  const itemsToDisplayInitially = 6; // Number of items to display initially
  const defaultImageUrl = "img/default.png";

  function displayInitialItems() {
    fetch("json/makeup.json")
      .then((response) => response.json())
      .then((data) => {
        const itemsWithImages = shuffleArray(
          data.users.filter((user) => isValidImageUrl(user.image_url))
        );

        const itemsToDisplay = itemsWithImages.slice(
          0,
          itemsToDisplayInitially
        );

        itemsToDisplay.forEach((user) => {
          const $li = $ul.appendChild(document.createElement("li"));

          let imageUrl = user.image_url.replace(/^"|"$/g, "");

          const $img = document.createElement("img");
          $img.src = imageUrl;
          $img.alt = "User Image";
          $img.classList.add("wedding"); // Add your desired class name

          $img.onerror = () => {
            $img.src = defaultImageUrl;
          };

          $li.appendChild($img);

          const userInfo = `${user.info_wrap} - ${user.region}`;
          const $userInfo = document.createElement("div");
          $userInfo.textContent = userInfo;
          $userInfo.classList.add("company");
          $li.appendChild($userInfo);
        });
      })
      .catch((error) => console.error("Error fetching JSON:", error));
  }

  function isValidImageUrl(url) {
    // Customize this function based on what you consider a valid image URL
    return (
      url &&
      url.trim() !== "" &&
      url !== "img/default.png" &&
      /\.(jpg|jpeg|png|gif)$/i.test(url)
    );
  }

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  displayInitialItems();
})();
