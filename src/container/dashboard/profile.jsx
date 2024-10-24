"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  User,
  Phone,
  Mail,
  Lock,
  Flag,
  MapPin,
  Building,
  Home,
} from "lucide-react";
import { Content } from "./content";
import InputContainer from "@/components/input-container";

const Profile = () => {
  const [profile, setProfile] = useState({
    firstName: "Tolulope",
    lastName: "Akinkunmi",
    phone: "09038794210",
    email: "tolulopeakinkunmi7@gmail.com",
    password: "********",
    country: "",
    state: "",
    city: "",
    fax: "",
    postalCode: "",
    address: "",
    address2: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name) => (value) => {
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Profile updated:", profile);
    // Add actual update logic here
  };

  return (
    <div className="p-[6%] flex flex-col gap-10">
      <Content />
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">
            Profile Information
          </CardTitle>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InputContainer
                label="First Name"
                name="firstName"
                placeholder="Enter first name"
                icon={<User />}
                value={profile.firstName}
                onChange={handleInputChange}
              />
              <InputContainer
                label="Last Name"
                name="lastName"
                placeholder="Enter last name"
                icon={<User />}
                value={profile.lastName}
                onChange={handleInputChange}
              />

              <InputContainer
                label="Phone"
                name="phone"
                placeholder="Enter phone number"
                icon={<Phone />}
                value={profile.phone}
                onChange={handleInputChange}
              />
              <InputContainer
                label="Email"
                name="email"
                placeholder="Enter email"
                icon={<Mail />}
                type="email"
                value={profile.email}
                onChange={handleInputChange}
              />
              <InputContainer
                label="Password"
                name="password"
                placeholder="Enter password"
                icon={<Lock />}
                type="password"
                value={profile.password}
                onChange={handleInputChange}
              />
             

              <InputContainer
                label="State"
                name="state"
                placeholder="Enter state"
                icon={<MapPin />}
                value={profile.state}
                onChange={handleInputChange}
              />
              <InputContainer
                label="Country"
                name="state"
                placeholder="Enter Country"
                icon={<MapPin />}
                value={profile.state}
                onChange={handleInputChange}
              />
              <InputContainer
                label="City"
                name="city"
                placeholder="Enter city"
                icon={<Building />}
                value={profile.city}
                onChange={handleInputChange}
              />
              <InputContainer
                label="Fax"
                name="fax"
                placeholder="Enter fax"
                icon={<Flag />}
                value={profile.fax}
                onChange={handleInputChange}
              />
              <InputContainer
                label="Postal Code"
                name="postalCode"
                placeholder="Enter postal code"
                icon={<MapPin />}
                value={profile.postalCode}
                onChange={handleInputChange}
              />
              <InputContainer
                label="Address"
                name="address"
                placeholder="Enter address"
                icon={<Home />}
                value={profile.address}
                onChange={handleInputChange}
              />
              <InputContainer
                label="Address 2"
                name="address2"
                placeholder="Enter address 2"
                icon={<Home />}
                value={profile.address2}
                onChange={handleInputChange}
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full">
              Update Profile
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export { Profile };
