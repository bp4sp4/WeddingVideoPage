// HTML에서 탭 메뉴 엘리먼트를 선택합니다.
const tabs = document.querySelectorAll(".category-choice");

// HTML에서 탭 내용 엘리먼트를 선택합니다.
const tabContents = document.querySelectorAll(".tab-pane");

// 탭 메뉴에 클릭 이벤트를 추가합니다.
tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    // 클릭한 탭의 data-target 속성 값을 가져옵니다.
    const targetId = tab.getAttribute("data-target");

    // 모든 탭 내용을 숨깁니다.
    tabContents.forEach((content) => {
      content.style.display = "none";
    });

    // 모든 탭 메뉴에서 'active' 클래스를 제거합니다.
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });

    // 클릭한 탭과 연결된 탭 내용을 보여주고 'active' 클래스를 추가합니다.
    const targetContent = document.getElementById(targetId);
    if (targetContent) {
      targetContent.style.display = "block";
      tab.classList.add("active");
    }
  });
});

// 페이지 로드시 서울 탭을 활성화하고 해당 내용을 표시합니다.
document.querySelector(".category-choice.active").click();
