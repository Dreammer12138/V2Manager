# V2Manager

V2Manager全称V2ray Manager，是一款用于服务器端的V2ray管理应用。

V2Manager基于Django(Python)开发，以Web为主要形式的服务器应用，支持可视化操作、配置V2ray，方便新手使用。

**V2Manager必须在Linux环境下运行（这年头不会还有人用WinServer搭梯子吧，不会吧不会吧）**

## 环境要求

- Python 3.6.5 以上
- sqlite 3
- wget
- curl
- bash
- v2ray

## 安装

### 安装环境

**以Debian为例**

```shell
$ sudo apt install python3 sqlite3 wget curl bash -y
```

### 下载V2Manager

请从[Github](https://github.com/Dreammer12138/V2Manager/releases)上下载最新的发行包，并解压

### 安装V2ray

```shell
# 运行V2Manager文件夹下的go.sh
$ sudo chmod a+x go.sh
$ sudo bash go.sh
```

等待完成安装，由于官方提供的资源均位托管与Github，所以下载速度可能会比较慢，请耐心等待。

如果有其他渠道提供的V2ray压缩包，请把压缩包移动到`/tmp/v2ray`路径下，并将go.sh文件中的以下代码删除。

```shell
downloadV2Ray(){
    # 从这里开始
    rm -rf /tmp/v2ray
    mkdir -p /tmp/v2ray
    DOWNLOAD_LINK="https://github.com/v2ray/v2ray-core/releases/download/${NEW_VER}/v2ray-linux-${VDIS}.zip"
    colorEcho ${BLUE} "Downloading V2Ray: ${DOWNLOAD_LINK}"
    curl ${PROXY} -L -H "Cache-Control: no-cache" -o ${ZIPFILE} ${DOWNLOAD_LINK}
    if [ $? != 0 ];then
        colorEcho ${RED} "Failed to download! Please check your network or try again."
        return 3
    fi
    # 到这里为止全部删除
    return 0
}
```

保存退出，再执行go.sh

```shell
$ sudo bash go.sh
```

即可完成安装

### 初始化V2Manager

运行以下代码初始化环境

```shell
$ sudo chmod a+x begin.sh
$ sudo bash begin.sh
```

## 运行

安装好环境以后运行

```shell
$ sudo python3 manage.py runserver 0.0.0.0:<port> --insecure
```

- `<port>`是网站的访问端口，可以随意设置，但是请不要和其他进程的端口重复

  例如`sudo python3 manage.py runserver 0.0.0.0:8000 --insecure`

## 访问

浏览器打开`http://<你的服务器IP>:<你刚刚设置好的访问端口>`

例如`http://192.168.1.1:8000`

![result](/doc/img/result.png)
