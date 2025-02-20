menu_sets = []
//메뉴 생성기 시작 S==============================
class Menu{
    constructor(mtitle){
        this.mtitle=mtitle;
    }
    mtitle;url;tips;
}
//?menu=0 의 쿼리스트링은 데이터 생성함수 data_sets 객체의 push 순서와 일치합니다.
menu0 = new Menu("1. 선형회귀분석")//1. 개발목적/언어-선정/요구사항명세/분석 2. 구현도구/라이센스 3. 테스트도구(junit,mockobj)  4. 형상관리도구  5. 빌드도구
menu0.url = "?menu=0"
menu0.tips = ["1.1 성적 예측","1.2 당뇨 상태 예측","1.3 보스턴 주택가격 예측"]
menu1 = new Menu("2. 임시메뉴")
menu1.url = "?menu=1"
menu1.tips = ["2.1 임시","2.2 임시","2.3 임시"] //로그인 로그아웃 기능
menu2 = new Menu("3. 임시메뉴")
menu2.url = "?menu=2"
menu2.tips = ["3.1 임시","3.2 임시","3.3 메뉴"]
menu3 = new Menu("4. 임시메뉴")
menu3.url = "?menu=3"
menu3.tips = ["4.1 임시"]



menu_sets.push(menu0)
menu_sets.push(menu1)
menu_sets.push(menu2)
menu_sets.push(menu3)

