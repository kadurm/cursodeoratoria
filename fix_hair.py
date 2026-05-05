import sys
import os
from PIL import Image, ImageFilter, ImageMath

def defringe_hair(image_path):
    print(f"Limpando o contorno do cabelo em: {image_path}")
    if not os.path.exists(image_path):
        print("Arquivo não encontrado!")
        return

    img = Image.open(image_path).convert("RGBA")
    r, g, b, a = img.split()
    
    # 1. Erodir o alpha levemente (apenas para suavizar)
    a_eroded = a.filter(ImageFilter.MinFilter(7)) # Erosão de ~3 pixels
    
    width, height = img.size
    
    # Máscara gradiente: 255 no topo (cabelo), 0 na base (terno/mãos)
    mask = Image.new('L', (width, height))
    for y in range(height):
        # Topo 30% aplica efeito total, base 50% fica original
        if y < height * 0.3:
            val = 255
        elif y > height * 0.5:
            val = 0
        else:
            val = int(255 * (1.0 - (y - height * 0.3) / (height * 0.2)))
        for x in range(width):
            mask.putpixel((x, y), val)
            
    # Combina o alpha erodido no topo com o alpha original na base
    a_final = Image.composite(a_eroded, a, mask)
    
    # 2. Escurecer as bordas do cabelo para mesclar com o fundo escuro
    r_dark = r.point(lambda p: int(p * 0.4)) # Escurece bastante a borda clara
    g_dark = g.point(lambda p: int(p * 0.4))
    b_dark = b.point(lambda p: int(p * 0.4))
    img_dark = Image.merge("RGBA", (r_dark, g_dark, b_dark, a_final))
    
    # 3. Criar uma máscara isolando apenas a borda do cabelo
    # A borda é o alpha expandido menos o alpha erodido
    from PIL import ImageChops
    a_dilated = a.filter(ImageFilter.MaxFilter(5))
    edge_mask = ImageChops.difference(a_dilated, a_eroded)
    
    # Aplica o gradiente para afetar apenas a borda da cabeça
    hair_edge_mask = ImageChops.multiply(edge_mask, mask)
    
    # 4. Compõe a imagem final: imagem normal com as bordas do cabelo escurecidas
    img_normal = Image.merge("RGBA", (r, g, b, a_final))
    img_final = Image.composite(img_dark, img_normal, hair_edge_mask)
    
    img_final.save(image_path)
    print("Sucesso!")

if __name__ == "__main__":
    # Vamos rodar no 04 e 01 que foram aprovados
    defringe_hair(os.path.join("Arquivos", "Fotos Délio", "foto-delio-04_no_bg.png"))
    defringe_hair(os.path.join("Arquivos", "Fotos Délio", "foto-delio-01_no_bg.png"))
