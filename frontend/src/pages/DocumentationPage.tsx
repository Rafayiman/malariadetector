import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Book, FileCode, Layers, Lightbulb } from "lucide-react";

const DocumentationPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient-medical">Documentation</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-12">
              Complete guide to using MalariaAI for malaria detection and analysis.
            </p>

            <div className="space-y-8">
              <Card variant="elevated">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg medical-gradient">
                      <Book className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold mb-4">Getting Started</h2>
                      <div className="space-y-4 text-muted-foreground">
                        <div>
                          <h3 className="font-semibold text-foreground mb-2">1. Image Requirements</h3>
                          <ul className="list-disc list-inside space-y-1">
                            <li>Blood smear images in JPG, PNG, or TIFF format</li>
                            <li>Minimum resolution: 500x500 pixels</li>
                            <li>Maximum file size: 10MB</li>
                            <li>Thin blood smear preferred (Giemsa staining)</li>
                          </ul>
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-2">2. Upload Process</h3>
                          <ul className="list-disc list-inside space-y-1">
                            <li>Navigate to the Detection page</li>
                            <li>Click "Upload Image" or drag and drop</li>
                            <li>Optionally add patient information</li>
                            <li>Click "Start Analysis" to begin</li>
                          </ul>
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-2">3. Understanding Results</h3>
                          <ul className="list-disc list-inside space-y-1">
                            <li>Prediction: Positive, Negative, or Uncertain</li>
                            <li>Confidence score: 0-100%</li>
                            <li>Parasite count: Number of parasites detected</li>
                            <li>Severity: Low, Moderate, or High</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card variant="elevated">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg medical-gradient">
                      <Layers className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold mb-4">Model Architecture</h2>
                      <div className="space-y-3 text-muted-foreground">
                        <p>
                          MalariaAI uses a deep learning model based on ResNet50 architecture:
                        </p>
                        <ul className="list-disc list-inside space-y-2">
                          <li><strong>Base Model:</strong> ResNet50 pre-trained on ImageNet</li>
                          <li><strong>Custom Layers:</strong> 512-unit fully connected layer</li>
                          <li><strong>Output:</strong> 2-class classification (Positive/Negative)</li>
                          <li><strong>Training Dataset:</strong> 10,000+ annotated blood smear images</li>
                          <li><strong>Validation Accuracy:</strong> 99.2%</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card variant="elevated">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg medical-gradient">
                      <FileCode className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold mb-4">API Reference</h2>
                      <div className="space-y-4">
                        <div>
                          <h3 className="font-semibold mb-2">POST /api/predict</h3>
                          <p className="text-sm text-muted-foreground mb-2">Analyze blood smear image for malaria detection.</p>
                          <div className="bg-muted p-3 rounded-md text-sm font-mono">
                            <div className="text-muted-foreground">Request:</div>
                            <code>
                              Content-Type: multipart/form-data<br />
                              file: [image file]
                            </code>
                            <div className="text-muted-foreground mt-2">Response:</div>
                            <code>
                              {`{`}<br />
                              &nbsp;&nbsp;"success": true,<br />
                              &nbsp;&nbsp;"prediction": "positive",<br />
                              &nbsp;&nbsp;"confidence": 96.99,<br />
                              &nbsp;&nbsp;"parasiteCount": 48<br />
                              {`}`}
                            </code>
                          </div>
                        </div>
                        <div>
                          <h3 className="font-semibold mb-2">POST /api/generate-report</h3>
                          <p className="text-sm text-muted-foreground mb-2">Generate PDF report with analysis results.</p>
                          <div className="bg-muted p-3 rounded-md text-sm font-mono">
                            <div className="text-muted-foreground">Request:</div>
                            <code>
                              Content-Type: application/json<br />
                              {`{`}<br />
                              &nbsp;&nbsp;"patientInfo": {`{...}`},<br />
                              &nbsp;&nbsp;"results": {`{...}`},<br />
                              &nbsp;&nbsp;"imageData": "base64..."<br />
                              {`}`}
                            </code>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card variant="elevated">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg medical-gradient">
                      <Lightbulb className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold mb-4">Best Practices</h2>
                      <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                        <li>Use high-quality, well-focused microscopy images</li>
                        <li>Ensure proper staining of blood smears</li>
                        <li>Always verify AI results with manual microscopy</li>
                        <li>Document patient consent for image analysis</li>
                        <li>Regularly review analysis history for quality control</li>
                        <li>Report any discrepancies or concerns to our support team</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card variant="elevated">
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-bold mb-4">Need Help?</h2>
                  <p className="text-muted-foreground">
                    If you have questions or need assistance, please contact our support team at{" "}
                    <strong className="text-foreground">support@malariaai.com</strong> or visit our{" "}
                    <a href="/contact" className="text-primary hover:underline">Contact page</a>.
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

export default DocumentationPage;
