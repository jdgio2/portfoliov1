import { ReactNode } from "react";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";

interface Props {
  children?: ReactNode;
  open: boolean;
  setOpen: (newValue: boolean | ((prevValue: boolean) => boolean)) => void;
}

export default function MyDialog({ children, open, setOpen }: Props) {
  return (
    <Dialog open={open} onClose={setOpen} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full justify-center items-center p-4 text-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg 
              bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 
              data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 
              data-[enter]:ease-out data-[leave]:ease-in sm:my-8 w-full max-w-lg 
              data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            <button
              className="transition ease-in-out bg-slate-200 py-1 font-bold px-6 m-2 right-0 
        rounded-sm font-mono hover:bg-slate-300 hover:slate-800 drop-shadow-sm
        active:bg-slate-500"
              onClick={() => setOpen(false)}
            >
              X
            </button>
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">{children}</div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
