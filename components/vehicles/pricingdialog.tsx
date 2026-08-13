"use client";

import { DollarSign } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import PopupContent from "./pop-up-content";
import { ScrollArea } from "../ui/scroll-area";
interface PricingDialogProps {
  carName: string,
  dailyRate: number;
  deposit: number;
  weeklyRate: number;
  minimumDays?: number;
}

const PricingDialog: React.FC<PricingDialogProps> = ({
  carName,
  dailyRate,
  deposit,
  weeklyRate,
  minimumDays = 7,
}) => {

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full p-3 bg-secondary rounded-none text-black hover:bg-secondary-dark hover:text-white">
          <div className="flex justify-center items-center gap-2">
            <div>
              <DollarSign size={20} />
            </div>
            <div>Book Now</div>
          </div>
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-lg h-screen md:h-fit">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold">
            ${weeklyRate.toFixed(2)}/day
            <p className="text-xs text-gray-500">
              For booking more than {minimumDays} days. Otherwise ${dailyRate}
              /day is applicable.
            </p>
          </DialogTitle>
        </DialogHeader>
        <ScrollArea>
          <PopupContent carName={carName} weeklyRate={weeklyRate} dailyRate={dailyRate} deposit={deposit} minimumDays={minimumDays}/>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default PricingDialog;
