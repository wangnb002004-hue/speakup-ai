#!/bin/zsh
export PATH="/opt/homebrew/bin:/usr/local/bin:$PATH"
cd -- "$(dirname -- "$0")"
if ! command -v node >/dev/null 2>&1; then
  echo "Please install Node.js 24 LTS first."
  read "?Press Enter to close."
  exit 1
fi
node scripts/launch.mjs --open
if [[ $? -ne 0 ]]; then
  echo "SpeakUp AI could not start. Please keep this message for troubleshooting."
  read "?Press Enter to close."
fi
