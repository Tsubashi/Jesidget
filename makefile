all:
	dpkg-deb --build jesidget

install:
	dpkg -i jesidget.deb
