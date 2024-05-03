'use client'

import React from 'react';
import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';

function Page({serviceUrl}) {
  return (
    <div>
        <SwaggerUI url={serviceUrl.concat('/v3/api-docs')} />
    </div>
  )
}

export default Page