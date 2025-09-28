import React, { useState, useCallback } from "react";
import {
  Send,
  Rocket,
  Zap,
  Flame,
  TrendingUp,
  RefreshCcw,
  Search,
  Aperture,
  Scissors,
  Activity,
  CloudLightning,
  Loader,
  Type,
  Heart,
  Code,
  ChevronRight,
  X,
  Minus,
  Star,
  Layers,
  MousePointer,
  GitCommit,
  CloudDrizzle,
  Box,
  Eye,
  Minimize2,
  GripVertical,
  Anchor,
  Package,
  Divide,
  Feather,
  Shield,
  Trello,
  Smile,
  Hexagon,
  Mic,
  MapPin,
  Target,
  Globe,
  Droplet,
  Sun,
  Key,
  Clock,
  Cloud,
  Monitor,
  CheckCircle,
  Disc,
} from "lucide-react";

// Custom CSS for animations that are complex to achieve with pure Tailwind.
// These styles are globally scoped within the component wrapper for simplicity.
//
export const CustomButtonStyles = () => (
  <style>
    {`
      /* Button 1: Shine Button */
      .shine-button { position: relative; overflow: hidden; transition: all 0.3s ease; }
      .shine-button::after {
        content: ''; position: absolute; top: 0; left: -100%; width: 50%; height: 100%;
        background: rgba(255, 255, 255, 0.4); transform: skewX(-20deg); transition: all 0.5s ease;
      }
      .shine-button:hover::after { left: 150%; }

      /* Button 2: Ripple Button */
      .ripple-button { position: relative; overflow: hidden; z-index: 1; transition: color 0.4s ease-in-out; }
      .ripple-button::before {
        content: ''; position: absolute; top: 50%; left: 50%; width: 5px; height: 5px;
        background: rgba(255, 255, 255, 0.7); border-radius: 50%; transform: translate(-50%, -50%) scale(0);
        transition: transform 0.6s ease-out; z-index: -1;
      }
      .ripple-button:hover::before { transform: translate(-50%, -50%) scale(20); opacity: 0; }

      /* Button 3: 3D Press Button */
      .press-3d {
        position: relative;
        box-shadow: 0 6px 0 rgb(30, 41, 59); /* slate-800 */
        transition: transform 0.1s, box-shadow 0.1s;
      }
      .press-3d:active {
        transform: translateY(4px);
        box-shadow: 0 2px 0 rgb(30, 41, 59); /* slate-800 */
      }
      
      /* Button 4: Neon Glow Button */
      @keyframes pulse-glow {
        0%, 100% { box-shadow: 0 0 5px rgba(253, 164, 175, 0.7), 0 0 10px rgba(253, 164, 175, 0.4); }
        50% { box-shadow: 0 0 15px rgba(253, 164, 175, 1), 0 0 25px rgba(253, 164, 175, 0.8); }
      }
      .neon-glow-button {
        background-color: transparent; border: 2px solid rgb(253, 164, 175); color: rgb(253, 164, 175);
        transition: all 0.3s ease; box-shadow: 0 0 0 transparent;
      }
      .neon-glow-button:hover {
        animation: pulse-glow 1.5s infinite alternate; color: #1f2937;
        background-color: rgb(253, 164, 175); text-shadow: 0 0 8px #fff;
      }

      /* Button 5: Floating Gradient Button */
      .floating-gradient-button {
        background-image: linear-gradient(135deg, #a78bfa 0%, #6366f1 100%);
        background-size: 200% 100%; transition: all 0.4s ease; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      }
      .floating-gradient-button:hover {
        background-position: 100% 0; transform: translateY(-3px) rotate(-1deg);
        box-shadow: 0 12px 20px rgba(99, 102, 241, 0.5);
      }
      .floating-gradient-button:active { transform: translateY(-1px); box-shadow: 0 5px 10px rgba(99, 102, 241, 0.3); }
      
      /* Button 6: Rotating Border Button */
      @keyframes rotate-border { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      .rotating-border-button::before { background: conic-gradient(from 0deg at 50% 50%, #10b981, #3b82f6, #10b981); animation: none; }
      .rotating-border-button:hover::before { animation: rotate-border 2s linear infinite; }
      .rotating-border-button { position: relative; z-index: 10; border-radius: 12px; padding: 2px; transition: all 0.3s ease; }
      .rotating-border-button::before { content: ''; position: absolute; inset: 0; border-radius: 12px; z-index: -1; opacity: 0.8; }
      .rotating-border-content { background: rgb(55, 65, 81); padding: 10px 22px; border-radius: 10px; color: white; }

      /* Button 7: Dual-State Reveal Button */
      .reveal-button { position: relative; overflow: hidden; height: 50px; transition: all 0.4s; }
      .default-content, .hover-content { position: absolute; width: 100%; transition: transform 0.4s, opacity 0.4s; display: flex; align-items: center; justify-content: center; white-space: nowrap; }
      .default-content { opacity: 1; transform: translateY(0); }
      .hover-content { opacity: 0; transform: translateY(100%); }
      .reveal-button:hover .default-content { opacity: 0; transform: translateY(-100%); }
      .reveal-button:hover .hover-content { opacity: 1; transform: translateY(0); }

      /* Button 8: Blob Squish Button */
      .squish-button { transition: transform 0.1s ease-out, box-shadow 0.2s; }
      .squish-button:active { transform: scale(0.95) rotate(1deg); box-shadow: 0 0 0 0; }
      .squish-button:hover {
        transform: translateY(-3px);
        box-shadow: 0 10px 15px -3px rgba(100, 255, 255, 0.4), 0 4px 6px -2px rgba(100, 255, 255, 0.2);
      }
      
      /* Button 9: Cutout Reveal Button */
      .cutout-reveal-button { position: relative; overflow: hidden; color: white; z-index: 1; background-color: #f87171; }
      .cutout-reveal-button::before {
        content: ''; position: absolute; top: 0; left: 0; width: 200%; height: 200%;
        background: #06b6d4;
        transform: translate(-100%, -100%) rotate(45deg);
        transform-origin: 0 0;
        transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        z-index: -1;
      }
      .cutout-reveal-button:hover::before { transform: translate(-30%, -30%) rotate(45deg); }

      /* Button 10: Springy Jiggle Button */
      @keyframes jiggle {
        0%, 100% { transform: scale(1) rotate(0deg); }
        25% { transform: scale(1.05) rotate(1deg); }
        50% { transform: scale(0.98) rotate(-1deg); }
        75% { transform: scale(1.02) rotate(0.5deg); }
      }
      .springy-jiggle-button { transition: transform 0.3s cubic-bezier(0.68, -0.55, 0.27, 1.55); }
      .springy-jiggle-button:active { animation: jiggle 0.4s ease-in-out; box-shadow: 0 0 0 0; }

      /* Button 11: Glassmorphism Blur Button */
      .glass-button {
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(8px);
        border: 1px solid rgba(255, 255, 255, 0.2);
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        transition: all 0.3s ease;
        position: relative;
        overflow: hidden;
      }
      .glass-button:hover { background: rgba(255, 255, 255, 0.2); transform: translateY(-2px); }
      .glass-button::after {
        content: ''; position: absolute; top: 0; left: -100%; width: 30%; height: 100%;
        background: rgba(255, 255, 255, 0.6);
        transform: skewX(-20deg); transition: all 0.5s;
      }
      .glass-button:hover::after { left: 130%; }

      /* Button 12: Loading Spinner */
      @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
      .spinner {
        border: 2px solid rgba(255, 255, 255, 0.3); border-top: 2px solid #fff;
        border-radius: 50%; width: 20px; height: 20px; animation: spin 0.8s linear infinite;
      }

      /* Button 13: Text Warp Shadow */
      .text-warp-button { transition: all 0.2s ease-out; text-shadow: 0 0 0 rgba(255, 255, 255, 0); }
      .text-warp-button:hover {
        text-shadow: 1px 1px 0px rgba(255, 255, 255, 0.4), 
                     -1px -1px 0px rgba(0, 0, 0, 0.2);
        transform: translate(1px, -1px);
      }

      /* Button 14: Color Pulse */
      @keyframes color-pulse {
        0% { background-color: #f97316; } 50% { background-color: #ea580c; } 100% { background-color: #f97316; }
      }
      .color-pulse-button:hover { animation: color-pulse 1s infinite; }
      
      /* Button 15: Border Slide In */
      .border-slide-button {
        position: relative; overflow: hidden; background: transparent; border: 2px solid transparent;
        color: #c084fc; transition: color 0.3s;
      }
      .border-slide-button::before, .border-slide-button::after {
        content: ''; position: absolute; height: 2px; background-color: #c084fc;
        transition: width 0.3s ease-out;
      }
      .border-slide-button::before { top: 0; left: 0; width: 0; }
      .border-slide-button::after { bottom: 0; right: 0; width: 0; }
      .border-slide-button:hover::before, .border-slide-button:hover::after { width: 100%; }
      .border-slide-button:hover { color: #fff; background-color: #7c3aed; }

      /* Button 16: Skewed Background Fill */
      .skew-fill-button { position: relative; color: white; overflow: hidden; z-index: 1; transition: color 0.4s; }
      .skew-fill-button::before {
        content: ''; position: absolute; top: 0; left: 0; width: 0; height: 100%; background-color: #facc15;
        transform: skewX(-20deg); transform-origin: left; transition: width 0.4s ease-out; z-index: -1;
      }
      .skew-fill-button:hover::before { width: 120%; }
      .skew-fill-button:hover { color: #1f2937; }

      /* Button 17: Pill Shape Expand */
      .pill-expand-button { width: 50px; height: 50px; padding: 0; transition: all 0.3s ease; }
      .pill-expand-button:hover { width: 180px; padding: 0 1rem; }
      .pill-expand-text { opacity: 0; transition: opacity 0.3s ease 0.1s; }
      .pill-expand-button:hover .pill-expand-text { opacity: 1; }
      .pill-expand-button .icon-part { transition: all 0.3s ease; }
      .pill-expand-button:hover .icon-part { transform: translateX(-4px); }

      /* Button 18: Icon Hover Scale */
      .icon-scale-button .icon-part { transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275); }
      .icon-scale-button:hover .icon-part { transform: scale(1.2) translateX(4px); }

      /* Button 19: Subtle Noise Texture */
      .noise-button { position: relative; z-index: 1; transition: transform 0.3s; }
      .noise-button::after {
        content: ''; position: absolute; inset: 0; z-index: 2;
        background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.5' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E");
        background-size: cover; opacity: 1; border-radius: 12px; pointer-events: none;
      }
      .noise-button:hover { transform: translateY(-2px); }

      /* Button 20: Depth Hover Lift */
      .depth-lift-button {
        transition: all 0.3s ease;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
      }
      .depth-lift-button:hover {
        transform: translate(-4px, -4px);
        box-shadow: 8px 8px 0px #4f46e5, 12px 12px 0px #818cf8; /* Indigo-600 and Indigo-400 */
      }
      
      /* Button 21: Spotlight Hover */
      .spotlight-button { position: relative; overflow: hidden; z-index: 1; }
      .spotlight-button::before {
        content: ''; position: absolute; top: 0; left: 0; width: 150px; height: 150px;
        background: radial-gradient(circle, rgba(255, 255, 255, 0.4) 0%, transparent 70%);
        transform: translate(-50%, -50%) scale(0); transition: transform 0.3s; pointer-events: none; z-index: -1;
      }
      .spotlight-button:hover::before { transform: translate(-50%, -50%) scale(1); opacity: 0; transition: transform 0.6s, opacity 0.6s; }

      /* Button 22: Slide-Out Icon */
      .slide-icon-button { overflow: hidden; position: relative; }
      .slide-icon-button .content { transition: transform 0.3s ease; }
      .slide-icon-button:hover .text-part { transform: translateX(-10px); }
      .slide-icon-button:hover .icon-part { transform: translateX(10px); }

      /* Button 23: Wavy Underline */
      .wavy-underline-button { position: relative; }
      .wavy-underline-button::after {
        content: ''; position: absolute; bottom: 5px; left: 50%; width: 0; height: 4px;
        background: linear-gradient(90deg, #60a5fa, #3b82f6, #60a5fa); border-radius: 9999px;
        transform: translateX(-50%); transition: width 0.4s ease-out;
      }
      .wavy-underline-button:hover::after { width: 70%; }

      /* Button 24: Text Shadow Drop */
      .shadow-drop-button { transition: all 0.3s ease-out; }
      .shadow-drop-button .content { transition: transform 0.3s ease-out; }
      .shadow-drop-button:hover .content { transform: translateY(-2px); }
      .shadow-drop-button:hover { box-shadow: 0 8px 15px rgba(0, 0, 0, 0.3); }

      /* Button 25: Gradient Border Pulse */
      @keyframes gradient-pulse {
        0% { border-image-slice: 1; opacity: 1; } 50% { border-image-slice: 1; opacity: 0.7; } 100% { border-image-slice: 1; opacity: 1; }
      }
      .gradient-pulse-button {
        background: #374151; border: 3px solid transparent; border-image: linear-gradient(45deg, #fef08a, #f97316) 1;
        animation: gradient-pulse 2s infinite ease-in-out; transition: all 0.2s;
      }
      .gradient-pulse-button:hover { border-image: linear-gradient(45deg, #fde047, #f97316) 1; animation: none; transform: scale(1.02); }

      /* Button 26: Shatter Effect (Simulated) */
      .shatter-button { position: relative; transition: all 0.1s; }
      .shatter-button:active {
        transform: scale(0.98); box-shadow: 0 0 0 0 transparent,
                    -1px -1px 0 0px #0369a1, /* Light blue */
                    1px 1px 0 0px #0f766e,   /* Teal */
                    -2px 2px 0 0px #0ea5e9;  /* Blue */
      }

      /* Button 27: Inner Glow */
      .inner-glow-button {
        transition: box-shadow 0.3s ease-in-out;
        box-shadow: 0 0 0 0px inset rgba(255, 255, 255, 0.1);
      }
      .inner-glow-button:hover { box-shadow: 0 0 20px 5px inset rgba(255, 255, 255, 0.2); }

      /* Button 28: Vertical Slice */
      .vertical-slice-button { position: relative; overflow: hidden; background: #4f46e5; }
      .vertical-slice-button::before {
        content: ''; position: absolute; top: 0; left: 0; width: 50%; height: 100%;
        background: #9333ea; transition: transform 0.3s ease;
      }
      .vertical-slice-button:hover::before { transform: translateX(-5px); }
      .vertical-slice-button:hover { background: #a855f7; }

      /* Button 29: Skew Transform Pulse */
      @keyframes skew-pulse {
        0%, 100% { transform: skewX(-1deg) scale(1); }
        50% { transform: skewX(1deg) scale(1.01); }
      }
      .skew-pulse-button { transition: all 0.3s ease-in-out; }
      .skew-pulse-button:hover { animation: skew-pulse 1.5s infinite alternate; box-shadow: 0 0 20px rgba(251, 191, 36, 0.5); }

      /* Button 30: Hollow Fill */
      .hollow-fill-button {
        background: transparent; border: 2px solid #ef4444; color: #ef4444;
        position: relative; overflow: hidden; z-index: 1; transition: color 0.4s;
      }
      .hollow-fill-button::before {
        content: ''; position: absolute; top: 50%; left: 50%; width: 100%; height: 100%;
        background-color: #ef4444; border-radius: 50%;
        transform: translate(-50%, -50%) scale(0); transition: transform 0.5s cubic-bezier(0.5, 1.5, 0.8, 1); z-index: -1;
      }
      .hollow-fill-button:hover::before { transform: translate(-50%, -50%) scale(2.5); }
      .hollow-fill-button:hover { color: white; border-color: #ef4444; }

      /* Button 31: Pop-out Text */
      .popout-text-button {
          position: relative;
          text-shadow: 2px 2px 0px rgba(0, 0, 0, 0.3);
          transition: all 0.3s ease;
      }
      .popout-text-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 0px #0891b2; /* cyan-600 shadow */
      }
      .popout-text-button .text-content {
          transition: transform 0.3s ease;
      }
      .popout-text-button:hover .text-content {
          transform: translate(2px, -2px);
          text-shadow: 4px 4px 0px rgba(0, 0, 0, 0.5);
      }

      /* Button 32: Rotating Bevel */
      @keyframes bevel-rotate {
          from { background-position: 0% 50%; }
          to { background-position: 100% 50%; }
      }
      .bevel-rotate-button {
          background-image: linear-gradient(135deg, #4f46e5 0%, #3730a3 50%, #4f46e5 100%);
          transition: all 0.3s ease;
          background-size: 200% 200%;
          box-shadow: 0 0 0 0px inset rgba(255, 255, 255, 0.5);
      }
      .bevel-rotate-button:hover {
          animation: bevel-rotate 2s linear infinite;
          box-shadow: 0 0 10px 1px inset rgba(255, 255, 255, 0.7);
      }

      /* Button 33: Isometric Push */
      .iso-push-button {
          transform-style: preserve-3d;
          transform: rotateX(0deg);
          transition: transform 0.15s, box-shadow 0.15s;
          box-shadow: 0 10px 0px #1e40af; /* Blue-800 depth */
      }
      .iso-push-button:active {
          transform: rotateX(5deg) translateY(6px);
          box-shadow: 0 4px 0px #1e40af;
      }

      /* Button 34: Liquid Edge */
      .liquid-edge-button {
          position: relative;
          overflow: hidden;
          background-color: #fca5a5; /* Red-300 */
          color: #991b1b; /* Red-800 */
          border: 2px solid #991b1b;
          transition: color 0.4s;
          z-index: 1;
      }
      .liquid-edge-button::before {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 0;
          background-color: #991b1b; /* Liquid color */
          transition: height 0.5s ease-in-out;
          z-index: -1;
          border-radius: 9px;
      }
      .liquid-edge-button:hover::before {
          height: 100%;
      }
      .liquid-edge-button:hover {
          color: white;
      }

      /* Button 35: Sliding Door */
      .sliding-door-button {
          position: relative;
          overflow: hidden;
          background-color: #10b981; /* Primary: Emerald-600 */
          z-index: 1;
      }
      .sliding-door-button::before, .sliding-door-button::after {
          content: '';
          position: absolute;
          top: 0;
          width: 50%;
          height: 100%;
          background-color: #064e3b; /* Dark Secondary */
          transition: transform 0.4s ease-out;
          z-index: -1;
      }
      .sliding-door-button::before {
          left: 0;
          transform: translateX(0);
      }
      .sliding-door-button::after {
          right: 0;
          transform: translateX(0);
      }
      .sliding-door-button:hover::before {
          transform: translateX(-100%);
      }
      .sliding-door-button:hover::after {
          transform: translateX(100%);
      }

      /* Button 36: Tilt Perspective */
      .tilt-perspective-button {
          perspective: 1000px;
          transition: all 0.3s ease;
      }
      .tilt-perspective-content {
          transition: transform 0.3s ease;
          transform-origin: center;
          transform: rotateX(0deg) rotateY(0deg);
          box-shadow: 0 6px 15px rgba(0, 0, 0, 0.4);
      }
      .tilt-perspective-button:hover .tilt-perspective-content {
          transform: rotateX(5deg) rotateY(-5deg) translateY(-5px);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.6);
      }

      /* Button 37: Squash & Stretch */
      .squash-stretch-button {
          transition: transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      }
      .squash-stretch-button:active {
          transform: scale(1, 0.9);
          transition: transform 0.05s ease-out;
      }
      .squash-stretch-button:hover {
          transform: scale(1.02, 1.05);
      }

      /* Button 38: Retro Block Push */
      .retro-push-button {
          position: relative;
          box-shadow: 4px 4px 0px #be185d; /* Pink-700 shadow */
          transition: all 0.1s ease-out;
      }
      .retro-push-button:active {
          transform: translate(4px, 4px);
          box-shadow: 0px 0px 0px #be185d;
      }

      /* Button 39: Wobbly Border */
      @keyframes wobbly-border {
          0%, 100% { clip-path: inset(0 0 0 0); }
          25% { clip-path: inset(3px 0 -3px 0); }
          50% { clip-path: inset(0 -3px 0 3px); }
          75% { clip-path: inset(-3px 0 3px 0); }
      }
      .wobbly-button-wrapper {
          position: relative;
      }
      .wobbly-button-border {
          position: absolute;
          inset: -3px;
          background: linear-gradient(45deg, #8b5cf6, #ec4899, #f97316);
          border-radius: 14px;
          animation: wobbly-border 1.5s infinite alternate;
      }
      .wobbly-button-content {
          position: relative;
          z-index: 10;
      }
      .wobbly-button-wrapper:hover .wobbly-button-border {
          animation: none;
          inset: -4px;
      }

      /* Button 40: Multi-Layer Shadow */
      .multi-shadow-button {
          transition: all 0.3s ease-in-out;
      }
      .multi-shadow-button:hover {
          transform: translate(-6px, -6px);
          box-shadow: 
              2px 2px 0 #ef4444, 
              4px 4px 0 #f97316, 
              6px 6px 0 #facc15, 
              8px 8px 0 #a3e635;
      }

      /* --- NEW BUTTON STYLES (41-50) --- */
      
      /* Button 41: Inverse 3D Flip */
      .flip-container {
        perspective: 1000px;
        height: 50px;
        width: 100%;
        max-width: 200px; /* export Constrain for visual effect */
      }
      .flipper {
        position: relative;
        transition: transform 0.6s;
        transform-style: preserve-3d;
        width: 100%;
        height: 100%;
      }
      .flip-container:hover .flipper {
        transform: rotateX(180deg);
      }
      .front, .back {
        position: absolute;
        width: 100%;
        height: 100%;
        backface-visibility: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 12px;
        font-weight: 700;
        cursor: pointer;
        transition: all 0.3s;
      }
      .front {
        background-color: #f59e0b; /* Amber-500 */
        color: #1f2937;
        z-index: 2;
      }
      .back {
        background-color: #10b981; /* Emerald-500 */
        color: white;
        transform: rotateX(180deg);
      }
      
      /* Button 42: Corner Curl (Peel) */
      .corner-curl-button {
          position: relative;
          overflow: hidden;
          background: #4b5563; /* Gray-600 */
          color: white;
          transition: all 0.3s;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      }
      .corner-curl-button::after {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          width: 0;
          height: 0;
          border-left: 15px solid transparent;
          border-bottom: 15px solid transparent;
          border-top: 15px solid #6ee7b7; /* Emerald-300 */
          box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
          transition: all 0.3s;
          transform-origin: 100% 0%;
      }
      .corner-curl-button:hover::after {
          border-left: 50px solid transparent;
          border-bottom: 50px solid transparent;
          border-top: 50px solid #6ee7b7; /* Emerald-300 */
          transform: rotate(180deg) scale(0.9);
      }

      /* Button 43: Light Sweep (Animated) */
      @keyframes light-sweep {
        0% { background-position: -200% 0; }
        100% { background-position: 200% 0; }
      }
      .light-sweep-button {
        background: #ef4444; /* Red-500 */
        background-image: linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.5) 50%, transparent 100%);
        background-size: 200% 100%;
        transition: background-color 0.3s;
      }
      .light-sweep-button:hover {
        animation: light-sweep 1s linear infinite;
        background-color: #dc2626; /* Red-600 */
      }
      
      /* Button 44: Floating Bubble Grid */
      @keyframes bubble-float {
        0% { transform: translateY(0) scale(1); opacity: 1; }
        100% { transform: translateY(-30px) scale(0); opacity: 0; }
      }
      .bubble-grid-button {
        position: relative;
        overflow: hidden;
        background: #1e40af; /* Blue-700 */
        z-index: 1;
      }
      .bubble {
        position: absolute;
        width: 10px;
        height: 10px;
        background: rgba(255, 255, 255, 0.4);
        border-radius: 50%;
        pointer-events: none;
        animation: bubble-float 1.5s linear infinite;
      }
      
      /* Button 45: Neumorphism Press */
      .neumorphism-button {
          border-radius: 12px;
          background: #4b5563; /* Gray-600 */
          color: white;
          box-shadow: 8px 8px 16px #374151,
                      -8px -8px 16px #6b7280;
          transition: all 0.2s ease;
      }
      .neumorphism-button:active {
          box-shadow: 3px 3px 6px #374151 inset,
                      -3px -3px 6px #6b7280 inset;
          transform: scale(0.98);
      }

      /* Button 46: Depth Shadow Rotation */
      @keyframes depth-shadow-rotate {
          0% { box-shadow: 10px 0 0 rgba(139, 92, 246, 0.5); }
          25% { box-shadow: 0 10px 0 rgba(139, 92, 246, 0.5); }
          50% { box-shadow: -10px 0 0 rgba(139, 92, 246, 0.5); }
          75% { box-shadow: 0 -10px 0 rgba(139, 92, 246, 0.5); }
          100% { box-shadow: 10px 0 0 rgba(139, 92, 246, 0.5); }
      }
      .shadow-rotate-button {
          background-color: #8b5cf6; /* Violet-500 */
          transition: all 0.3s ease;
      }
      .shadow-rotate-button:hover {
          animation: depth-shadow-rotate 1.5s linear infinite;
          transform: rotate(2deg) scale(1.02);
      }

      /* Button 47: Text Underline Fade */
      .underline-fade-button {
          position: relative;
          color: #fcd34d; /* Amber-300 */
          background: #1f2937; /* Dark BG */
      }
      .underline-fade-button::after {
          content: '';
          position: absolute;
          bottom: 5px;
          left: 50%;
          width: 0;
          height: 2px;
          background: #fcd34d;
          opacity: 0;
          transform: translateX(-50%);
          transition: all 0.5s ease-out;
      }
      .underline-fade-button:hover::after {
          width: 80%;
          opacity: 1;
      }

      /* Button 48: Vaporwave Glitch */
      @keyframes glitch-anim {
          0% { clip-path: inset(48% 0 35% 0); }
          20% { clip-path: inset(5% 0 15% 0); }
          40% { clip-path: inset(10% 0 60% 0); }
          60% { clip-path: inset(70% 0 10% 0); }
          80% { clip-path: inset(30% 0 50% 0); }
          100% { clip-path: inset(48% 0 35% 0); }
      }
      .glitch-button {
          position: relative;
          color: #00ffff; /* Cyan/Aqua */
          background: #ff00ff; /* Magenta */
          text-shadow: 3px 3px 0 #00ffff, -3px -3px 0 #ff00ff;
          transition: all 0.1s;
      }
      .glitch-button:hover {
          transform: skewX(-5deg) translateX(5px);
          filter: brightness(1.2);
          animation: glitch-anim 0.3s infinite alternate;
      }

      /* Button 49: Press Inset */
      .press-inset-button {
          box-shadow: 0 5px 0 #0f766e; /* Teal-700 depth */
          transition: all 0.1s;
      }
      .press-inset-button:active {
          transform: translateY(5px);
          box-shadow: 0 0 0 #0f766e, 0 0 10px 2px inset rgba(0, 0, 0, 0.5);
      }
      
      /* Button 50: Skewed Tab Focus */
      .skewed-tab-button {
          transform: skewX(-5deg);
          transition: all 0.3s ease-in-out;
          box-shadow: 5px 5px 0px #0369a1; /* Light Blue Shadow */
      }
      .skewed-tab-button:hover {
          transform: skewX(0deg) scale(1.05);
          box-shadow: 0 10px 20px rgba(3, 105, 161, 0.5);
      }

    `}
  </style>
);

