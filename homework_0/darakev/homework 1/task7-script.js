function decision() {
  let money = prompt("Колко пари имаш?");
  let boolean health = prompt("Здрав ли си?");
 
    if (!health) {
            ("Shtom si bolen shte si stiosh vkyshti. ");
            if (money > 0) {
                ("Kupi si lekrastva");
            } else {
                ("Nqmash dostatychno pari, taka che si napravi chai");
            }
        } else {
            if (money < 10) {
                ("Shte hodq na kafe");
            } else {
                ("Shte hodq na Diskoteka na lov za macki");
            }

