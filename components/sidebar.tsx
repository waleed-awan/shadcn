'use client';

import {
  X,
  Grid3x3,
  LayoutGrid,
  LayoutTemplate,
  Palette,
  Zap,
  Package,
  LayoutList,
  BookOpen,
  Sparkles
} from 'lucide-react';

import { Button } from '@/components/ui/button';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuItems = [
  { label: 'Components', icon: Grid3x3 },
  { label: 'Blocks', icon: LayoutGrid },
  { label: 'Templates', icon: LayoutTemplate },
  { label: 'Theme Generator', icon: Palette },
  { label: 'Drag & Drop Builder', icon: Zap, isNew: true },
  { label: 'shadcn/studio MCP', icon: Package },
  { label: 'IDE Extension', icon: LayoutList },
  { label: 'Figma to Code (Figma Plugin)', icon: Sparkles },
  { label: 'Figma to Code using Figma MCP Server', icon: BookOpen },
  { label: 'Docs', icon: BookOpen },
];

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <>
      {/* OVERLAY */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-40"
          onClick={onClose}
        />
      )}

      {/* SIDEBAR */}
      <div
        className={`fixed left-0 top-0 h-full w-64 bg-white border-r border-gray-200 z-50 transition-transform duration-300 ease-in-out overflow-y-auto ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >

        {/* HEADER */}
        <div className="flex items-center justify-between border-b border-zinc-200 px-4 py-3">

          {/* LEFT: LOGO + TITLE */}
          <div className="flex items-center gap-3">

            {/* LOGO */}
            <div className="flex size-9 items-center justify-center rounded-full bg-black">
              <div className="relative size-4">
                <span className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-white" />
                <span className="absolute left-0 top-1/2 h-0.5 w-full -translate-y-1/2 bg-white" />
                <span className="absolute left-1/2 top-1/2 h-full w-0.5 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white" />
                <span className="absolute left-1/2 top-1/2 h-full w-0.5 -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-white" />
              </div>
            </div>

            {/* TITLE */}
            <h1 className="text-sm font-semibold text-black">
              shadcn/studio
            </h1>
          </div>

          {/* CLOSE BUTTON */}
          <button
            onClick={onClose}
            className="flex size-8 items-center justify-center rounded-lg border border-zinc-200 bg-white hover:bg-zinc-50"
          >
            <X className="size-4 text-black" />
          </button>
        </div>

        {/* MENU */}
        <div className="p-4 space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <button
                key={item.label}
                className="w-full flex items-center gap-3 px-3 py-2 text-sm text-gray-700 rounded-lg hover:bg-gray-100 transition-colors text-left"
              >
                <Icon className="w-5 h-5 text-gray-600 flex-shrink-0" />
                <span className="flex-1">{item.label}</span>

                {item.isNew && (
                  <span className="px-2 py-0.5 text-xs font-semibold bg-gray-900 text-white rounded">
                    New
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
}