<?php
function debug($data) {
    echo '<pre>' . print_r($data, 1) . '</pre>';
}

// $_POST - Для обработки запросов типа POST в PHP используется встроенная глобальная переменная $_POST

function load($data): array
{
    foreach ($_POST as $k => $v) {
        /*array_key_exists() - проверяет массив на наличие указанного ключа,
         и возвращает true, если ключ существует, и false, если ключ не существует.*/
        if (array_key_exists($k, $data)) {
            //trim - - Удаляет пробелы из начала и конца строки.
            $data[$k] ['value'] = trim($v);
        }
    }
    return $data;
}


function loadText ($data): string
{
    $str = "";
    foreach ($data as $k => $v) {
        //empty - Проверяет переменную на пустоту
        if (!empty($v['value'])) {
            $str .= "{$v['fields_name']}: {$v['value']}\n\n";
        }
        
    }
    return $str;
}

