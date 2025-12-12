#!/bin/bash
# Generate simple favicon PNGs using basic tools
# Create a 16x16 black square with white text
convert -size 16x16 xc:black -pointsize 10 -fill white -gravity center -annotate +0+0 'Z' favicon-16x16.png 2>/dev/null || echo "16x16 needs ImageMagick"
convert -size 32x32 xc:black -pointsize 20 -fill white -gravity center -annotate +0+0 'ZL' favicon-32x32.png 2>/dev/null || echo "32x32 needs ImageMagick"
convert -size 180x180 xc:black -pointsize 100 -fill white -gravity center -annotate +0+0 'ZL' apple-touch-icon.png 2>/dev/null || echo "apple-touch-icon needs ImageMagick"
