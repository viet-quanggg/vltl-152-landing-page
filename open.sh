#!/bin/bash

# Simple script to open the website in default browser

echo "🏥 Opening Nurse Care Website..."

# Detect OS and open accordingly
if [[ "$OSTYPE" == "darwin"* ]]; then
    # macOS
    open index.html
elif [[ "$OSTYPE" == "linux-gnu"* ]]; then
    # Linux
    xdg-open index.html
elif [[ "$OSTYPE" == "msys" || "$OSTYPE" == "cygwin" ]]; then
    # Windows
    start index.html
else
    echo "Please open index.html in your browser manually"
fi

echo "✅ Website opened in your default browser!"
echo ""
echo "📝 Next steps:"
echo "   1. Add your images to the images/ folder"
echo "   2. Customize the content in index.html"
echo "   3. Update colors in css/style.css"
echo ""
echo "Need help with images? Open images/image-guide.html"
