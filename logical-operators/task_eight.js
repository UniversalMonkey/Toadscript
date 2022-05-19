if (-1 || 0) alert( 'first' ); // True -1 -> alert(first).
if (-1 && 0) alert( 'second' ); // -1 = True,0 = False. if(0).
if (null || -1 && 1) alert( 'third' ); // -1 && 1 -> 1 -> alert(third).