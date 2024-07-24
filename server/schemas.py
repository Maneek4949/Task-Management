from pydantic import BaseModel
from datetime import datetime
from models import TaskStatus

class TaskBase(BaseModel):
    title: str
    description: str
    status: TaskStatus = TaskStatus.todo

class TaskCreate(TaskBase):
    pass

class TaskUpdate(BaseModel):
    title: str
    description: str
    status: TaskStatus

class TaskResponse(TaskBase):
    id: int
    created_at: datetime

    class Config:
        orm_mode = True
