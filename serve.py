#!/usr/bin/env python

def format_script_tag(name):
    return '<script src="%s"></script>' % name

def format_page(headInner):
    return """
        <html>
            <head>
                <title>All Scripts</title>
                %(headInner)s
            </head>
            <body>
                Now go to source tab in your devtools. You should find all scripts loaded.
            </body>
        </html>
    """ % locals()

def list_files(extension):
    import os
    return [os.path.join(root, file) for root ,_,filenames in os.walk(".") for file in filenames if os.path.splitext(file)[-1] == extension]

def create_page(name):
    scripts = [format_script_tag(f) for f in list_files(".js")]
    scripts_str = "\n".join(scripts)
    html = format_page(scripts_str)
    with open(name, "w") as f:
        f.write(html)

def serve(port):
    import SimpleHTTPServer
    import SocketServer

    Handler = SimpleHTTPServer.SimpleHTTPRequestHandler

    httpd = SocketServer.TCPServer(("", port), Handler)

    print "serving at port", port
    httpd.serve_forever()

def open_tab(port, page):
    import webbrowser
    url = 'http://localhost:%(port)s/%(page)s' % locals()
    webbrowser.open_new_tab(url)

PAGE_NAME = ".index.html"
port = 8000
create_page(PAGE_NAME)
open_tab(port, PAGE_NAME)
serve(port) # Let's hope this runs before the new tab opens!