// smooth scrolling function

const smoothScrollingFunction = (href) => {
  if (href && href.startsWith("#")) {
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  }
};

// --- Component Definitions (1-40 Existing) ---

//
export const ShineButton = ({ text, icon: Icon, onClick }) => (
  <button
    className="shine-button inline-flex items-center justify-center space-x-2 px-6 py-3 font-semibold text-white bg-indigo-600 rounded-xl shadow-lg hover:bg-indigo-700 active:bg-indigo-800 focus:outline-none focus:ring-4 focus:ring-indigo-500/50"
    onClick={onClick}
  >
    {Icon && <Icon className="w-5 h-5" />}
    <span>{text}</span>
  </button>
);

//
export const RippleButton = ({ text, icon: Icon, onClick }) => {
  const [key, setKey] = useState(0);
  const handleClick = (e) => {
    setKey((prev) => prev + 1);
    onClick(e);
  };
  return (
    <button
      key={key}
      className="ripple-button inline-flex items-center justify-center space-x-2 px-6 py-3 font-semibold text-white bg-green-500 rounded-xl shadow-lg hover:text-green-900 focus:outline-none focus:ring-4 focus:ring-green-500/50"
      onClick={handleClick}
    >
      {Icon && <Icon className="w-5 h-5" />}
      <span>{text}</span>
    </button>
  );
};

