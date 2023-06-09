import { useEffect, useState } from 'react';
import Head from 'next/head';
import { Clouds, CloudsContainer, QuoteStyle } from '../styles/Motto.js';
import Header from '@/components/Header/index.js';
import { FaQuoteLeft } from 'react-icons/fa';
import { FaQuoteRight } from 'react-icons/fa';

export default function Motto() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(
      'https://api.quotable.io/quotes/random?tags=motivational,inspirational',
    )
      .then((response) => response.json())
      .then((data) => {
        setQuote(data[0].content);
        setAuthor(data[0].author);
        setIsLoading(false);
        console.log(data);
      })
      .catch((error) => console.error(error));
  }, []);

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  const quoteLength = quote.length;
  const dynamicHeight = quoteLength * 1;

  return (
    <>
      <Head>
        <title>Motto</title>
      </Head>
      <Header />

      <div style={{ display: 'flex', flexGrow: 1 }}>
        <CloudsContainer>
          <Clouds
            src="/img/clouds.png"
            alt="clouds"
            style={{ height: '100%', width: '100%', objectFit: 'cover' }}
          />
          <QuoteStyle style={{ minHeight: `${dynamicHeight}px` }}>
            <FaQuoteLeft
              size={24}
              style={{ position: 'absolute', top: -30, left: -30 }}
            />
            <p>{quote}</p>
            <p>- {author}</p>
            <FaQuoteRight
              size={24}
              style={{ position: 'absolute', bottom: -30, right: -30 }}
            />
          </QuoteStyle>
        </CloudsContainer>
      </div>
    </>
  );
}
