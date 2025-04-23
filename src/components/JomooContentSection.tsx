
import React, { useEffect, useState, useRef } from "react";
import { supabase } from "@/integrations/supabase/client";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

// Types
interface SectionContent {
  id: number;
  jm_name: string;
  jm_desc: string;
  jm_explore: boolean | null;
  jm_url: string | null;
  jm_img: string | null;
}

const JomooContentSection: React.FC = () => {
  const [items, setItems] = useState<SectionContent[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      const { data, error } = await supabase
        .from("jomoo_trans_section_content")
        .select("id, jm_name, jm_desc, jm_explore, jm_url, jm_img")
        .eq("sts", true)
        .order("id", { ascending: true });

      if (error) {
        console.error("Error fetching content:", error);
        setItems([]);
      } else {
        setItems(data || []);
      }
      setLoading(false);
    };
    fetch();
  }, []);

  if (loading) {
    return (
      <div className="text-center py-12">
        <p className="text-jomoo-text">Loading content...</p>
      </div>
    );
  }

  if (!items.length) {
    return (
      <div className="text-center py-12">
        <p className="text-jomoo-text">No content found.</p>
      </div>
    );
  }

  return (
    <section className="py-16 md:py-24 bg-jomoo-dark">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title text-center mb-16">Our Products</h2>
        <div className="space-y-24">
          {items.map((item, idx) => {
            // Odd id or odd index: Image Left, Text Right. Even: opposite
            const isImageLeft = idx % 2 === 0;
            return (
              <div
                key={item.id}
                className={cn(
                  "flex flex-col lg:flex-row gap-10 items-stretch",
                  !isImageLeft && "lg:flex-row-reverse"
                )}
              >
                {/* Image section */}
                <div className="lg:w-1/2 flex-1 flex items-stretch">
                  <div className="w-full rounded-lg overflow-hidden flex items-stretch bg-[#181c23]">
                    {item.jm_img ? (
                      <img
                        src={item.jm_img}
                        alt={item.jm_name}
                        className="w-full h-full object-cover aspect-[4/3] min-h-[220px]"
                        style={{ objectPosition: "center" }}
                      />
                    ) : (
                      <div className="w-full aspect-[4/3] min-h-[220px] bg-black/30 flex items-center justify-center text-jomoo-muted">
                        No image
                      </div>
                    )}
                  </div>
                </div>
                {/* Content section */}
                <div className="lg:w-1/2 flex-1 flex flex-col justify-center">
                  <h3 className="text-2xl md:text-3xl font-bold text-jomoo-text mb-4">
                    {item.jm_name}
                  </h3>
                  <p className="text-jomoo-muted text-lg mb-8">
                    {item.jm_desc}
                  </p>
                  {item.jm_explore && item.jm_url && (
                    <a
                      href={item.jm_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline inline-flex items-center self-start"
                    >
                      Explore more <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default JomooContentSection;