//
export const Press3DButton = ({ text, icon: Icon, onClick }) => (
  <button
    className="press-3d inline-flex items-center justify-center space-x-2 px-6 py-3 font-semibold text-white bg-slate-600 rounded-xl hover:bg-slate-700 focus:outline-none focus:ring-4 focus:ring-slate-500/50"
    onClick={onClick}
  >
    {Icon && <Icon className="w-5 h-5" />}
    <span>{text}</span>
  </button>
);

//
export const NeonGlowButton = ({ text, icon: Icon, onClick }) => (
  <button
    className="neon-glow-button inline-flex items-center justify-center space-x-2 px-6 py-3 font-bold rounded-xl focus:outline-none focus:ring-4 focus:ring-pink-300/50"
    onClick={onClick}
  >
    {Icon && <Icon className="w-5 h-5" />}
    <span>{text}</span>
  </button>
);

//
export const FloatingGradientButton = ({ text, icon: Icon, onClick }) => (
  <button
    className="floating-gradient-button inline-flex items-center justify-center space-x-2 px-6 py-3 font-semibold text-white rounded-xl hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-indigo-400/50"
    onClick={onClick}
  >
    {Icon && <Icon className="w-5 h-5" />}
    <span>{text}</span>
  </button>
);

//
export const RotatingBorderButton = ({ text, icon: Icon, onClick }) => (
  <div className="rotating-border-button rounded-xl hover:shadow-2xl shadow-emerald-500/50">
    <button
      className="rotating-border-content inline-flex items-center justify-center space-x-2 font-semibold text-lg focus:outline-none w-full"
      onClick={onClick}
    >
      {Icon && <Icon className="w-5 h-5 animate-[spin_3s_linear_infinite]" />}
      <span>{text}</span>
    </button>
  </div>
);

