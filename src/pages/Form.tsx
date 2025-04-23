
import React, { useState, useEffect } from 'react';
import { useToast } from "@/hooks/use-toast";
import Layout from '../components/Layout';
import { FileDownloads } from '../components/FileDownloads';
import { supabase } from "@/integrations/supabase/client";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";

interface Role {
  role_id: number;
  role_name: string;
}

const Form: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [roleId, setRoleId] = useState('');
  const [roles, setRoles] = useState<Role[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const fetchRoles = async () => {
      try {
        const { data, error } = await supabase
          .from('jomoo_master_role')
          .select('role_id, role_name')
          .eq('sts', true)
          .order('role_id', { ascending: true });

        if (error) {
          console.error('Error fetching roles:', error);
          return;
        }

        setRoles(data || []);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchRoles();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !email || !roleId) {
      toast({
        variant: "destructive",
        title: "Please fill in all fields",
        description: "All fields are required to submit the form.",
      });
      return;
    }
    
    setIsLoading(true);
    
    try {
      const { error } = await supabase
        .from('jomoo_trans_information')
        .insert([
          {
            info_name: name,
            info_email: email,
            info_type: roleId,
            sts: true
          }
        ]);

      if (error) throw error;

      toast({
        title: "Success",
        description: "Your information has been submitted. You'll receive the catalog soon.",
      });

      setName('');
      setEmail('');
      setRoleId('');
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "There was a problem submitting your information.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Layout>
      <div className="bg-jomoo-background min-h-screen">
        <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
          <div className="max-w-3xl mx-auto">
            <h1 className="section-title text-center">Thank you for visiting us at architect'25!</h1>
            <p className="text-jomoo-muted text-center mb-12">
              Get our latest JOMOO Smart Bathroom catalog now.
            </p>

            <div className="bg-jomoo-dark rounded-lg p-8 mb-12">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label htmlFor="name" className="block text-jomoo-text mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="form-input"
                    placeholder="Your Name"
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="email" className="block text-jomoo-text mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-input"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                
                <div className="mb-8">
                  <label htmlFor="role" className="block text-jomoo-text mb-2">You are a...</label>
                  <Select value={roleId} onValueChange={setRoleId}>
                    <SelectTrigger className="form-input bg-jomoo-dark">
                      <SelectValue placeholder="Select your role" />
                    </SelectTrigger>
                    <SelectContent>
                      {roles.map((role) => (
                        <SelectItem key={role.role_id} value={role.role_id.toString()}>
                          {role.role_name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <button 
                  type="submit" 
                  className="btn-primary w-full"
                  disabled={isLoading}
                >
                  {isLoading ? 'Submitting...' : 'Submit'}
                </button>
              </form>
            </div>

            <div className="bg-jomoo-dark rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Download Files</h2>
              <p className="text-jomoo-muted mb-8">
                Access our product catalogs and technical specifications below.
              </p>
              
              <FileDownloads />
              
              <div className="mt-8 p-4 bg-gray-800 rounded-md">
                <p className="text-jomoo-muted text-sm text-center">
                  Note: These files will be updated regularly. Visit again for the latest versions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Form;
