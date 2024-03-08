import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { markdownTable } from 'markdown-table';
import { z } from 'zod';

import type { LoaderFunction } from '@/types/markdown-loader';

const exceptionSchema = z.object({
  // Required fields.
  error: z.string().min(1),
  httpStatus: z.number(),
  isPublic: z.boolean(),
  // Optional fields.
  code: z.string().nullable(),
  description: z.string().nullable(),
  message: z.string().nullable(),
  // Internal comment for dev team.
  internalComments: z.string().nullable(),
});

const schema = z.object({
  businessExceptions: z.array(exceptionSchema),
  technicalExceptions: z.array(exceptionSchema),
});

type ExceptionObject = z.infer<typeof exceptionSchema>;

function markdownBold(text: string | number): string {
  return `**${text}**`;
}

function markdownCode(text: string | number): string {
  return String(text).length > 0 ? `\`${text}\`` : String(text);
}

function newLineToBreak(text: string): string {
  return text.replace(/\n/g, '<br />');
}

function getRows(exceptions: Array<ExceptionObject>) {
  return exceptions.map((exception) => [
    markdownCode(exception.httpStatus),
    markdownCode(exception.code || '-'),
    markdownBold(exception.error),
    newLineToBreak(exception.message || '-'),
    newLineToBreak(exception.description || '-'),
  ]);
}

export async function getMarkdownForErrorCodes(options: {
  dirname: string;
  includePublicExceptionsOnly: boolean;
}) {
  const jsonContents = await readFile(path.join(options.dirname, 'error-codes.json'), 'utf-8');
  const json = JSON.parse(jsonContents);

  const data = await schema.parseAsync(json);

  const headers: string[] = [
    'Error Code',
    'Navro Code',
    'Use Case',
    'Error Message',
    'Description',
  ];

  const filterPredicate = (exception: ExceptionObject) => {
    return options.includePublicExceptionsOnly ? exception.isPublic : true;
  };

  return {
    businessExceptions: markdownTable(
      [headers, ...getRows(data.businessExceptions.filter(filterPredicate))],
      {
        alignDelimiters: false,
      },
    ),
    technicalExceptions: markdownTable(
      [headers, ...getRows(data.technicalExceptions.filter(filterPredicate))],
      {
        alignDelimiters: false,
      },
    ),
  };
}

export const loader: LoaderFunction = async (context) => {
  return await getMarkdownForErrorCodes({
    dirname: context.paths.dirname,
    includePublicExceptionsOnly: context.build.target === 'production',
  });
};
