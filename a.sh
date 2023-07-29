for file in static/sponsors/*.png
do
  cwebp -q 100 $file -o ${file%.*}.webp
done
