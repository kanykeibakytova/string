// Создайте несколько переменных с типом данных str, так, чтобы одна переменная
// содержала одно слово, затем объедините их в одно предложение, так, чтобы слова были
// записаны через пробел.
//    "Hello "
//    "World"
// Пример вывода:
//  "Hello World"

// ! тип данных

// let str = 'Hello '
// let str1 = "World"
// console.log(str+str1)

// let str = "Hello World "
// console.log( typeof str)

// let str2 = "My "
// let str3 = "name is "
// let str4 = "Kanykei"
// console.log(str2+str3+str4)

// length

// let str = "welcome to motion web"
// console.log(str.length)

// length - узундук
// index0f - [] массив "0" дон баштап санайт.

// let num=123456
// console.log(num.length)

// ! индекс - это порядок строк начинается с 0
// let str="Hello World"
// console.log(str[1])

// let str = "HELLO BISHKEK"
// // console.log( str.length)
// // console.log(str[4])
// console.log(str [str.length -2])

// let str1="    bishkek"
// // console.log(str1)
// console.log(str1.trim())

// let str2=" Bishkek    "
// console.log(str2.trimEnd())

// let str3="  BISHKEK"
// console.log(str3.trimStart())

//! Преобразуйте символы в строке в верхний регистр.
// let a = "hello"
// console.log(a.toUpperCase())

//Преобразуйте символы в строке в нижний регистр.
// let b= "WORLD"
// console.log(b.toLowerCase())

//! Объединяйте две или более строки и возвращайте одну строку.
// let concat1 = 'Hello '
// let concat2 = "World"
// console.log(concat1.concat(concat2)); //+

//! Разбивайте строку в массив по указанному разделителю,
//! которым может быть подстрока или регулярное выражение.
//! Вторым параметром можно указать ограничитель.
// let repeat = "Repeat "
// console.log(repeat.repeat(3));

//! Возвращает символ по указанному индексу.
// let charAt = "Hello World"
// console.log(charAt.charAt(9))

//! Проверяйте, содержит ли строка указанную подстроку.
//! Возвращает значение true или false. Вторым параметром
//! можно указать позицию в строке, с которой следует начать поиск.
// let trUe = "Hello World"
// let trUe = "Hello World"
// console.log(trUe.includes("Hello"));
// console.log(trUe.includes("world"));

// let bool = true
// console.log(typeof bool);

//! Возвращайте индекс первого найденного вхождения указанного значения.
//! Поиск ведётся от начала до конца строки. Если совпадений нет, возвращает -1.
//! Вторым параметром можно передать позицию, с которой следует начать поиск.
//  let indexOf = "Hetlo World"
// console.log(indexOf.indexOf('t'))
// console.log(indexOf.indexOf('d', 5))
// console.log(indexOf.indexOf('w'))

//! Возвращайте индекс последнего найденного вхождения указанного значения.
//! Поиск ведётся от конца к началу строки. Если совпадений нет, возвращает -1.
// ! Вторым параметром можно передать позицию, с которой следует начать поиск.
// let lastIndexOf = "Hello World"
// let b = ' Bishkek'
// let result = lastIndexOf.concat(b)
// console.log(lastIndexOf.lastIndexOf("l"))
// console.log(lastIndexOf.indexOf("l"))
// console.log(result)



// let str = "Bishkek"
// console.log(str.slice(0,1))
// console.log(str.substring(0,6))





//! Даны две строки: "Hello" и "World". Объедините их вместе.
// let a = "Hello ";
// let b = "World";
// console.log(a.concat(b));

// let str = "Hello"
// console.log(str.length);

//! 1 charAt
//! 2 repeat
//! 3 concat
//! 4 toUpperCase
//! 5 toLowerCase
//! 6 indexOf
//! 7 lastIndexOf
//! 8 length
//! 9 includes


// интерполяция
// let str = "Murzabek"
// console.log(`менин атым ${str}`)

// 1. Вам дана переменная str, присвойте ей значение 'Привет, Мир!'. Выведите значение этой переменной в консоль.
// let str= "Привет, Мир!"
// console.log(str)

// 2. Вам даны переменные str1='Привет, ' и str2='Мир!'.
// С помощью этих переменных и операции сложения строк выведите в консоль фразу 'Привет, Мир!'.
// let str1 ="Привет,"
// let str2= "Мир!"
// console.log(str1.concat(str2))

// 3. Вам дана переменная name, присвойте ей ваше имя. Выведите в консоль фразу 'Привет, *Имя*!'.
//  let name="Kanykei"
// console.log(`Привет, ${name}`)

// 4. Вам дана переменная age , присвойте ей ваш возраст. Выведите в консоль 'Мне *Возраст* лет!'.
// let age = "20"
// console.log(`Мне ${age} лет`)

// 5. Вам даны четыре переменные.
//     Первая - для хранения количества дней. Присвойте ей значение "365".
//     Вторая - для хранения названия нашей планеты "Земля".
//     Третья - для хранения примерного количества жителей нашей планеты. Присвойте ей значение "7 млрд.".
//     Четвертая - для хранения слова "Солнце".
//     Далее, используя текст и переменные, нужно вывести в консоль такой абзац:
//     "В нашем году 365 дней. Днём у нас светит Солнце. Население планеты Земля составляет примерно 7 млрд. человек."

// let day ="365"
// let planet = "Земля"
// let people = "7 млрд"
// let word="Солнце"
// console.log(`В нашем году ${day}. Днем у нас светит ${word}. Население планеты ${planet} составляет примерно ${people} человек.` )
