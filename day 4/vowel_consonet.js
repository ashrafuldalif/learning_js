var cha = document.getElementById("character").value;


    function vowelUpperOrLower(a) {
    if (a == a.toLowerCase())
        document.write(a + " is a Lower Case alphabet and it's also a ");
        else if (a == a.toUpperCase())
        document.write(a + " is a Upper Case alphabet and it's also a ");
        else alert("this is not a alphabet  you mother ka bacha ..");

            {
            a = a.toLowerCase();
            if (a == "a" || a == "e" || a == "i" || a == "o" || a == "u")
            document.write(" Vowel ");
            else document.write(" Consonent ");
        }
}
vowelUpperOrLower(cha);
