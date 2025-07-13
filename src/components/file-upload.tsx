import { File, Upload, X } from 'lucide-react';
import { useDropzone } from 'react-dropzone';
import React, { useEffect } from 'react';

import { cn } from '@/lib/utils';

import { FormLabel } from './ui/form';
import { FileUpload } from '@/types';

export default function FileUploadComponent({
    label,
    files,
    setFiles,
    maxFiles = 1,
}: {
    label: string;
    files: FileUpload[];
    setFiles: React.Dispatch<React.SetStateAction<FileUpload[]>>;
    maxFiles?: number;
}) {
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop: (acceptedFiles) => {
            setFiles([
                ...files,
                ...acceptedFiles.map((file) =>
                    Object.assign(file, {
                        preview: URL.createObjectURL(file),
                    })
                ),
            ]);
        },
        accept: {
            'image/png': ['.png', '.PNG', '.jpg', '.jpeg', '.JPEG', '.svg', '.SVG'],
            'application/pdf': ['.pdf', '.PDF'],
        },
        maxFiles: maxFiles,
        maxSize: 1024 * 1024 * 4,
    });
    const fileSize = (file: FileUpload) => {
        const sizeInBytes = file.size;
        const sizeInKB = sizeInBytes / 1024;
        const sizeInMB = sizeInKB / 1024;
        return sizeInMB.toFixed(2);
    }

    const thumbs = files.map((file) => (
        <div className="w-full h-12 rounded-md overflow-hidden relative" key={file.preview}>
            <div className="w-fit h-full">
                {file.type === 'application/pdf' ? (
                    <div className="flex gap-4 text-sm">
                        <File className="w-10 h-10 text-muted-foreground" />
                        <div>
                            <p className="text-sm text-muted-foreground">{file.name}</p>
                            <p className="text-xs text-muted-foreground">{fileSize(file)} MB</p>
                        </div>
                    </div>
                ) : (
                    <img className="w-full h-full object-cover" src={file.preview} />
                )}
            </div>
            <button
                className="absolute top-0.5 right-0.5 bg-primary rounded-full p-1"
                onClick={() => {
                    setFiles(files.filter((f) => f.preview !== file.preview));
                    URL.revokeObjectURL(file.preview);
                }}
            >
                <X className="w-4 h-4 text-white" />
            </button>
        </div>
    ));

    useEffect(() => {
        // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
        return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
    }, [files]);

    return (
        <div className="space-y-2">
            <FormLabel className="!text-gray-800">{label}</FormLabel>

            <div
                {...getRootProps()}
                className={cn('border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center', isDragActive && 'border-primary')}
            >
                <input {...getInputProps()} />
                <Upload className="h-8 w-8 text-muted-foreground mb-2" />
                <p className="text-sm text-muted-foreground mb-1">Drag and drop your {label} here</p>
                <p className="text-xs text-muted-foreground mb-4">PNG, JPG, SVG, PDF, max 4MB</p>
            </div>

            <aside className="flex flex-wrap gap-2">{thumbs}</aside>

        </div>
    );
}
