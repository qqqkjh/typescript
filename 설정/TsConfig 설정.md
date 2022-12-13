# tsconfig.json 설정값
##  compilerOptions : Object
* module : string
    * 사용할 모듈 시스템 설정
    * CommonJS - Node.js (require/exports)
    * ES6 - ES6 표준모듈(import/export)
* outDir : string
    * 출력 디렉토리 지정
* target : Array`<`string`>`
    * 라이브러리에서 사용할 ECMAScript 버전 지정
    * lib에 해당 라이브러리 자동 포함
* lib : Array`<`string`>`
    * 컴파일에 포함될 자바스크립트 버전 라이브러리 설정
    * https://www.typescriptlang.org/tsconfig#lib
* sourceMap : bool
    * sourceMap 파일 생성여부
* strict : bool
    * 컴파일시 엄격모드로 검사 ("use strict";)
* noImplicitAny : bool
    * 유추할수 없는 타입을 암묵적으로 Any로 사용하지 않음 
    * 즉 타입을 명시하지않으면 무조건 컴파일 에러      
* noEmitOnError : bool
    * 오류가 있는경우 출력 파일을 내보내지 않음
* removeComments : bool
    * js 파일로 변환시 주석을 모두 제거함

##  include : Array`<`string`>`
* 컴파일에 포함 할 경로

##  exclude : Array`<`string`>`
* 컴파일에 제외 할 경로
* 작성법 참고 https://typescript-kr.github.io/pages/tsconfig.json.html#%EC%83%81%EC%84%B8-%EC%84%A4%EB%AA%85-details



