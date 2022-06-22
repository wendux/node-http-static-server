# node-http-static-server

A http server for static files. 只需一句命令，便可以快速在任意目录下创建一个http静态文件服务器。

## Get started

### Install

```shell
npm install node-http-static-server -g
```

### Usage

```shell
cd mydoc
hs #启动 http，根目录为 mydoc
```

### Arguments

  Options:
    -h, --help          Output usage information
    -p, --port  [number]      The port on which the app will be running (defaults to 3000)
    -r, --root [value]   http server root dir (defaults to ".")
    -v, --version       Output the version number

```shell
hs -p 80 # listening on 80 port
```

