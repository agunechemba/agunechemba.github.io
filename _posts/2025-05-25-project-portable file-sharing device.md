# Project: Portable File-Sharing Device


<div style="text-align: center;">
  <img src="https://agunechembaekene.wordpress.com/wp-content/uploads/2025/05/ekene_agu_a_raspberry_pi_4_in_a_protective_case_with_a_usb_f_b50514fc-ce17-492a-8edf-48702f129470.png" alt="Raspberry Pi in a Case">
</div>


---

## 📁 Introduction

This project is my original idea — a **Portable File-Sharing Device** that turns your Raspberry Pi into a Wi-Fi hotspot and local web server, capable of serving files directly from a USB flash drive. The goal is simple: **no internet needed** — just power it up, connect to the hotspot, and access your files via a browser at `http://192.168.4.1`.

The device uses a **USB flash drive as external storage**, so all files you see and download through the browser are stored **outside the Raspberry Pi**, keeping things clean and easily swappable.

Whether you're a student, teacher, developer, or just someone who loves tinkering with Raspberry Pi, this project is for you.

You’re free to build and improve it — but **credit goes to me, Ekene Agunechemba**, as the original creator of this solution.
For questions, collaborations, or shout-outs, feel free to reach me at: **[agunechemba@yahoo.com](mailto:agunechemba@yahoo.com)**

Let’s build something useful!

---


## 🔧 Project Goal

Build a **portable file-sharing device** that:

* Creates a Wi-Fi hotspot
* Hosts a local web server
* Lists and serves files from a USB flash drive at `http://192.168.4.1`

---

## 🧰 What You’ll Need

| Item                  | Description                    |
| --------------------- | ------------------------------ |
| Raspberry Pi (3/4)    | With built-in Wi-Fi            |
| MicroSD Card (8GB+)   | For the OS                     |
| USB Flash Drive       | Holds files to be served       |
| Power Supply          | Power your Pi                  |
| HDMI/Monitor/Keyboard | For initial setup (or use SSH) |
| Optional: Case        | To protect your Pi             |

---

## 📦 Step 1: Prepare Your Raspberry Pi

1. **Download and flash Raspberry Pi OS Lite**

   * [Download Raspberry Pi Imager](https://www.raspberrypi.com/software/)
   * Choose **Raspberry Pi OS Lite (64-bit)**
   * Flash it to your microSD card
   * Enable SSH (create an empty file named `ssh` in boot partition)

2. **Boot and connect**

   * Insert the card, boot the Pi
   * Connect to Wi-Fi (temporarily) or access via HDMI/keyboard

---

## 🌐 Step 2: Set Up the Wi-Fi Hotspot

### 1. Install Required Tools

```bash
sudo apt update
sudo apt install hostapd dnsmasq
```

### 2. Configure Static IP

Edit `/etc/dhcpcd.conf`:

```bash
sudo nano /etc/dhcpcd.conf
```

Add at the bottom:

```bash
interface wlan0
    static ip_address=192.168.4.1/24
    nohook wpa_supplicant
```

### 3. Configure `hostapd`

```bash
sudo nano /etc/hostapd/hostapd.conf
```

Paste:

```
interface=wlan0
driver=nl80211
ssid=OfflineServer
hw_mode=g
channel=7
wmm_enabled=0
macaddr_acl=0
auth_algs=1
ignore_broadcast_ssid=0
```

Edit `/etc/default/hostapd`:

```bash
sudo nano /etc/default/hostapd
```

Add:

```
DAEMON_CONF="/etc/hostapd/hostapd.conf"
```

### 4. Configure `dnsmasq`

Backup old config:

```bash
sudo mv /etc/dnsmasq.conf /etc/dnsmasq.conf.orig
```

Create new one:

```bash
sudo nano /etc/dnsmasq.conf
```

Paste:

```
interface=wlan0
dhcp-range=192.168.4.2,192.168.4.20,255.255.255.0,24h
```

---

## 💾 Step 3: Mount USB Flash Drive Automatically

1. Plug in your flash drive
2. Create mount point:

```bash
sudo mkdir /media/usb
```

3. Find device name:

```bash
lsblk
```

4. Add to `/etc/fstab`:

```bash
sudo nano /etc/fstab
```

Add (replace `sda1` with your actual device):

```
/dev/sda1 /media/usb vfat defaults,nofail 0 0
```

---

## 🌐 Step 4: Build the HTTP File Server

### Using Python + Flask

1. Install Flask:

```bash
sudo apt install python3-pip
pip3 install flask
```

2. Create app file:

```bash
mkdir ~/fileserver
nano ~/fileserver/server.py
```

Paste this:

```python
from flask import Flask, send_from_directory, render_template_string
import os

app = Flask(__name__)
USB_PATH = "/media/usb"

@app.route("/")
def list_files():
    files = os.listdir(USB_PATH)
    return render_template_string('''
        <h1>Files on USB</h1>
        <ul>{% for file in files %}
          <li><a href="/files/{{file}}">{{file}}</a></li>
        {% endfor %}</ul>
    ''', files=files)

@app.route("/files/<path:filename>")
def serve_file(filename):
    return send_from_directory(USB_PATH, filename)

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=80)
```

---

## 🔁 Step 5: Auto-Start Server on Boot

### Create a systemd service:

```bash
sudo nano /etc/systemd/system/fileserver.service
```

Paste:

```
[Unit]
Description=Offline File Server
After=network.target

[Service]
ExecStart=/usr/bin/python3 /home/pi/fileserver/server.py
WorkingDirectory=/home/pi/fileserver
Restart=always
User=pi

[Install]
WantedBy=multi-user.target
```

Enable it:

```bash
sudo systemctl enable fileserver
```

---

## 🔄 Step 6: Reboot and Test

1. Reboot:

```bash
sudo reboot
```

2. Connect your phone or PC to `OfflineServer` Wi-Fi
3. Open browser → `http://192.168.4.1`
4. You’ll see the files from the flash drive, clickable and downloadable!

---

## ✅ Optional Extras

* Add file type icons or previews
* Add upload form (if you want users to upload files)
* Add QR code that points to `http://192.168.4.1`

---


## Recommended PI Models

### ✅ Best Choice: Raspberry Pi 4 Model B
Wi-Fi + dual-band (faster, more stable hotspot)

USB 3.0 ports (faster file access)

More RAM (1GB–8GB options)

Faster CPU → handles Flask/Node.js better

### 👍 Good Choice: Raspberry Pi 3 Model B+
Built-in Wi-Fi (single band, but works)

Enough power for hotspot + Flask server

More affordable and less power-hungry
