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
    const info = repo.getInfo(namespace, 0);
    console.log("info", info);
    const version = repo.getVersion(namespace);
    console.log("version", version);
    const nInfo = repo.getNInfos(namespace);
    console.log("nInfo", nInfo);
    const dependencies = repo.getDependencies(namespace);
    console.log("dependencies", dependencies);
}


