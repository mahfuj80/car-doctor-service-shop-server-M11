/**
 * install jsonwebtoken
 * jwt.sign(payload, secret, {expiresIn: '2h'})
 * token client
 */

/**
 * how to store token in the client side
 * 1. memory ==> ok type
 * 2. local storage ==> ok type (XSS)
 * 3. cookies: http only
 */

/**
 * 1. set cookies with http only. for development secure: false,
 *
 * 2. cors
 * app.use(
  cors({
    origin: ['http://localhost:5173'],
    credentials: true,
  })
);
 *
 * 3. client side axios setting
 * in axios set withCredentials: true
 */

/**
 * 1. to send cookies from the client make sure you added withCredential true for the api call using axios
 */

/**
 * ---------------------------
 *      MAKE API SECURE
 * ---------------------------
 * The person who should have access
 *
 * concept:
 * 1. assign tow tokens for each person (access token, refresh token)
 * 2. access token contains: user identification (email, role, etc.) valid for a shorter duration
 * 3. refresh token is used: to recreate an access token that was expired.
 * 4. if refresh is invalid then logout the user
 *
 *
 */

/**
 * 1. jwt --> json web token
 * 2. generate a token by using jwt.sign()
 * 3. create api set to cookie. httpOnly, secure, sameSite
 * 4. from client side: axios withCredentials true;
 * 5. cors setup origin and credentials: true;
 */

/**
 * 1. for secure api calls
 * 2. server side: install cookie parse and use it as a middleware
 * 3. req.cookies
 * 4. on client side: make api call using axios withCredentials: true;
 */
