import cv2
import numpy as np

img = cv2.imread(r'c:\Users\hp\OneDrive\Desktop\dental\public\hero_sec.png', cv2.IMREAD_UNCHANGED)

print("Shape:", img.shape)
if img.shape[2] == 4:
    print("Has Alpha channel.")
    # check corner pixels
    print("Top-left pixel:", img[0,0])
    print("Bottom-right pixel:", img[-1,-1])
else:
    print("No Alpha channel.")
    print("Top-left pixel:", img[0,0])
