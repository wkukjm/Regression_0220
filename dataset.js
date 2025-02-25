
//메뉴 생성기 종료 E==============================
//데이터 아키텍처{sub_title:"",sub_content:"",sub_img:[],user_fill:""}
let data_sets=[]
class DataSet{
	constructor(sub_title,menuNum){this.sub_title=sub_title}
	user_fill=""
	sub_content=[]
	sub_img=[]
	set_content(content){this.sub_content.push(content)}
	set_img(num,obj){
		if(!this.sub_img[num]){this.sub_img[num]=[]}
		this.sub_img[num].push(obj)
	}
	set_fill(ufill){this.user_fill=ufill}	 
}

let d1 = new DataSet("선형회귀분석")//메인 타이틀 //메뉴번호
d1.set_content("공부시간과 성적과의 관련선의 선형성을 가진 연속적인 데이터를 활용하여 연속된 예상값을 추출하는 모델")//서브 타이틀
d1.set_img(0,{imgtitle:"일부코드샘플",imgurl:"https://drive.google.com/file/d/1Og_D-JpfvOhHybR0ydbSzxskPKzRmii2/view?usp=drive_link",imglog:"시험성적데이터를 임의로 만들어 선형회귀분석 코드",sourceurl:"https://github.com/dmsgur/Regression_250220/blob/codeone/LinearRegression/examp_lg.py"})//이미지타이틀
d1.set_img(0,{imgtitle:"산점도데이터분석",imgurl:"https://drive.google.com/file/d/1Z3R3Tekf3c_xYFredbII4aVLvBieNdo5/view?usp=drive_link",imglog:"문제데이터의 선형성 관계 파악을 위한 산점도 그래프 분석",sourceurl:"https://github.com/dmsgur/Regression_250220/blob/codeone/LinearRegression/examp_lg.py"})//이미지타이틀
d1.set_img(0,{imgtitle:"데이터전처리",imgurl:"https://drive.google.com/file/d/1Pwu5tvGT0Rf58SfZg8ac4dcJP8IE4kO-/view?usp=drive_link",imglog:"훈련시 모델의 올바른 학습을 위해 데이터를 정규분포로 표준화 전처리 시행",sourceurl:"https://github.com/dmsgur/Regression_250220/blob/codeone/LinearRegression/examp_lg.py"})//이미지타이틀
d1.set_img(0,{imgtitle:"선형모델의 구성, 컴파일, 훈련",imgurl:"https://drive.google.com/file/d/1LOKIxCmdpQhauijX2Pqzv8aIvjQ9eJzI/view?usp=drive_link",imglog:"Sequential모델 및 입력출력레이어 작성과 mse 오차손실함수 및 역전파시적용 될 SGD(경사하강법) 최적화함수 적용과 200회 훈련 실행",sourceurl:"https://github.com/dmsgur/Regression_250220/blob/codeone/LinearRegression/examp_lg.py"})//이미지타이틀
d1.set_img(0,{imgtitle:"훈련결과 시각화",imgurl:"https://drive.google.com/file/d/1f7xU-Q-uiwR18kAA7tyNywSC_kLvW5D8/view?usp=drive_link",imglog:"시각화 그래프 판단시 120회 훈련에서 훈련 조기종료를 검토할수도 있다.",sourceurl:"https://github.com/dmsgur/Regression_250220/blob/codeone/LinearRegression/examp_lg.py"})//이미지타이틀
d1.set_img(0,{imgtitle:"모델의 예측",imgurl:"https://drive.google.com/file/d/1YOHhgINNAVzdMSN3g7xZvCL938paDNDs/view?usp=drive_link",imglog:"임의의 데이터를 생성하여 모델의 예측 결과를 표기",sourceurl:"https://github.com/dmsgur/Regression_250220/blob/codeone/LinearRegression/examp_lg.py"})//이미지타이틀



