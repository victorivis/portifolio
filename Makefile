# Libs
WINLIBS = -I ..\..\SDL2\x86_64-w64-mingw32\include\ -L ..\..\SDL2\x86_64-w64-mingw32\lib\ -lmingw32 -lSDL2main -lSDL2 -lSDL2_ttf -lSDL2_image -DLOCAL
WEBLIBS = -s WASM=1 -s USE_SDL=2 -s USE_SDL_IMAGE=2 -s USE_SDL_TTF=2 --preload-file web-assembler/temp/assets -s EXIT_RUNTIME=1
LINUXLIBS = -std=c++20 -Wno-narrowing $(shell pkg-config --cflags --libs sdl2 ) -lSDL2_ttf
FILES = web-assembler/temp/src/main.cpp web-assembler/temp/src/pecas.cpp web-assembler/temp/src/visual.cpp web-assembler/temp/src/ia.cpp

wincpp: $(FILES)
	g++ $(FILES) $(WINLIBS) -o saida.exe

linuxcpp: $(FILES)
	g++ $(FILES) $(LINUXLIBS) -o saida.out

webcpp: $(FILES)
	em++ $(FILES) $(WEBLIBS) -o web-assembler/chess.js

winrun: wincpp
	./saida.exe

linuxrun: linuxcpp
	./saida.out

webrun: webcpp
	emrun index.html