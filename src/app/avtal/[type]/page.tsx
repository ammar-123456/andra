import { notFound } from 'next/navigation';
import ContractTemplate from '@/components/contracts/ContractTemplate';
import Link from 'next/link';

interface ContractPageProps {
  params: {
    type: string;
  };
}

export default function ContractPage({ params }: ContractPageProps) {
  const validTypes = ['bokforing', 'arsredovisning', 'loneadministration', 'radgivning'];
  
  if (!validTypes.includes(params.type)) {
    notFound();
  }
  
  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-16">
        <nav className="flex mb-8 text-sm">
          <Link href="/" className="text-gray-500 hover:text-blue-500">Hem</Link>
          <span className="mx-2 text-gray-500">/</span>
          <Link href="/avtal" className="text-gray-500 hover:text-blue-500">Avtal</Link>
          <span className="mx-2 text-gray-500">/</span>
          <span className="text-gray-700">
            {params.type === 'bokforing' && 'Bokföringsavtal'}
            {params.type === 'arsredovisning' && 'Årsredovisningsavtal'}
            {params.type === 'loneadministration' && 'Löneadministrationsavtal'}
            {params.type === 'radgivning' && 'Rådgivningsavtal'}
          </span>
        </nav>
        
        <ContractTemplate contractType={params.type} />
        
        <div className="mt-12 text-center">
          <Link 
            href="/avtal" 
            className="text-blue-500 hover:text-blue-600 font-medium flex items-center justify-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Tillbaka till alla avtal
          </Link>
        </div>
      </div>
    </div>
  );
}
