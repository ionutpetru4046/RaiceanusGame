import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { AlertTriangle, ArrowLeft } from 'lucide-react';

export default function AuthCodeErrorPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-destructive/5 px-4">
      <div className="w-full max-w-md space-y-6">
        <Card>
          <CardHeader className="text-center">
            <div className="mx-auto w-12 h-12 bg-destructive/10 rounded-full flex items-center justify-center mb-4">
              <AlertTriangle className="w-6 h-6 text-destructive" />
            </div>
            <CardTitle className="text-2xl">Authentication Error</CardTitle>
            <CardDescription>
              There was a problem signing you in. This could be due to an expired link or a configuration issue.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-sm text-muted-foreground space-y-2">
              <p>Possible causes:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>The sign-in link has expired</li>
                <li>You clicked the link on a different device</li>
                <li>There&apos;s a temporary server issue</li>
              </ul>
            </div>

            <div className="flex flex-col space-y-2">
              <Button asChild>
                <Link href="/auth/signin">
                  Try Signing In Again
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Home
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
