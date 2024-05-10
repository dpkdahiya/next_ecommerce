export function GET() {
  return new Response("Hello, Next.js!", {
    status: 200,
  });
}

export function POST() {
  return new Response("Hello, POST Next.js!", {
    status: 200,
  });
}
