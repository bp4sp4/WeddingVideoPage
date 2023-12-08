## WeddingLery - 퍼블리싱 완료

## 작업환경 : macOS, 작업툴 : VSCode, STS

## 작업기간 - 23/11/01 ~ 23/12/06 - 1개월

<div align=center><h1>📚 STACKS</h1></div>
<div align=center> 
  <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> 
  <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"> 
  <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> 
  <img src="https://img.shields.io/badge/jquery-0769AD?style=for-the-badge&logo=jquery&logoColor=white">
  <img src="https://img.shields.io/badge/bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white">
  <br>
    <img src="https://img.shields.io/badge/spring-6DB33F?style=for-the-badge&logo=spring&logoColor=white"> 
    <img src="https://img.shields.io/badge/mariaDB-003545?style=for-the-badge&logo=mariaDB&logoColor=white"> 
  <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">
  <img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white">
  <img src="https://img.shields.io/badge/fontawesome-339AF0?style=for-the-badge&logo=fontawesome&logoColor=white">
  <br>
</div>
(마우스 우클릭 통해 새창으로 열어 봐주시면 편하게 보실수 있습니다.)
<h2>WeddingLery Demo - <a target="_blank" href="https://bp4sp4.github.io/WeddingVideoPage" >WeddingLery</a> <br>
WeddingLery All Figma - <a target="_blank" href="https://www.figma.com/file/ShCgLKcrh1RjeZv4DnSUYb/%EC%9B%A8%EB%94%A9%EB%9F%AC%EB%A6%AC?type=design&node-id=206%3A216&mode=design&t=FdM5xlLM6nrDN5ts-1">Figma</a></h2>

<h2>📌 프로젝트 진행이유</h2>

