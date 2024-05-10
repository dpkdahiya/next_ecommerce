export function GET(request, { params }) {
  return new Response(`Hello, Next.js! with ID ${params.id}`, {
    status: 200,
  });
}
