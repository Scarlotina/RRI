from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
import sys


class GameRequestHandler(SimpleHTTPRequestHandler):
    extensions_map = {
        **SimpleHTTPRequestHandler.extensions_map,
        ".js": "text/javascript",
    }


def main():
    project_root = Path(__file__).resolve().parent.parent
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 8080
    handler = partial(GameRequestHandler, directory=str(project_root))
    server = ThreadingHTTPServer(("127.0.0.1", port), handler)
    print(f"Serving {project_root} at http://localhost:{port}/")
    server.serve_forever()


if __name__ == "__main__":
    main()
