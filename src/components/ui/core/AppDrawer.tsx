import React, { cloneElement, isValidElement, ReactElement, useState } from "react";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "@/components/ui/sheet";
import { Plus } from "lucide-react";
import { Button } from "../button";

interface AppDrawerProps {
  children: ReactElement<{ setSheetOpen: (open: boolean) => void }>;
  title: string;
}

const AppDrawer: React.FC<AppDrawerProps> = ({ children, title }) => {
  const [sheetOpen, setSheetOpen] = useState(false);

  return (
    <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
      <SheetTrigger className="flex">
        <Button>
          <Plus />
          <span>Add {title}</span>
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          {isValidElement(children) ? cloneElement(children, { setSheetOpen }) : children}
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default AppDrawer;