d1.set_content("당뇨환자에 대한 1년 상태 예측, 예측값은 연속데이터로 출력")
d1.set_img(1,{imgtitle:"샘플소스코드",imgurl:"https://drive.google.com/file/d/1pwNqgKksSjmjEQMZweU6znZufSmd37kS/view?usp=drive_link",imglog:"당뇨환자에 대한 나이, 성별, bmi수치, bp수치등을 10개의 항목을 측정하여 1년후 당뇨수치에 대한 증감데이터 ",sourceurl:"https://github.com/dmsgur/Regression_250220/blob/codeone/LinearRegression/diabet.py"})//이미지타이틀
d1.set_img(1,{imgtitle:"소스데이터수신 및 분석",imgurl:"https://drive.google.com/file/d/1Ix_aL2S8iNR5PWyqbPVky3d37r7SPqxy/view?usp=drive_link",imglog:"sklearn의 diabetes 데이터를 수신하여 항목별 분석과 수치값과 1년후 변화 질량에 대한 확인",sourceurl:"https://github.com/dmsgur/Regression_250220/blob/codeone/LinearRegression/diabet.py"})//이미지타이틀
d1.set_img(1,{imgtitle:"연관성분석을 위한 산점도",imgurl:"https://drive.google.com/file/d/1K4rP9avRKdyFA3LsYARPuBsqQPZwsxge/view?usp=drive_link",imglog:"1년후 질량과 측정된 수치의 연관성 분석을 위한 산점도 그래프 확인",sourceurl:"https://github.com/dmsgur/Regression_250220/blob/codeone/LinearRegression/diabet.py"})//이미지타이틀
d1.set_img(1,{imgtitle:"1.선택데이터",imgurl:"https://drive.google.com/file/d/1S46qFh38vPj7exySU-0XfUqqvVTZdZmn/view?usp=drive_link",imglog:"bmi 수치는 대각방향의 선형형태를 띄고 있어 1년후 질량과 연관이 있는 데이터로 판명",sourceurl:"https://github.com/dmsgur/Regression_250220/blob/codeone/LinearRegression/diabet.py"})//이미지타이틀
d1.set_img(1,{imgtitle:"2.선택데이터",imgurl:"https://drive.google.com/file/d/1qLuGLo66PC13sBWp5OxKRl3JpP8Fxt6V/view?usp=drive_link",imglog:"s5 수치는 대각방향의 선형성을 띄고 있어 1년후 질량과 연관이 있는 데이터로 판명",sourceurl:"https://github.com/dmsgur/Regression_250220/blob/codeone/LinearRegression/diabet.py"})//이미지타이틀
d1.set_img(1,{imgtitle:"3.미선택데이터",imgurl:"https://drive.google.com/file/d/1prRUEB8jO_OvDIxqv2nxGI-CCPT5U-GC/view?usp=drive_link",imglog:"성별데이터는 방향의 선형성이 없으므로 1년후 질량과 연관이 없음으로 판명되어 분석에서 제외",sourceurl:"https://github.com/dmsgur/Regression_250220/blob/codeone/LinearRegression/diabet.py"})//이미지타이틀
d1.set_img(1,{imgtitle:"데이터추출",imgurl:"https://drive.google.com/file/d/13lOi4VQ2InDALG3NDnlHtEQmNkGUKl9d/view?usp=drive_link",imglog:"선택된 2번 8번 인덱스 데이터 추출 및 데이터의 모양 확인후 문제데이터와 정답데이터 값 확인분석",sourceurl:"https://github.com/dmsgur/Regression_250220/blob/codeone/LinearRegression/diabet.py"})//이미지타이틀
d1.set_img(1,{imgtitle:"모델구성과 훈련",imgurl:"https://drive.google.com/file/d/1V4Op_0gCezDqBX17pe1v8NgIb9Gv3huq/view?usp=drive_link",imglog:"순차모델구성과 입출력 레이 구성, MSE 손실함수와 SGD를 최적화함수이 사용하여 컴파일 및 훈련 13회 실행",sourceurl:"https://github.com/dmsgur/Regression_250220/blob/codeone/LinearRegression/diabet.py"})//이미지타이틀
d1.set_img(1,{imgtitle:"훈련결과시각화",imgurl:"https://drive.google.com/file/d/1fCA5YNzcyPG7E98kGFBlUyG_1OCRZwdM/view?usp=drive_link",imglog:"100회 이상의 훈련후 시각그래프 판단하에 12회 훈련이 최적화로 판단되어 12회 훈련으로 조기종료함.",sourceurl:"https://github.com/dmsgur/Regression_250220/blob/codeone/LinearRegression/diabet.py"})//이미지타이틀
d1.set_img(1,{imgtitle:"데이터 예측",imgurl:"https://drive.google.com/file/d/1OzI4CLllDVi6_HtUQE6Ojjzh2SpEjrqu/view?usp=drive_link",imglog:"테스트 데이터 10개를 일부 추출하여 예측 실행, 결과는 오차확률 4% 수치대로 접근",sourceurl:"https://github.com/dmsgur/Regression_250220/blob/codeone/LinearRegression/diabet.py"})//이미지타이틀