//
export const DualStateRevealButton = ({
  defaultText,
  hoverText,
  icon: Icon,
  onClick,
}) => (
  <button
    className="reveal-button inline-flex items-center justify-center w-full px-6 py-3 font-semibold text-white bg-red-600 rounded-xl hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-500/50 shadow-lg reveal-button-base"
    onClick={onClick}
  >
    <div className="default-content space-x-2">
      <span>{defaultText}</span>
    </div>
    <div className="hover-content space-x-2">
      {Icon && <Icon className="w-5 h-5" />}
      <span>{hoverText}</span>
    </div>
  </button>
);

//
export const BlobSquishButton = ({ text, icon: Icon, onClick }) => (
  <button
    className="squish-button inline-flex items-center justify-center space-x-2 px-6 py-3 font-extrabold text-cyan-900 bg-cyan-300 rounded-full shadow-lg hover:bg-cyan-200 focus:outline-none focus:ring-4 focus:ring-cyan-500/50"
    onClick={onClick}
  >
    {Icon && <Icon className="w-5 h-5" />}
    <span>{text}</span>
  </button>
);

//
export const CutoutRevealButton = ({ text, icon: Icon, onClick }) => (
  <button
    className="cutout-reveal-button inline-flex items-center justify-center space-x-2 px-6 py-3 font-semibold rounded-xl shadow-lg focus:outline-none focus:ring-4 focus:ring-cyan-500/50"
    onClick={onClick}
  >
    {Icon && <Icon className="w-5 h-5 z-10" />}
    <span className="z-10">{text}</span>
  </button>
);

