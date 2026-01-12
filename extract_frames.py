import cv2
import os
from pathlib import Path

# Configuration
VIDEO_PATH = r"C:\Users\Win10\Downloads\pixel-world\video\WhatsApp Video 2026-01-12 at 9.08.36 PM.mp4"
OUTPUT_DIR = r"c:\Users\Win10\Downloads\pixel-world\public\frames2"
TARGET_FRAMES = 80  # 80 frames for 8 seconds = 10 FPS (smooth scroll animation)
MAX_WIDTH = 1920    # Maximum width for optimization
QUALITY = 95        # JPEG quality (0-100)

def extract_frames():
    """Extract optimized frames from video for scroll animation"""
    
    # Create output directory
    Path(OUTPUT_DIR).mkdir(parents=True, exist_ok=True)
    
    # Open video
    cap = cv2.VideoCapture(VIDEO_PATH)
    
    if not cap.isOpened():
        print(f"Error: Cannot open video file: {VIDEO_PATH}")
        return
    
    # Get video properties
    total_frames = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
    fps = cap.get(cv2.CAP_PROP_FPS)
    duration = total_frames / fps
    width = int(cap.get(cv2.CAP_PROP_FRAME_WIDTH))
    height = int(cap.get(cv2.CAP_PROP_FRAME_HEIGHT))
    
    print(f"Video Info:")
    print(f"  Duration: {duration:.2f} seconds")
    print(f"  Total Frames: {total_frames}")
    print(f"  FPS: {fps}")
    print(f"  Resolution: {width}x{height}")
    print(f"\nExtracting {TARGET_FRAMES} frames...")
    
    # Calculate frame interval
    frame_interval = total_frames / TARGET_FRAMES
    
    extracted_count = 0
    frame_number = 0
    
    while True:
        # Calculate which frame to extract
        target_frame = int(extracted_count * frame_interval)
        
        # Set video position to target frame
        cap.set(cv2.CAP_PROP_POS_FRAMES, target_frame)
        
        # Read frame
        ret, frame = cap.read()
        
        if not ret or extracted_count >= TARGET_FRAMES:
            break
        
        # Resize if needed (maintain aspect ratio)
        if width > MAX_WIDTH:
            scale = MAX_WIDTH / width
            new_width = MAX_WIDTH
            new_height = int(height * scale)
            frame = cv2.resize(frame, (new_width, new_height), interpolation=cv2.INTER_LANCZOS4)
        
        # Save frame with zero-padded numbering
        output_path = os.path.join(OUTPUT_DIR, f"frame_{extracted_count:04d}.jpg")
        cv2.imwrite(output_path, frame, [cv2.IMWRITE_JPEG_QUALITY, QUALITY])
        
        extracted_count += 1
        
        # Progress indicator
        if extracted_count % 10 == 0:
            print(f"  Extracted {extracted_count}/{TARGET_FRAMES} frames...")
    
    cap.release()
    
    print(f"\n✓ Successfully extracted {extracted_count} frames to: {OUTPUT_DIR}")
    print(f"✓ Frame naming: frame_0000.jpg to frame_{extracted_count-1:04d}.jpg")
    print(f"\nNext steps:")
    print(f"1. Check the frames in: {OUTPUT_DIR}")
    print(f"2. Use the React component to implement scroll animation")

if __name__ == "__main__":
    extract_frames()
