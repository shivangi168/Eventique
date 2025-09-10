# Troubleshooting Guide

## ECONNRESET Error Fixes

The ECONNRESET error has been resolved with the following improvements:

### 1. Server-Side Improvements
- **Enhanced CORS handling** with proper headers
- **Increased timeouts** (Read: 30s, Write: 60s, Idle: 120s)
- **Connection management** with logging
- **Better error handling** in handlers
- **Request validation** and timeout controls

### 2. Client-Side Improvements
- **Retry logic** with exponential backoff
- **Request timeout** handling (30 seconds)
- **Better error messages** and logging
- **Fallback API URL** if environment variable is missing

### 3. Environment Configuration
- **Automatic environment setup** via `setup-env.js`
- **Proper API URL configuration**
- **Server port configuration**

## Quick Start

1. **Set up environment variables:**
   ```bash
   node setup-env.js
   ```

2. **Start the server:**
   ```bash
   cd server
   go run main.go
   ```

3. **Start the frontend:**
   ```bash
   npm run dev
   ```

## Common Issues and Solutions

### Issue: "Could not get response" / "ECONNRESET"
**Solution:** The server now has:
- Better connection handling
- Retry logic on the client
- Proper timeout management
- Enhanced error logging

### Issue: "NEXT_PUBLIC_API_URL is not defined"
**Solution:** Run `node setup-env.js` to create the `.env.local` file

### Issue: Server won't start
**Solution:** 
1. Check if port 8080 is available
2. Ensure Go is installed and in PATH
3. Run `go mod tidy` in the server directory

### Issue: Frontend can't connect to server
**Solution:**
1. Verify server is running on http://localhost:8080
2. Check browser console for CORS errors
3. Ensure `.env.local` file exists with correct API URL

## Server Logs

The server now provides detailed logging:
- Connection events (new/closed)
- Request processing errors
- HTTP error responses
- Graceful shutdown information

## Testing the Fix

1. **Test server health:**
   ```bash
   curl http://localhost:8080/health
   ```

2. **Test API endpoint:**
   ```bash
   curl http://localhost:8080/api/events
   ```

3. **Test with frontend:**
   - Open browser to http://localhost:3000
   - Try signing up/logging in
   - Check browser console for any remaining errors

## Additional Debugging

If you still experience issues:

1. **Check server logs** for connection events
2. **Monitor browser network tab** for failed requests
3. **Verify firewall settings** aren't blocking localhost connections
4. **Try different ports** by modifying the environment variables

## Performance Improvements

The fixes also include:
- **Connection pooling** with keep-alive
- **Request batching** capabilities
- **Memory-efficient** response handling
- **Graceful degradation** on errors
