// HTML에서 탭 메뉴 엘리먼트를 선택합니다.
const tabs = document.querySelectorAll(".category-choice");

// HTML에서 탭 내용 엘리먼트를 선택합니다.
const tabContents = document.querySelectorAll(".tab-pane");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    // 클릭한 탭의 data-target 속성 값을 가져옵니다.
    const targetId = tab.getAttribute("data-target");

    // 모든 탭 내용을 숨기고 opacity를 0으로 설정합니다.
    tabContents.forEach((content) => {
      content.style.opacity = 0;
      content.classList.remove("active");
    });

    // 모든 탭 메뉴에서 'active' 클래스를 제거합니다.
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });

    // 클릭한 탭과 연결된 탭 내용을 슬라이드 효과와 함께 보여주고 'active' 클래스를 추가합니다.
    const targetContent = document.getElementById(targetId);
    if (targetContent) {
      targetContent.style.opacity = 1;
      targetContent.classList.add("active");
      tab.classList.add("active");
    }
  });
});

// 페이지 로드시 서울 탭을 활성화하고 해당 내용을 표시합니다.
document.querySelector(".category-choice.active").click();
