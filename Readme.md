# cerebro-linux-system

> [Cerebro](http://www.cerebroapp.com) plugin to execute Linux system commands.

## Usage
In Cerebro, simply enter one of the following commands and press `Enter` to execute it.

Available commands:
* `Restart`
* `Logout`
* `Sleep`
* `Shut Down`
* `Empty Trash`
* `Trash` - Open trash in file explorer

## Setup
Unfortunately, it is not possible to execute some system commands in linux without root access. In order to use the `Restart`, and `Shut Down` commands you will need to add the line `<username> ALL = NOPASSWD: /sbin/poweroff, /sbin/reboot` to you /etc/sudoers file using the `visudo` command.
## Related

- [Cerebro](http://github.com/KELiON/cerebro) – main repo for Cerebro app;

## License

MIT © [Alexandr Subbotin](http://asubbotin.ru)
