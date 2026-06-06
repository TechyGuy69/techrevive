'use server';
/**
 * @fileOverview An AI-powered diagnostic tool for computer issues.
 *
 * - troubleshootComputerIssue - A function that diagnoses a computer problem and suggests fixes.
 * - TroubleshootComputerIssueInput - The input type for the troubleshootComputerIssue function.
 * - TroubleshootComputerIssueOutput - The return type for the troubleshootComputerIssue function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const TroubleshootComputerIssueInputSchema = z.object({
  problemDescription: z
    .string()
    .describe('A detailed description of the computer or software problem the user is experiencing.'),
});
export type TroubleshootComputerIssueInput = z.infer<typeof TroubleshootComputerIssueInputSchema>;

const TroubleshootComputerIssueOutputSchema = z.object({
  diagnosisSummary: z.string().describe('A brief summary of the potential diagnosis for the problem.'),
  troubleshootingSteps: z
    .array(z.string())
    .describe('An array of actionable troubleshooting steps or potential fixes for the user to try.'),
  disclaimer: z
    .string()
    .describe(
      'A disclaimer reminding the user that this is an AI tool and professional help might be needed, and to contact TECHREVIVE if issues persist.'
    ),
});
export type TroubleshootComputerIssueOutput = z.infer<typeof TroubleshootComputerIssueOutputSchema>;

export async function troubleshootComputerIssue(
  input: TroubleshootComputerIssueInput
): Promise<TroubleshootComputerIssueOutput> {
  return troubleshootComputerIssueFlow(input);
}

const prompt = ai.definePrompt({
  name: 'troubleshootComputerIssuePrompt',
  input: {schema: TroubleshootComputerIssueInputSchema},
  output: {schema: TroubleshootComputerIssueOutputSchema},
  prompt: `You are an AI-powered computer troubleshooting assistant for TECHREVIVE, a computer service brand.
Your goal is to help users diagnose and potentially fix common computer and software issues.

Analyze the user's problem description and provide:
1. A brief summary of the potential diagnosis.
2. A list of numbered, actionable troubleshooting steps or potential fixes.
3. A disclaimer that this is an AI tool and professional help might be needed, encouraging them to contact TECHREVIVE if the issue persists.

Problem Description: {{{problemDescription}}}`,
});

const troubleshootComputerIssueFlow = ai.defineFlow(
  {
    name: 'troubleshootComputerIssueFlow',
    inputSchema: TroubleshootComputerIssueInputSchema,
    outputSchema: TroubleshootComputerIssueOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
