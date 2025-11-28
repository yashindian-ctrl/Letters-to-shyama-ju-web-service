from fastapi import APIRouter, Body, Request, HTTPException, status
from fastapi.encoders import jsonable_encoder
from typing import List
from models import LetterModel

router = APIRouter()

@router.post("/", response_description="Add new letter", response_model=LetterModel)
async def create_letter(request: Request, letter: LetterModel = Body(...)):
    letter = jsonable_encoder(letter)
    new_letter = await request.app.mongodb["letters"].insert_one(letter)
    created_letter = await request.app.mongodb["letters"].find_one({"_id": new_letter.inserted_id})
    return created_letter

@router.get("/", response_description="List all letters", response_model=List[LetterModel])
async def list_letters(request: Request):
    letters = []
    cursor = request.app.mongodb["letters"].find().sort("timestamp", -1)
    async for document in cursor:
        # Map _id to id for frontend compatibility if needed, though Pydantic handles aliasing
        document["id"] = str(document["_id"])
        letters.append(document)
    return letters

@router.patch("/{id}/offer", response_description="Mark letter as offered", response_model=LetterModel)
async def offer_letter(id: str, request: Request):
    from bson import ObjectId
    
    if not ObjectId.is_valid(id):
        raise HTTPException(status_code=400, detail="Invalid ID format")
        
    update_result = await request.app.mongodb["letters"].update_one(
        {"_id": ObjectId(id)}, {"$set": {"offered": True}}
    )

    if update_result.modified_count == 1:
        if (
            updated_letter := await request.app.mongodb["letters"].find_one({"_id": ObjectId(id)})
        ) is not None:
            updated_letter["id"] = str(updated_letter["_id"])
            return updated_letter

    if (
        existing_letter := await request.app.mongodb["letters"].find_one({"_id": ObjectId(id)})
    ) is not None:
        existing_letter["id"] = str(existing_letter["_id"])
        return existing_letter

    raise HTTPException(status_code=404, detail=f"Letter {id} not found")
