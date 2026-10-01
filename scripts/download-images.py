"""Download the curated Unsplash sample assets. Run only when refreshing photography."""
import concurrent.futures
import pathlib
import json
import urllib.request
photos = list(json.loads(pathlib.Path('public/images/sources.json').read_text()).items())
def download(photo):
    name, source_url = photo
    url = f'{source_url}?auto=format&fit=crop&w=1600&q=85'
    path = pathlib.Path(f'public/images/{name}.jpg')
    request = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    with urllib.request.urlopen(request, timeout=40) as response:
        data = response.read()
        if not response.headers.get('Content-Type', '').startswith('image/'):
            raise ValueError(f'Not an image: {name}')
    path.write_bytes(data)
    return f'{name}: {len(data)} bytes'
with concurrent.futures.ThreadPoolExecutor(max_workers=5) as executor:
    for result in executor.map(download, photos):
        print(result)
