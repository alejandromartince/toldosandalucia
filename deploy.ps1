# Variables
$prodBranch = "produccion"
$devBranch = git symbolic-ref --short HEAD

Write-Host "🛠 Construyendo la app con Vite..."
npm run build

Write-Host "🔁 Cambiando a la rama de producción..."
git checkout $prodBranch

Write-Host "🧹 Limpiando archivos antiguos..."
Get-ChildItem -Exclude .git -Recurse | Remove-Item -Recurse -Force -ErrorAction SilentlyContinue

Write-Host "📂 Copiando archivos de dist..."
Copy-Item -Path "dist\*" -Destination "." -Recurse -Force

Write-Host "📦 Subiendo cambios..."
git add .
$fecha = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
git commit -m "Deploy $fecha" 2>$null
git push origin $prodBranch

Write-Host "🔙 Volviendo a la rama de desarrollo: $devBranch"
git checkout $devBranch

Write-Host "✅ Despliegue completado correctamente."
