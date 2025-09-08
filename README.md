Beginning of a code metrics scanner for git repos.

When executing app.js it begins by cloning the specified git repository, then it scans all the files and provides a size representation of all files with a filetype specified in languages.txt.

There are small problems with the cloning since it uses a shell for the cloning and no way of using await correctly was found. Meaning that sometimes the program may fail and sometimes it works.