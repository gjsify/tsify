const gi = require('node-gtk')
const Gir = gi.require('GIRepository', '2.0')
const GLib = gi.require('GLib', '2.0')

Gir.Repository.prependSearchPath(GLib.getCurrentDir());
const repo = Gir.Repository.getDefault();

const typelib = repo.requirePrivate(GLib.getCurrentDir(), "Accounts", "1.0", Gir.RepositoryLoadFlags.IREPOSITORY_LOAD_FLAG_LAZY);
repo.loadTypelib(typelib, Gir.RepositoryLoadFlags.IREPOSITORY_LOAD_FLAG_LAZY);

const namespaces = repo.getLoadedNamespaces();
console.log("namespaces", namespaces);

for (const namespace of namespaces) {
    const nInfo = repo.getNInfos(namespace);
    console.log("nInfo", nInfo);
    for (let i = 0; i < nInfo; i++) {
        const info = repo.getInfo(namespace, i);
        console.log("info", i, info);

        const type = info.getType();
        console.log("type", type); // TODO see https://gjs-docs.gnome.org/girepository20~2.0_api-infotype/
        
        const name = info.getName();
        console.log("name", name);

        const typelib = info.getTypelib();
        console.log("typelib", typelib);
    }

    const version = repo.getVersion(namespace);
    console.log("version", version);
    
    const dependencies = repo.getDependencies(namespace);
    console.log("dependencies", dependencies);
}


