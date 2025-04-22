
import { useQuery } from "@tanstack/react-query";
import { FileDown } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Skeleton } from "@/components/ui/skeleton";
import { Card } from "@/components/ui/card";

type FileRecord = {
  id: string;
  file_name: string;
  file_name_en: string;
  file_url: string;
};

export function FileDownloads() {
  const { data: files, isLoading } = useQuery({
    queryKey: ["files"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("jomoo_master_file")
        .select("*");

      if (error) throw error;
      return data as FileRecord[];
    },
  });

  if (isLoading) {
    return (
      <div className="space-y-4">
        <Skeleton className="h-24 w-full" />
        <Skeleton className="h-24 w-full" />
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {files?.map((file) => (
        <Card key={file.id} className="p-4 bg-jomoo-dark border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-jomoo-text">{file.file_name_en}</h3>
              <p className="text-jomoo-muted text-sm">{file.file_name}</p>
            </div>
            <a
              href={file.file_url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline flex items-center gap-2 transition-colors"
            >
              <FileDown className="h-5 w-5" />
              Download PDF
            </a>
          </div>
        </Card>
      ))}
    </div>
  );
}
