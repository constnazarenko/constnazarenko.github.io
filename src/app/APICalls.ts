import { useState } from 'react';

import { getRsaEncryptedSekurityKey } from './utils';

const makeAPICall = async (
  url,
  postData = null,
  authToken = null,
  method = 'POST',
  plainResponse = false,
  useSecurityKey = false,
) => {
  interface Init {
    method: string;
    headers: Record<string, string>;
    body?: string;
  }

  const init: Init = {
    method,
    headers: {
      'Content-Type': 'application/json',
      'source-app': 'WoH',
      'app-id': 'WoH',
    },
  };
  if (useSecurityKey) {
    init.headers['security-key'] = getRsaEncryptedSekurityKey();
  }
  if (authToken) {
    init.headers.Authorization = `Bearer ${authToken}`;
  }
  if (postData) {
    init.body = JSON.stringify(postData);
  }
  const response = await fetch(url, init);

  const decodedResponse = await (plainResponse ? response.text() : response.json());

  if (!response.ok) {
    console.error('API call error', response);
    throw new Error(plainResponse ? decodedResponse : decodedResponse.message || decodedResponse.errorMessage);
  }

  return decodedResponse;
};

const useCallAPI = () => {
  const [response, setResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = async (url, postData = null, authToken = null, method = 'POST') => {
    setIsLoading(true);
    setResponse(null);
    setError(null);

    try {
      const result = await makeAPICall(url, postData, authToken, method);
      setResponse(result);
    } catch (error) {
      setError(error.message);
      setResponse(null);
    } finally {
      setIsLoading(false);
    }
  };

  return { response, isLoading, error, sendRequest };
};

export { makeAPICall, useCallAPI };