d1.set_content("보스톤 지역의 환경에 따른 하우스 가격 데이터로 예측값은 연속데이터로 출력")
d1.set_img(2,{imgtitle:"보스턴하우징샘플코드",imgurl:"https://drive.google.com/file/d/1P2kd6HBxHshEp1oDb0KO2WGRXuvfWKQh/view?usp=drive_link",imglog:"총 12개 유형의 데이터로 범죄율, 주거토지비율, 회사입지비율, 강의 경계 여부, 일산화질소 농도, 방의 갯수 등의 13개의 데이터를 분석하여 집가격을 예측하는 시나리오",sourceurl:"https://github.com/dmsgur/Regression_250220/blob/codeone/LinearRegression/boston_housing.py"})//이미지타이틀
d1.set_img(2,{imgtitle:"1.데이터연관성 산점도분석코드",imgurl:"https://drive.google.com/file/d/1bzSCMmxdYWmd-sZcmsnkAG_ZVFYd83B5/view?usp=drive_link",imglog:"데이터연관성 분석을 위해 데이터 항목별 산점도 시각화",sourceurl:"https://github.com/dmsgur/Regression_250220/blob/codeone/LinearRegression/boston_housing.py"})//이미지타이틀
d1.set_img(2,{imgtitle:"2.산점도 시각화 그래프",imgurl:"https://drive.google.com/file/d/1ySkpDel8jI3w8U8QSt4hvg5pmIRCzmp4/view?usp=drive_link",imglog:"분석결과 5번 인덱스 그래프의 선형방향성 확인 선택",sourceurl:"https://github.com/dmsgur/Regression_250220/blob/codeone/LinearRegression/boston_housing.py"})//이미지타이틀
d1.set_img(2,{imgtitle:"3.산점도 시각화 그래프",imgurl:"https://drive.google.com/file/d/1x-qGobCFc82ySC4NDPrRpaEFu0mgRxRp/view?usp=drive_link",imglog:"분석결과 7번 인덱스 그래프의 선형방향성 확인 선택",sourceurl:"https://github.com/dmsgur/Regression_250220/blob/codeone/LinearRegression/boston_housing.py"})//이미지타이틀
d1.set_img(2,{imgtitle:"훈련을 위한 데이터 선택",imgurl:"https://drive.google.com/file/d/1yNH3sfxOG_R4T38bXa9B7LD8ZfM_1AKb/view?usp=drive_link",imglog:"5번 인덱스 데이터와 7번 인덱스 데이투의 선형성 확인결과로 훈련데이터로 추출후 선형성 재확인",sourceurl:"https://github.com/dmsgur/Regression_250220/blob/codeone/LinearRegression/boston_housing.py"})//이미지타이틀
d1.set_img(2,{imgtitle:"훈련데이터 전처리",imgurl:"https://drive.google.com/file/d/11CpmSPueHRZU-m1obXgybpWImuPxa9u1/view?usp=drive_link",imglog:"훈련데이터의 수치 폭을 확인후 정규분포데이터로 표준화 실행",sourceurl:"https://github.com/dmsgur/Regression_250220/blob/codeone/LinearRegression/boston_housing.py"})//이미지타이틀
d1.set_img(2,{imgtitle:"모델구성 및 훈련",imgurl:"https://drive.google.com/file/d/12OtS74xQN5GocjFtJAV-qeh_dyvXq_ps/view?usp=drive_link",imglog:"순차모델 구성과 입출력레이어 추가, MSE 손실함수 및 SGD 최적화 함수를 적용하여 컴파일, 10회 훈련 실시",sourceurl:"https://github.com/dmsgur/Regression_250220/blob/codeone/LinearRegression/boston_housing.py"})//이미지타이틀
d1.set_img(2,{imgtitle:"훈련결과 시각화",imgurl:"https://drive.google.com/file/d/1Fo0FuYY8h1IM8Bk4oIuiHqOy2huHPwC3/view?usp=drive_link",imglog:"훈련결과 손실값을 시각화 그래프 출력 결과 분석 및 확인",sourceurl:"https://github.com/dmsgur/Regression_250220/blob/codeone/LinearRegression/boston_housing.py"})//이미지타이틀
d1.set_img(2,{imgtitle:"테스트데이터 추출",imgurl:"https://drive.google.com/file/d/15bCKwsf_jojv0jsttnDKQKogrzsT-XRw/view?usp=drive_link",imglog:"테스트 데이터 필드 추출 및 정규화 실행",sourceurl:"https://github.com/dmsgur/Regression_250220/blob/codeone/LinearRegression/boston_housing.py"})//이미지타이틀
d1.set_img(2,{imgtitle:"테스트 결과 추측",imgurl:"https://drive.google.com/file/d/1PsHbu_sj73cZW6WppqqI_78EM2wGqe8R/view?usp=drive_link",imglog:"테스트 데이터 예측 오차 확률 23.05%",sourceurl:"https://github.com/dmsgur/Regression_250220/blob/codeone/LinearRegression/boston_housing.py"})//이미지타이틀