// 10101
export const SpringyJiggleButton = ({ text, icon: Icon, onClick }) => (
  <button
    className="springy-jiggle-button inline-flex items-center justify-center space-x-2 px-6 py-3 font-semibold text-white bg-yellow-500 rounded-xl shadow-lg hover:bg-yellow-600 focus:outline-none focus:ring-4 focus:ring-yellow-500/50"
    onClick={onClick}
  >
    {Icon && <Icon className="w-5 h-5" />}
    <span>{text}</span>
  </button>
);

// 11111
export const GlassmorphismButton = ({ text, icon: Icon, onClick }) => (
  <button
    className="glass-button inline-flex items-center justify-center space-x-2 px-6 py-3 font-semibold text-white rounded-xl focus:outline-none focus:ring-4 focus:ring-white/50"
    onClick={onClick}
  >
    {Icon && <Icon className="w-5 h-5" />}
    <span>{text}</span>
  </button>
);

const LoadingButton = ({ text, icon: Icon, onClick }) => {
  const [isLoading, setIsLoading] = useState(false);
  const handleClick = useCallback(() => {
    if (isLoading) return;
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      onClick("Loading Button: Finished loading!");
    }, 2000);
  }, [isLoading, onClick]);

  return (
    <button
      className={`inline-flex items-center justify-center space-x-2 px-6 py-3 font-semibold text-white rounded-xl shadow-lg focus:outline-none transition-all duration-300 ${
        isLoading
          ? "bg-gray-500 cursor-not-allowed"
          : "bg-teal-600 hover:bg-teal-700 active:bg-teal-800 focus:ring-4 focus:ring-teal-500/50"
      }`}
      onClick={handleClick}
      disabled={isLoading}
    >
      {isLoading ? (
        <>
          <div className="spinner"></div>
          <span>Processing...</span>
        </>
      ) : (
        <>
          {Icon && <Icon className="w-5 h-5" />}
          <span>{text}</span>
        </>
      )}
    </button>
  );
};

