import httpx
import time


URLS = [
    "https://example.com"
] * 50


def main():
    baslangic = time.perf_counter()

    with httpx.Client() as client:
        sonuclar = []

        for url in URLS:
            try:
                response = client.get(url)
                sonuclar.append(response.status_code)
            except Exception:
                sonuclar.append(0)

    sure = time.perf_counter() - baslangic

    print("Toplam istek:", len(sonuclar))
    print("Başarılı istek:", sum(1 for kod in sonuclar if kod == 200))
    print(f"Süre: {sure:.2f} saniye")


if __name__ == "__main__":
    main()