(() => {
  const $ul = document.getElementById("myList");
  const io = new IntersectionObserver(
    (entry, observer) => {
      const ioTarget = entry[0].target;

      if (entry[0].isIntersecting) {
        io.unobserve(ioTarget);

        // Display more items from the JSON file
        displayMoreItems();
      }
    },
    {
      threshold: 0.5,
    }
  );

  let currentIndex = 0;
  const itemsPerLoad = 12;
  const defaultImageUrl = "img/default.png";

  function displayMoreItems() {
    fetch("json/dress.json")
      .then((response) => response.json())
      .then((data) => {
        const itemsWithImages = shuffleArray(
          data.users.filter((user) => user.image_url)
        );
        const itemsWithoutImages = shuffleArray(
          data.users.filter((user) => !user.image_url)
        );

        const shuffledData = interleaveArrays(
          itemsWithImages,
          itemsWithoutImages
        );

        const itemsToDisplay = shuffledData.slice(
          currentIndex,
          currentIndex + itemsPerLoad
        );

        itemsToDisplay.forEach((user) => {
          const $li = $ul.appendChild(document.createElement("li"));

          let imageUrl = user.image_url
            ? user.image_url.replace(/^"|"$/g, "")
            : defaultImageUrl;

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

          io.observe($li);
        });
        currentIndex += itemsPerLoad;
      })
      .catch((error) => console.error("Error fetching JSON:", error));
  }

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  function interleaveArrays(arr1, arr2) {
    const result = [];
    const maxLength = Math.max(arr1.length, arr2.length);
    for (let i = 0; i < maxLength; i++) {
      if (i < arr1.length) result.push(arr1[i]);
      if (i < arr2.length) result.push(arr2[i]);
    }
    return result;
  }

  io.observe($ul);
})();
