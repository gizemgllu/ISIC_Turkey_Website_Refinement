#!/usr/bin/env python3
"""
Simple HTTP Server for ISIC Turkey Website
Run this file to start a local server and view the website
"""

import http.server
import socketserver
import webbrowser
import os
from pathlib import Path

# Configuration
PORT = 8000
DIRECTORY = Path(__file__).parent

class CustomHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(DIRECTORY), **kwargs)
    
    def end_headers(self):
        # Add CORS headers for development
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        super().end_headers()
    
    def do_OPTIONS(self):
        self.send_response(200)
        self.end_headers()

def start_server():
    """Start the HTTP server"""
    try:
        with socketserver.TCPServer(("", PORT), CustomHTTPRequestHandler) as httpd:
            print(f"🚀 ISIC Turkey Website Server Started!")
            print(f"📱 Local URL: http://localhost:{PORT}")
            print(f"🌐 Network URL: http://0.0.0.0:{PORT}")
            print(f"📁 Serving files from: {DIRECTORY}")
            print(f"⏹️  Press Ctrl+C to stop the server")
            print("-" * 50)
            
            # Open browser automatically
            webbrowser.open(f'http://localhost:{PORT}')
            
            # Start serving
            httpd.serve_forever()
            
    except KeyboardInterrupt:
        print("\n🛑 Server stopped by user")
    except OSError as e:
        if e.errno == 48:  # Address already in use
            print(f"❌ Port {PORT} is already in use!")
            print(f"💡 Try using a different port or stop the existing server")
        else:
            print(f"❌ Error starting server: {e}")
    except Exception as e:
        print(f"❌ Unexpected error: {e}")

if __name__ == "__main__":
    start_server()