// 13. Text Warp Shadow Button
// 12121
export const TextWarpButton = ({ text, icon: Icon, onClick }) => (
  <button
    className="text-warp-button inline-flex items-center justify-center space-x-2 px-6 py-3 font-extrabold text-white bg-gray-700 rounded-xl shadow-lg hover:bg-gray-600 focus:outline-none focus:ring-4 focus:ring-gray-500/50"
    onClick={onClick}
  >
    {Icon && <Icon className="w-5 h-5" />}
    <span>{text}</span>
  </button>
);

// 14. Color Pulse Button
// 13131
export const ColorPulseButton = ({ text, icon: Icon, onClick }) => (
  <button
    className="color-pulse-button inline-flex items-center justify-center space-x-2 px-6 py-3 font-semibold text-white bg-orange-500 rounded-xl shadow-lg focus:outline-none focus:ring-4 focus:ring-orange-500/50 transition-all"
    onClick={onClick}
  >
    {Icon && <Icon className="w-5 h-5" />}
    <span>{text}</span>
  </button>
);

// 15. Border Slide In Button
// 14141
export const BorderSlideButton = ({ text, icon: Icon, onClick }) => (
  <button
    className="border-slide-button inline-flex items-center justify-center space-x-2 px-6 py-3 font-semibold rounded-xl focus:outline-none"
    onClick={onClick}
  >
    {Icon && <Icon className="w-5 h-5" />}
    <span>{text}</span>
  </button>
);

// 16. Skewed Background Fill Button
// 15151
export const SkewedFillButton = ({ text, icon: Icon, onClick }) => (
  <button
    className="skew-fill-button inline-flex items-center justify-center space-x-2 px-6 py-3 font-semibold bg-gray-600 rounded-xl shadow-lg focus:outline-none focus:ring-4 focus:ring-gray-500/50"
    onClick={onClick}
  >
    {Icon && <Icon className="w-5 h-5" />}
    <span>{text}</span>
  </button>
);

// 17. Pill Shape Expand Button
// 16161
export const PillExpandButton = ({ text, icon: Icon, onClick }) => (
  <button
    className="pill-expand-button inline-flex items-center justify-start space-x-2 bg-pink-600 text-white rounded-full shadow-lg hover:shadow-pink-400/50 focus:outline-none focus:ring-4 focus:ring-pink-500/50"
    onClick={onClick}
  >
    <div className="icon-part flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full ml-1">
      {Icon && <Icon className="w-5 h-5" />}
    </div>
    <span className="pill-expand-text font-semibold mr-4">{text}</span>
  </button>
);

// 18. Icon Hover Scale Button
// 17171
export const IconScaleButton = ({ text, icon: Icon, onClick }) => (
  <button
    className="icon-scale-button inline-flex items-center justify-center space-x-2 px-6 py-3 font-semibold text-white bg-blue-600 rounded-xl shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-500/50"
    onClick={onClick}
  >
    <div className="icon-part">{Icon && <Icon className="w-5 h-5" />}</div>
    <span>{text}</span>
  </button>
);

// 19. Subtle Noise Texture Button
// 18181
export const NoiseTextureButton = ({ text, icon: Icon, onClick }) => (
  <button
    className="noise-button inline-flex items-center justify-center space-x-2 px-6 py-3 font-bold text-gray-900 bg-gray-200 rounded-xl shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-gray-500/50"
    onClick={onClick}
  >
    {Icon && <Icon className="w-5 h-5 z-10" />}
    <span className="z-10">{text}</span>
  </button>
);

// 20. Depth Hover Lift Button
// 19191
export const DepthLiftButton = ({ text, icon: Icon, onClick }) => (
  <button
    className="depth-lift-button inline-flex items-center justify-center space-x-2 px-6 py-3 font-extrabold text-white bg-gray-900 rounded-xl focus:outline-none"
    onClick={onClick}
  >
    {Icon && <Icon className="w-5 h-5" />}
    <span>{text}</span>
  </button>
);

// 21. Spotlight Hover Button
// 20202
export const SpotlightButton = ({ text, icon: Icon, onClick }) => (
  <button
    className="spotlight-button inline-flex items-center justify-center space-x-2 px-6 py-3 font-semibold text-white bg-blue-700 rounded-xl shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-500/50"
    onClick={onClick}
  >
    {Icon && <Icon className="w-5 h-5" />}
    <span>{text}</span>
  </button>
);

// 22. Slide-Out Icon Button
// 21212
export const SlideOutIconButton = ({ text, icon: Icon, onClick }) => (
  <button
    className="slide-icon-button inline-flex items-center justify-center w-full px-6 py-3 font-semibold text-white bg-gray-700 rounded-xl shadow-lg hover:bg-gray-600 focus:outline-none focus:ring-4 focus:ring-gray-500/50"
    onClick={onClick}
  >
    <span className="content text-part">{text}</span>
    <div className="content icon-part absolute right-4">
      {Icon && <Icon className="w-5 h-5" />}
    </div>
  </button>
);

// 23. Wavy Underline Button
// 22222
export const WavyUnderlineButton = ({ text, icon: Icon, onClick }) => (
  <button
    className="wavy-underline-button inline-flex items-center justify-center space-x-2 px-6 py-3 font-semibold text-blue-300 bg-gray-700 rounded-xl shadow-lg hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-500/50"
    onClick={onClick}
  >
    {Icon && <Icon className="w-5 h-5" />}
    <span>{text}</span>
  </button>
);

// 24. Text Shadow Drop Button
// 23232
export const TextShadowDropButton = ({ text, icon: Icon, onClick }) => (
  <button
    className="shadow-drop-button inline-flex items-center justify-center space-x-2 px-6 py-3 font-extrabold text-gray-900 bg-yellow-400 rounded-xl focus:outline-none focus:ring-4 focus:ring-yellow-500/50"
    onClick={onClick}
  >
    <div className="content inline-flex items-center space-x-2">
      {Icon && <Icon className="w-5 h-5" />}
      <span>{text}</span>
    </div>
  </button>
);

