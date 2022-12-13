## Enum
```
//.ts
enum WidgetType {Gauge, Pie, HorizontalBar, Radar, Line, VerticalBar, VerticalBarLine, VerticalBarOverlap, HorizontalBarLine}

```
컴파일 &#8595;
```
//.js
var WidgetType;
(function (WidgetType) {
    WidgetType[WidgetType["Gauge"] = 0] = "Gauge";
    WidgetType[WidgetType["Pie"] = 1] = "Pie";
    WidgetType[WidgetType["HorizontalBar"] = 2] = "HorizontalBar";
    WidgetType[WidgetType["Radar"] = 3] = "Radar";
    WidgetType[WidgetType["Line"] = 4] = "Line";
    WidgetType[WidgetType["VerticalBar"] = 5] = "VerticalBar";
    WidgetType[WidgetType["VerticalBarLine"] = 6] = "VerticalBarLine";
    WidgetType[WidgetType["VerticalBarOverlap"] = 7] = "VerticalBarOverlap";
    WidgetType[WidgetType["HorizontalBarLine"] = 8] = "HorizontalBarLine";
})(WidgetType || (WidgetType = {}));
```
```
console.log('WidgetType -> ' , WidgetType)

//출력결과
WidgetType > {
  '0': 'Gauge',
  '1': 'Pie',
  '2': 'HorizontalBar',
  '3': 'Radar',
  '4': 'Line',
  '5': 'VerticalBar',
  '6': 'VerticalBarLine',
  '7': 'VerticalBarOverlap',
  '8': 'HorizontalBarLine',
  Gauge: 0,
  Pie: 1,
  HorizontalBar: 2,
  Radar: 3,
  Line: 4,
  VerticalBar: 5,
  VerticalBarLine: 6,
  VerticalBarOverlap: 7,
  HorizontalBarLine: 8
}

```

```
//enum 바인딩


enum WidgetText {W110001 = 'Gauge'}
const CHART_CLASS = {
    W110001 : 'Gauge' //게이지
}
//WidgetText과 CHART_CLASS은 동일한 값
console.log('WidgetText -> ', WidgetText);
console.log('CHART_CLASS ->', CHART_CLASS);


//출력 결과
WidgetText ->  { W110001: 'Gauge' }
CHART_CLASS -> { W110001: 'Gauge' }
```
