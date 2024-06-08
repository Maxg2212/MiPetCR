import tkinter as tk
from tkinter import ttk
import matplotlib.pyplot as plt
from matplotlib.backends.backend_tkagg import FigureCanvasTkAgg
import os
import serial
import datetime

def readSerialData(serialPort, baudRate, outputFile):
    try:
        ser = serial.Serial(serialPort, baudRate)
        with open(outputFile, 'a') as file:
            while True:
                if ser.in_waiting > 0:
                    line = ser.readline().decode('utf-8').strip()
                    currentTime = datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S')
                    file.write(f'{currentTime} - {line}\n')
                    print(f'{currentTime} - {line}')
    except serial.SerialException as e:
        print("Error en la lectura de datos seriales:", e)

def leerDatosArchivo(archivo):
    datos = []
    with open(archivo, 'r') as file:
        for linea in file:
            fecha_hora, dato = linea.strip().split(' - ')
            fecha, hora = fecha_hora.split(' ')
            datos.append([dato, fecha, hora])
    return datos

def contarBotones(datos):
    conteo = {}
    for registro in datos:
        boton = registro[0]
        if boton in conteo:
            conteo[boton] += 1
        else:
            conteo[boton] = 1
    return conteo

def actualizarInterfaz():
    archivo = os.path.join(os.path.dirname(__file__), 'datos_recibidos.txt')
    datos = leerDatosArchivo(archivo)
    
    for row in tree.get_children():
        tree.delete(row)
    
    for registro in datos:
        tree.insert('', tk.END, values=registro)
    
    conteo = contarBotones(datos)
    botones = list(conteo.keys())
    cantidades = list(conteo.values())
    
    ax.clear()
    ax.bar(botones, cantidades, color='skyblue')
    ax.set_xlabel('Botón', fontsize=12)
    ax.set_ylabel('Cantidad', fontsize=12)
    ax.set_title('Conteo de Botones Pulsados', fontsize=14)
    ax.tick_params(axis='both', which='major', labelsize=10)
    canvas.draw()

archivo = os.path.join(os.path.dirname(__file__), 'datos_recibidos.txt')

root = tk.Tk()
root.title("Registros y Gráfica de Botones")

frame_tabla = ttk.Frame(root)
frame_tabla.pack(side=tk.LEFT, padx=10, pady=10, fill=tk.BOTH, expand=True)

style = ttk.Style()
style.configure("Treeview.Heading", font=('Arial', 12, 'bold'))

tree = ttk.Treeview(frame_tabla, columns=('boton', 'fecha', 'hora'), show='headings')
tree.heading('boton', text='Botón', anchor=tk.CENTER)
tree.heading('fecha', text='Fecha', anchor=tk.CENTER)
tree.heading('hora', text='Hora', anchor=tk.CENTER)
tree.pack(fill=tk.BOTH, expand=True)

frame_grafica = ttk.Frame(root)
frame_grafica.pack(side=tk.RIGHT, padx=10, pady=10, fill=tk.BOTH, expand=True)

fig, ax = plt.subplots(figsize=(6, 5))
canvas = FigureCanvasTkAgg(fig, master=frame_grafica)
canvas.get_tk_widget().pack(fill=tk.BOTH, expand=True)

boton_actualizar = ttk.Button(root, text="Actualizar", command=actualizarInterfaz)
boton_actualizar.pack(side=tk.BOTTOM, pady=10)

actualizarInterfaz()

root.mainloop()
