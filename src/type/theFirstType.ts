//1. Tuple - 배열과달리 고정됨
let myTuple : [string , Array<string|object>]
myTuple = ["first", ["one","two", { d : 100}]];

//2. Enum - 상수와 달리 파스칼케이스로 표현
enum WidgetType {Gauge, Pie, HorizontalBar, Radar, Line, VerticalBar, VerticalBarLine, VerticalBarOverlap, HorizontalBarLine}
enum WidgetCode {Gauge = 'W110001'}
enum WidgetText {W110001 = 'Gauge'}

//2.1 컴파일시 객체 상수 표현과 비교
const CHART_CLASS = {
    W110001 : 'Gauge' //게이지
    ,W110002 : 'Pie' //파이
    ,W110003 : 'HorizontalBar' //가로막대
    ,W110004 : 'Radar' //레이더
    ,W110005 : 'Line' //라인
    ,W110006 : 'VerticalBar' //세로막대
    ,W110007 : 'VerticalBarLine' //세로막대+선
    ,W110008 : 'VerticalBarOverlap' //세로막대(중첩)
    ,W110009 : 'HorizontalBarLine' //가로막대(중첩)
}

// console.log('WidgetType.Gauge -> ' , WidgetType.Gauge)
// console.log('WidgetCode.Gauge -> ' , WidgetCode.Gauge)
// console.log('WidgetText.W110001 -> ' ,WidgetText.W110001)
// console.log('---------------')
// console.log('WidgetType ->' , WidgetType)
// console.log('WidgetCode ->', WidgetCode)
// console.log('WidgetText -> ', WidgetText)
// console.log('CHART_CLASS ->' , CHART_CLASS)


//3 Never
let error: Promise<never>
error = Promise.reject('error!')
error.catch((errorMessage)=>{console.log(errorMessage)})

//console.log('error ->', error)
