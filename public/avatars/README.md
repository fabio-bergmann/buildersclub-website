# Avatar Images Directory

Place user avatar images in this directory using the following naming convention:

## File Naming
- Use the user ID as the filename: `{userId}.webp` or `{userId}.jpg`
- Examples:
  - `michael.webp`
  - `james.webp`
  - `robert.webp`
  - `jennifer.webp`
  - `david.webp`
  - `sarah.webp`

## Image Specifications
- **Format**: WebP (preferred) or JPG/PNG
- **Size**: Square format (1:1 ratio)
- **Resolution**: 256x256px recommended
- **File size**: Optimize to <50KB each

## Default Avatar
- `default-avatar.webp` - Used as fallback when user has no custom image

## Usage
Images are automatically loaded by the Avatar component. If an image doesn't exist, the component will fallback to showing the gradient background with user initials.