declare module com {
  export module bumptech {
    export module glide {
      export module disklrucache {
        export class DiskLruCache {
          public static class: java.lang.Class<com.bumptech.glide.disklrucache.DiskLruCache>;
          public get(param0: string): com.bumptech.glide.disklrucache.DiskLruCache.Value;
          public edit(param0: string): com.bumptech.glide.disklrucache.DiskLruCache.Editor;
          public setMaxSize(param0: number): void;
          public static open(param0: java.io.File, param1: number, param2: number, param3: number): com.bumptech.glide.disklrucache.DiskLruCache;
          public getDirectory(): java.io.File;
          public delete(): void;
          public close(): void;
          public getMaxSize(): number;
          public size(): number;
          public flush(): void;
          public remove(param0: string): boolean;
          public isClosed(): boolean;
        }
        export module DiskLruCache {
          export class DiskLruCacheThreadFactory {
            public static class: java.lang.Class<com.bumptech.glide.disklrucache.DiskLruCache.DiskLruCacheThreadFactory>;
            public newThread(param0: java.lang.Runnable): java.lang.Thread;
          }
          export class Editor {
            public static class: java.lang.Class<com.bumptech.glide.disklrucache.DiskLruCache.Editor>;
            public set(param0: number, param1: string): void;
            public commit(): void;
            public getString(param0: number): string;
            public getFile(param0: number): java.io.File;
            public abortUnlessCommitted(): void;
            public abort(): void;
          }
          export class Entry {
            public static class: java.lang.Class<com.bumptech.glide.disklrucache.DiskLruCache.Entry>;
            public getCleanFile(param0: number): java.io.File;
            public getLengths(): string;
            public getDirtyFile(param0: number): java.io.File;
          }
          export class Value {
            public static class: java.lang.Class<com.bumptech.glide.disklrucache.DiskLruCache.Value>;
            public getString(param0: number): string;
            public getLength(param0: number): number;
            public getFile(param0: number): java.io.File;
            public edit(): com.bumptech.glide.disklrucache.DiskLruCache.Editor;
          }
        }
      }
    }
  }
}

declare module com {
  export module bumptech {
    export module glide {
      export module disklrucache {
        export class StrictLineReader {
          public static class: java.lang.Class<com.bumptech.glide.disklrucache.StrictLineReader>;
          public readLine(): string;
          public constructor(param0: java.io.InputStream, param1: java.nio.charset.Charset);
          public hasUnterminatedLine(): boolean;
          public close(): void;
          public constructor(param0: java.io.InputStream, param1: number, param2: java.nio.charset.Charset);
        }
      }
    }
  }
}

declare module com {
  export module bumptech {
    export module glide {
      export module disklrucache {
        export class Util {
          public static class: java.lang.Class<com.bumptech.glide.disklrucache.Util>;
        }
      }
    }
  }
}

//Generics information:
