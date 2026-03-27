const CP1251_EXTRA = {
  "Ђ": 0x80, "Ѓ": 0x81, "‚": 0x82, "ѓ": 0x83, "„": 0x84, "…": 0x85, "†": 0x86, "‡": 0x87,
  "€": 0x88, "‰": 0x89, "Љ": 0x8a, "‹": 0x8b, "Њ": 0x8c, "Ќ": 0x8d, "Ћ": 0x8e, "Џ": 0x8f,
  "ђ": 0x90, "‘": 0x91, "’": 0x92, "“": 0x93, "”": 0x94, "•": 0x95, "–": 0x96, "—": 0x97,
  "™": 0x98, "љ": 0x99, "›": 0x9a, "њ": 0x9b, "ќ": 0x9c, "ћ": 0x9d, "џ": 0x9e, "Ў": 0x9f,
  " ": 0xa0, "ў": 0xa2, "Ј": 0xa3, "Ґ": 0xa5, "Ё": 0xa8, "Є": 0xaa, "«": 0xab, "¬": 0xac,
  "­": 0xad, "®": 0xae, "Ї": 0xaf, "°": 0xb0, "±": 0xb1, "І": 0xb2, "і": 0xb3, "ґ": 0xb4,
  "µ": 0xb5, "¶": 0xb6, "·": 0xb7, "ё": 0xb8, "№": 0xb9, "є": 0xba, "»": 0xbb, "ј": 0xbc,
  "Ѕ": 0xbd, "ѕ": 0xbe, "ї": 0xbf,
};

const decoder = new TextDecoder("utf-8");

const looksBroken = (text) => /Р.|С.|вЂ|Ѓ|Ћ|™|љ|њ|ќ|џ/.test(text);

function charToCp1251Byte(ch) {
  const code = ch.charCodeAt(0);
  if (code <= 0x7f) return code;
  if (code >= 0x0410 && code <= 0x044f) return code - 0x350;
  if (CP1251_EXTRA[ch] !== undefined) return CP1251_EXTRA[ch];
  return null;
}

function score(text) {
  const good = (text.match(/[А-Яа-яЁё]/g) || []).length;
  const bad = (text.match(/Р.|С.|вЂ|Ѓ|Ћ|™|љ|њ|ќ|џ/g) || []).length;
  return good - bad * 2;
}

export function fixMojibake(value) {
  const text = String(value ?? "");
  if (!text || !looksBroken(text)) return text;

  const bytes = [];
  for (const ch of text) {
    const b = charToCp1251Byte(ch);
    if (b === null) return text;
    bytes.push(b);
  }

  const candidate = decoder.decode(new Uint8Array(bytes));
  return score(candidate) > score(text) ? candidate : text;
}
