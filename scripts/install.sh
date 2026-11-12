#!/bin/bash
set -e

cd /home/ubuntu/app

npm ci --omit=dev

echo "Dependencias de DataVision instaladas correctamente."
