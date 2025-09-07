import Head from 'next/head'
import WritingChatbot from '../components/WritingChatbot'

export default function Home() {
  return (
    <div>
      <Head>
        <title>SRL Writing Assistant</title>
        <meta name="description" content="Self-Regulated Learning Writing Chatbot" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          <WritingChatbot />
        </div>
      </main>
    </div>
  )
}
