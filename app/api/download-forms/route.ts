import { NextRequest, NextResponse } from 'next/server';
import JSZip from 'jszip';

export async function POST(req: NextRequest) {
  try {
    const zip = new JSZip();

    zip.file('FMM-1_Migratory_Form.pdf', 'Sample FMM-1 Form Content');
    zip.file('Residency_Application.pdf', 'Sample Residency Application');
    zip.file('Document_Checklist.pdf', 'Sample Checklist');
    zip.file('Preparation_Guide.pdf', 'Sample Guide');
    zip.file('README.txt', `
Immigration Forms Package
========================

Thank you for submitting your application!

This package contains:
1. FMM-1 Migratory Form (Pre-filled)
2. Residency Application (Pre-filled)
3. Document Checklist for INM Appointment
4. Preparation Guide

Questions? Call 624 125 9640
Los Cabos Immigration Services
    `);

    const zipContent = await zip.generateAsync({ type: 'nodebuffer' });

    return new NextResponse(zipContent, {
      headers: {
        'Content-Type': 'application/zip',
        'Content-Disposition': 'attachment; filename="immigration-forms.zip"',
      },
    });
  } catch (error) {
    console.error('Error generating forms:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to generate forms' },
      { status: 500 }
    );
  }
}