- 웨딩 영상 홈페이지 라는 사이트 퍼블을 의뢰받아 시작했다.
- 웨딩 홈페이지도 만들어 보면 퍼블리싱능력과, 디자인감각도 끌어 올릴 수 있다 싶어 시작하게 되었다.
- 빈응형 홈페이지 제작 실력향상을 위해 퍼블을 진행했다.
- 초기홈페이지
  ![KakaoTalk_Photo_2023-12-08-20-05-27](https://github.com/bp4sp4/SkeletonUIPractice/assets/62207757/3dc42a65-e9db-40ac-b35e-90d624272183)

<h2>❗ 어려웠던점</h2>

- swiper.js를 처음 써보는데 vscode 라이브서버에선 잘돌아가던게 스프링만가면 자꾸 먹통이되어서 확인해보니 <c:import>로 헤더따로 푸터따로 스크립트 따로 관리하던게 문제였다.
- swiper.js를 어쩔수 없이 script.jsp에서 따로 빼고 main.jsp로 스크립트로 연결하니 작동되었다.
- 스드메 영역이 무한스크롤과 데이터가 필요하다보니 웨딩북사이트 이미지를 참고해 크롤링을 진행해 json뿌려주는 형식이다보니 굉장히 많은 시간을 쏟았다.

<h2>📎  아쉬운점</h2>

- 아쉬운점이 있다면 react와 스프링 연결하는 법을 못해 html,css로 진행된게 아쉬움이 많이 남는다.
- 비쥬얼 업데이트를 많이 진행했지만 커뮤니티 반응형 모바일 테이블 디자인이 굉장히 아쉽다.
- 반응형 홈페이지이기 때문에 @import형식으로 관리못한게 아쉽다.

<h2>✈ 프로젝트 진행</h2>
<h3># 메인</h3>

- 항상 프로젝트를 진행하게 되면 메인 컬러를 정하는데 로고와 비슷한 색상으로 #b6a368 으로 진행됬다.
- 메인 색상을 고르게되면 뭐든 디자인하게 되면 그 색으로 통일하게 되기 때문에 정하고 가는 습관이 있다.
- 원래 초기 기획 홈페이지는 웹으로만 제작 기획되었었지만, 개인적으로 반응형으로 하자는것이 어떠냐는 요청을 했다.
- 메인은 위와 같은 사진으로 영상이 필요했기에 swiper.js 를 사용했다.
- 웹은 초기보이는 동영상 5개 태블릿 동일, 모바일은 한개씩 보이도록 설정했다.
- 카테고리 쪽도 원래는 영상 기획이였으나 스드메 홈페이지를 만든후 스드메 데이터를 가져와 6개씩 랜덤으로 보이게 설정했다.
- 모바일에서 보여질때 맨위에 안내문구가 나온다.

```
 <div id="mobileNotification">
    <p>웨딩 영상을 더 편안하게 감상하려면 웹 버전을 이용해보세요.</p>
  </div>
  #mobileNotification {
  display: none;
  position: relative;
  top: 0px;
  left: 0;
  width: 100%;
  background: #d5d5d5;
  color: #333;
  text-align: center;
  font-size: 13px;
  line-height: 30px;
  z-index: 999;
}
@media only screen and (max-width: 600px) {
  /* 화면 너비가 600px 이하인 경우에만 적용되는 스타일 */
  #mobileNotification {
    display: block;
  }
}
```

<h3># 이벤트</h3>

- 이벤트는 배너같은 홈페이지 설명이 있기에 사용자의 눈을 심심하지않게 디자인했다.
- 썸네일을 클릭하면 이벤트 상세 임시 페이지를 볼수 있다.
- 당첨자 발표 페이지는 테이블 형식으로 진행되었다. 제목을 클릭하게 되면 제목 작성자 글쓴 날짜 조회수를 볼 수 있다.
- 이벤트 건은 한줄에 4개씩 보이게 설정했다. 그 다음요소도 다음 줄 첫번째로 나올수 있도록 설정했다. 그러기 위해선 아래 코드 처럼 되어야한다.
- 가상태그도 쓸수 있는 기회라 좋았다.

```
// 설정된 클래스명은 다릅니다.
ul {
   display : table;
}
li {
   display : inline-block;
}
.event-list .event-list-ul .item:nth-child(4n){
   margin-right : 0;
}
```

<h3> #스드메 </h3>

- <a href="https://github.com/bp4sp4/WeddingVideoPage/blob/main/python/main.py">크롤링한 코드</a>
- IntersectionObserver Observer API를 통해 무한스크롤 구현과 새로고침할떄마다 랜덤으로 이미지와, 이미지없는것들은 default 이미지처리를 진행했다.
- 데이터는 파이썬으로 크롤링한 경험이 있기에 웨딩북 사이트에서 이미지를 크롤링 해왔다. 파이썬에서 css 선택자에서 굉장히 인식을 못해 애를 먹었다.
- 크롤링한 데이터를 json파일로 만들어 자바스크립트로 json을 웹에 뿌려주는 형식으로 진행했다.
- 웹은 json 데이터가 다 로딩될때까지 3개씩 무한스크롤로 진행된다. 태블릿 동일 모바일은 2개씩 보여진다.

<h3> #갤러리 </h3>

- 갤러리는 사진으로 클릭하게되면 사진만 집중할수 있게 팝업창으로 전체갯수와 리스트가 밑에 표시된다.

<h3> # 커뮤니티 </h3>

- 테이블형식으로 진행됬다.
- 글쓰기 버튼을 누르면 써머노트가 적용되었다.
- 제목을 누르면 상세페이지로 넘어가는데 제목, 작성자, 글쓴날짜, 조회수, 글 내용 댓글까지 표시된다.

<h3> # 로그인, 회원가입 </h3>

- 로그인 페이지는 굉장히 비쥬얼 업데이트를 많이 했다.
- 초기디자인
  ![KakaoTalk_Photo_2023-12-08-21-14-41](https://github.com/bp4sp4/WeddingVideoPage/assets/62207757/aec08be2-6829-4cc8-b612-b6ded3fd6acb)
- 최종 디자인
  ![____ _ ___ · 9 20pm · 12-08](https://github.com/bp4sp4/WeddingVideoPage/assets/62207757/46ea3a0f-b393-4ad1-bbd7-09d1fdb399ad)

- 회원가입은 약관동의 팝업 형식이 굉장히 까다로웠다. vscode 퍼블과정과 스프링에서의 설정에서 자꾸 충돌이 발생해 알아보니 또 링크설정에서 오류가 발생해 해결했다.

# 23/12/8(금)

- 퍼블리싱 마무리
- 폴더정리
- 링크 테스트

# 23/12/4(월)

<h3>메인 카테고리 추천픽</h3>

<h3>To do List</h3>
[X] 불필요한 css 코드 삭제하기<br>
[X] 로그인 - 아이디 ,비밀번호 찾기<br>
[X] 당첨자 발표 상세 페이지

<br><br>

1. 메인 카테고리 추천픽(웹O, 태블릿O , 모바일 O)
   - 네이밍 교체 before : 이달 카테고리 추천픽 TOP5! -> after : 이달 카테고리 추천픽 TOP6!
   - 스드메에 만들었던 json 데이터 무한스크롤 삭제하고 최대한 이미지만 있는 데이터 띄우기 6개
   - 동영상에서 이미지로 체인지했기에 css 수정

# 23/11/28(화)

<h3>메인, 이벤트, 스드메, 갤러리, 커뮤니티</h3>

1. 메인(웹O, 태블릿O , 모바일 O)
   - 동영상 추가
   - swiper 비쥬얼 업데이트
   - 모바일 화면 비쥬얼 업데이트
2. 이벤트(웹 O, 태블릿 X, 모바일X)
   - 진행중인 이벤트 상세화면 구현 완료
   - 지난 이벤트 상세화면 구현 완료
   - 당첨자 발표 디자인 상세 디자인 미구현
3. 갤러리(웹 O, 태블릿 O , 모바일 O)
   - 이미지 추가 완료 반응형도 완료 기능
   - 무한스크롤 미구현
4. 커뮤니티(웹 O, 태블릿 O, 모바일 O)
   - 커뮤니티 디자인 완료
   - 게시글 상세화면 구현 완료
   - 글 작성 디자인 완료
   - 글 수정 완료
5. 스드메
   - 미구현 -> 무한스크롤 기능 완성되는 대로 디자인 할 예정

# 23/ 11/24(금)

<h3>메인, 로그인, 회원가입</h3>
- 메인 반응형(웹, 태블릿, 모바일) 적용 완료 <br>
- 로그인, 회원가입(웹, 태블릿, 모바일) 적용 완료 <br>
- 개발환경에선 이벤트 스드메 커뮤니티 디자인완료 데모버전은 아직 디자인 적용 안함

# 23/10/27(금)

<h3>웨딩러리 - 로그인, 회원가입 </h3>
- 회원가입 로그인폼 -디자인 완 <br>
- 메인 컬러 예정 - color: #b6a368;<br>
- 금주의 인기 동영상 top5 - 디자인완 <br>
- 이번달 인기 동영상 top5 - 수정예정 <br>
- 카테고리별 영상 - 카테고리별 네이밍 정해야함 수정예정<br>

<h3>웨딩러리 - 회원가입/푸터 </h3>

<h3>로그인/회원가입 영역</h3>
- 로그인페이지 - 푸터추가 완료 <br>
- 회원가입 - 푸터추가 완료 디자인 수정예정 <br>

<h3>이벤트탭 영역</h3>
- 반응형 - 수정예정

<h3>비디오 갤러리 커뮤니티 - 기능정의 정해져야함</h3>

# 23/10/25(수)

<h3>웨딩러리 - 퍼블리싱 </h3>

<h3>메인 영역</h3>
- 헤더 완성
- 금주의 인기 동영상 top5 - 디자인완 <br>
- 이번달 인기 동영상 top5 - 수정예정 <br>
- 카테고리별 영상 - 카테고리별 네이밍 정해야함 수정예정<br>

<h3>로그인/회원가입 영역</h3>
- 로그인 푸터만 추가하면 완성 <br>
- 회원가입 - 수정예정 <br>

<h3>이벤트탭 영역</h3>
- 반응형 - 수정예정

<h3>비디오 갤러리 커뮤니티 - 기능정의 정해져야함</h3>
```
