type User = {
    id: number;
    name: string;
    email: string;
    password: string;
    role: "admin" | "user";
};

// Şifreyi dışarıya göndermiyoruz
type PublicUser = Omit<User, "password">;

// Kullanıcı güncelleme işlemi
type UserUpdate = Partial<Omit<User, "id">>;

const user: User = {
    id: 1,
    name: "Kenan",
    email: "kenan@example.com",
    password: "123456",
    role: "user"
};

const publicUser: PublicUser = {
    id: user.id,
    name: user.name,
    email: user.email,
    role: user.role
};

const update: UserUpdate = {
    name: "Kenan Yeni"
};

console.log("Kullanıcı:", user);
console.log("Güvenli kullanıcı:", publicUser);
console.log("Güncelleme:", update);

function yazdir<T>(deger: T): T {
    return deger;
}

const sayi = yazdir(100);
const metin = yazdir("Merhaba");

console.log("Sayı:", sayi);
console.log("Metin:", metin);
type Roller = Record<"admin" | "user", string>;

const rolAciklamalari: Roller = {
    admin: "Yönetici",
    user: "Normal kullanıcı"
};

console.log("Roller:", rolAciklamalari);
console.log("Admin açıklaması:", rolAciklamalari.admin);
function veriKontrolEt(veri: unknown): void {
    if (typeof veri === "string") {
        console.log("Bu bir yazı:", veri.toUpperCase());
    } else if (typeof veri === "number") {
        console.log("Bu bir sayı:", veri * 2);
    } else {
        console.log("Bilinmeyen veri tipi");
    }
}

veriKontrolEt("merhaba");
veriKontrolEt(25);
veriKontrolEt(true);
let veri: any = "Merhaba";

console.log(veri.length);

veri = 123;
console.log(veri);

veri = true;
console.log(veri);