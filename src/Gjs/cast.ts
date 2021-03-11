import * as GObject from './GObject-2.0';

const inheritanceTable: { [key: string]: string[] } = {
    'GIRepository.Repository': [
    'GObject.Object',
],
    'GObject.Binding': [
    'GObject.Object',
],
    'GObject.InitiallyUnowned': [
    'GObject.Object',
],
    'GObject.ParamSpecBoolean': [
    'GObject.ParamSpec',
],
    'GObject.ParamSpecBoxed': [
    'GObject.ParamSpec',
],
    'GObject.ParamSpecChar': [
    'GObject.ParamSpec',
],
    'GObject.ParamSpecDouble': [
    'GObject.ParamSpec',
],
    'GObject.ParamSpecEnum': [
    'GObject.ParamSpec',
],
    'GObject.ParamSpecFlags': [
    'GObject.ParamSpec',
],
    'GObject.ParamSpecFloat': [
    'GObject.ParamSpec',
],
    'GObject.ParamSpecGType': [
    'GObject.ParamSpec',
],
    'GObject.ParamSpecInt': [
    'GObject.ParamSpec',
],
    'GObject.ParamSpecInt64': [
    'GObject.ParamSpec',
],
    'GObject.ParamSpecLong': [
    'GObject.ParamSpec',
],
    'GObject.ParamSpecObject': [
    'GObject.ParamSpec',
],
    'GObject.ParamSpecOverride': [
    'GObject.ParamSpec',
],
    'GObject.ParamSpecParam': [
    'GObject.ParamSpec',
],
    'GObject.ParamSpecPointer': [
    'GObject.ParamSpec',
],
    'GObject.ParamSpecString': [
    'GObject.ParamSpec',
],
    'GObject.ParamSpecUChar': [
    'GObject.ParamSpec',
],
    'GObject.ParamSpecUInt': [
    'GObject.ParamSpec',
],
    'GObject.ParamSpecUInt64': [
    'GObject.ParamSpec',
],
    'GObject.ParamSpecULong': [
    'GObject.ParamSpec',
],
    'GObject.ParamSpecUnichar': [
    'GObject.ParamSpec',
],
    'GObject.ParamSpecValueArray': [
    'GObject.ParamSpec',
],
    'GObject.ParamSpecVariant': [
    'GObject.ParamSpec',
],
    'GObject.TypeModule': [
    'GObject.Object',
    'GObject.TypePlugin',
],
}


interface StaticNamedClass<T> {
    new (...args: any[]): T
    name: string
}

/**
 * Casts between derived classes, performing a run-time type-check
 * and raising an exception if the cast fails. Allows casting to implemented
 * interfaces, too.
 */
export function giCast<T>(from_: GObject.Object, to_: StaticNamedClass<T>): T {
    const desc: string = from_.toString()
    let clsName: string|null = null
    for (const k of desc.split(" ")) {
        if (k.substring(0, 7) == "GIName:") {
            clsName = k.substring(7)
            break
        }
    }
    const toName = to_.name.replace("_", ".")

    if (toName === clsName)
        return ((from_ as any) as T)

    if (clsName) {
        const parents = inheritanceTable[clsName]
        if (parents) {
            if (parents.indexOf(toName) >= 0)
                return ((from_ as any) as T)
        }
    }

    throw Error("Invalid cast of " + desc + "(" + clsName + ") to " + toName)
}    
