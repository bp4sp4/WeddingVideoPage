from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium import webdriver
import json
import re
import time
from urllib.parse import urljoin, urlparse, parse_qs

url = "https://www.wdgbook.com/partner/studio"
base_url = "https://www.wdgbook.com/partner/studio"
not_found_image_url = "/images/v2/img-notfound@3x.jpg" 

def extract_image_url(style_attribute):
    match = re.search(r'url\((.*?)\)', style_attribute)
    if match:
        return match.group(1)
    return None


def clean_up_image_url(image_url):
    parsed_url = urlparse(image_url)
    actual_image_url = parse_qs(parsed_url.query).get('url', [''])[0]

    if actual_image_url:
        return actual_image_url

    return None

# 크롬 드라이버 경로 설정
chrome_driver_path = r"C:\chromedriver\chromedriver.exe"

# 크롬 드라이버 실행
chrome_service = webdriver.ChromeService(chrome_driver_path)
chrome_options = webdriver.ChromeOptions()
chrome_options.add_argument("--start-maximized")  # 전체화면으로 설정
driver = webdriver.Chrome(service=chrome_service, options=chrome_options)

# 웹페이지 열기
driver.get(url)

data_list = set()  # 중복을 방지하기 위해 set 사용

# 페이지 스크롤을 자동으로 내리면서 데이터 수집
while True:
    # .company-item의 이미지와 .company-info-wrap, company-region 추출
    company_items = WebDriverWait(driver, 10).until(
        EC.presence_of_all_elements_located((By.CSS_SELECTOR, '.company-item'))
    )

    for company_item in company_items:
        try:
            style_attribute = company_item.find_element(By.CSS_SELECTOR, '.company-bg-wrap').get_attribute('style')
            image_url = extract_image_url(style_attribute)

            if image_url == not_found_image_url:
                image_url = '/resources/img/default.png'  
            else:
                image_url = clean_up_image_url(image_url)
                if not image_url:
                    image_url = '/resources/img/default.png'

            # 정보와 지역 정보를 찾기 위한 요소 검색
            info_wrap_element = company_item.find_element(By.CSS_SELECTOR, '.company-item .company-info-wrap > h2')
            region_element = company_item.find_element(By.CSS_SELECTOR, '.company-item .company-info-wrap > span')

            info_wrap = info_wrap_element.text.strip()
            region = region_element.text.strip()

            company_data = {
                'image_url': image_url,
                'info_wrap': info_wrap,
                'region': region
            }
            data_list.add(json.dumps(company_data, ensure_ascii=False))  # set에 추가

        except:
            continue  # 요소를 찾을 수 없으면 다음 반복으로 이동
    print(image_url)

    # 스크롤 다운
    driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")

    # 일정 시간 대기 (데이터가 동적으로 로드되는 동안 기다릴 시간)
    time.sleep(5)

    # 스크롤이 더이상 내려갈 수 없으면 루프 종료
    old_scroll_height = driver.execute_script("return document.body.scrollHeight;")
    driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")
    time.sleep(2)
    new_scroll_height = driver.execute_script("return document.body.scrollHeight;")

    if new_scroll_height == old_scroll_height:
        break

# 크롬 드라이버 종료
driver.quit()

# JSON 파일로 저장
with open('studio.json', 'w', encoding='utf-8') as json_file:
    json_file.write('[{}]'.format(','.join(data_list)))
