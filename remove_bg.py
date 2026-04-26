import sys
import os
from rembg import remove
from PIL import Image

def process_image(input_path, output_path):
    print(f"Processando: {input_path}")
    try:
        with open(input_path, 'rb') as i:
            input_data = i.read()
            output_data = remove(input_data)
            with open(output_path, 'wb') as o:
                o.write(output_data)
        print(f"Sucesso! Salvo em: {output_path}")
    except Exception as e:
        print(f"Erro ao processar {input_path}: {e}")

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Uso: python remove_bg.py <caminho_da_imagem_ou_pasta>")
        sys.exit(1)

    path = sys.argv[1]

    if os.path.isfile(path):
        filename = os.path.basename(path)
        name, ext = os.path.splitext(filename)
        output_path = os.path.join(os.path.dirname(path), f"{name}_no_bg.png")
        process_image(path, output_path)
    elif os.path.isdir(path):
        for filename in os.listdir(path):
            if filename.lower().endswith(('.png', '.jpg', '.jpeg')):
                input_path = os.path.join(path, filename)
                name, ext = os.path.splitext(filename)
                output_path = os.path.join(path, f"{name}_no_bg.png")
                process_image(input_path, output_path)
    else:
        print("Caminho inválido.")
