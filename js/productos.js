const productos = [
    {id:1, nombre:"PC INTEL G5905 8GB HD SSD 240GB", descripcion:" 1 MOTHERBOARD H410;   1 MICRO INTEL CELERON G5905 DC 3.5GHZ IDEAL MINERIA;  1 MEMORIA 8GB DDR4 2666 CRUCIAL UDIMM;   1 SSD MARKVISION 240GB SATA III;   1 GABINETE KIT",  imagen:"../images/PC_INTEL_G5905.jpg", precio:34170},
    {id:2, nombre:"PC INTEL G5420 4GB 1TB ", descripcion:"1  MICRO INTEL PENTIUM G5420 (2 CORES + 4 THREADS);  1 MOTHERBOARD;  1  MEMORIA 4GB DDR4 2666MHZ; 1 HD HDD 1TB SATA III;  1 GABINETE KIT", imagen:"../images/PC_INTEL_G5420.JPG", precio:37048},
    {id:3, nombre:"PC AMD ATHLON 3000G - 4GB - 120GB - KIT", descripcion:"4GB DDR4 - SSD 120GB - Gabinete Kit con Teclado y mouse de regalo o Gabinete Slim según disponibilidad.",  imagen:"../images/PC_AMD_ATHLON3000G.JPG", precio:39230},
    {id:4, nombre:"PC AMD ATHLON 3000G + A320 + 8GB + 1TB + KIT + CAMARA WEB", descripcion:"1 MICRO AMD ATHLON 3000G VEGA 3; 1 GABINETE KIT;  1 MOTHER ASUS A320M-K AM4; 1 MEMORIA 8GB DDR4 S/DIS; 1 DISCO HDD 1TB SATA3;  1 WEBCAM 1080P USB + MICROFONO + AURICULAR LOGITECH",  imagen:"../images/PC_AMD_ATHLON300G_A320.JPG", precio:48940},
    {id:5, nombre:"PC AMD ATHLON 3000G 8GB 1TB + MONITOR 19", descripcion:" 8GB DDR4 según stock marcas ADATA - CRUCIAL - HYNIX - KINGSTON.- Disco Rígido 1TB 7200RPM ( Western Digital/Seagate) según disponibilidad - Gabinete Kit con Teclado y mouse de regalo o Gabinete Slim según disponibilidad.",  imagen:"../images/PC_AMD_ATHLON3000G8GB.jpg", precio:68660},
    {id:6, nombre:"MONITOR 19' PHILIPS LED HD SMART CONTROL 60 HZ", descripcion:" Especificaciones técnicas; Imagen / pantalla; tipo de panel LCD; LCD TFT; Tipo de retroiluminacióN: Sistema W-LED, Tamaño de panel: 18,5 pulg / 47 cm; Área de visualización efectiva:   409,8 (H) x 230,4 (V)",  imagen:"../images/MONITOR_PHILIPHS19.jpg", precio:25622},
    {id:7, nombre:"MONITOR 21.5' PHILIPS LED 223V5LHSB2/55", descripcion:" Especificaciones técnicas: Imagen / pantalla : tipo de panel LCD; LCD TFT;  Tipo de retroiluminación: Sistema W-LED; Tamaño de panel: 21,5 pulgadas / 54,6 cm;  Área de visualización efectiva: 476,64 (H) x 268,11 (V);  Relación de aspecto: 16:9;  Resolución óptima:  1920 x 1080 a 60 Hz",  imagen:"../images/MONITOR_PHILIPS21.jpg", precio:31264},
    {id:8, nombre:"MONITOR 55' CX TOTEM LFD INDOOR CAPACITIVE TOUCH", descripcion:" PANTALLA:  Tamaño: 55;   Display Resolution: 1920*1080; Ratio: 16:9; Brillo: 450 cd/m2; Contraste: 5000:1; Colores: 16.7M; Tiempo de respuesta: 6.5ms; Vida util del backlight: +50,000 horas;  Angulo de visión: 178°/ 178°",  imagen:"../images/MONITOR55_CX.jpg", precio:442039}
];

//operador avanzados
const [a, b, c, d ,e , f , g , h] = productos;
console.log(a, b, d , g , h); 

function guardarProductosLS(productos) {
    localStorage.setItem("productos", JSON.stringify(productos));
}

function cargarProductosLS() {
    return JSON.parse(localStorage.getItem("productos"));
}

function verProducto(id) {
    localStorage.setItem("ver_producto", id);
    document.location = "ver-producto.html";
}
//https://www.xt-pc.com.ar/