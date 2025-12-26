import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, AlertTriangle, CheckCircle, XCircle, Scale } from "lucide-react";

const TermsOfServicePage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Terms of <span className="text-gradient-medical">Service</span>
            </h1>
            <p className="text-muted-foreground mb-8">
              Last updated: December 26, 2025
            </p>

            <div className="space-y-8">
              <Card variant="elevated">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg medical-gradient">
                      <FileText className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold mb-2">Agreement to Terms</h2>
                      <p className="text-muted-foreground">
                        By accessing or using MalariaAI's malaria detection service, you agree to be bound by these 
                        Terms of Service. If you disagree with any part of these terms, you may not access the service.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card variant="elevated">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg medical-gradient">
                      <AlertTriangle className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold mb-4">Medical Disclaimer</h2>
                      <div className="space-y-3 text-muted-foreground">
                        <p className="font-semibold text-warning">
                          IMPORTANT: This service is intended as a diagnostic aid only and should NOT replace professional medical judgment.
                        </p>
                        <ul className="list-disc list-inside space-y-2">
                          <li>Results must be verified by qualified healthcare professionals</li>
                          <li>Do not make treatment decisions based solely on AI analysis</li>
                          <li>Always confirm with microscopy or other standard diagnostic methods</li>
                          <li>This tool is not FDA-approved for diagnostic use</li>
                          <li>Consult with licensed medical practitioners for diagnosis and treatment</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card variant="elevated">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg medical-gradient">
                      <CheckCircle className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold mb-4">Acceptable Use</h2>
                      <p className="text-muted-foreground mb-3">You agree to use the service only for:</p>
                      <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                        <li>Legitimate medical screening and diagnostic purposes</li>
                        <li>Research and educational activities with proper authorization</li>
                        <li>Clinical workflow support in healthcare settings</li>
                        <li>Preliminary analysis of blood smear samples</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card variant="elevated">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg medical-gradient">
                      <XCircle className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold mb-4">Prohibited Activities</h2>
                      <p className="text-muted-foreground mb-3">You may NOT:</p>
                      <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                        <li>Use the service as the sole basis for patient treatment</li>
                        <li>Upload images without proper patient consent</li>
                        <li>Attempt to reverse-engineer or copy our AI models</li>
                        <li>Share or resell access to the service</li>
                        <li>Use the service for any illegal or unauthorized purpose</li>
                        <li>Violate HIPAA or other healthcare privacy regulations</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card variant="elevated">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg medical-gradient">
                      <Scale className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold mb-4">Limitation of Liability</h2>
                      <div className="space-y-3 text-muted-foreground">
                        <p>
                          MalariaAI and its affiliates shall not be liable for any indirect, incidental, special, 
                          consequential, or punitive damages resulting from:
                        </p>
                        <ul className="list-disc list-inside space-y-2">
                          <li>Your use or inability to use the service</li>
                          <li>False negatives, false positives, or diagnostic errors</li>
                          <li>Unauthorized access to your data</li>
                          <li>Service interruptions or technical failures</li>
                          <li>Medical decisions made based on the service results</li>
                        </ul>
                        <p className="font-semibold text-foreground mt-4">
                          Maximum liability is limited to the amount paid for the service in the past 12 months.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card variant="elevated">
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-bold mb-4">Intellectual Property</h2>
                  <p className="text-muted-foreground mb-3">
                    All content, features, and functionality of the service are owned by MalariaAI and are 
                    protected by copyright, trademark, and other intellectual property laws.
                  </p>
                </CardContent>
              </Card>

              <Card variant="elevated">
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-bold mb-4">Changes to Terms</h2>
                  <p className="text-muted-foreground">
                    We reserve the right to modify these terms at any time. We will notify users of significant 
                    changes via email or through the service. Continued use after changes constitutes acceptance 
                    of the modified terms.
                  </p>
                </CardContent>
              </Card>

              <Card variant="elevated">
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
                  <p className="text-muted-foreground">
                    For questions about these Terms of Service, contact us at:
                  </p>
                  <p className="mt-3 text-foreground">
                    <strong>Email:</strong> legal@malariaai.com<br />
                    <strong>Address:</strong> 123 Medical Innovation Drive, San Francisco, CA 94102
                  </p>
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

export default TermsOfServicePage;
