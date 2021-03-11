import * as Gir  from './Gjs/GIRepository-2.0'; 
import * as GLib  from './Gjs/GLib-2.0';

Gir.Repository.prepend_search_path(GLib.get_current_dir());
const repo = Gir.Repository.get_default();

// TODO create wrapper in vala?
// JS ERROR: Error: Can't create a Javascript object for Typelib; no way to copy
// var typelib = repo.require_private(GLib.get_current_dir(), "Accounts", "1.0", Gir.RepositoryLoadFlags.IREPOSITORY_LOAD_FLAG_LAZY);
// repo.load_typelib(typelib, Gir.RepositoryLoadFlags.IREPOSITORY_LOAD_FLAG_LAZY);

const namespaces = repo.get_loaded_namespaces();

print(namespaces);