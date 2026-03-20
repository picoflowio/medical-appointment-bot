# picoflow.io — Medical Appointment Bot

NestJS + Picoflow demo that acts like a clinic receptionist: collects symptoms, proposes doctors, books a slot, and ends the chat. Flows live in `src/myflow/medical-flow`.

## Quick start
```sh
npm install
npm run start:dev   # http://localhost:8000, Swagger at /api
```

## Configure
Create `.env` in repo root:
```
PICOFLOW_KEY=<picoflow dev key>
GEMINI_KEY=<gemini api key>
OPENAI_KEY=<optional>

LLM_RETRY=3
LLM_TEMPERATURE=0.5
SESSION_EXPIRATION=50000

DOCUMENT_DB=MONGO
MONGODB_URL=mongodb://localhost:27017/?directConnection=true
MONGODB_NAME=picoflow
MONGODB_COLLECTION=sessions
```
Swap Mongo for Cosmos by setting `DOCUMENT_DB=COSMO` and providing emulator URLs.

## API
- `POST /ai/run` — body `{ message, flowName, config? }`, header `CHAT_SESSION_ID` optional. Returns bot message + session id.
- `POST /ai/end` — header `CHAT_SESSION_ID` required. Marks session complete.
- `GET /healthcheck` — liveness probe.

Flow registration and model binding happen in `src/controllers/chat-controller.ts`:
- Flow: `MedicalFlow` (SymptomsStep → BookingStep → EndStep)
- Model: Gemini 2.5 Pro via `ChatGoogleGenerativeAI`

## Code map
- Flow shell: `src/myflow/medical-flow/medical-flow.ts`
- Steps: `symptoms-step.ts`, `booking-step.ts`
- Engine wiring: `src/flow.module.ts`, `src/app.module.ts`
- Bootstrap + Swagger: `src/main.ts`

## Testing notes
- No automated tests are bundled; run manual curl calls as shown above.
- Ensure `flowName` is exactly `MedicalFlow` and keys are set or the model call will fail.

## License
UNLICENSED (demo use only).
