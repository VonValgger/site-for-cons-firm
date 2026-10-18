#!/usr/bin/env bash
# Extract a video clip into the AVIF frame sequence used by the scroll-driven hero.
# Usage: scripts/extract-hero-frames.sh <clip.mp4> [fps=10] [width=1280] [crf=38]
# Optional env: START=<seconds> DURATION=<seconds> to trim the clip.
# Higher crf = smaller files, lower quality. Requires a full ffmpeg build with
# libaom-av1 (Fedora's ffmpeg-free cannot decode H.264).
set -euo pipefail

in=${1:?usage: $0 <clip.mp4> [fps] [width] [crf]}
fps=${2:-10}
width=${3:-1280}
crf=${4:-38}
out="$(dirname "$0")/../src/lib/assets/hero-frames"

# Empty the folder rather than recreating it, so a running dev server keeps watching it.
mkdir -p "$out"
find "$out" -type f \( -name '*.avif' -o -name '*.webp' \) -delete
tmp=$(mktemp -d)
trap 'rm -rf "$tmp"' EXIT
ffmpeg -v error -ss "${START:-0}" ${DURATION:+-t "$DURATION"} -i "$in" -an \
	-vf "fps=$fps,scale=$width:-2" "$tmp/%04d.png"

# Encode each frame as its own AVIF: ffmpeg's image2 sequence writes files browsers reject.
export out crf
find "$tmp" -name '*.png' -print0 | xargs -0 -P "$(nproc)" -I{} sh -c \
	'ffmpeg -v error -i "$1" -c:v libaom-av1 -still-picture 1 -crf "$crf" -cpu-used 6 -pix_fmt yuv420p -f avif "$out/$(basename "$1" .png).avif"' _ {}

count=$(find "$out" -name '*.avif' | wc -l)
size=$(du -sh "$out" | cut -f1)
echo "Wrote $count frames ($size) to $out"
