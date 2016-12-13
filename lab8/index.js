/**
 * Created by Марина on 12.12.2016.
 */

$(function()
{
    // 11. Найдите все элементы управления на вашей странице var $from = $(‘.from);
    var $from=$(".from");
    var $to=$(".to");
    var $fun=$(".fun");
    var $graph=$(".graph");
    var $button=$(".button");
    var timerId = 0;
// 12. Подпишитесь на событие нажатия кнопки $button.click(onClick);
    $button.click(function(e)
    {
// 13. Отмените действие по-умолчанию (отправку формы) e.preventDefault()
        e.preventDefault();
// 14. Получите значения из полей ввода $from.val()
// 15. Не забудьте преобразовать числовые значения из строк в числа parseFloat, parseInt
        var from = parseFloat($from.val());
        var to = parseFloat($to.val());
        var fun = ($fun.val());
// 16. Создайте массив пар значений const points = [[x1, y1], …, [xn, yn]];
        const points = [];
        var dx = 0.01;
        var interval = 10;
        var start = from;
        var end;
// сделайте анимацию графика функции как на осциллографе для
// этого по таймеру setInterval() / clearInterval() перестраивайте
// график функции, прибавляя к x изменяющийся коэффициент dx
        clearInterval( timerId );
        timerId = setInterval( function()
        {
            end = start + interval;
            if( end > to )
                clearInterval( timerId );
            if( start != from )
                start += 9.9;
            for( ; start < end; start += dx ) {
                if( start > to )
                    break;
// 17. Для получения значение функции, заданной в виде строки,
// используйте функцию eval()const x = 0.1
// ;const fun = 'Math.sin(x)' ;const y = eval (fun);
                const x = start;
                const y = eval(fun);
                points.push([x, y]);
            }
// 18. Постройте график по точкам $. plot ( $ output, [ points ], {});
            $.plot($graph, [{ label: fun, data: points }], [points], {});

            var i = 0;
            start -= 9.9;
            while( points[i][0] < start ) {
// arr.shift()-удаляет элемент с индексом 0 и сдвигает остальные элементы на один вниз. Возвращает удаленный элемент
                points.shift();
                i += 1;
            }
        }
        , 10);
    });

});
