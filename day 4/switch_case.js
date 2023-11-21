var char = prompt("Enter a character => ");
{
if ( char == char.toUpperCase())
document.write( char + " is a UPPERCASE alphabet and it's a ");

    else if ( char == char.toLowerCase())
document.write( char + " is a LOWERCASE alphabet and it's a ");

        else
document.write( char + " isn't a English Alphabet");
}
char =char.toLowerCase();
switch (char){

case ('a') :case ('e') :case ('i') :case ('o') :case ('u') : 

                document.write(" VOWEL");
                break;
default : document.write(" CONSONENT");
break ;

}