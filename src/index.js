const { search, shellCommand } = require('cerebro-tools')

const COMMANDS = {
	'Restart': {
		command: "sudo /sbin/reboot",
	},
	'Shut Down': {
		command: "sudo /sbin/poweroff",
	},
	'Sleep': {
		command: "systemctl suspend",
	},
}

// This function was taken from the cerebro-osx-system plugin
// https://github.com/KELiON/cerebro-osx-system
const plugin = ({ term, display }) => {
  const commands = search(Object.keys(COMMANDS), term)
  if (commands.length > 0) {
    const result = commands.map((cmd) => ({
      title: cmd,
      subtitle: COMMANDS[cmd].subtitle,
      term: cmd,
      icon: COMMANDS[cmd].icon,
      onSelect: () => shellCommand(COMMANDS[cmd].command)
    }))
    display(result)
  }
};

module.exports = {
  fn: plugin
}
