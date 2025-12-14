import asyncio
import os
from motor.motor_asyncio import AsyncIOMotorClient
from dotenv import load_dotenv

load_dotenv()

async def clean_db():
    mongo_url = os.getenv("MONGO_URL")
    try:
        client = AsyncIOMotorClient(mongo_url)
        db = client.letters_db
        
        # Delete documents with null _id
        result = await db.letters.delete_many({"_id": None})
        print(f"Deleted {result.deleted_count} documents with null _id")
        
        # Verify remaining documents
        cursor = db.letters.find()
        letters = await cursor.to_list(length=100)
        print(f"Remaining letters: {len(letters)}")
        for letter in letters:
            print(f"ID: {letter.get('_id')}, Content: {letter.get('content')}")
            
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    asyncio.run(clean_db())
