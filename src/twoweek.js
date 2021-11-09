// 1- JavaScript ile istediğiniz kadar sayı parametre gönderebileceğiniz bir fonksiyon yazınız. 
// Bu fonksiyona gönderdiğiniz her sayı için çıktı olarak asal olup olmadığını yazınız. 
// (Araştırma konusu : şart blokları : if )
// Örnek kullanım : findPrime(2,5,8,21, 13) findPrime(3,5)

console.log("1.Soru Çıktıları:")

function findPrime(...numbers) {                                //Kullanıcıdan istediği kadar sayıyı aldık.
    for (let a = 0; a < numbers.length; a++) {                  //for döngüsünü aldığımız sayı dizisinin uzunluğundan kısa olduğu sürece çalıştırdık.
        let counter = 0                                         //sayaç tanımlaması yaptık.
        let number = numbers[a]                                 //sayı dizisinin değişkenlerini sırayla bir değişkene atadık.
        if (number < 2) {                                       //asal sayılar 2'den başladığı için, 2'den küçük sayılar için kontrol yaptık. 
            console.log(number + " asal sayı değildir.")        //sayı 2'den küçükse sayıyı ve asal sayı olmadığını konsola yazdırdık.
        }
        else {                                                  //2 ve 2'den büyük olma durumu için koşulumuzu belirttik.
            for (let i = 2; i < number; i++) {                  //sayımızı 2, 2'den büyük sayılara bölüp (i'nin 2'den başlama sebebi) kendisine bölemeyeceğimiz şekilde döngümüzü olşturduk.
                if(number % i == 0){                            //sayının i değişkenine bölümünden kalan 0 ise yani i'ye tam bölünebiliyorsa
                    counter++;                                  //sayacımızı artırdık.
                }
            }
            if (counter == 0) {                                 //eğer sayaç hiç artmamışsa yani baştaki tanımlamamızdaki gibi 0 ise
                console.log(number + " asal sayıdır.")          //dizedeki baktığımız sayı asaldır.
            }
            else {                                              //eğer sayaç artmışsa yani üstteki koşulun dışında bir durum varsa
                console.log(number + " asal sayı değildir.")    //dizedeki baktığımız sayı asal değildir.
            }
        }
    }
}

findPrime(2,5,8,21,13)                                          //ödevdeki örnek fonksiyon tanımlamasının çalıştırılması...
findPrime(3,5)                                                  //ödevdeki örnek fonksiyon tanımlamasının çalıştırılması...

//2- Parametre olarak girilen iki sayının arkadaş sayılar olup olmadığını bulan programı yazınız. 
// (Arkadaş sayılar için google)

console.log("2.Soru Çıktıları:")

function friendNumbers(number1, number2) {                      //iki sayı tanımlayabileceğimiz fonksiyonu istedik.
    let total1 = 0                                              //birinci sayının bölenlerini toplamak için bir değişken tanımladık.
    let total2 = 0                                              //ikinci sayının bölenlerini toplamak için bir değişken tanımladık.
    for (let i = 1; i < number1; i++) {                         //1 dahil kendisi hariç bölenleri toplamını hesaplamak için döngümüzü kurduk.
        if (number1 % i == 0) {                                 //sayının i'ye bölümünden kalan 0 ise
            total1 = total1 + i                                 //birinci toplama ekledik.
        }    
    }
    for (let j = 1; j < number2; j++) {                         //1 dahil kendisi hariç bölenleri toplamını hesaplamak için döngümüzü kurduk.
        if (number2 % j == 0) {                                 //sayının i'ye bölümünden kalan 0 ise
            total2 = total2 + j                                 //ikinci toplama ekledik.
        }
    }
    if (total1 == number2 && total2 == number1) {               //birinci toplam ikinci sayıya ve ikini toplam birinci sayıya eşitse
        console.log(number1 + " ve " + number2 + " arkadaş sayılardır.")    //konsola bu sayıların arkadaş sayı olduklarını yazdırdık.
    }
    else {                                                      //birinci toplam ikinci sayıya ve ikini toplam birinci sayıya eşit değilse
        console.log(number1 + " ve " + number2 + " arkadaş sayılar değillerdir.")   //konsola bu sayıların arkadaş sayı olmadıklarını yazdırdık.
    }
}

friendNumbers (220,284)                                         //fonksiyon tanımlamasının çalıştırılması (wikipedia'daki belirtilen sayılar)
friendNumbers (17296,18416)                                     //fonksiyon tanımlamasının çalıştırılması (wikipedia'daki belirtilen sayılar)
friendNumbers (1184,1210)                                       //fonksiyon tanımlamasının çalıştırılması (wikipedia'daki belirtilen sayılar)
friendNumbers (150,190)                                         //fonksiyon tanımlamasının çalıştırılması 

//3- 1000'e kadarki tüm mükemmel sayıları listeleyen programı yazınız.

console.log("3.Soru Çıktıları:")

function perfectNumbers() {                                     //fonksiyona değişken tanımlamadık. aşağıda 1000'e kadar olan sayıları belirteceğiz.
    for (let number = 2; number < 1001; number++) {             //kendisi hariç pozitif bölenleri olduğu için 2'den 1000'e kadar olan sayıları döngüye aldık.
        let total = 0                                           //bir toplam değişkeni belirledik.
        for (let i = 0; i < number; i++){                       //i, 0'dan başlayıp sayıdan küçük olacak şekilde döngüye aldık.
            if(number%i == 0) {                                 //sayının i'ye bölümünden kalan 0 ise
                total += i                                      //toplam değişkenine i'yi yani tam böleni ekledik.
            }
        }
        if(number == total){                                    //tam bölenleri toplamı sayıya eşitse (mükemmel sayıdır.)
            console.log(number)                                 //bu sayıyı konsola yazdırdık.
        }        
    }
}

perfectNumbers()                                                //fonksiyonu çalıştırdık.

//4- 1000'e kadarki tüm asal sayıları listeleyen programı yazınız.

console.log("4.Soru Çıktıları:")

function primeNumbers() {                                       //fonksiyona değişken tanımlamadık. aşağıda 1000'e kadar olan sayıları belirteceğiz.
    for (let number = 2; number < 1001; number++) {             //kendisi hariç pozitif bölenleri olduğu için 2'den 1000'e kadar olan sayıları döngüye aldık.
        let counter = 0                                         //sayaç değişkeni tanımladık.
        for (let i = 2; i < number; i++) {                      //sayımızı 2, 2'den büyük sayılara bölüp (i'nin 2'den başlama sebebi) kendisine bölemeyeceğimiz şekilde (yani sayıdan küçük) döngümüzü olşturduk.
            if(number % i == 0){                                //sayımız i'ye böldüğümüzde kalan 0 ise (i tam bölen ise)
                counter += 1                                    //sayacımızı artırdık.
            }
        }
        if(counter == 0) {                                      //sayaçta bir değişiklik olmamışsa yani başlangıçtaki gibi 0 ise (sayı asaldır.)
            console.log(number)                                 //asal sayıyı konsola yazdırdık.
        }
    }
}

primeNumbers()                                                  //fonksiyonu çalıştırdık.