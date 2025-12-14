import asyncio
import os
from motor.motor_asyncio import AsyncIOMotorClient
from dotenv import load_dotenv

load_dotenv()

async def ping_server():
    mongo_url = os.getenv("MONGO_URL")
    print(f"Testing connection to: {mongo_url.split('@')[1] if '@' in mongo_url else 'localhost'}")
    
    try:
        client = AsyncIOMotorClient(mongo_url)
        # Send a ping to confirm a successful connection
        await client.admin.command('ping')
        print("Pinged your deployment. You successfully connected to MongoDB!")
        
        db = client.letters_db
        cursor = db.letters.find()
        letters = await cursor.to_list(length=100)
        print(f"Found {len(letters)} letters:")
        for letter in letters:
            print(f"Full Doc: {letter}")
        
    except Exception as e:
        print(f"Connection failed: {e}")

if __name__ == "__main__":
    asyncio.run(ping_server())
