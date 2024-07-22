from sqlalchemy import Column, Integer, String, DateTime
from datetime import datetime
from .database import Base
from enum import Enum

class TaskStatus(str, Enum):
    todo = "todo"
    in_progress = "in_progress"
    done = "done"

class Task(Base):
    __tablename__ = "tasks"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, index=True)
    description = Column(String)
    status = Column(String, default=TaskStatus.todo)
    created_at = Column(DateTime, default=datetime.today())