// 25. Gradient Border Pulse Button
// 24242
export const GradientBorderPulseButton = ({ text, icon: Icon, onClick }) => (
  <button
    className="gradient-pulse-button inline-flex items-center justify-center space-x-2 px-6 py-3 font-semibold text-white rounded-xl shadow-lg focus:outline-none"
    onClick={onClick}
  >
    {Icon && <Icon className="w-5 h-5" />}
    <span>{text}</span>
  </button>
);

// 26. Shatter Effect Button
// 25252
export const ShatterButton = ({ text, icon: Icon, onClick }) => (
  <button
    className="shatter-button inline-flex items-center justify-center space-x-2 px-6 py-3 font-extrabold text-white bg-teal-500 rounded-xl shadow-lg hover:bg-teal-400 focus:outline-none focus:ring-4 focus:ring-teal-500/50"
    onClick={onClick}
  >
    {Icon && <Icon className="w-5 h-5" />}
    <span>{text}</span>
  </button>
);

// 27. Inner Glow Button
// 26262
export const InnerGlowButton = ({ text, icon: Icon, onClick }) => (
  <button
    className="inner-glow-button inline-flex items-center justify-center space-x-2 px-6 py-3 font-semibold text-white bg-pink-700 rounded-xl shadow-lg hover:bg-pink-600 focus:outline-none focus:ring-4 focus:ring-pink-500/50"
    onClick={onClick}
  >
    {Icon && <Icon className="w-5 h-5" />}
    <span>{text}</span>
  </button>
);

// 28. Vertical Slice Button
// 27272
export const VerticalSliceButton = ({ text, icon: Icon, onClick }) => (
  <button
    className="vertical-slice-button inline-flex items-center justify-center space-x-2 px-6 py-3 font-extrabold text-white rounded-xl shadow-lg focus:outline-none focus:ring-4 focus:ring-indigo-500/50"
    onClick={onClick}
  >
    {Icon && <Icon className="w-5 h-5 z-10" />}
    <span className="z-10">{text}</span>
  </button>
);

// 29. Skew Transform Pulse Button
// 28282
export const SkewPulseButton = ({ text, icon: Icon, onClick }) => (
  <button
    className="skew-pulse-button inline-flex items-center justify-center space-x-2 px-6 py-3 font-semibold text-gray-900 bg-amber-400 rounded-xl shadow-lg hover:bg-amber-300 focus:outline-none focus:ring-4 focus:ring-amber-500/50"
    onClick={onClick}
  >
    {Icon && <Icon className="w-5 h-5" />}
    <span>{text}</span>
  </button>
);

// 30. Hollow Fill Button
// 29292
export const HollowFillButton = ({ text, icon: Icon, onClick }) => (
  <button
    className="hollow-fill-button inline-flex items-center justify-center space-x-2 px-6 py-3 font-semibold rounded-xl shadow-lg focus:outline-none"
    onClick={onClick}
  >
    {Icon && <Icon className="w-5 h-5 z-10" />}
    <span className="z-10">{text}</span>
  </button>
);

// 31. Pop-out Text Button
// 30303
export const PopoutTextButton = ({ text, icon: Icon, onClick }) => (
  <button
    className="popout-text-button inline-flex items-center justify-center space-x-2 px-6 py-3 font-extrabold text-white bg-cyan-500 rounded-xl focus:outline-none focus:ring-4 focus:ring-cyan-500/50"
    onClick={onClick}
  >
    <div className="text-content inline-flex items-center space-x-2">
      {Icon && <Icon className="w-5 h-5" />}
      <span>{text}</span>
    </div>
  </button>
);

// 32. Rotating Bevel Button
// 31313
export const RotatingBevelButton = ({ text, icon: Icon, onClick }) => (
  <button
    className="bevel-rotate-button inline-flex items-center justify-center space-x-2 px-6 py-3 font-semibold text-white rounded-xl shadow-lg focus:outline-none focus:ring-4 focus:ring-indigo-500/50"
    onClick={onClick}
  >
    {Icon && <Icon className="w-5 h-5" />}
    <span>{text}</span>
  </button>
);

// 33. Isometric Push Button
// 32323
export const IsometricPushButton = ({ text, icon: Icon, onClick }) => (
  <button
    className="iso-push-button inline-flex items-center justify-center space-x-2 px-6 py-3 font-extrabold text-white bg-blue-700 rounded-xl hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-500/50"
    onClick={onClick}
  >
    {Icon && <Icon className="w-5 h-5" />}
    <span>{text}</span>
  </button>
);

// 34. Liquid Edge Button
// 33333
export const LiquidEdgeButton = ({ text, icon: Icon, onClick }) => (
  <button
    className="liquid-edge-button inline-flex items-center justify-center space-x-2 px-6 py-3 font-extrabold rounded-xl shadow-lg focus:outline-none focus:ring-4 focus:ring-red-500/50"
    onClick={onClick}
  >
    {Icon && <Icon className="w-5 h-5 z-10" />}
    <span className="z-10">{text}</span>
  </button>
);

// 35. Sliding Door Button
// 34343
export const SlidingDoorButton = ({ text, icon: Icon, onClick }) => (
  <button
    className="sliding-door-button inline-flex items-center justify-center space-x-2 px-6 py-3 font-extrabold text-white rounded-xl shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-emerald-500/50"
    onClick={onClick}
  >
    {Icon && <Icon className="w-5 h-5 z-10" />}
    <span className="z-10">{text}</span>
  </button>
);

// 36. Tilt Perspective Button
// 35353
export const TiltPerspectiveButton = ({ text, icon: Icon, onClick }) => (
  <div className="tilt-perspective-button">
    <button
      className="tilt-perspective-content inline-flex items-center justify-center space-x-2 px-6 py-3 font-semibold text-white bg-purple-600 rounded-xl hover:bg-purple-700 focus:outline-none focus:ring-4 focus:ring-purple-500/50"
      onClick={onClick}
    >
      {Icon && <Icon className="w-5 h-5" />}
      <span>{text}</span>
    </button>
  </div>
);

// 37. Squash & Stretch Button
// 36363
export const SquashStretchButton = ({ text, icon: Icon, onClick }) => (
  <button
    className="squash-stretch-button inline-flex items-center justify-center space-x-2 px-6 py-3 font-extrabold text-white bg-indigo-500 rounded-xl shadow-lg hover:bg-indigo-400 focus:outline-none focus:ring-4 focus:ring-indigo-500/50"
    onClick={onClick}
  >
    {Icon && <Icon className="w-5 h-5" />}
    <span>{text}</span>
  </button>
);

// 38. Retro Block Push Button
// 37373
export const RetroBlockPushButton = ({ text, icon: Icon, onClick }) => (
  <button
    className="retro-push-button inline-flex items-center justify-center space-x-2 px-6 py-3 font-extrabold text-white bg-pink-500 rounded-xl hover:bg-pink-600 focus:outline-none focus:ring-4 focus:ring-pink-500/50"
    onClick={onClick}
  >
    {Icon && <Icon className="w-5 h-5" />}
    <span>{text}</span>
  </button>
);

