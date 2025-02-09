'use client';

import * as React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import Cookies from 'js-cookie';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { CheckIcon } from '@radix-ui/react-icons';
import { Checkbox } from '@/components/ui/checkbox';
import { useSession } from 'next-auth/react';
import { DefaultSession } from 'next-auth';
import { useParams } from 'next/navigation';
import { toast } from '@/components/ui/use-toast';
interface CustomSession extends DefaultSession {
  token: string;
}
const formSchema = z.object({
  desired_price: z.string().min(1, {
    message: 'Desired price must be at least 1 characters.'
  }),
  label: z.string(),
  is_notify: z.boolean()
});

export default function AddWatchForm() {
  const { data: session } = useSession();
  const { id } = useParams();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      desired_price: '',
      label: '',
      is_notify: true
    }
  });

  if (session) {
    console.log(
      '🚀 ~ AddWatchForm ~ session:',
      (session as CustomSession)?.token
    );
  }

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (values.is_notify) {
      console.log('Notify me is checked');
    }
    const token = Cookies.get('authjs.session-token');
    console.log('🚀 ~ fetchProductListData ~ token:', token);

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/watchlist/user/addwatchListProducts`,
      {
        method: 'POST',
        body: JSON.stringify({
          product_id: id,
          desired_price: values.desired_price,
          label: values.label,
          is_notify: values.is_notify
        }),
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${(session as CustomSession)?.token}`
        }
      }
    );
    const data = await res.json();
    if (data?.isSuccess) {
      console.log('Product added successfully');
      toast({
        title: `${data.message}`,
        variant: 'default'
      });
    }
    console.log(data);
  }

  return (
    <Card className="mx-auto w-full">
      <CardHeader>
        <CardTitle className="text-left text-2xl font-bold">
          Add Watched Product
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <FormField
                control={form.control}
                name="desired_price"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Desired Price</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your desired price"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="label"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Label</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Enter your lebel"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="is_notify"
              render={({ field }) => (
                <FormItem className="flex items-center justify-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    >
                      <CheckIcon className="mr-2 h-4 w-4" />
                    </Checkbox>
                  </FormControl>
                  <FormLabel>Notify me</FormLabel>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