d1.set_fill("선형 분석을 위한 데이터 표준화 및 훈련실행시 연관된 데이의 수집과 분석하여 데이터를 선택함이 중요하게 생각된다.")//사용자 에필로그
data_sets.push(d1)

// menu2 =============================================================
let d2 = new DataSet("공통모듈구현")//메인타이틀
d2.set_content("공통모듈구현을 작성합니다.")//서브 타이틀
d2.set_img(0,{imgtitle:"요구사항명세서작성",imgurl:"https://drive.google.com/file/d/1nnSKw0su1NKkr-4O3bXNv33_ZZ8D54Qk/view?usp=drive_link",imglog:"작성된 요구사항 명",sourceurl:"https://docs.google.com/document/d/1fYO-WllL1nq8-qJC6Aj8fTeQplv7hvQzxUfRQAgAamo/edit?usp=drive_link"})//이미지타이틀

d2.set_content("테스트케이스를 작성합니다.")
d2.set_img(1,{imgtitle:"요구사항명세서작성",imgurl:"https://drive.google.com/file/d/1nnSKw0su1NKkr-4O3bXNv33_ZZ8D54Qk/view?usp=drive_link",imglog:"작성된 요구사항 명",sourceurl:"https://docs.google.com/document/d/1fYO-WllL1nq8-qJC6Aj8fTeQplv7hvQzxUfRQAgAamo/edit?usp=drive_link"})//이미지타이틀

d2.set_content("단위테스트를 작성합니다.")
d2.set_img(2,{imgtitle:"요구사항명세서작성",imgurl:"https://drive.google.com/file/d/1nnSKw0su1NKkr-4O3bXNv33_ZZ8D54Qk/view?usp=drive_link",imglog:"작성된 요구사항 명",sourceurl:"https://docs.google.com/document/d/1fYO-WllL1nq8-qJC6Aj8fTeQplv7hvQzxUfRQAgAamo/edit?usp=drive_link"})//이미지타이틀


d2.set_fill("사용자와 프로그램간에 인터렉티브한 로그인 세션 설정")//사용자 에필로그
data_sets.push(d2)

// menu3 =============================================================
let d3 = new DataSet("서버프로그램구현")//메인타이틀
d3.set_content("회원가입구현")//서브타이틀
d3.set_content("회원로그인구현")
d3.set_content("회원리스트연동")
d3.set_content("테스트케이스 작성")
d3.set_content("목오브젝트생성 및 테스트 구현")
d3.set_content("결과보고서 작성")
d3.set_fill("사용자와 프로그램간에 인터렉티브한 로그인 세션 설정")//사용자 에필로그
data_sets.push(d3)

// menu4 =============================================================
let d4 = new DataSet("배치프로그램구현")//메인타이틀

d4.set_content("배치스케줄구현")//서브타이틀

d4.set_content("배치프로그램테스트 구현")

d3.set_fill("사용자와 프로그램간에 인터렉티브한 로그인 세션 설정")//사용자 에필로그
data_sets.push(d4)
