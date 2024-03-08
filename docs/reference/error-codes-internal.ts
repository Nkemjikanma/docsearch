import type { LoaderFunction } from '@/types/markdown-loader';

import { getMarkdownForErrorCodes } from './error-codes.js';

export const loader: LoaderFunction = async (context) => {
  return await getMarkdownForErrorCodes({
    dirname: context.paths.dirname,
    // For the internal page we always want to display all errors.
    includePublicExceptionsOnly: false,
  });
};
