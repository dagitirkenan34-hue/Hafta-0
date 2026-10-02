import asyncio
import httpx
import time


URLS = [
    "https://example.com"
] * 50


async def url_istegi(client: httpx.AsyncClient, url: str) -> int:
    try:
        response = await client.get(url)
        return response.status_code
    except Exception:
        return 0


async def main():
    baslangic = time.perf_counter()

    async with httpx.AsyncClient() as client:
        sonuclar = await asyncio.gather(
            *(url_istegi(client, url) for url in URLS)
        )

    sure = time.perf_counter() - baslangic

    print("Toplam istek:", len(sonuclar))
    print("Başarılı istek:", sum(1 for kod in sonuclar if kod == 200))
    print(f"Süre: {sure:.2f} saniye")


asyncio.run(main())
    