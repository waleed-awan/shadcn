"use client";

import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";

interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export function SearchModal({ open, setOpen }: Props) {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="p-0 overflow-hidden max-w-xl rounded-2xl bg-white border border-gray-200 shadow-xl">
        <Command className="bg-white text-black">
          
          <CommandInput
            placeholder="Search..."
            className="h-12 text-base text-black placeholder:text-gray-400 border-b border-gray-200"
          />

          <CommandEmpty className="text-gray-500 p-4">
            No results found.
          </CommandEmpty>

          <CommandGroup
            heading={<span className="text-xs text-gray-500">General</span>}
          >
            <CommandItem className="text-black hover:bg-gray-100 cursor-pointer">
              Made with shadcn/studio
            </CommandItem>
            <CommandItem className="text-black hover:bg-gray-100 cursor-pointer">
              Credits
            </CommandItem>
            <CommandItem className="text-black hover:bg-gray-100 cursor-pointer">
              Become Ambassador
            </CommandItem>
            <CommandItem className="text-black hover:bg-gray-100 cursor-pointer">
              Affiliation Terms & Condition
            </CommandItem>
            <CommandItem className="text-black hover:bg-gray-100 cursor-pointer">
              Roadmap
            </CommandItem>
          </CommandGroup>

          <CommandGroup
            heading={<span className="text-xs text-gray-500">Docs</span>}
          >
            <CommandItem className="text-black hover:bg-gray-100 cursor-pointer">
              Introduction
            </CommandItem>
          </CommandGroup>

        </Command>
      </DialogContent>
    </Dialog>
  );
}