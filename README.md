# Audio Recognition API

A robust REST API for audio recognition using AudD.io service, built with Node.js and TypeScript.

## Features

- 🎵 Audio recognition using AudD.io
- 🔒 Secure authentication using JWT
- 📝 Comprehensive request validation
- 💾 Search history tracking
- ⚡ Performance optimization with caching
- 📊 Detailed API documentation
- ✅ Extensive test coverage

## Prerequisites

- Node.js >= 18
- MongoDB >= 4.4
- AudD.io API key
- TypeScript >= 4.5

## Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/audio-recognition-api.git
cd audio-recognition-api
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file:
```env
PORT=3000
MONGO_URI=mongodb://localhost:27017/audio-recognition
JWT_SECRET=your-secret-key
AUDD_API_KEY=your-audd-api-key
```

4. Run migrations:
```bash
npm run migrate
```

5. Start the server:
```bash
npm run dev  # Development
npm start    # Production
```

## API Documentation

API documentation is available at `/api-docs` when running the server. You can also find the OpenAPI specification in `docs/openapi.yaml`.

## Testing

```bash
# Run all tests
npm test

# Run tests with coverage
npm run test:coverage

# Run specific test suite
npm test -- --grep "AudioRecognitionService"
```

## Error Handling

The API implements comprehensive error handling:
- Input validation errors
- Authentication errors
- File handling errors
- External API errors
- Database errors

See `docs/ERROR_HANDLING.md` for detailed error codes and responses.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

MIT License - see LICENSE file for details
