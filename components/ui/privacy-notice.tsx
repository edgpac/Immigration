import { Shield, Lock } from 'lucide-react';

export function PrivacyNotice() {
  return (
    <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6 flex items-start gap-3">
      <Shield className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
      <div className="text-sm">
        <p className="font-semibold text-green-900 mb-1">
          🔒 Your Information is Secure & Confidential
        </p>
        <p className="text-green-800">
          All data is encrypted using industry-standard SSL/TLS protocols. We comply with Mexican privacy laws (LFPDPPP) 
          and maintain strict confidentiality. Your information will only be used to process your immigration application 
          and will never be shared without your explicit consent.
        </p>
      </div>
    </div>
  );
}

export function SmallPrivacyBadge() {
  return (
    <div className="flex items-center gap-2 text-xs text-muted-foreground bg-muted/50 px-3 py-2 rounded-lg">
      <Lock className="w-3 h-3 text-green-600" />
      <span>Secure & Confidential - Protected by SSL Encryption</span>
    </div>
  );
}
