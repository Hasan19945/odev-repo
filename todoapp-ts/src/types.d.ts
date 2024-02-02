//! .d.ts uzantısnı typescript global alan olarak görüyor. Vu bu uzantıdaki dosyalarda tanımladığımız typelara herhangi bir export-import yapmadan erişim sağlayabiliyoruz.

interface ITodoType {
    id: string | number;//? id bilgisi string yada number olabilir. İki veri tipinide kabul edecek.
    isDone: boolean;
    task: string;
    todo?: string;//! todo verisini opsiyonel bırakarak olsa da olur olmasa da olur demiş oluyoruz. Zorunlu olmayan fieldlar için kullanılabilir.
}

type AddFn = (text: string) => Promise<void>;
type ToggleFn = (todo:ITodoType) => Promise<void>;
type DeleteFn = (id:string | number) => Promise<void>;
