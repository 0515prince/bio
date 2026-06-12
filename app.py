import webview
import os
import sys

def get_asset_path(relative_path):
    if getattr(sys, 'frozen', False):
        # PyInstaller creates a temp folder and stores path in _MEIPASS
        base_path = sys._MEIPASS
    else:
        base_path = os.path.abspath(".")
    return os.path.join(base_path, relative_path)

if __name__ == '__main__':
    html_path = get_asset_path('index.html')
    webview.create_window(
        'Bihar Board Science Quiz App',
        html_path,
        width=430,
        height=820,
        resizable=False
    )
    webview.start(debug=True)
