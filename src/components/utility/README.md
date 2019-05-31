# `Filters`
Вспомогательные компоненты.<br/>

## `Button`
Компонент кнопки.<br/>
![Button](images/1.png)

#### Параметры
|Параметр|Тип|Источник|Пример|Описание|
|---|---|---|---|---|
|type|`string`|`props`|"normal"|Тип кнопки, отвечает за внешний вид;<br/>по умолчанию - `normal`;<br/>возможные значения: `normal`;<br/>`optional`|
|class|`string`|`props`|"style.additional"|Дополнительный класс, если необходимо поправить стили в определенном месте (`optional`)|
|children|`any`|`props`|-|Любые элементы внутри кнопки|
|id|`string`|`props`|"anyID"|ID кнопки|
|onClick|`function`|`props`|onClick(`id`)|Функция клика на кнопку, передает `id` кнопки|
