Jesidget
========

A Sticky note iWidget 

Description
------------
Jesidget is a 150x150px sticky note widget of variable color (configurable on creation) with a completion indicator in the top right corner. It is scrollable, and uses HTML5 local storage for persistence.

Building and Installing
-----------------------
Since iWidgets are just HTML/Javascript, there really isn't any building to be done. I have created a makefile just so I wouldn't have to remember the commands. Running `make` creates a cydia-compatable .deb file and `make install` runs `dpkg` to install it.

Caveats and Oddities
--------------------
Since iWidget does not give individual widget instances their own local storage, jesidgets rely on a user supplied name to determine their persistant data. If none is supplied, persistance is disable and a warning note is shown. This has the benefitial side effect of allowing users to restore notes that were accidentally deleted by creating a new note with the same name as the old note. On the downside, if two notes are named the same thing at the same time, whichever one was selected last will control the persistant data, and the others data will be erased after a reload. It also means that notes are never deleted until the 5MB storage limit is reached, but I feel 5MB is a trivial amount and do not care to fix it.


License
--------
The MIT License (MIT)

Copyright (c) 2014 Tsubashi

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
