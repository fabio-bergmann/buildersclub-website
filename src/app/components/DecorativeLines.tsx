'use client';

import React from 'react';
import { useElementDimensions } from '../hooks/useElementDimensions';

interface DecorativeLinesProps {
  children: React.ReactNode;
  spacing?: number;
  className?: string;
  verticalExtension?: number;
  edgeAlign?: boolean;
  lineOffset?: number;
  leftOffset?: number;
  rightOffset?: number;
  elementType?: 'avatars' | 'text' | 'button' | 'default';
  textLetterInset?: number; // Fine-tune positioning for exact letter boundaries
  textLetterWidthRatio?: number; // Ratio of actual letters to container width (0.0-1.0)
  responsiveTextBoundaries?: boolean; // Enable responsive letter boundary detection
}

export function DecorativeLines({
  children,
  spacing = 20,
  className = '',
  verticalExtension = 5,
  edgeAlign = false,
  lineOffset = 0,
  leftOffset,
  rightOffset,
  elementType = 'default',
  textLetterInset = 2, // Default 2px inset for letter boundaries
  textLetterWidthRatio = 0.7, // Default: letters are 70% of container width (tighter)
  responsiveTextBoundaries = true, // Default: enable responsive detection
}: DecorativeLinesProps) {
  const { ref, dimensions } = useElementDimensions();
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = React.useState(0);
  const [containerLeft, setContainerLeft] = React.useState(0);

  // Measure container width with responsive throttling
  React.useLayoutEffect(() => {
    if (!containerRef.current) return;

    let resizeTimeout: NodeJS.Timeout;
    
    const measureContainer = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setContainerWidth(rect.width);
      setContainerLeft(rect.left);
    };

    // Throttled resize handler for better performance
    const throttledResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(measureContainer, 16); // ~60fps
    };

    measureContainer();

    const resizeObserver = new ResizeObserver(throttledResize);
    resizeObserver.observe(containerRef.current);

    window.addEventListener('resize', throttledResize);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', throttledResize);
      clearTimeout(resizeTimeout);
    };
  }, []);

  // Debug: Log dimensions to console
  React.useEffect(() => {
    console.log('DecorativeLines Debug:', {
      dimensions,
      containerWidth,
      containerLeft,
      edgeAlign,
      spacing,
      lineOffset,
      leftOffset,
      rightOffset,
    });
  }, [dimensions, containerWidth, containerLeft, edgeAlign, spacing, lineOffset, leftOffset, rightOffset]);

  // Calculate container-based positioning for vertical lines
  const getElementSpecificOffset = () => {
    if (!edgeAlign) {
      return spacing;
    }
    
    switch (elementType) {
      case 'avatars':
        // For avatars: minimal offset to align with outer circle edges
        return 2;
      case 'text':
        // For text: very close to text boundaries
        return 2;
      case 'button':
        // For button: close to button edges
        return 4;
      default:
        return 1;
    }
  };

  const baseOffset = getElementSpecificOffset();
  const finalLineOffset = edgeAlign ? 0 : lineOffset;

  // New container-based positioning logic
  const calculateContainerPositions = () => {
    if (containerWidth === 0 || dimensions.width === 0) {
      return { leftPos: 0, rightPos: 0 };
    }

    // Calculate where content sits within container
    const contentLeftEdge = (containerWidth - dimensions.width) / 2;
    const contentRightEdge = (containerWidth + dimensions.width) / 2;
    
    // Position lines with offset from content edges
    const leftPos = contentLeftEdge - baseOffset - finalLineOffset + (leftOffset ?? 0);
    const rightPos = contentRightEdge + baseOffset + finalLineOffset + (rightOffset ?? 0);
    
    return { leftPos, rightPos };
  };

  const { leftPos, rightPos } = calculateContainerPositions();

  // Debug: Log calculated positions
  React.useEffect(() => {
    if (dimensions.width > 0 && containerWidth > 0) {
      const contentLeftEdge = (containerWidth - dimensions.width) / 2;
      const contentRightEdge = (containerWidth + dimensions.width) / 2;
      
      console.log('Container-based Positions:', {
        containerWidth,
        containerLeft,
        contentWidth: dimensions.width,
        contentLeftEdge,
        contentRightEdge,
        leftPos,
        rightPos,
        baseOffset,
        finalLineOffset,
      });
    }
  }, [leftPos, rightPos, baseOffset, finalLineOffset, dimensions.width, containerWidth, containerLeft]);

  const lineThickness = 2;
  // Element-specific extension values
  const getExtensionPx = () => {
    if (elementType === 'text') {
      return 20; // 20px extension for text/subheading elements
    }
    return 30; // 30px extension for other elements
  };
  const extensionPx = getExtensionPx();

  // Calculate cross-pattern line dimensions
  const calculateCrossLines = () => {
    if (dimensions.width === 0 || dimensions.height === 0) {
      return { horizontalLines: null, verticalLines: null };
    }

    // Vertical lines: extend above and below element
    let verticalExtensionTop = extensionPx;
    let verticalExtensionBottom = extensionPx;
    
    // Avatar-specific adjustments for vertical lines
    if (elementType === 'avatars') {
      verticalExtensionTop += 2; // Move top 2px more up
      verticalExtensionBottom += 2; // Extend bottom as well
    }
    
    const verticalHeight = dimensions.height + verticalExtensionTop + verticalExtensionBottom;
    const verticalTop = -verticalExtensionTop;
    
    // Calculate positions based on element type
    let horizontalWidth, horizontalLeft, leftVerticalPos, rightVerticalPos;
    
    if (elementType === 'text') {
      // Simplified and reliable text positioning
      const textCenterOffset = (containerWidth - dimensions.width) / 2;
      
      // Use the provided ratio or a reliable default
      const reliableLetterRatio = textLetterWidthRatio; // Use passed prop
      
      // Calculate letter boundaries with reliable ratio
      const estimatedLetterWidth = dimensions.width * reliableLetterRatio;
      const letterCenterOffset = (dimensions.width - estimatedLetterWidth) / 2;
      
      // Position lines at calculated letter boundaries
      leftVerticalPos = textCenterOffset + letterCenterOffset;
      rightVerticalPos = textCenterOffset + dimensions.width - letterCenterOffset;
      
      horizontalWidth = dimensions.width + (extensionPx * 2);
      horizontalLeft = textCenterOffset - extensionPx;
      
      console.log('Fixed text positioning:', {
        elementType,
        containerWidth,
        elementWidth: dimensions.width,
        textLetterWidthRatio: reliableLetterRatio,
        estimatedLetterWidth,
        letterCenterOffset,
        textCenterOffset,
        leftVerticalPos,
        rightVerticalPos
      });
    } else {
      // For other elements: use calculated offset positions
      horizontalWidth = dimensions.width + (extensionPx * 2);
      horizontalLeft = (containerWidth - horizontalWidth) / 2;
      leftVerticalPos = leftPos;
      rightVerticalPos = rightPos;
      
      // Element-specific positioning adjustments
      if (elementType === 'avatars') {
        leftVerticalPos += 1;  // Move left line 1px more to the right (3-2=1)
        rightVerticalPos -= 3; // Move right line 3px more to the left (5-2=3)
      } else if (elementType === 'button') {
        leftVerticalPos += 2;  // Move left line 2px more to the right
        rightVerticalPos -= 4; // Move right line 4px more to the left
      }
    }

    // Element-specific horizontal line adjustments
    let topLineY = 0;
    let bottomLineY = dimensions.height;
    
    if (elementType === 'button') {
      bottomLineY += 6; // Move bottom line 6px down for buttons
    } else if (elementType === 'avatars') {
      topLineY -= 2; // Move top line 2px more up for avatars
      bottomLineY += 3; // Move bottom line 3px down for avatars (6-3=3)
    }

    return {
      horizontalLines: {
        left: horizontalLeft,
        width: horizontalWidth,
        topY: topLineY,
        bottomY: bottomLineY,
      },
      verticalLines: {
        height: verticalHeight,
        top: verticalTop,
        leftPos: leftVerticalPos,
        rightPos: rightVerticalPos,
      }
    };
  };

  const crossLines = calculateCrossLines();

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {/* Top horizontal line - extends 30px left and right of element */}
      {crossLines.horizontalLines && (
        <div 
          className="absolute z-0"
          style={{
            left: `${crossLines.horizontalLines.left}px`,
            top: `${crossLines.horizontalLines.topY}px`,
            width: `${crossLines.horizontalLines.width}px`,
            height: `${lineThickness}px`,
            background: 'linear-gradient(90deg, transparent, #d1d5db, transparent)'
          }}
        />
      )}
      
      {/* Bottom horizontal line - extends 30px left and right of element */}
      {crossLines.horizontalLines && (
        <div 
          className="absolute z-0"
          style={{
            left: `${crossLines.horizontalLines.left}px`,
            top: `${crossLines.horizontalLines.bottomY}px`,
            width: `${crossLines.horizontalLines.width}px`,
            height: `${lineThickness}px`,
            background: 'linear-gradient(90deg, transparent, #d1d5db, transparent)'
          }}
        />
      )}
      
      {/* Left vertical line - extends 30px above and below element */}
      {crossLines.verticalLines && (
        <div 
          className="absolute z-0"
          style={{
            left: `${crossLines.verticalLines.leftPos}px`,
            top: `${crossLines.verticalLines.top}px`,
            width: `${lineThickness}px`,
            height: `${crossLines.verticalLines.height}px`,
            background: 'linear-gradient(180deg, transparent, #d1d5db, transparent)'
          }}
        />
      )}
      
      {/* Right vertical line - extends 30px above and below element */}
      {crossLines.verticalLines && (
        <div 
          className="absolute z-0"
          style={{
            left: `${crossLines.verticalLines.rightPos}px`,
            top: `${crossLines.verticalLines.top}px`,
            width: `${lineThickness}px`,
            height: `${crossLines.verticalLines.height}px`,
            background: 'linear-gradient(180deg, transparent, #d1d5db, transparent)'
          }}
        />
      )}
      
      {/* Content wrapped with measurement ref */}
      <div ref={ref} className="relative z-10">
        {children}
      </div>
    </div>
  );
}