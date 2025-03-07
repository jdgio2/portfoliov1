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
                className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-leave:duration-200 data-enter:ease-out data-leave:ease-in"
            />
            <div className="fixed inset-0 z-10 w-screen">
                <div className="flex min-h-full justify-center items-center p-4 text-center sm:p-0">
                    <DialogPanel
                        transition
                        className="relative transform rounded-xl 
              bg-white text-left shadow-xl transition-all data-closed:translate-y-4 
              data-closed:opacity-0 data-enter:duration-300 data-leave:duration-200 
              data-enter:ease-out data-leave:ease-in sm:my-8 w-full max-w-lg 
              sm:data-closed:translate-y-0 sm:data-closed:scale-95"
                    >
                        <div className=" px-4 pb-4 pt-5 sm:p-6 sm:pb-4 rounded-xl">
                            <button
                                className="transition ease-in-out cursor-pointer bg-slate-200 py-1 px-6 mb-3 right-0 
        rounded-sm font-black drop-shadow-xs hover:bg-slate-300
        active:bg-slate-500"
                                onClick={() => setOpen(false)}
                            >
                                X
                            </button>
                            <div className="sm:flex sm:items-start overflow-y-auto max-h-[70vh]">
                                {children}
                            </div>
                        </div>
                    </DialogPanel>
                </div>
            </div>
        </Dialog>
    );
}