// 39. Wobbly Border Button
// 38383
export const WobblyBorderButton = ({ text, icon: Icon, onClick }) => (
  <div className="wobbly-button-wrapper">
    <div className="wobbly-button-border"></div>
    <button
      className="wobbly-button-content inline-flex items-center justify-center space-x-2 px-6 py-3 font-extrabold text-white bg-gray-700 rounded-xl hover:bg-gray-600 focus:outline-none focus:ring-4 focus:ring-gray-500/50"
      onClick={onClick}
    >
      {Icon && <Icon className="w-5 h-5" />}
      <span>{text}</span>
    </button>
  </div>
);

// 40. Multi-Layer Shadow Button
// 39393
export const MultiLayerShadowButton = ({ text, icon: Icon, onClick }) => (
  <button
    className="multi-shadow-button inline-flex items-center justify-center space-x-2 px-6 py-3 font-extrabold text-white bg-gray-700 rounded-xl hover:bg-gray-600 focus:outline-none"
    onClick={onClick}
  >
    {Icon && <Icon className="w-5 h-5" />}
    <span>{text}</span>
  </button>
);

// --- New Component Definitions (41-50) ---

// 41. Inverse 3D Flip Button
// 40404
export const Inverse3DFlipButton = ({ text, icon: Icon, onClick }) => (
  <div className="flip-container">
    <div className="flipper">
      <button
        className="front inline-flex items-center justify-center space-x-2 shadow-lg"
        onClick={() => onClick("Flip Button (Front)")}
      >
        {Icon && <Icon className="w-5 h-5" />}
        <span>{text}</span>
      </button>
      <button
        className="back inline-flex items-center justify-center space-x-2 shadow-lg"
        onClick={() => onClick("Flip Button (Back)")}
      >
        <span>Flip Back</span>
      </button>
    </div>
  </div>
);

// 42. Corner Curl Button
// 41414
export const CornerCurlButton = ({ text, icon: Icon, onClick }) => (
  <button
    className="corner-curl-button inline-flex items-center justify-center space-x-2 px-6 py-3 font-semibold rounded-xl focus:outline-none focus:ring-4 focus:ring-gray-400/50"
    onClick={onClick}
  >
    {Icon && <Icon className="w-5 h-5" />}
    <span>{text}</span>
  </button>
);

// 43. Light Sweep Button
// 42424
export const LightSweepButton = ({ text, icon: Icon, onClick }) => (
  <button
    className="light-sweep-button inline-flex items-center justify-center space-x-2 px-6 py-3 font-extrabold text-white rounded-xl shadow-lg focus:outline-none focus:ring-4 focus:ring-red-500/50"
    onClick={onClick}
  >
    {Icon && <Icon className="w-5 h-5" />}
    <span>{text}</span>
  </button>
);

// 44. Floating Bubble Grid Button
// 43434
export const FloatingBubbleButton = ({ text, icon: Icon, onClick }) => {
  // Generates small bubbles with random positions and delays for the background animation
  const bubbles = Array(10)
    .fill()
    .map((_, i) => (
      <div
        key={i}
        className="bubble"
        style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 1.5}s`,
          width: `${Math.random() * 8 + 5}px`,
          height: `${Math.random() * 8 + 5}px`,
        }}
      />
    ));

  return (
    <button
      className="bubble-grid-button inline-flex items-center justify-center space-x-2 px-6 py-3 font-extrabold text-white rounded-xl shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-500/50"
      onClick={onClick}
    >
      {bubbles}
      <span className="z-20">{text}</span>
      {Icon && <Icon className="w-5 h-5 z-20" />}
    </button>
  );
};

// 45. Neumorphism Press Button
// 44444
export const NeumorphismButton = ({ text, icon: Icon, onClick }) => (
  <button
    className="neumorphism-button inline-flex items-center justify-center space-x-2 px-6 py-3 font-semibold focus:outline-none"
    onClick={onClick}
  >
    {Icon && <Icon className="w-5 h-5" />}
    <span>{text}</span>
  </button>
);

// 46. Depth Shadow Rotation Button
// 45454
export const DepthShadowRotateButton = ({ text, icon: Icon, onClick }) => (
  <button
    className="shadow-rotate-button inline-flex items-center justify-center space-x-2 px-6 py-3 font-extrabold text-white rounded-xl shadow-lg focus:outline-none focus:ring-4 focus:ring-violet-500/50"
    onClick={onClick}
  >
    {Icon && <Icon className="w-5 h-5" />}
    <span>{text}</span>
  </button>
);

// 47. Text Underline Fade Button

export const UnderlineFadeButton = ({ text, icon: Icon, onClick, href }) => {
  const handleClick = (e) => {
    // smooth scroll for hash links
    if (href && href.startsWith("#")) {
      e.preventDefault();
      smoothScrollingFunction(href);
    }
    if (onClick) onClick(e);
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className="underline-fade-button inline-flex items-center justify-center space-x-2 px-6 py-3 font-extrabold rounded-xl shadow-lg hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-amber-300/50"
    >
      {Icon && <Icon className="w-5 h-5" />}
      <span>{text}</span>
    </a>
  );
};

// 48. Vaporwave Glitch Button
// 47474
export const VaporwaveGlitchButton = ({ text, icon: Icon, onClick }) => (
  <button
    className="glitch-button inline-flex items-center justify-center space-x-2 px-6 py-3 font-extrabold uppercase rounded-xl shadow-lg focus:outline-none focus:ring-4 focus:ring-fuchsia-500/50"
    onClick={onClick}
  >
    {Icon && <Icon className="w-5 h-5" />}
    <span>{text}</span>
  </button>
);

// 49. Press Inset Button
// 48484
export const PressInsetButton = ({ text, icon: Icon, onClick }) => (
  <button
    className="press-inset-button inline-flex items-center justify-center space-x-2 px-6 py-3 font-extrabold text-white bg-teal-600 rounded-xl hover:bg-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/50"
    onClick={onClick}
  >
    {Icon && <Icon className="w-5 h-5" />}
    <span>{text}</span>
  </button>
);

// 50. Skewed Tab Focus Button
// 49494
export const SkewedTabButton = ({ text, icon: Icon, onClick }) => (
  <button
    className="skewed-tab-button inline-flex items-center justify-center space-x-2 px-6 py-3 font-extrabold text-white bg-sky-600 rounded-xl hover:bg-sky-500 focus:outline-none focus:ring-4 focus:ring-sky-500/50"
    onClick={onClick}
  >
    {Icon && <Icon className="w-5 h-5" />}
    <span>{text}</span>
  </button>
);
