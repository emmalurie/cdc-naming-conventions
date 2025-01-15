import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const FileNamer = () => {
  const [documentType, setDocumentType] = useState('discovery');
  const [requestNumber, setRequestNumber] = useState('1');
  const [clientName, setClientName] = useState('');
  const [version, setVersion] = useState('v1');
  
  // Document type options
  const documentTypes = {
    discovery: {
      label: 'Discovery Request',
      prefix: 'Specific Disco Req'
    },
    investigation: {
      label: 'Investigation Request',
      prefix: 'Invest Req'
    },
    immigration: {
      label: 'Immigration Consultation',
      prefix: 'Immig Consult'
    },
    motion: {
      label: 'Motion',
      prefix: ''
    }
  };

  // Motion types (only shown if motion is selected)
  const motionTypes = [
    { value: 'serna', label: 'Serna Motion', prefix: 'Serna Brf' },
    { value: '1538', label: '1538 Motion', prefix: '1538 Reply' },
    { value: 'williams', label: 'Williams Brief', prefix: 'Wms Brf' },
    { value: 'opposition', label: 'DA Opposition', prefix: 'DA Opp' }
  ];

  const [motionType, setMotionType] = useState(motionTypes[0].value);

  // Version options including Final
  const versionOptions = ['v1', 'v2', 'v3', 'v4', 'v5', 'Final'];

  // Generate the filename based on current selections
  const generateFilename = () => {
    let filename = '';
    
    if (documentType === 'motion') {
      const selectedMotion = motionTypes.find(m => m.value === motionType);
      filename = `${selectedMotion.prefix} ${clientName}`;
    } else {
      const prefix = documentTypes[documentType].prefix;
      filename = `${prefix} #${requestNumber} ${clientName}`;
    }

    filename += ` ${version}`;
    return filename;
  };

  return (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle>CDC File Naming Assistant</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <label className="block text-sm font-medium">Document Type</label>
          <select 
            className="w-full p-2 border rounded"
            value={documentType}
            onChange={(e) => setDocumentType(e.target.value)}
          >
            {Object.entries(documentTypes).map(([value, { label }]) => (
              <option key={value} value={value}>{label}</option>
            ))}
          </select>
        </div>

        {documentType === 'motion' && (
          <div className="space-y-2">
            <label className="block text-sm font-medium">Motion Type</label>
            <select 
              className="w-full p-2 border rounded"
              value={motionType}
              onChange={(e) => setMotionType(e.target.value)}
            >
              {motionTypes.map(motion => (
                <option key={motion.value} value={motion.value}>{motion.label}</option>
              ))}
            </select>
          </div>
        )}

        {documentType !== 'motion' && (
          <div className="space-y-2">
            <label className="block text-sm font-medium">Request Number</label>
            <input 
              type="number"
              className="w-full p-2 border rounded"
              value={requestNumber}
              onChange={(e) => setRequestNumber(e.target.value)}
              min="1"
            />
          </div>
        )}

        <div className="space-y-2">
          <label className="block text-sm font-medium">Client Name</label>
          <input 
            type="text"
            className="w-full p-2 border rounded"
            value={clientName}
            onChange={(e) => setClientName(e.target.value)}
            placeholder="Enter client's last name"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium">Version</label>
          <select 
            className="w-full p-2 border rounded"
            value={version}
            onChange={(e) => setVersion(e.target.value)}
          >
            {versionOptions.map(v => (
              <option key={v} value={v}>{v}</option>
            ))}
          </select>
        </div>

        <div className="mt-6 p-4 bg-gray-100 rounded">
          <p className="text-sm font-medium">Generated Filename:</p>
          <p className="mt-1 text-lg font-mono">{generateFilename()}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default FileNamer;