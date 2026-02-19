import React from "react";
import { motion } from "framer-motion";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

interface Props {
  formData: any;
  setFormData: React.Dispatch<React.SetStateAction<any>>;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

const StepBasic: React.FC<Props> = ({ formData, setFormData, setStep }) => {

  const handleChange = (field: string, value: any) => {
    setFormData((prev: any) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">

      {/* LEFT SIDE */}
      <div className="hidden md:flex bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-16 flex-col justify-center">
        <h1 className="text-4xl font-bold mb-6">
          Build Your Business With Vyoma 🚀
        </h1>
        <p className="text-lg opacity-90">
          Start your digital journey and reach more local customers.
        </p>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center justify-center p-10 bg-muted/30">

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="w-full max-w-2xl"
        >
          <Card className="shadow-2xl rounded-3xl border-0">

            <CardHeader>
              <div className="text-sm text-muted-foreground mb-2">
                Step 1 of 4
              </div>
              <CardTitle className="text-2xl font-semibold">
                🏪 Basic Shop Information
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-6 p-8">

              <div className="space-y-2">
                <Label>Owner Name</Label>
                <Input
                  placeholder="Enter owner name"
                  value={formData.ownerName}
                  onChange={(e) =>
                    handleChange("ownerName", e.target.value)
                  }
                />
              </div>

              <div className="space-y-2">
                <Label>Business Type</Label>
                <Select
                  onValueChange={(value) =>
                    handleChange("businessType", value)
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select Business Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Grocery">Grocery</SelectItem>
                    <SelectItem value="Bakery">Bakery</SelectItem>
                    <SelectItem value="Restaurant">Restaurant</SelectItem>
                    <SelectItem value="Pharmacy">Pharmacy</SelectItem>
                    <SelectItem value="Clothing">Clothing</SelectItem>
                    <SelectItem value="Electronics">Electronics</SelectItem>
                    <SelectItem value="Home Services">Home Services</SelectItem>
                    <SelectItem value="Others">Others</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Shop Name</Label>
                <Input
                  placeholder="Enter shop name"
                  value={formData.shopName}
                  onChange={(e) =>
                    handleChange("shopName", e.target.value)
                  }
                />
              </div>

              <div className="space-y-2">
                <Label>Description</Label>
                <Textarea
                  placeholder="Describe your business..."
                  value={formData.description}
                  onChange={(e) =>
                    handleChange("description", e.target.value)
                  }
                />
              </div>

              <div className="space-y-2">
                <Label>Years of Operation (Optional)</Label>
                <Input
                  type="number"
                  placeholder="e.g., 5"
                  value={formData.yearsOfOperation}
                  onChange={(e) =>
                    handleChange("yearsOfOperation", e.target.value)
                  }
                />
              </div>

              <div className="flex justify-end pt-4">
                <Button onClick={() => setStep(2)}>
                  Next →
                </Button>
              </div>

            </CardContent>

          </Card>
        </motion.div>

      </div>

    </div>
  );
};

export default StepBasic;
