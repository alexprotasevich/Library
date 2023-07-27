console.log(`
Все пункты верстки выполнены.

1. Вёрстка валидная +10

    для проверки валидности вёрстки используйте сервис https://validator.w3.org/
    валидной вёрстке соответствует надпись "Document checking completed. No errors or warnings to show." В таком случае баллы за пункт требований выставляем полностью.


2. Вёрстка семантическая +16:

В коде страницы присутствуют следующие элементы (указано минимальное количество, может быть больше):
 - <header>, <main>, <footer> +2.
 - шесть элементов <section> (по количеству секций) +2.
 - только один заголовок <h1> +2. Если элементов <h1> на странице больше одного, считаем это ошибкой.
 - пять заголовков <h2> (легко отличимы на верхних границах секций, имеют единый стиль) +2.
 - один элемент <nav> (панель навигации в хедере) +2.
 - два списка ul > li > a (панель навигации, ссылки на соцсети в футере) +2.
 - семь кнопок <button> +2.
 - два инпута <input> +2.

3. Вёрстка соответствует макету +54

 - блок <header> +8:
    Текст совпал с макетом
    Элементы меню работают как якоря. При нажатии на один из них нас перебросит наверх соответствующего раздела
    Сами элементы меню при наведении (эффект hover) интерактивные
    Расстояние от самого меню до иконки пользователя - 40px. Иконка является отдльным элементом, и не входит в <nav>.
    Текст "Brooklyn Public Library" находится в <h1>.

 - секция Welcome +4.

 - секция About +6:
    Добаdktys все картинки, которые будут использованы в папку с картинками. В папке находятся все 5
    Расстояния между кнопками пагинации 10px.
    Обратите внимание, что кнопки хоть и имеют вид круга, но интерактивная область (область нажатия, выделяемая cursor:pointer) должна быть размером +5px в каждую сторону (круглая, квадратная или со скошенными углами - на ваш выбор). Т.е. это будут прозрачные элементы размерами 26x26, внутри которых будут располагаться непосредственно кнопки 16x16.

    - секция Favorites +8:
    Интерактивные кнопки имеют структуру input type="radio" + label.
    Добавлена небольшая область вокруг кнопки и надписи (например, 5px как в примере секции about) для того, чтобы была возможность легче наводить мышку.
    Картинок и описаний - много, для 4х секций. Добавлены в проект с скрыты с помощью CSS свойства display: none;.
    Кнопки "buy" интерактивны, плавно меняют свой цвет при наведении на них, как указано в макете styleguides.
    Кнопка "own" не интерактивна, не нажимается. И на ней присутствует атрибут disabled

 - секция CoffeShop +6.

 - секция Contacts +6:
    Карта добавлена отдельным сервисом, размеры блока подогнаны по PP
    Везде, где в тексте встречаются цифры в виде телефонного номера, это ссылки с типом "tel" и номером.
    Там, где в тексте встречается текст с именем контактного лица, это ссылка с типом "mailto" и адресом почты

 - секция LibraryCard +8:
    "Find your Library card" - это форма с полями input.
    Сделано ограничения в полях input на использование только букв и цифр, а также дефиса. Но это правило проверять не нужно.
    Все 3 кнопки интерактивны, плавно меняют свой цвет при наведении на них, как указано в макете styleguides.
    Иконки из модального окна (Visits, Bonuses, Books) сейчас не нужны будут, они в соответствующую папку проекта.

 - блок <footer> +8:
    Адрес библиотеки сделан ссылкой (место на карте).
    Иконки соцсетей также сделаны ссылками (ссылки на соцсети RS).
    Вместо Username добавлено имя на английском языке и ссылка на GitHub.

4. Общие требования к верстке +20

    для построения сетки используются флексы или гриды (display: flex... или display: grid...) +2.
    при уменьшении масштаба страницы браузера вся вёрстка (контент и фоны) размещается по центру, а не сдвигается в сторону +2. Для этого должна быть обертка вокруг всей страницы, которая выравнивается по центру. Фон за рамками страницы может быть черным, белым или любого оттенка серого.
    иконки добавлены в формате .svg. SVG может быть добавлен любым способом. Обращаем внимание на формат, а не на способ добавления +2.
    изображения добавлены в формате .jpg (.jpeg) или .png +2.
    есть favicon +2. Иконка содержит 3 буквы "BPL" (Brooklyn Public Library)
    плавная прокрутка по якорям +2.
    в футере название ссылки Username заменено и ведет на GitHub студента +2.
    в футере ссылка The Rolling Scopes School ведет на страницу курса https://rs.school/js-stage0/ +2.
    интерактивность элементов согласно макету. Интерактивность включает в себя не только изменение внешнего вида курсора, например, при помощи свойства cursor: pointer, но и другие визуальные эффекты, например, изменение цвета фона или цвета шрифта. Если в макете указаны стили при наведении и клике, для элемента указываем эти стили. Если в макете стили не указаны, реализуете их по своему усмотрению, руководствуясь общим стилем макета +2.
    обязательное требование к интерактивности: плавное изменение внешнего вида элемента при наведении и клике не влияет на соседние элементы +2.
`)