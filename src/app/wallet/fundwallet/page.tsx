import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import Image from "next/image";
import bankIcon from "../../../../public/Avatar.png";
import walletIcon from "../../../../public/Icon.png";
import ButtonComponent from "@/components/shared/ButtonComponent";
export default function FundWallet() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <button className="bg-[#219653] hover:bg-green-700 text-white p-1 px-2 rounded-[6px]">
          Fund Wallet
        </button>
      </AlertDialogTrigger>
      <AlertDialogContent className="bg-white sm:w-[90%]">
        <AlertDialogHeader>
          <AlertDialogTitle>
            <div className="flex justify-between items-center">
              <h1 className=" font-bold">Fund Wallet</h1>
              <X />
            </div>
          </AlertDialogTitle>
          <AlertDialogDescription>
            <div className="text-center mt-5 bg-[#F6FEF8] py-2">
              <h1 className="text-xs font-light">Wallet Balance</h1>
              <p className="text-[#056839] text-xl font-bold">₦12,750,000</p>
            </div>
            <div className="mt-5 space-y-2">
              <h1 className="">Amount</h1>
              <input type="text" className="border p-2 rounded-[8px] w-full" />
            </div>
            {/* Bank Transfer */}
            <div className="mt-5">
              <h1>Choose Method</h1>
              <div className="flex items-center border rounded-xl my-3 px-5 gap-3 py-2">
                <div>
                  <Image src={bankIcon} alt="bank-icon" width={90} />
                </div>
                <div className="space-y-1">
                  <h1 className="font-bold">Bank Transfer</h1>
                  <p className="font-light">
                    For transfers above ₦500,000. A processing fee of ₦161
                    applies.
                  </p>
                </div>
              </div>
            </div>

            {/* Card Payment */}
            <div className="mt-5">
              <div className="flex items-center border rounded-xl my-3 px-5 gap-3 py-2">
                <div>
                  <Image src={walletIcon} alt="bank-icon" width={90} />
                </div>
                <div className="space-y-1">
                  <h1 className="font-bold">Card Payment</h1>
                  <p className="font-light">
                    For transfers below ₦500,000. A processing fee of ₦1,500
                    applies.
                  </p>
                </div>
              </div>
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <ButtonComponent
            className="rounded-xl"
            title="Proceed"
            onClick={function (): void {
              throw new Error("Function not implemented.");
            }}
          />
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
