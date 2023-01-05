# yarn-monorepo
This repo uses Zero-installment
(yarn wants to prevent itself from fucking up, thus one way of doing that is with lockfiles that we will prolly be purging every time we start development idk).\
The other way is by caching all the neccesary dependencies, thus the term "zero-install". This project has around 20Mb at the time of writing, but once you clone it, you're ready to go.

I wanna add nodemon scripts that will kill ports and restart the apps when theres a change in webpack config js

I also want to add shell scripts that will put the result of npx-create-mf-app --yarn to packages folder
and also find a way to pass arguments to it, like react, scss or something

ALL IN BASH

make them available in the whole repo, install them globally or something idk i dont wanna think about that now, i gotta configure mfes
