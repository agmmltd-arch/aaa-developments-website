import { services, siteUrl } from '@/lib/site';
const acceptedOrigins = new Set([siteUrl, 'https://www.aaadevelopment.co.uk', 'https://aaa-developments-padiham.agmm-ltd.workers.dev']);
const reply = (message: string, status: number) => Response.json({message}, {status, headers: {'Cache-Control':'no-store'}});
// A short-lived per-isolate limiter backs up the provider's abuse filtering.
const attempts = new Map<string, {count: number; until: number}>();
export async function POST(request: Request) {
  const origin = request.headers.get('origin');
  const local = process.env.NODE_ENV !== 'production' && origin?.startsWith('http://localhost:');
  if (!origin || (!acceptedOrigins.has(origin) && !local)) return reply('Please send your enquiry through the website form.',403);
  if (!request.headers.get('content-type')?.includes('application/json')) return reply('Invalid request.',415);
  if (Number(request.headers.get('content-length') || 0) > 10000) return reply('Your message is too long.',413);
  const key = request.headers.get('cf-connecting-ip') || 'local';
  const now = Date.now();
  for (const [key,item] of attempts) if (item.until <= now) attempts.delete(key);
  const count = attempts.get(key) || {count:0,until:now+600000};
  if (count.count >= 5) return reply('Please wait a few minutes, or call Kelvin directly.',429);
  count.count++; attempts.set(key,count);
  let body: Record<string,unknown>;
  try { const text = await request.text(); if(text.length > 10000) return reply('Your message is too long.',413); body=JSON.parse(text); } catch { return reply('Please check the form and try again.',400); }
  if (!body || typeof body !== 'object' || Array.isArray(body)) return reply('Invalid request.',400);
  const field = (name:string,max:number) => typeof body[name] === 'string' ? (body[name] as string).trim().slice(0,max) : '';
  if(field('website',100)) return reply('Please call or email to discuss your job.',400);
  const name=field('name',100), phone=field('phone',25), postcode=field('postcode',12), service=field('service',80), notes=field('notes',2000), email=field('email',150);
  if(name.length < 2 || !/^[+\d\s().-]{10,25}$/.test(phone) || !postcode || notes.length < 5 || !services.some(s=>s.name===service) || (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))) return reply('Please check your name, phone, postcode, service and job details.',400);
  try {
    const result = await fetch('https://formsubmit.co/ajax/agmm.ltd@gmail.com', {
      method:'POST', headers:{'Content-Type':'application/json','Accept':'application/json','Referer':siteUrl+'/contact'},
      body:JSON.stringify({name,phone,postcode,service,notes,...(email?{email}:{}),_subject:'AAA Developments — website quote request',_cc:'info@aaadevelopment.co.uk',_template:'table',_captcha:'false'}), signal:AbortSignal.timeout(15000)
    });
    const data = await result.json() as {success?: boolean | string; message?: string};
    if(/activat|confirm.*email/i.test(data.message || '')) return reply('Email delivery is being set up. Please use the WhatsApp or email option below for this enquiry.',503);
    if(!result.ok || (data.success !== true && data.success !== 'true')) return reply('Your enquiry could not be sent. Please try again or call Kelvin.',502);
    return reply('Your enquiry has been sent. Kelvin will be in touch to discuss the job.',200);
  } catch { return reply('Your enquiry could not be sent. Please use WhatsApp, email or call Kelvin.',502); }
}
