export const has3y3 = (text: string) => !![...text].some((x) => 0xe0000 < x.codePointAt(0)! && x.codePointAt(0)! < 0xe007f)
export const decode3y3 = (text: string) => [...text].map(x => 0xe0000 < x.codePointAt(0)! && x.codePointAt(0)! < 0xe007f ? String.fromCodePoint(x.codePointAt(0)! - 0xe0000) : x).join("");
export const encode3y3 = (text: string) => [...text].map(x => 0x00 < x.codePointAt(0)! && x.codePointAt(0)! < 0x7f ? String.fromCodePoint(x.codePointAt(0)! + 0xe0000) : x).join("");