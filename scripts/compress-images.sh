#!/bin/bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
ROOT_DIR="$(cd "$SCRIPT_DIR/.." && pwd)"
ASSETS_DIR="$ROOT_DIR/src/assets"
MAX_DIM=2000
QUALITY=70

if ! command -v sips >/dev/null 2>&1; then
  echo "sips is not available on this machine" >&2
  exit 1
fi

pattern=(-iname '*.jpg' -o -iname '*.jpeg' -o -iname '*.png' -o -iname '*.heic')
found=0
had_error=0
while IFS= read -r -d '' file; do
  found=1
  ext="${file##*.}"
  ext_lower="$(printf '%s' "$ext" | tr '[:upper:]' '[:lower:]')"
  args=(--resampleHeightWidthMax "$MAX_DIM")
  case "$ext_lower" in
    jpg|jpeg)
      args+=( -s format jpeg -s formatOptions "$QUALITY" )
      ;;
    png)
      args+=( -s format png -s formatOptions "$QUALITY" )
      ;;
    heic)
      args+=( -s format heic -s formatOptions "$QUALITY" )
      ;;
    *)
      continue
      ;;
  esac
  args+=( --out "$file" "$file" )
  if ! sips "${args[@]}" >/dev/null; then
    had_error=1
    printf "Failed to compress %s\n" "$file" >&2
    continue
  fi
  printf "Compressed %s\n" "$file"
done < <(find "$ASSETS_DIR" -type f "(" "${pattern[@]}" ")" -print0)

if [[ $found -eq 0 ]]; then
  echo "No images found in $ASSETS_DIR"
fi
if [[ $had_error -ne 0 ]]; then
  echo "One or more images failed to compress. Re-run the script after fixing the issue." >&2
  exit 1
fi
