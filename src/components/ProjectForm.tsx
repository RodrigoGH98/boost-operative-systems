import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from '@/contexts/LanguageContext';

interface ProjectFormProps {
  selectedChallenges: string[];
  onToggleChallenge: (challenge: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}

const ProjectForm = ({ selectedChallenges, onToggleChallenge, onSubmit }: ProjectFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    companyName: '',
    role: '',
    email: '',
    phone: '',
    otherChallenge: ''
  });
  const { toast } = useToast();
  const { t } = useLanguage();

  const challenges = [
    t('startProject.challenges.manual'),
    t('startProject.challenges.visibility'),
    t('startProject.challenges.errors'),
    t('startProject.challenges.cost'),
    t('startProject.challenges.integration')
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Prepare data for Supabase
      const submissionData = {
        'Company Name': formData.companyName,
        'Your Role': formData.role,
        'Email': formData.email,
        'WhatsApp / Phone (Optional)': formData.phone ? parseFloat(formData.phone) : null,
        "What's your biggest challenge today?": selectedChallenges.join(', '),
        'Other challenge (Optional)': formData.otherChallenge
      };

      console.log('Submitting data:', submissionData);

      const { error } = await supabase
        .from('Lovable_Boost_Inputs')
        .insert([submissionData]);

      if (error) {
        console.error('Supabase error:', error);
        toast({
          title: "Error",
          description: "There was an error submitting your form. Please try again.",
          variant: "destructive"
        });
      } else {
        console.log('Data submitted successfully');
        toast({
          title: "Success!",
          description: "Your project brief has been submitted successfully.",
        });
        // Call the original onSubmit to show the thank you page
        onSubmit(e);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Error",
        description: "There was an error submitting your form. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="project-form" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold mb-8">{t('startProject.form.title')}</h2>
            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">{t('startProject.form.companyName')}</label>
                  <Input 
                    required
                    value={formData.companyName}
                    onChange={(e) => handleInputChange('companyName', e.target.value)}
                    className="bg-gray-800 border-gray-600 text-white focus:border-blue-400 focus:ring-blue-400" 
                    placeholder={t('startProject.form.companyPlaceholder')} 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">{t('startProject.form.role')}</label>
                  <Select value={formData.role} onValueChange={(value) => handleInputChange('role', value)}>
                    <SelectTrigger className="bg-gray-800 border-gray-600 text-white focus:border-blue-400">
                      <SelectValue placeholder={t('startProject.form.roleSelect')} />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-800 border-gray-600">
                      <SelectItem value="owner">{t('startProject.roles.owner')}</SelectItem>
                      <SelectItem value="director">{t('startProject.roles.director')}</SelectItem>
                      <SelectItem value="ops-manager">{t('startProject.roles.opsManager')}</SelectItem>
                      <SelectItem value="it">{t('startProject.roles.it')}</SelectItem>
                      <SelectItem value="other">{t('startProject.roles.other')}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">{t('startProject.form.email')}</label>
                <Input 
                  type="email" 
                  required
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="bg-gray-800 border-gray-600 text-white focus:border-blue-400 focus:ring-blue-400" 
                  placeholder={t('startProject.form.emailPlaceholder')} 
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">{t('startProject.form.phone')}</label>
                <Input 
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className="bg-gray-800 border-gray-600 text-white focus:border-blue-400 focus:ring-blue-400" 
                  placeholder={t('startProject.form.phonePlaceholder')} 
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-4">{t('startProject.form.challenge')}</label>
                <div className="flex flex-wrap gap-3">
                  {challenges.map((challenge) => (
                    <button
                      key={challenge}
                      type="button"
                      onClick={() => onToggleChallenge(challenge)}
                      className={`px-4 py-2 rounded-lg text-sm transition-colors ${
                        selectedChallenges.includes(challenge)
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                      }`}
                    >
                      {challenge}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">{t('startProject.form.otherChallenge')}</label>
                <Textarea 
                  value={formData.otherChallenge}
                  onChange={(e) => handleInputChange('otherChallenge', e.target.value)}
                  className="bg-gray-800 border-gray-600 text-white focus:border-blue-400 focus:ring-blue-400" 
                  placeholder={t('startProject.form.otherChallengePlaceholder')} 
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  {t('startProject.form.upload')}
                  <span className="text-xs text-gray-400 block mt-1">{t('startProject.form.uploadHint')}</span>
                </label>
                <Input 
                  type="file" 
                  accept=".pdf,.xlsx,.xls,.jpg,.jpeg,.png"
                  className="bg-gray-800 border-gray-600 text-white focus:border-blue-400 focus:ring-blue-400" 
                />
              </div>

              <Button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white py-4 text-lg disabled:opacity-50"
              >
                {isSubmitting ? t('startProject.form.submitting') : t('startProject.form.submit')}
              </Button>
            </form>
          </div>

          <div className="lg:col-span-1">
            <Card className="bg-gray-800/50 border-gray-600 sticky top-24">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6 text-white">{t('startProject.sidebar.title')}</h3>
                <div className="space-y-4">
                  {[
                    t('startProject.sidebar.item1'),
                    t('startProject.sidebar.item2'),
                    t('startProject.sidebar.item3'),
                    t('startProject.sidebar.item4')
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="text-green-400 mt-0.5">✅</div>
                      <p className="text-gray-300">{item}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectForm;
