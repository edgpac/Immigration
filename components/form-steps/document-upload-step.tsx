'use client';

import { Upload, X } from 'lucide-react';
import { Button } from '../ui/button';
import { Label } from '../ui/label';
import { useState } from 'react';

interface DocumentUploadStepProps {
  files: any;
  onChange: (field: string, value: any) => void;
}

export function DocumentUploadStep({ files, onChange }: DocumentUploadStepProps) {
  const [dragOverField, setDragOverField] = useState<string | null>(null);

  const handleFileSelect = (field: string, fileList: FileList | null, multiple: boolean = false) => {
    if (!fileList) return;

    const maxSize = 2 * 1024 * 1024; // 2MB
    const newFiles = Array.from(fileList).filter(file => {
      if (file.size > maxSize) {
        alert(`File ${file.name} is too large. Maximum size is 2MB.`);
        return false;
      }
      return true;
    });

    if (multiple) {
      onChange(field, [...(files[field] || []), ...newFiles]);
    } else if (newFiles.length > 0) {
      onChange(field, newFiles[0]);
    }
  };

  const removeFile = (field: string, index?: number) => {
    if (Array.isArray(files[field])) {
      onChange(field, files[field].filter((_: any, i: number) => i !== index));
    } else {
      onChange(field, null);
    }
  };

  const handleDrop = (e: React.DragEvent, field: string, multiple: boolean = false) => {
    e.preventDefault();
    setDragOverField(null);
    handleFileSelect(field, e.dataTransfer.files, multiple);
  };

  const FileInput = ({ label, field, multiple = false, accept = '.pdf,.jpg,.jpeg,.png' }: any) => {
    const fileValue = files[field];
    const fileArray = Array.isArray(fileValue) ? fileValue : (fileValue ? [fileValue] : []);

    return (
      <div className="space-y-3">
        <Label>{label}</Label>
        <div
          onDragOver={(e) => {
            e.preventDefault();
            setDragOverField(field);
          }}
          onDragLeave={() => setDragOverField(null)}
          onDrop={(e) => handleDrop(e, field, multiple)}
          className={`border-2 border-dashed rounded-lg p-6 text-center transition ${
            dragOverField === field
              ? 'border-primary bg-primary/5'
              : 'border-border hover:border-primary/50'
          }`}
        >
          <input
            type="file"
            id={field}
            onChange={(e) => handleFileSelect(field, e.target.files, multiple)}
            accept={accept}
            multiple={multiple}
            className="hidden"
          />
          <label htmlFor={field} className="cursor-pointer">
            <div className="flex flex-col items-center gap-2">
              <Upload className="w-8 h-8 text-muted-foreground" />
              <span className="text-sm font-medium">Click to upload or drag and drop</span>
              <span className="text-xs text-muted-foreground">PDF, JPG, PNG (Max 2MB)</span>
            </div>
          </label>
        </div>

        {fileArray.length > 0 && (
          <div className="space-y-2">
            {fileArray.map((file: File, idx: number) => (
              <div key={`${file.name}-${idx}`} className="flex items-center justify-between bg-muted/50 p-3 rounded-lg">
                <span className="text-sm">{file.name}</span>
                <button
                  onClick={() => removeFile(field, idx)}
                  className="p-1 hover:bg-muted rounded"
                >
                  <X size={16} />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold">Upload Documents</h2>
      
      {/* Privacy Notice - Prominent at Top */}
      <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-green-100 rounded-lg flex-shrink-0">
            <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <div>
            <h3 className="font-bold text-green-900 mb-2 text-lg flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              Your Documents Are Secure & Confidential
            </h3>
            <p className="text-sm text-green-800 leading-relaxed mb-3">
              We understand you're sharing sensitive personal documents. All files uploaded are:
            </p>
            <ul className="space-y-2 text-sm text-green-800">
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold mt-0.5">✓</span>
                <span><strong>Encrypted immediately</strong> using bank-level SSL/TLS 256-bit encryption</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold mt-0.5">✓</span>
                <span><strong>Stored securely</strong> on protected servers with restricted access</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold mt-0.5">✓</span>
                <span><strong>Handled confidentially</strong> - only our licensed immigration specialists can access your documents</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold mt-0.5">✓</span>
                <span><strong>Protected by law</strong> - we comply with Mexican privacy regulations (LFPDPPP)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold mt-0.5">✓</span>
                <span><strong>Never shared</strong> with unauthorized third parties without your explicit written consent</span>
              </li>
            </ul>
            <p className="text-xs text-green-700 mt-3 italic">
              Your privacy is our priority. We treat your documents with the same care and discretion as if they were our own.
            </p>
          </div>
        </div>
      </div>

      <p className="text-muted-foreground">
        Upload high-quality scans or photos of your documents. Each file must be under 2MB.
      </p>

      <div className="space-y-6">
        <FileInput label="Passport Photo Page (PDF/JPG) *" field="passportPhoto" />
        <FileInput label="Proof of Income (last 6 months)" field="proofOfIncome" multiple />
        <FileInput label="Passport-Sized Photo (white background) *" field="photo" />
        <FileInput label="Birth Certificate (for permanent residency)" field="birthCertificate" />
        <FileInput label="Job Offer Letter (for work permits)" field="jobOfferLetter" />
        <FileInput label="Additional Documents" field="additionalDocuments" multiple />
      </div>

      <div className="bg-accent/10 border border-accent/30 rounded-lg p-4 text-sm">
        <p className="font-semibold text-accent mb-2">File Size Tips:</p>
        <ul className="space-y-1 text-muted-foreground">
          <li>• Compress PDFs using SmallPDF.com or iLovePDF.com</li>
          <li>• Resize images to max 1920px width</li>
          <li>• Use JPG instead of PNG for photos (smaller size)</li>
        </ul>
      </div>

      {/* Security Badge at Bottom */}
      <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground bg-muted/50 px-4 py-3 rounded-lg">
        <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
        <span className="font-medium">All uploads are encrypted and secure - Your data is protected</span>
      </div>
    </div>
  );
}