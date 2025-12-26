import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Lock, Eye, UserCheck, Database, Globe } from "lucide-react";

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Privacy <span className="text-gradient-medical">Policy</span>
            </h1>
            <p className="text-muted-foreground mb-8">
              Last updated: December 26, 2025
            </p>

            <div className="space-y-8">
              <Card variant="elevated">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg medical-gradient">
                      <Shield className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold mb-2">Introduction</h2>
                      <p className="text-muted-foreground">
                        At MalariaAI, we take your privacy seriously. This Privacy Policy explains how we collect, 
                        use, disclose, and safeguard your information when you use our malaria detection service.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card variant="elevated">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg medical-gradient">
                      <Database className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
                      <div className="space-y-3 text-muted-foreground">
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">Medical Images</h3>
                          <p>Blood smear images you upload for analysis. These are processed temporarily and not stored permanently unless you explicitly save them.</p>
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">Patient Information</h3>
                          <p>Optional patient details you provide, including patient ID, age, gender, and clinical notes.</p>
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">Usage Data</h3>
                          <p>Information about how you interact with our service, including timestamps, analysis results, and device information.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card variant="elevated">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg medical-gradient">
                      <Lock className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
                      <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                        <li>To provide and improve our malaria detection service</li>
                        <li>To generate analysis reports and recommendations</li>
                        <li>To maintain and enhance the accuracy of our AI model</li>
                        <li>To comply with legal obligations and healthcare regulations</li>
                        <li>To communicate with you about service updates</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card variant="elevated">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg medical-gradient">
                      <Eye className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold mb-4">Data Security</h2>
                      <p className="text-muted-foreground mb-3">
                        We implement industry-standard security measures to protect your data:
                      </p>
                      <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                        <li>End-to-end encryption for data transmission</li>
                        <li>Secure cloud storage with HIPAA compliance</li>
                        <li>Regular security audits and penetration testing</li>
                        <li>Access controls and authentication protocols</li>
                        <li>Automatic data anonymization for research purposes</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card variant="elevated">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg medical-gradient">
                      <UserCheck className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold mb-4">Your Rights</h2>
                      <p className="text-muted-foreground mb-3">You have the right to:</p>
                      <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                        <li>Access your personal data and analysis history</li>
                        <li>Request correction of inaccurate data</li>
                        <li>Delete your data from our systems</li>
                        <li>Export your data in a portable format</li>
                        <li>Opt-out of data collection for research purposes</li>
                        <li>Withdraw consent at any time</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card variant="elevated">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg medical-gradient">
                      <Globe className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                      <p className="text-muted-foreground">
                        If you have any questions about this Privacy Policy or our data practices, please contact us at:
                      </p>
                      <p className="mt-3 text-foreground">
                        <strong>Email:</strong> privacy@malariaai.com<br />
                        <strong>Address:</strong> 123 Medical Innovation Drive, San Francisco, CA 94102
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicyPage;
