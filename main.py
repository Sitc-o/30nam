from fastapi import FastAPI, Request
from fastapi.responses import JSONResponse
from fastapi.staticfiles import StaticFiles
import json
import os

app = FastAPI()

WISHES_FILE = "wishes.json"

@app.get("/api/wishes")
def get_wishes():
    if not os.path.exists(WISHES_FILE):
        return []
    with open(WISHES_FILE, "r", encoding="utf-8") as f:
        try:
            wishes = json.load(f)
        except json.JSONDecodeError:
            wishes = []
    return wishes

@app.post("/api/wishes")
async def save_wish(request: Request):
    try:
        data = await request.json()
    except:
        return JSONResponse(status_code=400, content={"success": False, "message": "Invalid JSON data"})
        
    wish_text = data.get("text", "")
    if not wish_text:
        return JSONResponse(status_code=400, content={"success": False, "message": "No text provided"})
    
    # Read existing
    if not os.path.exists(WISHES_FILE):
        wishes = []
    else:
        with open(WISHES_FILE, "r", encoding="utf-8") as f:
            try:
                wishes = json.load(f)
            except json.JSONDecodeError:
                wishes = []
                
    # Append new wish
    wishes.append(wish_text)
    
    # Save back
    with open(WISHES_FILE, "w", encoding="utf-8") as f:
        json.dump(wishes, f, ensure_ascii=False, indent=4)
        
    return {"success": True}

# Serve static files for the flipbook (must be at the bottom so it acts as fallback)
app.mount("/", StaticFiles(directory=".", html=True), name="static")

