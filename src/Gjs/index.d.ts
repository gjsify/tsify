import type * as Gjs from "./Gjs";
// TODO add support for multiple versions
import type * as GIRepository20 from "./GIRepository-2.0";
import type * as GObject20 from "./GObject-2.0";
import type * as GLib20 from "./GLib-2.0";


declare global {
    function print(...args: any[]): void;
    function printerr(...args: any[]): void
    function log(message?: string): void
    function logError(exception: any, message?: string): void
    const ARGV: string[]

    const imports: typeof Gjs & {
        gi: {
            GIRepository:              typeof GIRepository20
            GObject:              typeof GObject20
            GLib:              typeof GLib20
        }
        versions: {
            GIRepository:              '2.0'
            GObject:              '2.0'
            GLib:              '2.0'
        }
        searchPath: string[];
    }
}

export { imports }
