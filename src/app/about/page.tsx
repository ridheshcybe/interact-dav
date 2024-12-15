import { Card, CardContent } from "@/app/components/card";
import AnimatedSignature from "./animated-signature";

export default function AboutSection() {
  return (
    <section className="bg-black text-white about">
      <div className="container mx-auto px-4">
        <Card className="max-w-3xl mx-auto bg-gray-900 border-blue-400">
          <CardContent className="p-6 sm:p-10">
            <h2 className="text-3xl font-bold mb-6 text-center text-blue-400">
              About Us
            </h2>
            <div className="space-y-6">
              <p className="text-gray-300 leading-relaxed">
                The Interact Club is like the ultimate teen squad for doing
                good. Think of it as a superhero team for 12-18 year-olds,
                sponsored by Rotary, where capes are swapped for community
                service. Since 1962, Interact members have been mastering the
                art of leadership while tackling everything from local beach
                cleanups to global projects. Plus, they get to work with a
                real-life Rotary mentor—like having Yoda, but for community
                work! With over 10,000 clubs worldwide, Interact is your
                backstage pass to changing the world. You'll make friends, learn
                new skills, and maybe save the planet (or at least your town)
                one fun project at a time
              </p>
              <div className="flex items-center justify-end space-x-4 pt-6 border-t border-gray-700">
                <div className="text-right">
                  <p className="font-semibold text-blue-400">Ridhesh w</p>
                  <p className="text-sm text-gray-400">IT Head</p>
                </div>
                <div>
                  <AnimatedSignature />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
