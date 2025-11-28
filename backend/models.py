from pydantic import BaseModel, Field
from datetime import datetime
from typing import Optional
from bson import ObjectId

class PyObjectId(ObjectId):
    @classmethod
    def __get_validators__(cls):
        yield cls.validate

    @classmethod
    def validate(cls, v):
        if not ObjectId.is_valid(v):
            raise ValueError("Invalid objectid")
        return ObjectId(v)

    @classmethod
    def __modify_schema__(cls, field_schema):
        field_schema.update(type="string")

class LetterModel(BaseModel):
    id: Optional[str] = Field(default=None, alias="_id")
    content: str
    timestamp: datetime = Field(default_factory=datetime.now)
    offered: bool = False

    class Config:
        allow_population_by_field_name = True
        arbitrary_types_allowed = True
        json_encoders = {ObjectId: str}
        schema_extra = {
            "example": {
                "content": "Dear Shyama Ju...",
                "timestamp": "2023-10-27T10:00:00",
                "offered": False
            }
        }
