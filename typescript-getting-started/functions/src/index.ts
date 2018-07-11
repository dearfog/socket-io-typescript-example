'use strict';

import * as functions from 'firebase-functions'

// if you need to use the Firebase Admin SDK, uncomment the following:
// import * as admin from 'firebase-admin'


// Create and Deploy Cloud Function with TypeScript using script that is
// defined in functions/package.json:
//    cd functions
//    npm run deploy
import { ChatServer } from './chat-server';

let chatApp = new ChatServer().getApp();
export const app = functions.https.onRequest((request, response) => {
    if (!request.path) {
      request.url = `/${request.url}` // prepend '/' to keep query params if any
    }
    return app(request, response)
  });
