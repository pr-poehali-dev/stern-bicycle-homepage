import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import BikeImage from "@/components/BikeImage";
import BikeCard from "@/components/BikeCard";
import HomeSection from "@/components/sections/HomeSection";
import AboutSection from "@/components/sections/AboutSection";
import SpecsSection from "@/components/sections/SpecsSection";
import ContactsSection from "@/components/sections/ContactsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">STERN</h1>
          <p className="text-lg text-gray-600">Велосипеды нового поколения</p>
        </div>

        <Tabs defaultValue="home" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="home">Главная</TabsTrigger>
            <TabsTrigger value="about">О велосипеде</TabsTrigger>
            <TabsTrigger value="specs">Характеристики</TabsTrigger>
            <TabsTrigger value="contacts">Контакты</TabsTrigger>
          </TabsList>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="order-2 lg:order-1">
              <BikeImage />
            </div>

            <div className="order-1 lg:order-2">
              <Card className="p-6 shadow-lg">
                <TabsContent value="home">
                  <HomeSection />
                </TabsContent>
                <TabsContent value="about">
                  <AboutSection />
                </TabsContent>
                <TabsContent value="specs">
                  <SpecsSection />
                </TabsContent>
                <TabsContent value="contacts">
                  <ContactsSection />
                </TabsContent>
              </Card>
            </div>
          </div>
        </Tabs>

        {/* Рекламная карточка */}
        <div className="mt-12">
          <BikeCard />
        </div>
      </div>
    </div>
  );
};

export default Index;
